/* ANGLAIS, ARTS et FRANÇAIS — niveau cycle 4 / B2, pour l'écrit 2 (domaine au choix) et l'écrit 1 */

window.EN.intro = "<p>L’anglais peut être ton <b>domaine de l’écrit 2</b> (langue vivante, programme du <b>cycle 4</b>, niveau de maîtrise attendu élevé, autour de <b>B2</b>) et sert aussi à l’oral facultatif et en classe. Les chapitres 🎓 travaillent la langue au niveau du concours : grammaire avancée, compréhension et traduction, culture des pays anglophones, expression écrite.</p><p>Les leçons sont expliquées en français, avec les exemples en anglais.</p>";

window.EN.chapters.push({
  id: "enc4-grammar", pos: 10,
  title: "🎓 Grammaire avancée (niveau B2)",
  short: "Grammaire B2",
  sub: "Passif, conditionnels, discours indirect, modaux de déduction, relatives, -ing / to",
  objectifs: ["Maîtriser les structures attendues au niveau B2.", "Éviter les calques du français.", "Savoir justifier un choix grammatical."],
  lesson: `
<h2>1. Le passif</h2>
<p><b>be (au temps voulu) + participe passé</b> : « The school <b>was built</b> in 1900. » « The results <b>will be published</b> tomorrow. » « English <b>is spoken</b> here. » Complément d’agent avec <b>by</b>. Tournure très fréquente : « He <b>is said to be</b> rich » (on dit qu’il est riche).</p>

<h2>2. Les conditionnels</h2>
<table><tr><th>Type</th><th>Structure</th><th>Exemple</th></tr>
<tr><td>0 : vérité générale</td><td>if + présent, présent</td><td>If you heat ice, it melts.</td></tr>
<tr><td>1 : possible</td><td>if + présent, will + base</td><td>If it rains, we will stay inside.</td></tr>
<tr><td>2 : hypothèse / irréel du présent</td><td>if + prétérit, would + base</td><td>If I were a teacher, I would read every day to my pupils.</td></tr>
<tr><td>3 : irréel du passé</td><td>if + past perfect, would have + participe</td><td>If I had known, I would have come.</td></tr></table>
<p>⚠ Jamais de <i>will</i> ou <i>would</i> après <i>if</i> dans ces structures. <b>I wish</b> + prétérit (regret présent) / + past perfect (regret passé) : « I wish I had more time. »</p>

<h2>3. Le discours indirect</h2>
<p>Recul des temps : « I am tired » → She said (that) she <b>was</b> tired ; « I will come » → he said he <b>would</b> come ; « I saw him » → she said she <b>had seen</b> him. Changements : now → then, tomorrow → the next day, here → there. Questions : « Where do you live? » → He asked me <b>where I lived</b> (pas d’inversion). Ordres : He told me <b>to sit down</b>.</p>

<h2>4. Modaux de probabilité et de déduction</h2>
<p><b>must</b> (quasi-certitude : She must be at home, the lights are on), <b>can’t</b> (impossibilité : He can’t be serious), <b>may / might / could</b> (possibilité). Au passé : <b>must have + participe</b> (He must have forgotten), <b>should have</b> (reproche : You should have told me).</p>

<h2>5. Relatives, gérondif et infinitif</h2>
<ul><li>Relatives : <b>who</b> (personnes), <b>which</b> (choses), <b>that</b> (les deux, relatives déterminatives), <b>whose</b> (dont, possession), <b>where</b>, <b>when</b>. « The pupils <b>whose</b> parents came… »</li>
<li>Verbes + <b>-ing</b> : enjoy, avoid, mind, finish, suggest, can’t help, look forward to (« I look forward to <b>hearing</b> from you »). Verbes + <b>to</b> : want, decide, hope, expect, manage, refuse. Changement de sens : stop doing (arrêter de faire) / stop to do (s’arrêter pour faire) ; remember doing / remember to do.</li>
<li><b>used to</b> + base : habitude passée révolue (« I used to live in Lyon »). <b>be used to</b> + -ing : être habitué à.</li></ul>
`,
  videos: [{ t: "Conditionals 0, 1, 2, 3", ch: "BBC Learning English", q: "BBC Learning English conditionals zero first second third" }, { t: "Reported speech", ch: "BBC Learning English", q: "BBC Learning English reported speech" }, { t: "Modals of deduction", ch: "BBC Learning English", q: "modals of deduction must might can't explained" }],
  resume: "<ul><li>Passif : be + participe passé.</li><li>If + prétérit → would ; if + past perfect → would have + participe.</li><li>Discours indirect : recul des temps, pas d’inversion.</li><li>must (déduction) / can’t (impossibilité).</li></ul>",
  exercises: [
    { q: "Mets au passif : « They built this school in 1950. »", answers: ["this school was built in 1950"], numeric: false, expl: "Passif = <b>be</b> (au même temps que le verbe actif) + <b>participe passé</b>. « built » est au past simple → <b>was built</b> : This school was built in 1950." },
    { q: "If I ___ (have) more time, I would learn Spanish.", answers: ["had"], expl: "C’est le <b>2ᵉ conditionnel</b> (situation imaginaire) : If + <b>past simple</b>, would + base verbale. Donc If I <b>had</b>… ⚠ Jamais de « would » après if." },
    { q: "If she had studied, she ___ (pass) the exam.", answers: ["would have passed"], expl: "<b>3ᵉ conditionnel</b> (regret sur le passé) : If + past perfect (had studied), <b>would have + participe passé</b> → she <b>would have passed</b>." },
    { q: "Discours indirect : He said, « I am happy. » → He said that he ___ happy.", answers: ["was"], expl: "Au discours indirect après un verbe au passé (said), on recule d’un temps : present → past. « am » devient <b>was</b>." },
    { q: "Choisis : « The lights are off. They ___ be at home. »", choices: ["must", "can’t", "should"], answer: 1, expl: "Les lumières sont éteintes, donc on en déduit qu’ils ne sont <b>sûrement pas</b> là → <b>can’t</b> (déduction négative). « must » exprimerait une quasi-certitude positive." },
    { q: "Choisis : « I look forward to ___ you. »", choices: ["see", "seeing", "to see"], answer: 1, expl: "Dans « look forward to », <b>to</b> est une préposition, pas la marque de l’infinitif : il est donc suivi de <b>-ing</b> → I look forward to <b>seeing</b> you." },
    { q: "Choisis : « This is the girl ___ mother is a teacher. »", choices: ["who", "which", "whose"], answer: 2, expl: "<b>whose</b> = dont le / dont la : il exprime la possession (la mère de la fille). « who » et « which » ne marquent pas la possession." }
  ],
  evaluation: [
    { q: "Mets au passif : « Someone will clean the classroom. »", answers: ["the classroom will be cleaned"], numeric: false, expl: "Passif au futur : <b>will be + participe passé</b>. Le complément devient sujet : The classroom <b>will be cleaned</b> (on peut omettre « by someone »)." },
    { q: "If it ___ (rain) tomorrow, we will stay at home.", answers: ["rains"], expl: "<b>1ᵉʳ conditionnel</b> (situation possible) : If + <b>present simple</b>, will + base verbale → If it <b>rains</b>. ⚠ Pas de « will » après if." },
    { q: "Discours indirect : « Where do you live? » → She asked me where I ___.", answers: ["lived"], expl: "Question indirecte : plus d’auxiliaire do, ordre <b>sujet + verbe</b>, et recul du temps (present → past) : where I <b>lived</b>." },
    { q: "Choisis : « He ___ have forgotten : he never misses a meeting. »", choices: ["must", "can’t", "should"], answer: 1, expl: "Il ne rate jamais une réunion, donc il est <b>impossible</b> qu’il ait oublié → <b>can’t have</b> + participe passé (déduction négative sur le passé)." },
    { q: "Choisis : « I used to ___ in London. »", choices: ["live", "living", "lived"], answer: 0, expl: "<b>used to + base verbale</b> exprime une habitude passée révolue : I used to <b>live</b> in London (j’habitais à Londres autrefois)." },
    { q: "Choisis : « They decided ___ the trip. »", choices: ["cancelling", "to cancel", "cancel"], answer: 1, expl: "Le verbe <b>decide</b> est suivi de <b>to + base verbale</b> : They decided <b>to cancel</b> the trip." }
  ]
});

window.EN.chapters.push({
  id: "enc4-comprehension", pos: 10.1,
  title: "🎓 Compréhension et traduction",
  short: "Compréhension",
  sub: "Méthode de lecture, inférence, version, thème, faux amis",
  objectifs: ["Comprendre un texte authentique et répondre en anglais avec des citations.", "Traduire (version et thème) sans calque.", "Enrichir son lexique."],
  lesson: `
<h2>1. Méthode de compréhension</h2>
<ol><li>Repère le <b>paratexte</b> : titre, source, date, auteur, type de texte (article, extrait de roman, discours).</li>
<li>Première lecture globale : <b>who, what, where, when, why</b>.</li>
<li>Lis les questions, puis relis en surlignant les passages utiles.</li>
<li>Réponds par des phrases complètes, <b>en reformulant</b>, et justifie avec une courte citation entre guillemets (avec la ligne).</li>
<li>Questions d’<b>inférence</b> : « What can you infer about…? » : déduis ce qui n’est pas dit explicitement (sentiments, intentions, ton : ironic, critical, nostalgic).</li></ol>

<h2>2. Traduire</h2>
<ul><li><b>Version</b> (anglais → français) : comprends tout le sens avant d’écrire, puis écris un français naturel. « He used to walk to school » → « Il allait à l’école à pied » (pas « il avait l’habitude de marcher »).</li>
<li><b>Thème</b> (français → anglais) : attention aux temps (passé composé → prétérit si moment terminé, present perfect sinon ; « depuis » → for/since + present perfect), à l’ordre des mots (adjectif avant le nom), aux articles (pas d’article pour les généralités : « Children love games »).</li>
<li>Pièges : verbes à particule (give up = abandonner, look after = s’occuper de, carry on = continuer), génitif (the pupils’ books), « on » (people / you / passif).</li></ul>

<h2>3. Mots de liaison utiles</h2>
<p>however (cependant), although / even though (bien que), whereas (alors que), therefore (donc), moreover / furthermore (de plus), as a result (en conséquence), on the contrary, in spite of / despite + nom (malgré), unless (à moins que).</p>
`,
  videos: [{ t: "Phrasal verbs essentiels", ch: "BBC Learning English", q: "BBC Learning English common phrasal verbs" }, { t: "Linking words", ch: "Learn English", q: "linking words however although whereas therefore" }],
  resume: "<ul><li>Paratexte, 5 W, citations avec lignes.</li><li>Version : sens d’abord, français naturel.</li><li>Thème : temps, ordre des mots, articles.</li></ul>",
  exercises: [
    { q: "« Give up » signifie :", choices: ["donner", "abandonner", "monter"], answer: 1, expl: "<b>give up</b> = <b>abandonner</b>, renoncer (I gave up smoking). La particule change complètement le sens de « give »." },
    { q: "« Look after » signifie :", choices: ["chercher", "s’occuper de", "regarder derrière"], answer: 1, expl: "<b>look after</b> = <b>s’occuper de</b>, prendre soin de (She looks after her little brother). « Chercher » se dit look for." },
    { q: "Traduis : « Les enfants aiment les jeux. »", answers: ["children love games", "children like games"], numeric: false, expl: "Pour une <b>généralité</b>, l’anglais ne met <b>pas d’article</b> : <b>Children love games</b> (et non *The children love the games)." },
    { q: "« Although » signifie :", choices: ["bien que", "donc", "de plus"], answer: 0, expl: "<b>although</b> = <b>bien que</b>, quoique : il introduit une concession, suivi d’un sujet + verbe (Although it was raining, we went out)." },
    { q: "Traduis : « J’enseigne ici depuis 2020. »", answers: ["I have taught here since 2020", "I have been teaching here since 2020", "I’ve taught here since 2020", "I've taught here since 2020", "I’ve been teaching here since 2020", "I've been teaching here since 2020"], numeric: false, expl: "« depuis » + point de départ (une date) → <b>present perfect + since</b> : I <b>have taught</b> here <b>since</b> 2020. ⚠ Pas de présent comme en français." }
  ],
  evaluation: [
    { q: "« Carry on » signifie :", choices: ["porter", "continuer", "arrêter"], answer: 1, expl: "<b>carry on</b> = <b>continuer</b> (Carry on reading!). « carry » seul veut dire porter, mais la particule « on » change le sens." },
    { q: "« Whereas » signifie :", choices: ["alors que (opposition)", "où", "pourquoi"], answer: 0, expl: "<b>whereas</b> = <b>alors que</b>, tandis que : il oppose deux idées (Tom likes maths, whereas his sister prefers art)." },
    { q: "« Despite » est suivi :", choices: ["d’un nom ou d’un -ing", "d’une proposition avec sujet et verbe"], answer: 0, expl: "<b>despite</b> (= malgré) est une préposition : il est suivi d’un <b>nom</b> ou d’un <b>-ing</b> (despite the rain / despite being tired). Avec sujet + verbe, on utilise although." },
    { q: "Traduis : « les livres des élèves » (plusieurs élèves)", answers: ["the pupils’ books", "the pupils' books", "the students’ books", "the students' books"], numeric: false, expl: "Génitif d’un nom pluriel en -s : on ajoute seulement l’<b>apostrophe après le s</b> → the <b>pupils’</b> books. Avec un seul élève, ce serait the pupil’s books." },
    { q: "Une question d’inférence demande :", choices: ["de recopier une phrase", "de déduire ce qui n’est pas dit explicitement", "de traduire un mot"], answer: 1, expl: "Inférer, c’est <b>déduire ce qui n’est pas écrit</b> explicitement, à partir d’indices du texte et de ses connaissances." }
  ]
});

window.EN.chapters.push({
  id: "enc4-culture", pos: 10.2,
  title: "🎓 Culture des pays anglophones",
  short: "Culture",
  sub: "Royaume-Uni, États-Unis, Commonwealth, fêtes, repères historiques",
  objectifs: ["Connaître les institutions du Royaume-Uni et des États-Unis.", "Situer les grands pays anglophones et le Commonwealth.", "Connaître des repères historiques et culturels utilisables en classe."],
  lesson: `
<h2>1. Le Royaume-Uni</h2>
<ul><li><b>United Kingdom</b> = Angleterre, Écosse, pays de Galles, Irlande du Nord (la Grande-Bretagne n’inclut pas l’Irlande du Nord). Capitale : Londres.</li>
<li>Monarchie constitutionnelle : le souverain (le roi Charles III depuis 2022) règne mais ne gouverne pas ; le <b>Prime Minister</b> dirige le gouvernement ; Parlement = House of Commons (élue) + House of Lords.</li>
<li>Repères : Magna Carta (1215), révolution industrielle, empire britannique, Brexit (sortie de l’UE effective en 2020).</li></ul>

<h2>2. Les États-Unis</h2>
<ul><li>République fédérale de 50 États ; capitale Washington, D.C. ; le <b>President</b> est élu pour 4 ans ; le <b>Congress</b> = Senate + House of Representatives ; la <b>Supreme Court</b>.</li>
<li>Repères : Declaration of Independence (1776), guerre de Sécession (1861-1865) et abolition de l’esclavage (13ᵉ amendement, 1865), mouvement des droits civiques (Martin Luther King, « I have a dream », 1963).</li></ul>

<h2>3. Le monde anglophone</h2>
<p>L’anglais est langue officielle ou majeure au Canada (avec le français), en Australie, en Nouvelle-Zélande, en Irlande, en Inde, en Afrique du Sud, au Nigeria… Le <b>Commonwealth</b> réunit une cinquantaine d’États, pour la plupart d’anciennes colonies britanniques.</p>

<h2>4. Fêtes et traditions (utiles en classe)</h2>
<p>Halloween (31 octobre), Guy Fawkes Night / Bonfire Night (5 novembre, UK), Thanksgiving (4ᵉ jeudi de novembre, US), Christmas et Boxing Day (26 décembre), Saint Patrick’s Day (17 mars, Irlande), Independence Day (4 juillet, US). Littérature jeunesse : Roald Dahl, Lewis Carroll (<i>Alice’s Adventures in Wonderland</i>), J. K. Rowling, Eric Carle.</p>
`,
  videos: [{ t: "The UK explained", ch: "Learn English", q: "difference between UK Great Britain England explained" }, { t: "How the US government works", ch: "Learn English", q: "how the US government works explained simply" }, { t: "British and American festivals", ch: "British Council", q: "British Council festivals UK Bonfire Night Thanksgiving" }],
  resume: "<ul><li>UK = Angleterre, Écosse, pays de Galles, Irlande du Nord.</li><li>UK : monarchie constitutionnelle ; US : république fédérale, président élu pour 4 ans.</li><li>1215 Magna Carta ; 1776 ; 1865 ; 1963.</li></ul>",
  exercises: [
    { q: "Lequel ne fait pas partie de la Grande-Bretagne ?", choices: ["l’Écosse", "le pays de Galles", "l’Irlande du Nord"], answer: 2, expl: "La <b>Grande-Bretagne</b> = l’île qui regroupe l’Angleterre, l’Écosse et le pays de Galles. Le <b>Royaume-Uni</b> y ajoute l’<b>Irlande du Nord</b>." },
    { q: "Durée du mandat du président des États-Unis :", answers: ["4", "4 ans", "quatre ans"], expl: "Le président américain est élu pour <b>4 ans</b>, et il ne peut faire que deux mandats." },
    { q: "Bonfire Night est célébrée le :", choices: ["31 octobre", "5 novembre", "17 mars"], answer: 1, expl: "Bonfire Night (ou Guy Fawkes Night), le <b>5 novembre</b>, rappelle l’échec du complot des poudres contre le Parlement en 1605 : feux de joie et feux d’artifice. Le 31 octobre est Halloween, le 17 mars la Saint-Patrick." },
    { q: "Discours « I have a dream » :", answers: ["1963"], expl: "Martin Luther King prononce « I have a dream » le 28 août <b>1963</b>, lors de la marche sur Washington pour les droits civiques." },
    { q: "Le Parlement britannique comprend la House of Commons et :", answers: ["the House of Lords", "House of Lords", "la Chambre des lords"], expl: "Le Parlement britannique a deux chambres : la <b>House of Commons</b> (députés élus) et la <b>House of Lords</b> (membres nommés ou héréditaires)." }
  ],
  evaluation: [
    { q: "Nombre d’États aux États-Unis :", answers: ["50"], expl: "Les États-Unis comptent <b>50 États</b> (les 50 étoiles du drapeau) ; les 13 bandes rappellent les 13 colonies d’origine." },
    { q: "La Magna Carta date de :", answers: ["1215"], expl: "La Magna Carta (Grande Charte) est signée par le roi Jean sans Terre en <b>1215</b> : elle limite pour la première fois le pouvoir du roi." },
    { q: "Thanksgiving a lieu le :", choices: ["4ᵉ jeudi de novembre", "4 juillet", "26 décembre"], answer: 0, expl: "Aux États-Unis, Thanksgiving est fêté le <b>4ᵉ jeudi de novembre</b>. Le 4 juillet est l’Independence Day, le 26 décembre le Boxing Day britannique." },
    { q: "Le Brexit est effectif en :", answers: ["2020"], expl: "Le Royaume-Uni quitte officiellement l’Union européenne le 31 janvier <b>2020</b>, après le référendum de 2016." },
    { q: "Auteur de « Charlie and the Chocolate Factory » :", answers: ["Roald Dahl", "Dahl"], expl: "<b>Roald Dahl</b> (1916-1990) a écrit Charlie and the Chocolate Factory (1964), mais aussi Matilda et The BFG, très lus à l’école." }
  ]
});

window.EN.chapters.push({
  id: "enc4-writing", pos: 10.3,
  title: "🎓 Expression écrite en anglais (essay)",
  short: "Writing",
  sub: "Structure, connecteurs, expressions, relecture",
  objectifs: ["Rédiger un essai ou un texte argumentatif structuré en anglais.", "Utiliser des expressions et connecteurs variés.", "Se relire avec une grille d’erreurs fréquentes."],
  lesson: `
<h2>1. La structure</h2>
<ul><li><b>Introduction</b> : amorce (hook), reformulation du sujet, annonce du plan.</li>
<li><b>Body</b> : 2 ou 3 paragraphes, chacun avec une <b>topic sentence</b>, une explication et un exemple.</li>
<li><b>Conclusion</b> : bilan et ouverture.</li></ul>

<h2>2. Expressions utiles</h2>
<p>To begin with… / First of all… ; It is often said that… ; On the one hand… on the other hand… ; For instance… ; This shows that… ; It could be argued that… ; As far as I am concerned… ; All things considered… ; To conclude…</p>

<h2>3. La grille de relecture</h2>
<ul><li>-s à la 3ᵉ personne du présent (she teaches).</li><li>Adjectifs invariables et placés avant le nom (interesting books).</li><li>Pas d’article pour les généralités ; « the » pour le défini.</li><li>Temps : prétérit avec une date passée ; present perfect avec for/since.</li><li>Ponctuation : pas d’espace avant « ? » et « ! » en anglais.</li><li>Faux amis : actually, eventually, sensible, library.</li></ul>
`,
  videos: [{ t: "How to write an essay", ch: "BBC Learning English", q: "how to write an essay in English structure" }, { t: "Common mistakes in English", ch: "BBC Learning English", q: "common mistakes French speakers English" }],
  resume: "<ul><li>Intro (hook + plan), body (topic sentences + exemples), conclusion.</li><li>Connecteurs variés.</li><li>Relecture : -s, adjectifs, articles, temps.</li></ul>",
  exercises: [
    { q: "Corrige : « She teach english to the childrens. »", answers: ["she teaches english to the children", "she teaches english to children"], numeric: false, expl: "Deux erreurs : 3ᵉ personne du present simple → <b>teaches</b> ; « child » a un pluriel irrégulier → <b>children</b> (déjà pluriel, jamais *childrens). Et English prend une majuscule." },
    { q: "Corrige : « They are interestings books. »", answers: ["they are interesting books"], numeric: false, expl: "En anglais, l’<b>adjectif est invariable</b> : il ne prend jamais de -s au pluriel → interesting books." },
    { q: "La phrase qui annonce l’idée d’un paragraphe s’appelle :", answers: ["topic sentence", "the topic sentence"], expl: "La <b>topic sentence</b> ouvre le paragraphe et annonce son idée principale ; les phrases suivantes la développent avec des exemples." },
    { q: "Rédige un paragraphe (8-10 lignes) en anglais : « Should children learn a foreign language at primary school? »", type: "open", model: "<p>« Learning a foreign language at primary school is, in my opinion, highly beneficial. First of all, young children have a great ability to imitate sounds, which helps them acquire a good accent. Moreover, discovering another language opens them to other cultures: for instance, celebrating Thanksgiving or reading a picture book in English makes the world more familiar. However, lessons must be short, regular and playful to keep pupils motivated. To conclude, an early start, if well organised, gives every child a precious advantage. » Vérifie : topic sentence, connecteurs, exemple, conclusion, langue correcte.</p>" }
  ],
  evaluation: [
    { q: "Connecteur pour introduire un exemple :", choices: ["for instance", "however", "therefore"], answer: 0, expl: "<b>for instance</b> (= par exemple, comme for example). « however » oppose, « therefore » marque la conséquence." },
    { q: "Connecteur pour conclure :", choices: ["to begin with", "all things considered", "moreover"], answer: 1, expl: "<b>all things considered</b> = tout bien considéré, pour conclure. « to begin with » ouvre, « moreover » ajoute une idée." },
    { q: "Corrige : « I have seen him yesterday. »", answers: ["i saw him yesterday"], numeric: false, expl: "« yesterday » est un moment passé <b>daté et terminé</b> → <b>past simple</b>, jamais le present perfect : I <b>saw</b> him yesterday. ⚠ Piège du « j’ai vu » français." },
    { q: "En anglais, devant « ? » on met :", choices: ["un espace", "aucun espace"], answer: 1, expl: "En anglais, <b>pas d’espace</b> avant ? ! : ; (contrairement au français) : Where do you live?" }
  ]
});

window.ARTS.intro = "<p>Les arts peuvent être ton <b>domaine de l’écrit 2</b> : programme du <b>cycle 4</b> en arts plastiques, éducation musicale et histoire des arts. Les chapitres 🎓 traitent ce niveau ; les autres chapitres présentent les bases et l’EPS.</p>";

window.ARTS.chapters.push({
  id: "ac4-plastiques", pos: 10,
  title: "🎓 Arts plastiques au collège : questionnements et art contemporain",
  short: "Arts plastiques C4",
  sub: "Représentation, matérialité, œuvre et spectateur, art moderne et contemporain",
  objectifs: ["Connaître les trois grands questionnements des arts plastiques au cycle 4.", "Maîtriser le vocabulaire de l’art moderne et contemporain.", "Analyser une œuvre contemporaine."],
  lesson: `
<h2>1. Les trois questionnements du cycle 4</h2>
<ol><li><b>La représentation</b> : images, réalité et fiction (ressemblance, écart, détournement, image fixe et animée, narration).</li>
<li><b>La matérialité de l’œuvre</b> : l’objet et l’œuvre (les matériaux, leurs qualités, le geste, l’objet transformé en œuvre).</li>
<li><b>L’œuvre, l’espace, l’auteur, le spectateur</b> : la présentation de l’œuvre (in situ, exposition, installation), la place du spectateur, la relation au corps.</li></ol>

<h2>2. Notions et pratiques à connaître</h2>
<table><tr><th>Notion</th><th>Exemple</th></tr>
<tr><td><b>Ready-made</b> : objet manufacturé choisi et exposé comme œuvre</td><td>Marcel Duchamp, <i>Fontaine</i> (1917)</td></tr>
<tr><td><b>Collage, papiers collés</b></td><td>Picasso, Braque (cubisme) ; Matisse, papiers découpés</td></tr>
<tr><td><b>Photomontage</b></td><td>Raoul Hausmann, John Heartfield</td></tr>
<tr><td><b>Abstraction</b></td><td>Kandinsky, Mondrian, Soulages (outrenoir)</td></tr>
<tr><td><b>Installation</b> (œuvre qui occupe un espace)</td><td>Christian Boltanski ; Yayoi Kusama</td></tr>
<tr><td><b>Land art</b></td><td>Robert Smithson, <i>Spiral Jetty</i> (1970) ; Andy Goldsworthy</td></tr>
<tr><td><b>Performance</b> (l’action de l’artiste est l’œuvre)</td><td>Yves Klein, <i>Anthropométries</i></td></tr>
<tr><td><b>Pop art</b></td><td>Andy Warhol, <i>Marilyn</i> ; Roy Lichtenstein</td></tr>
<tr><td><b>Art in situ, emballages</b></td><td>Christo et Jeanne-Claude, <i>Pont-Neuf empaqueté</i> (1985) ; Daniel Buren, <i>Les Deux Plateaux</i> (1986)</td></tr></table>

<h2>3. Analyser une œuvre contemporaine</h2>
<p>Ajoute aux étapes habituelles (identifier, décrire, interpréter) : le <b>dispositif de présentation</b> (où, comment l’œuvre est montrée ?), le <b>rôle du spectateur</b> (doit-il se déplacer, participer ?), la <b>démarche</b> de l’artiste (intention, processus plus important que le résultat ?), et la question « <b>qu’est-ce qui fait œuvre ?</b> ».</p>
`,
  videos: [{ t: "Fontaine de Duchamp : le ready-made", ch: "Arte / Lumni", q: "Duchamp Fontaine ready-made expliqué" }, { t: "Christo et Jeanne-Claude", ch: "Lumni", q: "Christo Jeanne-Claude Pont-Neuf empaqueté" }, { t: "Soulages et l’outrenoir", ch: "Lumni", q: "Pierre Soulages outrenoir expliqué" }],
  resume: "<ul><li>3 questionnements : représentation, matérialité, œuvre/espace/spectateur.</li><li>Ready-made (Duchamp 1917), installation, land art, performance, pop art.</li><li>Œuvre contemporaine : dispositif, spectateur, démarche.</li></ul>",
  exercises: [
    { q: "« Fontaine » (1917) de Duchamp est :", choices: ["un ready-made", "une peinture abstraite", "un photomontage"], answer: 0, expl: "<b>Fontaine</b> est un urinoir industriel signé « R. Mutt » : c’est un <b>ready-made</b>, un objet manufacturé choisi et exposé comme œuvre. Duchamp montre que c’est le choix de l’artiste qui fait l’œuvre." },
    { q: "Artiste du pop art célèbre pour ses portraits de Marilyn :", answers: ["Warhol", "Andy Warhol"], expl: "<b>Andy Warhol</b> a réalisé les <b>Marilyn</b> (1962) en sérigraphie, répétées en couleurs vives : le pop art reprend les images de la culture de masse." },
    { q: "Une œuvre conçue pour un lieu précis est dite :", answers: ["in situ"], expl: "Une œuvre <b>in situ</b> (« sur place », en latin) est pensée pour un lieu précis et prend son sens dans ce lieu, comme les colonnes de Buren au Palais-Royal." },
    { q: "« Spiral Jetty » relève du :", choices: ["land art", "cubisme", "pop art"], answer: 0, expl: "<b>Spiral Jetty</b> (Robert Smithson, 1970) est une spirale de roches dans le Grand Lac Salé : c’est du <b>land art</b>, l’art créé dans et avec la nature." },
    { q: "Propose une séance d’arts plastiques (cycle 3) autour du ready-made.", type: "open", model: "<p><b>Incitation</b> : « Transforme un objet du quotidien en œuvre d’art. » Les élèves choisissent un objet apporté, le détournent (changement de position, de fonction, de titre, assemblage), puis le présentent sur un socle avec un cartel. <b>Verbalisation</b> : qu’est-ce qui a changé ? Est-ce encore un objet ? <b>Rencontre</b> avec la <i>Fontaine</i> de Duchamp et la <i>Tête de taureau</i> de Picasso (selle et guidon de vélo). Compétences : expérimenter, s’exprimer, analyser sa pratique.</p>" }
  ],
  evaluation: [
    { q: "Artiste des « Anthropométries » :", answers: ["Yves Klein", "Klein"], expl: "<b>Yves Klein</b> fait ses <b>Anthropométries</b> (1960) avec des modèles couverts de son bleu (IKB) qui impriment leur corps sur la toile : des « pinceaux vivants »." },
    { q: "Le Pont-Neuf a été empaqueté par :", answers: ["Christo et Jeanne-Claude", "Christo"], expl: "<b>Christo et Jeanne-Claude</b> ont empaqueté le Pont-Neuf de toile en 1985 : un emballage éphémère qui fait regarder autrement un monument familier." },
    { q: "Une œuvre qui occupe et transforme un espace est une :", answers: ["installation", "une installation"], expl: "Une <b>installation</b> est une œuvre qui occupe un espace en trois dimensions et que le spectateur peut souvent parcourir." },
    { q: "Les colonnes de Buren s’appellent :", choices: ["Les Deux Plateaux", "Les Nymphéas", "La Fontaine"], answer: 0, expl: "Les colonnes rayées de Daniel Buren au Palais-Royal (1986) s’appellent <b>Les Deux Plateaux</b>. Les Nymphéas sont de Monet, la Fontaine de Duchamp." },
    { q: "Artiste de l’« outrenoir » :", answers: ["Soulages", "Pierre Soulages"], expl: "<b>Pierre Soulages</b> invente l’<b>outrenoir</b> en 1979 : des toiles entièrement noires où c’est la lumière reflétée par les reliefs de la matière qui crée l’image." }
  ]
});

window.ARTS.chapters.push({
  id: "ac4-musique", pos: 10.1,
  title: "🎓 Éducation musicale au collège : langage et histoire de la musique",
  short: "Musique C4",
  sub: "Formes, genres, époques, vocabulaire d’analyse",
  objectifs: ["Analyser une œuvre musicale avec le vocabulaire précis.", "Situer les grandes périodes et les genres musicaux.", "Proposer une écoute active."],
  lesson: `
<h2>1. Le vocabulaire d’analyse</h2>
<ul><li><b>Timbre</b> (instruments, voix : soprano, alto, ténor, basse), <b>dynamique</b> (pianissimo → fortissimo, crescendo), <b>tempo</b> (lento, andante, allegro), <b>rythme</b> (pulsation, mesure binaire / ternaire, ostinato), <b>mélodie</b> (conjointe, disjointe), <b>harmonie</b> (accords ; mode majeur souvent associé à la joie, mineur à la mélancolie).</li>
<li><b>Texture</b> : monodie (une seule ligne), polyphonie (plusieurs lignes), mélodie accompagnée.</li>
<li><b>Formes</b> : couplet-refrain, forme ABA, rondo (ABACA), thème et variations, canon, fugue.</li></ul>

<h2>2. Les grandes périodes</h2>
<table><tr><th>Période</th><th>Repères</th></tr>
<tr><td>Moyen Âge</td><td>chant grégorien (monodie), troubadours, débuts de la polyphonie</td></tr>
<tr><td>Renaissance</td><td>polyphonie vocale (Josquin des Prés), chanson (Janequin)</td></tr>
<tr><td>Baroque (1600-1750)</td><td>Monteverdi (premiers opéras), Vivaldi (<i>Les Quatre Saisons</i>), Bach, Haendel, Lully ; basse continue</td></tr>
<tr><td>Classique (1750-1820)</td><td>Haydn, Mozart (<i>La Flûte enchantée</i>), Beethoven ; symphonie, sonate, quatuor</td></tr>
<tr><td>Romantique (XIXᵉ)</td><td>Schubert, Chopin, Berlioz (<i>Symphonie fantastique</i>), Verdi, Wagner ; expression des sentiments</td></tr>
<tr><td>XXᵉ-XXIᵉ</td><td>Debussy, Ravel (<i>Boléro</i>), Stravinsky (<i>Le Sacre du printemps</i>), musique concrète (Pierre Schaeffer), minimalisme (Steve Reich)</td></tr>
<tr><td>Musiques populaires</td><td>blues, jazz (Louis Armstrong), rock, chanson française, rap, musiques du monde</td></tr></table>

<h2>3. L’écoute active en classe</h2>
<p>Écouter plusieurs fois avec une consigne différente (repérer un instrument, compter les apparitions d’un thème, décrire l’émotion), coder (musicogramme), comparer deux interprétations, associer à une pratique (chant, percussions corporelles).</p>
`,
  videos: [{ t: "Les périodes de l’histoire de la musique", ch: "Lumni", q: "histoire de la musique périodes baroque classique romantique" }, { t: "Le Boléro de Ravel expliqué", ch: "France Musique", q: "Boléro de Ravel analyse ostinato crescendo" }, { t: "La fugue et le canon", ch: "Lumni", q: "canon et fugue musique expliqué" }],
  resume: "<ul><li>Timbre, dynamique, tempo, rythme, mélodie, harmonie, texture, forme.</li><li>Baroque (Vivaldi, Bach), classique (Mozart), romantique (Chopin, Berlioz), XXᵉ (Ravel, Stravinsky).</li><li>Écoute active : consignes successives, musicogramme.</li></ul>",
  exercises: [
    { q: "Un motif rythmique ou mélodique répété obstinément :", answers: ["ostinato", "un ostinato"], expl: "L’<b>ostinato</b> (« obstiné » en italien) est un motif répété en boucle, comme le rythme de caisse claire du Boléro de Ravel." },
    { q: "Forme ABACA :", choices: ["rondo", "canon", "ABA"], answer: 0, expl: "Dans le <b>rondo</b>, un refrain (A) revient entre des couplets différents (B, C…) : ABACA. La forme ABA n’a qu’un seul retour." },
    { q: "« Les Quatre Saisons » appartiennent à la période :", choices: ["baroque", "classique", "romantique"], answer: 0, expl: "Les Quatre Saisons de <b>Vivaldi</b> (vers 1725) appartiennent à la période <b>baroque</b> (environ 1600-1750), comme Bach." },
    { q: "Plusieurs lignes mélodiques simultanées :", answers: ["polyphonie", "la polyphonie"], expl: "<b>Polyphonie</b> = « plusieurs voix » : plusieurs mélodies différentes chantées ou jouées en même temps. Une seule ligne, c’est la monodie." },
    { q: "Compositeur du « Sacre du printemps » :", answers: ["Stravinsky", "Igor Stravinsky", "Stravinski"], expl: "<b>Igor Stravinsky</b> compose Le Sacre du printemps, créé à Paris en 1913 par les Ballets russes : ses rythmes violents provoquent un scandale." }
  ],
  evaluation: [
    { q: "« Allegro » indique :", choices: ["un tempo rapide", "une nuance forte", "une voix grave"], answer: 0, expl: "<b>Allegro</b> est une indication de <b>tempo</b> (vitesse) : rapide et joyeux. Lent se dit adagio ou lento ; les nuances (fort, doux) se disent forte, piano." },
    { q: "Le chant grégorien est une :", choices: ["monodie", "polyphonie", "fugue"], answer: 0, expl: "Le chant grégorien (Moyen Âge) est une <b>monodie</b> : une seule ligne mélodique chantée à l’unisson, sans accompagnement." },
    { q: "Compositeur de « La Flûte enchantée » :", answers: ["Mozart"], expl: "<b>Mozart</b> compose l’opéra La Flûte enchantée en 1791, l’année de sa mort : c’est une œuvre de la période classique." },
    { q: "La « Symphonie fantastique » est de :", answers: ["Berlioz", "Hector Berlioz"], expl: "<b>Hector Berlioz</b> compose la Symphonie fantastique en 1830 : une œuvre romantique qui raconte une histoire (musique à programme)." },
    { q: "Un musicogramme sert à :", choices: ["représenter graphiquement l’organisation d’une musique", "accorder un instrument"], answer: 0, expl: "Un <b>musicogramme</b> représente une musique avec des formes et des couleurs pour visualiser sa structure (refrains, instruments, nuances) : un bon outil d’écoute en classe." }
  ]
});

window.ARTS.chapters.push({
  id: "ac4-hda", pos: 10.2,
  title: "🎓 Histoire des arts au collège : arts, pouvoir, engagement, modernité",
  short: "Histoire des arts C4",
  sub: "Art et pouvoir, art engagé, architecture moderne, photographie, cinéma",
  objectifs: ["Relier une œuvre à son contexte historique (lien avec l’histoire du cycle 4).", "Connaître des œuvres repères d’architecture, de photographie et de cinéma.", "Rédiger une analyse d’œuvre argumentée."],
  lesson: `
<h2>1. Arts et pouvoir</h2>
<p>Château de <b>Versailles</b> (Louis XIV, glorification du roi), <i>Le Sacre de Napoléon</i> de <b>Jacques-Louis David</b> (1805-1807, propagande impériale), architecture monumentale des régimes totalitaires, portraits officiels.</p>

<h2>2. Arts et engagement, arts et guerres</h2>
<p><b>Otto Dix</b>, <i>La Guerre</i> (triptyque, 1929-1932) : horreur des tranchées ; <b>Picasso</b>, <i>Guernica</i> (1937) ; affiches de propagande ; photographies de Robert Capa ; chansons engagées (Boris Vian, <i>Le Déserteur</i>) ; mémoriaux (Mémorial de la Shoah).</p>

<h2>3. Modernité : architecture, photographie, cinéma</h2>
<ul><li><b>Architecture</b> : tour Eiffel (1889, fer) ; Art nouveau (Hector Guimard, entrées du métro parisien) ; <b>Le Corbusier</b> (villa Savoye, 1931 ; Cité radieuse de Marseille, 1952 : pilotis, toit-terrasse, plan libre) ; centre Pompidou (Piano et Rogers, 1977).</li>
<li><b>Photographie</b> : invention au XIXᵉ siècle (Niépce, Daguerre) ; photographie humaniste (Robert Doisneau, Henri Cartier-Bresson).</li>
<li><b>Cinéma</b> : frères Lumière (1895), Georges Méliès (<i>Le Voyage dans la Lune</i>, 1902, trucages), Charlie Chaplin (<i>Les Temps modernes</i>, 1936, critique du travail à la chaîne), cinéma d’animation (Paul Grimault, Michel Ocelot).</li></ul>

<h2>4. Rédiger l’analyse</h2>
<p>Présenter l’œuvre (identité, contexte), la décrire avec le vocabulaire du domaine, l’interpréter (message, procédés), la mettre en relation (autre œuvre, autre art), et, si le sujet le demande, proposer une exploitation en classe.</p>
`,
  videos: [{ t: "La Guerre d’Otto Dix", ch: "Lumni", q: "Otto Dix La Guerre triptyque analyse" }, { t: "Le Corbusier et la villa Savoye", ch: "Lumni", q: "Le Corbusier villa Savoye cinq points" }, { t: "Les Temps modernes de Chaplin", ch: "Lumni", q: "Les Temps modernes Chaplin analyse" }],
  resume: "<ul><li>Art et pouvoir : Versailles, David.</li><li>Art engagé : Otto Dix, Guernica.</li><li>Le Corbusier : pilotis, toit-terrasse, plan libre.</li><li>Cinéma : Lumière 1895, Méliès 1902, Chaplin 1936.</li></ul>",
  exercises: [
    { q: "Peintre du « Sacre de Napoléon » :", answers: ["David", "Jacques-Louis David"], expl: "<b>Jacques-Louis David</b>, peintre officiel de Napoléon, peint Le Sacre de Napoléon (1805-1807) : une œuvre néoclassique au service de la propagande impériale." },
    { q: "Triptyque « La Guerre » (1929-1932) :", answers: ["Otto Dix", "Dix"], expl: "<b>Otto Dix</b>, ancien soldat allemand de 14-18, peint le triptyque La Guerre pour dénoncer l’horreur des tranchées. Un triptyque est une œuvre en trois panneaux." },
    { q: "Architecte de la villa Savoye :", answers: ["Le Corbusier"], expl: "<b>Le Corbusier</b> construit la villa Savoye à Poissy (1931) : elle applique ses « cinq points de l’architecture moderne » (pilotis, toit-terrasse, plan libre, façade libre, fenêtre en bandeau)." },
    { q: "« Le Voyage dans la Lune » (1902) est de :", answers: ["Méliès", "Georges Méliès"], expl: "<b>Georges Méliès</b>, magicien devenu cinéaste, réalise Le Voyage dans la Lune en 1902 : il invente de nombreux trucages et le cinéma de fiction." },
    { q: "Film de Chaplin qui critique le travail à la chaîne :", answers: ["Les Temps modernes", "Modern Times"], expl: "Dans <b>Les Temps modernes</b> (Modern Times, 1936), Charlot ouvrier est broyé par la cadence de la chaîne : une critique du travail industriel (taylorisme)." }
  ],
  evaluation: [
    { q: "Les entrées de métro Art nouveau à Paris sont d’ :", answers: ["Hector Guimard", "Guimard"], expl: "<b>Hector Guimard</b> dessine les entrées du métro parisien vers 1900 : formes végétales en fonte typiques de l’<b>Art nouveau</b>." },
    { q: "La Cité radieuse se trouve à :", answers: ["Marseille"], expl: "La Cité radieuse de Le Corbusier (1952) se trouve à <b>Marseille</b> : un immeuble sur pilotis pensé comme un village vertical, avec commerces et école sur le toit." },
    { q: "Photographe humaniste du « Baiser de l’hôtel de ville » :", answers: ["Doisneau", "Robert Doisneau"], expl: "<b>Robert Doisneau</b> prend Le Baiser de l’hôtel de ville en 1950 : la photographie humaniste montre la vie quotidienne des gens ordinaires avec tendresse." },
    { q: "Le centre Pompidou a été inauguré en :", answers: ["1977"], expl: "Le centre Pompidou (architectes Renzo Piano et Richard Rogers) est inauguré en <b>1977</b> : ses tuyaux colorés sont montrés à l’extérieur du bâtiment." },
    { q: "Le château de Versailles illustre surtout le thème :", choices: ["arts et pouvoir", "arts et révolte", "arts et nature"], answer: 0, expl: "Versailles est construit pour glorifier Louis XIV, le Roi-Soleil : architecture, jardins et décors mettent en scène la puissance du roi → <b>arts et pouvoir</b>." }
  ]
});

window.FR.chapters.push({
  id: "f-c4-themes", pos: 10.7,
  title: "🎓 Le texte littéraire au collège : genres, thèmes et méthode",
  short: "Texte littéraire",
  sub: "Questionnements du cycle 4, genres, méthode d’analyse pour l’écrit 1",
  objectifs: ["Connaître les grands questionnements littéraires du cycle 4.", "Identifier le genre, les registres et les procédés d’un texte littéraire.", "Répondre à des questions de compréhension et d’interprétation sur un texte littéraire, comme à l’écrit 1."],
  lesson: `
<h2>1. Les questionnements du cycle 4</h2>
<table><tr><th>Grande entrée</th><th>Questionnements (selon le niveau)</th></tr>
<tr><td><b>Se chercher, se construire</b></td><td>le voyage et l’aventure ; dire l’amour ; se raconter, se représenter (autobiographie)</td></tr>
<tr><td><b>Vivre en société, participer à la société</b></td><td>avec autrui : familles, amis, réseaux ; individu et pouvoir ; dénoncer les travers de la société (satire, fable, conte philosophique)</td></tr>
<tr><td><b>Regarder le monde, inventer des mondes</b></td><td>imaginer des univers nouveaux (science-fiction, utopie) ; la fiction pour interroger le réel (récits réalistes, fantastiques) ; visions poétiques du monde</td></tr>
<tr><td><b>Agir sur le monde</b></td><td>héros et héroïsmes ; informer, s’informer, déformer ; agir dans la cité : individu et pouvoir (littérature engagée, XXᵉ siècle)</td></tr>
<tr><td><b>Questionnement complémentaire</b></td><td>progrès et rêves scientifiques, l’être humain est-il maître de la nature ?…</td></tr></table>

<h2>2. Genres et registres</h2>
<ul><li>Genres : roman, nouvelle (réaliste : Maupassant ; fantastique : <i>Le Horla</i>), conte, théâtre (comédie : Molière ; tragédie : Racine), poésie, autobiographie (pacte autobiographique : auteur = narrateur = personnage), fable, essai.</li>
<li><b>Registres</b> (tonalités) : comique, tragique, pathétique (émouvoir), lyrique (exprimer ses sentiments), épique (grandir les exploits), fantastique (hésitation entre explication rationnelle et surnaturelle), satirique, polémique.</li></ul>

<h2>3. Méthode pour l’écrit 1 (partie français)</h2>
<ol><li>Lire le texte deux fois : la première pour l’histoire, la seconde crayon en main (personnages, lieux, temps, champs lexicaux, figures).</li>
<li>Identifier le <b>genre</b>, le <b>narrateur</b> et le <b>point de vue</b>, le <b>registre</b>.</li>
<li>Pour chaque question : une phrase de réponse claire, une <b>citation</b> (avec la ligne), une <b>interprétation</b> (ce que montre le procédé).</li>
<li>Questions de langue : toujours <b>justifier</b> (nature, fonction, valeur des temps) avec le vocabulaire grammatical exact.</li>
<li>Relecture orthographique finale (voir le chapitre « Rédaction »).</li></ol>
`,
  videos: [{ t: "Les registres littéraires", ch: "Les Bons Profs", q: "les bons profs registres littéraires" }, { t: "Le fantastique : Le Horla", ch: "Lumni", q: "Maupassant Le Horla fantastique hésitation" }, { t: "Le pacte autobiographique", ch: "Les Bons Profs", q: "les bons profs autobiographie pacte autobiographique" }],
  resume: "<ul><li>Se chercher, se construire ; vivre en société ; regarder le monde, inventer des mondes ; agir sur le monde.</li><li>Registres : comique, tragique, pathétique, lyrique, épique, fantastique, satirique.</li><li>Réponse = idée + citation + interprétation.</li></ul>",
  exercises: [
    { q: "Le registre qui cherche à émouvoir, à faire pitié :", answers: ["pathétique", "le pathétique"], expl: "Le registre <b>pathétique</b> (du grec pathos, la souffrance) cherche à émouvoir le lecteur, à lui faire ressentir de la pitié face au malheur d’un personnage." },
    { q: "Le registre qui exprime des sentiments personnels :", answers: ["lyrique", "le lyrique"], expl: "Le registre <b>lyrique</b> exprime les sentiments intimes du « je » (amour, nostalgie, joie) ; il est très présent en poésie." },
    { q: "Dans le fantastique, le lecteur hésite entre :", choices: ["deux personnages", "une explication rationnelle et une explication surnaturelle", "deux fins"], answer: 1, expl: "Le fantastique repose sur l’<b>hésitation</b> entre une explication <b>rationnelle</b> (folie, rêve) et une explication <b>surnaturelle</b>. Si le surnaturel est accepté d’emblée, c’est du merveilleux." },
    { q: "Dans une autobiographie :", choices: ["auteur = narrateur = personnage principal", "le narrateur est toujours omniscient", "les personnages sont inventés"], answer: 0, expl: "Le <b>pacte autobiographique</b> (Philippe Lejeune) : <b>auteur = narrateur = personnage principal</b>, et l’auteur s’engage à raconter sa vie réelle." },
    { q: "« Le Horla » de Maupassant est une nouvelle :", choices: ["réaliste", "fantastique", "de science-fiction"], answer: 1, expl: "Dans <b>Le Horla</b>, le narrateur se sent hanté par un être invisible, et on ne sait jamais s’il est fou ou si le Horla existe : c’est cette hésitation qui en fait une nouvelle <b>fantastique</b>." }
  ],
  evaluation: [
    { q: "Le registre qui grandit des exploits héroïques :", answers: ["épique", "l’épique", "l'épique"], expl: "Le registre <b>épique</b> amplifie les exploits d’un héros (combats, hyperboles), comme dans l’Iliade ou La Chanson de Roland." },
    { q: "Une utopie relève de la grande entrée :", choices: ["Se chercher, se construire", "Regarder le monde, inventer des mondes", "Vivre en société"], answer: 1, expl: "Une utopie imagine une société idéale qui n’existe pas : elle relève de <b>Regarder le monde, inventer des mondes</b> (au programme de 5ᵉ : imaginer des univers nouveaux)." },
    { q: "La satire sert à :", choices: ["dénoncer en se moquant", "exprimer l’amour", "raconter sa vie"], answer: 0, expl: "La <b>satire</b> critique les défauts d’une personne ou d’une société en s’en <b>moquant</b> : elle dénonce par le rire." },
    { q: "Une bonne réponse de compréhension contient :", choices: ["une idée, une citation et une interprétation", "uniquement une citation", "un résumé du texte"], answer: 0, expl: "Une réponse complète suit trois étapes : une <b>idée</b> (ta réponse), une <b>citation</b> du texte qui la prouve, puis une <b>interprétation</b> qui explique le lien." }
  ]
});
