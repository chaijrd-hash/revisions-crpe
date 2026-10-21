/* FRANÇAIS — compléments (placés dans l'ordre du programme grâce à « pos ») */

window.FR.chapters.push({
  id: "f-texte",
  pos: 4.5,
  title: "Grammaire du texte : cohérence et reprises",
  short: "Grammaire du texte",
  sub: "Reprises anaphoriques, progression thématique, connecteurs",
  objectifs: [
    "Identifier les <b>reprises</b> (pronominales, nominales) et leur <b>référent</b>.",
    "Reconnaître les types de <b>progression thématique</b>.",
    "Analyser le rôle des <b>connecteurs</b> dans la cohérence d’un texte."
  ],
  lesson: `
<h2>1. Un texte n’est pas une suite de phrases</h2>
<p>Un texte est <b>cohérent</b> quand on sait toujours de qui ou de quoi on parle, que les idées progressent et qu’elles sont reliées logiquement. Trois outils assurent cette cohérence : les <b>reprises</b>, la <b>progression thématique</b> et les <b>connecteurs</b>.</p>

<h2>2. Les reprises (anaphores)</h2>
<p>Un même référent est repris au fil du texte pour éviter les répétitions.</p>
<table><tr><th>Type de reprise</th><th>Exemple (référent : le loup)</th></tr>
<tr><td><b>Pronominale</b></td><td>Le loup avait faim. <u>Il</u> sortit du bois.</td></tr>
<tr><td><b>Nominale fidèle</b> (même nom, autre déterminant)</td><td>Un loup sortit. <u>Ce loup</u> avait faim.</td></tr>
<tr><td><b>Nominale infidèle</b> (synonyme, hyperonyme)</td><td>Le loup… <u>L’animal</u>… <u>Le prédateur</u>…</td></tr>
<tr><td><b>Périphrase</b></td><td>Le loup… <u>Le seigneur de la forêt</u>…</td></tr></table>
<p>Les reprises nominales infidèles apportent souvent un <b>jugement</b> (« le misérable », « la pauvre bête ») : elles révèlent le point de vue du narrateur. Pour les élèves, la difficulté est d’<b>identifier le référent</b> des pronoms, une compétence essentielle de la compréhension.</p>

<h2>3. La progression thématique</h2>
<p>Dans chaque phrase, on distingue le <b>thème</b> (ce dont on parle, déjà connu) et le <b>propos</b> (ce qu’on en dit, l’information nouvelle).</p>
<ul><li><b>À thème constant</b> : le même thème revient. « <u>Marie</u> se leva. <u>Elle</u> s’habilla. <u>Elle</u> sortit. » (récit centré sur un personnage)</li>
<li><b>Linéaire</b> : le propos d’une phrase devient le thème de la suivante. « Il aperçut <u>une maison</u>. <u>Cette maison</u> avait <u>un jardin</u>. <u>Le jardin</u>… » (description, explication)</li>
<li><b>À thème éclaté</b> : un thème général se décompose en sous-thèmes. « <u>La classe</u> s’activait : <u>les uns</u> lisaient, <u>d’autres</u> dessinaient. »</li></ul>

<h2>4. Les connecteurs</h2>
<ul><li><b>Temporels</b> (d’abord, puis, le lendemain) : organisent le récit.</li>
<li><b>Logiques</b> (car, donc, mais, pourtant, en effet) : organisent l’argumentation.</li>
<li><b>Spatiaux</b> (à gauche, plus loin) : organisent la description.</li></ul>
<p>Un connecteur mal choisi rend le texte incohérent : « Il pleuvait, <i>donc</i> nous sommes sortis » (attendu : pourtant).</p>
`,
  videos: [
    { t: "Les reprises anaphoriques", ch: "Préparation CRPE", q: "reprises anaphoriques pronominales nominales CRPE" },
    { t: "La progression thématique", ch: "Les Bons Profs", q: "progression thématique thème constant linéaire éclaté" },
    { t: "Les connecteurs", ch: "Les Bons Profs", q: "les bons profs connecteurs logiques temporels" }
  ],
  resume: "<ul><li>Reprises : pronominale, nominale fidèle / infidèle, périphrase.</li><li>Progression : constante, linéaire, éclatée.</li><li>Connecteurs : temporels, logiques, spatiaux.</li></ul>",
  exercises: [
    { q: "« Le renard s’approcha. L’animal rusé salua le corbeau. » « L’animal rusé » est une reprise :", choices: ["pronominale", "nominale fidèle", "nominale infidèle"], answer: 2, expl: "Le renard est repris par un <b>autre nom</b> (« l’animal rusé ») : la reprise est <b>nominale infidèle</b>. Fidèle, ce serait le même nom (« le renard ») ; pronominale, ce serait « il »." },
    { q: "« Paul entra. Il posa son sac. Il s’assit. » La progression est :", choices: ["à thème constant", "linéaire", "à thème éclaté"], answer: 0, expl: "Chaque phrase parle du <b>même thème</b> : Paul (repris par « il »). C’est une progression <b>à thème constant</b>, fréquente dans les récits." },
    { q: "« Nous arrivâmes devant un château. Ce château possédait une tour. La tour… » La progression est :", choices: ["à thème constant", "linéaire", "à thème éclaté"], answer: 1, expl: "L’information nouvelle d’une phrase (un château) devient le <b>thème</b> de la suivante (ce château), et ainsi de suite : c’est une progression <b>linéaire</b>." },
    { q: "Quel connecteur rend la phrase cohérente : « Il était malade, … il est venu à l’école. »", choices: ["donc", "pourtant", "car"], answer: 1, expl: "Être malade devrait l’empêcher de venir, or il vient : il y a une <b>opposition</b>, d’où <b>pourtant</b>. « Donc » marquerait une conséquence, « car » une cause." },
    { q: "Pourquoi les reprises pronominales posent-elles des difficultés aux jeunes lecteurs ? Propose une activité.", type: "open", model: "<p>Le lecteur doit retrouver à quel référent renvoie chaque pronom, parfois éloigné dans le texte ou ambigu quand plusieurs personnages du même genre sont présents. Activité : surligner chaque personnage d’une couleur et colorier ses reprises (pronoms, noms) de la même couleur ; questions « Qui est “il” à la ligne 5 ? », justification orale.</p>" }
  ],
  evaluation: [
    { q: "« La reine… Cette femme orgueilleuse… » : la reprise exprime :", choices: ["un jugement", "rien de particulier"], answer: 0, expl: "« Orgueilleuse » donne l’<b>avis</b> du narrateur sur la reine : cette reprise nominale ajoute un <b>jugement</b>, une information en plus." },
    { q: "Le propos d’une phrase est :", choices: ["ce dont on parle", "l’information nouvelle", "le sujet grammatical"], answer: 1, expl: "Le <b>propos</b> est ce qu’on dit du thème : l’<b>information nouvelle</b>. Piège : « ce dont on parle », c’est le thème, et il ne coïncide pas toujours avec le sujet grammatical." },
    { q: "« L’école comprend trois bâtiments : le premier…, le deuxième…, le troisième… » La progression est :", choices: ["à thème éclaté", "linéaire", "à thème constant"], answer: 0, expl: "Un thème général (l’école, trois bâtiments) se divise en <b>sous-thèmes</b> (le premier, le deuxième…) : c’est une progression <b>à thème éclaté</b>." },
    { q: "« Le lendemain » est un connecteur :", choices: ["logique", "temporel", "spatial"], answer: 1, expl: "<b>Le lendemain</b> situe un événement dans le <b>temps</b> par rapport au récit : c’est un connecteur <b>temporel</b>." },
    { q: "« Le roi des animaux » pour le lion est une reprise par :", choices: ["périphrase", "pronom", "répétition"], answer: 0, expl: "On remplace « le lion » par une <b>expression de plusieurs mots</b> qui le décrit : c’est une reprise par <b>périphrase</b>." }
  ]
});

window.FR.chapters.push({
  id: "f-impersonnels",
  pos: 5.5,
  title: "Infinitif, participe et gérondif",
  short: "Modes impersonnels",
  sub: "Participe présent / adjectif verbal, gérondif, propositions infinitives et participiales",
  objectifs: [
    "Distinguer <b>participe présent</b> (invariable) et <b>adjectif verbal</b> (variable).",
    "Connaître l’orthographe des paires difficiles (fatiguant / fatigant).",
    "Reconnaître le gérondif et ses valeurs."
  ],
  lesson: `
<h2>1. Les modes impersonnels</h2>
<p>Ils ne se conjuguent pas selon la personne : <b>infinitif</b> (chanter, avoir chanté), <b>participe</b> (chantant, chanté, ayant chanté), <b>gérondif</b> (en chantant).</p>

<h2>2. Participe présent ou adjectif verbal ?</h2>
<div class="box def"><span class="box-title">Le test</span>
<ul><li><b>Participe présent</b> : il exprime une <b>action</b> ; il est <b>invariable</b> ; il peut avoir un complément ou être précédé de « ne » : « des enfants <u>obéissant</u> à leurs parents ».</li>
<li><b>Adjectif verbal</b> : il exprime une <b>qualité</b> ; il <b>s’accorde</b> ; on peut le remplacer par un autre adjectif ou le faire précéder de « très » : « des enfants <u>obéissants</u> » (= sages).</li></ul></div>
<p>Pour certains verbes, l’orthographe diffère :</p>
<table><tr><th>Participe présent (action)</th><th>Adjectif verbal (qualité)</th></tr>
<tr><td>fatiguant</td><td>fatigant</td></tr><tr><td>convainquant</td><td>convaincant</td></tr><tr><td>provoquant</td><td>provocant</td></tr>
<tr><td>négligeant</td><td>négligent</td></tr><tr><td>précédant</td><td>précédent</td></tr><tr><td>différant</td><td>différent</td></tr>
<tr><td>communiquant</td><td>communicant</td></tr><tr><td>équivalant</td><td>équivalent</td></tr></table>
<p>« Le jour <u>précédant</u> la rentrée » (action : qui précède) / « le jour <u>précédent</u> » (adjectif).</p>

<h2>3. Le gérondif</h2>
<p>Forme : <b>en + participe présent</b>, invariable, dont le sujet doit être celui du verbe principal. Valeurs : <b>temps</b> (« En sortant, il ferma la porte »), <b>manière</b> (« Il est parti en courant »), <b>moyen</b>, <b>condition</b> (« En travaillant, tu réussiras »), <b>cause</b>.</p>
<p>⚠ Faute fréquente : « <i>En attendant votre réponse, veuillez agréer…</i> » : le sujet du gérondif (moi) n’est pas celui du verbe (vous). On écrit : « Dans l’attente de votre réponse, je vous prie d’agréer… ».</p>

<h2>4. Les propositions infinitives et participiales</h2>
<ul><li><b>Infinitive</b> : après un verbe de perception ou « laisser, faire », l’infinitif a son propre sujet : « J’entends <u>les oiseaux chanter</u>. »</li>
<li><b>Participiale</b> : le participe a son propre sujet, différent de celui de la principale : « <u>Le soleil s’étant couché</u>, nous rentrâmes. » (valeur de temps ou de cause)</li></ul>
`,
  videos: [
    { t: "Participe présent ou adjectif verbal", ch: "Projet Voltaire", q: "projet voltaire participe présent adjectif verbal" },
    { t: "Le gérondif", ch: "Les Bons Profs", q: "les bons profs gérondif valeurs" }
  ],
  resume: "<ul><li>Participe présent : action, invariable. Adjectif verbal : qualité, variable.</li><li>fatiguant / fatigant, précédant / précédent…</li><li>Gérondif = en + participe présent, même sujet que le verbe principal.</li></ul>",
  exercises: [
    { q: "« Des exercices très (fatiguer) » :", choices: ["fatiguants", "fatigants", "fatiguant"], answer: 1, expl: "L’<b>adjectif</b> s’écrit <b>fatigant</b> (sans u) et s’accorde : des exercices fatigants. Le participe présent, lui, garde le u et ne s’accorde pas : en <b>fatiguant</b> les élèves." },
    { q: "« Les élèves (obéir) aux consignes progressent. » :", choices: ["obéissant", "obéissants"], answer: 0, expl: "Action avec complément : participe présent invariable." },
    { q: "« Un argument (convaincre) » :", choices: ["convainquant", "convaincant"], answer: 1, expl: "L’adjectif s’écrit <b>convaincant</b> (un argument qui convainc). Le participe présent s’écrit <b>convainquant</b> : en convainquant son public." },
    { q: "« Il chante en se douchant » : le gérondif exprime :", choices: ["la cause", "la simultanéité (temps)", "la condition"], answer: 1, expl: "Le gérondif (<b>en</b> + participe présent) indique ici que les deux actions se passent <b>en même temps</b> : il chante pendant qu’il se douche." },
    { q: "« J’entends la pluie tomber » contient une proposition :", choices: ["infinitive", "participiale", "relative"], answer: 0, expl: "« La pluie » est le sujet de l’infinitif « tomber », après un verbe de perception (entendre) : c’est une proposition <b>infinitive</b> (j’entends que la pluie tombe)." }
  ],
  evaluation: [
    { q: "« La semaine (précéder) les vacances » :", choices: ["précédant", "précédent", "précédente"], answer: 0, expl: "Ici c’est une action : la semaine <b>qui précède</b> les vacances, avec un complément. C’est le <b>participe présent</b> <b>précédant</b>, invariable. L’adjectif « précédent » n’a pas de complément (la semaine précédente)." },
    { q: "« Des personnes (négliger) » (qualité) :", choices: ["négligeantes", "négligentes"], answer: 1, expl: "Pour exprimer une <b>qualité</b>, on emploie l’<b>adjectif</b> en <b>-ent</b> qui s’accorde : des personnes négligentes. Le participe présent « négligeant » (une action) ne s’accorde pas." },
    { q: "Le gérondif est :", choices: ["variable", "invariable"], answer: 1, expl: "Le gérondif (en + participe présent) est <b>invariable</b> : en chantant, en riant, quel que soit le sujet." },
    { q: "« La nuit tombée, les enfants rentrèrent » contient une proposition :", choices: ["participiale", "infinitive", "complétive"], answer: 0, expl: "« La nuit tombée » a son <b>propre sujet</b> (la nuit) et un verbe au <b>participe</b> (tombée) : c’est une proposition <b>participiale</b>, qui indique ici le temps." },
    { q: "Formule correcte en fin de lettre :", choices: ["En attendant votre réponse, veuillez agréer…", "Dans l’attente de votre réponse, je vous prie d’agréer…"], answer: 1, expl: "« <b>Dans l’attente de</b> » est la formule correcte. Avec « En attendant », le sujet sous-entendu serait « vous », ce qui est incohérent : c’est vous qui attendez, pas le destinataire." }
  ]
});

window.FR.chapters.push({
  id: "f-poesie",
  pos: 10.5,
  title: "Poésie et versification",
  short: "Poésie",
  sub: "Vers, syllabes, rimes, strophes, formes poétiques",
  objectifs: [
    "Compter les <b>syllabes</b> d’un vers (e muet, diérèse, synérèse).",
    "Nommer les <b>vers</b>, les <b>rimes</b> (disposition, qualité) et les <b>strophes</b>.",
    "Reconnaître les grandes formes : sonnet, fable, haïku, calligramme, poème en prose."
  ],
  lesson: `
<h2>1. Compter les syllabes d’un vers</h2>
<ul><li>Le <b>e muet</b> se prononce devant une consonne (« Je fais sou-vent ce rê-ve é-tran-ge… ») mais pas devant une voyelle (élision) ni en fin de vers.</li>
<li><b>Diérèse</b> : on prononce en deux syllabes deux voyelles normalement liées (li-on, pass-i-on) ; <b>synérèse</b> : on les prononce en une seule.</li></ul>
<table><tr><th>Syllabes</th><th>Nom du vers</th></tr><tr><td>12</td><td><b>alexandrin</b></td></tr><tr><td>10</td><td>décasyllabe</td></tr><tr><td>8</td><td>octosyllabe</td></tr><tr><td>7, 5…</td><td>heptasyllabe, pentasyllabe</td></tr></table>
<p>L’alexandrin classique a souvent une pause au milieu, la <b>césure</b>, qui le partage en deux <b>hémistiches</b> de 6 syllabes.</p>

<h2>2. Les rimes</h2>
<ul><li><b>Disposition</b> : <b>plates</b> (AABB), <b>croisées</b> (ABAB), <b>embrassées</b> (ABBA).</li>
<li><b>Genre</b> : rime <b>féminine</b> (terminée par un e muet : belle/rebelle), <b>masculine</b> (les autres).</li>
<li><b>Qualité</b> : pauvre (1 son commun : ami/joli), suffisante (2 sons : âme/flamme), riche (3 sons ou plus).</li></ul>

<h2>3. Les strophes et les formes</h2>
<ul><li>Strophes : <b>distique</b> (2 vers), <b>tercet</b> (3), <b>quatrain</b> (4), <b>quintil</b> (5)…</li>
<li><b>Sonnet</b> : 14 vers = 2 quatrains + 2 tercets (Ronsard, Baudelaire).</li>
<li><b>Fable</b> : récit en vers avec une morale (La Fontaine, XVIIᵉ s.).</li>
<li><b>Haïku</b> : petit poème japonais de 3 vers (5-7-5 syllabes), sur la nature et l’instant.</li>
<li><b>Calligramme</b> : le texte dessine ce dont il parle (Apollinaire).</li>
<li><b>Vers libre</b> (sans mètre régulier ni rime obligatoire) et <b>poème en prose</b> (Baudelaire, Ponge).</li></ul>

<h2>4. La poésie à l’école</h2>
<p>On <b>écoute</b>, <b>lit</b>, <b>mémorise</b> et <b>dit</b> des poèmes (travail de l’oral, de l’interprétation), on en <b>écrit</b> (jeux poétiques : acrostiches, « Si j’étais… », poèmes à la manière de…), on constitue une <b>anthologie</b>. Poètes souvent étudiés : Jacques Prévert, Maurice Carême, Robert Desnos, Victor Hugo, Andrée Chedid, Paul Verlaine, Jean de La Fontaine.</p>
`,
  videos: [
    { t: "La versification", ch: "Les Bons Profs", q: "les bons profs versification compter les syllabes" },
    { t: "Rimes plates, croisées, embrassées", ch: "Les Bons Profs", q: "rimes plates croisées embrassées" },
    { t: "Le sonnet", ch: "Lumni", q: "le sonnet forme poétique explication" }
  ],
  resume: "<ul><li>Alexandrin = 12 syllabes (césure 6/6) ; octosyllabe = 8.</li><li>AABB plates, ABAB croisées, ABBA embrassées.</li><li>Sonnet : 2 quatrains + 2 tercets.</li></ul>",
  exercises: [
    { q: "Un vers de 12 syllabes est un :", answers: ["alexandrin", "un alexandrin"], expl: "Le vers de <b>12 syllabes</b> est l’<b>alexandrin</b>, le vers le plus célèbre de la poésie française classique (Racine, Hugo…)." },
    { q: "Rimes de schéma ABBA :", choices: ["plates", "croisées", "embrassées"], answer: 2, expl: "<b>ABBA</b> : les rimes B sont entourées par les rimes A, comme dans des bras : rimes <b>embrassées</b>. ABAB = croisées, AABB = plates (ou suivies)." },
    { q: "Combien de vers dans un sonnet ?", answers: ["14"], expl: "Le sonnet compte <b>14 vers</b> : deux quatrains (4 vers) puis deux tercets (3 vers)." },
    { q: "Combien de syllabes dans « Je fais souvent ce rêve étrange et pénétrant » (Verlaine) ?", answers: ["12"], expl: "Je / fais / sou / vent / ce / rê / ve é / tran / ge et / pé / né / trant : 12 (élisions de « rêve » et « étrange »)." },
    { q: "Une strophe de 3 vers est un :", answers: ["tercet", "un tercet"], expl: "Une strophe de <b>3 vers</b> est un <b>tercet</b> (comme « trois »). 2 vers = distique, 4 vers = quatrain." },
    { q: "Le poème dont la forme dessine son sujet s’appelle :", choices: ["haïku", "calligramme", "sonnet"], answer: 1, expl: "Dans un <b>calligramme</b>, les mots sont disposés pour <b>dessiner</b> ce dont parle le poème (Apollinaire). Le haïku est un poème japonais de 3 vers." }
  ],
  evaluation: [
    { q: "Un octosyllabe compte :", answers: ["8"], expl: "<b>Octo-</b> veut dire <b>huit</b> (comme octogone, octobre à l’origine) : un octosyllabe compte 8 syllabes." },
    { q: "Rimes AABB :", choices: ["plates", "croisées", "embrassées"], answer: 0, expl: "<b>AABB</b> : les rimes se suivent deux par deux : rimes <b>plates</b> (ou suivies). ABAB = croisées, ABBA = embrassées." },
    { q: "« Lion » prononcé en deux syllabes (li-on) est une :", choices: ["diérèse", "synérèse", "élision"], answer: 0, expl: "La <b>diérèse</b> sépare en deux syllabes deux voyelles qu’on prononce d’habitude ensemble (li-on). L’inverse (une seule syllabe) est la <b>synérèse</b>." },
    { q: "Le haïku compte :", choices: ["3 vers", "4 vers", "14 vers"], answer: 0, expl: "Le <b>haïku</b>, poème court venu du Japon, compte <b>3 vers</b> (traditionnellement 5-7-5 syllabes) et évoque souvent la nature et un instant. 14 vers, c’est le sonnet." },
    { q: "Une rime féminine se termine par :", choices: ["un e muet", "une consonne", "une voyelle nasale"], answer: 0, expl: "Une rime est <b>féminine</b> quand le vers se termine par un <b>e muet</b> (rose, belle, aiment). Toutes les autres sont masculines, quel que soit le genre du mot." }
  ]
});

window.FR.chapters.push({
  id: "f-litterature",
  pos: 10.6,
  title: "Littérature de jeunesse et culture littéraire",
  short: "Littérature",
  sub: "Albums, contes, romans, grands repères de l’histoire littéraire",
  objectifs: [
    "Connaître des <b>œuvres et auteurs</b> de littérature de jeunesse incontournables.",
    "Connaître le vocabulaire de l’<b>album</b> (rapport texte-image).",
    "Situer les grands <b>mouvements littéraires</b>."
  ],
  lesson: `
<h2>1. Pourquoi la littérature de jeunesse ?</h2>
<p>Elle développe la compréhension, l’imaginaire, la culture commune et le débat interprétatif. Le ministère publie des <b>listes de référence</b> d’œuvres pour chaque cycle (sur Éduscol). L’enseignant lit beaucoup à voix haute : c’est un apprentissage à part entière.</p>

<h2>2. L’album</h2>
<p>Dans l’album, le texte et l’image construisent ensemble le sens. Le rapport peut être de <b>redondance</b> (l’image montre ce que dit le texte), de <b>complémentarité</b> (l’image ajoute des informations) ou de <b>disjonction</b> (l’image contredit le texte, souvent avec humour). Vocabulaire : <b>couverture</b>, <b>4ᵉ de couverture</b>, <b>pages de garde</b>, <b>double page</b>, <b>vignette</b>, <b>bulle</b> (BD).</p>

<h2>3. Repères en littérature de jeunesse</h2>
<table><tr><th>Œuvre</th><th>Auteur</th><th>Pour</th></tr>
<tr><td><i>Max et les Maximonstres</i></td><td>Maurice Sendak</td><td>cycle 1-2</td></tr>
<tr><td><i>Le Loup sentimental</i> ; <i>C’est moi le plus fort</i></td><td>Geoffroy de Pennart ; Mario Ramos</td><td>cycle 1-2</td></tr>
<tr><td><i>Petit-Bleu et Petit-Jaune</i></td><td>Leo Lionni</td><td>cycle 1</td></tr>
<tr><td><i>Le Gruffalo</i></td><td>Julia Donaldson, Axel Scheffler</td><td>cycle 1-2</td></tr>
<tr><td><i>Les contes</i> (Le Petit Chaperon rouge, Cendrillon…)</td><td>Charles Perrault (XVIIᵉ), les frères Grimm (XIXᵉ)</td><td>tous cycles</td></tr>
<tr><td><i>Les Contes de la rue Broca</i></td><td>Pierre Gripari</td><td>cycle 2-3</td></tr>
<tr><td><i>Le Petit Nicolas</i></td><td>Goscinny et Sempé</td><td>cycle 2-3</td></tr>
<tr><td><i>Vendredi ou la vie sauvage</i></td><td>Michel Tournier</td><td>cycle 3</td></tr>
<tr><td><i>L’Œil du loup</i></td><td>Daniel Pennac</td><td>cycle 3</td></tr>
<tr><td><i>Matilda</i> ; <i>Charlie et la chocolaterie</i></td><td>Roald Dahl</td><td>cycle 3</td></tr>
<tr><td><i>Le Petit Prince</i></td><td>Antoine de Saint-Exupéry</td><td>cycle 3</td></tr></table>

<h2>4. Les grands mouvements littéraires</h2>
<table><tr><th>Siècle</th><th>Mouvement</th><th>Auteurs</th></tr>
<tr><td>XVIᵉ</td><td>Humanisme, Pléiade</td><td>Rabelais, Montaigne, Ronsard, Du Bellay</td></tr>
<tr><td>XVIIᵉ</td><td>Classicisme</td><td>Molière, Racine, Corneille, La Fontaine</td></tr>
<tr><td>XVIIIᵉ</td><td>Lumières</td><td>Voltaire, Montesquieu, Diderot, Rousseau</td></tr>
<tr><td>XIXᵉ</td><td>Romantisme ; réalisme et naturalisme ; symbolisme</td><td>Hugo ; Balzac, Flaubert, Zola, Maupassant ; Baudelaire, Verlaine, Rimbaud</td></tr>
<tr><td>XXᵉ</td><td>Surréalisme ; théâtre de l’absurde</td><td>Breton, Éluard, Apollinaire ; Ionesco, Beckett</td></tr></table>

<h2>5. Le conte</h2>
<p>Le conte merveilleux suit le <b>schéma narratif</b> (situation initiale « Il était une fois », élément perturbateur, péripéties, élément de résolution, situation finale). Vladimir <b>Propp</b> a identifié des « fonctions » récurrentes (l’interdiction, la transgression, le départ, l’épreuve…). Les <b>contes détournés</b> (le loup gentil, les trois petits cochons racontés par le loup) permettent de travailler l’intertextualité.</p>
`,
  videos: [
    { t: "La littérature de jeunesse à l’école", ch: "Canopé / Éduscol", q: "littérature de jeunesse école listes de référence Éduscol" },
    { t: "Lire un album : texte et image", ch: "Préparation CRPE", q: "album jeunesse rapport texte image redondance complémentarité" },
    { t: "Les mouvements littéraires en résumé", ch: "Les Bons Profs", q: "les bons profs mouvements littéraires résumé" }
  ],
  resume: "<ul><li>Album : redondance, complémentarité, disjonction texte-image.</li><li>Perrault (XVIIᵉ), Grimm (XIXᵉ) ; Roald Dahl, Pennac, Tournier au cycle 3.</li><li>Classicisme XVIIᵉ, Lumières XVIIIᵉ, romantisme et réalisme XIXᵉ, surréalisme XXᵉ.</li></ul>",
  exercises: [
    { q: "Auteur de « L’Œil du loup » :", choices: ["Roald Dahl", "Daniel Pennac", "Michel Tournier"], answer: 1, expl: "<b>L’Œil du loup</b> (1984) est un roman de <b>Daniel Pennac</b> : un loup et un garçon se racontent leur vie en se regardant dans les yeux. Œuvre très lue au cycle 3." },
    { q: "Quand l’image contredit le texte, on parle de :", choices: ["redondance", "complémentarité", "disjonction"], answer: 2, expl: "Quand l’image dit <b>autre chose</b> que le texte, voire le contraire, on parle de <b>disjonction</b>. Redondance = l’image répète le texte ; complémentarité = elle ajoute des informations." },
    { q: "Charles Perrault a publié ses contes au :", choices: ["XVIIᵉ siècle", "XIXᵉ siècle", "XXᵉ siècle"], answer: 0, expl: "Charles Perrault publie <b>Histoires ou contes du temps passé</b> en <b>1697</b>, donc au <b>XVIIᵉ siècle</b> (règne de Louis XIV). Piège : les frères Grimm, eux, sont du XIXᵉ siècle." },
    { q: "Molière appartient au :", choices: ["classicisme", "romantisme", "surréalisme"], answer: 0, expl: "Molière (1622-1673) écrit sous Louis XIV, en plein <b>classicisme</b> (XVIIᵉ siècle). Le romantisme est au XIXᵉ, le surréalisme au XXᵉ." },
    { q: "Auteur de « Vendredi ou la vie sauvage » :", answers: ["Michel Tournier", "Tournier"], expl: "<b>Michel Tournier</b> a réécrit pour la jeunesse son roman <i>Vendredi ou les limbes du Pacifique</i> : c’est <b>Vendredi ou la vie sauvage</b> (1971), une réécriture de Robinson Crusoé." },
    { q: "Propose une activité autour d’un conte détourné pour un CE2.", type: "open", model: "<p>Après avoir lu <i>Le Petit Chaperon rouge</i> (Perrault), lire un conte détourné (ex. <i>Le Petit Chaperon vert</i> de Grégoire Solotareff, ou un album de Geoffroy de Pennart). Les élèves repèrent dans un tableau ce qui est <b>identique</b> et ce qui est <b>transformé</b> (personnages, lieux, fin). Puis, par groupes, ils écrivent leur propre version en changeant un élément (le loup devient végétarien…). Objectifs : compréhension, intertextualité, production d’écrit.</p>" }
  ],
  evaluation: [
    { q: "Auteur de « Max et les Maximonstres » :", choices: ["Maurice Sendak", "Leo Lionni", "Mario Ramos"], answer: 0, expl: "<b>Max et les Maximonstres</b> (1963) est un album de l’Américain <b>Maurice Sendak</b>. Leo Lionni a écrit <i>Petit-Bleu et Petit-Jaune</i>, Mario Ramos <i>C’est moi le plus fort</i>." },
    { q: "Victor Hugo est associé au :", choices: ["romantisme", "classicisme", "Lumières"], answer: 0, expl: "<b>Victor Hugo</b> (1802-1885) est la grande figure du <b>romantisme</b> au XIXᵉ siècle (préface de <i>Cromwell</i>, <i>Hernani</i>). Les Lumières, c’est le XVIIIᵉ (Voltaire, Rousseau)." },
    { q: "Les « fonctions » du conte ont été étudiées par :", answers: ["Propp", "Vladimir Propp"], expl: "Le Russe <b>Vladimir Propp</b> (<i>Morphologie du conte</i>, 1928) a dégagé 31 <b>fonctions</b> qui reviennent dans les contes merveilleux (interdit, transgression, départ du héros…)." },
    { q: "Zola est un auteur :", choices: ["naturaliste", "humaniste", "surréaliste"], answer: 0, expl: "Émile <b>Zola</b> est le chef de file du <b>naturalisme</b> (fin du XIXᵉ) : il décrit la société de façon presque scientifique (<i>Germinal</i>, <i>Les Rougon-Macquart</i>)." },
    { q: "Le Petit Nicolas est écrit par :", choices: ["Goscinny (illustré par Sempé)", "Pennac", "Gripari"], answer: 0, expl: "<b>Le Petit Nicolas</b> est écrit par <b>René Goscinny</b> (aussi auteur d’Astérix) et illustré par <b>Sempé</b>. Pierre Gripari a écrit les <i>Contes de la rue Broca</i>." }
  ]
});

window.FR.chapters.push({
  id: "f-didactique",
  pos: 12,
  title: "Didactique du français : lire, écrire, parler",
  short: "Didactique français",
  sub: "Apprentissage de la lecture, compréhension, écriture, oral",
  objectifs: [
    "Expliquer comment un enfant apprend à lire : <b>code</b> (déchiffrage) et <b>compréhension</b>.",
    "Connaître les étapes de l’apprentissage de l’écriture et de l’orthographe.",
    "Proposer des activités pour l’oral, la lecture et l’écriture."
  ],
  lesson: `
<h2>1. Lire = décoder × comprendre</h2>
<p>Selon le modèle de Gough et Tunmer (« <i>simple view of reading</i> »), la lecture est le <b>produit</b> de deux compétences : l’<b>identification des mots</b> (décodage) et la <b>compréhension</b> (du langage). Si l’une est nulle, il n’y a pas de lecture.</p>
<ul><li>L’enseignement de la lecture au CP repose sur une approche <b>syllabique</b> et <b>explicite</b> du code : on enseigne les correspondances graphèmes-phonèmes (CGP) dans une progression rigoureuse, avec des textes <b>déchiffrables</b> (composés de mots que l’élève peut décoder).</li>
<li>La <b>fluence</b> (lecture rapide, précise et expressive) est entraînée chaque jour ; elle libère l’attention pour comprendre.</li>
<li>La <b>conscience phonologique</b> (voir chapitre 1) se travaille dès la maternelle.</li></ul>

<h2>2. Enseigner la compréhension</h2>
<p>Comprendre s’apprend : il faut enseigner des <b>stratégies</b> explicitement : faire des hypothèses, repérer les personnages et leurs intentions, faire des <b>inférences</b> (comprendre l’implicite), identifier les reprises, se faire un « film » du texte, reformuler, résumer. Outils : lecture à voix haute par l’enseignant, questionnaires, débat interprétatif, mise en scène, rappel de récit (« raconte avec tes mots »).</p>

<h2>3. Écrire</h2>
<ul><li><b>Le geste graphique</b> : tenue du crayon, lettres cursives, en maternelle et au CP.</li>
<li><b>La production d’écrits</b> : on écrit tous les jours, des textes courts. Démarche : planifier (dictée à l’adulte en maternelle, liste d’idées) → mettre en texte → <b>réviser</b> (relire avec une grille, améliorer) → publier.</li>
<li><b>L’orthographe</b> s’apprend par des <b>dictées</b> variées (dictée préparée, dictée négociée, « phrase du jour » où les élèves expliquent leurs choix orthographiques) et par la mémorisation de mots fréquents.</li></ul>

<h2>4. L’oral</h2>
<p>L’oral est à la fois un <b>moyen</b> d’apprendre et un <b>objet</b> d’enseignement : écouter, dire (poèmes, textes), participer à des échanges (débats réglés), présenter un exposé. En maternelle, le <b>langage</b> est le domaine prioritaire : l’enseignant parle beaucoup, reformule, étend le vocabulaire (imagiers, jeux de langage).</p>

<h2>5. Le vocabulaire</h2>
<p>Le vocabulaire s’apprend en <b>contexte</b> (lectures), mais aussi de façon <b>structurée</b> : familles de mots, catégorisation, réemploi fréquent (au moins une dizaine de rencontres pour mémoriser un mot), cahier ou boîte à mots.</p>
`,
  videos: [
    { t: "Comment le cerveau apprend à lire", ch: "Stanislas Dehaene", q: "Dehaene comment le cerveau apprend à lire" },
    { t: "Enseigner la compréhension en lecture", ch: "Canopé", q: "enseigner la compréhension en lecture stratégies école" },
    { t: "La dictée négociée", ch: "Canopé", q: "dictée négociée école déroulement" }
  ],
  resume: "<ul><li>Lecture = décodage × compréhension.</li><li>CP : code syllabique explicite, textes déchiffrables, fluence.</li><li>Compréhension : stratégies explicites, inférences.</li><li>Écrire : planifier, écrire, réviser ; dictées variées.</li></ul>",
  exercises: [
    { q: "Selon la « simple view of reading », lire c’est :", choices: ["décoder + deviner", "décoder × comprendre", "réciter"], answer: 1, expl: "Selon Gough et Tunmer, Lecture = <b>Décodage × Compréhension</b>. C’est une <b>multiplication</b> : si l’un des deux vaut zéro, l’élève ne lit pas vraiment." },
    { q: "Un texte composé de mots que l’élève peut décoder avec les correspondances déjà apprises est un texte :", answers: ["déchiffrable", "décodable"], expl: "Un texte <b>déchiffrable</b> (ou décodable) ne contient que des correspondances graphèmes-phonèmes déjà étudiées : l’élève peut le lire seul, sans deviner." },
    { q: "Comprendre ce qui n’est pas écrit explicitement, c’est faire :", answers: ["une inférence", "des inférences", "inférence"], expl: "Faire une <b>inférence</b>, c’est déduire une information non écrite à partir d’indices du texte et de ses connaissances (« il prit son parapluie » → il pleut)." },
    { q: "La fluence, c’est :", choices: ["lire vite, juste et de façon expressive", "écrire sans faute", "parler une langue étrangère"], answer: 0, expl: "La <b>fluence</b> est la capacité à lire avec <b>exactitude</b>, une <b>vitesse</b> suffisante et une <b>prosodie</b> (expressivité) adaptée. Elle libère l’attention pour comprendre." },
    { q: "Décris le déroulement d’une « phrase du jour » (ou dictée négociée) en CE2 et son intérêt.", type: "open", model: "<p>L’enseignant dicte une phrase courte. Les élèves l’écrivent seuls, puis en petits groupes ils comparent et <b>négocient</b> une version commune en justifiant leurs choix (« on met -ent car le sujet est “les enfants” »). Mise en commun au tableau : chaque difficulté est discutée et la règle est rappelée. Intérêt : rendre explicite le <b>raisonnement orthographique</b>, développer la vigilance et l’argumentation, transformer l’erreur en objet d’apprentissage.</p>" }
  ],
  evaluation: [
    { q: "Au CP, les correspondances graphèmes-phonèmes s’enseignent :", choices: ["de façon explicite et progressive", "au hasard des textes", "uniquement par la mémorisation globale de mots"], answer: 0, expl: "Les programmes et la recherche recommandent un enseignement <b>explicite, systématique et progressif</b> du code. La lecture « globale » ou au hasard des textes est moins efficace." },
    { q: "Le domaine prioritaire de la maternelle est :", choices: ["le langage", "la géométrie", "l’anglais"], answer: 0, expl: "À la maternelle, le domaine <b>« Mobiliser le langage dans toutes ses dimensions »</b> est la priorité : l’oral, l’entrée dans l’écrit, le vocabulaire." },
    { q: "Réviser son texte, c’est :", choices: ["le recopier", "le relire pour l’améliorer", "le lire à voix haute"], answer: 1, expl: "<b>Réviser</b>, c’est relire son texte pour l’<b>améliorer</b> (ajouter, supprimer, déplacer, remplacer, corriger). Le recopier n’en change pas le contenu." },
    { q: "Pour mémoriser un mot, un élève doit le rencontrer :", choices: ["une fois", "de nombreuses fois, en contexte et en réemploi", "jamais"], answer: 1, expl: "Un mot se mémorise grâce à des <b>rencontres répétées</b>, dans des contextes variés, et surtout en le <b>réemployant</b> soi-même à l’oral et à l’écrit." },
    { q: "Le débat interprétatif sert à :", choices: ["vérifier le décodage", "confronter des interprétations d’un texte en les justifiant", "noter l’oral"], answer: 1, expl: "Le <b>débat interprétatif</b> fait discuter les élèves sur un passage <b>ambigu</b> : chacun propose son interprétation et la <b>justifie</b> par des indices du texte." }
  ]
});
