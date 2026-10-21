/* ANGLAIS */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "anglais",
  name: "Anglais",
  icon: "🇬🇧",
  intro: "<p>L’anglais intervient à deux niveaux : comme <b>domaine d’enseignement</b> (tu l’enseigneras du CP au CM2) et dans l’<b>épreuve orale facultative de langue vivante</b>, qui peut te rapporter des points. On vise un bon niveau (souvent annoncé autour de <b>B2</b>) et la connaissance de la <b>didactique</b> des langues à l’école.</p><p>Les leçons sont expliquées en français, avec les exemples en anglais.</p>",
  chapters: []
});
window.EN = window.SUBJECTS[window.SUBJECTS.length - 1];

window.EN.chapters.push({
  id: 1,
  title: "Les temps essentiels (present, past, future)",
  short: "Tenses",
  sub: "Present simple/continuous, past simple, present perfect, future",
  objectifs: [
    "Choisir correctement entre <b>present simple</b> et <b>present continuous</b>.",
    "Conjuguer le <b>past simple</b> (verbes réguliers et irréguliers courants).",
    "Comprendre la différence <b>past simple / present perfect</b> (difficile pour un francophone).",
    "Exprimer le futur (will, be going to)."
  ],
  lesson: `
<h2>1. Present simple : les habitudes et les vérités</h2>
<p>Forme : base verbale, avec un <b>-s à la 3ᵉ personne du singulier</b> (he/she/it). « I <b>play</b> tennis every Sunday. She <b>plays</b> the piano. Water <b>boils</b> at 100 °C. »</p>
<p>Négation et question avec <b>do/does</b> : « She <b>doesn’t</b> like coffee. <b>Do</b> you speak English ? <b>Does</b> he work here ? » (⚠ pas de -s après does : *Does he works).</p>
<p>Mots indices : always, usually, often, sometimes, never, every day.</p>

<h2>2. Present continuous : l’action en cours</h2>
<p>Forme : <b>be + verbe-ing</b>. « Look ! It <b>is raining</b>. I<b>’m reading</b> a book right now. » Indices : now, right now, at the moment, look!, listen!</p>
<div class="box warn"><span class="box-title">Le piège du francophone</span>En français, « je mange » sert pour les deux. En anglais : « I eat vegetables every day » (habitude) / « I’m eating, call me later » (en ce moment). Les verbes d’état (like, love, know, want, believe) ne se mettent pas à la forme -ing : *I’m knowing.</div>

<h2>3. Past simple : une action terminée, datée</h2>
<p>Réguliers : <b>-ed</b> (played, worked, studied). Irréguliers à connaître : be → was/were, have → had, go → went, do → did, see → saw, take → took, make → made, come → came, eat → ate, write → wrote, buy → bought, think → thought, teach → taught.</p>
<p>Négation et question avec <b>did</b> + base verbale : « I <b>didn’t go</b>. <b>Did</b> you <b>see</b> him ? » Indices : yesterday, last week, in 2010, ago.</p>

<h2>4. Present perfect : le lien passé-présent</h2>
<p>Forme : <b>have/has + participe passé</b>. On l’utilise quand le moment n’est pas précisé ou quand l’action a un lien avec le présent : « I <b>have</b> already <b>finished</b>. She <b>has</b> never <b>been</b> to London. »</p>
<p>Avec <b>for</b> (durée) et <b>since</b> (point de départ) pour une action qui dure encore : « I <b>have lived</b> here <b>for</b> ten years / <b>since</b> 2015. » (⚠ en français, on dit « j’habite ici depuis 10 ans » au présent.)</p>
<div class="box tip"><span class="box-title">Le test</span>Si la phrase contient une date ou un moment terminé (yesterday, in 2019, last year) → <b>past simple</b>. Sinon (ever, never, already, yet, just, since, for) → souvent <b>present perfect</b>.</div>

<h2>5. Le futur</h2>
<ul><li><b>will</b> + base verbale : prédiction, décision spontanée, promesse. « I think it <b>will rain</b>. I<b>’ll help</b> you ! »</li>
<li><b>be going to</b> + base verbale : intention, projet, ou prédiction fondée sur un indice. « I<b>’m going to</b> visit my aunt. Look at the clouds, it<b>’s going to</b> rain. »</li>
<li>Present continuous pour un rendez-vous fixé : « I<b>’m meeting</b> Tom tomorrow. »</li></ul>
`,
  videos: [
    { t: "Present simple vs present continuous", ch: "Learn English with EnglishClass101 / BBC Learning English", q: "BBC Learning English present simple present continuous" },
    { t: "Past simple : irregular verbs", ch: "Anglais avec Anthony / Learn English", q: "past simple irregular verbs explication français" },
    { t: "Present perfect vs past simple", ch: "BBC Learning English", q: "BBC Learning English present perfect or past simple" },
    { t: "Will ou going to", ch: "Les Bons Profs", q: "les bons profs anglais will going to" }
  ],
  resume: "<ul><li>Habitude → present simple (-s à he/she/it) ; en cours → be + -ing.</li><li>Date passée → past simple ; for/since, ever, never, already → present perfect.</li><li>will : décision spontanée/prédiction ; going to : projet.</li></ul>",
  exercises: [
    { q: "She ___ (go) to school by bus every day.", answers: ["goes"], expl: "« every day » indique une habitude → <b>present simple</b>. À la 3ᵉ personne (she), on ajoute -s, et « go » devient <b>goes</b> (comme do → does)." },
    { q: "Listen! The baby ___ (cry).", answers: ["is crying", "'s crying", "’s crying"], expl: "« Listen! » montre que l’action se passe en ce moment → <b>present continuous</b> : be + -ing. Avec « the baby » (= it), on dit <b>is crying</b>." },
    { q: "Yesterday, we ___ (see) a great film.", answers: ["saw"], expl: "« Yesterday » = moment passé terminé → <b>past simple</b>. « see » est irrégulier : see → <b>saw</b> → seen." },
    { q: "I ___ (live) in Lyon since 2018. (present perfect)", answers: ["have lived", "'ve lived", "’ve lived"], expl: "Avec <b>since</b>, l’action a commencé dans le passé et dure encore → <b>have + participe passé</b> : I <b>have lived</b>. ⚠ Le français dit « j’habite depuis » au présent, pas l’anglais." },
    { q: "Choisis : « I ___ to London last year. »", choices: ["have been", "went", "go"], answer: 1, expl: "« last year » = moment passé terminé → past simple." },
    { q: "Choisis : « Have you ever ___ sushi ? »", choices: ["ate", "eaten", "eat"], answer: 1, expl: "« Have you ever… ? » est un <b>present perfect</b> : have + <b>participe passé</b>. Pour « eat », c’est eat → ate → <b>eaten</b> (« ate » est le past simple)." },
    { q: "Forme négative : « He likes cats. » → He ___ cats.", answers: ["doesn't like", "does not like", "doesn’t like"], expl: "Au present simple, la négation se fait avec <b>doesn’t</b> (3ᵉ personne) + base verbale. Le -s passe sur l’auxiliaire : He <b>doesn’t like</b> (et non *doesn’t likes)." },
    { q: "Traduis : « J’enseigne ici depuis cinq ans. »", answers: ["I have taught here for five years", "I've taught here for five years", "I have been teaching here for five years", "I've been teaching here for five years", "I’ve taught here for five years", "I’ve been teaching here for five years"], numeric: false, expl: "« depuis » + durée → present perfect + for." }
  ],
  evaluation: [
    { q: "Water ___ (freeze) at 0 °C.", answers: ["freezes"], expl: "C’est une vérité générale → <b>present simple</b>. « Water » = it, donc on ajoute -s : <b>freezes</b>." },
    { q: "What ___ you ___ (do) right now? (deux mots : are doing)", answers: ["are doing"], expl: "« right now » = en ce moment → <b>present continuous</b>. À la question, l’auxiliaire passe devant le sujet : What <b>are</b> you <b>doing</b>?" },
    { q: "Past simple de « teach » :", answers: ["taught"], expl: "« teach » est un verbe <b>irrégulier</b> : teach → <b>taught</b> → taught. Il rime avec « bought » et « thought »." },
    { q: "Past simple de « buy » :", answers: ["bought"], expl: "« buy » est <b>irrégulier</b> : buy → <b>bought</b> → bought. Pas de *buyed !" },
    { q: "Choisis : « She has worked here ___ 2020. »", choices: ["for", "since", "ago"], answer: 1, expl: "<b>since</b> + point de départ (une date : 2020) ; <b>for</b> + durée (for three years). « ago » s’emploie avec le past simple (two years ago)." },
    { q: "Choisis : « I ___ my homework yet. »", choices: ["didn’t finish", "haven’t finished", "don’t finish"], answer: 1, expl: "<b>yet</b> (« pas encore », en fin de phrase négative) appelle le <b>present perfect</b> : I <b>haven’t finished</b> my homework yet." },
    { q: "Choisis : « Look at those clouds! It ___ rain. »", choices: ["will", "is going to", "rains"], answer: 1, expl: "On a un indice visible (les nuages) → prédiction avec <b>be going to</b> : It <b>is going to</b> rain. « will » sert plutôt pour une prédiction sans indice ou une décision spontanée." },
    { q: "Question : « You like music. » → ___ you like music?", answers: ["do"], expl: "Au present simple, on pose la question avec l’auxiliaire <b>do</b> placé devant le sujet : <b>Do</b> you like music? (does seulement avec he/she/it)." },
    { q: "Corrige : « Does she speaks English? »", answers: ["does she speak english", "does she speak english?"], numeric: false, expl: "L’auxiliaire <b>does</b> porte déjà la marque de la 3ᵉ personne : le verbe reste à la <b>base verbale</b>. Donc : Does she <b>speak</b> English?" }
  ]
});

window.EN.chapters.push({
  id: 2,
  title: "Grammaire de base : la phrase anglaise",
  short: "Grammar",
  sub: "Articles, pluriels, pronoms, modaux, questions, comparatifs",
  objectifs: [
    "Construire des questions correctes (WH- questions, auxiliaires).",
    "Utiliser les modaux (can, must, should, may).",
    "Former comparatifs et superlatifs, utiliser some/any, much/many."
  ],
  lesson: `
<h2>1. Les questions</h2>
<p>Règle : <b>(mot interrogatif) + auxiliaire + sujet + verbe</b>. « <b>Where do</b> you live ? <b>What is</b> she doing ? <b>When did</b> they arrive ? »</p>
<p>Mots interrogatifs : what (quoi), who (qui), where (où), when (quand), why (pourquoi), how (comment), how much / how many (combien), how old (quel âge), which (lequel), whose (à qui).</p>

<h2>2. Les modaux</h2>
<p>Ils sont suivis de la <b>base verbale sans « to »</b> et ne prennent jamais de -s : « She <b>can swim</b>. » (*She cans swims)</p>
<ul><li><b>can</b> : capacité, permission (Can I go to the toilet?) ; <b>could</b> : passé ou politesse.</li>
<li><b>must</b> : obligation forte ; <b>mustn’t</b> : interdiction (You mustn’t run in the corridor). ⚠ <b>don’t have to</b> = absence d’obligation.</li>
<li><b>should</b> : conseil (You should drink water). <b>may / might</b> : possibilité.</li></ul>

<h2>3. Articles, pluriels, quantités</h2>
<ul><li><b>a</b> devant un son consonne (a dog, a university), <b>an</b> devant un son voyelle (an apple, an hour).</li>
<li>Pas d’article pour les généralités : « <b>Children</b> love games. I like <b>music</b>. »</li>
<li>Pluriels irréguliers : child → children, man → men, woman → women, foot → feet, tooth → teeth, mouse → mice, person → people.</li>
<li><b>some</b> (phrases affirmatives) / <b>any</b> (négatives et questions). <b>much</b> (indénombrable : much water) / <b>many</b> (dénombrable : many books).</li></ul>

<h2>4. Comparatifs et superlatifs</h2>
<ul><li>Adjectifs courts : tall → <b>taller than</b> → <b>the tallest</b> ; big → bigger (doublement), happy → happier.</li>
<li>Adjectifs longs : <b>more</b> interesting than → <b>the most</b> interesting.</li>
<li>Irréguliers : good → better → the best ; bad → worse → the worst ; far → further → the furthest.</li>
<li>Égalité : as tall as.</li></ul>

<h2>5. Les pronoms et possessifs</h2>
<table><tr><th>Sujet</th><th>Complément</th><th>Adjectif possessif</th><th>Pronom possessif</th></tr>
<tr><td>I</td><td>me</td><td>my</td><td>mine</td></tr><tr><td>you</td><td>you</td><td>your</td><td>yours</td></tr>
<tr><td>he</td><td>him</td><td>his</td><td>his</td></tr><tr><td>she</td><td>her</td><td>her</td><td>hers</td></tr>
<tr><td>we</td><td>us</td><td>our</td><td>ours</td></tr><tr><td>they</td><td>them</td><td>their</td><td>theirs</td></tr></table>
<p>⚠ Le possessif s’accorde avec le <b>possesseur</b> : « Tom and <b>his</b> mother » ; « Lisa and <b>her</b> father » (en français : « sa mère », « son père »).</p>
`,
  videos: [
    { t: "Poser des questions en anglais", ch: "BBC Learning English", q: "how to ask questions in English auxiliary do does did" },
    { t: "Les modaux", ch: "Les Bons Profs", q: "les bons profs anglais modaux can must should" },
    { t: "Comparatifs et superlatifs", ch: "Les Bons Profs", q: "les bons profs anglais comparatif superlatif" }
  ],
  resume: "<ul><li>Question : WH + auxiliaire + sujet + verbe.</li><li>Modal + base verbale, jamais de -s.</li><li>Court : -er/-est ; long : more/most ; good-better-best.</li><li>his/her selon le possesseur.</li></ul>",
  exercises: [
    { q: "___ do you live? (où)", answers: ["where"], expl: "« Où » se dit <b>where</b>. Structure : mot interrogatif + auxiliaire + sujet + verbe → <b>Where</b> do you live?" },
    { q: "Choisis : « She ___ swim very well. »", choices: ["cans", "can", "can to"], answer: 1, expl: "<b>can</b> est un modal : il ne prend jamais de -s et il est suivi de la base verbale <b>sans « to »</b> → She <b>can</b> swim." },
    { q: "Choisis : « You ___ run in the corridor! It’s forbidden. »", choices: ["mustn’t", "don’t have to", "should"], answer: 0, expl: "C’est interdit → <b>mustn’t</b> (interdiction). ⚠ « don’t have to » veut dire « tu n’es pas obligé », ce n’est pas une interdiction." },
    { q: "Comparatif de « big » :", answers: ["bigger"], expl: "Adjectif court → <b>-er</b>. Comme « big » se termine par voyelle + consonne, on double la consonne : <b>bigger</b>." },
    { q: "Superlatif de « good » :", answers: ["the best", "best"], expl: "« good » est irrégulier : good → better → <b>the best</b>." },
    { q: "Pluriel de « child » :", answers: ["children"], expl: "Pluriel irrégulier : a child → two <b>children</b> (et non *childs ni *childrens)." },
    { q: "Choisis : « ___ hour »", choices: ["a", "an"], answer: 1, expl: "On choisit a/an selon le <b>son</b> : dans « hour », le h ne se prononce pas, le mot commence par un son voyelle → <b>an</b> hour." },
    { q: "« Paul et sa sœur » → Paul and ___ sister.", answers: ["his"], expl: "En anglais, le possessif s’accorde avec le <b>possesseur</b>, pas avec l’objet : la sœur est à Paul (un garçon) → <b>his</b> sister." }
  ],
  evaluation: [
    { q: "Choisis : « How ___ brothers have you got? »", choices: ["much", "many"], answer: 1, expl: "« brothers » se compte (dénombrable, au pluriel) → <b>many</b>. « much » est pour l’indénombrable (much water, much time)." },
    { q: "Choisis : « Is there ___ milk in the fridge? »", choices: ["some", "any"], answer: 1, expl: "Dans une <b>question</b> (ou une négation), on utilise <b>any</b> ; « some » s’emploie surtout dans les phrases affirmatives." },
    { q: "Superlatif de « interesting » :", answers: ["the most interesting", "most interesting"], expl: "Adjectif long (plusieurs syllabes) → <b>the most</b> + adjectif : <b>the most interesting</b> (et non *interestingest)." },
    { q: "Pluriel de « tooth » :", answers: ["teeth"], expl: "Pluriel irrégulier : one tooth → two <b>teeth</b> (comme foot → feet)." },
    { q: "« Marie et son père » → Marie and ___ father.", answers: ["her"], expl: "Le possessif dépend du <b>possesseur</b> : le père est celui de Marie (une fille) → <b>her</b> father. ⚠ En français on dit « son » à cause de « père », pas en anglais." },
    { q: "Choisis : « You ___ wear a uniform, it’s optional. »", choices: ["mustn’t", "don’t have to"], answer: 1, expl: "« it’s optional » = ce n’est pas obligatoire → <b>don’t have to</b> (absence d’obligation). « mustn’t » voudrait dire que c’est interdit." },
    { q: "Corrige : « Where you live? »", answers: ["where do you live", "where do you live?"], numeric: false, expl: "Il manque l’auxiliaire ! Une question se construit : mot interrogatif + <b>auxiliaire</b> + sujet + verbe → Where <b>do</b> you live?" },
    { q: "Comparatif de « bad » :", answers: ["worse"], expl: "« bad » est irrégulier : bad → <b>worse</b> → the worst." }
  ]
});

window.EN.chapters.push({
  id: 3,
  title: "Le vocabulaire de l’école et de la classe",
  short: "Classroom English",
  sub: "Lexique scolaire, consignes, rituels",
  objectifs: [
    "Connaître le vocabulaire de l’école (matières, lieux, objets, personnes).",
    "Savoir donner les <b>consignes</b> courantes en anglais (« classroom language »).",
    "Mettre en place des <b>rituels</b> en anglais."
  ],
  lesson: `
<h2>1. Le système scolaire</h2>
<p>École maternelle : <b>nursery school / preschool</b> ; école primaire : <b>primary school</b> (UK) / <b>elementary school</b> (US) ; collège : <b>secondary school / middle school</b>. L’enseignant(e) : <b>teacher</b> ; le/la directeur(trice) : <b>head teacher</b> (UK) / <b>principal</b> (US). Un élève : a <b>pupil</b> / a student. La classe (salle) : the <b>classroom</b> ; la récréation : <b>break / playtime</b> (UK), <b>recess</b> (US) ; la cantine : the <b>canteen</b> ; la cour : the <b>playground</b>.</p>
<p>Matières : maths, French, English, science, history, geography, art, music, PE (physical education).</p>
<p>Objets : a pencil, a pen, a rubber (UK)/an eraser (US), a ruler, a pencil case, a schoolbag, scissors, glue, a sharpener, an exercise book, a board.</p>

<h2>2. Les consignes de classe (classroom language)</h2>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td>Sit down, please. / Stand up.</td><td>Asseyez-vous. / Levez-vous.</td></tr>
<tr><td>Listen carefully. / Look at the board.</td><td>Écoutez bien. / Regardez le tableau.</td></tr>
<tr><td>Repeat after me.</td><td>Répétez après moi.</td></tr>
<tr><td>Raise your hand. / Put your hand up.</td><td>Levez la main.</td></tr>
<tr><td>Work in pairs / in groups.</td><td>Travaillez par deux / en groupes.</td></tr>
<tr><td>Open your books at page 12.</td><td>Ouvrez vos livres page 12.</td></tr>
<tr><td>Be quiet, please. / Silence, please.</td><td>Silence, s’il vous plaît.</td></tr>
<tr><td>Well done! / Great job! / Try again.</td><td>Bravo ! / Essaie encore.</td></tr>
<tr><td>Can you spell it? / How do you say … in English?</td><td>Peux-tu l’épeler ? / Comment dit-on … en anglais ?</td></tr>
<tr><td>Line up. / Tidy up.</td><td>Mettez-vous en rang. / Rangez.</td></tr></table>

<h2>3. Les rituels</h2>
<p>Ils permettent l’exposition régulière à la langue : la date (« What’s the date today? It’s Monday, October 12th »), la météo (« What’s the weather like? It’s sunny / rainy / cloudy / windy »), l’appel (« Who’s absent today? »), les émotions (« How are you today? I’m happy / tired / fine »), un chant ou une comptine (« Head, shoulders, knees and toes »).</p>
`,
  videos: [
    { t: "Classroom language", ch: "British Council / LearnEnglish Kids", q: "British Council classroom language for teachers" },
    { t: "Rituels en anglais à l’école", ch: "Canopé / Éduscol", q: "rituels anglais école primaire date météo" },
    { t: "Comptines anglaises", ch: "Super Simple Songs", q: "Super Simple Songs head shoulders knees and toes" }
  ],
  resume: "<ul><li>pupil, teacher, head teacher, playground, break.</li><li>Consignes : sit down, listen, repeat, work in pairs, raise your hand.</li><li>Rituels : date, météo, appel, émotions, chants.</li></ul>",
  exercises: [
    { q: "« La cour de récréation » se dit :", answers: ["playground", "the playground"], expl: "La cour de récréation, c’est the <b>playground</b> (littéralement « le terrain de jeu »). La récréation elle-même se dit break (UK) ou recess (US)." },
    { q: "« Une gomme » (anglais britannique) :", answers: ["rubber", "a rubber"], expl: "En anglais britannique, une gomme est a <b>rubber</b> ; en anglais américain, on dit an eraser." },
    { q: "« Levez la main » :", choices: ["Raise your hand", "Stand your hand", "Up your hand"], answer: 0, expl: "La consigne est <b>Raise your hand</b> (ou Put your hand up). « raise » = lever, élever." },
    { q: "« Travaillez par deux » :", answers: ["work in pairs"], expl: "« Par deux » se dit <b>in pairs</b> (a pair = une paire) : <b>Work in pairs</b>. Pour les groupes : Work in groups." },
    { q: "« It’s windy » signifie :", choices: ["il pleut", "il y a du vent", "il fait beau"], answer: 1, expl: "<b>wind</b> = le vent, donc <b>windy</b> = il y a du vent. De même : sunny (soleil), rainy (pluie), cloudy (nuages)." },
    { q: "EPS se dit :", answers: ["PE", "physical education"], expl: "L’EPS se dit <b>PE</b>, pour <b>P</b>hysical <b>E</b>ducation." }
  ],
  evaluation: [
    { q: "« Une règle » :", answers: ["ruler", "a ruler"], expl: "Une règle (pour tracer) se dit a <b>ruler</b>." },
    { q: "« Répétez après moi » :", answers: ["repeat after me"], expl: "<b>Repeat after me</b> : consigne très utile pour la répétition en chœur pendant les séances d’anglais." },
    { q: "« Mettez-vous en rang » :", choices: ["Line up", "Stand down", "Go row"], answer: 0, expl: "<b>Line up</b> : « line » = la ligne, le rang. Consigne courante avant de sortir de la classe." },
    { q: "« Le directeur » (UK) :", answers: ["head teacher", "headteacher", "the head teacher", "headmaster"], expl: "Au Royaume-Uni, le directeur d’école est le <b>head teacher</b> (ou headmaster). Aux États-Unis, on dit principal." },
    { q: "« Quel temps fait-il ? » :", answers: ["what's the weather like", "what’s the weather like", "what is the weather like", "what's the weather like?"], expl: "Pour la météo, on demande <b>What’s the weather like?</b> On répond : It’s sunny, rainy, cloudy… C’est un rituel classique de début de séance." },
    { q: "« Bravo ! » :", choices: ["Well done!", "Good done!", "Well made!"], answer: 0, expl: "Pour féliciter un élève, on dit <b>Well done!</b> (ou Great job!). « Good done » et « Well made » n’existent pas." }
  ]
});

window.EN.chapters.push({
  id: 4,
  title: "Didactique : enseigner l’anglais à l’école",
  short: "Didactique",
  sub: "CECRL, activités langagières, séance type, programmes",
  objectifs: [
    "Connaître le <b>CECRL</b> et le niveau visé à l’école (<b>A1</b> en fin de cycle 3).",
    "Connaître les <b>5 activités langagières</b>.",
    "Construire une <b>séance d’anglais</b> (déroulement type).",
    "Savoir ce que disent les programmes (enseignement dès le CP, approche actionnelle)."
  ],
  lesson: `
<h2>1. Le cadre : le CECRL</h2>
<p>Le <b>Cadre européen commun de référence pour les langues</b> (CECRL, 2001) définit 6 niveaux : <b>A1, A2</b> (utilisateur élémentaire), <b>B1, B2</b> (indépendant), <b>C1, C2</b> (expérimenté). À l’école, on vise le niveau <b>A1</b> dans toutes les activités en fin de cycle 3 (CM2-6ᵉ), et une partie du A1 en fin de cycle 2. Il promeut l’<b>approche actionnelle</b> : l’élève est un « acteur social » qui accomplit des <b>tâches</b> en langue étrangère.</p>

<h2>2. Les 5 activités langagières</h2>
<ol><li><b>Écouter et comprendre</b> (compréhension de l’oral) — prioritaire à l’école.</li>
<li><b>Lire et comprendre</b> (compréhension de l’écrit).</li>
<li><b>Parler en continu</b> (s’exprimer oralement seul : se présenter, réciter).</li>
<li><b>Écrire</b>.</li>
<li><b>Réagir et dialoguer</b> (interaction orale).</li></ol>
<p>Plus la dimension <b>culturelle</b> : découvrir les fêtes (Halloween, Thanksgiving, Bonfire Night), la vie quotidienne, les pays anglophones.</p>

<h2>3. Les grands principes</h2>
<ul><li><b>Priorité à l’oral</b>, surtout au cycle 2. L’écrit vient en appui.</li>
<li><b>Régularité</b> : des séances courtes et fréquentes (idéalement tous les jours au cycle 2) valent mieux qu’une longue séance par semaine. Horaire : <b>1 h 30 par semaine</b>.</li>
<li><b>Exposition à la langue authentique</b> : albums (<i>Brown Bear, Brown Bear, What Do You See?</i>, <i>The Very Hungry Caterpillar</i>), comptines, chansons, vidéos.</li>
<li><b>Gestes, images (flashcards), mimes</b> pour faire comprendre sans traduire.</li>
<li><b>Phonologie</b> : entraîner l’oreille aux sons spécifiques (th, h aspiré, accent tonique, intonation).</li>
<li>L’erreur est normale ; on reformule positivement.</li></ul>

<h2>4. Le déroulement d’une séance type</h2>
<ol><li><b>Rituels / warm up</b> (5 min) : date, météo, chanson.</li>
<li><b>Réactivation</b> du lexique de la séance précédente (jeu de flashcards : « What’s missing? »).</li>
<li><b>Présentation</b> de la nouvelle notion (lexique ou structure) en contexte : album, saynète, marionnette.</li>
<li><b>Entraînement / mémorisation</b> : répétition (chorale, par groupes, individuelle), jeux (Simon says, Kim’s game, bingo, memory).</li>
<li><b>Production / réinvestissement</b> : petite tâche en interaction (« pair work », jeu de rôle, enquête dans la classe).</li>
<li><b>Bilan / trace écrite</b> et chanson de fin.</li></ol>
<p>Exemple de <b>projet</b> (tâche finale) : réaliser un livre « My monster » décrivant un monstre (lexique du corps, couleurs, « He has got three eyes »), puis le présenter oralement.</p>

<h2>5. Phrases utiles pour l’oral facultatif</h2>
<ul><li>« I would plan this lesson for CE2 pupils, aiming at level A1 of the CEFR. »</li>
<li>« The main language activity here is listening and understanding. »</li>
<li>« I would use flashcards and gestures to avoid translation. »</li>
<li>« The final task would be… » ; « This document is relevant because… »</li></ul>
`,
  videos: [
    { t: "Le CECRL expliqué", ch: "Conseil de l’Europe / Éduscol", q: "CECRL niveaux A1 A2 B1 B2 expliqué" },
    { t: "Une séance d’anglais au cycle 2", ch: "Canopé", q: "Canopé séance anglais cycle 2 école primaire" },
    { t: "Jeux pour la classe d’anglais", ch: "Teacher / British Council", q: "classroom games English primary flashcards Simon says Kim's game" },
    { t: "Épreuve facultative de langue CRPE", ch: "Préparation CRPE", q: "CRPE épreuve facultative langue vivante anglais conseils" }
  ],
  resume: "<ul><li>CECRL : A1 visé en fin de cycle 3 ; approche actionnelle.</li><li>5 activités : écouter, lire, parler en continu, écrire, réagir et dialoguer.</li><li>Séance : rituels → réactivation → présentation → entraînement → production → bilan.</li></ul>",
  exercises: [
    { q: "Niveau CECRL visé en fin de cycle 3 :", answers: ["A1"], expl: "À l’école, on vise le niveau <b>A1</b> (premier niveau d’« utilisateur élémentaire ») dans toutes les activités langagières en fin de cycle 3." },
    { q: "Combien d’activités langagières ?", answers: ["5", "cinq"], expl: "Il y a <b>5</b> activités langagières : écouter et comprendre, lire et comprendre, parler en continu, écrire, réagir et dialoguer." },
    { q: "Activité langagière prioritaire à l’école :", choices: ["écrire", "écouter et comprendre", "lire"], answer: 1, expl: "À l’école, la <b>priorité est à l’oral</b>, et d’abord à l’<b>écoute</b> : l’élève doit beaucoup entendre la langue avant de la produire." },
    { q: "Approche promue par le CECRL :", choices: ["grammaire-traduction", "actionnelle", "behavioriste"], answer: 1, expl: "Le CECRL promeut l’<b>approche actionnelle</b> : l’élève est un « acteur social » qui utilise la langue pour réaliser des <b>tâches</b> concrètes." },
    { q: "Horaire hebdomadaire d’enseignement des langues vivantes à l’école élémentaire :", choices: ["30 min", "1 h 30", "3 h"], answer: 1, expl: "Les programmes prévoient <b>1 h 30 par semaine</b>, de préférence en séances courtes et fréquentes." },
    { q: "Pour faire comprendre un mot nouveau sans traduire, on utilise :", choices: ["la traduction systématique", "flashcards, gestes, mimes", "le dictionnaire"], answer: 1, expl: "Les <b>flashcards, gestes et mimes</b> donnent le sens directement, sans passer par le français : l’élève associe le mot anglais à l’image ou au geste." },
    { q: "Propose une tâche finale pour une séquence CM1 sur le lexique de la nourriture.", type: "open", model: "<p>Tâche finale : <b>« Let’s open a café »</b> — par groupes, les élèves créent le menu illustré d’un café anglais (lexique : food, drinks, prices), puis jouent une saynète client / serveur : « Can I have a sandwich, please? — Here you are. That’s two pounds. » Activités mobilisées : écrire (menu), réagir et dialoguer (saynète). Dimension culturelle : le <i>full English breakfast</i>, la monnaie (pounds, pence).</p>" }
  ],
  evaluation: [
    { q: "Signification de CECRL :", choices: ["Cadre européen commun de référence pour les langues", "Certificat européen des compétences en langues", "Centre européen de recherche linguistique"], answer: 0, expl: "CECRL = <b>Cadre européen commun de référence pour les langues</b> (Conseil de l’Europe, 2001). Il définit 6 niveaux, de A1 à C2." },
    { q: "Niveau « utilisateur indépendant » :", choices: ["A1-A2", "B1-B2", "C1-C2"], answer: 1, expl: "Le CECRL distingue : A1-A2 = utilisateur élémentaire, <b>B1-B2 = utilisateur indépendant</b>, C1-C2 = utilisateur expérimenté." },
    { q: "« Parler en continu » correspond à :", choices: ["dialoguer avec un camarade", "s’exprimer seul (se présenter, réciter)", "écrire une phrase"], answer: 1, expl: "Parler en continu, c’est <b>s’exprimer seul</b>, sans interlocuteur qui répond : se présenter, réciter une comptine, décrire. Dialoguer relève de « réagir et dialoguer »." },
    { q: "Premier temps d’une séance d’anglais :", choices: ["production", "rituels / warm up", "évaluation"], answer: 1, expl: "Une séance commence par les <b>rituels / warm up</b> (date, météo, chanson) : ils installent l’ambiance en anglais et réactivent ce qui est connu." },
    { q: "Album souvent utilisé en anglais au cycle 2 :", choices: ["Brown Bear, Brown Bear, What Do You See?", "Le Petit Prince", "Harry Potter"], answer: 0, expl: "<b>Brown Bear, Brown Bear, What Do You See?</b> (Bill Martin Jr, Eric Carle) est un album répétitif idéal pour les couleurs et les animaux. Les deux autres ne sont pas des albums anglais pour débutants." },
    { q: "Des séances courtes et fréquentes sont préférables à une longue séance hebdomadaire. Vrai ou faux ?", type: "vf", answer: 0, expl: "<b>Vrai</b> : la <b>régularité</b> est essentielle en langue. Une exposition fréquente (idéalement quotidienne au cycle 2) aide bien plus la mémorisation qu’une longue séance par semaine." }
  ]
});

window.EN.chapters.push({
  id: 5,
  title: "S’exprimer à l’oral : se présenter et argumenter",
  short: "Speaking",
  sub: "Présentation, connecteurs, expressions utiles pour l’oral",
  objectifs: [
    "Te présenter en anglais de façon fluide (parcours, motivation).",
    "Utiliser des <b>connecteurs</b> et des expressions pour donner ton avis.",
    "Éviter les principaux <b>faux amis</b>."
  ],
  lesson: `
<h2>1. Se présenter (modèle à adapter)</h2>
<p>« Good morning. My name is … and I am 21. I have just completed a degree in … at the University of … . I have always wanted to become a primary school teacher because I enjoy working with children and I believe that school plays a key role in reducing inequalities. Last year, I did a placement in a CE1 class, where I discovered how important English is for opening pupils to other cultures. »</p>

<h2>2. Donner son avis, nuancer</h2>
<ul><li>In my opinion… / I think that… / As far as I’m concerned…</li>
<li>On the one hand… on the other hand…</li>
<li>Firstly… Secondly… Finally… / Moreover / Furthermore / However / Therefore / For instance</li>
<li>I agree / I disagree / It depends on…</li>
<li>To sum up… / In conclusion…</li>
<li>Gagner du temps poliment : « That’s an interesting question. Let me think… » ; « Could you repeat the question, please? »</li></ul>

<h2>3. Les faux amis à connaître</h2>
<table><tr><th>Anglais</th><th>Vrai sens</th><th>À ne pas confondre avec</th></tr>
<tr><td>actually</td><td>en fait</td><td>actuellement = currently</td></tr>
<tr><td>eventually</td><td>finalement</td><td>éventuellement = possibly</td></tr>
<tr><td>library</td><td>bibliothèque</td><td>librairie = bookshop</td></tr>
<tr><td>sensible</td><td>raisonnable</td><td>sensible = sensitive</td></tr>
<tr><td>to attend</td><td>assister à</td><td>attendre = to wait</td></tr>
<tr><td>a lecture</td><td>un cours magistral</td><td>une lecture = reading</td></tr>
<tr><td>to pretend</td><td>faire semblant</td><td>prétendre = to claim</td></tr>
<tr><td>a course</td><td>un cours, une formation</td><td>une course = a race</td></tr></table>

<h2>4. La prononciation</h2>
<p>Attention au <b>h aspiré</b> (hello, happy), au <b>th</b> (think [θ], this [ð]), à l’<b>accent tonique</b> (TEAcher, PRImary, eduCAtion), aux terminaisons <b>-ed</b> ([t] worked, [d] played, [ɪd] wanted).</p>
`,
  videos: [
    { t: "Se présenter en anglais à un entretien", ch: "BBC Learning English", q: "how to introduce yourself in English job interview" },
    { t: "Les faux amis anglais-français", ch: "Anglais avec Anthony", q: "faux amis anglais français actually eventually" },
    { t: "Prononciation du TH", ch: "BBC Learning English", q: "BBC Learning English pronunciation th sound" }
  ],
  resume: "<ul><li>Structure : identité → parcours → motivation → expérience.</li><li>Connecteurs : firstly, moreover, however, therefore, to sum up.</li><li>actually = en fait ; library = bibliothèque.</li></ul>",
  exercises: [
    { q: "« Actually » signifie :", choices: ["actuellement", "en fait"], answer: 1, expl: "Faux ami ! <b>actually</b> = <b>en fait</b>. « Actuellement » se dit currently ou at the moment." },
    { q: "« Bibliothèque » se dit :", answers: ["library", "a library"], expl: "Une bibliothèque se dit a <b>library</b>. ⚠ Faux ami : une librairie (où l’on achète des livres) se dit a bookshop." },
    { q: "« To attend a meeting » signifie :", choices: ["attendre une réunion", "assister à une réunion"], answer: 1, expl: "Faux ami : <b>to attend</b> = <b>assister à</b>. « Attendre » se dit to wait (for)." },
    { q: "Connecteur pour « cependant » :", answers: ["however"], expl: "« Cependant » se dit <b>however</b>, souvent suivi d’une virgule : However, …" },
    { q: "« Finalement » :", choices: ["eventually", "possibly"], answer: 0, expl: "<b>eventually</b> = finalement, au bout du compte. ⚠ Faux ami : « éventuellement » se dit possibly." },
    { q: "Rédige 5 lignes en anglais pour expliquer pourquoi tu veux devenir professeur des écoles.", type: "open", model: "<p>« I want to become a primary school teacher because I love passing on knowledge and seeing children progress. I believe that primary school is where everything begins: reading, writing, but also living together. Moreover, I enjoy the variety of the job, as teachers teach every subject. Finally, I think teaching is a way to make a real difference in children’s lives. »</p>" }
  ],
  evaluation: [
    { q: "« Sensible » en anglais signifie :", choices: ["sensible (émotif)", "raisonnable"], answer: 1, expl: "Faux ami : <b>sensible</b> = <b>raisonnable</b>, sensé. « Sensible » (émotif) se dit sensitive." },
    { q: "« Une librairie » :", answers: ["bookshop", "a bookshop", "bookstore", "a bookstore"], expl: "Une librairie se dit a <b>bookshop</b> (UK) ou a bookstore (US). ⚠ « library » veut dire bibliothèque." },
    { q: "« Par conséquent » :", choices: ["therefore", "however", "moreover"], answer: 0, expl: "<b>therefore</b> = par conséquent, donc. « however » = cependant, « moreover » = de plus." },
    { q: "« Pour résumer » :", answers: ["to sum up", "in short", "to summarise", "to summarize"], expl: "Pour résumer se dit <b>to sum up</b> (ou in short) : parfait pour conclure ton oral." },
    { q: "Dans « wanted », -ed se prononce :", choices: ["[t]", "[d]", "[ɪd]"], answer: 2, expl: "Après un son [t] ou [d], la terminaison -ed se prononce <b>[ɪd]</b> : want<b>ed</b>, need<b>ed</b>. Sinon c’est [t] (worked) ou [d] (played)." },
    { q: "« To pretend » signifie :", choices: ["prétendre", "faire semblant"], answer: 1, expl: "Faux ami : <b>to pretend</b> = <b>faire semblant</b>. « Prétendre » se dit to claim." }
  ]
});
