/* Objectif CRPE L3 — application monopage (sans dépendance).
   Contenus : js/data/*.js (window.SUBJECTS, window.POSITIONNEMENT, window.CONCOURS). */
(function () {
  'use strict';

  var SUBJECTS = window.SUBJECTS || [];
  var POS = window.POSITIONNEMENT || {};
  var CONCOURS = (window.CONCOURS || []).slice();
  var app = document.getElementById('app');

  /* Les chapitres gardent un identifiant stable (id : sert à la progression et aux liens) ;
     « pos » les place dans l'ordre du programme et « num » est le numéro affiché. */
  SUBJECTS.forEach(function (s) {
    s.chapters.forEach(function (c) { c.id = String(c.id); if (c.pos == null) c.pos = parseFloat(c.id); });
    s.chapters.sort(function (a, b) { return a.pos - b.pos; });
    s.chapters.forEach(function (c, i) { c.num = i + 1; });
  });
  function lessonSubjects() { return SUBJECTS.filter(function (s) { return !s.tab; }); }
  /* ---------- Sessions : un code d'accès = une session séparée (progression, discussions, brouillons) ---------- */
  var ACA_DEFAULT = window.CRPE_ACADEMIE != null ? window.CRPE_ACADEMIE : 'Créteil'; // académie par défaut ('' = aucune)
  var STANDALONE = !(window.claude && typeof window.claude.use === 'function'); // site autonome : pas de prof IA ni de sauvegarde en ligne
  var SESSIONS = window.CRPE_SESSIONS || [
    { hash: 'c2f1c1cb6a0d8a0b13587bfd48582252af7895a80ffff0f0a43a47622f5d6c08', id: '', name: 'Session 1' },
    { hash: 'b23d5d1dc6e9898a9e3d223fb350c680551400ba42c5eeaae784e83ff4c0e61e', id: '2', name: 'Session de Rayen', short: 'Rayen' }
  ];
  var PROFILE = '';
  try { PROFILE = localStorage.getItem('crpe-profile') || ''; } catch (e) {}
  if (!SESSIONS.some(function (x) { return x.id === PROFILE; })) PROFILE = '';
  var SESSION = SESSIONS.filter(function (x) { return x.id === PROFILE; })[0];
  if (PROFILE) (function () {
    // les données de la session 2 sont rangées à part (préfixe p2:) : les deux sessions ne se mélangent jamais
    var P = 'p' + PROFILE + ':', sp = Storage.prototype, g = sp.getItem, st = sp.setItem, r = sp.removeItem;
    var map = function (k) { k = String(k); return k.indexOf('crpe') === 0 && !/^crpe-(l3-access|profile|theme|voice)$/.test(k) ? P + k : k; };
    sp.getItem = function (k) { return g.call(this, map(k)); };
    sp.setItem = function (k, v) { return st.call(this, map(k), v); };
    sp.removeItem = function (k) { return r.call(this, map(k)); };
    window.__crpePrefix = P;
  })();
  var STORE_KEY = 'crpe-l3-progress-v1';
  var cleanup = null; // arrêt de la synthèse vocale / du chrono quand on change de page

  /* ---------- Prof IA (correction par Claude, disponible quand le site est ouvert sur claude.ai) ---------- */
  var SAMPLE = null, IMG_OK = false, sampleReady = Promise.resolve();
  try {
    if (window.claude && typeof window.claude.use === 'function') {
      sampleReady = window.claude.use('sample').then(function (smp) {
        SAMPLE = smp || null;
        if (SAMPLE && SAMPLE.limits) SAMPLE.limits().then(function (l) { IMG_OK = !!(l && l.images); }).catch(function () {});
        document.documentElement.classList.toggle('has-ai', !!SAMPLE);
        if (SAMPLE && /simulation/.test(location.hash) && typeof route === 'function') route();
      }).catch(function () {});
      sampleReady = Promise.race([sampleReady, new Promise(function (r) { setTimeout(r, 4000); })]);
    }
  } catch (e) {}
  function plain(html) { var d = document.createElement('div'); d.innerHTML = html || ''; return d.textContent.replace(/\s+/g, ' ').trim(); }
  function aiError(e) {
    var c = e && e.code;
    if (c === 'not_granted' || c === 'sampling_disabled' || c === 'not_declared' || c === 'capability_disabled') { SAMPLE = null; return 'Le prof IA n’est pas autorisé sur cette page. Utilise l’auto-évaluation.'; }
    if (c === 'rate_limited') return 'Le prof IA est très sollicité : réessaie dans quelques minutes.';
    if (c === 'image_rejected') return 'La photo n’a pas pu être lue : reprends-la plus nette, bien éclairée.';
    if (c === 'invalid_json') return 'La correction n’a pas pu être lue. Clique à nouveau sur le bouton.';
    if (c === 'cancelled') return 'Correction annulée.';
    return 'La correction a échoué (connexion ?). Tu peux réessayer.';
  }
  function aiCorrect(q, answer, images, ctx) {
    var pts = q.pts || 1;
    var prompt = 'Tu es correcteur bienveillant mais exigeant du CRPE (concours de professeur des écoles, niveau licence). ' +
      'Corrige la réponse d’un candidat à une question ' + (ctx ? 'de ' + ctx + ' ' : '') + 'notée sur ' + pts + ' point(s).\n\n' +
      (q.doc ? 'DOCUMENT / TEXTE SUPPORT :\n' + plain(q.doc).slice(0, 6000) + '\n\n' : '') +
      'QUESTION :\n' + plain(q.q) + '\n\nCORRIGÉ ET BARÈME DE RÉFÉRENCE :\n' + plain(q.model) + (q.expl ? '\n' + plain(q.expl) : '') +
      '\n\nRÉPONSE DU CANDIDAT' + (images ? ' (texte tapé ci-dessous et/ou photo de sa copie manuscrite jointe)' : '') + ' :\n' + (answer || '(rien de tapé)') +
      '\n\nConsignes : évalue le fond (pertinence, exactitude, justification, exemples) ET la langue (orthographe, syntaxe : un futur professeur doit écrire sans faute ; relève les fautes une par une). ' +
      'Accepte toute réponse juste même si elle diffère du corrigé. Tutoie le candidat, sois concret et encourageant. ' +
      'Réponds UNIQUEMENT avec un objet JSON : {"note": nombre entre 0 et ' + pts + ' par pas de 0.25, "appreciation": "1 à 2 phrases", "points_forts": ["..."], "a_ameliorer": ["..."], "fautes": ["faute → correction", ...], "conseil": "1 phrase pour progresser"}';
    var opts = {};
    if (images) opts.images = images;
    return SAMPLE.json(prompt, opts);
  }

  /* ---------- Stockage de la progression ---------- */
  function load() {
    var empty = { chapters: {}, tests: {}, blancs: {}, xp: 0, days: [], flags: {} };
    try {
      var s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (!s) return empty;
      for (var k in empty) if (s[k] === undefined) s[k] = empty[k];
      return s;
    } catch (e) { return empty; }
  }
  var state = load();
  function save() {
    state.updated = Date.now();
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* stockage indisponible */ }
    cloudSave(false);
  }

  /* ---------- Sauvegarde sur le compte Claude (capability db) : la progression suit la candidate d'un appareil à l'autre ---------- */
  var cloud = { ref: null, timer: null, last: 0, status: 'local', started: false };
  function cloudSave(now) {
    if (!cloud.ref) return;
    clearTimeout(cloud.timer);
    var push = function () {
      var body = JSON.stringify(state);
      if (body.length > 240000) { state.notifs = (state.notifs || []).slice(0, 10); state.history = (state.history || []).slice(-80); body = JSON.stringify(state); }
      cloud.ref.set({ s: body, updated: state.updated || Date.now() })
        .then(function () { cloud.last = Date.now(); cloud.status = 'ok'; updateCloudBadge(); })
        .catch(function (e) { cloud.status = 'err'; cloud.why = 'erreur ' + ((e && e.code) || '') + ' ' + ((e && e.message) || ''); updateCloudBadge(); });
    };
    if (now) push(); else cloud.timer = setTimeout(push, 1500);
  }
  /* Toutes les autres données du site (discussions avec Mme Rose, brouillons, séries et contrôles en cours,
     réponses en cours, préférences, scripts de Mme Rose…) : un document par clé dans data/users/<id>/kv */
  var KV_SKIP = /^(crpe-l3-progress-v1|crpe-l3-access|crpe-kvmeta|crpe-profile)$|^crpe-(next|exnext|evnext)\//;
  var kv = { col: null, timer: null, meta: readMeta() };
  function readMeta() { try { return JSON.parse(localStorage.getItem('crpe-kvmeta')) || {}; } catch (e) { return {}; } }
  function kvId(k) { return k.replace(/[^A-Za-z0-9_\-.:@+]/g, function (ch) { return ch === '/' ? '~' : '+' + ch.charCodeAt(0).toString(16) + '+'; }).slice(0, 200); }
  function kvHash(v) { var h = 0; for (var i = 0; i < v.length; i++) h = (h * 31 + v.charCodeAt(i)) | 0; return v.length + ':' + h; }
  function kvKeys() {
    var out = [];
    var pre = window.__crpePrefix || '';
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i); if (!k) continue;
        if (pre) { if (k.indexOf(pre) !== 0) continue; k = k.slice(pre.length); } else if (/^p\d+:/.test(k)) continue;
        if (k.indexOf('crpe') === 0 && !KV_SKIP.test(k)) out.push(k);
      }
    } catch (e) {}
    return out;
  }
  function kvDirty() { if (!kv.col) return; clearTimeout(kv.timer); kv.timer = setTimeout(kvPush, 2500); }
  function kvPush() {
    if (!kv.col) return;
    var keys = kvKeys(), seen = {}, now = Date.now(), changed = false;
    keys.forEach(function (k) {
      var v = localStorage.getItem(k); if (v == null) return;
      seen[k] = 1;
      var h = kvHash(v);
      if (kv.meta[k] && kv.meta[k].h === h) return;
      if (v.length > 240000) return; // trop gros pour un document (très grand brouillon dessiné)
      kv.meta[k] = { h: h, u: now }; changed = true;
      kv.col.doc(kvId(k)).set({ k: k, v: v, u: now }).catch(function () { if (kv.meta[k]) kv.meta[k].h = ''; });
    });
    Object.keys(kv.meta).forEach(function (k) {
      if (seen[k] || kv.meta[k].gone) return;
      kv.meta[k] = { h: '', u: now, gone: true }; changed = true;
      kv.col.doc(kvId(k)).set({ k: k, v: null, u: now }).catch(function () {});
    });
    if (changed) try { localStorage.setItem('crpe-kvmeta', JSON.stringify(kv.meta)); } catch (e) {}
  }
  function kvPull(col) {
    return col.limit(1000).get().then(function (snap) {
      snap.docs.forEach(function (d) {
        var x = d.data(); if (!x || !x.k || KV_SKIP.test(x.k)) return;
        var m = kv.meta[x.k];
        if (m && m.u >= x.u) return;
        try {
          if (x.v == null) localStorage.removeItem(x.k); else localStorage.setItem(x.k, x.v);
          kv.meta[x.k] = { h: x.v == null ? '' : kvHash(x.v), u: x.u, gone: x.v == null };
        } catch (e) {}
      });
      try { localStorage.setItem('crpe-kvmeta', JSON.stringify(kv.meta)); } catch (e) {}
    });
  }
  setInterval(function () { if (kv.col) kvPush(); }, 20000);
  function isEmptyState(x) {
    return !Object.keys(x.chapters || {}).length && !Object.keys(x.tests || {}).length && !(x.history || []).length && !x.xp;
  }
  function applyRemote(remote) {
    var empty = { chapters: {}, tests: {}, blancs: {}, xp: 0, days: [], flags: {} };
    for (var k in empty) if (remote[k] === undefined) remote[k] = empty[k];
    state = remote;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
    if (!cloud.started) return;
    renderXP(); renderBell();
    if (dailyDone()) { var dm = document.querySelector('.daily-card'); if (dm && dm.parentNode) dm.parentNode.remove(); }
    if (/^#\/(concours\/|jour|chap\/[^/]+\/[^/]+\/(exercices|evaluation))/.test(location.hash)) toast('☁️ Progression récupérée depuis ton compte.', true);
    else { route(); toast('☁️ Progression récupérée depuis ton compte.', true); }
  }
  function updateCloudBadge() {
    var el = document.getElementById('cloudState');
    if (el) el.innerHTML = cloudText();
  }
  function cloudText() {
    if (STANDALONE) return '📱 Ta progression est enregistrée sur ce téléphone. Pour ne jamais la perdre, télécharge ou copie ta sauvegarde régulièrement (une fois par semaine au moins).';
    if (cloud.status === 'ok') return '☁️ Tout est sauvegardé sur ton compte Claude (progression, contrôles en cours, discussions avec Mme Rose, brouillons)' + (cloud.last ? ' (dernière sauvegarde à ' + new Date(cloud.last).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) + ')' : '') + ' : tu la retrouves sur tous tes appareils.';
    if (cloud.status === 'err') return '⚠️ La dernière sauvegarde en ligne a échoué (' + esc(cloud.why || '') + ') : ta progression est gardée sur cet appareil et sera renvoyée à la prochaine action.';
    return '📱 Progression enregistrée seulement sur cet appareil' + (cloud.why ? ' (' + esc(cloud.why) + ')' : '') + '. Ouvre le site depuis ton lien claude.ai et accepte l’enregistrement des données pour la sauvegarder sur ton compte.';
  }
  var cloudReadyResolve;
  cloud.ready = new Promise(function (r) { cloudReadyResolve = r; });
  function cloudDone(why) { if (why) cloud.why = why; updateCloudBadge(); if (cloudReadyResolve) { cloudReadyResolve(); cloudReadyResolve = null; } }
  function backupCard() {
    return '<div class="card backup-card" id="sauvegarde"><h2 style="margin-top:0">☁️ Sauvegarde</h2><p class="small cloud-state" id="cloudState">' + cloudText() + '</p>' +
      (STANDALONE ? '' : '<div class="btn-row"><button class="btn" id="bkNow">☁️ Sauvegarder maintenant</button><button class="btn secondary" id="bkPerm">🔐 Autoriser la sauvegarde</button></div>') +
      '<p class="small muted" style="margin-bottom:4px">' + (STANDALONE ? 'Ta sauvegarde est un <b>fichier</b> (à garder dans Fichiers ou à t’envoyer par mail) ou un <b>code</b> (à coller dans Notes). Avec l’un ou l’autre, tu récupères tout, même sur un autre téléphone.' : 'Sécurité en plus : copie ton <b>code de sauvegarde</b> (dans Notes par exemple) ; tu pourras tout restaurer avec, sur n’importe quel appareil.') + '</p>' +
      '<div class="btn-row">' + (STANDALONE ? '<button class="btn" id="bkFile">💾 Télécharger ma sauvegarde</button><label class="btn secondary">📂 Restaurer un fichier<input type="file" id="bkFileIn" accept=".txt,.json,text/plain" hidden></label>' : '') +
      '<button class="btn secondary" id="bkCopy">📋 Copier mon code de sauvegarde</button><button class="btn secondary" id="bkRestore">📥 Restaurer avec un code</button></div><div id="bkOut"></div></div>';
  }
  function exportCode() {
    var o = { p: state, kv: {} };
    kvKeys().forEach(function (k) { if (k.indexOf('crpe-prof-v1') === 0 || k.indexOf('crpe-sujet/') === 0) return; var v = localStorage.getItem(k); if (v && v.length < 150000) o.kv[k] = v; });
    return 'CRPE1:' + btoa(unescape(encodeURIComponent(JSON.stringify(o))));
  }
  function importCode(code) {
    var o = JSON.parse(decodeURIComponent(escape(atob(code.trim().replace(/^CRPE1:/, '')))));
    if (!o || !o.p || !o.p.chapters) throw new Error('code');
    Object.keys(o.kv || {}).forEach(function (k) { try { localStorage.setItem(k, o.kv[k]); } catch (e) {} });
    state = o.p; save(); if (kv.col) kvPush();
  }
  function wireBackup() {
    var out = document.getElementById('bkOut'); if (!out) return;
    var bf = document.getElementById('bkFile');
    if (bf) bf.addEventListener('click', function () {
      var blob = new Blob([exportCode()], { type: 'text/plain' }), a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'sauvegarde-crpe-' + new Date().toISOString().slice(0, 10) + '.txt';
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      state.flags.lastBackup = Date.now(); save();
      out.innerHTML = '<p class="small">✅ Fichier de sauvegarde téléchargé. Garde-le dans Fichiers (ou envoie-le-toi par mail).</p>';
    });
    var bfi = document.getElementById('bkFileIn');
    if (bfi) bfi.addEventListener('change', function () {
      var f = bfi.files[0]; if (!f) return;
      f.text().then(function (t) { importCode(t); toast('✅ Progression restaurée !', true); route(); renderXP(); renderBell(); })
        .catch(function () { out.innerHTML = '<p class="small">Ce fichier n’est pas une sauvegarde valide.</p>'; });
    });
    if (!document.getElementById('bkNow')) { wireCopyRestore(out); return; }
    document.getElementById('bkNow').addEventListener('click', function () {
      if (cloud.ref) { cloudSave(true); if (kv.col) kvPush(); out.innerHTML = '<p class="small">Envoi en cours…</p>'; setTimeout(function () { out.innerHTML = '<p class="small">' + cloudText() + '</p>'; }, 2500); }
      else { out.innerHTML = '<p class="small">Connexion à ton compte…</p>'; cloudInit(); setTimeout(function () { out.innerHTML = '<p class="small">' + cloudText() + '</p>'; }, 4000); }
    });
    document.getElementById('bkPerm').addEventListener('click', function () {
      var p = cloud.perms;
      if (!p) { out.innerHTML = '<p class="small">Autorisations indisponibles ici : ouvre le menu « Autorisations » de la page (en haut, à côté de « Partager »).</p>'; return; }
      (cloud.perm === 'denied' ? p.manage() : p.request(['db', 'user']).then(function () {}))
        .then(function () { out.innerHTML = '<p class="small">Merci ! Connexion à ton compte…</p>'; cloudInit(); setTimeout(function () { out.innerHTML = '<p class="small">' + cloudText() + '</p>'; }, 4000); })
        .catch(function () { out.innerHTML = '<p class="small">Ouvre le menu « Autorisations » de la page (en haut, à côté de « Partager ») et active l’enregistrement des données.</p>'; });
    });
    wireCopyRestore(out);
  }
  function wireCopyRestore(out) {
    document.getElementById('bkCopy').addEventListener('click', function () {
      var code = exportCode();
      var show = function (ok) { out.innerHTML = '<p class="small">' + (ok ? '✅ Code copié ! Colle-le dans Notes pour le garder.' : 'Sélectionne tout le code ci-dessous et copie-le :') + '</p><textarea class="bk-code" readonly>' + code + '</textarea>'; };
      state.flags.lastBackup = Date.now(); save();
      try { navigator.clipboard.writeText(code).then(function () { show(true); }, function () { show(false); }); } catch (e) { show(false); }
    });
    document.getElementById('bkRestore').addEventListener('click', function () {
      out.innerHTML = '<p class="small">Colle ton code de sauvegarde ici :</p><textarea class="bk-code" id="bkIn" placeholder="CRPE1:…"></textarea><div class="btn-row"><button class="btn" id="bkGo">Restaurer</button></div>';
      document.getElementById('bkGo').addEventListener('click', function () {
        try { importCode(document.getElementById('bkIn').value); toast('✅ Progression restaurée !', true); route(); renderXP(); renderBell(); }
        catch (e) { out.querySelector('p').textContent = 'Ce code ne fonctionne pas : vérifie qu’il est complet (il commence par CRPE1:).'; }
      });
    });
  }
  function cloudInit() {
    try {
      if (!(window.claude && typeof window.claude.use === 'function')) return cloudDone('site ouvert en dehors de claude.ai');
      Promise.all([window.claude.use('db'), window.claude.use('user'), window.claude.use('permissions')]).then(function (r) {
        var db = r[0], user = r[1];
        cloud.perms = r[2];
        return (cloud.perms ? cloud.perms.state('db').catch(function () { return ''; }) : Promise.resolve('')).then(function (ps) {
        cloud.perm = ps;
        if (ps === 'denied') return cloudDone('l’enregistrement des données a été refusé : appuie sur « Autoriser la sauvegarde »');
        if (ps === 'unavailable' || !db) return cloudDone('la sauvegarde en ligne n’est pas disponible dans cette appli : ouvre le lien dans Safari ou Chrome, connectée à ton compte Claude');
        if (user) user.isOwner().then(function (o) { if (o) ownerUnlock(); }).catch(function () {});
        if (!user) return cloudDone('compte non reconnu');
        return user.id().then(function (uid) {
          if (!uid) return cloudDone('compte non reconnu');
          var ref = db.doc('data/users/' + uid + '/progress' + (PROFILE ? '-p' + PROFILE : ''));
          try {
            var col = db.collection('data/users/' + uid + '/kv' + (PROFILE ? '-p' + PROFILE : '') + '/items');
            kvPull(col).then(function () { kv.col = col; kvPush(); if (cloud.started && /^#\/chap\/[^/]+\/[^/]+\/cours/.test(location.hash)) route(); }).catch(function () { kv.col = col; });
          } catch (e) { cloud.kvErr = (e && e.message) || 'kv'; }
          return ref.get().then(function (snap) {
            var d = snap.exists ? snap.data() : null, remote = null;
            try { remote = d && d.s ? JSON.parse(d.s) : null; } catch (e) { remote = null; }
            cloud.ref = ref; cloud.status = 'ok';
            if (remote && !isEmptyState(remote) && (isEmptyState(state) || (remote.updated || 0) > (state.updated || 0))) applyRemote(remote);
            else cloudSave(true);
            cloudDone();
          }, function (e) { cloud.status = 'err'; cloudDone('lecture impossible : ' + ((e && e.code) || '') + ' ' + ((e && e.message) || '')); });
        });
        });
      }).catch(function (e) { cloud.status = 'err'; cloudDone('erreur ' + ((e && e.code) || '') + ' ' + ((e && e.message) || '')); });
    } catch (e) { cloudDone('erreur'); }
  }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') { if (cloud.ref) cloudSave(true); if (kv.col) kvPush(); } });
  function chapState(sid, cid) {
    var k = sid + '/' + cid;
    if (!state.chapters[k]) state.chapters[k] = {};
    return state.chapters[k];
  }
  function readJSON(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function writeJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} kvDirty(); }
  function dropKey(k) { try { localStorage.removeItem(k); } catch (e) {} kvDirty(); }
  function peekChap(sid, cid) { return state.chapters[sid + '/' + cid] || {}; }

  /* ---------- Thème ---------- */
  var themeBtn = document.getElementById('themeBtn');
  try { var t = localStorage.getItem('crpe-theme'); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) {}
  themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('crpe-theme', next); } catch (e) {}
  });

  /* ---------- Utilitaires ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function subj(id) { for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].id === id) return SUBJECTS[i]; return null; }
  function chap(s, id) { for (var i = 0; i < s.chapters.length; i++) if (String(s.chapters[i].id) === String(id)) return s.chapters[i]; return null; }
  function sujet(id) { for (var i = 0; i < CONCOURS.length; i++) if (CONCOURS[i].id === id) return CONCOURS[i]; return null; }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function on20(a, b) { return b ? (Math.round(20 * a / b * 10) / 10) : 0; }
  function fr(x) { return String(x).replace('.', ','); }
  function levelBadge(p) {
    if (p >= 75) return '<span class="badge ok">Acquis</span>';
    if (p >= 50) return '<span class="badge warn">À consolider</span>';
    return '<span class="badge ko">Prioritaire</span>';
  }
  function ytLink(v) { return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(v.q); }
  function stripAccents(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/[’‘`]/g, "'").replace(/[«»"]/g, '')
      .replace(/ /g, ' ').replace(/\s+/g, ' ').trim()
      .replace(/\s*([=+\-×*/:;()²³])\s*/g, '$1')
      .replace(/[.!?]+$/, '').trim();
  }
  function numVal(s) {
    var x = String(s).replace(/\s/g, '').replace(',', '.').replace(/[−–]/g, '-').replace(/[€%°]$/, '');
    if (/^-?\d+(\.\d+)?$/.test(x)) return parseFloat(x);
    var m = x.match(/^(-?\d+)\/(\d+)$/);
    if (m && +m[2] !== 0) return +m[1] / +m[2];
    return null;
  }
  function checkInput(q, val) {
    var v = norm(val);
    if (!v) return { ok: false, empty: true };
    var answers = q.answers || [q.answer];
    var vn = numVal(v);
    for (var i = 0; i < answers.length; i++) {
      var a = norm(answers[i]);
      if (v === a) return { ok: true };
      var an = numVal(a);
      if (q.numeric !== false && vn !== null && an !== null && Math.abs(vn - an) <= (q.tol || 1e-9)) return { ok: true };
      if (v.replace(/\s/g, '') === a.replace(/\s/g, '')) return { ok: true };
    }
    if (!q.accents) {
      for (var j = 0; j < answers.length; j++) {
        if (stripAccents(v) === stripAccents(norm(answers[j]))) return { ok: true, accentWarn: true };
      }
    }
    return { ok: false };
  }
  /* Boîte de dialogue intégrée (confirm/alert ne sont pas disponibles partout, notamment sur claude.ai) */
  function ask(msg, yesLabel, onYes, noLabel) {
    var m = document.createElement('div');
    m.className = 'modal';
    m.innerHTML = '<div class="modal-card" role="dialog" aria-modal="true"><p></p><div class="btn-row">' +
      (onYes ? '<button class="btn m-yes"></button>' : '') + '<button class="btn secondary m-no"></button></div></div>';
    m.querySelector('p').textContent = msg;
    if (onYes) m.querySelector('.m-yes').textContent = yesLabel;
    m.querySelector('.m-no').textContent = noLabel || (onYes ? 'Annuler' : 'OK');
    document.body.appendChild(m);
    var close = function () { m.remove(); };
    m.querySelector('.m-no').addEventListener('click', close);
    if (onYes) m.querySelector('.m-yes').addEventListener('click', function () { close(); onYes(); });
    (m.querySelector('.m-yes') || m.querySelector('.m-no')).focus();
  }
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }

  /* ---------- Jeu : XP, niveaux, série de jours, badges ---------- */
  var LEVELS = ['Stagiaire', 'Apprenti(e)', 'Étudiant(e) motivé(e)', 'Futur(e) PE', 'Admissible', 'Admis(e)', 'Maître du CRPE'];
  function levelInfo(xp) {
    var lvl = Math.floor(xp / 250);
    return { n: lvl + 1, name: LEVELS[Math.min(lvl, LEVELS.length - 1)], into: xp % 250, need: 250 };
  }
  function markActiveDay() {
    var d = today();
    if (state.days.indexOf(d) === -1) { state.days.push(d); if (state.days.length > 400) state.days.shift(); save(); }
  }
  function streak() {
    var set = {}; state.days.forEach(function (d) { set[d] = 1; });
    var n = 0, d = new Date();
    var key = function (x) { return x.getFullYear() + '-' + (x.getMonth() + 1) + '-' + x.getDate(); };
    if (!set[key(d)]) d.setDate(d.getDate() - 1);
    while (set[key(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function addXP(n, why) {
    if (!n) return;
    var before = levelInfo(state.xp).n;
    state.xp += n; markActiveDay(); save();
    toast('+' + n + ' XP' + (why ? ' · ' + why : ''));
    var after = levelInfo(state.xp);
    if (after.n > before) { setTimeout(function () { toast('🎉 Niveau ' + after.n + ' : ' + after.name + ' !', true); }, 900); confetti(); }
    renderXP();
  }
  function once(flag, n, why) {
    if (state.flags[flag]) return;
    state.flags[flag] = 1; addXP(n, why);
  }
  function finished(x) { return x.evalBest != null || !!x.evalDone; }
  function doneCount(sid) {
    var s = subj(sid);
    return s ? s.chapters.filter(function (c) { return finished(peekChap(sid, c.id)); }).length : 0;
  }
  function acquired(sid) {
    var s = subj(sid);
    return s ? s.chapters.filter(function (c) { var x = peekChap(sid, c.id); return x.evalBest != null && on20(x.evalBest, x.evalTotal) >= 15; }).length : 0;
  }
  function badges() {
    var allAcq = SUBJECTS.reduce(function (a, s) { return a + acquired(s.id); }, 0);
    var anyEx = Object.keys(state.chapters).some(function (k) { return state.chapters[k].exDone; });
    var blancs = Object.keys(state.blancs).map(function (k) { return state.blancs[k]; });
    var st = Math.max(streak(), state.flags.bestStreak || 0);
    var m = subj('maths'), f = subj('francais');
    return [
      { i: '🚀', n: 'Premier pas', d: 'Terminer une première série d’exercices', ok: anyEx },
      { i: '🧭', n: 'Diagnostic', d: 'Passer les deux tests de positionnement', ok: !!(state.tests.maths && state.tests.francais) },
      { i: '🎓', n: 'Prof attentif', d: 'Regarder une vidéo du prof virtuel en entier', ok: !!state.flags.profDone },
      { i: '✅', n: 'Chapitre maîtrisé', d: 'Obtenir 15/20 à une évaluation', ok: allAcq >= 1 },
      { i: '🔟', n: 'Dix sur dix', d: 'Maîtriser 10 chapitres', ok: allAcq >= 10 },
      { i: '📐', n: 'As des maths', d: 'Maîtriser tous les chapitres de maths', ok: m && acquired('maths') === m.chapters.length },
      { i: '✒️', n: 'Plume d’or', d: 'Maîtriser tous les chapitres de français', ok: f && acquired('francais') === f.chapters.length },
      { i: '📝', n: 'Conditions réelles', d: 'Terminer un concours blanc', ok: blancs.length >= 1 },
      { i: '🏅', n: 'Admissible', d: 'Obtenir au moins 12/20 à un concours blanc', ok: blancs.some(function (b) { return on20(b.best, b.total) >= 12; }) },
      { i: '🏆', n: 'Major de promo', d: 'Obtenir au moins 16/20 à un concours blanc', ok: blancs.some(function (b) { return on20(b.best, b.total) >= 16; }) },
      { i: '🔥', n: 'Régulier', d: 'Réviser 3 jours d’affilée', ok: st >= 3 },
      { i: '💎', n: 'Assidu', d: 'Réviser 7 jours d’affilée', ok: st >= 7 }
    ];
  }

  var xpChip = document.createElement('a');
  xpChip.className = 'xp-chip';
  xpChip.href = '#/progression';
  var topbar = document.querySelector('.topbar');
  topbar.insertBefore(xpChip, themeBtn);
  function renderXP() {
    var l = levelInfo(state.xp), s = streak();
    if (s > (state.flags.bestStreak || 0)) { state.flags.bestStreak = s; save(); }
    xpChip.innerHTML = '<span title="Série de jours">🔥 ' + s + '</span><span title="Points d’expérience">⭐ ' + state.xp + '</span><span class="lv">Niv. ' + l.n + '</span>';
  }

  var toastBox = document.createElement('div');
  toastBox.className = 'toasts';
  document.body.appendChild(toastBox);
  function toast(msg, big) {
    var el = document.createElement('div');
    el.className = 'toast' + (big ? ' big' : '');
    el.textContent = msg;
    toastBox.appendChild(el);
    setTimeout(function () { el.classList.add('out'); }, big ? 2600 : 1700);
    setTimeout(function () { el.remove(); }, big ? 3100 : 2200);
  }
  function confetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#f9a8d4', '#c4a7ff', '#ffd36e', '#a5e8c8', '#9fd3ff', '#ffb59e', '#f472b6'];
    var box = document.createElement('div');
    box.className = 'confetti';
    for (var i = 0; i < 90; i++) {
      var p = document.createElement('i');
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 0.6 + 's';
      p.style.animationDuration = 2 + Math.random() * 1.5 + 's';
      p.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 4200);
  }

  /* ---------- Moteur de questions ---------- */
  // mode : 'exercise' (correction immédiate), 'eval' / 'test' / 'blanc' (correction à la fin)
  function renderQuiz(root, questions, opts) {
    var results = new Array(questions.length);
    var container = document.createElement('div');
    root.appendChild(container);
    var submitted = false;

    questions.forEach(function (q, i) {
      if (opts.before) {
        var head = opts.before(i);
        if (head) { var h = document.createElement('div'); h.innerHTML = head; container.appendChild(h); }
      }
      var el = document.createElement('div');
      el.className = 'q';
      var label = opts.labels ? opts.labels(q, i) : ('Question ' + (i + 1) + ' / ' + questions.length);
      var html = '<div class="qn">' + label + (q.pts ? ' · ' + q.pts + (q.pts > 1 ? ' pts' : ' pt') : '') + '</div><div class="qt">' + q.q + '</div>';
      var type = q.type || (q.choices ? 'qcm' : 'input');
      if (type === 'vf') { q.choices = ['Vrai', 'Faux']; type = 'qcm'; }
      if (type === 'qcm') {
        html += '<div class="choices">' + q.choices.map(function (c, k) {
          return '<label class="choice"><input type="radio" name="q' + opts.uid + '_' + i + '" value="' + k + '"><span>' + c + '</span></label>';
        }).join('') + '</div>';
      } else if (type === 'input') {
        html += '<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(q.placeholder || 'Ta réponse') + '">';
      } else if (type === 'open') {
        html += '<textarea placeholder="Rédige ta réponse ici, puis compare avec le corrigé."></textarea>';
      }
      var idkBtn = type !== 'open' ? '<button class="btn ghost idk" type="button">🤷 Je ne sais pas</button>' : '';
      if (opts.mode === 'exercise') {
        html += '<div class="btn-row"><button class="btn secondary check">' + (type === 'open' ? 'Voir le corrigé' : 'Vérifier') + '</button>' + idkBtn + '</div>';
      } else if (idkBtn) html += '<div class="btn-row">' + idkBtn + '</div>';
      html += '<div class="fb"></div>';
      el.innerHTML = html;
      el._type = type;
      container.appendChild(el);

      var idk = el.querySelector('.idk');
      if (idk) {
        idk.addEventListener('click', function () {
          if (opts.mode === 'exercise') {
            el._idk = true;
            el.querySelector('.check').disabled = true;
            idk.disabled = true;
            correct(i, el, q);
            updateDone();
            return;
          }
          if (submitted) return;
          el._idk = !el._idk;
          idk.classList.toggle('on', el._idk);
          el.classList.toggle('is-idk', el._idk);
          if (el._idk) {
            el.querySelectorAll('input[type=radio]').forEach(function (r) { r.checked = false; });
            var t = el.querySelector('input[type=text]'); if (t) t.value = '';
          }
        });
        el.addEventListener('input', function (e) {
          if (e.target.classList && e.target.classList.contains('idk')) return;
          if (el._idk && !submitted) { el._idk = false; idk.classList.remove('on'); el.classList.remove('is-idk'); }
        });
      }
      if (opts.mode === 'exercise') {
        var input = el.querySelector('input[type=text]');
        if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') el.querySelector('.check').click(); });
        el.querySelector('.check').addEventListener('click', function () {
          correct(i, el, q);
          this.disabled = (el._type !== 'open');
          if (idk) idk.disabled = true;
          if (el._type === 'open') this.style.display = 'none';
          updateDone();
        });
      }
    });

    function readAnswer(el) {
      if (el._type === 'qcm') {
        var c = el.querySelector('input:checked');
        return c ? +c.value : null;
      }
      if (el._type === 'input') return el.querySelector('input').value;
      if (el._idk) return null;
      return el.querySelector('textarea').value;
    }
    function answered(i, v) {
      if (opts.mode === 'exercise' && v >= 0.5) {
        el_pulse(container.querySelectorAll('.q')[i]);
        addXP(5);
      }
    }
    function el_pulse(el) { if (el) { el.classList.add('pulse'); setTimeout(function () { el.classList.remove('pulse'); }, 600); } }

    function correct(i, el, q) {
      var fb = el.querySelector('.fb');
      var ans = readAnswer(el);
      var idkB = el.querySelector('.idk'); if (idkB) idkB.disabled = true;
      if (el._idk) ans = null;
      var expl = q.expl ? '<div>' + q.expl + '</div>' : '';
      var whyBox = function (ok) {
        if (ok) return expl;
        return '<div class="why"><b>💡 Pourquoi ?</b>' + (q.expl ? '<div>' + q.expl + '</div>' : '<div class="small muted">Relis la règle dans le cours du chapitre' + (SAMPLE ? ', ou demande à ' + PROF_NAME + ' de t’expliquer ci-dessous.' : '.') + '</div>') + '</div>';
      };
      var idkHead = '🤷 Tu ne savais pas, pas de souci : c’est comme ça qu’on apprend.';
      if (el._type === 'qcm') {
        el.querySelectorAll('.choice').forEach(function (l, k) {
          l.querySelector('input').disabled = true;
          if (k === q.answer) l.classList.add('correct');
          else if (k === ans) l.classList.add('wrong');
        });
        var ok = ans === q.answer;
        results[i] = ok ? 1 : 0;
        el.classList.add(ok ? 'is-ok' : 'is-ko');
        fb.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'ko') + '"><b class="v">' +
          (ok ? '✅ Bonne réponse !' : (el._idk ? idkHead : ans === null ? '⏺ Pas de réponse.' : '❌ Ce n’est pas ça.') + ' La bonne réponse : ' + q.choices[q.answer]) +
          '</b>' + whyBox(ok) + '</div>';
        if (!ok) addWhyAI(el, q, ans === null ? null : q.choices[ans], q.choices[q.answer], fb);
        answered(i, results[i]);
      } else if (el._type === 'input') {
        var input = el.querySelector('input');
        input.disabled = true;
        var r = checkInput(q, ans);
        results[i] = r.ok ? 1 : 0;
        el.classList.add(r.ok ? 'is-ok' : 'is-ko');
        var shown = (q.answers || [q.answer])[0];
        fb.innerHTML = '<div class="feedback ' + (r.ok ? 'ok' : 'ko') + '"><b class="v">' +
          (r.ok ? '✅ Bonne réponse !' + (r.accentWarn ? ' (attention aux accents : ' + esc(shown) + ')' : '')
                : (el._idk ? idkHead : r.empty ? '⏺ Pas de réponse.' : '❌ Ta réponse : « ' + esc(ans) + ' ».') + ' Réponse attendue : ' + esc(shown)) +
          '</b>' + whyBox(r.ok) + '</div>';
        if (!r.ok) addWhyAI(el, q, r.empty || el._idk ? null : ans, shown, fb);
        answered(i, results[i]);
      } else {
        el.querySelector('textarea').readOnly = true;
        fb.innerHTML = '<div class="feedback neutral"><b class="v">📝 Corrigé type</b>' + (q.model || '') + expl +
          '<p class="small muted">Compare honnêtement ta réponse avec le corrigé puis auto-évalue-toi :</p>' +
          '<div class="selfeval"><button class="btn ok se" data-v="1">✔ J’ai l’essentiel</button>' +
          '<button class="btn secondary se" data-v="0.5">≈ En partie</button>' +
          '<button class="btn secondary se" data-v="0">✘ À retravailler</button></div></div>';
        fb.querySelectorAll('.se').forEach(function (b) {
          b.addEventListener('click', function () {
            results[i] = parseFloat(b.dataset.v);
            fb.querySelectorAll('.se').forEach(function (x) { x.disabled = true; });
            b.disabled = false; b.classList.remove('secondary'); b.classList.add('ok');
            el.classList.remove('is-ok', 'is-ko');
            el.classList.add(results[i] >= 0.5 ? 'is-ok' : 'is-ko');
            answered(i, results[i]);
            updateDone();
          });
        });
        if (SAMPLE) addAI(i, el, q, fb);
      }
    }

    function addWhyAI(el, q, given, good, fb) {
      if (!SAMPLE) return;
      var box = document.createElement('div');
      box.className = 'why-ai';
      box.innerHTML = '<button class="btn secondary why-go" type="button">💬 ' + PROF_NAME + ' m’explique' + (given ? ' mon erreur' : '') + '</button><div class="why-out"></div>';
      fb.firstChild.appendChild(box);
      var go = box.querySelector('.why-go'), out = box.querySelector('.why-out');
      go.addEventListener('click', function () {
        go.disabled = true;
        out.innerHTML = '<div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> ' + PROF_NAME + ' réfléchit…</div>';
        var prompt = 'Tu es ' + PROF_NAME + ', professeure bienveillante qui prépare une étudiante débutante au CRPE (concours de professeur des écoles)' + (opts.ctx ? ', épreuve : ' + opts.ctx : '') + '. ' +
          'Explique-lui en français, en la tutoyant, avec des mots simples, en 4 à 7 phrases maximum : la règle ou la notion en jeu, le raisonnement pas à pas qui mène à la bonne réponse, ' +
          (given ? 'pourquoi sa réponse est fausse (l’erreur ou le piège classique qui y mène), ' : 'comment trouver la réponse la prochaine fois, ') +
          'puis une astuce pour s’en souvenir. Pas de titre, pas de markdown.\n\n' +
          (q.doc ? 'DOCUMENT :\n' + plain(q.doc).slice(0, 4000) + '\n\n' : '') +
          'QUESTION : ' + plain(q.q) + (q.choices ? '\nCHOIX : ' + q.choices.map(plain).join(' | ') : '') +
          '\nBONNE RÉPONSE : ' + plain(String(good)) + (q.expl ? '\nCORRIGÉ DU SITE : ' + plain(q.expl) : '') +
          '\nRÉPONSE DE L’ÉTUDIANTE : ' + (given ? plain(String(given)) : '(elle a répondu « je ne sais pas »)');
        SAMPLE(prompt, { onText: function (u) { out.innerHTML = '<p class="ai-text"></p>'; out.firstChild.textContent = u.text; } })
          .then(function (r) { if (r && r.text) { out.innerHTML = '<p class="ai-text"></p>'; out.firstChild.textContent = r.text; } go.remove(); })
          .catch(function (e) { out.innerHTML = '<p class="small">⚠ ' + aiError(e) + '</p>'; go.disabled = false; });
      });
    }

    function addAI(i, el, q, fb) {
      var pts = q.pts || 1;
      var box = document.createElement('div');
      box.className = 'ai-box';
      box.innerHTML = '<div class="ai-head"><span class="ai-ico">🤖</span><div><b>Le prof IA corrige ta copie</b><small>Note sur ' + pts + ' + correction détaillée. Tu as écrit sur papier ? Prends ta copie en photo.</small></div></div>' +
        (IMG_OK ? '<label class="btn secondary ai-photo">📷 Joindre une photo de ma copie<input type="file" accept="image/*" capture="environment" hidden></label><span class="small muted ai-file"></span>' : '') +
        '<div class="btn-row"><button class="btn ai-go">🤖 Corriger avec le prof IA</button></div><div class="ai-out"></div>';
      fb.appendChild(box);
      var file = box.querySelector('input[type=file]'), go = box.querySelector('.ai-go'), out = box.querySelector('.ai-out');
      if (file) file.addEventListener('change', function () { box.querySelector('.ai-file').textContent = file.files.length ? '✔ Photo jointe : ' + file.files[0].name : ''; });
      go.addEventListener('click', function () {
        var txt = el.querySelector('textarea').value.trim();
        var imgs = file && file.files.length ? file.files : null;
        if (!txt && !imgs) { out.innerHTML = '<p class="small">Écris ta réponse (ou joins une photo de ta copie) avant de demander la correction.</p>'; return; }
        go.disabled = true;
        out.innerHTML = '<div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> Le prof IA lit ta copie… (cela peut prendre jusqu’à une minute)</div>';
        aiCorrect(q, txt, imgs, opts.ctx).then(function (r) {
          var note = Math.max(0, Math.min(pts, Number(r && r.note) || 0));
          note = Math.round(note * 4) / 4;
          var list = function (t, a) { return a && a.length ? '<p><b>' + t + '</b></p><ul>' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : ''; };
          out.innerHTML = '<div class="ai-result"><div class="ai-note">' + String(note).replace('.', ',') + ' / ' + pts + '</div>' +
            '<p>' + esc(r.appreciation || '') + '</p>' + list('✅ Points forts', r.points_forts) + list('🛠 À améliorer', r.a_ameliorer) + list('✍️ Fautes de langue', r.fautes) +
            (r.conseil ? '<p class="small"><b>Conseil :</b> ' + esc(r.conseil) + '</p>' : '') + '</div>';
          results[i] = note / pts;
          fb.querySelectorAll('.se').forEach(function (x) { x.disabled = true; });
          el.classList.remove('is-ok', 'is-ko');
          el.classList.add(results[i] >= 0.5 ? 'is-ok' : 'is-ko');
          go.textContent = '🔁 Recorriger';
          go.disabled = false;
          answered(i, results[i]);
          updateDone();
        }).catch(function (e) {
          out.innerHTML = '<p class="small">⚠ ' + aiError(e) + '</p>';
          go.disabled = false;
          if (!SAMPLE) box.remove();
        });
      });
    }

    /* réponses en cours gardées (et sauvegardées en ligne) tant que la copie n'est pas rendue */
    if (opts.draftKey) {
      var draft = readJSON(opts.draftKey) || {};
      container.querySelectorAll('.q').forEach(function (el, i) {
        var d = draft[i]; if (d == null) return;
        if (d === '__idk') { var ib = el.querySelector('.idk'); if (ib && opts.mode !== 'exercise') ib.click(); return; }
        if (el._type === 'qcm') { var r = el.querySelector('input[value="' + d + '"]'); if (r) r.checked = true; }
        else if (el._type === 'input') el.querySelector('input').value = d;
        else el.querySelector('textarea').value = d;
      });
      var saveDraft = function () {
        if (submitted) return;
        var o = {};
        container.querySelectorAll('.q').forEach(function (el, i) {
          if (el.querySelector('.fb').innerHTML) return;
          if (el._idk) { o[i] = '__idk'; return; }
          var a = readAnswer(el);
          if (a !== null && a !== '') o[i] = a;
        });
        writeJSON(opts.draftKey, o);
      };
      container.addEventListener('input', saveDraft);
      container.addEventListener('change', saveDraft);
      container.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('.idk')) setTimeout(saveDraft, 0); });
    }
    var footer = document.createElement('div');
    footer.className = 'btn-row';
    root.appendChild(footer);
    var finishBtn = document.createElement('button');
    finishBtn.className = 'btn';
    footer.appendChild(finishBtn);

    function answeredCount() { return results.filter(function (x) { return x !== undefined; }).length; }
    function updateDone() {
      if (opts.mode === 'exercise') {
        var n = answeredCount();
        finishBtn.textContent = n < questions.length ? ('Terminer les exercices (' + n + '/' + questions.length + ')') : 'Terminer les exercices ✔';
      }
    }

    function submit(force) {
      if (submitted) return;
      var els = container.querySelectorAll('.q');
      if (!force) {
        var missing = 0;
        els.forEach(function (el) {
          var a = readAnswer(el);
          if (!el._idk && (a === null || (typeof a === 'string' && !a.trim()))) missing++;
        });
        if (missing) { ask(missing + ' question(s) sans réponse. Rendre la copie quand même ?', 'Rendre ma copie', function () { submit(true); }, 'Continuer à composer'); return; }
      }
      submitted = true;
      var pendingOpen = false;
      els.forEach(function (el, i) {
        correct(i, el, questions[i]);
        if (el._type === 'open') pendingOpen = true;
      });
      finishBtn.style.display = 'none';
      if (opts.onSubmit) opts.onSubmit();
      if (pendingOpen) {
        var note = document.createElement('div');
        note.className = 'box warn';
        note.innerHTML = '<span class="box-title">Dernière étape : auto-évaluation</span>Pour chaque question rédigée, ' + (SAMPLE ? 'fais-la corriger par le <b>prof IA</b> (🤖), ou ' : '') + 'lis le corrigé type et auto-évalue-toi (« J’ai l’essentiel », « En partie », « À retravailler »). Ta note s’affichera ensuite.';
        container.prepend(note);
        var wait = document.createElement('button');
        wait.className = 'btn';
        wait.textContent = 'Valider mon auto-évaluation et voir ma note';
        footer.appendChild(wait);
        wait.addEventListener('click', function () {
          if (results.some(function (x) { return x === undefined; })) { ask(SAMPLE ? 'Fais d’abord corriger chaque question rédigée : bouton « Corriger avec le prof IA » ou auto-évaluation sous le corrigé.' : 'Auto-évalue d’abord chaque question rédigée, sous son corrigé.'); return; }
          wait.remove(); note.remove(); finish();
        });
      } else finish();
      container.scrollIntoView({ behavior: 'smooth' });
    }

    if (opts.mode === 'exercise') {
      updateDone();
      finishBtn.addEventListener('click', function () {
        if (answeredCount() < questions.length) { ask('Tu n’as pas fait tous les exercices. Terminer quand même ?', 'Terminer', finish, 'Continuer'); return; }
        finish();
      });
    } else {
      finishBtn.textContent = opts.mode === 'test' ? 'Terminer le test et voir mon bilan' : 'Rendre ma copie';
      finishBtn.addEventListener('click', function () { submit(false); });
    }

    function finish() {
      var score = 0, total = 0;
      questions.forEach(function (q, i) {
        var w = q.pts || 1;
        score += (results[i] || 0) * w;
        total += w;
      });
      footer.style.display = 'none';
      if (opts.draftKey) { try { localStorage.removeItem(opts.draftKey); } catch (e) {} }
      opts.onDone(Math.round(score * 100) / 100, total, results);
    }
    return { submit: submit };
  }

  /* ---------- Le prof virtuel : « Mme Rose » ----------
     Sans IA : elle lit le cours diapo par diapo.
     Avec le prof IA (lien claude.ai) : Claude écrit un vrai script oral, mis en cache sur l'appareil,
     et on peut lui poser des questions sur le chapitre. */
  var PROF_NAME = 'Mme Rose';
  var AVATAR = '<svg class="avatar" viewBox="0 0 140 170" aria-hidden="true"><defs>' +
    '<linearGradient id="mrHair" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a6248"/><stop offset="1" stop-color="#6e4234"/></linearGradient>' +
    '<radialGradient id="mrSkin" cx=".5" cy=".42" r=".62"><stop offset="0" stop-color="#fff0e6"/><stop offset="1" stop-color="#f7d2bd"/></radialGradient>' +
    '<linearGradient id="mrTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd0e4"/><stop offset="1" stop-color="#f6a3c8"/></linearGradient>' +
    '<radialGradient id="mrCheek"><stop offset="0" stop-color="#ff8fbd" stop-opacity=".65"/><stop offset="1" stop-color="#ff8fbd" stop-opacity="0"/></radialGradient></defs>' +
    /* cheveux longs ondulés (derrière) */
    '<path d="M25 72 C18 40 40 17 70 17 C100 17 122 40 115 72 C121 98 121 126 110 150 C101 158 90 154 85 144 L55 144 C50 154 39 158 30 150 C19 126 19 98 25 72 Z" fill="url(#mrHair)"/>' +
    '<path d="M30 104 C27 120 30 136 36 146 M110 104 C113 120 110 136 104 146" stroke="#b67a5c" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>' +
    /* gilet rose, col blanc et petit cœur */
    '<path d="M24 170 C26 142 45 127 70 127 C95 127 114 142 116 170 Z" fill="url(#mrTop)"/>' +
    '<path d="M58 128 L70 147 L82 128 C78 126 62 126 58 128 Z" fill="#fff"/>' +
    '<path d="M58 128 C62 136 66 141 70 147 M82 128 C78 136 74 141 70 147" stroke="#f3b6cf" stroke-width="1.6" fill="none"/>' +
    '<path d="M38 150 C38 146 43 145 44.5 148.5 C46 145 51 146 51 150 C51 154 44.5 158 44.5 158 C44.5 158 38 154 38 150 Z" fill="#ff7fb0"/>' +
    '<circle cx="70" cy="155" r="1.8" fill="#fff"/><circle cx="70" cy="163" r="1.8" fill="#fff"/>' +
    /* bras et baguette étoilée */
    '<g class="arm"><path d="M104 150 C117 142 123 126 125 112" stroke="#f8b5d2" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="125" cy="108" r="6" fill="#f9d9c6"/><path d="M126 104 L130 80" stroke="#c9a2e8" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path transform="translate(-4 0)" d="M135 66 L137.6 72.6 L144.5 73 L139 77.4 L141 84 L135 80.2 L129 84 L131 77.4 L125.5 73 L132.4 72.6 Z" fill="#ffd96e" stroke="#ffbf3f" stroke-width=".8"/></g>' +
    '<rect x="64.5" y="100" width="11" height="30" rx="5.5" fill="#f4c8af"/><ellipse cx="70" cy="107" rx="7" ry="3" fill="#e9b498" opacity=".55"/>' +
    '<g class="head">' +
      /* oreilles et perles */
      '<ellipse cx="38.5" cy="75" rx="4.5" ry="6" fill="#f7cdb5"/><ellipse cx="101.5" cy="75" rx="4.5" ry="6" fill="#f7cdb5"/>' +
      '<circle cx="38.5" cy="84" r="2.7" fill="#fff" stroke="#f0d4e4"/><circle cx="101.5" cy="84" r="2.7" fill="#fff" stroke="#f0d4e4"/>' +
      '<ellipse cx="70" cy="71" rx="32" ry="35" fill="url(#mrSkin)"/>' +
      /* frange douce et mèche */
      '<path d="M37 70 C33 40 52 25 72 26 C93 26 107 40 104 66 C99 52 92 45 82 42 C75 51 61 57 47 59 C42 61 39 65 37 70 Z" fill="url(#mrHair)"/>' +
      '<path d="M60 31 C72 28 86 31 95 39" stroke="#c48a6c" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".7"/>' +
      /* barrette fleur */
      '<g transform="translate(95 40)"><circle cx="0" cy="-5" r="4" fill="#ffb3d1"/><circle cx="4.8" cy="-1.5" r="4" fill="#ffc6de"/><circle cx="3" cy="4" r="4" fill="#ffb3d1"/><circle cx="-3" cy="4" r="4" fill="#ffc6de"/><circle cx="-4.8" cy="-1.5" r="4" fill="#ffb3d1"/><circle r="2.6" fill="#ffd96e"/></g>' +
      /* sourcils fins */
      '<path d="M50 59 Q56.5 55.5 63 58 M77 58 Q83.5 55.5 90 59" stroke="#8a5a44" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
      /* grands yeux brillants avec cils */
      '<g class="eyes"><ellipse cx="57" cy="71" rx="5.4" ry="6.6" fill="#3b2238"/><ellipse cx="83" cy="71" rx="5.4" ry="6.6" fill="#3b2238"/>' +
        '<ellipse cx="57" cy="73" rx="3.6" ry="3.4" fill="#7a4a6e" opacity=".7"/><ellipse cx="83" cy="73" rx="3.6" ry="3.4" fill="#7a4a6e" opacity=".7"/>' +
        '<circle cx="59" cy="68.3" r="1.9" fill="#fff"/><circle cx="85" cy="68.3" r="1.9" fill="#fff"/><circle cx="55.4" cy="74.4" r=".9" fill="#fff"/><circle cx="81.4" cy="74.4" r=".9" fill="#fff"/>' +
        '<path d="M50.5 67 Q57 61.5 63.5 66.5 M76.5 66.5 Q83 61.5 89.5 67" stroke="#2b1a2e" stroke-width="2.1" fill="none" stroke-linecap="round"/>' +
        '<path d="M51 67 L47.8 64.6 M52.6 65.2 L50.6 62.4 M89 67 L92.2 64.6 M87.4 65.2 L89.4 62.4" stroke="#2b1a2e" stroke-width="1.4" stroke-linecap="round"/></g>' +
      /* joues, nez, bouche */
      '<ellipse cx="46" cy="84" rx="8" ry="5" fill="url(#mrCheek)"/><ellipse cx="94" cy="84" rx="8" ry="5" fill="url(#mrCheek)"/>' +
      '<path d="M70 79 Q72 82 69 83" stroke="#e2a68b" stroke-width="1.4" fill="none" stroke-linecap="round"/>' +
      '<path class="mouth-closed" d="M63 89 Q70 95.5 77 89" stroke="#d9568f" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      '<ellipse class="mouth-open" cx="70" cy="91" rx="5.6" ry="4.4" fill="#d9568f"/>' +
    '</g></svg>';

  function speechText(s) {
    return s
      .replace(/\[[^\]]*\]/g, ' ')
      .replace(/(\d)\s*\/\s*(\d)/g, '$1 sur $2')
      .replace(/×/g, ' fois ').replace(/÷/g, ' divisé par ').replace(/ − | - /g, ' moins ').replace(/−(\d)/g, 'moins $1')
      .replace(/≤/g, ' inférieur ou égal à ').replace(/≥/g, ' supérieur ou égal à ')
      .replace(/ < /g, ' inférieur à ').replace(/ > /g, ' supérieur à ').replace(/≈/g, ' environ ').replace(/≠/g, ' différent de ')
      .replace(/ = /g, ' égale ').replace(/=/g, ' égale ')
      .replace(/²/g, ' au carré').replace(/³/g, ' au cube')
      .replace(/([⁻]?[⁰¹⁴⁵⁶⁷⁸⁹]+)/g, function (m) { return ' puissance ' + m.replace('⁻', 'moins ').replace(/[⁰¹⁴⁵⁶⁷⁸⁹]/g, function (c) { return '0145 6789'.charAt('⁰¹⁴⁵ ⁶⁷⁸⁹'.indexOf(c)); }); })
      .replace(/√/g, ' racine de ').replace(/π/g, ' pi ').replace(/%/g, ' pour cent').replace(/→/g, ', ').replace(/[∎*]/g, ' ')
      .replace(/km\/h/g, ' kilomètres par heure').replace(/m\/s/g, ' mètres par seconde')
      .replace(/\s+/g, ' ').trim();
  }
  function buildSlides(c, s) {
    var doc = new DOMParser().parseFromString('<div>' + c.lesson + '</div>', 'text/html');
    var root = doc.body.firstChild;
    var slides = [];
    var intro = 'Bonjour ! Aujourd’hui, en ' + s.name.toLowerCase().replace('&', 'et') + ', on travaille le chapitre ' + c.num + ' : ' + c.title + '.';
    if (c.objectifs) {
      var tmp = doc.createElement('div'); tmp.innerHTML = c.objectifs.join(' | ');
      intro += ' Voici ce que le jury attend de toi. ' + tmp.textContent.split(' | ').join('. ') + '. Allez, c’est parti !';
    }
    slides.push({ title: 'Chapitre ' + c.num + ' — ' + c.title, bullets: (c.objectifs || []).map(function (o) { var d = doc.createElement('div'); d.innerHTML = o; return d.textContent; }), speech: intro });
    var cur = null;
    Array.prototype.forEach.call(root.childNodes, function (n) {
      if (n.nodeName === 'H2') { cur = { title: n.textContent, nodes: [] }; slides.push(cur); }
      else if (cur) cur.nodes.push(n);
    });
    slides.forEach(function (sl) {
      if (!sl.nodes) return;
      var wrap = doc.createElement('div');
      sl.nodes.forEach(function (n) { wrap.appendChild(n.cloneNode(true)); });
      var bullets = [];
      wrap.querySelectorAll('li, .box-title, p').forEach(function (e) {
        if (bullets.length < 5 && e.textContent.trim().length > 3) {
          var tx = e.textContent.trim().replace(/\s+/g, ' ');
          bullets.push(tx.length > 120 ? tx.slice(0, 117) + '…' : tx);
        }
      });
      if (!bullets.length && wrap.querySelector('table')) bullets.push('Regarde bien le tableau du cours : je te le lis.');
      wrap.querySelectorAll('td, th').forEach(function (e) { e.append(', '); });
      wrap.querySelectorAll('p, li, h3, h4, tr, div, pre, .box-title').forEach(function (e) { e.append('. '); });
      wrap.querySelectorAll('br').forEach(function (e) { e.replaceWith('. '); });
      sl.speech = sl.title + '. ' + wrap.textContent;
      sl.bullets = bullets;
      delete sl.nodes;
    });
    if (c.resume) {
      var r = doc.createElement('div'); r.innerHTML = c.resume;
      var items = Array.prototype.map.call(r.querySelectorAll('li'), function (e) { return e.textContent; });
      slides.push({ title: '🧠 À retenir', bullets: items, speech: 'Pour finir, ce qu’il faut retenir absolument. ' + items.join('. ') + '. Bravo, tu as terminé la leçon ! Maintenant, passe aux exercices pour t’entraîner.' });
    }
    return toSentences(slides);
  }
  function toSentences(slides) {
    slides.forEach(function (sl) {
      var txt = speechText(sl.speech.replace(/\.\s*\./g, '.').replace(/,\s*\./g, '.'));
      var parts = txt.match(/[^.!?;]+[.!?;]*/g) || [txt];
      var out = [];
      parts.forEach(function (p) {
        p = p.trim(); if (p.replace(/[.,;:!? ]/g, '').length < 2) return;
        while (p.length > 220) { var cut = p.lastIndexOf(',', 200); if (cut < 60) cut = 200; out.push(p.slice(0, cut + 1)); p = p.slice(cut + 1).trim(); }
        out.push(p);
      });
      sl.sentences = out;
    });
    return slides;
  }

  function lessonPlain(c) {
    var d = document.createElement('div');
    d.innerHTML = c.lesson;
    d.querySelectorAll('td, th').forEach(function (e) { e.append(' | '); });
    d.querySelectorAll('p, li, h2, h3, tr, div, pre').forEach(function (e) { e.append('\n'); });
    return d.textContent.replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
  }
  var PROF_KEY = 'crpe-prof-v1/';
  function cachedScript(s, c) { try { return JSON.parse(localStorage.getItem(PROF_KEY + s.id + '/' + c.id)); } catch (e) { return null; } }
  function aiScript(s, c) {
    var prompt = 'Tu es ' + PROF_NAME + ', professeure des écoles et formatrice pour le CRPE : chaleureuse, claire, encourageante. ' +
      'Transforme la leçon ci-dessous en script de vidéo pédagogique pour une candidate au CRPE niveau licence qui part de zéro.\n\n' +
      'MATIÈRE : ' + s.name + '\nCHAPITRE : ' + c.title + '\nOBJECTIFS : ' + plain((c.objectifs || []).join(' ; ')) + '\n\nLEÇON :\n' + lessonPlain(c).slice(0, 14000) +
      '\n\nConsignes :\n- 7 à 10 diapos, dans l’ordre de la leçon. Diapo 1 : accueil chaleureux et ce qu’on va apprendre. Dernière diapo : récapitulatif des points clés, encouragement, invitation à faire les exercices.\n' +
      '- « oral » : ce que tu dis à voix haute, 70 à 140 mots, tutoiement, phrases courtes et naturelles, comme une vraie prof devant sa classe ; explique avec tes mots, donne au moins un exemple concret par diapo, pose parfois une petite question (« À ton avis… ? ») puis réponds-y ; signale les pièges du concours.\n' +
      '- Le texte « oral » sera lu par une synthèse vocale : n’utilise ni symbole mathématique, ni abréviation, ni emoji, ni markdown (écris « trois quarts », « au carré », « égale », « kilomètres par heure »).\n' +
      '- « points » : 2 à 4 phrases très courtes (moins de 70 caractères) affichées au tableau ; les symboles et nombres y sont permis.\n' +
      '- Reste fidèle à la leçon : n’invente aucune règle.\n\n' +
      'Réponds UNIQUEMENT avec un objet JSON : {"diapos":[{"titre":"...","points":["..."],"oral":"..."}]}';
    return SAMPLE.json(prompt, { cache: { gcTime: 86400000 } }).then(function (r) {
      var d = r && Array.isArray(r.diapos) ? r.diapos : null;
      if (!d || d.length < 3) throw { code: 'invalid_json' };
      var slides = d.filter(function (x) { return x && x.oral; }).map(function (x) {
        return { title: String(x.titre || ''), bullets: (Array.isArray(x.points) ? x.points : []).slice(0, 4).map(String), speech: String(x.oral) };
      });
      try { localStorage.setItem(PROF_KEY + s.id + '/' + c.id, JSON.stringify(slides)); } catch (e) {}
      return slides;
    });
  }

  /* On cherche la voix la plus douce et naturelle : voix féminines « premium / améliorées / naturelles » d'abord. */
  function voiceScore(v) {
    var n = v.name;
    var sc = 0;
    if (/premium/i.test(n)) sc += 6;
    if (/natural|neural|enhanced|améliorée|amelioree|online/i.test(n)) sc += 5;
    if (/google/i.test(n)) sc += 2;
    if (/amélie|amelie|audrey|aurélie|aurelie|denise|vivienne|eloise|éloïse|marie|julie|léa|lea|céline|celine|hortense|virginie|charlotte|sylvie|brigitte|marion|chantal|juliette|clara|ariane|sophie/i.test(n)) sc += 3;
    if (/thomas|daniel|nicolas|paul|henri|mathieu|rémi|remi|antoine|guillaume|jacques|claude|alain|yves|jean|gérard|gerard|fabrice|hugo|male/i.test(n)) sc -= 4;
    if (/fr-FR/i.test(v.lang)) sc += 1;
    return sc;
  }

  function profPlayer(root, c, s) {
    var base = buildSlides(c, s);
    var slides = base, mode = 'cours';
    var synth = window.speechSynthesis;
    var canSpeak = !!(synth && window.SpeechSynthesisUtterance);
    var si = 0, ti = 0, playing = false, token = 0, timer = null, rate = 0.94, loading = false;
    var voices = [], voice = null;
    function loadVoices() {
      if (!canSpeak) return;
      voices = synth.getVoices().filter(function (v) { return /^fr/i.test(v.lang); }).sort(function (a, b) { return voiceScore(b) - voiceScore(a); });
      var saved = null; try { saved = localStorage.getItem('crpe-voice'); } catch (e) {}
      voice = voices.filter(function (v) { return v.name === saved; })[0] || voices[0] || null;
      var sel = root.querySelector('.prof-voice');
      if (sel) {
        sel.innerHTML = voices.length ? voices.map(function (v, k) { return '<option value="' + k + '"' + (v === voice ? ' selected' : '') + '>' + esc(v.name.replace(/Microsoft |Google |\(.*\)/g, '').trim() || v.name) + '</option>'; }).join('') : '<option>Voix par défaut</option>';
      }
    }

    root.innerHTML = '<div class="prof">' +
      '<div class="prof-modes" role="tablist">' +
        '<button class="pmode on" data-m="cours" role="tab">📖 Le cours lu</button>' +
        (STANDALONE ? '' : '<button class="pmode" data-m="ia" role="tab">✨ Explication de ' + PROF_NAME + '</button>') +
      '</div>' +
      '<div class="prof-screen">' +
        '<div class="prof-slide"><div class="prof-kicker">' + s.icon + ' ' + esc(s.name) + ' · chapitre ' + c.num + '</div><h3></h3><ul></ul></div>' +
        '<div class="prof-avatar">' + AVATAR + '<span class="prof-name">' + PROF_NAME + '</span></div>' +
        '<div class="prof-sub"></div>' +
        '<button class="prof-big" aria-label="Lancer la vidéo">▶</button>' +
      '</div>' +
      '<div class="prof-bar"></div>' +
      '<div class="prof-ctrl">' +
        '<button class="pbtn prev" aria-label="Diapo précédente">⏮</button>' +
        '<button class="pbtn play" aria-label="Lecture">▶</button>' +
        '<button class="pbtn next" aria-label="Diapo suivante">⏭</button>' +
        '<span class="prof-count"></span>' +
        '<select class="prof-rate" aria-label="Vitesse"><option value="0.84">Tout doux</option><option value="0.94" selected>Normal</option><option value="1.08">Rapide</option></select>' +
        (canSpeak ? '<select class="prof-voice" aria-label="Voix"></select>' : '') +
      '</div>' +
      '<p class="prof-note small muted"></p>' +
      '<div class="prof-ask">' +
        '<div class="prof-ask-head"><div class="mini-av">' + AVATAR + '</div><div><b>Discute avec ' + PROF_NAME + '</b><small>Elle te répond à voix haute, t’interroge et corrige tes réponses.</small></div></div>' +
        '<div class="chips"><button type="button" class="chip" data-q="quiz">🙋 Interroge-moi</button><button type="button" class="chip" data-q="simple">🧸 Explique plus simplement</button><button type="button" class="chip" data-q="exemple">💡 Un exemple du concours</button></div>' +
        '<div class="prof-chat" aria-live="polite"></div>' +
        '<form class="prof-ask-form"><button type="button" class="mic" hidden aria-label="Parler à ' + PROF_NAME + '">🎤</button><label class="sr" for="askIn' + c.id + '">Ton message</label><input id="askIn' + c.id + '" type="text" autocomplete="off" placeholder="Écris ou dicte ta réponse…"><button class="btn" type="submit">Envoyer</button></form>' +
        (canSpeak ? '<label class="voice-toggle"><input type="checkbox" class="autovoice" checked> 🔊 Elle répond à voix haute</label>' : '') +
        '<p class="small muted mic-tip">📱 Sur iPhone, touche le champ puis le <b>micro du clavier</b> 🎙️ pour lui parler au lieu d’écrire.</p>' +
      '</div>' +
    '</div>';
    var $ = function (q) { return root.querySelector(q); };
    var screen = $('.prof-screen'), sub = $('.prof-sub'), bar = $('.prof-bar'), playBtn = $('.play'), big = $('.prof-big'), note = $('.prof-note');
    if (!canSpeak) note.textContent = 'Ton navigateur ne permet pas la lecture à voix haute : ' + PROF_NAME + ' affiche ses explications en sous-titres.';
    loadVoices();
    if (canSpeak && synth.addEventListener) synth.addEventListener('voiceschanged', loadVoices);

    function drawBar() { bar.innerHTML = slides.map(function (x, k) { return '<button title="' + esc(x.title) + '" data-k="' + k + '"></button>'; }).join(''); }
    function show() {
      var sl = slides[si];
      $('.prof-slide h3').textContent = sl.title;
      $('.prof-slide ul').innerHTML = sl.bullets.map(function (b, k) { return '<li style="animation-delay:' + (k * 0.25) + 's">' + esc(b) + '</li>'; }).join('');
      $('.prof-count').textContent = (si + 1) + ' / ' + slides.length;
      bar.querySelectorAll('button').forEach(function (b, k) { b.className = k < si ? 'done' : k === si ? 'cur' : ''; });
      sub.textContent = sl.sentences[ti] || '';
    }
    function stop() {
      token++;
      if (canSpeak) synth.cancel();
      clearTimeout(timer);
      screen.classList.remove('talking');
    }
    function setPlaying(p) {
      playing = p;
      playBtn.textContent = p ? '⏸' : '▶';
      big.hidden = p;
      if (!p) stop(); else speak();
    }
    function advance() {
      ti++;
      if (ti >= slides[si].sentences.length) {
        ti = 0; si++;
        if (si >= slides.length) {
          si = slides.length - 1; ti = 0; setPlaying(false);
          sub.textContent = '🎉 Fin de la vidéo. Passe aux exercices !';
          if (!state.flags.profDone) { state.flags.profDone = 1; save(); }
          once('prof/' + s.id + '/' + c.id, 15, 'vidéo du prof regardée');
          return;
        }
      }
      show(); speak();
    }
    function say(text, onEnd) {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = (voice && voice.lang) || 'fr-FR'; if (voice) u.voice = voice; u.rate = rate; u.pitch = 1.08; u.volume = 0.95;
      u.onend = onEnd; u.onerror = onEnd;
      synth.speak(u);
    }
    function speak() {
      if (!playing) return;
      var my = ++token;
      var text = slides[si].sentences[ti] || '';
      sub.textContent = text;
      screen.classList.add('talking');
      if (canSpeak) {
        say(text, function () { if (my === token) { screen.classList.remove('talking'); timer = setTimeout(function () { if (my === token) advance(); }, 380); } });
      } else {
        timer = setTimeout(function () { if (my === token) advance(); }, Math.max(1800, text.length * 60 / rate));
      }
    }
    function go(k) { stop(); si = Math.max(0, Math.min(slides.length - 1, k)); ti = 0; show(); if (playing) speak(); }
    function useSlides(list, m) {
      stop(); slides = list; mode = m; si = 0; ti = 0; drawBar(); show();
      root.querySelectorAll('.pmode').forEach(function (b) { b.classList.toggle('on', b.dataset.m === m); });
    }
    function startIA(autoplay) {
      if (loading) return;
      var cached = cachedScript(s, c);
      if (cached && cached.length) { useSlides(toSentences(cached), 'ia'); if (autoplay) setPlaying(true); return; }
      if (!SAMPLE) {
        note.textContent = STANDALONE ? '' : 'L’explication de ' + PROF_NAME + ' est préparée par le prof IA : ouvre le site depuis ton lien claude.ai pour en profiter. En attendant, écoute le cours lu.';
        return;
      }
      loading = true; setPlaying(false);
      screen.classList.add('preparing');
      $('.prof-slide h3').textContent = PROF_NAME + ' prépare ton cours…';
      $('.prof-slide ul').innerHTML = '<li>✨ Elle relit la leçon</li><li>✏️ Elle choisit des exemples</li><li>💖 Ça prend environ une minute, la première fois seulement</li>';
      sub.textContent = '';
      note.textContent = '';
      aiScript(s, c).then(function (list) {
        useSlides(toSentences(list), 'ia');
        if (autoplay) setPlaying(true);
      }).catch(function (e) {
        note.textContent = aiError(e) + ' Le cours lu reste disponible.';
        useSlides(base, 'cours');
      }).then(function () { loading = false; screen.classList.remove('preparing'); });
    }

    playBtn.addEventListener('click', function () { setPlaying(!playing); });
    big.addEventListener('click', function () { if (mode === 'cours' && SAMPLE && !cachedScript(s, c)) startIA(true); else setPlaying(true); });
    $('.prev').addEventListener('click', function () { go(si - 1); });
    $('.next').addEventListener('click', function () { go(si + 1); });
    bar.addEventListener('click', function (e) { if (e.target.dataset.k) go(+e.target.dataset.k); });
    $('.prof-rate').addEventListener('change', function () { rate = parseFloat(this.value); if (playing) { stop(); speak(); } });
    var vsel = $('.prof-voice');
    if (vsel) vsel.addEventListener('change', function () {
      voice = voices[+this.value] || voice;
      try { localStorage.setItem('crpe-voice', voice.name); } catch (e) {}
      if (playing) { stop(); speak(); }
    });
    root.querySelectorAll('.pmode').forEach(function (b) {
      b.addEventListener('click', function () { if (b.dataset.m === 'ia') startIA(false); else useSlides(base, 'cours'); });
    });

    /* Discussion avec Mme Rose : elle répond à voix haute, interroge et corrige */
    var askBox = $('.prof-ask'), chat = $('.prof-chat'), askForm = $('.prof-ask-form'), askIn = $('#askIn' + c.id), micBtn = $('.mic'), auto = $('.autovoice');
    if (STANDALONE && askBox) askBox.hidden = true;
    var chatKey = 'crpe-chat/' + s.id + '/' + c.id;
    var turns = [], askCtl = null, asking = false, replyToken = 0;
    try { turns = JSON.parse(localStorage.getItem(chatKey)) || []; } catch (e) { turns = []; }
    function saveChat() { try { localStorage.setItem(chatKey, JSON.stringify(turns.slice(-60))); } catch (e) {} }
    var rules = 'Tu es ' + PROF_NAME + ', professeure des écoles et formatrice CRPE : douce, chaleureuse, patiente et très pédagogue. ' +
      'Tu discutes en direct, à l’oral, avec une candidate au CRPE (niveau licence) qui révise le chapitre « ' + c.title + ' » (' + s.name + '). ' +
      'Ta priorité absolue : VULGARISER AU MAXIMUM. Explique comme à une amie qui découvre la notion pour la première fois : des mots de tous les jours, pas de jargon (et si un mot technique est indispensable, explique-le aussitôt avec des mots simples), une image ou une comparaison de la vie quotidienne, un exemple concret et très simple, puis étape par étape. Si elle ne comprend pas, réexplique autrement, encore plus simplement, avec une autre image. ' +
      'Règles : tutoie-la ; réponds comme on parle, en phrases courtes (120 mots maximum) ; tes réponses sont lues par une synthèse vocale, donc pas de symboles mathématiques, pas d’abréviations, pas d’emoji, pas de markdown, pas de listes (écris « trois quarts », « égale », « au carré ») ; ' +
      'donne un exemple concret quand c’est utile ; termine le plus souvent par une petite question pour faire réfléchir ou vérifier qu’elle a compris. ' +
      'Quand elle te demande de l’interroger : pose UNE seule question à la fois, attends sa réponse, puis dis-lui avec bienveillance si c’est juste ou non, explique la bonne réponse et propose la question suivante. ' +
      'Encourage-la sincèrement, sans en faire trop. Reste fidèle à la leçon suivante :\n\n' + lessonPlain(c).slice(0, 9000);
    var CHIPS = {
      quiz: 'Interroge-moi sur ce chapitre : pose-moi une seule question, puis attends ma réponse.',
      simple: 'Réexplique-moi l’essentiel de ce chapitre le plus simplement possible, avec des mots de tous les jours et une comparaison de la vie quotidienne, comme à quelqu’un qui n’y connaît rien.',
      exemple: 'Donne-moi un exemple typique du concours sur ce chapitre, puis demande-moi de le résoudre.'
    };
    function bubble(who, text, noScroll) {
      var el = document.createElement('div');
      el.className = 'pmsg ' + who;
      el.innerHTML = '<div class="ptxt"></div>' + (who === 'prof' && canSpeak ? '<button class="pspeak" type="button" aria-label="Réécouter">🔊</button>' : '');
      el.querySelector('.ptxt').textContent = text;
      chat.appendChild(el);
      var sp = el.querySelector('.pspeak');
      if (sp) sp.addEventListener('click', function () { speakReply(el.querySelector('.ptxt').textContent, false); });
      if (!noScroll) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return el.querySelector('.ptxt');
    }
    /* historique de la discussion sur ce chapitre */
    if (turns.length) {
      var hist = document.createElement('div');
      hist.className = 'chat-hist small muted';
      hist.innerHTML = '💬 Ta discussion sur ce chapitre <button class="linkbtn" type="button">Effacer</button>';
      chat.appendChild(hist);
      hist.querySelector('button').addEventListener('click', function () {
        turns = []; saveChat(); chat.innerHTML = ''; toast('Discussion effacée');
      });
      turns.forEach(function (t) { bubble(t.role === 'user' ? 'me' : 'prof', t.label || t.content, true); });
      setTimeout(function () { chat.scrollTop = chat.scrollHeight; }, 0);
    }
    function speakReply(text, thenListen) {
      if (!canSpeak) return;
      setPlaying(false);
      synth.cancel();
      var my = ++replyToken;
      var parts = toSentences([{ speech: text }])[0].sentences;
      var i = 0;
      askBox.classList.add('talking');
      (function next() {
        if (my !== replyToken) return;
        if (i >= parts.length) {
          askBox.classList.remove('talking');
          if (thenListen && micWorks && /\?\s*$/.test(text)) listen();
          return;
        }
        say(parts[i++], function () { if (my === replyToken) setTimeout(next, 320); });
      })();
    }
    function stopReply() { replyToken++; askBox.classList.remove('talking'); }
    function send(q, label) {
      if (!q || asking) return;
      if (!SAMPLE) { note.textContent = 'La discussion avec ' + PROF_NAME + ' fonctionne quand le site est ouvert depuis ton lien claude.ai.'; return; }
      stopReply(); if (canSpeak) synth.cancel();
      bubble('me', label || q);
      turns.push(label ? { role: 'user', content: q, label: label } : { role: 'user', content: q });
      var out = bubble('prof', '…');
      out.parentNode.classList.add('typing');
      asking = true;
      askCtl = new AbortController();
      var ctxTurns = turns.slice(-16).map(function (t) { return { role: t.role, content: t.content }; });
      if (ctxTurns[0] && ctxTurns[0].role !== 'user') ctxTurns.shift();
      SAMPLE([{ role: 'user', content: rules + '\n\n(Début de la discussion.)' }, { role: 'assistant', content: 'D’accord, je t’écoute.' }].concat(ctxTurns), { cache: false, signal: askCtl.signal, onText: function (u) { out.parentNode.classList.remove('typing'); out.textContent = u.text; } })
        .then(function (r) {
          out.parentNode.classList.remove('typing');
          turns.push({ role: 'assistant', content: r.text });
          saveChat();
          addXP(2);
          if (!auto || auto.checked) speakReply(r.text, true);
        })
        .catch(function (err) { out.parentNode.classList.remove('typing'); out.textContent = aiError(err); turns.pop(); })
        .then(function () { asking = false; });
    }
    askForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = askIn.value.trim();
      askIn.value = '';
      send(q);
    });
    root.querySelectorAll('.chip').forEach(function (b) {
      b.addEventListener('click', function () { send(CHIPS[b.dataset.q], b.textContent); });
    });
    if (auto) auto.addEventListener('change', function () { if (!auto.checked) { stopReply(); if (canSpeak) synth.cancel(); } });

    /* Micro : reconnaissance vocale du navigateur quand elle est autorisée ; sinon, dictée du clavier */
    var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    var rec = null, micWorks = false, listening = false;
    function listen() {
      if (!Rec || listening) return;
      try {
        rec = new Rec();
        rec.lang = 'fr-FR'; rec.interimResults = true; rec.continuous = false;
        var finalText = '';
        rec.onresult = function (ev) {
          var t = '';
          for (var k = 0; k < ev.results.length; k++) { t += ev.results[k][0].transcript; if (ev.results[k].isFinal) finalText = t; }
          askIn.value = t;
        };
        rec.onerror = function (ev) {
          if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed' || ev.error === 'audio-capture') {
            micBtn.hidden = true; micWorks = false;
            note.textContent = 'Le micro direct n’est pas autorisé ici : utilise le micro de ton clavier pour dicter tes réponses.';
          }
        };
        rec.onend = function () {
          listening = false; micBtn.classList.remove('on');
          var t = (finalText || askIn.value).trim();
          if (t) { micWorks = true; askIn.value = ''; send(t); }
        };
        stopReply(); if (canSpeak) synth.cancel();
        rec.start(); listening = true; micBtn.classList.add('on');
      } catch (e) { micBtn.hidden = true; }
    }
    if (Rec) {
      micBtn.hidden = false;
      micBtn.addEventListener('click', function () { if (listening && rec) rec.stop(); else listen(); });
    }

    drawBar(); show();
    var pre = cachedScript(s, c);
    if (pre && pre.length) useSlides(toSentences(pre), 'ia');
    return function () { stop(); stopReply(); if (askCtl) askCtl.abort(); if (rec && listening) { try { rec.abort(); } catch (e) {} } };
  }

  /* ---------- Vues ---------- */
  function setTab(name) {
    document.querySelectorAll('#mainTabs a').forEach(function (a) { a.classList.toggle('active', a.dataset.tab === name); });
  }

  function nextMission() {
    var order = [];
    ['maths', 'francais'].forEach(function (k) {
      var r = state.tests[k], s = subj(k);
      if (r && s) s.chapters.forEach(function (c) { var b = r.byChap[c.id]; if (b && b.t && b.s / b.t < 0.5) order.push([k, c]); });
    });
    SUBJECTS.forEach(function (s) { s.chapters.forEach(function (c) { order.push([s.id, c]); }); });
    for (var i = 0; i < order.length; i++) {
      var x = peekChap(order[i][0], order[i][1].id);
      if (x.evalBest == null || on20(x.evalBest, x.evalTotal) < 15) return { s: subj(order[i][0]), c: order[i][1], st: x };
    }
    return null;
  }

  function viewHome() {
    setTab('home');
    var l = levelInfo(state.xp), m = nextMission();
    var html = '<section class="hero"><h1>Bienvenue ' + (SESSION.short ? esc(SESSION.short) + ' ' : '') + 'sur ton espace CRPE L3 🎯</h1>' +
      '<p>Un parcours complet, pas à pas, comme avec un professeur particulier : on repère tes lacunes, puis on reprend tout, chapitre par chapitre.</p>' +
      '<div class="hero-stats"><div><b>' + state.xp + '</b><span>XP</span></div><div><b>' + l.n + '</b><span>' + l.name + '</span></div><div><b>🔥 ' + streak() + '</b><span>jour(s) d’affilée</span></div></div>' +
      '<div class="bar light"><i style="width:' + pct(l.into, l.need) + '%"></i></div><p class="small">Encore ' + (l.need - l.into) + ' XP avant le niveau ' + (l.n + 1) + '</p></section>';
    html += countdownCard() + '<a class="small cloud-state" id="cloudState" href="#/progression">' + cloudText() + '</a>';
    var dsH = dailyState(), dToday = dsH.results[dayNum()], pl = eveningPlan();
    html += '<div class="card daily-home"><div class="row"><b>☀️ Test du jour</b>' + (dToday ? '<span class="badge ok">✔ ' + fr(dToday.s) + '/' + dToday.t + '</span>' : '<a class="btn" href="#/jour">Faire mon test (5 min)</a>') + '</div>' +
      '<p class="small muted" style="margin:8px 0 4px">🌙 Ce soir : ' + pl.map(function (o) { return '<a href="#/chap/' + o.s.id + '/' + o.c.id + '/cours">' + o.s.icon + ' ' + esc(o.c.short || o.c.title) + '</a>'; }).join(' et ') + '</p></div>';
    var hh = (state.history || []).filter(function (h) { return h.w === 1; });
    if (hh.length) {
      var a3 = avg(hh.slice(-3).map(function (h) { return h.n; }));
      html += '<a class="card goal-card" href="#/progression"><span class="mission-ico">🎯</span><span><b>Objectif ' + target() + '/20 à l’écrit</b><small>Moyenne de tes 3 derniers écrits 1 : <b>' + fr(a3) + '/20</b>' + (a3 >= target() ? ' : objectif atteint, continue comme ça ! 🎉' : ' : encore ' + fr(Math.round((target() - a3) * 10) / 10) + ' point(s). Voir mon plan →') + '</small></span></a>';
    }
    if (!state.tests.maths || !state.tests.francais) {
      html += '<div class="card mission"><div class="mission-ico">🧭</div><div><b>Mission du jour</b><p>Commence par le test de positionnement : il te dira quels chapitres travailler en priorité.</p><a class="btn" href="#/positionnement">Passer le test (+50 XP)</a></div></div>';
    } else if (m) {
      var step = m.st.exDone ? 'evaluation' : m.st.read ? 'exercices' : 'cours';
      html += '<div class="card mission" style="--c:var(--' + m.s.id + ');--ci:var(--' + m.s.id + '-ink)"><div class="mission-ico">' + m.s.icon + '</div><div><b>Mission du jour</b><p>' + m.s.name + ' · Chapitre ' + m.c.num + ' — ' + m.c.title + '</p><a class="btn" href="#/chap/' + m.s.id + '/' + m.c.id + '/' + step + '">' +
        (step === 'cours' ? 'Regarder la vidéo et lire le cours' : step === 'exercices' ? 'Faire les exercices' : 'Passer l’évaluation') + '</a></div></div>';
    }
    html += '<div class="card"><h2 style="margin-top:0">Ton parcours</h2>' +
      '<ol><li><b>Test de positionnement</b> en maths et en français : il touche tous les thèmes et te dit quels chapitres sont prioritaires.</li>' +
      '<li><b>Leçons</b> : pour chaque chapitre, la <b>vidéo du prof virtuel</b>, le cours détaillé, puis les <b>exercices corrigés</b>.</li>' +
      '<li><b>Évaluation de fin de chapitre</b> notée sur 20 : vise 15/20 pour valider le chapitre.</li>' +
      '<li><b>Concours blancs</b> chronométrés, au format de l’écrit, avec barème et corrigé détaillé.</li>' +
      '<li><b>Entraînement illimité</b> : des séries de questions sans fin, de la banque du site' + (STANDALONE ? '' : ' ou inventées par le prof IA') + '.</li></ol>' +
      '<div class="btn-row"><a class="btn" href="#/lecons">Voir les leçons</a><a class="btn secondary" href="#/entrainement">♾️ Entraînement illimité</a><a class="btn secondary" href="#/concours">Concours blancs</a></div></div>';
    html += '<h2>Les matières</h2><div class="grid">' + lessonSubjects().map(function (s) {
      var done = doneCount(s.id);
      return '<a class="card subj-card" style="--c:var(--' + s.id + ');--ci:var(--' + s.id + '-ink)" href="#/lecons/' + s.id + '"><h3>' + s.icon + ' ' + s.name + '</h3><p>' +
        s.chapters.length + ' chapitres · ' + done + ' terminé(s) · ' + acquired(s.id) + ' ⭐</p><div class="bar" style="margin-top:8px"><i style="width:' + pct(done, s.chapters.length) + '%"></i></div></a>';
    }).join('') + '</div>';
    html += '<div class="card"><h2 style="margin-top:0">Le CRPE niveau licence (bac+3) : les épreuves</h2>' +
      '<p>D’après le site officiel <a href="https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac3-de-recrutement-de-professeurs-des-ecoles-1380" target="_blank" rel="noopener">devenirenseignant.gouv.fr</a> :</p>' +
      '<table class="exam-table"><tr><th>Épreuve</th><th>Format</th></tr>' +
      '<tr><td><b>Écrit 1 · Français et mathématiques</b></td><td>4 h, coefficient 5. Deux parties indépendantes d’environ 2 h : <b>français à partir d’un texte littéraire</b>, puis <b>maths en plusieurs exercices ou problèmes</b>. Chaque partie est notée sur 10 ; <b>moins de 2,5/10 à une partie est éliminatoire</b>. Programme : français et maths du <b>cycle 4</b> (collège).</td></tr>' +
      '<tr><td><b>Écrit 2 · Un domaine au choix</b></td><td><b>Un seul domaine choisi</b> : histoire-géographie-EMC, sciences et technologie, arts, ou langue vivante (anglais, allemand, espagnol, italien), au niveau du <b>cycle 4</b>.</td></tr>' +
      '<tr><td><b>Oral 1 · Français ou maths</b></td><td>Choisi à l’inscription. 1 h de préparation, puis 1 h : 20 min d’exposé sur une notion, 40 min d’échange. Coefficient 5.</td></tr>' +
      '<tr><td><b>Oral 2 · Entretien avec le jury</b></td><td>5 min de présentation (motivation, parcours) et 10 min d’échange, puis 20 min d’entretien avec une <b>mise en situation</b> : valeurs de la République, laïcité, service public, égalité filles-garçons, lutte contre les discriminations, transition écologique, épanouissement de l’élève.</td></tr></table>' +
      '<p class="small muted">⚠ Certains détails (durée et coefficient du 2ᵉ écrit, place de l’EPS à l’oral) varient selon les sources et les textes ont été modifiés en 2026 : vérifie toujours la page officielle de ta session.</p>' +
      '<div class="btn-row"><a class="btn secondary" href="https://www.devenirenseignant.gouv.fr/le-programme-des-epreuves-des-concours-externes-bac3-de-recrutement-de-professeurs-des-ecoles-1382" target="_blank" rel="noopener">Programme officiel</a><a class="btn secondary" href="https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405" target="_blank" rel="noopener">Sujets zéro officiels</a></div></div>';
    app.innerHTML = html;
  }

  function viewPosHome() {
    setTab('positionnement');
    var html = '<h1>🧭 Tests</h1><h2 style="margin-top:0">Test de positionnement</h2><p>Ce test balaie <b>tous les thèmes</b> du programme. Réponds sans calculatrice ni aide, comme le jour du concours : le but n’est pas d’avoir une bonne note mais de savoir <b>où tu en es</b>. À la fin, tu obtiens un bilan par chapitre avec les priorités de révision.</p>';
    html += '<div class="grid">' + Object.keys(POS).map(function (k) {
      var p = POS[k], last = state.tests[k];
      return '<div class="card subj-card" style="--c:var(--' + k + ');--ci:var(--' + k + '-ink)"><h3>' + p.icon + ' ' + p.title + '</h3><p>' + p.questions.length +
        ' questions · environ ' + p.duration + ' min</p>' +
        (last ? '<p style="margin-top:6px">Dernier résultat : <b>' + on20(last.score, last.total) + '/20</b> <span class="small">(' + new Date(last.date).toLocaleDateString('fr-FR') + ')</span></p>' : '') +
        '<div class="btn-row"><a class="btn" href="#/positionnement/' + k + '">' + (last ? 'Refaire le test' : 'Commencer') + '</a>' +
        (last ? '<a class="btn secondary" href="#/bilan/' + k + '">Voir mon bilan</a>' : '') + '</div></div>';
    }).join('') + '</div>';
    html += '<a class="card sim-card train-card" href="#/entrainement"><span class="sim-ico">♾️</span><span><b>Entraînement illimité</b><small>Des séries de 10 questions sans fin, par matière ou par chapitre : banque du site ou questions inventées par le prof IA.</small></span></a>';
    html += '<div class="box tip"><span class="box-title">Conseil de prof</span>Si tu ne sais pas, ne réponds pas au hasard : laisse vide. Le bilan sera plus juste et tes révisions mieux ciblées.</div>';
    app.innerHTML = html;
  }

  function viewPosTest(k) {
    setTab('positionnement');
    var p = POS[k];
    if (!p) return viewPosHome();
    var s = subj(k);
    app.innerHTML = '<div class="breadcrumb"><a href="#/positionnement">Positionnement</a> › ' + p.title + '</div>' +
      '<h1>' + p.icon + ' ' + p.title + '</h1><p class="muted">' + p.questions.length + ' questions couvrant les ' + (s ? s.chapters.length : '') + ' chapitres. Toutes les questions sont corrigées à la fin.</p><div id="quiz"></div>';
    renderQuiz(document.getElementById('quiz'), p.questions, {
      mode: 'test', uid: 'pos' + k,
      labels: function (q, i) {
        var c = s && chap(s, q.chap);
        return 'Question ' + (i + 1) + ' / ' + p.questions.length + (c ? ' · ' + esc(c.short || c.title) : '');
      },
      onDone: function (score, total, results) {
        var by = {};
        p.questions.forEach(function (q, i) {
          if (!by[q.chap]) by[q.chap] = { s: 0, t: 0 };
          by[q.chap].s += results[i] || 0; by[q.chap].t += 1;
        });
        state.tests[k] = { date: Date.now(), score: score, total: total, byChap: by };
        save();
        once('pos/' + k, 50, 'test de positionnement');
        var box = document.createElement('div');
        box.innerHTML = '<div class="score" style="--c:var(--' + k + ');--ci:var(--' + k + '-ink)"><div class="big">' + fr(on20(score, total)) + '/20</div><div>' + score + ' bonne(s) réponse(s) sur ' + total + '</div>' +
          '<div class="btn-row" style="justify-content:center"><a class="btn" href="#/bilan/' + k + '">Voir mon bilan détaillé</a></div></div>';
        document.getElementById('quiz').prepend(box);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  function viewBilan(k) {
    setTab('positionnement');
    var p = POS[k], r = state.tests[k], s = subj(k);
    if (!p || !r || !s) return viewPosHome();
    var rows = s.chapters.map(function (c) {
      var b = r.byChap[c.id] || { s: 0, t: 0 };
      return { c: c, p: b.t ? pct(b.s, b.t) : null, b: b };
    });
    var prio = rows.filter(function (x) { return x.p !== null && x.p < 50; });
    var html = '<div class="breadcrumb"><a href="#/positionnement">Positionnement</a> › Bilan</div>' +
      '<h1>' + p.icon + ' Bilan : ' + p.title + '</h1>' +
      '<div class="score" style="--c:var(--' + k + ');--ci:var(--' + k + '-ink)"><div class="big">' + fr(on20(r.score, r.total)) + '/20</div><div class="muted">Test passé le ' + new Date(r.date).toLocaleDateString('fr-FR') + '</div></div>';
    html += '<div class="card"><h2 style="margin-top:0">Tes priorités</h2>' +
      (prio.length ? '<p>Commence par ces chapitres (dans cet ordre, qui suit le programme) :</p><ol>' + prio.map(function (x) {
        return '<li><a href="#/chap/' + k + '/' + x.c.id + '/cours">Chapitre ' + x.c.num + ' — ' + x.c.title + '</a></li>';
      }).join('') + '</ol>' : '<p>Aucun chapitre en dessous de 50 % : bravo ! Suis tout de même les chapitres dans l’ordre pour consolider.</p>') + '</div>';
    html += '<div class="card"><h2 style="margin-top:0">Détail par chapitre</h2>' + rows.map(function (x) {
      return '<div style="margin:12px 0"><div class="row"><a href="#/chap/' + k + '/' + x.c.id + '/cours">' + x.c.num + '. ' + x.c.title + '</a>' +
        (x.p === null ? '<span class="badge">—</span>' : levelBadge(x.p)) + '</div>' +
        '<div class="bar" style="--c:var(--' + k + ');--ci:var(--' + k + '-ink)"><i style="width:' + (x.p || 0) + '%"></i></div>' +
        '<div class="small muted">' + (x.p === null ? 'Non testé' : x.b.s + '/' + x.b.t + ' (' + x.p + ' %)') + '</div></div>';
    }).join('') + '</div>';
    app.innerHTML = html;
  }

  function subTabs(active) {
    return '<div class="subtabs">' + lessonSubjects().map(function (s) {
      return '<a style="--c:var(--' + s.id + ');--ci:var(--' + s.id + '-ink)" class="' + (s.id === active ? 'active' : '') + '" href="#/lecons/' + s.id + '">' + s.icon + ' ' + s.name + '</a>';
    }).join('') + '</div>';
  }

  function chapStatus(sid, c) {
    var st = peekChap(sid, c.id);
    if (st.evalBest != null) {
      var n = on20(st.evalBest, st.evalTotal);
      return '<span class="badge ok">✅ Terminé · ' + (n >= 15 ? '⭐ ' : '') + (st.ctrl && st.ctrl.length ? 'moy. ' : '') + fr(n) + '/20</span>';
    }
    if (st.evalDone) return '<span class="badge ok">✅ Terminé</span>';
    if (st.exDone) return '<span class="badge warn">⏳ En cours</span>';
    if (st.read) return '<span class="badge warn">⏳ En cours</span>';
    return '<span class="badge todo">○ À faire</span>';
  }

  function chapList(s) {
    return '<ul class="chap-list">' + s.chapters.map(function (c) {
      return '<li><a class="chap-item" style="--c:var(--' + s.id + ');--ci:var(--' + s.id + '-ink)" href="#/chap/' + s.id + '/' + c.id + '/cours"><span class="chap-num">' + c.num + '</span>' +
        '<span class="t"><b>' + c.title + '</b><small>' + (c.sub || '') + '</small></span>' + chapStatus(s.id, c) + '</a></li>';
    }).join('') + '</ul>';
  }

  function viewLecons(sid) {
    var s = subj(sid || 'maths') || SUBJECTS[0];
    if (s.tab) return viewOral();
    setTab('lecons');
    app.innerHTML = '<h1>📚 Leçons</h1>' + subTabs(s.id) +
      '<div class="card intro-card" style="--c:var(--' + s.id + ');--ci:var(--' + s.id + '-ink)"><h2 style="margin-top:0;color:var(--ci)">' + s.icon + ' ' + s.name + '</h2>' + s.intro +
      '<div class="bar" style="margin-top:8px"><i style="width:' + pct(doneCount(s.id), s.chapters.length) + '%"></i></div><p class="small muted"><b>' + doneCount(s.id) + ' / ' + s.chapters.length + ' chapitres terminés</b> (cours, exercices et évaluation) · ' + acquired(s.id) + ' maîtrisé(s) ⭐ (≥ 15/20)</p></div>' +
      chapCounts(s) + chapList(s);
  }
  function chapCounts(s) {
    var d = 0, e = 0;
    s.chapters.forEach(function (c) { var x = peekChap(s.id, c.id); if (finished(x)) d++; else if (x.read || x.exDone) e++; });
    return '<div class="chap-counts"><span class="badge ok">✅ ' + d + ' terminé' + (d > 1 ? 's' : '') + '</span><span class="badge warn">⏳ ' + e + ' en cours</span><span class="badge todo">○ ' + (s.chapters.length - d - e) + ' à faire</span></div>';
  }

  function viewOral() {
    setTab('oral');
    var s = subj('oral');
    if (!s) return viewLecons();
    app.innerHTML = '<h1>🎤 Oral</h1><div class="card intro-card" style="--c:var(--oral)">' + s.intro + '</div>' +
      '<a class="card sim-card" href="#/simulation"><span class="sim-ico">🧑‍⚖️</span><span><b>Simulation d’entretien avec un jury IA</b><small>Le jury te pose des questions et des mises en situation, tu réponds comme le jour J, puis tu reçois une note et des conseils.</small></span></a>' +
      chapList(s);
  }

  /* ---------- Simulation d'entretien avec un jury IA ---------- */
  var SIM_QUESTIONS = [
    'Présentez-vous en deux minutes et expliquez pourquoi vous voulez devenir professeur des écoles.',
    'Un parent vient vous voir, très en colère, parce que son enfant a eu une remarque sur son cahier. Comment réagissez-vous ?',
    'Un élève de CM1 refuse de participer à la séance de natation en invoquant des raisons religieuses. Que faites-vous ?',
    'Vous remarquez qu’un élève est régulièrement isolé dans la cour et que des camarades se moquent de lui. Que faites-vous ?',
    'Qu’est-ce que la laïcité pour vous, et comment la faites-vous vivre en classe ?',
    'Vous accueillez un élève en situation de handicap accompagné d’une AESH. Comment organisez-vous votre travail ?',
    'Un élève vous confie qu’il reçoit des coups à la maison. Quelle est votre réaction ?',
    'Comment différenciez-vous une séance de lecture dans une classe très hétérogène ?'
  ];
  var JURY_RULES = 'Tu joues un jury de l’entretien du CRPE (concours de professeur des écoles, niveau licence), en français. ' +
    'Règles : tu vouvoies le candidat ; tu poses UNE seule question à la fois, courte ; tu alternes questions de motivation, connaissance du système éducatif, ' +
    'valeurs de la République (laïcité, égalité, neutralité), exigences du service public, égalité filles-garçons, lutte contre les discriminations, transition écologique, épanouissement de l’élève et mises en situation concrètes (parents, harcèlement, handicap, sécurité, signalement, inclusion) ; ' +
    'déroulé officiel : d’abord une présentation de 5 minutes (motivation et parcours) et 10 minutes d’échange dessus, puis 20 minutes d’entretien avec au moins une mise en situation ; ' +
    'tu relances si la réponse est vague (« Concrètement, que faites-vous demain matin ? ») ; tu restes bienveillant mais exigeant et tu ne donnes pas la réponse pendant l’entretien. ' +
    'Quand le message du candidat est exactement FIN_ENTRETIEN, tu sors du rôle et tu rédiges un bilan : une note sur 20, 3 points forts, 3 points à améliorer, ' +
    'et pour chaque mise en situation les éléments de réponse attendus (cadre réglementaire, acteurs : directeur, IEN, équipe, RASED, infirmière, 119, information préoccupante, etc.). ' +
    'Pas de titres markdown, des paragraphes courts et des tirets.';
  function viewSimulation() {
    setTab('oral');
    var html = '<div class="breadcrumb"><a href="#/oral">Oral</a> › Simulation d’entretien</div><h1>🧑‍⚖️ Simulation d’entretien</h1>';
    if (!SAMPLE) {
      html += (STANDALONE ? '<div class="box tip"><span class="box-title">Entraînement à l’oral</span>Entraîne-toi' : '<div class="box warn"><span class="box-title">Jury IA indisponible ici</span>La simulation avec un jury IA fonctionne quand le site est ouvert depuis ton lien claude.ai. En attendant, entraîne-toi') + ' à l’oral avec ces questions : réponds à voix haute en 2 à 3 minutes chacune, puis compare avec les chapitres de l’onglet Oral.</div>' +
        '<ol class="sim-list">' + SIM_QUESTIONS.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ol>';
      app.innerHTML = html;
      return;
    }
    html += '<p>Réponds comme devant un vrai jury : phrases complètes, exemples concrets, références au cadre (laïcité, sécurité, équipe, partenaires). Quand tu veux arrêter, clique sur <b>Terminer et voir mon bilan</b>.</p>' +
      '<div class="chat" id="chat"></div>' +
      '<form class="chat-form" id="chatForm"><label for="chatIn" class="sr">Ta réponse</label><textarea id="chatIn" placeholder="Ta réponse au jury…" rows="3"></textarea>' +
      '<div class="btn-row"><button class="btn" type="submit" id="chatSend">Envoyer</button><button class="btn secondary" type="button" id="chatEnd">Terminer et voir mon bilan</button></div></form>';
    app.innerHTML = html;
    var chat = document.getElementById('chat'), input = document.getElementById('chatIn'), send = document.getElementById('chatSend'), endBtn = document.getElementById('chatEnd');
    var first = SIM_QUESTIONS[Math.floor(Math.random() * 2)];
    var turns = [{ role: 'user', content: JURY_RULES + '\n\nCommence l’entretien : accueille brièvement le candidat puis pose ta première question, par exemple : « ' + first + ' »' }];
    var busy = false, ctl = null;
    function bubble(who, text) {
      var b = document.createElement('div');
      b.className = 'msg ' + who;
      b.innerHTML = '<span class="who">' + (who === 'jury' ? '🧑‍⚖️ Jury' : '🙋 Toi') + '</span><div class="txt"></div>';
      b.querySelector('.txt').textContent = text;
      chat.appendChild(b);
      b.scrollIntoView({ behavior: 'smooth', block: 'end' });
      return b.querySelector('.txt');
    }
    function juryTurn(final) {
      busy = true; send.disabled = true; endBtn.disabled = true;
      var out = bubble('jury', 'Le jury réfléchit…');
      ctl = new AbortController();
      SAMPLE(turns, { cache: false, signal: ctl.signal, onText: function (u) { out.textContent = u.text; } }).then(function (r) {
        turns.push({ role: 'assistant', content: r.text });
        if (final) { out.parentNode.classList.add('bilan'); addXP(60, 'simulation d’entretien'); document.getElementById('chatForm').hidden = true; }
      }).catch(function (e) {
        out.textContent = aiError(e);
        turns.pop();
      }).then(function () { busy = false; send.disabled = false; endBtn.disabled = false; });
    }
    cleanup = function () { if (ctl) ctl.abort(); };
    document.getElementById('chatForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var t = input.value.trim();
      if (!t || busy) return;
      bubble('me', t); input.value = '';
      turns.push({ role: 'user', content: t });
      juryTurn(false);
    });
    endBtn.addEventListener('click', function () {
      if (busy) return;
      turns.push({ role: 'user', content: 'FIN_ENTRETIEN' });
      juryTurn(true);
    });
    juryTurn(false);
  }

  /* Exercices de chapitre : une nouvelle série à chaque fois (prof IA, sinon banque du chapitre) */
  function exKey(k, sid, cid) { return 'crpe-' + k + '/' + sid + '/' + cid; }
  function exSeen(sid, cid, qs) {
    var seen = [];
    try { seen = JSON.parse(localStorage.getItem(exKey('exseen', sid, cid))) || []; } catch (e) {}
    qs.forEach(function (q) { var t = plain(q.q).slice(0, 160); if (seen.indexOf(t) < 0) seen.push(t); });
    try { localStorage.setItem(exKey('exseen', sid, cid), JSON.stringify(seen.slice(-80))); } catch (e) {}
  }
  function exSeenList(sid, cid) { try { return JSON.parse(localStorage.getItem(exKey('exseen', sid, cid))) || []; } catch (e) { return []; } }
  var EXPENDING = {};
  function exCount(c, kind) { return kind === 'ev' ? Math.max(8, Math.min(12, (c.evaluation || []).length)) : Math.max(6, Math.min(10, (c.exercises || []).length)); }
  function prefetchEx(s, c, kind) {
    var k = exKey(kind === 'ev' ? 'evnext' : 'exnext', s.id, c.id);
    if (!SAMPLE || EXPENDING[k]) return;
    try { if (localStorage.getItem(k)) return; } catch (e) { return; }
    var avoid = exSeenList(s.id, c.id);
    EXPENDING[k] = aiQuestions(s, c, exCount(c, kind), avoid, kind).then(function (qs) {
      try { localStorage.setItem(k, JSON.stringify(qs)); } catch (e) {}
      return qs;
    }).catch(function () { return null; }).then(function (x) { EXPENDING[k] = null; return x; });
  }
  function bankExSeries(s, c, kind) {
    var seen = exSeenList(s.id, c.id), n = exCount(c, kind);
    var pool = questionPool(s.id, c.id).map(function (x) { return x.q; });
    var open = pool.filter(function (q) { return q.type === 'open'; }), closed = pool.filter(function (q) { return q.type !== 'open'; });
    var rank = function (q) { var i = seen.indexOf(plain(q.q).slice(0, 160)); return i < 0 ? -1 : i; };
    // jamais vues d'abord, puis les plus anciennes
    var pick = shuffle(closed).sort(function (x, y) { return rank(x) - rank(y); }).slice(0, n - (open.length ? 1 : 0));
    if (open.length) pick.push(shuffle(open).sort(function (x, y) { return rank(x) - rank(y); })[0]);
    return shuffle(pick).map(cloneQ);
  }
  function newExSeries(s, c, kind) {
    var k = exKey(kind === 'ev' ? 'evnext' : 'exnext', s.id, c.id);
    var bank = function (why) { return { qs: bankExSeries(s, c, kind), label: 'Questions tirées dans la banque du chapitre, ordre et réponses mélangés' + (why ? ' (' + why + ')' : '') + '.' }; };
    var pop = function () {
      var x = null;
      try { x = JSON.parse(localStorage.getItem(k)); localStorage.removeItem(k); } catch (e) {}
      return x && x.length ? { qs: x, label: kind === 'ev' ? '✨ Nouvelle évaluation inventée par le prof IA sur ce chapitre, corrigée et expliquée quand tu rends ta copie.' : '✨ Nouveaux exercices inventés par le prof IA sur ce chapitre, avec leur correction expliquée.' } : null;
    };
    var have = pop();
    if (have) return Promise.resolve(have);
    return sampleReady.then(function () { return aiOrBank(); });
    function aiOrBank() {
    if (!SAMPLE) return Promise.resolve(bank(STANDALONE ? '' : (kind === 'ev' ? 'les sujets inédits' : 'les exercices inédits') + ' du prof IA s’ouvrent depuis ton lien claude.ai'));
    // série du prof IA en cours de préparation : on l'attend au plus 20 s, sinon banque (l'IA sera prête la fois suivante)
    if (!EXPENDING[k]) prefetchEx(s, c, kind);
    var job = EXPENDING[k];
    if (!job) return Promise.resolve(bank(''));
    var timeout = new Promise(function (res) { setTimeout(res, 20000); });
    return Promise.race([job, timeout]).then(function () { return pop() || bank('la série du prof IA sera prête la prochaine fois'); });
    }
  }

  /* ---------- Contrôles de chapitre ---------- */
  var CTRL_MAX = 5;
  function ctrlList(st) {
    if (!st.ctrl) st.ctrl = st.evalBest != null ? [{ n: on20(st.evalBest, st.evalTotal), d: st.studied || Date.now() }] : [];
    return st.ctrl;
  }
  function ctrlAvg(list) {
    var l = list.slice(0, CTRL_MAX);
    return l.length ? Math.round(l.reduce(function (a, x) { return a + x.n; }, 0) / l.length * 10) / 10 : null;
  }
  function ctrlBulletin(list, big) {
    var cells = '';
    for (var k = 0; k < CTRL_MAX; k++) {
      var x = list[k];
      cells += '<div class="bul-cell' + (x ? (x.n >= 15 ? ' ok' : x.n >= 10 ? ' mid' : ' ko') : '') + '"><small>C' + (k + 1) + '</small><b>' + (x ? fr(x.n) : '—') + '</b></div>';
    }
    var m = ctrlAvg(list);
    return '<div class="bulletin' + (big ? ' big' : '') + '"><div class="bul-cells">' + cells + '</div><div class="bul-avg"><small>Moyenne</small><b>' + (m == null ? '—' : fr(m)) + '</b><small>/20</small></div></div>' +
      '<p class="small muted bul-note">' + (list.length < CTRL_MAX ? 'Contrôles faits : ' + list.length + ' / ' + CTRL_MAX + '. La moyenne des contrôles est ta note du chapitre (⭐ à partir de 15/20).' : 'Tes ' + CTRL_MAX + ' contrôles sont faits : ta moyenne est ta note du chapitre. Tu peux encore t’entraîner avec des contrôles hors moyenne.') + '</p>';
  }
  function buildControle(src) {
    var qs = src.map(function (q) { return JSON.parse(JSON.stringify(q)); });
    var closed = qs.filter(function (q) { return q.type !== 'open'; }), open = qs.filter(function (q) { return q.type === 'open'; });
    qs = closed.concat(open);
    var w = qs.map(function (q) { return q.type === 'open' ? 3 : 1; }), W = w.reduce(function (a, x) { return a + x; }, 0), sum = 0;
    qs.forEach(function (q, i) { q.pts = Math.max(0.25, Math.round(20 * w[i] / W * 4) / 4); sum += q.pts; });
    if (qs.length) qs[qs.length - 1].pts = Math.max(0.25, Math.round((qs[qs.length - 1].pts + 20 - sum) * 4) / 4);
    // découpage en exercices : questions fermées par paquets de 3 à 4, puis la question rédigée
    var exo = [], per = closed.length > 8 ? 4 : 3;
    qs.forEach(function (q, i) { exo.push(q.type === 'open' ? 'open' + i : Math.floor(i / per)); });
    var starts = {}, names = {}, k = 0, pts = {};
    exo.forEach(function (e, i) { if (!(e in names)) { names[e] = ++k; starts[i] = e; } pts[e] = (pts[e] || 0) + qs[i].pts; });
    var minutes = Math.max(10, Math.ceil((closed.length * 1.5 + open.length * 7) / 5) * 5);
    return {
      qs: qs, minutes: minutes,
      before: function (i) {
        if (!(i in starts)) return '';
        var e = starts[i];
        return '<h3 class="ctrl-exo">Exercice ' + names[e] + (String(e).indexOf('open') === 0 ? ' · Question rédigée' : '') + ' <span>(' + fr(Math.round(pts[e] * 100) / 100) + ' pts)</span></h3>';
      },
      labels: function (q, i) { return 'Question ' + (i + 1); }
    };
  }
  /* Brouillon : dessiner au doigt ou écrire, gardé pour chaque chapitre */
  function brouillon(key) {
    var btn = document.createElement('button');
    btn.className = 'bro-btn'; btn.type = 'button'; btn.innerHTML = '✏️ Brouillon';
    var sh = document.createElement('div');
    sh.className = 'bro-sheet'; sh.hidden = true;
    sh.innerHTML = '<div class="bro-head"><b>✏️ Brouillon</b><div class="bro-tabs"><button type="button" data-t="draw" class="on">✍️ Dessiner</button><button type="button" data-t="text">⌨️ Écrire</button></div><button type="button" class="icon-btn bro-x" aria-label="Fermer">✕</button></div>' +
      '<div class="bro-draw"><div class="bro-tools"><button type="button" data-c="#2b1a2e" class="on" aria-label="Crayon noir">⚫</button><button type="button" data-c="#d6337f" aria-label="Crayon rose">🩷</button><button type="button" data-c="#2d6fb5" aria-label="Crayon bleu">🔵</button><button type="button" data-c="erase" aria-label="Gomme">🧽</button><button type="button" class="bro-clear">🗑 Tout effacer</button></div><canvas></canvas></div>' +
      '<textarea class="bro-text" hidden placeholder="Écris ici tes calculs, tes idées, ton plan…"></textarea>';
    document.body.appendChild(btn); document.body.appendChild(sh);
    var cv = sh.querySelector('canvas'), ctx = cv.getContext('2d'), ta = sh.querySelector('textarea'), color = '#2b1a2e', drawing = false, last = null, sized = false;
    try { ta.value = localStorage.getItem(key + '/t') || ''; } catch (e) {}
    function size() {
      var r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      if (!r.width) return;
      var data = sized ? cv.toDataURL() : null;
      cv.width = r.width * dpr; cv.height = r.height * dpr; ctx.scale(dpr, dpr);
      var src = data || (function () { try { return localStorage.getItem(key + '/d'); } catch (e) { return null; } })();
      if (src) { var im = new Image(); im.onload = function () { ctx.drawImage(im, 0, 0, r.width, r.height); }; im.src = src; }
      sized = true;
    }
    function pos(e) { var r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
    cv.addEventListener('pointerdown', function (e) { drawing = true; last = pos(e); cv.setPointerCapture(e.pointerId); e.preventDefault(); });
    cv.addEventListener('pointermove', function (e) {
      if (!drawing) return;
      var p = pos(e);
      ctx.globalCompositeOperation = color === 'erase' ? 'destination-out' : 'source-over';
      ctx.strokeStyle = color === 'erase' ? '#000' : color; ctx.lineWidth = color === 'erase' ? 18 : 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke(); last = p; e.preventDefault();
    });
    function stop() { if (!drawing) return; drawing = false; try { localStorage.setItem(key + '/d', cv.toDataURL()); } catch (e) {} }
    cv.addEventListener('pointerup', stop); cv.addEventListener('pointercancel', stop);
    ta.addEventListener('input', function () { try { localStorage.setItem(key + '/t', ta.value); } catch (e) {} });
    sh.querySelectorAll('[data-c]').forEach(function (b) { b.addEventListener('click', function () { color = b.dataset.c; sh.querySelectorAll('[data-c]').forEach(function (x) { x.classList.toggle('on', x === b); }); }); });
    sh.querySelector('.bro-clear').addEventListener('click', function () { ctx.clearRect(0, 0, cv.width, cv.height); try { localStorage.removeItem(key + '/d'); } catch (e) {} });
    sh.querySelectorAll('[data-t]').forEach(function (b) { b.addEventListener('click', function () {
      var t = b.dataset.t;
      sh.querySelectorAll('[data-t]').forEach(function (x) { x.classList.toggle('on', x === b); });
      sh.querySelector('.bro-draw').hidden = t !== 'draw'; ta.hidden = t !== 'text';
      if (t === 'text') ta.focus(); else size();
    }); });
    btn.addEventListener('click', function () { sh.hidden = !sh.hidden; btn.classList.toggle('on', !sh.hidden); if (!sh.hidden) setTimeout(size, 30); });
    sh.querySelector('.bro-x').addEventListener('click', function () { sh.hidden = true; btn.classList.remove('on'); });
    return { remove: function () { btn.remove(); sh.remove(); } };
  }

  function viewChap(sid, cid, step) {
    var s = subj(sid); if (!s) return viewLecons();
    var c = chap(s, cid); if (!c) return viewLecons(sid);
    setTab(s.tab ? s.tab : 'lecons');
    var st = chapState(sid, cid);
    var idx = s.chapters.indexOf(c);
    var next = s.chapters[idx + 1], prev = s.chapters[idx - 1];
    var base = '#/chap/' + sid + '/' + cid + '/';
    var locked = !st.exDone;

    var stepper = '<div class="stepper" style="--c:var(--' + sid + ');--ci:var(--' + sid + '-ink)">' +
      '<a href="' + base + 'cours" class="' + (step === 'cours' ? 'active' : st.read ? 'done' : '') + '">1. Cours' + (st.read ? ' ✔' : '') + '</a>' +
      '<a href="' + base + 'exercices" class="' + (step === 'exercices' ? 'active' : st.exDone ? 'done' : '') + '">2. Exercices' + (st.exDone ? ' ✔' : '') + '</a>' +
      '<a href="' + base + 'evaluation" class="' + (step === 'evaluation' ? 'active' : locked ? 'locked' : finished(st) ? 'done' : '') + '">' + (locked ? '🔒 ' : '') + '3. Contrôle' + (st.ctrl && st.ctrl.length ? ' ' + Math.min(st.ctrl.length, CTRL_MAX) + '/' + CTRL_MAX : '') + (finished(st) ? ' ✔' : '') + '</a></div>';

    var head = '<div class="breadcrumb"><a href="' + (s.tab ? '#/' + s.tab : '#/lecons/' + sid) + '">' + s.name + '</a> › Chapitre ' + c.num + '</div>' +
      '<h1 class="chap-title">Chapitre ' + c.num + ' — ' + c.title + '</h1>' + stepper;

    app.style.setProperty('--c', 'var(--' + sid + ')'); app.style.setProperty('--ci', 'var(--' + sid + '-ink)');

    if (step === 'cours') {
      var html = head;
      html += '<h2 class="video-title">🎥 Le prof t’explique la leçon</h2><div id="prof"></div>';
      if (c.objectifs) {
        html += '<div class="box goal"><span class="box-title">🎯 Ce qui est attendu de toi au concours</span><ul>' +
          c.objectifs.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>';
      }
      html += '<article class="lesson">' + c.lesson + '</article>';
      if (c.resume) html += '<div class="box tip"><span class="box-title">🧠 À retenir absolument</span>' + c.resume + '</div>';
      if (c.videos && c.videos.length) {
        html += '<h2>🎬 Pour aller plus loin : vidéos conseillées</h2><p class="small muted">Chaque lien ouvre la recherche YouTube ciblée sur la vidéo de la chaîne indiquée.</p><div class="videos">' +
          c.videos.map(function (v) {
            return '<a class="video" target="_blank" rel="noopener" href="' + ytLink(v) + '"><span class="play">▶</span><span><b>' + v.t + '</b><small>' + v.ch + '</small></span></a>';
          }).join('') + '</div>';
      }
      html += '<div class="btn-row"><a class="btn" id="goEx" href="' + base + 'exercices">J’ai lu le cours → Exercices</a></div>';
      app.innerHTML = html;
      cleanup = profPlayer(document.getElementById('prof'), c, s);
      document.getElementById('goEx').addEventListener('click', function () {
        if (!st.read) { st.read = true; save(); }
        once('read/' + sid + '/' + cid, 10, 'cours lu');
      });
    } else if (step === 'exercices') {
      var curKey = 'crpe-cur/ex/' + sid + '/' + cid, cur = readJSON(curKey), runs;
      if (cur && cur.qs) runs = cur.runs || 0;
      else { runs = Math.max(st.exRuns || 0, st.exDone ? 1 : 0); st.exRuns = runs + 1; save(); } // chapitres déjà faits avant la mise à jour : nouvelle série directement
      var exIntro = '<p>Fais chaque exercice <b>au brouillon</b> d’abord, puis entre ta réponse et clique sur « Vérifier » (ou appuie sur Entrée) : la correction détaillée s’affiche immédiatement. Chaque bonne réponse rapporte <b>5 XP</b>.</p>';
      var showSeries = function (qs, label, resumed) {
        writeJSON(curKey, { qs: qs, label: label, runs: runs });
        var broEx = brouillon('crpe-brouillon/' + sid + '/' + cid);
        cleanup = function () { broEx.remove(); };
        app.innerHTML = head + exIntro + (resumed ? '<div class="box resume-box">📌 Tu reprends ta série là où tu t’étais arrêtée. <button class="linkbtn" id="freshSeries">Commencer une autre série</button></div>' : '') +
          (runs ? '<div class="box tip series-box"><span class="box-title">🔁 Série n° ' + (runs + 1) + '</span>' + label + '</div>' : (c.exIntro || '')) + '<div id="quiz"></div>';
        var fresh = document.getElementById('freshSeries');
        if (fresh) fresh.addEventListener('click', function () { dropKey(curKey); dropKey('crpe-draft/ex/' + sid + '/' + cid); route(); });
        exSeen(sid, cid, qs);
        renderQuiz(document.getElementById('quiz'), qs, {
          mode: 'exercise', uid: 'ex' + sid + cid + 'r' + runs, draftKey: 'crpe-draft/ex/' + sid + '/' + cid,
          onDone: function (score, total) {
            dropKey(curKey);
            st.exDone = true; st.exScore = score; st.exTotal = total; st.read = true; st.studied = Date.now(); save();
            addXP(20, 'exercices terminés');
            var p = pct(score, total);
            var box = document.createElement('div');
            box.innerHTML = '<div class="score"><div class="big">' + fr(Math.round(score * 10) / 10) + ' / ' + total + '</div><div>' +
              (p >= 75 ? 'Très bien ! Tu es prêt(e) pour l’évaluation.' : p >= 50 ? 'C’est correct. Relis les corrections avant l’évaluation.' : 'Relis le cours (surtout les encadrés) avant de passer l’évaluation.') +
              '</div><div class="btn-row" style="justify-content:center"><a class="btn" href="' + base + 'evaluation">Passer l’évaluation 🔓</a><button class="btn secondary" id="newSeries">🔁 Nouvelle série d’exercices</button><a class="btn secondary" href="' + base + 'cours">Relire le cours</a></div></div>';
            document.getElementById('quiz').appendChild(box);
            document.getElementById('newSeries').addEventListener('click', route);
            box.scrollIntoView({ behavior: 'smooth' });
          }
        });
        sampleReady.then(function () { prefetchEx(s, c); });
      };
      if (cur && cur.qs) showSeries(cur.qs, cur.label || '', true);
      else if (!runs) showSeries(c.exercises, '');
      else {
        app.innerHTML = head + '<div class="card center"><div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> Préparation d’une nouvelle série d’exercices…</div></div>';
        newExSeries(s, c).then(function (r) {
          if (location.hash.indexOf(base + 'exercices') !== 0 && location.hash !== '#/chap/' + sid + '/' + cid + '/exercices') return;
          showSeries(r.qs, r.label);
        });
      }
    } else {
      if (locked && !window.__unlock) {
        app.innerHTML = head + '<div class="card center"><h2 style="margin-top:0">🔒 Évaluation verrouillée</h2><p>L’évaluation se débloque quand tu as terminé les exercices du chapitre : cours → exercices → évaluation.</p>' +
          '<div class="btn-row" style="justify-content:center"><a class="btn" href="' + base + 'exercices">Aller aux exercices</a><button class="btn secondary" id="force">Passer quand même</button></div></div>';
        document.getElementById('force').addEventListener('click', function () { window.__unlock = true; route(); window.__unlock = false; });
        return;
      }
      /* L'évaluation = un vrai contrôle : sujet noté sur 20, chrono, brouillon ; la note du chapitre est la moyenne des 5 contrôles */
      var ctrls = ctrlList(st);
      var counted = ctrls.length < CTRL_MAX;
      var evKey = 'crpe-cur/ev/' + sid + '/' + cid, evCur = readJSON(evKey), evRuns;
      if (evCur && evCur.qs) evRuns = evCur.runs || 0;
      else { evRuns = Math.max(st.evRuns || 0, finished(st) ? 1 : 0); st.evRuns = evRuns + 1; save(); }
      var showEval = function (qs, label, resumed) {
        var ct = buildControle(qs), num = ctrls.length + 1;
        var endAt = resumed && evCur.end ? evCur.end : Date.now() + ct.minutes * 60000;
        writeJSON(evKey, { qs: qs, label: label, runs: evRuns, end: endAt });
        var paper = '<div class="ctrl-sheet"><div class="ctrl-top"><span>' + esc(s.name) + ' · Chapitre ' + c.num + '</span><span>' + new Date().toLocaleDateString('fr-FR') + '</span></div>' +
          '<h2 class="ctrl-title">' + (counted ? 'Contrôle n° ' + num + ' <small>/ ' + CTRL_MAX + '</small>' : 'Contrôle d’entraînement <small>(hors moyenne)</small>') + '</h2>' +
          '<p class="ctrl-sub">' + c.title + '</p>' +
          '<div class="ctrl-meta"><span>⏱ ' + ct.minutes + ' min</span><span>📄 Noté sur 20</span><span>🚫 Sans cours ni calculatrice</span></div>' +
          '<ul class="ctrl-rules"><li>Lis tout le sujet avant de commencer.</li><li>Cherche d’abord <b>au brouillon</b> (bouton ✏️ en bas de l’écran), puis recopie ta réponse.</li><li>Le barème est indiqué pour chaque exercice. « Je ne sais pas » = 0 point, mais tu auras l’explication.</li></ul>' +
          (label ? '<p class="small muted">🔁 ' + label + '</p>' : '') +
          ctrlBulletin(ctrls) + '</div>';
        app.innerHTML = head + (resumed ? '<div class="box resume-box">📌 Tu reprends ton contrôle là où tu t’étais arrêtée : tes réponses et ton brouillon sont gardés.</div>' : '') + paper + '<div class="ctrl-timer" id="ctrlTimer"></div><div id="quiz"></div>';
        exSeen(sid, cid, qs);
        sampleReady.then(function () { prefetchEx(s, c, 'ev'); });
        var end = endAt, warned = false, timerEl = document.getElementById('ctrlTimer');
        var tick = function () {
          var left = Math.round((end - Date.now()) / 1000);
          if (!timerEl.isConnected) return;
          if (left <= 0) { timerEl.innerHTML = '⏰ Temps écoulé : termine ta phrase et rends ta copie.'; timerEl.classList.add('over'); return; }
          if (left <= 120 && !warned) { warned = true; toast('⏳ Plus que 2 minutes !'); }
          timerEl.innerHTML = '⏱ ' + Math.floor(left / 60) + ' min ' + (left % 60 < 10 ? '0' : '') + left % 60 + ' s';
          timerEl.classList.toggle('low', left <= 120);
        };
        tick();
        var iv = setInterval(tick, 1000);
        var bro = brouillon('crpe-brouillon/' + sid + '/' + cid);
        cleanup = function () { clearInterval(iv); bro.remove(); };
        renderQuiz(document.getElementById('quiz'), ct.qs, {
          mode: 'eval', uid: 'ev' + sid + cid + 'r' + evRuns, draftKey: 'crpe-draft/ev/' + sid + '/' + cid,
          before: ct.before,
          labels: ct.labels,
          onSubmit: function () {
            clearInterval(iv); timerEl.remove(); dropKey(evKey);
            var first = !st.evalDone && st.evalBest == null;
            st.evalDone = Date.now(); st.studied = Date.now(); save();
            if (first) notify('✅', 'Chapitre terminé : ' + plain(c.title) + (next ? '. Prochain : ' + plain(next.title) : ''), next ? '#/chap/' + sid + '/' + next.id + '/cours' : '#/lecons/' + sid);
          },
          onDone: function (score, total) {
            var n = on20(score, total);
            if (counted) { ctrls.push({ n: n, d: Date.now() }); st.ctrl = ctrls; }
            var moy = ctrlAvg(ctrls);
            st.evalLast = n; st.evalBest = moy; st.evalTotal = 20; st.studied = Date.now();
            save();
            addXP(Math.round(n * 2), 'contrôle');
            var mastered = moy != null && moy >= 15;
            if (mastered) { if (!state.flags['acq/' + sid + '/' + cid]) notify('⭐', 'Chapitre maîtrisé : ' + plain(c.title) + ' (moyenne ' + fr(moy) + '/20)', '#/chap/' + sid + '/' + cid + '/cours'); once('acq/' + sid + '/' + cid, 50, 'chapitre maîtrisé ⭐'); }
            if (n >= 15) confetti();
            notify(n >= 15 ? '🎉' : '📝', 'Contrôle « ' + plain(c.title) + ' » : ' + fr(n) + '/20' + (counted ? ' · moyenne du chapitre ' + fr(moy) + '/20' : ''), base + 'evaluation', true);
            var appr = n >= 17 ? 'Excellent travail, bravo !' : n >= 15 ? 'Très bien : chapitre solide.' : n >= 12 ? 'Bien, mais quelques erreurs à corriger : relis les explications ci-dessous.' : n >= 8 ? 'Des bases, mais ce chapitre n’est pas encore acquis : refais les exercices avant le prochain contrôle.' : 'Ce chapitre est à retravailler : relis le cours, discute avec Mme Rose, refais les exercices.';
            var box = document.createElement('div');
            box.innerHTML = '<div class="ctrl-result"><div class="ctrl-note"><b>' + fr(n) + '</b><small>/20</small></div><p class="ctrl-appr">' + appr + '</p>' +
              ctrlBulletin(ctrls, true) +
              '<div class="btn-row" style="justify-content:center">' +
              (next ? '<a class="btn" href="#/chap/' + sid + '/' + next.id + '/cours">Chapitre suivant →</a>' : '<a class="btn" href="#/lecons/' + sid + '">Retour aux chapitres</a>') +
              '<button class="btn secondary" id="redo">' + (ctrls.length < CTRL_MAX ? '📝 Contrôle suivant (' + (ctrls.length + 1) + '/' + CTRL_MAX + ')' : '🔁 Contrôle d’entraînement') + '</button><a class="btn secondary" href="' + base + 'exercices">Refaire des exercices</a></div></div>';
            var sheet = app.querySelector('.ctrl-sheet');
            sheet.querySelectorAll('.bulletin, .bul-note, .ctrl-rules').forEach(function (x) { x.remove(); });
            sheet.parentNode.insertBefore(box, sheet);
            document.getElementById('redo').addEventListener('click', route);
            box.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      };
      if (evCur && evCur.qs) showEval(evCur.qs, evCur.label || '', true);
      else if (!evRuns) showEval(c.evaluation, '');
      else {
        app.innerHTML = head + '<div class="card center"><div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> Préparation d’un nouveau sujet de contrôle…</div></div>';
        newExSeries(s, c, 'ev').then(function (r) {
          if (location.hash !== base + 'evaluation') return;
          showEval(r.qs, r.label.replace('Questions tirées dans la banque du chapitre', 'Sujet tiré dans la banque du chapitre').replace('Nouvelle évaluation inventée', 'Sujet inventé'));
        });
      }
    }
    var nav = document.createElement('div');
    nav.className = 'btn-row';
    nav.style.justifyContent = 'space-between';
    nav.innerHTML = (prev ? '<a class="btn secondary" href="#/chap/' + sid + '/' + prev.id + '/cours">← Chap. ' + prev.num + '</a>' : '<span></span>') +
      (next ? '<a class="btn secondary" href="#/chap/' + sid + '/' + next.id + '/cours">Chap. ' + next.num + ' →</a>' : '');
    app.appendChild(nav);
  }

  /* ---------- Concours blancs ---------- */
  function fmtTime(sec) {
    var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
    return (h ? h + ' h ' : '') + (m < 10 && h ? '0' : '') + m + ' min ' + (s < 10 ? '0' : '') + s + ' s';
  }
  function viewConcoursHome() {
    setTab('concours');
    var html = '<h1>📝 Concours blancs</h1><p>Des sujets complets <b>au format de l’écrit du CRPE L3</b>, à faire en <b>temps limité</b>, sans cours ni calculatrice. Chaque question a son <b>barème</b> ; la correction détaillée et la note sur 20 apparaissent quand tu rends ta copie (ou à la fin du temps).</p>' +
      '<div class="box warn"><span class="box-title">Avant de commencer</span>Installe-toi au calme, prépare des feuilles de brouillon et coupe ton téléphone (sauf si tu composes dessus !). Au concours, une note ≤ 5/20 à une épreuve peut être éliminatoire.</div>';
    html += '<h2>♾️ Concours blancs illimités</h2><p class="small muted">Pour l’écrit 2, tu choisis <b>un seul domaine</b> le jour de l’inscription : entraîne-toi sur le tien.</p><div class="grid">' + Object.keys(IA_SUJETS).map(function (k) {
      var r = state.blancs[k];
      return '<a class="card subj-card ia-card" href="#/concours/' + k + '"><h3>' + IA_SUJETS[k].icon + ' ' + (k === 'ia-fm' ? 'Écrit 1 · Français et mathématiques' : IA_SUJETS[k].label) + '</h3><p>Un nouveau sujet à chaque fois, sans fin : prof IA ou tirage dans la banque.</p>' +
        (r ? '<p class="small">Meilleure note : <b>' + fr(on20(r.best, r.total)) + '/20</b></p>' : '') + '</a>';
    }).join('') + '</div><h2>Les sujets du site</h2>';
    html += CONCOURS.filter(function (c) { return !IA_SUJETS[c.id]; }).map(function (c) {
      var r = state.blancs[c.id];
      var nq = c.parts.reduce(function (a, p) { return a + p.questions.length; }, 0);
      return '<div class="card subj-card" style="--c:var(--primary)"><h3>' + c.icon + ' ' + c.title + '</h3><p>' + Math.floor(c.duration / 60) + ' h' + (c.duration % 60 ? (c.duration % 60) : '') + ' · ' + c.parts.length + ' parties · ' + nq + ' questions</p>' +
        (r ? '<p style="margin-top:6px">Meilleure note : <b>' + on20(r.best, r.total) + '/20</b> · dernière : ' + on20(r.last, r.total) + '/20 <span class="small">(' + new Date(r.date).toLocaleDateString('fr-FR') + ')</span></p>' : '') +
        '<div class="btn-row"><a class="btn" href="#/concours/' + c.id + '">' + (r ? 'Recommencer' : 'Commencer l’épreuve') + '</a></div></div>';
    }).join('');
    app.innerHTML = html;
  }

  function viewConcours(id) {
    setTab('concours');
    var c = sujet(id);
    if (!c) return viewConcoursHome();
    app.innerHTML = '<div class="breadcrumb"><a href="#/concours">Concours blancs</a> › ' + c.short + '</div><h1>' + c.icon + ' ' + c.title + '</h1>' + c.intro +
      '<div class="card center"><p>Durée : <b>' + fmtTime(c.duration * 60).replace(' 0 min', '').replace(' 00 s', '').replace(' 0 s', '') + '</b>. Le chronomètre démarre quand tu cliques. Tu peux rendre ta copie avant la fin.</p><button class="btn" id="startBlanc">▶ Démarrer le chronomètre</button></div>';
    document.getElementById('startBlanc').addEventListener('click', function () { startConcours(c); });
  }

  function startConcours(c) {
    var questions = [], starts = {}, partOf = [];
    c.parts.forEach(function (p, pi) {
      starts[questions.length] = pi;
      p.questions.forEach(function (q) { if (q.type === 'open' && p.doc && !q.doc) q.doc = p.doc; questions.push(q); partOf.push(pi); });
    });
    var end = Date.now() + c.duration * 60 * 1000;
    var nk = nextKind(c);
    if (nk) setTimeout(function () { prefetchNext(nk); }, 3000);
    app.innerHTML = '<div class="timerbar"><span>⏱ <b class="timer" id="tleft"></b></span><button class="btn secondary small-btn" id="giveIn">Rendre ma copie</button></div>' +
      '<h1>' + c.icon + ' ' + c.title + '</h1><div id="quiz"></div>';
    var api;
    var tick = setInterval(update, 1000);
    function update() {
      var left = Math.max(0, Math.round((end - Date.now()) / 1000));
      var el = document.getElementById('tleft');
      if (!el) return;
      el.textContent = fmtTime(left);
      el.parentNode.parentNode.classList.toggle('urgent', left < 600);
      if (left === 0) { clearInterval(tick); toast('⏰ Temps écoulé : copie ramassée !', true); api.submit(true); }
    }
    function onLeave(e) { e.preventDefault(); e.returnValue = ''; }
    window.addEventListener('beforeunload', onLeave);
    cleanup = function () { clearInterval(tick); window.removeEventListener('beforeunload', onLeave); };
    api = renderQuiz(document.getElementById('quiz'), questions, {
      mode: 'blanc', uid: 'bl' + c.id, ctx: c.title,
      before: function (i) {
        if (starts[i] === undefined) return '';
        var p = c.parts[starts[i]];
        return '<div class="part-head"><h2>' + p.title + '</h2>' + (p.doc || '') + '</div>';
      },
      labels: function (q, i) { return 'Question ' + (i + 1) + ' / ' + questions.length; },
      onSubmit: function () {
        clearInterval(tick); window.removeEventListener('beforeunload', onLeave);
        var tb = document.querySelector('.timerbar'); if (tb) tb.remove();
      },
      onDone: function (score, total, results) {
        var parts = c.parts.map(function (p) { return { t: p.title, s: 0, tot: 0 }; });
        questions.forEach(function (q, i) { parts[partOf[i]].s += (results[i] || 0) * (q.pts || 1); parts[partOf[i]].tot += q.pts || 1; });
        var prev = state.blancs[c.id];
        state.blancs[c.id] = { date: Date.now(), last: score, best: Math.max(score, prev ? prev.best : 0), total: total, parts: parts };
        save();
        var n = on20(score, total);
        state.history = (state.history || []).concat([{ d: Date.now(), id: c.id, w: /^(fm|ia-fm)/.test(c.id) ? 1 : 2, title: c.short || c.title, n: n,
          p: parts.map(function (p) { return { t: p.t.replace(/\s*\(.*\)$/, ''), v: Math.round(p.s / p.tot * 200) / 10 }; }) }]).slice(-200);
        save();
        var elim = parts.length === 2 && /FRAN/i.test(parts[0].t) && parts.some(function (p) { return p.tot && p.s / p.tot * 10 < 2.5; });
        addXP(100 + Math.round(n * 5), 'concours blanc');
        if (n >= 12) confetti();
        var box = document.createElement('div');
        box.innerHTML = '<div class="score"><div class="small muted">Ta note</div><div class="big">' + fr(n) + '/20</div><div>' +
          (elim ? '⚠ Une partie est sous 2,5/10 : au concours, ce serait <b>éliminatoire</b>. Travaille-la en priorité. ' : '') +
          (n >= 16 ? '🏆 Excellent ! Niveau très solide.' : n >= 12 ? '🏅 Bon niveau : tu serais probablement admissible sur ce sujet.' : n > 5 ? 'Des bases à consolider : repère ci-dessous les questions ratées et revois les chapitres correspondants.' : '⚠ Note éliminatoire au concours : reprends les leçons chapitre par chapitre avant de retenter.') +
          '</div><div class="parts">' + parts.map(function (p) {
            var on10 = parts.length === 2 && /FRAN/i.test(parts[0].t);
            return '<div class="row small"><span>' + esc(p.t.replace(/\s*\(.*\)$/, '')) + '</span><b>' + (on10 ? fr(Math.round(p.s / p.tot * 100) / 10) + ' / 10' : fr(Math.round(p.s * 10) / 10) + ' / ' + p.tot) + '</b></div><div class="bar"><i style="width:' + pct(p.s, p.tot) + '%"></i></div>';
          }).join('') + '</div><p class="small">La correction détaillée de chaque question est affichée ci-dessous.</p>' +
          (SAMPLE ? '<div class="btn-row" style="justify-content:center"><button class="btn" id="aiBilan">🤖 Bilan personnalisé du prof IA</button></div><div id="aiBilanOut"></div>' : '') +
          '<div class="next-box"><b>♾️ On continue ?</b>' + (nk ? '<div class="btn-row" style="justify-content:center"><button class="btn" data-next="' + nk + '">▶ Concours blanc suivant</button></div>'
            : '<p class="small">Choisis le domaine de ton écrit 2 :</p><div class="btn-row" style="justify-content:center">' + ['ia-hg', 'ia-lv', 'ia-arts', 'ia-sci'].map(function (k) { return '<button class="btn secondary" data-next="' + k + '">' + IA_SUJETS[k].icon + ' ' + IA_SUJETS[k].label.replace('Écrit 2 · ', '') + '</button>'; }).join('') + '</div>') +
            '<div class="next-out"></div></div>' +
          '<div class="btn-row" style="justify-content:center"><a class="btn secondary" href="#/concours">Autres sujets</a><a class="btn secondary" href="#/progression">Ma progression</a></div></div>';
        document.getElementById('quiz').prepend(box);
        box.querySelectorAll('[data-next]').forEach(function (b) {
          b.addEventListener('click', function () { box.querySelectorAll('[data-next]').forEach(function (x) { x.disabled = true; }); goNext(b.dataset.next, box.querySelector('.next-out')); });
        });
        var ab = document.getElementById('aiBilan');
        if (ab) ab.addEventListener('click', function () {
          var outB = document.getElementById('aiBilanOut');
          ab.disabled = true;
          outB.innerHTML = '<div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> Le prof IA analyse ta copie…</div>';
          var lines = questions.map(function (q, i) { return (i + 1) + '. [' + Math.round((results[i] || 0) * (q.pts || 1) * 100) / 100 + '/' + (q.pts || 1) + '] ' + plain(q.q).slice(0, 160); }).join('\n');
          var prompt = 'Tu es formateur CRPE. Voici les résultats question par question d’un candidat au « ' + c.title + ' » (note : ' + n + '/20 ; par partie : ' +
            parts.map(function (p) { return plain(p.t) + ' ' + Math.round(p.s * 10) / 10 + '/' + p.tot; }).join(' ; ') + ').\n\n' + lines +
            '\n\nRédige en français, en tutoyant, un bilan court et motivant (8 à 12 lignes) : 1) ce qui est solide, 2) les 3 notions prioritaires à retravailler (en nommant les chapitres : numération, fractions, proportionnalité, géométrie, accords, conjugaison, etc.), 3) un plan d’action concret pour la semaine. Pas de titre, pas de markdown lourd : des paragraphes courts et des tirets.';
          SAMPLE(prompt, { onText: function (u) { outB.innerHTML = '<div class="ai-result ai-text"></div>'; outB.firstChild.textContent = u.text; } })
            .catch(function (e) { outB.innerHTML = '<p class="small">⚠ ' + aiError(e) + '</p>'; ab.disabled = false; });
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    document.getElementById('giveIn').addEventListener('click', function () { api.submit(false); });
    update();
  }

  /* ---------- Entraînement illimité et sujets inédits ---------- */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function cloneQ(q) {
    var c2 = JSON.parse(JSON.stringify(q));
    if (c2.choices && c2.type !== 'vf' && typeof c2.answer === 'number' && !/^(Vrai|Faux|Oui|Non)$/.test(String(c2.choices[0]))) {
      var order = shuffle(c2.choices.map(function (_, k) { return k; }));
      c2.choices = order.map(function (k) { return q.choices[k]; });
      c2.answer = order.indexOf(q.answer);
    }
    return c2;
  }
  function questionPool(sid, cid) {
    var pool = [];
    lessonSubjects().concat(subj('oral') ? [subj('oral')] : []).forEach(function (sj) {
      if (sid !== 'all' && sj.id !== sid) return;
      sj.chapters.forEach(function (ch) {
        if (cid && cid !== 'all' && String(ch.id) !== String(cid)) return;
        (ch.exercises || []).concat(ch.evaluation || [], (window.BANK && window.BANK[sj.id + '/' + ch.id]) || []).forEach(function (q) { pool.push({ q: q, tag: sj.icon + ' ' + (ch.short || ch.title) }); });
      });
      var P = POS[sj.id];
      if (P) P.questions.forEach(function (q) {
        if (!cid || cid === 'all' || String(q.chap) === String(cid)) { var ch = chap(sj, q.chap); pool.push({ q: q, tag: sj.icon + ' ' + (ch ? ch.short || ch.title : '') }); }
      });
    });
    return pool;
  }
  function normQ(x, withPts) {
    if (!x || !x.q) return null;
    var q = { q: esc(String(x.q)).replace(/\n/g, '<br>'), expl: x.expl ? esc(String(x.expl)) : '' };
    if (withPts) q.pts = Math.max(0.5, Math.min(6, Number(x.pts) || 1));
    var t = String(x.type || '').toLowerCase();
    if (t === 'open') { q.type = 'open'; q.model = '<p>' + esc(String(x.model || x.corrige || '')).replace(/\n/g, '<br>') + '</p>'; return q; }
    if (t === 'vf' || t === 'vrai/faux') { q.type = 'vf'; q.answer = (x.answer === 1 || x.answer === '1' || /faux/i.test(String(x.answer))) ? 1 : 0; return q; }
    if (Array.isArray(x.choices) && x.choices.length >= 2) {
      q.choices = x.choices.map(function (c3) { return esc(String(c3)); });
      var a = Number(x.answer); if (!(a >= 0 && a < q.choices.length)) return null;
      q.answer = a; return q;
    }
    var ans = Array.isArray(x.answers) ? x.answers : (x.answer != null ? [x.answer] : []);
    ans = ans.map(String).filter(Boolean);
    if (!ans.length) return null;
    q.answers = ans; q.numeric = x.numeric === false ? false : undefined;
    return q;
  }
  var QFORMAT = 'Chaque question est un objet JSON : {"type":"qcm"|"input"|"vf","q":"énoncé","choices":["…"] (qcm seulement, 3 ou 4 choix),"answer": index de la bonne réponse (qcm) ou 0 pour Vrai / 1 pour Faux (vf),"answers":["réponse attendue","variante acceptée"] (input seulement : réponse courte, un nombre ou quelques mots),"expl":"correction expliquée en 1 à 3 phrases"}. ' +
    'Pour les nombres décimaux, utilise la virgule française. Pas de markdown, pas de HTML.';
  function aiQuestions(sj, ch, n, avoid, kind) {
    var src = ch ? lessonPlain(ch).slice(0, 9000) : sj.chapters.map(function (x) { return '- ' + x.title + ' : ' + (x.sub || ''); }).join('\n');
    var prompt = 'Tu es concepteur de sujets du CRPE (concours de professeur des écoles, niveau licence, programmes de l’école et du collège). ' +
      'Crée ' + n + (kind === 'ev' ? ' questions d’ÉVALUATION' : ' questions d’entraînement') + ' NOUVELLES et variées en ' + sj.name + (ch ? ', chapitre « ' + ch.title + ' »' : ', sur l’ensemble des chapitres ci-dessous') + ', de difficulté progressive, au niveau du concours (calculs, analyse de la langue, connaissances, analyse d’erreurs d’élèves). ' +
      'Mélange QCM, réponses courtes et vrai/faux. Chaque question doit avoir une seule bonne réponse vérifiable ; vérifie tes calculs.\n\n' + (ch ? 'LEÇON DE RÉFÉRENCE :\n' : 'CHAPITRES :\n') + src +
      (avoid.length ? '\n\nNE REPRENDS PAS ces questions déjà posées :\n' + avoid.slice(-25).join('\n') : '') +
      '\n\n' + QFORMAT + '\nRéponds UNIQUEMENT avec un objet JSON : {"questions":[ … ]}';
    return SAMPLE.json(prompt, { cache: false }).then(function (r) {
      var list = (r && Array.isArray(r.questions) ? r.questions : []).map(function (x) { return normQ(x, false); }).filter(Boolean);
      if (list.length < 3) throw { code: 'invalid_json' };
      return list;
    });
  }

  var trainSeen = {}, trainAvoid = [];
  function viewTrain() {
    setTab('positionnement');
    var opts = lessonSubjects().concat(subj('oral') ? [subj('oral')] : []);
    var html = '<div class="breadcrumb"><a href="#/positionnement">Tests</a> › Entraînement illimité</div>' +
      '<h1>♾️ Entraînement illimité</h1><p>Des séries de 10 questions sans fin, corrigées tout de suite. Choisis une matière, un chapitre (ou tout le programme), puis la source des questions.</p>' +
      '<div class="card train-form">' +
        '<label for="trSubj">Matière</label><select id="trSubj"><option value="all">🌈 Toutes les matières</option>' + opts.map(function (x) { return '<option value="' + x.id + '">' + x.icon + ' ' + esc(x.name) + '</option>'; }).join('') + '</select>' +
        '<label for="trChap">Chapitre</label><select id="trChap"><option value="all">Tous les chapitres</option></select>' +
        '<fieldset class="tr-src"><legend>Questions</legend>' +
          '<label class="tr-opt"><input type="radio" name="trSrc" value="bank" checked><span><b>📚 Banque du site</b><small>Tirées au hasard parmi toutes les questions, réponses mélangées.</small></span></label>' +
          (STANDALONE ? '' : '<label class="tr-opt"><input type="radio" name="trSrc" value="ia"><span><b>✨ Nouvelles questions du prof IA</b><small>Inventées à chaque série : vraiment illimité (lien claude.ai).</small></span></label>') +
        '</fieldset>' +
        '<div class="btn-row"><button class="btn" id="trGo">▶ Lancer 10 questions</button></div>' +
        '<p class="small muted">Séries terminées : <b>' + (state.flags.trainSeries || 0) + '</b> · bonnes réponses : <b>' + (state.flags.trainGood || 0) + '</b></p>' +
      '</div><div id="trZone"></div>';
    app.innerHTML = html;
    var sSel = document.getElementById('trSubj'), cSel = document.getElementById('trChap');
    function fillChaps() {
      var sj = subj(sSel.value);
      cSel.innerHTML = '<option value="all">Tous les chapitres</option>' + (sj ? sj.chapters.map(function (x) { return '<option value="' + x.id + '">' + x.num + '. ' + esc(x.title) + '</option>'; }).join('') : '');
      cSel.disabled = !sj;
    }
    sSel.addEventListener('change', fillChaps); fillChaps();
    var zone = document.getElementById('trZone');
    function run() {
      var sid = sSel.value, cid = cSel.value;
      var src = (app.querySelector('input[name=trSrc]:checked') || {}).value;
      zone.innerHTML = '';
      if (src === 'ia') {
        if (!SAMPLE) { zone.innerHTML = '<div class="box warn"><span class="box-title">Prof IA indisponible ici</span>Les questions inventées par le prof IA fonctionnent depuis ton lien claude.ai. Choisis « Banque du site » en attendant.</div>'; return; }
        var sj = subj(sid) || subj(shuffle(lessonSubjects().map(function (x) { return x.id; }))[0]);
        var ch = cid !== 'all' ? chap(sj, cid) : null;
        zone.innerHTML = '<div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> Le prof IA invente tes questions (environ 30 secondes)…</div>';
        aiQuestions(sj, ch, 10, trainAvoid).then(function (list) {
          list.forEach(function (q) { trainAvoid.push(String(q.q).slice(0, 140)); });
          series(list.map(function (q) { return { q: q, tag: '✨ ' + sj.icon + ' ' + (ch ? ch.short || ch.title : sj.name) }; }));
        }).catch(function (e) { zone.innerHTML = '<p class="small">⚠ ' + aiError(e) + '</p>'; });
        return;
      }
      var key = sid + '/' + cid;
      var pool = questionPool(sid, cid);
      if (!pool.length) { zone.innerHTML = '<p>Aucune question pour ce choix.</p>'; return; }
      var seen = trainSeen[key] || (trainSeen[key] = {});
      var fresh = pool.filter(function (x, i) { x.i = i; return !seen[i]; });
      if (fresh.length < 10) { trainSeen[key] = seen = {}; fresh = pool.map(function (x, i) { x.i = i; return x; }); }
      var pick = shuffle(fresh).slice(0, 10);
      pick.forEach(function (x) { seen[x.i] = 1; });
      series(pick.map(function (x) { return { q: cloneQ(x.q), tag: x.tag }; }));
    }
    function series(items) {
      zone.innerHTML = '<div id="trQuiz"></div>';
      zone.scrollIntoView({ behavior: 'smooth' });
      renderQuiz(document.getElementById('trQuiz'), items.map(function (x) { return x.q; }), {
        mode: 'exercise', uid: 'tr' + Date.now(),
        labels: function (q, i) { return 'Question ' + (i + 1) + ' / ' + items.length + ' · ' + esc(items[i].tag); },
        onDone: function (score, total) {
          state.flags.trainSeries = (state.flags.trainSeries || 0) + 1;
          state.flags.trainGood = Math.round(((state.flags.trainGood || 0) + score) * 10) / 10;
          save();
          addXP(15, 'série terminée');
          if (score >= total * 0.8) confetti();
          var box = document.createElement('div');
          box.innerHTML = '<div class="score"><div class="big">' + fr(Math.round(score * 10) / 10) + ' / ' + total + '</div><div>' +
            (score >= total * 0.8 ? '🎉 Superbe série !' : score >= total * 0.5 ? 'Bien joué, continue !' : 'Relis les corrections, puis relance une série.') +
            '</div><div class="btn-row" style="justify-content:center"><button class="btn" id="trAgain">♾️ Encore 10 questions</button></div></div>';
          document.getElementById('trQuiz').appendChild(box);
          document.getElementById('trAgain').addEventListener('click', run);
          box.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    document.getElementById('trGo').addEventListener('click', run);
  }

  /* Sujets de concours blancs inédits générés par l'IA */
  var IA_SUJETS = {
    'ia-fm': { label: 'Français et mathématiques', icon: '✨', duration: 240, parts: 'PARTIE 1 — FRANÇAIS (20 points) : un texte support inédit de 200 à 300 mots écrit par toi (récit ou texte argumentatif) placé dans "doc", puis 12 à 14 questions : compréhension (une question rédigée "open" de 3 points), étude de la langue (nature, fonction, propositions, conjugaison, valeurs des temps, accords), lexique, phonologie, une correction orthographique rédigée "open" de 2 points et une rédaction "open" de 4 points. PARTIE 2 — MATHÉMATIQUES (20 points) : un problème contextualisé (vie de l’école) en 5 à 6 questions, de la géométrie et des mesures, 4 vrai/faux à justifier, de l’arithmétique ou des probabilités, et une analyse d’erreur d’élève "open" de 2 points ; mets l’énoncé commun des exercices dans "doc" ou dans les questions.' },
    'ia-sci': { label: 'Écrit 2 · Sciences et technologie', icon: '🔬', duration: 240, parts: 'Sujet de l’écrit 2 du CRPE bac+3, domaine SCIENCES ET TECHNOLOGIE, programme de sciences de la vie et de la Terre, physique-chimie et technologie du cycle 4 (collège). 2 ou 3 parties (total 20 points), chacune avec un document dans "doc" (protocole et tableau de résultats, schéma décrit, texte scientifique, situation de classe) : exploitation de documents, connaissances, raisonnement, calculs simples, et au moins 2 questions rédigées "open" (dont une d’analyse didactique ou de production d’élève).' },
    'ia-hg': { label: 'Écrit 2 · Histoire-géographie-EMC', icon: '🌍', duration: 240, parts: 'Sujet de l’écrit 2 du CRPE bac+3, domaine HISTOIRE-GÉOGRAPHIE-EMC, programme du cycle 4 (collège). 3 parties (total 20 points) : histoire, géographie, EMC, chacune avec un document dans "doc" (texte historique décrit fidèlement sans inventer de citation, carte décrite, données chiffrées, situation de classe) : analyse de document, repères, connaissances, et au moins 2 questions rédigées "open" (dont un paragraphe argumenté).' },
    'ia-arts': { label: 'Écrit 2 · Arts', icon: '🎨', duration: 240, parts: 'Sujet de l’écrit 2 du CRPE bac+3, domaine ARTS (arts plastiques, éducation musicale, histoire des arts), programme du cycle 4. 2 ou 3 parties (total 20 points), chacune avec une œuvre décrite précisément dans "doc" (œuvres réelles et célèbres uniquement) : analyse d’œuvre, vocabulaire, repères, et au moins 2 questions rédigées "open" (dont une proposition de séance).' },
    'ia-lv': { label: 'Écrit 2 · Anglais', icon: '🇬🇧', duration: 240, parts: 'Sujet de l’écrit 2 du CRPE bac+3, domaine LANGUE VIVANTE ANGLAIS, niveau attendu B2, programme du cycle 4. 3 parties (total 20 points) : compréhension d’un texte en anglais de 250 à 350 mots écrit par toi dans "doc" (questions en anglais), langue (grammaire, lexique, traduction de phrases), et une expression écrite "open" en anglais ; plus une question de didactique "open" sur l’enseignement de l’anglais à l’école.' }
  };
  function iaSujetGet(id) { try { return JSON.parse(localStorage.getItem('crpe-sujet/' + id)); } catch (e) { return null; } }
  function aiSujet(id, slot) {
    var t = IA_SUJETS[id];
    var prompt = 'Tu es concepteur de sujets du CRPE (concours de recrutement de professeurs des écoles, niveau licence). Crée un sujet d’entraînement INÉDIT et réaliste pour l’épreuve écrite « ' + t.label + ' ».\n' +
      'Structure : ' + t.parts + '\nChaque partie a un barème dont la somme des "pts" est indiquée. Vérifie soigneusement tous les calculs et toutes les réponses.\n' +
      'Pour les questions "open", fournis "model" : un corrigé type détaillé avec le barème. ' + QFORMAT + ' Ajoute à chaque question "pts" (nombre de points) et éventuellement "type":"open".\n' +
      'Réponds UNIQUEMENT avec un objet JSON : {"parts":[{"title":"PARTIE 1 — … (20 points)","doc":"texte ou document support, ou chaîne vide","questions":[ … ]}]}';
    return SAMPLE.json(prompt, { cache: false, modelTier: 'complex' }).then(function (r) {
      if (r && !r.parts && Array.isArray(r.questions)) r = { parts: [{ title: 'SUJET', doc: '', questions: r.questions }] };
      var parts = (r && Array.isArray(r.parts) ? r.parts : []).map(function (p) {
        return { title: esc(String(p.title || 'PARTIE')), doc: p.doc ? '<div class="box ex"><p>' + esc(String(p.doc)).replace(/\n+/g, '</p><p>') + '</p></div>' : '', questions: (p.questions || []).map(function (x) { return normQ(x, true); }).filter(Boolean) };
      }).filter(function (p) { return p.questions.length; });
      if (!parts.length || (id === 'ia-fm' && parts.length < 2)) throw { code: 'invalid_json' };
      var sj = { id: id, title: 'Concours blanc inédit — ' + t.label, short: 'Sujet inédit · ' + t.label, duration: t.duration, icon: t.icon, intro: '<p>Sujet <b>inventé par le prof IA</b> au format de l’écrit. Comme tout sujet généré automatiquement, il peut contenir une imprécision : en cas de doute, vérifie dans les leçons.</p>', parts: parts, created: Date.now() };
      try { localStorage.setItem((slot === 'next' ? 'crpe-next/' : 'crpe-sujet/') + id, JSON.stringify(sj)); } catch (e) {}
      return sj;
    });
  }
  /* Concours blancs à la suite : sujet suivant préparé en arrière-plan (IA) ou assemblé depuis la banque */
  var BANK_SPEC = {
    'ia-fm': [{ title: 'PARTIE 1 — FRANÇAIS (20 points)', sid: 'francais', closed: 12, open: 2 }, { title: 'PARTIE 2 — MATHÉMATIQUES (20 points)', sid: 'maths', closed: 16, open: 1 }],
    'ia-hg': [{ title: 'HISTOIRE-GÉOGRAPHIE-EMC (20 points)', sid: 'hgemc', prefer: /^(hc4|gc4|ec4)/, closed: 16, open: 1 }],
    'ia-lv': [{ title: 'ANGLAIS (20 points)', sid: 'anglais', prefer: /^enc4/, closed: 16, open: 1 }],
    'ia-arts': [{ title: 'ARTS (20 points)', sid: 'arts', prefer: /^ac4/, closed: 16, open: 1 }],
    'ia-sci': [{ title: 'SCIENCES ET TECHNOLOGIE (20 points)', sid: 'sciences', closed: 16, open: 1 }]
  };
  function bankSujet(id) {
    var t = IA_SUJETS[id];
    var parts = BANK_SPEC[id].map(function (sp) {
      var sj = subj(sp.sid), closed = [], open = [];
      var chs = sj.chapters.filter(function (c) { return !sp.prefer || sp.prefer.test(String(c.id)); });
      if (chs.length < 3) chs = sj.chapters;
      chs.forEach(function (c) { (c.exercises || []).concat(c.evaluation || []).forEach(function (q) { (q.type === 'open' ? open : closed).push(q); }); });
      var qs = shuffle(closed).slice(0, sp.closed).map(function (q) { var c2 = cloneQ(q); c2.pts = 1; return c2; });
      var ptsOpen = (20 - qs.length) / Math.max(1, sp.open);
      qs = qs.concat(shuffle(open).slice(0, sp.open).map(function (q) { var c2 = cloneQ(q); c2.pts = ptsOpen; return c2; }));
      return { title: sp.title, doc: '', questions: qs };
    });
    var sj = { id: id, kind: id, title: 'Concours blanc aléatoire — ' + t.label, short: 'Sujet aléatoire · ' + t.label, duration: t.duration, icon: '🎲',
      intro: '<p>Sujet <b>assemblé au hasard</b> à partir de la banque de questions du site : chaque tirage est différent.</p>', parts: parts, created: Date.now() };
    try { localStorage.setItem('crpe-sujet/' + id, JSON.stringify(sj)); } catch (e) {}
    return sj;
  }
  var NEXT = {};
  function storedNext(id) { try { return JSON.parse(localStorage.getItem('crpe-next/' + id)); } catch (e) { return null; } }
  function prefetchNext(id) {
    if (!SAMPLE || !IA_SUJETS[id] || NEXT[id] || storedNext(id)) return;
    NEXT[id] = aiSujet(id, 'next').catch(function () { return null; }).then(function (x) { NEXT[id] = null; return x; });
  }
  function takeNext(id) {
    function pop() {
      var n = storedNext(id);
      if (!n) return null;
      try { localStorage.removeItem('crpe-next/' + id); localStorage.setItem('crpe-sujet/' + id, JSON.stringify(n)); } catch (e) {}
      return n;
    }
    var have = pop();
    if (have) return Promise.resolve(have);
    if (NEXT[id]) return NEXT[id].then(function () { return pop() || (SAMPLE ? aiSujet(id) : bankSujet(id)); });
    if (SAMPLE) return aiSujet(id).catch(function () { return bankSujet(id); });
    return Promise.resolve(bankSujet(id));
  }
  function nextKind(c) {
    if (IA_SUJETS[c.id]) return c.id;
    if (/^fm/.test(c.id)) return 'ia-fm';
    return null;
  }
  function sujetIntro(sj) {
    CONCOURS = CONCOURS.filter(function (x) { return x.id !== sj.id; }).concat([sj]);
    app.innerHTML = '<div class="breadcrumb"><a href="#/concours">Concours blancs</a> › ' + esc(sj.short) + '</div><h1>' + sj.icon + ' ' + sj.title + '</h1>' + sj.intro +
      '<div class="card center"><p>' + sj.parts.map(function (p) { return esc(p.title.replace(/&amp;/g, '&')) + ' : ' + p.questions.length + ' questions'; }).join('<br>') + '</p><button class="btn" id="startBlanc">▶ Démarrer le chronomètre</button></div>';
    document.getElementById('startBlanc').addEventListener('click', function () { startConcours(sj); });
    window.scrollTo(0, 0);
  }
  function goNext(id, holder) {
    holder.innerHTML = '<div class="ai-thinking"><span class="dots"><i></i><i></i><i></i></span> ' + (SAMPLE ? 'Préparation de ton prochain sujet… (souvent déjà prêt, sinon 1 à 3 minutes)' : 'Tirage d’un nouveau sujet…') + '</div>';
    takeNext(id).then(sujetIntro).catch(function (e) { holder.innerHTML = '<p class="small">⚠ ' + aiError(e) + '</p>'; });
  }

  function viewIASujet(id) {
    setTab('concours');
    var t = IA_SUJETS[id];
    var last = iaSujetGet(id);
    var html = '<div class="breadcrumb"><a href="#/concours">Concours blancs</a> › Sujets illimités</div><h1>' + t.icon + ' ' + t.label + '</h1>' +
      '<p>' + Math.floor(t.duration / 60) + ' h. Un nouveau sujet à chaque fois, autant que tu veux : quand tu en finis un, le suivant est prêt.</p>' +
      '<div class="btn-row">' + (SAMPLE ? '<button class="btn" id="iaNew">✨ Nouveau sujet inventé par le prof IA</button>' : '') +
      '<button class="btn ' + (SAMPLE ? 'secondary' : '') + '" id="bankNew">🎲 Sujet aléatoire (banque du site)</button>' +
      (last ? '<button class="btn secondary" id="iaLast">↺ Refaire le dernier sujet</button>' : '') + '</div>' +
      (SAMPLE || STANDALONE ? '' : '<p class="small muted">Les sujets inventés par le prof IA (avec un texte support inédit) se génèrent depuis ton lien claude.ai.</p>') +
      '<div id="iaOut"></div>';
    app.innerHTML = html;
    var lb = document.getElementById('iaLast');
    if (lb) lb.addEventListener('click', function () { sujetIntro(last); });
    document.getElementById('bankNew').addEventListener('click', function () { sujetIntro(bankSujet(id)); });
    var nb = document.getElementById('iaNew');
    if (nb) nb.addEventListener('click', function () { nb.disabled = true; goNext(id, document.getElementById('iaOut')); });
  }

  /* ---------- Tableau de bord : objectif et trajectoire ---------- */
  function target() { return state.flags.target || 15; }
  function avg(a) { return a.length ? Math.round(a.reduce(function (x, y) { return x + y; }, 0) / a.length * 10) / 10 : null; }
  function scoreChart(hist, tgt) {
    if (hist.length < 1) return '<p class="muted small">Ton graphique apparaîtra après ton premier concours blanc.</p>';
    var W = 640, H = 230, L = 34, R = 16, T = 14, B = 30;
    var n = hist.length, x = function (i) { return n === 1 ? (L + W - R) / 2 : L + i * (W - L - R) / (n - 1); }, y = function (v) { return T + (20 - v) * (H - T - B) / 20; };
    var g = '';
    [0, 5, 10, 15, 20].forEach(function (v) { g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '" class="ch-grid"/><text x="' + (L - 6) + '" y="' + (y(v) + 4) + '" class="ch-ax" text-anchor="end">' + v + '</text>'; });
    g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(tgt) + '" y2="' + y(tgt) + '" class="ch-target"/><text x="' + (W - R) + '" y="' + (y(tgt) - 5) + '" class="ch-ax" text-anchor="end">objectif ' + fr(tgt) + '</text>';
    [1, 2].forEach(function (w) {
      var pts = hist.map(function (h, i) { return { h: h, i: i }; }).filter(function (o) { return o.h.w === w; });
      if (!pts.length) return;
      if (pts.length > 1) g += '<polyline class="ch-line s' + w + '" points="' + pts.map(function (o) { return x(o.i) + ',' + y(o.h.n); }).join(' ') + '"/>';
      pts.forEach(function (o) {
        g += '<circle class="ch-dot s' + w + '" cx="' + x(o.i) + '" cy="' + y(o.h.n) + '" r="5"><title>' + esc(o.h.title) + ' · ' + new Date(o.h.d).toLocaleDateString('fr-FR') + ' : ' + fr(o.h.n) + '/20</title></circle>';
      });
      var last = pts[pts.length - 1];
      g += '<text class="ch-lab s' + w + '" x="' + Math.min(x(last.i) + 8, W - R - 4) + '" y="' + (y(last.h.n) - 9) + '" text-anchor="' + (x(last.i) > W - 90 ? 'end' : 'start') + '">' + fr(last.h.n) + '</text>';
    });
    g += '<text x="' + L + '" y="' + (H - 8) + '" class="ch-ax">1ᵉʳ concours</text><text x="' + (W - R) + '" y="' + (H - 8) + '" class="ch-ax" text-anchor="end">dernier</text>';
    var legend = '<div class="ch-legend"><span><i class="sw s1"></i>Écrit 1 (français + maths)</span><span><i class="sw s2"></i>Écrit 2 (ton domaine)</span><span><i class="sw tg"></i>Objectif</span></div>';
    var table = '<details class="ch-table"><summary>Voir le tableau des notes</summary><div class="tbl"><table><tr><th>Date</th><th>Sujet</th><th>Note</th><th>Parties</th></tr>' +
      hist.slice().reverse().map(function (h) { return '<tr><td>' + new Date(h.d).toLocaleDateString('fr-FR') + '</td><td>' + esc(h.title) + '</td><td><b>' + fr(h.n) + '</b></td><td>' + (h.p || []).map(function (p) { return esc(p.t) + ' ' + fr(p.v) + '/20'; }).join(' · ') + '</td></tr>'; }).join('') + '</table></div></details>';
    return legend + '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Évolution de tes notes de concours blancs">' + g + '</svg>' + table;
  }
  function dashboard() {
    var tgt = target(), hist = state.history || [];
    var e1 = hist.filter(function (h) { return h.w === 1; }), e2 = hist.filter(function (h) { return h.w === 2; });
    var last3 = avg(e1.slice(-3).map(function (h) { return h.n; }));
    var best = hist.length ? Math.max.apply(null, hist.map(function (h) { return h.n; })) : null;
    var weekAgo = Date.now() - 7 * 864e5, week = hist.filter(function (h) { return h.d > weekAgo; }).length;
    var tiles = [
      ['Moyenne des 3 derniers écrits 1', last3 != null ? fr(last3) + '/20' : '—', last3 != null ? (last3 >= tgt ? 'ok' : last3 >= tgt - 3 ? 'warn' : 'ko') : ''],
      ['Dernier écrit 2', e2.length ? fr(e2[e2.length - 1].n) + '/20' : '—', e2.length ? (e2[e2.length - 1].n >= tgt ? 'ok' : 'warn') : ''],
      ['Meilleure note', best != null ? fr(best) + '/20' : '—', ''],
      ['Concours cette semaine', String(week), week >= 1 ? 'ok' : 'warn']
    ];
    var html = '<div class="card dash"><div class="row"><h2 style="margin:0">🎯 Objectif écrit</h2>' +
      '<label class="tgt">Je vise <select id="tgtSel">' + [12, 13, 14, 15, 16, 17, 18].map(function (v) { return '<option' + (v === tgt ? ' selected' : '') + '>' + v + '</option>'; }).join('') + '</select>/20</label></div>' +
      '<div class="tiles">' + tiles.map(function (t) { return '<div class="tile ' + t[2] + '"><small>' + t[0] + '</small><b>' + t[1] + '</b></div>'; }).join('') + '</div>' +
      scoreChart(hist, tgt);

    /* Plan d'action calculé */
    var plan = [];
    var lastFM = e1[e1.length - 1];
    if (!hist.length) plan.push('Fais ton <b>premier concours blanc</b> pour connaître ton point de départ. <a href="#/concours/ia-fm">Commencer</a>');
    if (lastFM && lastFM.p && lastFM.p.length === 2) {
      var weak = lastFM.p[0].v <= lastFM.p[1].v ? lastFM.p[0] : lastFM.p[1];
      if (weak.v < tgt) plan.push('Ta partie la plus faible au dernier écrit 1 : <b>' + esc(weak.t.replace(/PARTIE \d+ — /, '').toLowerCase()) + '</b> (' + fr(weak.v) + '/20). Priorité de la semaine. <a href="#/lecons/' + (/FRAN/i.test(weak.t) ? 'francais' : 'maths') + '">Voir les chapitres</a>');
      if (lastFM.p.some(function (p) { return p.v < 5; })) plan.push('⚠ Une partie est sous 5/20 (soit 2,5/10) : au concours, elle serait <b>éliminatoire</b>. Ne la laisse pas de côté.');
    }
    var low = [];
    ['francais', 'maths'].forEach(function (sid) {
      var sj = subj(sid); if (!sj) return;
      sj.chapters.forEach(function (c) {
        var x = peekChap(sid, c.id);
        var v = x.evalBest != null ? on20(x.evalBest, x.evalTotal) : null;
        if (v == null || v < tgt) low.push({ s: sj, c: c, v: v });
      });
    });
    var tested = low.filter(function (o) { return o.v != null; }).sort(function (a, b) { return a.v - b.v; }).slice(0, 4);
    if (tested.length) plan.push('Chapitres de l’écrit 1 sous ton objectif : ' + tested.map(function (o) { return '<a href="#/chap/' + o.s.id + '/' + o.c.id + '/cours">' + o.s.icon + ' ' + esc(o.c.short || o.c.title) + ' (' + fr(o.v) + ')</a>'; }).join(', ') + '. Relis le cours, refais les exercices, repasse l’évaluation.');
    var untested = low.filter(function (o) { return o.v == null; }).length;
    if (untested) plan.push('<b>' + untested + '</b> chapitres de français et de maths n’ont pas encore d’évaluation : vise ' + tgt + '/20 à chacune.');
    plan.push('Rythme conseillé pour viser ' + tgt + '/20 : <b>1 concours blanc d’écrit 1 et 1 d’écrit 2 par semaine</b>, des séries d’entraînement illimité les autres jours, et la correction du prof IA sur chaque question rédigée.');
    html += '<h3>📋 Ton plan pour atteindre ' + tgt + '/20</h3><ol class="plan">' + plan.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' +
      '<p class="small muted">Ces conseils sont calculés à partir de tes résultats sur le site. Ils ne prédisent pas ta note au concours.</p></div>';
    return html;
  }

  /* ---------- Test du jour : révision espacée + diagnostic des chapitres du soir ---------- */
  var DAY_PAIRS = [['maths', 'francais'], ['francais', 'hgemc'], ['maths', 'francais'], ['maths', 'anglais'], ['francais', 'maths'], ['francais', 'arts']];
  var ECRIT2 = ['hgemc', 'anglais', 'arts'];
  function dayNum() { var d = new Date(); return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 864e5); }
  function dailyState() { if (!state.daily) state.daily = { results: {} }; if (!state.daily.results) state.daily.results = {}; return state.daily; }
  function chapScore(sid, c) { var x = peekChap(sid, c.id); return x.evalBest != null ? on20(x.evalBest, x.evalTotal) : null; }
  function nextChapter(sid, exclude) {
    var sj = subj(sid); if (!sj) return null;
    var r = state.tests[sid];
    var weak = r ? sj.chapters.filter(function (c) { var b = r.byChap[c.id]; return b && b.t && b.s / b.t < 0.5; }) : [];
    var list = weak.concat(sj.chapters);
    for (var i = 0; i < list.length; i++) {
      var c = list[i], v = chapScore(sid, c);
      if ((v == null || v < target()) && !(exclude && exclude[sid + '/' + c.id])) return { s: sj, c: c };
    }
    return null;
  }
  function eveningPlan() {
    var ds = dailyState(), today = dayNum();
    if (ds.plan && ds.plan.day === today) return ds.plan.items.map(function (k) { var sj = subj(k.sid); return sj ? { s: sj, c: chap(sj, k.id) } : null; }).filter(function (x) { return x && x.c; });
    var D = state.flags.domain, pairs = D ? [['maths', 'francais'], ['francais', D], ['maths', 'francais'], ['maths', D], ['francais', 'maths'], ['francais', D]] : DAY_PAIRS;
    var pair = pairs[today % pairs.length], seen = {}, items = [];
    pair.forEach(function (sid) { var n = nextChapter(sid, seen); if (n) { seen[sid + '/' + n.c.id] = 1; items.push(n); } });
    if (items.length < 2) { var n2 = nextChapter('maths', seen) || nextChapter('francais', seen); if (n2) items.push(n2); }
    ds.plan = { day: today, items: items.map(function (x) { return { sid: x.s.id, id: x.c.id }; }) };
    save();
    return items;
  }
  function closedQs(c) { return (c.exercises || []).concat(c.evaluation || []).filter(function (q) { return q.type !== 'open'; }); }
  function pickFrom(sj, c, n, tag) { return shuffle(closedQs(c)).slice(0, n).map(function (q) { return { q: cloneQ(q), tag: tag + ' · ' + sj.icon + ' ' + (c.short || c.title), sid: sj.id, cid: c.id }; }); }
  function dailyQuestions() {
    var today = dayNum(), out = [], used = {};
    /* 🔁 révision : chapitres déjà travaillés, priorité aux plus faibles et aux plus anciens */
    var studied = [];
    lessonSubjects().forEach(function (sj) {
      sj.chapters.forEach(function (c) {
        var x = peekChap(sj.id, c.id);
        if (!x.studied && x.evalBest == null && !x.exDone) return;
        var v = chapScore(sj.id, c), last = x.lastDaily || 0;
        var gap = today - last, due = !last || [1, 3, 7, 14, 30].indexOf(gap) !== -1 || gap > 30;
        studied.push({ s: sj, c: c, w: (v == null ? 8 : Math.max(0, 20 - v)) + (due ? 10 : 0) + Math.min(gap, 30) / 3 + Math.random() * 3 });
      });
    });
    studied.sort(function (a, b) { return b.w - a.w; }).slice(0, 4).forEach(function (o) { used[o.s.id + '/' + o.c.id] = 1; out = out.concat(pickFrom(o.s, o.c, 1, '🔁 Révision')); });
    /* 🎯 diagnostic des chapitres du soir */
    var plan = eveningPlan();
    plan.forEach(function (o, i) { used[o.s.id + '/' + o.c.id] = 1; out = out.concat(pickFrom(o.s, o.c, i === 0 ? 2 : 1, '🎯 Ce soir')); });
    /* 🌍 découverte : chapitres pas encore vus en français et maths, puis 1 question d’écrit 2 */
    var fresh = [];
    ['francais', 'maths'].forEach(function (sid) { var sj = subj(sid); sj.chapters.forEach(function (c) { var x = peekChap(sid, c.id); if (!x.studied && !x.exDone && !used[sid + '/' + c.id]) fresh.push({ s: sj, c: c }); }); });
    shuffle(fresh).slice(0, 2).forEach(function (o) { out = out.concat(pickFrom(o.s, o.c, 1, '🌍 Découverte')); });
    var e2 = subj(state.flags.domain || ECRIT2[today % ECRIT2.length]);
    if (e2) { var c2 = shuffle(e2.chapters.filter(function (c) { return closedQs(c).length; }))[0]; if (c2) out = out.concat(pickFrom(e2, c2, 1, '🌍 Écrit 2')); }
    /* compléter jusqu’à 10 avec français et maths */
    var guard = 0;
    while (out.length < 10 && guard++ < 40) {
      var sj = subj(guard % 2 ? 'maths' : 'francais'), c = shuffle(sj.chapters)[0];
      out = out.concat(pickFrom(sj, c, 1, '🌍 Découverte'));
    }
    return out.slice(0, 10);
  }
  function dailyDone() { return !!dailyState().results[dayNum()]; }
  function maybeDaily() {
    var ds = dailyState();
    if (dailyDone() || ds.snooze === dayNum() || /^#\/(jour|concours\/|chap\/.*\/evaluation)/.test(location.hash)) return;
    var m = document.createElement('div');
    m.className = 'modal';
    m.innerHTML = '<div class="modal-card daily-card" role="dialog" aria-modal="true" aria-labelledby="dTitle"><div class="daily-sun">☀️</div><h2 id="dTitle">Ton test du jour</h2>' +
      '<p>10 questions, environ 5 minutes : des <b>révisions</b> des chapitres déjà vus, un <b>diagnostic</b> de tes chapitres du soir et un peu de <b>découverte</b>.</p>' +
      '<div class="btn-row" style="justify-content:center"><button class="btn" id="dGo">C’est parti ! 💪</button><button class="btn secondary" id="dLater">Plus tard</button></div></div>';
    document.body.appendChild(m);
    m.querySelector('#dGo').addEventListener('click', function () { m.remove(); location.hash = '#/jour'; });
    m.querySelector('#dLater').addEventListener('click', function () { ds.snooze = dayNum(); save(); m.remove(); toast('D’accord ! Ton test du jour t’attend sur l’accueil.'); });
    m.querySelector('#dGo').focus();
  }
  function planCards(plan) {
    return '<div class="tonight">' + plan.map(function (o) {
      var x = peekChap(o.s.id, o.c.id), step = x.exDone ? 'evaluation' : x.read ? 'exercices' : 'cours';
      return '<a class="chap-item" style="--c:var(--' + o.s.id + ');--ci:var(--' + o.s.id + '-ink)" href="#/chap/' + o.s.id + '/' + o.c.id + '/' + step + '"><span class="chap-num">' + o.c.num + '</span><span class="t"><b>' + esc(o.c.title) + '</b><small>' + o.s.icon + ' ' + esc(o.s.name) + ' · ' + (step === 'cours' ? 'commencer par le cours' : step === 'exercices' ? 'reprendre aux exercices' : 'passer l’évaluation') + '</small></span>' + chapStatus(o.s.id, o.c) + '</a>';
    }).join('') + '</div>';
  }
  function viewDaily() {
    setTab('home');
    var ds = dailyState(), today = dayNum(), done = ds.results[today];
    var plan = eveningPlan();
    var head = '<div class="breadcrumb"><a href="#/">Accueil</a> › Test du jour</div><h1>☀️ Test du jour</h1>';
    if (done) {
      app.innerHTML = head + '<div class="score"><div class="small muted">Test du jour déjà fait</div><div class="big">' + fr(done.s) + ' / ' + done.t + '</div><div class="btn-row" style="justify-content:center"><button class="btn secondary" id="dAgain">Refaire un test (hors série)</button></div></div>' +
        '<h2>🌙 Ton programme de ce soir</h2>' + planCards(plan);
      document.getElementById('dAgain').addEventListener('click', function () { runDaily(true); });
      return;
    }
    runDaily(false);
    function runDaily(extra) {
      var items = dailyQuestions();
      app.innerHTML = head + '<p>Réponds à chaque question puis clique sur « Vérifier » : la correction s’affiche tout de suite. Ne regarde pas le cours, c’est un vrai point d’étape ✨</p><div id="dq"></div>';
      renderQuiz(document.getElementById('dq'), items.map(function (x) { return x.q; }), {
        mode: 'exercise', uid: 'day' + today + (extra ? 'x' : ''),
        labels: function (q, i) { return 'Question ' + (i + 1) + ' / ' + items.length + ' · ' + esc(items[i].tag); },
        onDone: function (score, total) {
          items.forEach(function (x) { if (/Révision/.test(x.tag)) chapState(x.sid, x.cid).lastDaily = today; });
          if (!extra) { ds.results[today] = { s: Math.round(score * 10) / 10, t: total }; addXP(30, 'test du jour'); }
          save();
          if (score >= total * 0.8) confetti();
          var box = document.createElement('div');
          box.innerHTML = '<div class="score"><div class="small muted">Ton test du jour</div><div class="big">' + fr(Math.round(score * 10) / 10) + ' / ' + total + '</div><div>' +
            (score >= total * 0.8 ? '🎉 Excellent, tu es en forme !' : score >= total * 0.5 ? '👍 Bien ! Relis les corrections ci-dessus.' : '💪 Pas grave : c’est pour ça qu’on révise. Relis les corrections.') + '</div></div>' +
            '<h2>🌙 Ton programme de ce soir</h2><p>Ce soir, travaille ces chapitres : <b>cours → exercices → évaluation</b>, objectif ' + target() + '/20.</p>' + planCards(plan);
          document.getElementById('dq').appendChild(box);
          box.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
  function dailySpark() {
    var ds = dailyState(), today = dayNum(), days = [];
    for (var i = 13; i >= 0; i--) days.push({ d: today - i, r: ds.results[today - i] });
    var W = 280, H = 70, bw = 14, gap = (W - 14 * bw) / 13;
    var bars = days.map(function (o, i) {
      var x = i * (bw + gap), v = o.r ? o.r.s / o.r.t : 0, h = o.r ? Math.max(4, v * (H - 18)) : 3;
      return '<rect x="' + x.toFixed(1) + '" y="' + (H - 14 - h).toFixed(1) + '" width="' + bw + '" height="' + h.toFixed(1) + '" rx="3" class="' + (o.r ? 'sp-bar' : 'sp-empty') + '"><title>' + (o.r ? fr(o.r.s) + '/' + o.r.t : 'pas de test') + '</title></rect>';
    }).join('');
    var n = days.filter(function (o) { return o.r; }).length;
    return '<div class="card"><div class="row"><h3 style="margin:0">☀️ Tests du jour (14 derniers jours)</h3><span class="badge ' + (n >= 10 ? 'ok' : n >= 5 ? 'warn' : '') + '">' + n + ' / 14 jours</span></div>' +
      '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Scores des tests du jour sur 14 jours">' + bars +
      '<text x="0" y="' + (H - 2) + '" class="ch-ax">il y a 14 j</text><text x="' + W + '" y="' + (H - 2) + '" class="ch-ax" text-anchor="end">aujourd’hui</text></svg></div>';
  }

  /* ---------- Planning jusqu'au concours (session 2027, dates à vérifier sur le site officiel) ---------- */
  var EXAM = new Date(2027, 2, 30), REG = new Date(2026, 10, 25, 12), PASS1_END = new Date(2027, 0, 3), MASTER_END = new Date(2027, 2, 14);
  var DOMAINS = { hgemc: '🌍 Histoire-géo-EMC', anglais: '🇬🇧 Anglais', arts: '🎨 Arts' };
  var PHASES = [
    { from: new Date(2026, 9, 1), to: new Date(2026, 10, 25), t: '1 · Premier passage + inscription', d: 'Chapitres de français et de maths, découverte des 3 domaines de l’écrit 2. Choisir ton domaine et t’inscrire avant le 25 novembre.' },
    { from: new Date(2026, 10, 26), to: new Date(2027, 0, 3), t: '2 · Finir le premier passage', d: 'Tous les chapitres de l’écrit 1 et de ton domaine, 1 concours blanc par semaine.' },
    { from: new Date(2027, 0, 4), to: new Date(2027, 0, 31), t: '3 · Consolidation', d: 'Deuxième passage des chapitres sous ' + 15 + '/20, 1 concours blanc d’écrit 1 et 1 d’écrit 2 par semaine.' },
    { from: new Date(2027, 1, 1), to: new Date(2027, 2, 29), t: '4 · Entraînement intensif', d: '2 concours blancs par semaine, sujets zéro officiels, entraînement illimité sur tes points faibles.' },
    { from: new Date(2027, 2, 30), to: new Date(2027, 2, 31), t: '5 · Les écrits 🎯', d: 'Mardi 30 et mercredi 31 mars 2027 (dates annoncées, à vérifier).' }
  ];
  function daysTo(d) { var t = new Date(); t.setHours(0, 0, 0, 0); var x = new Date(d); x.setHours(0, 0, 0, 0); return Math.round((x - t) / 864e5); }
  function planChapters() {
    var list = [];
    var ids = ['francais', 'maths', 'oral'].concat(state.flags.domain ? [state.flags.domain] : ECRIT2);
    ids.forEach(function (sid) { var sj = subj(sid); if (sj) sj.chapters.forEach(function (c) { list.push({ sid: sid, c: c }); }); });
    return list;
  }
  function planStart() {
    if (!state.flags.planStart) { state.flags.planStart = Date.now(); save(); }
    var d = new Date(state.flags.planStart); d.setHours(0, 0, 0, 0); return d;
  }
  function expectedAt(date) {
    var chs = planChapters(), N = chs.length, st = planStart().getTime(), t = date.getTime();
    var studied = t <= st ? 0 : Math.min(N, Math.round(N * (t - st) / Math.max(1, PASS1_END.getTime() - st)));
    var mastered = t <= PASS1_END.getTime() ? 0 : Math.min(N, Math.round(N * (t - PASS1_END.getTime()) / (MASTER_END.getTime() - PASS1_END.getTime())));
    var blancs = 0, w = new Date(2026, 10, 26);
    while (w <= date && w < EXAM) { blancs += w < new Date(2027, 0, 4) ? 1 : w < new Date(2027, 1, 1) ? 2 : 2; w = new Date(w.getTime() + 7 * 864e5); }
    return { N: N, studied: studied, mastered: mastered, blancs: blancs };
  }
  function actualAt(date) {
    var t = date.getTime(), studied = 0, mastered = 0;
    planChapters().forEach(function (o) {
      var x = peekChap(o.sid, o.c.id);
      if (x.studied && x.studied <= t) studied++;
      else if (!x.studied && (x.exDone || x.evalBest != null) && t >= Date.now() - 864e5) studied++;
      if (x.evalBest != null && on20(x.evalBest, x.evalTotal) >= target()) mastered++;
    });
    var blancs = (state.history || []).filter(function (h) { return h.d <= t; }).length;
    return { studied: studied, mastered: mastered, blancs: blancs };
  }
  function planStatus() {
    var now = new Date(), e = expectedAt(now), a = actualAt(now);
    var phase2 = now >= PASS1_END;
    var gap = phase2 ? a.mastered - e.mastered : a.studied - e.studied;
    var st = gap >= 2 ? { c: 'ok', t: '✅ En avance (+' + gap + ' chapitre' + (gap > 1 ? 's' : '') + ')' } : gap >= -2 ? { c: 'ok', t: '✅ Dans les temps' } : { c: 'ko', t: '⚠️ En retard (' + gap + ' chapitres)' };
    return { e: e, a: a, st: st, phase2: phase2 };
  }
  function countdownCard() {
    var dE = daysTo(EXAM), dR = daysTo(REG), ps = planStatus();
    return '<a class="card count-card" href="#/planning"><div class="count-num"><b>J-' + Math.max(0, dE) + '</b><small>avant les écrits</small></div><div class="count-txt">' +
      (dR >= 0 ? '<span class="badge warn">📝 Inscription' + ((state.flags.academie || ACA_DEFAULT) ? ' (' + esc(state.flags.academie || ACA_DEFAULT) + ')' : '') + ' avant le 25 novembre à midi · J-' + dR + '</span>' : '') +
      '<span class="badge ' + ps.st.c + '">' + ps.st.t + '</span><small>Voir mon planning semaine par semaine →</small></div></a>';
  }
  function viewPlanning() {
    setTab('progression');
    var ps = planStatus(), dE = daysTo(EXAM), dR = daysTo(REG), now = new Date();
    var html = '<div class="breadcrumb"><a href="#/progression">Progrès</a> › Planning</div><h1>🗓️ Mon planning jusqu’au concours</h1>' +
      '<div class="card plan-head"><div class="count-num big"><b>J-' + Math.max(0, dE) + '</b><small>écrits le mardi 30 mars 2027</small></div>' +
      '<div><p style="margin:0 0 8px"><span class="badge ' + ps.st.c + '">' + ps.st.t + '</span></p>' +
      '<p class="small" style="margin:0">' + (ps.phase2 ? 'Chapitres maîtrisés (≥ ' + target() + '/20) : <b>' + ps.a.mastered + '</b> / objectif du jour ' + ps.e.mastered : 'Chapitres travaillés : <b>' + ps.a.studied + '</b> / objectif du jour ' + ps.e.studied) + ' · total ' + ps.e.N + '</p>' +
      '<p class="small" style="margin:4px 0 0">Concours blancs faits : <b>' + ps.a.blancs + '</b> / prévu à ce jour ' + ps.e.blancs + '</p></div></div>';
    if (dR >= 0) html += '<div class="box warn"><span class="box-title">📝 Inscription : J-' + dR + '</span>Les inscriptions se font sur <b>Cyclades</b> jusqu’au <b>mercredi 25 novembre 2026 à midi</b>. Tu y choisis ton <b>académie</b>, ton <b>domaine d’écrit 2</b> et la matière de ton <b>oral 1</b>. <a href="https://www.devenirenseignant.gouv.fr" target="_blank" rel="noopener">Vérifier sur devenirenseignant.gouv.fr</a></div>';
    html += '<div class="card"><label for="domSel"><b>Mon domaine pour l’écrit 2</b></label><select id="domSel" class="dom-sel"><option value="">Pas encore choisi (je révise les 3)</option>' +
      Object.keys(DOMAINS).map(function (k) { return '<option value="' + k + '"' + (state.flags.domain === k ? ' selected' : '') + '>' + DOMAINS[k] + '</option>'; }).join('') + '</select>' +
      '<p class="small muted">Ce choix adapte ton planning, tes chapitres du soir et le test du jour.</p>' +
      '<label for="acaSel"><b>Mon académie</b></label><input id="acaSel" class="dom-sel" type="text" value="' + esc(state.flags.academie || ACA_DEFAULT) + '" placeholder="Ex. : Lyon, Versailles…">' +
      '<p class="small muted">Les oraux sont organisés par ton académie : surveille son site et ta convocation après les écrits.</p></div>';
    html += '<h2>Les grandes étapes</h2><ol class="phases">' + PHASES.map(function (ph) {
      var cur = now >= ph.from && now <= new Date(ph.to.getTime() + 864e5), past = now > new Date(ph.to.getTime() + 864e5);
      return '<li class="' + (cur ? 'cur' : past ? 'past' : '') + '"><b>' + ph.t + '</b><small>' + ph.from.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) + ' → ' + ph.to.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) + '</small><span>' + ph.d + '</span>' + (cur ? '<em>📍 tu es ici</em>' : '') + '</li>';
    }).join('') + '</ol>';
    /* semaines */
    var start = planStart(), w0 = new Date(start); w0.setDate(w0.getDate() - ((w0.getDay() + 6) % 7));
    var rows = '', k = 1;
    for (var w = new Date(w0); w < EXAM; w = new Date(w.getTime() + 7 * 864e5), k++) {
      var end = new Date(w.getTime() + 6 * 864e5 + 86399e3), e = expectedAt(end), cur = now >= w && now <= end, past = now > end;
      var a = past || cur ? actualAt(past ? end : now) : null;
      var p2 = end >= PASS1_END, goal = p2 ? e.mastered + ' maîtrisés · ' + e.blancs + ' concours' : e.studied + ' travaillés' + (e.blancs ? ' · ' + e.blancs + ' concours' : '');
      var stat = '';
      if (past) stat = (p2 ? a.mastered >= e.mastered - 2 : a.studied >= e.studied - 2) ? '✅' : '⚠️';
      else if (cur) stat = '📍';
      rows += '<tr class="' + (cur ? 'cur' : '') + '"><td>S' + k + '</td><td>' + w.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) + '</td><td>' + goal + '</td><td>' + (a ? (p2 ? a.mastered : a.studied) : '') + '</td><td>' + stat + '</td></tr>';
    }
    html += '<h2>Semaine par semaine</h2><p class="small muted">Objectifs cumulés : chapitres travaillés (cours + exercices) jusqu’à début janvier, puis chapitres maîtrisés (évaluation ≥ ' + target() + '/20) et concours blancs.</p>' +
      '<div class="tbl weeks"><table><tr><th>Sem.</th><th>Début</th><th>Objectif</th><th>Fait</th><th></th></tr>' + rows + '</table></div>' +
      '<p class="small muted">Dates de la session 2027 relevées sur des sites de préparation : vérifie-les sur le site officiel.</p>';
    app.innerHTML = html;
    if (!state.flags.academie && ACA_DEFAULT) { state.flags.academie = ACA_DEFAULT; save(); }
    document.getElementById('acaSel').addEventListener('change', function () { state.flags.academie = this.value.trim() || ACA_DEFAULT; save(); toast(state.flags.academie ? 'Académie enregistrée : ' + state.flags.academie : 'Académie effacée'); });
    document.getElementById('domSel').addEventListener('change', function () {
      state.flags.domain = this.value || null;
      if (state.daily) state.daily.plan = null;
      save(); toast(this.value ? 'Domaine enregistré : ' + DOMAINS[this.value] : 'Tu révises les 3 domaines'); viewPlanning();
    });
    var curRow = app.querySelector('.weeks tr.cur');
    if (curRow) setTimeout(function () { curRow.scrollIntoView({ block: 'nearest' }); }, 50);
  }

  function viewProgress() {
    setTab('progression');
    var l = levelInfo(state.xp);
    var html = '<h1>📈 Ma progression</h1>' +
      '<div class="card"><div class="row"><b>Niveau ' + l.n + ' · ' + l.name + '</b><span>⭐ ' + state.xp + ' XP · 🔥 ' + streak() + ' j</span></div><div class="bar" style="margin-top:8px"><i style="width:' + pct(l.into, l.need) + '%"></i></div><p class="small muted">Encore ' + (l.need - l.into) + ' XP avant le niveau suivant.</p></div>';
    html = '<h1>📈 Ma progression</h1>' + dashboard() + html.replace('<h1>📈 Ma progression</h1>', '');
    html += countdownCard() + backupCard() + '<p class="small muted">Tu es dans la <b>' + SESSION.name + '</b>. Chaque code d’accès ouvre sa propre session : progression, contrôles, discussions et brouillons séparés. « Changer de session » (en bas) te redemande le code.</p>' + dailySpark();
    html += '<h2>🏅 Mes badges</h2><div class="badges">' + badges().map(function (b) {
      return '<div class="bdg' + (b.ok ? ' on' : '') + '" title="' + esc(b.d) + '"><span>' + b.i + '</span><b>' + b.n + '</b><small>' + b.d + '</small></div>';
    }).join('') + '</div>';
    html += '<h2>🧭 Tests et concours blancs</h2>';
    Object.keys(POS).forEach(function (k) {
      var r = state.tests[k];
      html += '<div class="card"><div class="row"><b>' + POS[k].icon + ' Positionnement ' + POS[k].title + '</b>' +
        (r ? '<a href="#/bilan/' + k + '">' + on20(r.score, r.total) + '/20 · bilan</a>' : '<a href="#/positionnement/' + k + '">à passer</a>') + '</div></div>';
    });
    CONCOURS.forEach(function (c) {
      var r = state.blancs[c.id];
      html += '<div class="card"><div class="row"><b>' + c.icon + ' ' + c.short + '</b>' +
        (r ? '<span>meilleure note ' + on20(r.best, r.total) + '/20</span>' : '<a href="#/concours/' + c.id + '">à faire</a>') + '</div></div>';
    });
    html += '<h2>📚 Chapitres</h2>';
    SUBJECTS.forEach(function (s) {
      var evals = s.chapters.map(function (c) { return peekChap(s.id, c.id); }).filter(function (x) { return x.evalBest != null; });
      var avg = evals.length ? Math.round(evals.reduce(function (a, x) { return a + on20(x.evalBest, x.evalTotal); }, 0) / evals.length * 10) / 10 : null;
      html += '<div class="card" style="--c:var(--' + s.id + ');--ci:var(--' + s.id + '-ink)"><div class="row"><h3 style="margin:0;color:var(--ci)">' + s.icon + ' ' + s.name + '</h3>' +
        '<span class="badge">' + (avg != null ? 'Moyenne ' + avg + '/20' : 'Pas encore d’évaluation') + '</span></div>' +
        '<div class="bar" style="margin:10px 0"><i style="width:' + pct(acquired(s.id), s.chapters.length) + '%"></i></div>' +
        s.chapters.map(function (c) {
          return '<div class="row small" style="padding:4px 0;border-bottom:1px solid var(--border)"><a href="#/chap/' + s.id + '/' + c.id + '/cours">' + c.num + '. ' + c.title + '</a>' + chapStatus(s.id, c) + '</div>';
        }).join('') + '</div>';
    });
    html += '<div class="btn-row"><button class="btn secondary" id="logout">🔁 Changer de session</button><button class="btn secondary" id="reset">Réinitialiser toute ma progression</button></div>';
    app.innerHTML = html;
    wireBackup();
    document.getElementById('logout').addEventListener('click', function () { window.crpeLogout(); });
    document.getElementById('tgtSel').addEventListener('change', function () { state.flags.target = +this.value; save(); viewProgress(); });
    document.getElementById('reset').addEventListener('click', function () {
      ask('Effacer toute ta progression (notes, XP, badges) sur cet appareil ?', 'Tout effacer', function () {
        state = { chapters: {}, tests: {}, blancs: {}, xp: 0, days: [], flags: {} }; save(); renderXP(); viewProgress();
      });
    });
  }

  /* ---------- Routeur ---------- */
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
    var parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    app.style.removeProperty('--c'); app.style.removeProperty('--ci');
    switch (parts[0]) {
      case 'positionnement': parts[1] ? viewPosTest(parts[1]) : viewPosHome(); break;
      case 'bilan': viewBilan(parts[1]); break;
      case 'lecons': viewLecons(parts[1]); break;
      case 'anglais': viewLecons('anglais'); break;
      case 'oral': viewOral(); break;
      case 'simulation': viewSimulation(); break;
      case 'chap': viewChap(parts[1], parts[2], parts[3] || 'cours'); break;
      case 'concours': parts[1] ? (IA_SUJETS[parts[1]] ? viewIASujet(parts[1]) : viewConcours(parts[1])) : viewConcoursHome(); break;
      case 'entrainement': viewTrain(); break;
      case 'progression': viewProgress(); break;
      case 'jour': viewDaily(); break;
      case 'planning': viewPlanning(); break;
      default: viewHome();
    }
    window.scrollTo(0, 0);
  }
  /* ---------- Code d'accès ----------
     Protection légère côté navigateur : elle évite qu'un visiteur de passage entre sur le site,
     mais ce n'est pas une sécurité forte (le contenu reste dans les fichiers du site). */
  var ACCESS_HASH = SESSION.hash;
  var ACCESS_KEY = 'crpe-l3-access';
  function sha256Hex(txt) {
    if (!(window.crypto && crypto.subtle && window.TextEncoder)) return Promise.reject(new Error('crypto'));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
    });
  }
  function unlocked() { try { return localStorage.getItem(ACCESS_KEY) === ACCESS_HASH; } catch (e) { return !!window.__crpeOpen; } }

  /* ---------- Notifications : cloche dans l'en-tête + notifications du téléphone quand c'est autorisé ---------- */
  var bellBtn = document.createElement('button');
  bellBtn.className = 'icon-btn bell';
  bellBtn.setAttribute('aria-label', 'Notifications');
  document.querySelector('.topbar').insertBefore(bellBtn, themeBtn);
  function notifs() { if (!state.notifs) state.notifs = []; return state.notifs; }
  function renderBell() {
    var n = notifs().filter(function (x) { return !x.read; }).length;
    bellBtn.innerHTML = '🔔' + (n ? '<span class="bell-n">' + (n > 9 ? '9+' : n) + '</span>' : '');
  }
  function sysNotify(msg) {
    try {
      if (window.Notification && Notification.permission === 'granted' && document.visibilityState !== 'visible') new Notification('Objectif CRPE', { body: msg, icon: 'icons/icon-192.png' });
    } catch (e) {}
  }
  function notify(icon, msg, href, quiet) {
    notifs().unshift({ t: Date.now(), i: icon, m: msg, h: href || '', read: false });
    state.notifs = notifs().slice(0, 40);
    save(); renderBell();
    if (!quiet) toast(icon + ' ' + msg, true);
    sysNotify(icon + ' ' + msg);
  }
  function notifyOnce(key, icon, msg, href) {
    var k = 'notif/' + key;
    if (state.flags[k]) return;
    state.flags[k] = 1;
    notify(icon, msg, href, true);
  }
  function ago(t) {
    var m = Math.round((Date.now() - t) / 6e4);
    return m < 1 ? 'à l’instant' : m < 60 ? 'il y a ' + m + ' min' : m < 1440 ? 'il y a ' + Math.round(m / 60) + ' h' : 'il y a ' + Math.round(m / 1440) + ' j';
  }
  function openBell() {
    var old = document.querySelector('.notif-panel'); if (old) { old.remove(); return; }
    var list = notifs();
    var canSys = !!window.Notification && Notification.permission === 'default';
    var p = document.createElement('div');
    p.className = 'notif-panel';
    p.innerHTML = '<div class="notif-head"><b>🔔 Notifications</b><button class="icon-btn" aria-label="Fermer">✕</button></div>' +
      (list.length ? '<ul>' + list.map(function (x, k) {
        return '<li class="' + (x.read ? '' : 'new') + '"><a href="' + (x.h || '#/') + '" data-k="' + k + '"><span class="ni">' + x.i + '</span><span>' + esc(x.m) + '<small>' + ago(x.t) + '</small></span></a></li>';
      }).join('') + '</ul>' : '<p class="small muted">Rien de nouveau pour l’instant.</p>') +
      (canSys ? '<button class="btn secondary" id="sysOn">📲 Recevoir aussi les notifications sur mon téléphone</button>' : '') +
      '<p class="small muted">Les rappels arrivent quand le site est ouvert (ou en arrière-plan sur ton téléphone si tu as autorisé les notifications).</p>';
    document.body.appendChild(p);
    list.forEach(function (x) { x.read = true; }); save(); renderBell();
    p.querySelector('.notif-head button').addEventListener('click', function () { p.remove(); });
    p.querySelectorAll('a[data-k]').forEach(function (a) { a.addEventListener('click', function () { p.remove(); }); });
    var on = p.querySelector('#sysOn');
    if (on) on.addEventListener('click', function () {
      try {
        Notification.requestPermission().then(function (r) {
          on.remove();
          toast(r === 'granted' ? 'Notifications activées 🎉' : 'Notifications refusées : tu les retrouveras ici, dans la cloche.');
        });
      } catch (e) { on.remove(); }
    });
  }
  bellBtn.addEventListener('click', openBell);
  document.addEventListener('click', function (e) {
    var p = document.querySelector('.notif-panel');
    if (p && !p.contains(e.target) && !bellBtn.contains(e.target)) p.remove();
  });
  /* rappels du jour (une seule fois par jour et par sujet) */
  function dailyReminders() {
    var d = dayNum(), h = new Date().getHours();
    try {
      if (!dailyDone()) notifyOnce('jour/' + d, '☀️', 'Ton test du jour t’attend (10 questions, 5 minutes).', '#/jour');
      var pl = eveningPlan();
      if (h >= 17 && pl && pl.length) notifyOnce('soir/' + d, '🌙', 'Programme de ce soir : ' + pl.map(function (o) { return plain(o.c.title); }).join(' + ') + '.', '#/');
      if (STANDALONE && !isEmptyState(state) && Date.now() - (state.flags.lastBackup || 0) > 7 * 864e5) notifyOnce('bk/' + Math.floor(d / 7), '💾', 'Pense à télécharger ta sauvegarde (onglet Progrès) pour ne jamais perdre ta progression.', '#/progression');
      var dR = daysTo(REG);
      if (dR >= 0 && (dR <= 7 || dR % 7 === 0)) notifyOnce('reg/' + d, '📝', 'Inscription au CRPE' + ((state.flags.academie || ACA_DEFAULT) ? ' (' + (state.flags.academie || ACA_DEFAULT) + ')' : '') + ' sur Cyclades avant le 25 novembre à midi : J-' + dR + '.', '#/planning');
      var ps = planStatus();
      if (ps.st.c === 'ko' && new Date().getDay() === 1) notifyOnce('retard/' + d, '⚠️', 'Planning : ' + ps.st.t.replace(/^⚠️\s*/, '') + '. On rattrape ce soir ?', '#/planning');
      SUBJECTS.forEach(function (sj) {
        sj.chapters.forEach(function (c) {
          var x = peekChap(sj.id, c.id);
          if (x.evalBest != null && on20(x.evalBest, x.evalTotal) < 15 && x.studied && Date.now() - x.studied > 2 * 864e5)
            notifyOnce('revoir/' + sj.id + '/' + c.id + '/' + x.studied, '🔁', 'À revoir : « ' + plain(c.title) + ' » (' + fr(on20(x.evalBest, x.evalTotal)) + '/20). Refais les exercices puis l’évaluation.', '#/chap/' + sj.id + '/' + c.id + '/exercices');
        });
      });
    } catch (e) { /* rappel ignoré */ }
    save(); renderBell();
    var unread = notifs().filter(function (x) { return !x.read; });
    if (unread.length && window.Notification && Notification.permission === 'granted') sysNotify(unread[0].i + ' ' + unread[0].m);
  }
  function start() {
    cloud.started = true;
    var foot = document.querySelector('.foot');
    if (foot && foot.textContent.indexOf('Session') < 0) foot.textContent += ' · ' + SESSION.name;
    var brand = document.querySelector('.brand');
    if (brand && PROFILE && !brand.querySelector('.ses')) brand.insertAdjacentHTML('beforeend', ' <small class="ses">' + esc(SESSION.short || SESSION.name) + '</small>');
    document.body.classList.remove('locked');
    window.addEventListener('hashchange', route);
    markActiveDay();
    renderXP();
    renderBell();
    route();
    Promise.race([cloud.ready, new Promise(function (r) { setTimeout(r, 6000); })]).then(function () { setTimeout(maybeDaily, 300); });
    cloud.ready.then(function () { setTimeout(dailyReminders, 800); });
    setInterval(dailyReminders, 30 * 6e4);
  }
  function showGate() {
    document.body.classList.add('locked');
    var g = document.createElement('div');
    g.className = 'gate';
    g.innerHTML = '<form class="gate-card" novalidate>' +
      '<div class="gate-logo">🎯</div><h1>Objectif CRPE L3</h1>' +
      '<p>Entre ton code d’accès pour ouvrir ton espace de révision.</p>' +
      '<label for="gateCode">Code d’accès</label>' +
      '<input id="gateCode" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="CRPE-XXXX" required>' +
      '<p class="gate-err" role="alert"></p>' +
      '<button class="btn" type="submit">Se connecter</button>' +
      '<p class="small muted">Tu n’as qu’à le saisir une fois sur chaque appareil.</p></form>';
    document.body.appendChild(g);
    var input = g.querySelector('input'), err = g.querySelector('.gate-err');
    input.focus();
    g.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var code = input.value.trim().toUpperCase().replace(/\s+/g, '');
      if (code && code.indexOf('CRPE-') !== 0) code = 'CRPE-' + code.replace(/^CRPE/, '');
      sha256Hex('crpe-l3:' + code).then(function (h) {
        var ses = SESSIONS.filter(function (x) { return x.hash === h; })[0];
        if (!ses) { err.textContent = 'Code incorrect. Vérifie-le (lettres majuscules, avec le tiret) et réessaie.'; input.select(); return; }
        try { localStorage.setItem(ACCESS_KEY, h); } catch (x) { window.__crpeOpen = true; }
        if (ses.id !== PROFILE) {
          // autre session : on la charge proprement
          try { if (ses.id) localStorage.setItem('crpe-profile', ses.id); else localStorage.removeItem('crpe-profile'); } catch (x) {}
          location.reload(); return;
        }
        g.remove(); start();
      }).catch(function () { err.textContent = 'Ton navigateur ne permet pas de vérifier le code. Mets-le à jour ou essaie un autre navigateur.'; });
    });
  }
  /* Un lien vers la page déjà affichée la recharge (ex. : revenir à l'accueil d'un concours après l'avoir fini) */
  document.addEventListener('click', function (e) {
    var l = e.target.closest && e.target.closest('a[href^="#/"]');
    if (l && l.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  });
  window.crpeLogout = function () {
    try { localStorage.removeItem(ACCESS_KEY); } catch (e) {}
    window.__crpeOpen = false;
    location.hash = '#/';
    app.innerHTML = '';
    window.removeEventListener('hashchange', route);
    showGate();
  };
  function ownerUnlock() {
    var g = document.querySelector('.gate');
    if (!g || cloud.started) return;
    try { localStorage.setItem(ACCESS_KEY, ACCESS_HASH); } catch (x) { window.__crpeOpen = true; }
    g.remove(); start();
  }
  if (unlocked()) start(); else showGate();
  cloudInit();

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    if (window.claude) {
      // sur claude.ai : pas de cache hors ligne, pour toujours charger la dernière version
      try { navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); }).catch(function () {}); } catch (e) {}
      try { if (window.caches) caches.keys().then(function (ks) { ks.forEach(function (k) { if (k.indexOf('crpe') === 0) caches.delete(k); }); }); } catch (e) {}
    } else navigator.serviceWorker.register('sw.js').catch(function () {});
  }
})();
