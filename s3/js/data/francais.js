/* FRANÇAIS — partie 1 : sons, classes, fonctions, phrase, conjugaison */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "francais",
  name: "Français",
  icon: "✍️",
  intro: "<p>L’épreuve de français du CRPE L3 évalue trois choses : ta <b>maîtrise de la langue</b> (grammaire, orthographe, conjugaison, lexique), ta capacité à <b>comprendre et analyser des textes</b>, et la <b>qualité de ton expression écrite</b>. Le niveau de référence est celui de la fin du collège, mais avec une exigence d’<b>analyse</b> : il faut savoir <b>nommer</b> et <b>justifier</b>.</p><p>On suit l’ordre logique de la grammaire : des <b>sons</b> aux <b>mots</b>, des mots à la <b>phrase</b>, puis le <b>verbe</b>, l’<b>orthographe</b>, le <b>lexique</b> et enfin le <b>texte</b>.</p>",
  chapters: []
});
window.FR = window.SUBJECTS[window.SUBJECTS.length - 1];

window.FR.chapters.push({
  id: 1,
  title: "Phonologie : les sons et les lettres",
  short: "Phonologie",
  sub: "Phonème, graphème, syllabe, alphabet phonétique",
  objectifs: [
    "Distinguer <b>phonème</b> (son) et <b>graphème</b> (lettre ou groupe de lettres qui l’écrit).",
    "Compter les <b>phonèmes</b>, les <b>graphèmes</b> et les <b>syllabes</b> d’un mot (questions fréquentes au concours).",
    "Connaître les principaux symboles de l’<b>alphabet phonétique international</b> (API) du français.",
    "Comprendre les difficultés de l’apprentissage de la lecture (correspondances graphophonologiques)."
  ],
  lesson: `
<h2>1. Le son et la lettre : deux choses différentes</h2>
<p>Quand tu dis le mot « <b>chat</b> », tu entends <b>2 sons</b> : [ʃ] et [a]. Mais tu l’écris avec <b>4 lettres</b> : c-h-a-t. C’est toute la difficulté du français : l’écrit ne correspond pas lettre à lettre à l’oral.</p>
<div class="box def"><span class="box-title">Définitions</span>
<ul><li>Un <b>phonème</b> est la plus petite unité <b>sonore</b> qui permet de distinguer deux mots. [p] et [b] sont deux phonèmes car « pain » et « bain » sont deux mots différents. On les note entre <b>crochets</b> [ ].</li>
<li>Un <b>graphème</b> est la lettre ou le <b>groupe de lettres</b> qui transcrit un phonème. Le phonème [o] peut s’écrire avec les graphèmes o, au, eau, ô…</li>
<li>Une <b>lettre muette</b> ne se prononce pas (le t de chat, le e de « joie »).</li></ul></div>
<p>Le français compte environ <b>36 phonèmes</b> (16 voyelles, 17 consonnes, 3 semi-voyelles) mais <b>26 lettres</b> et plus de <b>130 graphèmes</b>.</p>

<h2>2. Les symboles de l’API à connaître</h2>
<table><tr><th>Symbole</th><th>Exemples</th><th>Symbole</th><th>Exemples</th></tr>
<tr><td>[a]</td><td>patte</td><td>[ʃ]</td><td><b>ch</b>at, <b>sch</b>éma</td></tr>
<tr><td>[e]</td><td>été, nez, all<b>er</b></td><td>[ʒ]</td><td><b>j</b>oue, <b>g</b>ilet</td></tr>
<tr><td>[ɛ]</td><td>m<b>è</b>re, l<b>ai</b>t, b<b>ê</b>te</td><td>[ɲ]</td><td>a<b>gn</b>eau</td></tr>
<tr><td>[ə]</td><td>l<b>e</b>, pet<b>i</b>t → p<b>e</b>tit</td><td>[ŋ]</td><td>parki<b>ng</b></td></tr>
<tr><td>[i]</td><td>lit, st<b>y</b>lo</td><td>[ʁ] ou [r]</td><td><b>r</b>ue</td></tr>
<tr><td>[o]</td><td>m<b>o</b>t, <b>eau</b>, <b>au</b>to</td><td>[k]</td><td><b>c</b>ar, <b>qu</b>i, <b>k</b>ilo</td></tr>
<tr><td>[ɔ]</td><td>p<b>o</b>rte, b<b>o</b>l</td><td>[s]</td><td><b>s</b>ac, <b>c</b>ité, gar<b>ç</b>on, pa<b>ss</b>er</td></tr>
<tr><td>[u]</td><td>l<b>ou</b>p</td><td>[z]</td><td><b>z</b>éro, ro<b>s</b>e</td></tr>
<tr><td>[y]</td><td>l<b>u</b>ne</td><td>[j]</td><td><b>y</b>eux, pa<b>ill</b>e, p<b>i</b>ed</td></tr>
<tr><td>[ø]</td><td>f<b>eu</b>, n<b>œu</b>d</td><td>[w]</td><td><b>ou</b>i, (r<b>oi</b> = [wa])</td></tr>
<tr><td>[œ]</td><td>p<b>eu</b>r, s<b>œu</b>r</td><td>[ɥ]</td><td>n<b>u</b>it, l<b>u</b>i</td></tr>
<tr><td>[ɑ̃]</td><td>v<b>en</b>t, bl<b>an</b>c</td><td>[ɛ̃]</td><td>v<b>in</b>, p<b>ain</b>, f<b>aim</b></td></tr>
<tr><td>[ɔ̃]</td><td>b<b>on</b>, n<b>om</b></td><td>[œ̃]</td><td>br<b>un</b>, parf<b>um</b></td></tr></table>

<h2>3. Compter phonèmes, graphèmes, lettres</h2>
<div class="box ex"><span class="box-title">Méthode et exemples</span>
<p><b>« oiseau »</b> : 6 lettres. Phonèmes : [w] [a] [z] [o] → <b>4 phonèmes</b>. Graphèmes : oi (qui transcrit [wa], donc 2 phonèmes pour 1 graphème) – s – eau → <b>3 graphèmes</b>.</p>
<p><b>« chapeau »</b> : 7 lettres ; [ʃ] [a] [p] [o] → 4 phonèmes ; ch – a – p – eau → 4 graphèmes.</p>
<p><b>« taxi »</b> : 4 lettres ; [t] [a] [k] [s] [i] → 5 phonèmes ! Le x transcrit 2 phonèmes [ks].</p>
<p><b>« femme »</b> : [f] [a] [m] → 3 phonèmes (le e se prononce [a] ici, le mm est un seul graphème, le e final est muet).</p></div>

<h2>4. La syllabe</h2>
<p>Une <b>syllabe</b> est un groupe de sons prononcés d’une seule émission de voix. Elle contient toujours <b>une seule voyelle prononcée</b>.</p>
<ul><li><b>Syllabes orales</b> (ce qu’on entend) : « table » → [ta-bl] → 1 ou 2 selon la prononciation, généralement <b>1 syllabe orale</b> en français standard (ta-ble se dit [tabl]).</li>
<li><b>Syllabes écrites</b> (en comptant le e muet) : ta-ble → <b>2 syllabes écrites</b>.</li>
<li>« chocolat » : cho-co-lat → 3 syllabes. « papillon » : pa-pi-llon → 3 syllabes.</li></ul>
<p>Une syllabe est <b>ouverte</b> si elle finit par une voyelle prononcée (pa), <b>fermée</b> si elle finit par une consonne prononcée (par).</p>

<h2>5. Les difficultés pour un enfant qui apprend à lire</h2>
<ul>
<li><b>Un phonème, plusieurs graphèmes</b> : [o] = o, au, eau, ô.</li>
<li><b>Un graphème, plusieurs phonèmes</b> : « c » se lit [k] (car) ou [s] (cil) ; « g » se lit [g] (gare) ou [ʒ] (girafe) selon la lettre qui suit. « s » entre deux voyelles se lit [z].</li>
<li><b>Les lettres muettes</b>, souvent des marques grammaticales (pluriel -s, -nt) ou lexicales (le t de « chat » qui se retrouve dans « chaton »).</li>
<li><b>Confusions de sons proches</b> : [p]/[b], [t]/[d], [f]/[v] (sourdes/sonores) ; et de lettres en miroir : b/d, p/q.</li>
</ul>
<p>La <b>conscience phonologique</b> (capacité à percevoir et manipuler les sons de la langue : rimes, syllabes, phonèmes) est travaillée dès la maternelle ; elle est l’un des meilleurs prédicteurs de la réussite en lecture.</p>
`,
  videos: [
    { t: "Phonème et graphème : la différence", ch: "Préparation CRPE", q: "CRPE phonème graphème différence exercice" },
    { t: "L’alphabet phonétique du français", ch: "Français avec Pierre / Lumni", q: "alphabet phonétique international français sons voyelles consonnes" },
    { t: "La conscience phonologique", ch: "Canopé", q: "Canopé conscience phonologique maternelle" }
  ],
  resume: "<ul><li>Phonème = son [ ] ; graphème = lettre(s) qui l’écrit.</li><li>« oi » = 1 graphème pour 2 phonèmes [wa] ; « x » = souvent [ks].</li><li>Une syllabe = une seule voyelle prononcée.</li></ul>",
  exercises: [
    { q: "Combien de phonèmes dans le mot « bateau » ?", answers: ["4"], expl: "[b] [a] [t] [o]." },
    { q: "Combien de graphèmes dans le mot « bateau » ?", answers: ["4"], expl: "b – a – t – eau." },
    { q: "Combien de phonèmes dans le mot « boxe » ?", answers: ["4"], expl: "[b] [ɔ] [k] [s] : le x vaut [ks], le e final est muet." },
    { q: "Combien de syllabes orales dans « éléphant » ?", answers: ["3"], expl: "é-lé-phant." },
    { q: "Dans « gilet », la lettre g transcrit le phonème :", choices: ["[g]", "[ʒ]", "[k]"], answer: 1, expl: "g devant e, i, y se prononce [ʒ]." },
    { q: "Quel mot contient le phonème [ɛ̃] ?", choices: ["lent", "main", "bon", "lune"], answer: 1, expl: "« ain » de main = [ɛ̃]. « lent » = [ɑ̃], « bon » = [ɔ̃]." },
    { q: "Dans « poison », le s se prononce :", choices: ["[s]", "[z]"], answer: 1, expl: "s entre deux voyelles = [z] (comparer avec « poisson »)." },
    { q: "Pourquoi le t de « chat » est-il muet mais pas inutile ?", type: "open", model: "<p>C’est une <b>lettre muette dérivative</b> (marque lexicale) : elle n’est pas prononcée mais elle fait le lien avec les mots de la même famille où elle s’entend : chaton, chatte, chatière. Elle permet de retrouver l’orthographe grâce à la famille de mots.</p>" }
  ],
  evaluation: [
    { q: "Combien de phonèmes dans « oiseau » ?", answers: ["4"], expl: "[w][a][z][o]." },
    { q: "Combien de lettres et de phonèmes dans « champ » ? (réponds 5/2 par exemple)", answers: ["5/2"], numeric: false, expl: "5 lettres, 2 phonèmes [ʃ] [ɑ̃]." },
    { q: "Combien de graphèmes dans « château » ?", answers: ["4"], expl: "ch – â – t – eau." },
    { q: "Combien de syllabes orales dans « papillon » ?", answers: ["3"], expl: "On découpe à l’oral en tapant dans ses mains : pa – pi – llon. Cela fait <b>3</b> syllabes (le « ll » se prononce [j] et appartient à la dernière syllabe)." },
    { q: "Le symbole [ʃ] correspond au son de :", choices: ["jeu", "chou", "gnome", "zoo"], answer: 1, expl: "[ʃ] est le son « ch » de <b>chou</b>. Ne le confonds pas avec [ʒ], le son « j » de jeu." },
    { q: "Le symbole [y] correspond au son de :", choices: ["lit", "loup", "lune", "yeux"], answer: 2, expl: "Piège : [y] = le son « u ». Le son « y » de yeux se note [j]." },
    { q: "Vrai ou faux : un phonème correspond toujours à une seule lettre.", type: "vf", answer: 1, expl: "<b>Faux</b> : un phonème (un son) peut s’écrire avec plusieurs lettres. Par exemple, le son [ʃ] s’écrit « ch » et le son [o] peut s’écrire « eau »." },
    { q: "La conscience phonologique, c’est :", choices: ["savoir écrire les lettres de l’alphabet", "percevoir et manipuler les unités sonores de la langue", "connaître l’orthographe des mots"], answer: 1, expl: "La conscience phonologique, c’est <b>entendre et manipuler les sons</b> de la langue (syllabes, rimes, phonèmes), à l’oral, sans passer par l’écrit. Elle ne concerne ni les lettres ni l’orthographe." },
    { q: "Quelles paires de phonèmes un enfant confond-il souvent à l’oral comme à l’écrit ?", choices: ["[p]/[b] et [f]/[v]", "[a]/[ʃ]", "[i]/[m]"], answer: 0, expl: "Ce sont des paires sourde/sonore : même articulation, seule la vibration des cordes vocales change." }
  ]
});

window.FR.chapters.push({
  id: 2,
  title: "Les classes de mots (la nature)",
  short: "Classes de mots",
  sub: "Mots variables et invariables, déterminants, pronoms, adverbes…",
  objectifs: [
    "Identifier la <b>classe grammaticale</b> (nature) de chaque mot d’une phrase.",
    "Distinguer <b>nature</b> (ce que le mot EST, dans le dictionnaire) et <b>fonction</b> (le rôle qu’il JOUE dans la phrase).",
    "Différencier les mots qui se ressemblent : « le » déterminant / « le » pronom, « que » pronom relatif / « que » conjonction…"
  ],
  lesson: `
<h2>1. Nature et fonction : la distinction fondamentale</h2>
<p>Un mot a une <b>nature</b> (ou classe grammaticale) : c’est son « identité », qu’on trouve dans le dictionnaire, et elle ne change pas. Il a aussi une <b>fonction</b> : c’est son « métier » dans une phrase donnée.</p>
<div class="box ex"><span class="box-title">Comparaison</span>« <b>Paul</b> mange. » / « J’appelle <b>Paul</b>. » → Dans les deux phrases, Paul est un <b>nom propre</b> (nature). Mais il est <b>sujet</b> dans la 1ʳᵉ et <b>COD</b> dans la 2ᵉ (fonction).<br>C’est comme une personne : elle reste la même (nature), mais elle peut être cuisinière le matin et footballeuse le soir (fonction).</div>

<h2>2. Les 9 classes de mots</h2>
<h3>Les mots VARIABLES (ils changent de forme : genre, nombre, personne…)</h3>
<table><tr><th>Classe</th><th>Rôle</th><th>Exemples</th></tr>
<tr><td><b>Nom</b> (commun / propre)</td><td>désigne un être, une chose, une idée</td><td>table, liberté, Lyon</td></tr>
<tr><td><b>Déterminant</b></td><td>introduit le nom, s’accorde avec lui</td><td>le, une, des, mon, ce, trois, chaque, quelques, quel…</td></tr>
<tr><td><b>Adjectif</b> (qualificatif)</td><td>qualifie le nom</td><td>grand, rouge, joyeux</td></tr>
<tr><td><b>Pronom</b></td><td>remplace un nom ou un groupe nominal (ou représente une personne)</td><td>il, le, lui, celui-ci, qui, le mien, on, personne…</td></tr>
<tr><td><b>Verbe</b></td><td>exprime une action ou un état ; se conjugue</td><td>chanter, être, sembler</td></tr></table>
<h3>Les mots INVARIABLES</h3>
<table><tr><th>Classe</th><th>Rôle</th><th>Exemples</th></tr>
<tr><td><b>Adverbe</b></td><td>modifie le sens d’un verbe, d’un adjectif, d’un autre adverbe ou d’une phrase</td><td>vite, très, hier, ne…pas, heureusement</td></tr>
<tr><td><b>Préposition</b></td><td>introduit un complément</td><td>à, de, par, pour, sans, dans, avec, sur, chez, en, vers</td></tr>
<tr><td><b>Conjonction de coordination</b></td><td>relie deux éléments de même fonction</td><td>mais, ou, et, donc, or, ni, car (« Mais où est donc Ornicar ? »)</td></tr>
<tr><td><b>Conjonction de subordination</b></td><td>introduit une proposition subordonnée</td><td>que, quand, si, comme, lorsque, puisque, parce que, bien que…</td></tr>
<tr><td><b>Interjection</b></td><td>exprime une émotion</td><td>oh !, aïe !, hélas !</td></tr></table>

<h2>3. Zoom sur les déterminants</h2>
<ul><li><b>Articles</b> : définis (le, la, les, l’), indéfinis (un, une, des), partitifs (du, de la : « boire <i>du</i> lait »).</li>
<li><b>Possessifs</b> (mon, ta, leurs…), <b>démonstratifs</b> (ce, cet, cette, ces), <b>interrogatifs/exclamatifs</b> (quel), <b>numéraux</b> (deux, cent), <b>indéfinis</b> (chaque, plusieurs, aucun, tout).</li>
<li><b>Articles contractés</b> : au (= à le), aux, du (= de le), des (= de les).</li></ul>

<h2>4. Zoom sur les pronoms</h2>
<ul><li><b>Personnels</b> : je, tu, il, nous, me, te, le, la, lui, leur, se, en, y, moi, toi, eux…</li>
<li><b>Possessifs</b> : le mien, la tienne, les leurs… <b>Démonstratifs</b> : celui, celle-ci, ceci, cela, ça.</li>
<li><b>Relatifs</b> : qui, que, quoi, dont, où, lequel… (ils introduisent une subordonnée relative et ont un antécédent).</li>
<li><b>Interrogatifs</b> : qui ? que ? lequel ? <b>Indéfinis</b> : on, personne, rien, quelqu’un, chacun, tout.</li></ul>

<h2>5. Les pièges classiques (indispensables au concours)</h2>
<div class="box warn"><span class="box-title">Même forme, nature différente</span>
<ul>
<li>« <b>le</b> » : déterminant devant un nom (<i>le</i> chien) ; pronom devant un verbe (je <i>le</i> vois).</li>
<li>« <b>leur</b> » : déterminant possessif (<i>leur</i> maison) ; pronom personnel devant un verbe (je <i>leur</i> parle) — le pronom ne prend jamais de s.</li>
<li>« <b>que</b> » : pronom relatif s’il a un antécédent (le livre <i>que</i> je lis) ; conjonction de subordination après un verbe (je pense <i>que</i> tu as raison) ; adverbe exclamatif (<i>Que</i> c’est beau !).</li>
<li>« <b>des</b> » : article indéfini pluriel (<i>des</i> pommes) ou article contracté = de + les (le bruit <i>des</i> voitures).</li>
<li>« <b>tout</b> » : déterminant (<i>tous</i> les jours), pronom (<i>Tout</i> est fini), adverbe = « très » (elle est <i>tout</i> heureuse).</li>
<li>« <b>bien</b> » : adverbe (il chante <i>bien</i>) ou nom (un <i>bien</i> immobilier).</li>
<li>« <b>en</b> » : préposition (<i>en</i> France) ou pronom (j’<i>en</i> veux).</li>
</ul></div>
<p><b>Astuce</b> : pour la nature d’un mot, observe son <b>entourage</b>. Devant un nom → probablement déterminant. Devant un verbe conjugué → probablement pronom.</p>
`,
  videos: [
    { t: "Les classes grammaticales", ch: "Les Bons Profs", q: "les bons profs classes grammaticales nature des mots" },
    { t: "Nature et fonction", ch: "Lumni", q: "Lumni nature et fonction d'un mot grammaire" },
    { t: "Les déterminants", ch: "Les Bons Profs", q: "les bons profs les déterminants" },
    { t: "Les pronoms", ch: "Les Bons Profs", q: "les bons profs les pronoms personnels relatifs" }
  ],
  resume: "<ul><li>Nature = identité (fixe) ; fonction = rôle dans la phrase.</li><li>5 classes variables (nom, déterminant, adjectif, pronom, verbe) ; 4+ invariables (adverbe, préposition, conjonctions, interjection).</li><li>Le/la/les/leur : devant un nom = déterminant ; devant un verbe = pronom.</li></ul>",
  exercises: [
    { q: "Nature de « les » dans « Je <u>les</u> regarde » :", choices: ["déterminant", "pronom personnel", "préposition"], answer: 1, expl: "Ici, « les » est devant un <b>verbe</b> et remplace un nom (je regarde <i>les enfants</i>) : c’est un <b>pronom personnel</b> COD. Devant un nom (« les enfants »), ce serait un déterminant." },
    { q: "Nature de « leur » dans « Ils ont vendu <u>leur</u> voiture » :", choices: ["pronom personnel", "déterminant possessif", "adjectif"], answer: 1, expl: "« leur » est placé devant le nom « voiture » et s’accorde avec lui (leurs voitures) : c’est un <b>déterminant possessif</b>. Le piège : devant un verbe (« je leur parle »), c’est un pronom personnel, invariable." },
    { q: "Nature de « que » dans « Le film <u>que</u> j’ai vu était long » :", choices: ["conjonction de subordination", "pronom relatif", "adverbe"], answer: 1, expl: "Il a un antécédent (film) et introduit une relative." },
    { q: "Nature de « que » dans « Je crois <u>que</u> tu as raison » :", choices: ["conjonction de subordination", "pronom relatif", "pronom interrogatif"], answer: 0, expl: "Pas d’antécédent : il introduit une subordonnée complétive." },
    { q: "Nature de « rapidement » :", choices: ["adjectif", "adverbe", "préposition"], answer: 1, expl: "« rapidement » est formé avec le suffixe <b>-ment</b> sur l’adjectif « rapide » : c’est un <b>adverbe</b>, donc un mot invariable qui précise le verbe (il court rapidement)." },
    { q: "Nature de « mais » :", choices: ["conjonction de coordination", "conjonction de subordination", "adverbe"], answer: 0, expl: "« mais » fait partie des <b>conjonctions de coordination</b> : mais, ou, et, donc, or, ni, car (« Mais où est donc Ornicar ? »)." },
    { q: "Nature de « du » dans « Je bois <u>du</u> jus » :", choices: ["article partitif", "article contracté", "préposition"], answer: 0, expl: "On ne peut pas le remplacer par « de le » : c’est une quantité non comptable → partitif. (Dans « la porte du garage », du = de + le : article contracté.)" },
    { q: "Nature de « tout » dans « Elle est <u>tout</u> étonnée » :", choices: ["déterminant", "pronom", "adverbe"], answer: 2, expl: "Il signifie « très, complètement » et modifie un adjectif." },
    { q: "Donne la nature de chaque mot : « Hier, mon voisin a acheté une très belle voiture. »", type: "open", model: "<p>Hier : adverbe ; mon : déterminant possessif ; voisin : nom commun ; a acheté : verbe (acheter, passé composé) ; une : article indéfini (déterminant) ; très : adverbe ; belle : adjectif qualificatif ; voiture : nom commun.</p>" }
  ],
  evaluation: [
    { q: "Nature de « la » dans « Je <u>la</u> vois souvent » :", choices: ["déterminant", "pronom personnel", "nom"], answer: 1, expl: "« la » est placé devant le <b>verbe</b> « vois » et remplace un nom (je vois <i>ma tante</i> → je la vois) : c’est un <b>pronom personnel</b>. Devant un nom (« la maison »), ce serait un déterminant." },
    { q: "Nature de « dont » :", choices: ["conjonction", "pronom relatif", "préposition"], answer: 1, expl: "« dont » introduit une proposition relative et remplace un antécédent (l’ami <i>dont</i> je parle) : c’est un <b>pronom relatif</b>, comme qui, que, quoi, où." },
    { q: "Nature de « sans » :", choices: ["adverbe", "préposition", "conjonction"], answer: 1, expl: "« sans » introduit un complément (sans <i>sucre</i>, sans <i>toi</i>) : c’est une <b>préposition</b>, comme à, de, pour, avec. Un adverbe, lui, s’emploie tout seul." },
    { q: "Nature de « lorsque » :", choices: ["conjonction de subordination", "conjonction de coordination", "adverbe"], answer: 0, expl: "« lorsque » introduit une proposition subordonnée de temps (lorsque <i>tu viendras</i>…) : c’est une <b>conjonction de subordination</b>, comme quand, si, parce que." },
    { q: "Nature de « ces » :", choices: ["déterminant démonstratif", "déterminant possessif", "pronom"], answer: 0, expl: "« ces » se place devant un nom pour le montrer (<i>ces</i> livres-là) : c’est un <b>déterminant démonstratif</b>. Attention au piège « ses » (avec un s), qui est possessif : ses livres = les siens." },
    { q: "Nature de « personne » dans « <u>Personne</u> n’est venu » :", choices: ["nom commun", "pronom indéfini", "déterminant"], answer: 1, expl: "Ici, « personne » n’a pas de déterminant et est sujet du verbe : il remplace un nom et signifie « aucune personne ». C’est un <b>pronom indéfini</b>. Avec un déterminant (« une personne »), ce serait un nom commun." },
    { q: "Nature de « des » dans « La voix <u>des</u> enfants » :", choices: ["article indéfini", "article contracté (de + les)", "article partitif"], answer: 1, expl: "« des » = <b>de + les</b> : la voix <i>de les</i> enfants. C’est un <b>article défini contracté</b>. Pour vérifier, mets au singulier : la voix <i>de l’</i>enfant (et non « d’un enfant »)." },
    { q: "Lequel est un mot invariable ?", choices: ["grand", "souvent", "leur (déterminant)", "chanter"], answer: 1, expl: "<b>souvent</b> est un adverbe : il ne change jamais de forme. « grand » s’accorde (grande, grands), « chanter » se conjugue et « leur » déterminant prend un s au pluriel (leurs)." },
    { q: "Dans « Il marche vite », la fonction de « vite » est complément circonstanciel de manière. Quelle est sa nature ?", answers: ["adverbe"], expl: "Ne confonds pas : la fonction est CC de manière, la nature est adverbe." },
    { q: "Vrai ou faux : un même mot peut avoir des natures différentes selon la phrase.", type: "vf", answer: 0, expl: "Vrai : « le » peut être déterminant ou pronom, « bien » adverbe ou nom, etc." }
  ]
});

window.FR.chapters.push({
  id: 3,
  title: "Les fonctions dans la phrase",
  short: "Fonctions",
  sub: "Sujet, COD, COI, attribut, compléments circonstanciels, fonctions dans le GN",
  objectifs: [
    "Trouver le <b>sujet</b> d’un verbe, même inversé ou éloigné.",
    "Distinguer <b>COD, COI, COS, attribut du sujet</b> et <b>compléments circonstanciels</b>.",
    "Identifier les fonctions dans le groupe nominal : <b>épithète, complément du nom, apposition</b>.",
    "Utiliser les <b>manipulations</b> (suppression, déplacement, remplacement) pour justifier une fonction."
  ],
  lesson: `
<h2>1. Les outils du grammairien : les manipulations</h2>
<p>Pour trouver une fonction, on ne « devine » pas : on <b>manipule</b> la phrase.</p>
<ul><li><b>Suppression</b> : peut-on enlever le groupe ? Si oui, il est probablement facultatif (complément circonstanciel, épithète…).</li>
<li><b>Déplacement</b> : peut-on le déplacer en début de phrase ? Les CC sont déplaçables, pas les COD.</li>
<li><b>Remplacement (pronominalisation)</b> : par quel pronom le remplacer ? le/la/les → COD ; lui/leur, en, y → COI.</li>
<li><b>Encadrement</b> par « c’est… qui » pour trouver le sujet.</li></ul>

<h2>2. Le sujet</h2>
<p>Le sujet indique de qui ou de quoi on parle ; il <b>commande l’accord du verbe</b>. Pour le trouver : <b>« C’est … qui + verbe »</b>.</p>
<p>« Dans la forêt vivaient <u>des loups</u>. » → C’est des loups qui vivaient → sujet <b>inversé</b>. Le verbe s’accorde : vivaient.</p>
<p>Le sujet peut être un nom, un GN, un pronom, un verbe à l’infinitif (<i>Lire</i> est un plaisir), une proposition (<i>Qui dort</i> dîne).</p>

<h2>3. Les compléments du verbe (essentiels)</h2>
<div class="box def"><span class="box-title">COD — complément d’objet direct</span>Il complète le verbe <b>sans préposition</b>. On le trouve avec « sujet + verbe + <b>quoi ? / qui ?</b> ». Il se remplace par le, la, les, l’. Il n’est ni supprimable ni déplaçable.<br>« Léa mange <u>une pomme</u>. » → Léa <i>la</i> mange.</div>
<div class="box def"><span class="box-title">COI — complément d’objet indirect</span>Il complète le verbe <b>avec une préposition</b> (à, de…) : « verbe + à qui ? de quoi ? ». Pronoms : lui, leur, en, y.<br>« Il parle <u>de son voyage</u>. » ; « Elle pense <u>à ses vacances</u>. »</div>
<div class="box def"><span class="box-title">COS — complément d’objet second</span>Quand le verbe a déjà un COD, le second complément introduit par « à » est le COS (ou COI second).<br>« Paul donne <u>un livre</u> (COD) <u>à sa sœur</u> (COS). »</div>
<div class="box def"><span class="box-title">Attribut du sujet</span>Après un <b>verbe d’état</b> (être, paraître, sembler, devenir, demeurer, rester, avoir l’air, passer pour…), il exprime une <b>qualité du sujet</b>. Si c’est un adjectif, il s’accorde avec le sujet.<br>« Ces filles semblent <u>fatiguées</u>. » ; « Il est devenu <u>médecin</u>. »</div>
<div class="box warn"><span class="box-title">COD ou attribut ?</span>« Il est <u>un bon élève</u> » : verbe d’état → attribut. « Il a <u>un bon élève</u> » : verbe d’action → COD. Le test : l’attribut désigne la <b>même personne</b> que le sujet (il = un bon élève).</div>

<h2>4. Les compléments circonstanciels (CC)</h2>
<p>Ils donnent des informations sur les <b>circonstances</b>. Ils sont en général <b>supprimables et déplaçables</b>.</p>
<table><tr><th>CC de…</th><th>Question</th><th>Exemple</th></tr>
<tr><td>Temps</td><td>quand ?</td><td><u>Demain</u>, nous partirons.</td></tr>
<tr><td>Lieu</td><td>où ?</td><td>Il joue <u>dans le jardin</u>.</td></tr>
<tr><td>Manière</td><td>comment ?</td><td>Elle parle <u>doucement</u>.</td></tr>
<tr><td>Cause</td><td>pourquoi ?</td><td>Il tremble <u>de froid</u>.</td></tr>
<tr><td>But</td><td>dans quel but ?</td><td>Il travaille <u>pour réussir</u>.</td></tr>
<tr><td>Moyen</td><td>avec quoi ?</td><td>Il écrit <u>avec un stylo</u>.</td></tr>
<tr><td>Conséquence, condition, opposition, concession…</td><td></td><td><u>Malgré la pluie</u>, nous sortons.</td></tr></table>
<p>⚠ « Il va <u>à Paris</u> » : le groupe n’est pas supprimable (« Il va » est incomplet). La grammaire actuelle parle de <b>complément essentiel de lieu</b> (ou complément de verbe). De même « Ce livre coûte <u>20 €</u> ».</p>

<h2>5. Les fonctions dans le groupe nominal</h2>
<ul>
<li><b>Épithète</b> : adjectif placé directement à côté du nom (une <u>belle</u> maison <u>ancienne</u>).</li>
<li><b>Complément du nom</b> : groupe introduit par une préposition, qui complète le nom (une tasse <u>de café</u>, la maison <u>de mon oncle</u>, une machine <u>à laver</u>).</li>
<li><b>Apposition</b> : séparée par une virgule, elle apporte une précision détachable (<u>Fatiguée</u>, Léa s’endort. / Paris, <u>capitale de la France</u>, …).</li>
<li><b>Proposition subordonnée relative</b> : complément de l’antécédent (le livre <u>que je lis</u>).</li>
</ul>
<p>La grammaire scolaire actuelle regroupe épithète, complément du nom et relative sous le nom d’<b>expansions du nom</b>.</p>
`,
  videos: [
    { t: "Le sujet du verbe", ch: "Les Bons Profs", q: "les bons profs trouver le sujet du verbe" },
    { t: "COD, COI, COS", ch: "Les Bons Profs", q: "les bons profs COD COI COS" },
    { t: "L’attribut du sujet", ch: "Les Bons Profs", q: "les bons profs attribut du sujet verbe d'état" },
    { t: "Les compléments circonstanciels", ch: "Les Bons Profs", q: "les bons profs compléments circonstanciels" },
    { t: "Épithète, apposition, complément du nom", ch: "Lumni", q: "épithète apposition complément du nom expansions du nom" }
  ],
  resume: "<ul><li>Sujet : « c’est … qui ».</li><li>COD : sans préposition, pronom le/la/les.</li><li>COI : avec préposition, pronom lui/leur/en/y.</li><li>Attribut : après un verbe d’état.</li><li>CC : supprimables, déplaçables.</li></ul>",
  exercises: [
    { q: "Fonction de « une lettre » : « Marie écrit <u>une lettre</u> à sa grand-mère. »", choices: ["COD", "COI", "attribut", "CC"], answer: 0, expl: "On pose la question « Marie écrit <b>quoi</b> ? » → une lettre. Le complément est directement relié au verbe, sans préposition, et se remplace par « la » (Marie <i>l’</i>écrit) : c’est un <b>COD</b>." },
    { q: "Fonction de « à sa grand-mère » dans la même phrase :", choices: ["COD", "COS", "CC de lieu", "complément du nom"], answer: 1, expl: "« à sa grand-mère » répond à « à qui ? » et le verbe a déjà un COD (une lettre). Un complément d’objet indirect qui s’ajoute à un COD s’appelle un <b>COS</b> (complément d’objet second)." },
    { q: "Fonction de « heureuse » : « Elle paraît <u>heureuse</u>. »", choices: ["épithète", "attribut du sujet", "COD", "apposition"], answer: 1, expl: "« paraître » est un <b>verbe d’état</b> (comme être, sembler, devenir, rester). L’adjectif qui le suit donne une qualité au sujet « Elle » : c’est un <b>attribut du sujet</b>. Astuce : remplace par « est » → Elle est heureuse." },
    { q: "Sujet de « sautent » : « Dans la mare sautent les grenouilles vertes. »", answers: ["les grenouilles vertes"], expl: "C’est les grenouilles vertes qui sautent : sujet inversé." },
    { q: "Fonction de « de son enfance » : « Il se souvient <u>de son enfance</u>. »", choices: ["COI", "complément du nom", "CC de temps"], answer: 0, expl: "« se souvenir » se construit avec <b>de</b> : on se souvient <i>de quelque chose</i>. Le complément est indispensable et se remplace par « en » (il s’<i>en</i> souvient) : c’est un <b>COI</b>." },
    { q: "Fonction de « à cause de la neige » : « <u>À cause de la neige</u>, l’école est fermée. »", choices: ["CC de cause", "CC de temps", "COI"], answer: 0, expl: "Le groupe est <b>supprimable et déplaçable</b> (L’école est fermée à cause de la neige), donc c’est un complément circonstanciel. Il répond à « pourquoi ? » : <b>CC de cause</b>." },
    { q: "Fonction de « en bois » : « une table <u>en bois</u> »", choices: ["épithète", "complément du nom", "CC de matière"], answer: 1, expl: "« en bois » complète le <b>nom</b> « table » (et non un verbe) et il est introduit par une préposition : c’est un <b>complément du nom</b>. Il n’y a pas de verbe, donc pas de CC possible." },
    { q: "Fonction de « épuisé » : « <u>Épuisé</u>, le coureur s’arrêta. »", choices: ["épithète", "attribut", "apposition"], answer: 2, expl: "« Épuisé » est <b>détaché</b> du nom « le coureur » par une virgule et il est déplaçable (Le coureur, épuisé, s’arrêta) : c’est une <b>apposition</b>. Collé au nom sans virgule, ce serait une épithète." },
    { q: "Explique, en utilisant les manipulations, pourquoi « le matin » est CC dans « Le matin, je cours » mais COD dans « J’aime le matin ».", type: "open", model: "<p>Dans « Le matin, je cours », le groupe est <b>supprimable</b> (Je cours) et <b>déplaçable</b> (Je cours le matin) : c’est un CC de temps. Dans « J’aime le matin », il n’est pas supprimable (« J’aime » est incomplet), pas déplaçable (*Le matin, j’aime), et il se remplace par « le » (Je <i>l’</i>aime) : c’est un COD.</p>" }
  ],
  evaluation: [
    { q: "Fonction de « leurs devoirs » : « Les élèves terminent <u>leurs devoirs</u>. »", choices: ["COD", "COI", "attribut"], answer: 0, expl: "On demande « Les élèves terminent <b>quoi</b> ? » → leurs devoirs. Pas de préposition, et on peut remplacer par « les » (ils <i>les</i> terminent) : c’est un <b>COD</b>." },
    { q: "Fonction de « à leurs parents » : « Ils obéissent <u>à leurs parents</u>. »", choices: ["COD", "COI", "COS", "CC"], answer: 1, expl: "« obéir » se construit avec <b>à</b> : on obéit <i>à quelqu’un</i>. Le complément est indispensable et se remplace par « leur » (ils <i>leur</i> obéissent) : c’est un <b>COI</b>. Il n’y a pas de COD, donc ce n’est pas un COS." },
    { q: "Fonction de « président » : « Il a été élu <u>président</u>. »", choices: ["COD", "attribut du sujet", "épithète"], answer: 1, expl: "« être élu » se comporte comme un verbe attributif : il = président." },
    { q: "Fonction de « avec soin » : « Elle range ses affaires <u>avec soin</u>. »", choices: ["CC de manière", "CC de moyen", "COI"], answer: 0, expl: "« avec soin » répond à la question « <b>comment</b> ? » : elle range ses affaires soigneusement. C’est un <b>CC de manière</b>. Le CC de moyen répondrait à « avec quoi ? » (avec un balai)." },
    { q: "Fonction de « rouge » : « une robe <u>rouge</u> »", choices: ["épithète", "attribut", "apposition"], answer: 0, expl: "« rouge » est un adjectif placé <b>directement à côté du nom</b> « robe », sans verbe ni virgule : c’est une <b>épithète</b>. Avec un verbe d’état (« la robe est rouge »), ce serait un attribut." },
    { q: "Pronom qui remplace un COD :", choices: ["lui", "leur", "les", "y"], answer: 2, expl: "Les pronoms COD sont <b>le, la, les, l’</b> (je regarde les fleurs → je <i>les</i> regarde). Le piège : « lui » et « leur » remplacent un COI (à quelqu’un), et « y » remplace un complément introduit par « à »." },
    { q: "Trouve le sujet : « Que veulent ces enfants ? »", answers: ["ces enfants"], expl: "Pose la question « <b>Qui est-ce qui</b> veulent ? » → ces enfants. Dans une question, le sujet est souvent <b>inversé</b> (placé après le verbe) : ces enfants veulent quoi ?" },
    { q: "Fonction de « pour gagner » : « Il s’entraîne <u>pour gagner</u>. »", choices: ["CC de but", "CC de cause", "COD"], answer: 0, expl: "« pour gagner » répond à la question « <b>dans quel but ?</b> » : il s’entraîne afin de gagner. C’est un <b>CC de but</b>. La cause répondrait à « pourquoi ? / à cause de quoi ? »." },
    { q: "Fonction de « qui chante » : « L’oiseau <u>qui chante</u> est un merle. »", choices: ["complément de l’antécédent (relative)", "sujet", "COD"], answer: 0, expl: "« qui chante » est une proposition relative introduite par « qui » ; elle complète le nom « oiseau » (son antécédent), comme le ferait un adjectif. C’est un <b>complément de l’antécédent</b>." },
    { q: "Analyse les fonctions des groupes soulignés : « <u>Chaque soir</u>, <u>ma petite sœur</u> raconte <u>une histoire</u> <u>à son chat</u>. »", type: "open", model: "<p>Chaque soir : CC de temps ; ma petite sœur : sujet de « raconte » ; une histoire : COD ; à son chat : COS (ou COI second).</p>" }
  ]
});

window.FR.chapters.push({
  id: 4,
  title: "La phrase : types, formes, propositions",
  short: "La phrase",
  sub: "Phrase simple/complexe, juxtaposition, coordination, subordination, ponctuation",
  objectifs: [
    "Reconnaître les 4 <b>types</b> et les <b>formes</b> de phrases.",
    "Distinguer phrase <b>simple</b> et phrase <b>complexe</b>, compter les propositions.",
    "Identifier propositions <b>juxtaposées, coordonnées, subordonnées</b> et la nature des subordonnées (relative, complétive, circonstancielle)."
  ],
  lesson: `
<h2>1. Qu’est-ce qu’une phrase ?</h2>
<p>À l’écrit, une phrase commence par une <b>majuscule</b> et se termine par un <b>point</b> (., ?, !, …). Elle a un <b>sens complet</b>. Une phrase <b>verbale</b> contient au moins un verbe conjugué ; une phrase <b>non verbale</b> (nominale) n’en a pas : « Quelle belle journée ! », « Défense de fumer. »</p>

<h2>2. Les types et les formes</h2>
<p>Chaque phrase a <b>un type</b> (obligatoire) :</p>
<ul><li><b>Déclaratif</b> : donne une information. « Il pleut. »</li><li><b>Interrogatif</b> : pose une question. « Viens-tu ? » (interrogation totale : réponse oui/non) ; « Où vas-tu ? » (interrogation partielle).</li><li><b>Injonctif</b> (impératif) : donne un ordre, un conseil. « Ferme la porte. »</li><li><b>Exclamatif</b> : exprime une émotion. « Comme il fait beau ! »</li></ul>
<p>Elle a aussi des <b>formes</b> : <b>affirmative / négative</b> (« ne… pas », « ne… jamais », « ne… plus »…), <b>active / passive</b>, <b>neutre / emphatique</b> (« C’est Paul qui a gagné », « Ce livre, je l’adore »), personnelle / impersonnelle (« Il faut partir »).</p>
<div class="box ex"><span class="box-title">Voix active / voix passive</span>Active : « Le chat mange la souris. » → Passive : « La souris est mangée <u>par le chat</u>. » Le COD devient sujet, le sujet devient <b>complément d’agent</b>. Le verbe passe à « être + participe passé », <b>au même temps</b> (mange → est mangée ; a mangé → a été mangée). Seuls les verbes ayant un COD peuvent se mettre au passif.</div>

<h2>3. Phrase simple et phrase complexe</h2>
<p>Une <b>proposition</b> est un groupe organisé autour d’un verbe conjugué. Règle d’or : <b>il y a autant de propositions que de verbes conjugués</b>.</p>
<ul><li><b>Phrase simple</b> : 1 seul verbe conjugué. « Le chat dort sur le canapé. »</li><li><b>Phrase complexe</b> : plusieurs verbes conjugués. « Le chat dort | pendant que la pluie tombe. »</li></ul>
<p>⚠ Les infinitifs et participes ne comptent pas, sauf cas particuliers (propositions infinitives ou participiales, à connaître pour un niveau avancé : « J’entends <u>les oiseaux chanter</u> » ; « <u>Le soleil couché</u>, nous rentrâmes »).</p>

<h2>4. Les trois façons de relier des propositions</h2>
<table><tr><th>Liaison</th><th>Outil</th><th>Exemple</th></tr>
<tr><td><b>Juxtaposition</b></td><td>signe de ponctuation (, ; :)</td><td>Il pleut, je reste à la maison.</td></tr>
<tr><td><b>Coordination</b></td><td>conjonction de coordination (mais, ou, et, donc, or, ni, car) ou adverbe de liaison (puis, ensuite, pourtant)</td><td>Il pleut, donc je reste à la maison.</td></tr>
<tr><td><b>Subordination</b></td><td>mot subordonnant (pronom relatif, conjonction de subordination, mot interrogatif)</td><td>Je reste à la maison parce qu’il pleut.</td></tr></table>
<p>Dans la subordination, il y a une <b>proposition principale</b> (qui pourrait souvent exister seule) et une <b>subordonnée</b> qui en dépend.</p>

<h2>5. Les trois grandes sortes de subordonnées</h2>
<div class="box def"><span class="box-title">Subordonnée relative</span>Introduite par un <b>pronom relatif</b> (qui, que, dont, où, lequel…) ; complète un nom, l’<b>antécédent</b>. Elle est complément de l’antécédent (comme un adjectif).<br>« Le livre <u>que tu m’as prêté</u> est passionnant. »</div>
<div class="box def"><span class="box-title">Subordonnée complétive (conjonctive)</span>Introduite par la conjonction <b>que</b> ; elle est le plus souvent <b>COD</b> du verbe. Elle se remplace par « cela ».<br>« Je pense <u>qu’il viendra</u>. » → Je pense cela.<br>Variante : l’<b>interrogative indirecte</b> : « Je me demande <u>s’il viendra</u> / <u>où il est</u>. »</div>
<div class="box def"><span class="box-title">Subordonnée circonstancielle</span>Introduite par une conjonction de subordination (quand, lorsque, parce que, puisque, pour que, si, bien que…). Elle est <b>complément circonstanciel</b> : temps, cause, but, condition, concession, conséquence…<br>« <u>Quand la cloche sonne</u>, les élèves sortent. » (temps) ; « <u>Bien qu’il soit malade</u>, il travaille. » (concession, verbe au subjonctif)</div>
<div class="box warn"><span class="box-title">Le piège du « que »</span>« Le gâteau <b>que</b> j’ai fait » → relative (antécédent gâteau). « Je sais <b>que</b> tu as raison » → complétive (pas d’antécédent). Test : dans la relative, « que » remplace un nom (j’ai fait le gâteau) ; dans la complétive, non.</div>

<h2>6. La ponctuation</h2>
<p>La <b>virgule</b> sépare des éléments d’une énumération, isole une apposition ou un CC déplacé, sépare des propositions juxtaposées. Elle ne sépare <b>jamais</b> le sujet de son verbe (*Les enfants de la classe, jouent). Le <b>point-virgule</b> sépare deux propositions liées par le sens. Les <b>deux-points</b> annoncent une explication, une énumération ou des paroles. Les <b>guillemets</b> et le <b>tiret</b> signalent le dialogue.</p>
`,
  videos: [
    { t: "Les types et formes de phrases", ch: "Les Bons Profs", q: "les bons profs types et formes de phrases" },
    { t: "Phrase simple et phrase complexe", ch: "Les Bons Profs", q: "les bons profs phrase simple phrase complexe propositions" },
    { t: "Juxtaposition, coordination, subordination", ch: "Lumni", q: "juxtaposition coordination subordination propositions" },
    { t: "Les propositions subordonnées", ch: "Les Bons Profs", q: "les bons profs propositions subordonnées relative conjonctive" },
    { t: "Voix active et voix passive", ch: "Les Bons Profs", q: "les bons profs voix passive voix active" }
  ],
  resume: "<ul><li>Autant de propositions que de verbes conjugués.</li><li>Juxtaposition (ponctuation), coordination (mais ou et donc or ni car), subordination (mot subordonnant).</li><li>Relative (antécédent), complétive (que, COD), circonstancielle (CC).</li><li>Passif : être + participe passé au même temps ; complément d’agent.</li></ul>",
  exercises: [
    { q: "Type de la phrase : « Ne cours pas dans le couloir. »", choices: ["déclaratif", "interrogatif", "injonctif", "exclamatif"], answer: 2, expl: "Type injonctif, forme négative." },
    { q: "Combien de propositions : « Quand il est arrivé, nous avons dîné puis nous sommes sortis. »", answers: ["3"], expl: "est arrivé / avons dîné / sommes sortis : 3 verbes conjugués." },
    { q: "Les propositions de « Il fait beau ; les enfants jouent dehors » sont :", choices: ["juxtaposées", "coordonnées", "subordonnées"], answer: 0, expl: "Les deux propositions sont reliées par un <b>point-virgule</b>, sans mot de liaison : elles sont <b>juxtaposées</b>. Avec « et », « mais »…, elles seraient coordonnées." },
    { q: "Nature de la subordonnée : « Je sais <u>que tu viendras</u>. »", choices: ["relative", "complétive", "circonstancielle"], answer: 1, expl: "« que tu viendras » complète le verbe « sais » comme un COD (je sais <i>cela</i>) et elle est introduite par la conjonction « que » : c’est une <b>complétive</b>. Une relative, elle, complèterait un nom." },
    { q: "Nature de la subordonnée : « La ville <u>où j’habite</u> est petite. »", choices: ["relative", "complétive", "circonstancielle de lieu"], answer: 0, expl: "« où » a un antécédent (la ville) : pronom relatif." },
    { q: "Nature de la subordonnée : « Je partirai <u>dès que tu seras prêt</u>. »", choices: ["relative", "complétive", "circonstancielle de temps"], answer: 2, expl: "« dès que » est une conjonction de subordination qui indique le <b>moment</b> (quand ?) : la subordonnée est <b>circonstancielle de temps</b>. Elle est supprimable : « Je partirai. »" },
    { q: "Mets au passif : « Le jury a récompensé l’élève. »", answers: ["l’élève a été récompensé par le jury", "l'élève a été récompensé par le jury", "l’élève a été récompensée par le jury", "l'élève a été récompensée par le jury"], numeric: false, expl: "Passé composé actif → passé composé passif : a été + participe passé." },
    { q: "Quelle phrase est mal ponctuée ?", choices: ["Le matin, je cours.", "Les élèves de CM2, partent en classe verte.", "Paris, capitale de la France, est très visitée."], answer: 1, expl: "On ne sépare pas le sujet de son verbe par une virgule." },
    { q: "Transforme ces deux phrases en une phrase complexe avec une subordonnée relative : « J’ai lu un roman. Ce roman m’a beaucoup ému. »", type: "open", model: "<p>« J’ai lu un roman <b>qui</b> m’a beaucoup ému. » (ou : « Le roman <b>que</b> j’ai lu m’a beaucoup ému. »)</p>" }
  ],
  evaluation: [
    { q: "Combien de propositions : « Le professeur explique la leçon et les élèves écoutent attentivement. »", answers: ["2"], expl: "On compte les <b>verbes conjugués</b> : « explique » et « écoutent ». Deux verbes conjugués = <b>2</b> propositions." },
    { q: "Ces propositions sont :", choices: ["juxtaposées", "coordonnées", "subordonnées"], answer: 1, expl: "Les deux propositions sont reliées par « <b>et</b> », une conjonction de coordination : elles sont <b>coordonnées</b>. Sans « et », avec une virgule, elles seraient juxtaposées." },
    { q: "Nature de la subordonnée : « <u>Si tu travailles</u>, tu réussiras. »", choices: ["circonstancielle de condition", "complétive", "relative"], answer: 0, expl: "« si » introduit ici une <b>condition</b> : tu réussiras à condition de travailler. C’est une subordonnée <b>circonstancielle de condition</b> (ou d’hypothèse)." },
    { q: "Nature de la subordonnée : « Je me demande <u>pourquoi il est parti</u>. »", choices: ["relative", "interrogative indirecte", "circonstancielle de cause"], answer: 1, expl: "Derrière « Je me demande », on retrouve une question : « Pourquoi est-il parti ? ». Une question rapportée dans une phrase, sans point d’interrogation, est une <b>interrogative indirecte</b>. Le piège : « pourquoi » fait penser à la cause." },
    { q: "Nature de la subordonnée : « Voici l’ami <u>dont je t’ai parlé</u>. »", choices: ["relative", "complétive", "circonstancielle"], answer: 0, expl: "« dont » est un <b>pronom relatif</b> : il reprend l’antécédent « l’ami » (je t’ai parlé <i>de l’ami</i>). La subordonnée est donc une <b>relative</b>." },
    { q: "« La porte a été ouverte par le vent. » Fonction de « par le vent » :", choices: ["CC de moyen", "complément d’agent", "COI"], answer: 1, expl: "La phrase est à la <b>voix passive</b> (a été ouverte). « par le vent » désigne celui qui fait l’action : c’est le <b>complément d’agent</b>. À l’actif, il redevient sujet : Le vent a ouvert la porte." },
    { q: "Forme de « C’est ma sœur qui a gagné » :", choices: ["neutre", "emphatique", "passive"], answer: 1, expl: "« C’est… qui » sert à <b>mettre en relief</b> un élément (ma sœur) : c’est la <b>forme emphatique</b>. La phrase neutre serait : « Ma sœur a gagné. »" },
    { q: "Phrase non verbale :", choices: ["Il pleut.", "Quelle chaleur !", "Viens ici."], answer: 1, expl: "Une phrase non verbale ne contient <b>aucun verbe conjugué</b>. « Quelle chaleur ! » n’en a pas, alors que « pleut » et « viens » sont des verbes conjugués." },
    { q: "Vrai ou faux : « que » est toujours un pronom relatif.", type: "vf", answer: 1, expl: "<b>Faux</b> : « que » peut être pronom relatif (le livre <i>que</i> je lis), mais aussi conjonction de subordination (je sais <i>que</i> tu viens) ou pronom interrogatif (<i>Que</i> veux-tu ?). Regarde s’il a un antécédent." },
    { q: "Analyse la phrase : « Les enfants rentrèrent quand la nuit tomba, car ils avaient froid. » (nombre de propositions, nature et liens)", type: "open", model: "<p>3 propositions : « Les enfants rentrèrent » (principale) ; « quand la nuit tomba » (subordonnée circonstancielle de temps, introduite par la conjonction de subordination « quand ») ; « car ils avaient froid » (proposition coordonnée à la principale par la conjonction de coordination « car », qui exprime la cause).</p>" }
  ]
});

window.FR.chapters.push({
  id: 5,
  title: "Le verbe et la conjugaison",
  short: "Conjugaison",
  sub: "Groupes, radical/terminaison, temps simples et composés, modes",
  objectifs: [
    "Connaître les 3 groupes et décomposer un verbe en <b>radical + terminaison</b>.",
    "Conjuguer sans faute à tous les temps de l’indicatif, au subjonctif, au conditionnel et à l’impératif.",
    "Former les <b>temps composés</b> (auxiliaire être ou avoir).",
    "Ne plus confondre : futur / conditionnel (-rai/-rais), passé simple / imparfait (-ai/-ais)."
  ],
  lesson: `
<h2>1. Les trois groupes</h2>
<ul><li><b>1ᵉʳ groupe</b> : infinitif en <b>-er</b> (sauf <b>aller</b>) : chanter, manger. Environ 90 % des verbes.</li>
<li><b>2ᵉ groupe</b> : infinitif en <b>-ir</b> avec participe présent en <b>-issant</b> : finir → finissant, choisir, grandir.</li>
<li><b>3ᵉ groupe</b> : tous les autres : aller, venir (venant, pas *venissant), prendre, voir, faire, être, avoir…</li></ul>
<p>Un verbe conjugué se compose d’un <b>radical</b> (le sens) et d’une <b>terminaison</b> (qui porte le temps, le mode, la personne, le nombre) : chant-ons, fini-ssions.</p>

<h2>2. Les modes</h2>
<table><tr><th>Mode</th><th>Personnel ?</th><th>Usage</th></tr>
<tr><td>Indicatif</td><td>oui</td><td>fait réel, certain</td></tr>
<tr><td>Subjonctif</td><td>oui</td><td>souhait, doute, obligation (« il faut que tu viennes »)</td></tr>
<tr><td>Conditionnel</td><td>oui</td><td>hypothèse, politesse, futur dans le passé (souvent rattaché à l’indicatif aujourd’hui)</td></tr>
<tr><td>Impératif</td><td>oui (3 personnes, sans sujet)</td><td>ordre, conseil</td></tr>
<tr><td>Infinitif, participe, gérondif</td><td>non (impersonnels)</td><td>chanter, chantant / chanté, en chantant</td></tr></table>

<h2>3. L’indicatif : les terminaisons à connaître</h2>
<table><tr><th></th><th>Présent (1ᵉʳ gr.)</th><th>Présent (2ᵉ gr.)</th><th>Imparfait</th><th>Futur</th><th>Passé simple (1ᵉʳ gr.)</th><th>Passé simple (2ᵉ / 3ᵉ)</th></tr>
<tr><td>je</td><td>-e</td><td>-is</td><td>-ais</td><td>-rai</td><td>-ai</td><td>-is / -us</td></tr>
<tr><td>tu</td><td>-es</td><td>-is</td><td>-ais</td><td>-ras</td><td>-as</td><td>-is / -us</td></tr>
<tr><td>il</td><td>-e</td><td>-it</td><td>-ait</td><td>-ra</td><td>-a</td><td>-it / -ut</td></tr>
<tr><td>nous</td><td>-ons</td><td>-issons</td><td>-ions</td><td>-rons</td><td>-âmes</td><td>-îmes / -ûmes</td></tr>
<tr><td>vous</td><td>-ez</td><td>-issez</td><td>-iez</td><td>-rez</td><td>-âtes</td><td>-îtes / -ûtes</td></tr>
<tr><td>ils</td><td>-ent</td><td>-issent</td><td>-aient</td><td>-ront</td><td>-èrent</td><td>-irent / -urent</td></tr></table>
<p><b>Conditionnel présent</b> = radical du futur + terminaisons de l’imparfait : je chanterais, nous finirions.</p>
<div class="box warn"><span class="box-title">Pièges orthographiques</span>
<ul><li><b>Futur ou conditionnel ?</b> (je chanterai / je chanterais) : remplace par « nous » : nous chanterons (futur) / nous chanterions (conditionnel).</li>
<li><b>Passé simple ou imparfait ?</b> (je chantai / je chantais) : même astuce avec « il » : il chanta / il chantait.</li>
<li>Verbes en <b>-ger</b> et <b>-cer</b> : nous mangeons, nous commençons (on garde le son).</li>
<li>Verbes en <b>-yer</b> : j’essuie, je nettoie (y → i devant e muet).</li>
<li>Verbes en <b>-eler/-eter</b> : j’appelle, je jette mais j’achète, je gèle.</li>
<li>Imparfait de <b>crier, étudier</b> : nous criions, vous étudiiez (deux i).</li>
<li>Futur de <b>courir, mourir, voir, envoyer</b> : je courrai, je mourrai, je verrai, j’enverrai.</li></ul></div>

<h2>4. Les temps composés</h2>
<p>Temps composé = <b>auxiliaire (être ou avoir) conjugué au temps simple correspondant</b> + <b>participe passé</b>.</p>
<table><tr><th>Temps simple</th><th>Temps composé correspondant</th><th>Exemple</th></tr>
<tr><td>Présent</td><td>Passé composé</td><td>j’ai chanté / je suis venu</td></tr>
<tr><td>Imparfait</td><td>Plus-que-parfait</td><td>j’avais chanté</td></tr>
<tr><td>Passé simple</td><td>Passé antérieur</td><td>j’eus chanté</td></tr>
<tr><td>Futur</td><td>Futur antérieur</td><td>j’aurai chanté</td></tr>
<tr><td>Conditionnel présent</td><td>Conditionnel passé</td><td>j’aurais chanté</td></tr>
<tr><td>Subjonctif présent</td><td>Subjonctif passé</td><td>que j’aie chanté</td></tr></table>
<p><b>Auxiliaire être</b> : les verbes de mouvement/changement d’état (aller, venir, partir, arriver, entrer, sortir, naître, mourir, rester, tomber, devenir…), les verbes <b>pronominaux</b> (se laver) et la voix passive. Les autres prennent <b>avoir</b>.</p>

<h2>5. Le subjonctif présent et l’impératif</h2>
<p><b>Subjonctif</b> : que je chante, que tu chantes, qu’il chante, que nous chantions, que vous chantiez, qu’ils chantent. Irréguliers : que je sois, que j’aie, que j’aille, que je fasse, que je puisse, que je sache, que je veuille.</p>
<p><b>Impératif</b> : chante, chantons, chantez (pas de s à la 2ᵉ personne du singulier pour les verbes en -er, sauf devant en/y : « Manges-en »). Finis, prends, va (mais « vas-y »).</p>
`,
  videos: [
    { t: "Les groupes de verbes", ch: "Les Bons Profs", q: "les bons profs les trois groupes de verbes" },
    { t: "Le passé simple", ch: "Les Bons Profs", q: "les bons profs passé simple conjugaison" },
    { t: "Futur ou conditionnel ?", ch: "Les Bons Profs", q: "futur ou conditionnel -rai -rais astuce" },
    { t: "Le subjonctif présent", ch: "Les Bons Profs", q: "les bons profs subjonctif présent" },
    { t: "Les temps composés", ch: "Lumni", q: "temps composés auxiliaire être avoir participe passé" }
  ],
  resume: "<ul><li>2ᵉ groupe : -ir avec -issant.</li><li>Conditionnel = radical du futur + terminaisons de l’imparfait.</li><li>Temps composé = auxiliaire au temps simple correspondant + participe passé.</li><li>Astuce nous/il pour -rai/-rais et -ai/-ais.</li></ul>",
  exercises: [
    { q: "Groupe du verbe « grandir » :", choices: ["1ᵉʳ", "2ᵉ", "3ᵉ"], answer: 1, expl: "grandissant." },
    { q: "Groupe du verbe « courir » :", choices: ["1ᵉʳ", "2ᵉ", "3ᵉ"], answer: 2, expl: "courant (pas *courissant)." },
    { q: "Groupe du verbe « aller » :", choices: ["1ᵉʳ", "2ᵉ", "3ᵉ"], answer: 2, expl: "« aller » se termine par -er mais il est <b>irrégulier</b> (je vais, j’irai) : c’est l’exception à connaître, il appartient au <b>3ᵉ groupe</b>." },
    { q: "Conjugue « finir » à la 1ʳᵉ personne du pluriel au présent : nous …", answers: ["finissons", "nous finissons"], expl: "« finir » est du <b>2ᵉ groupe</b> (-ir, avec -issons au pluriel) : nous <b>finissons</b>. Le « -iss- » permet de reconnaître le 2ᵉ groupe." },
    { q: "Conjugue « prendre » au passé simple, 3ᵉ personne du singulier : il …", answers: ["prit", "il prit"], expl: "Au passé simple, « prendre » a des terminaisons en <b>-i</b> : je pris, tu pris, il <b>prit</b>. Le piège : « il prenda » n’existe pas." },
    { q: "Conjugue « voir » au futur, 1ʳᵉ personne du singulier : je …", answers: ["verrai", "je verrai"], accents: true, expl: "« voir » est irrégulier au futur : le radical devient <b>verr-</b> (avec deux r). Ajoute la terminaison -ai : je <b>verrai</b>." },
    { q: "« Si j’avais le temps, je (venir) » → conditionnel présent :", answers: ["viendrais", "je viendrais"], expl: "Après « si + imparfait », on met le <b>conditionnel présent</b> : radical du futur (viendr-) + terminaisons de l’imparfait (-ais). Je <b>viendrais</b>." },
    { q: "Conjugue « faire » au subjonctif présent : il faut que tu …", answers: ["fasses", "tu fasses"], expl: "Après « il faut que », on emploie le <b>subjonctif</b>. « faire » a un radical irrégulier, <b>fass-</b> : que tu <b>fasses</b> (avec -es à la 2ᵉ personne)." },
    { q: "Conjugue « étudier » à l’imparfait, 1ʳᵉ personne du pluriel : nous …", answers: ["étudiions", "nous étudiions"], accents: true, expl: "À l’imparfait, on ajoute <b>-ions</b> au radical « étudi- » : nous étudi + ions = nous <b>étudiions</b>. Les deux i sont obligatoires, même si cela paraît étrange !" },
    { q: "Temps de « nous avions mangé » :", choices: ["passé composé", "plus-que-parfait", "passé antérieur", "futur antérieur"], answer: 1, expl: "« avions » est l’auxiliaire <b>avoir à l’imparfait</b> + le participe passé « mangé » : c’est le <b>plus-que-parfait</b>. Au passé composé, l’auxiliaire serait au présent (nous avons mangé)." },
    { q: "Complète au futur ou au conditionnel : « Demain, je (aller) à la piscine. »", answers: ["irai", "j’irai", "j'irai"], expl: "« Demain » indique un fait à venir et certain : on utilise le <b>futur</b>, j’<b>irai</b>. Astuce : remplace par « nous » → nous irons (futur), et non nous irions (conditionnel)." }
  ],
  evaluation: [
    { q: "Conjugue « appeler » au présent : j’…", answers: ["appelle", "j’appelle", "j'appelle"], expl: "Les verbes en <b>-eler</b> comme « appeler » doublent le l devant un e muet : j’<b>appelle</b> (mais nous appelons)." },
    { q: "Conjugue « acheter » au présent : j’…", answers: ["achète", "j’achète", "j'achète"], accents: true, expl: "« acheter » ne double pas le t : il prend un <b>accent grave</b> devant un e muet : j’<b>achète</b> (mais nous achetons)." },
    { q: "Conjugue « courir » au futur : nous …", answers: ["courrons", "nous courrons"], expl: "« courir » prend <b>deux r</b> au futur (radical courr-) : nous <b>courrons</b>. Avec un seul r, « nous courons », c’est le présent." },
    { q: "Conjugue « venir » au passé simple : ils …", answers: ["vinrent", "ils vinrent"], expl: "« venir » a un passé simple particulier en <b>-in-</b> : je vins, il vint, ils <b>vinrent</b>." },
    { q: "Conjugue « être » au subjonctif présent : que nous …", answers: ["soyons", "nous soyons"], expl: "Le subjonctif de « être » est irrégulier : que je sois, que tu sois, que nous <b>soyons</b>. Attention, pas de i après le y : on n’écrit pas « soyions »." },
    { q: "Conjugue « aller » à l’impératif, 2ᵉ pers. du singulier :", answers: ["va"], expl: "À l’impératif, « aller » (comme les verbes en -er) <b>ne prend pas de s</b> à la 2ᵉ personne du singulier : <b>va</b> ! (sauf devant « y » : vas-y)." },
    { q: "Temps de « il eut fini » :", choices: ["passé simple", "passé antérieur", "plus-que-parfait", "passé composé"], answer: 1, expl: "« eut » est l’auxiliaire <b>avoir au passé simple</b> + le participe passé « fini » : c’est le <b>passé antérieur</b>. Avec l’auxiliaire à l’imparfait (il avait fini), ce serait le plus-que-parfait." },
    { q: "Mode de « que tu saches » :", choices: ["indicatif", "subjonctif", "conditionnel"], answer: 1, expl: "« que tu saches » vient de « savoir » au <b>subjonctif</b> présent. À l’indicatif, on dirait « tu sais ». Le test : « il faut que tu saches »." },
    { q: "Auxiliaire de « se souvenir » au passé composé :", choices: ["avoir", "être"], answer: 1, expl: "Verbe pronominal : je me suis souvenu." },
    { q: "Corrige : « Hier, je mangerais au restaurant et demain je mangeai chez moi. »", type: "open", model: "<p>« Hier, je <b>mangeais</b> (imparfait) ou <b>j’ai mangé</b> (passé composé) au restaurant et demain je <b>mangerai</b> (futur) chez moi. » Astuce : « demain, nous mangerons » → futur, donc -rai.</p>" }
  ]
});

window.FR.chapters.push({
  id: 6,
  title: "Valeurs des temps et des modes",
  short: "Valeurs des temps",
  sub: "Présent, imparfait/passé simple, futur, conditionnel, subjonctif",
  objectifs: [
    "Identifier la <b>valeur</b> d’un temps dans un texte (question systématique au concours).",
    "Expliquer l’alternance <b>imparfait / passé simple</b> dans un récit.",
    "Distinguer les valeurs du conditionnel et du subjonctif."
  ],
  lesson: `
<h2>1. Un temps = une forme ; une valeur = un sens</h2>
<p>Le présent ne sert pas qu’à parler du présent ! « Demain, je <b>pars</b> » parle du futur. Identifier la valeur, c’est dire <b>ce que le temps exprime</b> dans la phrase.</p>

<h2>2. Les valeurs du présent</h2>
<table><tr><th>Valeur</th><th>Exemple</th></tr>
<tr><td>Présent d’<b>énonciation</b> (actuel)</td><td>En ce moment, je <b>lis</b>.</td></tr>
<tr><td>Présent d’<b>habitude</b> (itératif)</td><td>Chaque matin, je <b>bois</b> un café.</td></tr>
<tr><td>Présent de <b>vérité générale</b></td><td>La Terre <b>tourne</b> autour du Soleil.</td></tr>
<tr><td>Présent de <b>narration</b> (historique)</td><td>En 1789, les Parisiens <b>prennent</b> la Bastille.</td></tr>
<tr><td>Passé ou futur <b>proche</b></td><td>Je <b>sors</b> à l’instant. / Je <b>pars</b> demain.</td></tr></table>

<h2>3. Imparfait et passé simple : le duo du récit</h2>
<div class="box def"><span class="box-title">Le principe</span>
<ul><li>Le <b>passé simple</b> exprime des actions <b>de premier plan</b>, ponctuelles, limitées, qui font <b>avancer l’histoire</b> (actions successives).</li>
<li>L’<b>imparfait</b> exprime l’<b>arrière-plan</b> : descriptions, actions en cours (durée non limitée), habitudes, commentaires.</li></ul></div>
<div class="box ex"><span class="box-title">Exemple</span>« Il <b>pleuvait</b> (arrière-plan, description). Les enfants <b>jouaient</b> dans le salon (action en cours). Soudain, la porte <b>s’ouvrit</b> (action ponctuelle de 1ᵉʳ plan) et un homme <b>entra</b> (action successive). »</div>
<p>Autres valeurs de l’imparfait : <b>habitude</b> dans le passé (« Chaque été, nous allions à la mer »), <b>hypothèse</b> après si (« Si j’étais riche… »), <b>politesse</b> (« Je voulais vous demander… »).</p>
<p>Le <b>passé composé</b> remplace le passé simple à l’oral et dans les récits à la 1ʳᵉ personne ; il exprime aussi une action passée dont le résultat est présent (« J’ai fini mes devoirs »).</p>

<h2>4. Futur et conditionnel</h2>
<ul><li><b>Futur</b> : action à venir ; ordre atténué (« Tu feras tes devoirs ») ; futur historique (« Napoléon mourra à Sainte-Hélène »).</li>
<li><b>Conditionnel</b> : <b>hypothèse</b>, irréel (« Si j’avais des ailes, je volerais ») ; <b>politesse</b> (« Pourriez-vous… ? ») ; <b>souhait</b> (« J’aimerais partir ») ; <b>information non confirmée</b> (« Le ministre serait malade ») ; <b>futur dans le passé</b> (« Il a dit qu’il viendrait »).</li></ul>
<div class="box tip"><span class="box-title">Le système hypothétique avec si</span>
<ul><li>Si + présent → futur : Si tu viens, je serai content (possible).</li><li>Si + imparfait → conditionnel présent : Si tu venais, je serais content (potentiel / irréel du présent).</li><li>Si + plus-que-parfait → conditionnel passé : Si tu étais venu, j’aurais été content (irréel du passé).</li></ul>⚠ Jamais de conditionnel après « si » : *si j’aurais.</div>

<h2>5. Le subjonctif</h2>
<p>Il présente l’action comme <b>envisagée</b>, non réalisée : après les verbes de <b>volonté</b> (je veux que), de <b>sentiment</b> (je regrette que), de <b>doute</b> (je doute que), d’<b>obligation</b> (il faut que), et après certaines conjonctions : bien que, pour que, avant que, afin que, sans que. ⚠ « après que » est suivi de l’<b>indicatif</b> (après qu’il est parti).</p>
`,
  videos: [
    { t: "Les valeurs du présent", ch: "Les Bons Profs", q: "les bons profs valeurs du présent" },
    { t: "Imparfait et passé simple dans le récit", ch: "Les Bons Profs", q: "les bons profs imparfait passé simple premier plan arrière-plan" },
    { t: "Les valeurs du conditionnel", ch: "Lumni", q: "valeurs du conditionnel hypothèse politesse" }
  ],
  resume: "<ul><li>Présent : énonciation, habitude, vérité générale, narration.</li><li>Passé simple = premier plan ; imparfait = arrière-plan.</li><li>Si + imparfait → conditionnel. Jamais de conditionnel après si.</li></ul>",
  exercises: [
    { q: "Valeur du présent : « L’eau bout à 100 °C. »", choices: ["énonciation", "habitude", "vérité générale", "narration"], answer: 2, expl: "Ce fait est <b>toujours vrai</b>, hier comme demain : c’est le présent de <b>vérité générale</b> (on le trouve dans les définitions, les proverbes, les lois scientifiques)." },
    { q: "Valeur du présent : « Le mardi, nous allons à la piscine. »", choices: ["énonciation", "habitude", "vérité générale", "narration"], answer: 1, expl: "« Le mardi » signifie « chaque mardi » : l’action se <b>répète régulièrement</b>. C’est le présent d’<b>habitude</b>." },
    { q: "Valeur du présent : « En 1492, Christophe Colomb atteint l’Amérique. »", choices: ["énonciation", "habitude", "vérité générale", "narration"], answer: 3, expl: "L’action se passe en <b>1492</b>, dans le passé, mais elle est racontée au présent pour la rendre plus vivante : c’est le présent de <b>narration</b> (ou présent historique)." },
    { q: "Valeur de l’imparfait : « Le ciel était gris et le vent soufflait. »", choices: ["description (arrière-plan)", "action ponctuelle", "hypothèse"], answer: 0, expl: "L’imparfait sert ici à <b>décrire le décor</b> (le ciel, le vent) : c’est l’imparfait de <b>description</b>, qui forme l’arrière-plan du récit." },
    { q: "Valeur du conditionnel : « Pourriez-vous m’aider ? »", choices: ["hypothèse", "politesse", "futur dans le passé"], answer: 1, expl: "« Pourriez-vous » au lieu de « Pouvez-vous » rend la demande plus douce : c’est le conditionnel de <b>politesse</b>." },
    { q: "Valeur du conditionnel : « Elle a promis qu’elle viendrait. »", choices: ["hypothèse", "politesse", "futur dans le passé"], answer: 2, expl: "« viendrait » exprime une action <b>future par rapport à un moment passé</b> (« a promis ») : c’est le <b>futur dans le passé</b>. Au présent, on dirait : elle promet qu’elle viendra." },
    { q: "Complète : « Si j’(avoir) le temps, je lirais davantage. »", answers: ["avais", "j’avais", "j'avais"], expl: "Après « si » (hypothèse), on n’emploie <b>jamais le conditionnel</b> : on met l’<b>imparfait</b>, si j’<b>avais</b>. Le conditionnel (lirais) va dans la principale." },
    { q: "Explique l’emploi des temps : « Nous marchions depuis une heure quand l’orage éclata. »", type: "open", model: "<p>« marchions » (imparfait) exprime une action <b>en cours</b>, de durée non délimitée, qui sert d’arrière-plan. « éclata » (passé simple) exprime une action <b>ponctuelle</b>, de premier plan, qui vient interrompre la première et fait avancer le récit.</p>" }
  ],
  evaluation: [
    { q: "Valeur du présent : « Je te parle, écoute-moi ! »", choices: ["énonciation", "habitude", "vérité générale"], answer: 0, expl: "« parle » décrit une action qui se déroule <b>au moment même où l’on parle</b> : c’est le présent d’<b>énonciation</b> (ou d’actualité)." },
    { q: "Valeur de l’imparfait : « Chaque dimanche, il rendait visite à sa mère. »", choices: ["description", "habitude", "politesse"], answer: 1, expl: "« Chaque dimanche » montre une action qui <b>se répète</b> dans le passé : c’est l’imparfait d’<b>habitude</b>." },
    { q: "Valeur du conditionnel : « Selon la presse, l’accident aurait fait trois blessés. »", choices: ["politesse", "information non confirmée", "souhait"], answer: 1, expl: "« Selon la presse… aurait fait » : le journaliste rapporte une information <b>sans la garantir</b>. C’est le conditionnel de l’<b>information non confirmée</b> (ou incertaine)." },
    { q: "Quel temps exprime les actions de premier plan dans un récit au passé ?", choices: ["imparfait", "passé simple", "plus-que-parfait"], answer: 1, expl: "Le <b>passé simple</b> exprime les actions ponctuelles qui <b>font avancer le récit</b> (premier plan). L’imparfait, lui, sert à l’arrière-plan (descriptions, habitudes)." },
    { q: "Complète : « Si tu étais venu, tu (voir) le spectacle. »", answers: ["aurais vu", "tu aurais vu"], expl: "Avec « si + plus-que-parfait » (si tu étais venu), on met le <b>conditionnel passé</b> : auxiliaire au conditionnel + participe passé, tu <b>aurais vu</b>." },
    { q: "Corrige : « Si j’aurais su, je serais venu. »", answers: ["si j’avais su, je serais venu", "si j'avais su, je serais venu"], numeric: false, expl: "Règle d’or : « <b>les si n’aiment pas les -rais</b> ». Après « si », pas de conditionnel : on met le plus-que-parfait, si j’<b>avais su</b>. La principale, elle, reste au conditionnel passé (je serais venu)." },
    { q: "Après « bien que », on emploie :", choices: ["l’indicatif", "le subjonctif", "le conditionnel"], answer: 1, expl: "« bien que » (concession) est toujours suivi du <b>subjonctif</b> : bien qu’il <i>soit</i> fatigué, il travaille." },
    { q: "Après « après que », on emploie :", choices: ["l’indicatif", "le subjonctif"], answer: 0, expl: "« après que » introduit un fait <b>réellement accompli</b>, donc il se construit avec l’<b>indicatif</b> : après qu’il <i>est</i> parti. C’est un piège fréquent, par confusion avec « avant que » (+ subjonctif)." },
    { q: "Valeur du futur : « Tu rangeras ta chambre avant de sortir. »", choices: ["futur simple de projet", "ordre atténué", "futur historique"], answer: 1, expl: "Le futur est employé ici à la place de l’impératif pour <b>donner un ordre</b> de façon moins brutale : c’est le futur à valeur d’<b>ordre atténué</b> (futur injonctif)." }
  ]
});
