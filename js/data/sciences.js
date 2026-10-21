/* SCIENCES ET TECHNOLOGIE */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "sciences",
  name: "Sciences & techno",
  icon: "🔬",
  intro: "<p>La 2ᵉ épreuve écrite porte sur les <b>autres domaines d’enseignement</b> de l’école, dont les <b>sciences et la technologie</b>. On attend des connaissances solides de niveau collège sur les 4 grands thèmes du programme : <b>la matière</b>, <b>le vivant</b>, <b>la Terre et l’Univers</b>, <b>les objets techniques</b>, ainsi que la <b>démarche d’investigation</b> que tu mettras en œuvre en classe.</p>",
  chapters: []
});
window.SCI = window.SUBJECTS[window.SUBJECTS.length - 1];

window.SCI.chapters.push({
  id: 1,
  title: "La démarche scientifique",
  short: "Démarche",
  sub: "Démarche d’investigation, expérience témoin, variable",
  objectifs: [
    "Décrire les étapes de la <b>démarche d’investigation</b>.",
    "Concevoir une expérience valide : <b>une seule variable</b> modifiée, une <b>expérience témoin</b>.",
    "Distinguer observation, hypothèse, expérience, modélisation, recherche documentaire."
  ],
  lesson: `
<h2>1. Les étapes de la démarche d’investigation</h2>
<ol>
<li><b>Situation de départ</b> : un phénomène surprenant, une question d’élève (« Pourquoi la buée apparaît sur la vitre ? »).</li>
<li><b>Problème</b> : on formule une question scientifique précise (« D’où vient l’eau de la buée ? »).</li>
<li><b>Hypothèses</b> : les élèves proposent des explications (« l’eau traverse la vitre », « elle vient de l’air »).</li>
<li><b>Investigation</b> pour tester les hypothèses : expérimentation, observation, modélisation, recherche documentaire, enquête.</li>
<li><b>Résultats et interprétation</b> : l’hypothèse est validée ou réfutée.</li>
<li><b>Conclusion / structuration</b> : on rédige ce qu’on a appris (trace écrite), on confronte au savoir établi.</li>
</ol>
<p>Les <b>conceptions initiales</b> (représentations) des élèves sont le point de départ : on les fait émerger (dessin, phrase) pour les faire évoluer.</p>

<h2>2. Concevoir une expérience valide</h2>
<div class="box def"><span class="box-title">La règle d’or : ne changer qu’un facteur à la fois</span>Pour tester si la lumière est nécessaire à la germination, on prépare deux lots <b>identiques</b> (mêmes graines, même eau, même température) et on ne fait varier que <b>la lumière</b>. Le lot dans les conditions habituelles est l’<b>expérience témoin</b>.</div>
<p>Résultat : les graines germent dans les deux cas → la lumière n’est pas nécessaire à la germination (mais elle l’est à la croissance de la plantule). Pour être fiable, on utilise <b>plusieurs graines</b> par lot (et on répète l’expérience).</p>

<h2>3. Les autres démarches</h2>
<ul><li><b>Observation</b> (à l’œil nu, loupe, microscope), avec dessin d’observation légendé et titré.</li>
<li><b>Modélisation</b> : représenter un phénomène qu’on ne peut pas manipuler (maquette Soleil-Terre-Lune, modèle du volcan).</li>
<li><b>Recherche documentaire</b> : pour ce qui ne peut être expérimenté (dinosaures, organes internes).</li>
<li><b>Élevage et culture</b> en classe : suivi dans le temps (cycle de vie du papillon).</li></ul>
`,
  videos: [
    { t: "La démarche d’investigation en sciences", ch: "La main à la pâte", q: "la main à la pâte démarche d'investigation" },
    { t: "Expérience témoin : une seule variable", ch: "Lumni", q: "expérience témoin une seule variable sciences" }
  ],
  resume: "<ul><li>Problème → hypothèses → investigation → résultats → conclusion.</li><li>Une seule variable à la fois + une expérience témoin.</li></ul>",
  exercises: [
    { q: "Pour tester l’effet de l’eau sur la germination, que doit-on faire varier ?", choices: ["la lumière et l’eau", "seulement l’eau", "la température"], answer: 1, expl: "On ne fait varier <b>que le facteur testé</b> : ici, l’eau. Si tu changes aussi la lumière, tu ne sauras pas lequel des deux explique le résultat." },
    { q: "L’expérience dans laquelle on ne modifie rien s’appelle :", answers: ["témoin", "expérience témoin", "l’expérience témoin"], expl: "C’est l’<b>expérience témoin</b> : elle reste dans les conditions habituelles et sert de point de comparaison pour le lot où l’on modifie un seul facteur." },
    { q: "Étape qui consiste à proposer une explication possible :", choices: ["problème", "hypothèse", "conclusion"], answer: 1, expl: "L’<b>hypothèse</b> est une explication possible, qu’on va ensuite tester. Le problème, lui, est la question posée ; la conclusion vient à la fin, après l’expérience." },
    { q: "Pour étudier la digestion humaine en classe, on utilise surtout :", choices: ["l’expérimentation directe", "la recherche documentaire et la modélisation", "l’élevage"], answer: 1, expl: "On ne peut pas expérimenter directement sur le corps humain ! On passe donc par la <b>recherche documentaire</b> (radios, schémas) et la <b>modélisation</b> (maquette du tube digestif)." },
    { q: "Pourquoi utilise-t-on plusieurs graines par lot plutôt qu’une seule ?", type: "open", model: "<p>Pour que le résultat ne dépende pas du hasard (une graine peut être abîmée et ne pas germer). Avec plusieurs graines, le résultat est plus <b>fiable</b> et <b>reproductible</b>.</p>" }
  ],
  evaluation: [
    { q: "Ordre correct :", choices: ["hypothèse → problème → expérience", "problème → hypothèse → expérience → conclusion", "expérience → hypothèse → conclusion"], answer: 1, expl: "On part d’une <b>question</b> (problème), on propose des <b>hypothèses</b>, on les teste par une <b>expérience</b>, puis on <b>conclut</b>. Pas d’hypothèse sans problème à résoudre !" },
    { q: "Une expérience valide modifie :", choices: ["un seul facteur", "deux facteurs", "tous les facteurs"], answer: 0, expl: "La règle d’or : <b>un seul facteur à la fois</b>. Si deux facteurs changent en même temps, impossible de savoir lequel est responsable du résultat." },
    { q: "Les idées des élèves avant l’apprentissage s’appellent :", choices: ["conceptions initiales", "hypothèses validées", "connaissances"], answer: 0, expl: "Ce sont les <b>conceptions initiales</b> (ou représentations) : on les fait émerger (dessin, phrase) pour les faire évoluer. Ce ne sont pas encore des connaissances validées." },
    { q: "La maquette Soleil-Terre avec une lampe et une balle est une :", choices: ["expérimentation", "modélisation", "observation"], answer: 1, expl: "Quand on représente en petit un phénomène qu’on ne peut pas manipuler (le Soleil, la Terre), on fait une <b>modélisation</b>. Une expérimentation agit sur le phénomène réel." },
    { q: "Vrai ou faux : si une hypothèse est réfutée, l’expérience a échoué.", type: "vf", answer: 1, expl: "Faux : réfuter une hypothèse est un résultat scientifique à part entière." }
  ]
});

window.SCI.chapters.push({
  id: 2,
  title: "La matière et l’énergie",
  short: "Matière & énergie",
  sub: "États de la matière, changements d’état, mélanges, énergie, électricité",
  objectifs: [
    "Connaître les 3 états de la matière et les <b>changements d’état</b> (noms exacts).",
    "Distinguer <b>mélange homogène / hétérogène</b>, <b>dissolution</b>, et les techniques de séparation.",
    "Connaître les formes et sources d’<b>énergie</b> (renouvelables / non renouvelables).",
    "Réaliser et analyser un <b>circuit électrique</b> simple (série, dérivation, court-circuit)."
  ],
  lesson: `
<h2>1. Les trois états de la matière</h2>
<table><tr><th>État</th><th>Forme propre ?</th><th>Volume propre ?</th><th>Exemple</th></tr>
<tr><td>Solide</td><td>oui</td><td>oui</td><td>glace</td></tr>
<tr><td>Liquide</td><td>non (prend la forme du récipient, surface horizontale au repos)</td><td>oui</td><td>eau</td></tr>
<tr><td>Gaz</td><td>non</td><td>non (occupe tout l’espace, compressible)</td><td>vapeur d’eau, air</td></tr></table>
<p>⚠ L’<b>air est de la matière</b> : il a une masse (1 L d’air ≈ 1,2 g) et on peut le comprimer (seringue bouchée). Les élèves pensent souvent que « l’air, ce n’est rien ».</p>

<h2>2. Les changements d’état</h2>
<ul><li>Solide → liquide : <b>fusion</b> ; liquide → solide : <b>solidification</b>.</li>
<li>Liquide → gaz : <b>vaporisation</b> (ébullition ou évaporation) ; gaz → liquide : <b>liquéfaction</b> (ou condensation liquide).</li>
<li>Solide → gaz : <b>sublimation</b> ; gaz → solide : <b>condensation</b> (solide).</li></ul>
<p>Pour l’eau pure (pression normale) : fusion à <b>0 °C</b>, ébullition à <b>100 °C</b>. Pendant un changement d’état d’un corps pur, <b>la température reste constante</b> (palier). La <b>masse se conserve</b> mais le <b>volume change</b> (la glace occupe plus de volume que l’eau liquide : elle flotte, les bouteilles éclatent au congélateur).</p>
<div class="box warn"><span class="box-title">Confusions fréquentes</span>La buée n’est pas de la vapeur : c’est de l’<b>eau liquide</b> (des gouttelettes) issue de la liquéfaction de la vapeur d’eau (invisible) de l’air. La « fumée » au-dessus d’une casserole est aussi de l’eau liquide. Le sucre <b>se dissout</b> dans l’eau, il ne « fond » pas.</div>

<h2>3. Mélanges et séparation</h2>
<ul><li><b>Mélange homogène</b> : on ne distingue pas les constituants (eau salée, air). <b>Hétérogène</b> : on les distingue (eau + sable, eau + huile).</li>
<li><b>Dissolution</b> : le soluté (sel) se dissout dans le solvant (eau) → solution. Il y a une limite : la <b>saturation</b>. La masse se conserve : 100 g d’eau + 10 g de sel = 110 g de solution.</li>
<li>Séparer : <b>décantation</b> (laisser reposer), <b>filtration</b> (filtre), <b>évaporation</b> (récupérer le sel), <b>distillation</b>.</li></ul>

<h2>4. L’énergie</h2>
<p>L’énergie permet de produire un mouvement, de la chaleur, de la lumière… Elle se présente sous plusieurs <b>formes</b> (cinétique/mouvement, thermique, électrique, lumineuse, chimique) et se <b>convertit</b> d’une forme à une autre (une éolienne convertit l’énergie du vent en énergie électrique).</p>
<ul><li><b>Sources renouvelables</b> : soleil, vent, eau (hydraulique), biomasse, géothermie.</li><li><b>Non renouvelables</b> : pétrole, charbon, gaz naturel (fossiles), uranium (nucléaire).</li></ul>

<h2>5. L’électricité</h2>
<p>Un circuit électrique simple : un <b>générateur</b> (pile), des <b>fils</b>, un <b>récepteur</b> (lampe, moteur), un <b>interrupteur</b>. Le courant ne circule que si le circuit est <b>fermé</b> (boucle complète).</p>
<ul><li><b>Circuit en série</b> : une seule boucle ; si une lampe est dévissée, l’autre s’éteint.</li><li><b>Circuit en dérivation</b> : plusieurs boucles ; chaque lampe fonctionne indépendamment (installation de la maison).</li><li><b>Court-circuit</b> : le courant passe par un fil sans récepteur → la lampe s’éteint, la pile chauffe : danger.</li><li><b>Conducteurs</b> (métaux, eau salée, corps humain) / <b>isolants</b> (plastique, bois sec, verre, air).</li></ul>
<p>Sécurité : on ne manipule jamais le secteur (230 V) en classe, seulement des piles (4,5 V).</p>
`,
  videos: [
    { t: "Les changements d’état de l’eau", ch: "C’est pas sorcier", q: "c'est pas sorcier changements d'état de l'eau" },
    { t: "Mélanges et solutions", ch: "Les Bons Profs", q: "les bons profs mélange homogène hétérogène dissolution" },
    { t: "Circuit en série et en dérivation", ch: "Les Bons Profs", q: "les bons profs circuit série dérivation" },
    { t: "Les sources d’énergie", ch: "1 jour 1 question", q: "1 jour 1 question énergies renouvelables" }
  ],
  resume: "<ul><li>Fusion, solidification, vaporisation, liquéfaction, sublimation, condensation.</li><li>Changement d’état : masse conservée, volume modifié, température constante (corps pur).</li><li>Buée = eau liquide ; vapeur d’eau = invisible.</li><li>Série : une boucle ; dérivation : plusieurs boucles.</li></ul>",
  exercises: [
    { q: "Le passage de l’état liquide à l’état gazeux s’appelle :", choices: ["fusion", "vaporisation", "liquéfaction", "solidification"], answer: 1, expl: "Liquide → gaz = <b>vaporisation</b> (ébullition ou évaporation). Attention : la liquéfaction est le chemin inverse (gaz → liquide) et la fusion, c’est solide → liquide." },
    { q: "Quand 100 g de glace fondent, on obtient une masse d’eau de :", choices: ["moins de 100 g", "100 g", "plus de 100 g"], answer: 1, expl: "Lors d’un changement d’état, <b>la masse se conserve</b> : 100 g de glace donnent 100 g d’eau. C’est le <b>volume</b> qui change, pas la masse." },
    { q: "La buée sur une vitre froide est :", choices: ["de la vapeur d’eau", "de l’eau liquide", "de l’air"], answer: 1, expl: "La vapeur d’eau est <b>invisible</b>. Au contact de la vitre froide, elle se liquéfie en fines gouttelettes : la buée est donc de l’<b>eau liquide</b>." },
    { q: "Le sucre dans le café :", choices: ["fond", "se dissout", "s’évapore"], answer: 1, expl: "Le sucre <b>se dissout</b> : il se disperse dans le liquide sans changer d’état. « Fondre », c’est passer de solide à liquide sous l’effet de la chaleur (comme la glace)." },
    { q: "Pour récupérer le sel d’une eau salée, on utilise :", choices: ["la filtration", "la décantation", "l’évaporation"], answer: 2, expl: "Le sel est dissous : il passe à travers un filtre et ne se dépose pas. En faisant <b>évaporer</b> l’eau, le sel reste au fond (c’est le principe des marais salants)." },
    { q: "Laquelle est une énergie renouvelable ?", choices: ["charbon", "gaz naturel", "solaire", "uranium"], answer: 2, expl: "Le <b>soleil</b> est une source inépuisable à notre échelle. Charbon, gaz naturel (fossiles) et uranium (nucléaire) sont en quantité limitée : non renouvelables." },
    { q: "Dans un circuit en série avec 2 lampes, on dévisse une lampe. L’autre :", choices: ["reste allumée", "s’éteint", "brille plus fort"], answer: 1, expl: "En série, il n’y a <b>qu’une seule boucle</b> : dévisser une lampe ouvre le circuit, le courant ne passe plus, donc l’autre lampe <b>s’éteint</b> aussi." },
    { q: "Un élève dit : « L’air, ce n’est rien, ça ne pèse rien. » Propose une expérience pour lui montrer qu’il a tort.", type: "open", model: "<p>On pèse un ballon dégonflé, puis on le gonfle fortement (ou on utilise un ballon de foot avec une pompe) et on le pèse à nouveau : la masse augmente. Autre expérience : une seringue bouchée qu’on comprime montre que l’air occupe un volume et résiste. Un verre retourné enfoncé dans l’eau reste sec à l’intérieur : l’air occupe l’espace.</p>" }
  ],
  evaluation: [
    { q: "Solide → gaz directement :", choices: ["sublimation", "fusion", "condensation"], answer: 0, expl: "Le passage direct solide → gaz s’appelle la <b>sublimation</b> (comme la neige carbonique qui « fume »). La condensation solide, c’est l’inverse : gaz → solide." },
    { q: "L’eau pure bout à (°C, pression normale) :", answers: ["100"], expl: "À pression normale, l’eau pure bout à <b>100 °C</b> et gèle à <b>0 °C</b>. Retiens les deux repères ensemble !" },
    { q: "Pendant l’ébullition de l’eau pure, la température :", choices: ["augmente", "reste constante", "diminue"], answer: 1, expl: "Pendant un changement d’état d’un corps pur, la température <b>reste constante</b> (palier à 100 °C) : l’énergie apportée sert à changer d’état, pas à chauffer plus." },
    { q: "L’eau + huile est un mélange :", choices: ["homogène", "hétérogène"], answer: 1, expl: "On distingue nettement deux couches (l’huile flotte sur l’eau) : le mélange est donc <b>hétérogène</b>. Homogène = on ne distingue plus les constituants, comme l’eau salée." },
    { q: "Le liquide qui dissout s’appelle :", choices: ["soluté", "solvant", "solution"], answer: 1, expl: "Le <b>solvant</b> dissout (l’eau), le <b>soluté</b> est dissous (le sel), et le mélange obtenu est la <b>solution</b>. Astuce : solvan<b>t</b> = celui qui <b>t</b>ravaille." },
    { q: "Le plastique est un :", choices: ["conducteur", "isolant"], answer: 1, expl: "Le plastique ne laisse pas passer le courant : c’est un <b>isolant</b>. C’est pour ça qu’il entoure les fils électriques, alors que le cuivre à l’intérieur est conducteur." },
    { q: "Installation électrique d’une maison :", choices: ["en série", "en dérivation"], answer: 1, expl: "À la maison, quand une ampoule grille, les autres restent allumées : chaque appareil a sa boucle, c’est un montage <b>en dérivation</b>." },
    { q: "Une éolienne convertit l’énergie :", choices: ["chimique en électrique", "du mouvement (vent) en électrique", "thermique en lumineuse"], answer: 1, expl: "Le vent fait tourner les pales : l’éolienne convertit l’énergie du <b>mouvement</b> (cinétique) en énergie <b>électrique</b>." },
    { q: "Pourquoi une bouteille d’eau pleine éclate-t-elle au congélateur ?", choices: ["la masse augmente", "le volume augmente en gelant", "l’air se dilate"], answer: 1, expl: "En gelant, l’eau <b>augmente de volume</b> (la glace prend plus de place, c’est pourquoi elle flotte). La masse, elle, ne change pas." }
  ]
});

window.SCI.chapters.push({
  id: 3,
  title: "Le vivant : unité, diversité, fonctions",
  short: "Le vivant",
  sub: "Cellule, classification, nutrition, reproduction, corps humain, écosystèmes",
  objectifs: [
    "Connaître la <b>cellule</b> comme unité du vivant et les critères du vivant.",
    "Utiliser la <b>classification phylogénétique</b> (par attributs partagés) et non la classification « on/n’a pas ».",
    "Expliquer les grandes fonctions : <b>nutrition</b> (animale, végétale), <b>respiration</b>, <b>digestion</b>, <b>circulation</b>, <b>reproduction</b>.",
    "Comprendre les <b>chaînes alimentaires</b> et les écosystèmes."
  ],
  lesson: `
<h2>1. Qu’est-ce qu’un être vivant ?</h2>
<p>Un être vivant <b>naît</b> (ou se forme), <b>se nourrit</b>, <b>respire</b>, <b>grandit</b>, <b>se reproduit</b> et <b>meurt</b>. Il est constitué d’une ou plusieurs <b>cellules</b> (unité de base du vivant : membrane, cytoplasme, noyau contenant l’ADN). Les cellules végétales ont en plus une <b>paroi</b> et des <b>chloroplastes</b>.</p>

<h2>2. Classer le vivant</h2>
<div class="box def"><span class="box-title">La classification scientifique actuelle</span>On classe en <b>groupes emboîtés</b> selon les <b>attributs qu’ils possèdent</b> (jamais selon ce qu’ils n’ont pas, ni selon leur milieu ou leur régime alimentaire). Ces groupes reflètent les liens de <b>parenté</b>.</div>
<p>Exemple : les <b>vertébrés</b> ont un squelette interne avec colonne vertébrale. Parmi eux, les animaux à <b>4 membres</b> (tétrapodes) ; parmi eux, ceux qui ont des <b>poils</b> (mammifères), ceux qui ont des <b>plumes</b> (oiseaux)…</p>
<p>⚠ La chauve-souris est un mammifère (poils, mamelles), pas un oiseau. La baleine est un mammifère, pas un poisson. Les « invertébrés » ne forment pas un groupe scientifique (on ne classe pas sur une absence).</p>

<h2>3. La nutrition</h2>
<ul><li><b>Végétaux</b> (chlorophylliens) : ils fabriquent leur matière grâce à la <b>photosynthèse</b> : eau + sels minéraux (racines) + dioxyde de carbone (feuilles) + <b>lumière</b> → matière organique (sucres) + dioxygène. On dit qu’ils sont <b>autotrophes</b> (producteurs primaires).</li>
<li><b>Animaux</b> : ils consomment d’autres êtres vivants : <b>hétérotrophes</b>. Régimes : herbivore, carnivore, omnivore… (le régime peut varier selon la saison ou l’âge).</li>
<li><b>Tous les êtres vivants respirent</b> (y compris les plantes, jour et nuit) : ils consomment du dioxygène et rejettent du dioxyde de carbone.</li></ul>

<h2>4. Le corps humain</h2>
<ul>
<li><b>Digestion</b> : bouche → œsophage → estomac → intestin grêle → gros intestin. Les aliments sont transformés en <b>nutriments</b> qui passent dans le sang au niveau de l’<b>intestin grêle</b> (absorption). ⚠ Les aliments ne passent pas dans les jambes ; l’eau ne va pas dans un « tuyau » séparé.</li>
<li><b>Respiration</b> : l’air entre par le nez/la bouche → trachée → bronches → <b>poumons</b> (alvéoles) où le dioxygène passe dans le sang.</li>
<li><b>Circulation</b> : le <b>cœur</b> (muscle) propulse le sang dans les artères ; il revient par les veines. Le sang apporte dioxygène et nutriments aux organes et emporte les déchets.</li>
<li><b>Mouvement</b> : os + muscles + articulations. Un muscle se <b>contracte</b> (raccourcit) et tire sur l’os ; les muscles fonctionnent par paires antagonistes (biceps / triceps).</li>
<li><b>Hygiène et santé</b> : équilibre alimentaire (familles d’aliments), sommeil, activité physique, hygiène dentaire, dangers des écrans.</li>
</ul>

<h2>5. La reproduction</h2>
<ul><li><b>Sexuée</b> : rencontre d’une cellule reproductrice mâle et femelle (fécondation) → œuf. Chez les plantes à fleurs : pollinisation (souvent par les insectes) → fécondation → fruit contenant des graines.</li>
<li><b>Asexuée</b> (végétative) : bouturage, stolons du fraisier, tubercule de pomme de terre.</li>
<li><b>Ovipares</b> (pondent des œufs) / <b>vivipares</b> (le petit se développe dans le ventre de la mère).</li>
<li><b>Puberté</b> chez l’humain : transformations du corps, enseignées en cycle 3.</li></ul>

<h2>6. Écosystèmes et chaînes alimentaires</h2>
<p>Une <b>chaîne alimentaire</b> se lit avec des flèches qui signifient « <b>est mangé par</b> » : herbe → lapin → renard. Elle commence toujours par un <b>végétal</b> (producteur). Les <b>décomposeurs</b> (champignons, vers de terre, bactéries) recyclent la matière morte en sels minéraux. Un <b>écosystème</b> = un milieu + les êtres vivants qui y vivent et leurs interactions.</p>
`,
  videos: [
    { t: "La cellule, unité du vivant", ch: "Lumni", q: "Lumni la cellule unité du vivant" },
    { t: "Classer les êtres vivants", ch: "Lumni / SVT", q: "classification phylogénétique groupes emboîtés cycle 3" },
    { t: "La digestion", ch: "C’est pas sorcier", q: "c'est pas sorcier digestion" },
    { t: "La photosynthèse", ch: "Les Bons Profs", q: "les bons profs photosynthèse" },
    { t: "Chaînes alimentaires", ch: "1 jour 1 question", q: "chaîne alimentaire réseau trophique primaire" }
  ],
  resume: "<ul><li>Classer = groupes emboîtés selon des attributs partagés.</li><li>Photosynthèse : eau + CO₂ + lumière → sucres + O₂.</li><li>Tous les êtres vivants respirent.</li><li>Absorption des nutriments : intestin grêle.</li><li>Flèche d’une chaîne alimentaire = « est mangé par ».</li></ul>",
  exercises: [
    { q: "La chauve-souris appartient au groupe des :", choices: ["oiseaux", "mammifères", "insectes"], answer: 1, expl: "Elle vole, mais elle a des <b>poils</b> et des <b>mamelles</b> : c’est un <b>mammifère</b>. On classe selon les attributs, pas selon le mode de déplacement." },
    { q: "Les plantes respirent :", choices: ["uniquement la nuit", "uniquement le jour", "jour et nuit"], answer: 2, expl: "Comme tous les êtres vivants, les plantes respirent <b>jour et nuit</b> (elles consomment du dioxygène). Le jour, la photosynthèse s’ajoute à la respiration et masque ce phénomène." },
    { q: "La photosynthèse nécessite :", choices: ["de la lumière", "de l’obscurité", "du dioxygène"], answer: 0, expl: "La photosynthèse a besoin de <b>lumière</b> (et d’eau, de CO₂, de sels minéraux). Le dioxygène, au contraire, est ce qu’elle <b>rejette</b>." },
    { q: "Les nutriments passent dans le sang au niveau de :", choices: ["l’estomac", "l’intestin grêle", "l’œsophage"], answer: 1, expl: "C’est dans l’<b>intestin grêle</b> que les nutriments traversent la paroi pour passer dans le sang (absorption). L’estomac, lui, brasse et commence la digestion." },
    { q: "Dans « herbe → criquet → grenouille », la flèche signifie :", choices: ["mange", "est mangé par"], answer: 1, expl: "La flèche se lit « <b>est mangé par</b> » : l’herbe est mangée par le criquet. Elle montre le sens du transfert de matière, du mangé vers le mangeur." },
    { q: "Un être vivant qui fabrique sa propre matière à partir de matière minérale est dit :", answers: ["autotrophe"], expl: "<b>Autotrophe</b> = « qui se nourrit lui-même » : c’est le cas des végétaux chlorophylliens grâce à la photosynthèse. Les animaux, eux, sont hétérotrophes." },
    { q: "Le bouturage est une reproduction :", choices: ["sexuée", "asexuée"], answer: 1, expl: "Une bouture, c’est un morceau de plante qui redonne une plante entière, sans fleur ni fécondation : c’est une reproduction <b>asexuée</b> (végétative)." },
    { q: "Pourquoi ne doit-on pas classer les animaux en « animaux qui volent / qui ne volent pas » ?", type: "open", model: "<p>Parce que ce critère (le mode de déplacement) ne reflète pas la <b>parenté</b> : il regrouperait l’abeille, le pigeon et la chauve-souris, qui sont très éloignés. La classification scientifique se fonde sur des <b>attributs partagés</b> (squelette, poils, plumes, mamelles…) qui traduisent une histoire évolutive commune. De plus, on ne classe jamais selon une absence de caractère.</p>" }
  ],
  evaluation: [
    { q: "La baleine est un :", choices: ["poisson", "mammifère"], answer: 1, expl: "La baleine vit dans l’eau, mais elle respire avec des poumons et allaite ses petits : c’est un <b>mammifère</b>. Le milieu de vie ne sert pas à classer." },
    { q: "Lieu des échanges gazeux dans les poumons :", choices: ["trachée", "alvéoles", "bronches"], answer: 1, expl: "Les <b>alvéoles</b> sont de minuscules sacs au bout des bronches : c’est là que le dioxygène passe dans le sang. Trachée et bronches ne font que conduire l’air." },
    { q: "Organe qui propulse le sang :", answers: ["cœur", "le cœur", "coeur"], expl: "Le <b>cœur</b> est un muscle qui fonctionne comme une pompe : il envoie le sang dans les artères, et le sang revient par les veines." },
    { q: "Une chaîne alimentaire commence toujours par :", choices: ["un herbivore", "un végétal", "un décomposeur"], answer: 1, expl: "Une chaîne alimentaire commence par un <b>végétal</b> (producteur), qui fabrique sa matière grâce à la lumière. Tous les animaux en dépendent ensuite." },
    { q: "Les vers de terre et les champignons sont des :", choices: ["producteurs", "décomposeurs", "carnivores"], answer: 1, expl: "Ce sont des <b>décomposeurs</b> : ils transforment la matière morte (feuilles, cadavres) en sels minéraux, que les plantes réutilisent." },
    { q: "Rejeté par la photosynthèse :", choices: ["dioxyde de carbone", "dioxygène", "azote"], answer: 1, expl: "La plante absorbe du dioxyde de carbone et <b>rejette du dioxygène</b>. Ne confonds pas avec la respiration, qui fait l’inverse." },
    { q: "Quand le biceps se contracte, le bras :", choices: ["se plie", "se tend"], answer: 0, expl: "En se contractant, le biceps <b>raccourcit</b> et tire sur l’os de l’avant-bras : le bras <b>se plie</b>. C’est le triceps qui le tend." },
    { q: "La transformation de la fleur en fruit suit :", choices: ["la germination", "la fécondation", "la photosynthèse"], answer: 1, expl: "Après la pollinisation, la <b>fécondation</b> transforme la fleur : l’ovaire devient le fruit et les ovules deviennent les graines. La germination, c’est la graine qui donne une plantule." },
    { q: "Critère qui fonde la classification actuelle :", choices: ["le milieu de vie", "le régime alimentaire", "les attributs partagés"], answer: 2, expl: "On classe selon les <b>attributs partagés</b> (poils, plumes, squelette…), qui traduisent la parenté. Le milieu ou le régime alimentaire regroupent des êtres très éloignés." }
  ]
});

window.SCI.chapters.push({
  id: 4,
  title: "La Terre, l’Univers et les objets techniques",
  short: "Terre & techno",
  sub: "Système solaire, jour/nuit, saisons, Lune, volcans, objets techniques",
  objectifs: [
    "Expliquer l’alternance <b>jour/nuit</b>, les <b>saisons</b>, les <b>phases de la Lune</b>.",
    "Connaître le système solaire et les ordres de grandeur.",
    "Comprendre les phénomènes géologiques (volcans, séismes) et météorologiques.",
    "Analyser un <b>objet technique</b> : fonction, solution technique, matériaux, évolution."
  ],
  lesson: `
<h2>1. Le système solaire</h2>
<p>Le <b>Soleil</b> est une <b>étoile</b> (il produit sa lumière). Autour de lui tournent <b>8 planètes</b> : Mercure, Vénus, Terre, Mars (planètes telluriques, rocheuses), Jupiter, Saturne, Uranus, Neptune (géantes gazeuses). Moyen mnémotechnique : « <b>Me V</b>oici <b>T</b>oute <b>M</b>ouillée, <b>J</b>’ai <b>S</b>uivi <b>U</b>n <b>N</b>uage ». Pluton est une planète naine depuis 2006.</p>
<p>La <b>Lune</b> est le <b>satellite naturel</b> de la Terre : elle ne produit pas de lumière, elle <b>réfléchit</b> celle du Soleil.</p>

<h2>2. Jour et nuit</h2>
<p>La Terre <b>tourne sur elle-même</b> (rotation) en <b>24 heures</b> autour d’un axe passant par les pôles, d’ouest en est. La moitié éclairée par le Soleil est dans le jour, l’autre dans la nuit. Le Soleil semble se lever à l’<b>est</b> et se coucher à l’<b>ouest</b> : c’est un <b>mouvement apparent</b>.</p>

<h2>3. Les saisons</h2>
<div class="box warn"><span class="box-title">Conception erronée très fréquente</span>Les saisons ne sont <b>pas</b> dues à la distance Terre-Soleil ! (La Terre est même un peu plus proche du Soleil en janvier.)</div>
<p>Elles sont dues à l’<b>inclinaison de l’axe de rotation de la Terre</b> (environ 23,5°) par rapport au plan de son orbite, combinée à sa <b>révolution</b> autour du Soleil (365,25 jours). En été dans l’hémisphère nord, les rayons du Soleil arrivent plus <b>verticalement</b> (plus d’énergie par m²) et les <b>jours sont plus longs</b>. C’est pourquoi les saisons sont <b>inversées</b> entre hémisphères nord et sud.</p>

<h2>4. Les phases de la Lune</h2>
<p>La Lune tourne autour de la Terre en environ <b>29,5 jours</b> (lunaison). Elle est toujours à moitié éclairée par le Soleil, mais selon sa position, nous voyons une partie plus ou moins grande de sa face éclairée : nouvelle lune, premier croissant, premier quartier, gibbeuse, <b>pleine lune</b>, dernier quartier… ⚠ Les phases ne sont pas dues à l’ombre de la Terre (ça, c’est une éclipse de Lune, rare).</p>

<h2>5. La planète Terre</h2>
<ul><li>Structure : croûte, manteau, noyau. La surface est découpée en <b>plaques tectoniques</b> mobiles.</li>
<li><b>Volcans</b> (remontée de magma) et <b>séismes</b> (rupture brutale des roches) se concentrent aux <b>limites des plaques</b>.</li>
<li><b>Le cycle de l’eau</b> : évaporation (océans) → condensation (nuages) → précipitations → ruissellement / infiltration → retour aux océans.</li>
<li><b>Météo / climat</b> : la météo décrit le temps qu’il fait à un moment donné ; le climat décrit les conditions moyennes sur 30 ans.</li></ul>

<h2>6. Les objets techniques</h2>
<ul><li>Un objet technique répond à un <b>besoin</b> ; il a une <b>fonction d’usage</b> (à quoi il sert) et des <b>fonctions techniques</b> réalisées par des <b>solutions techniques</b> (ex. : vélo — fonction : se déplacer ; transmission du mouvement : chaîne + pignons).</li>
<li>Les <b>matériaux</b> sont choisis selon leurs propriétés (solidité, légèreté, conductivité, coût, impact environnemental).</li>
<li>Les objets <b>évoluent</b> dans le temps (du téléphone fixe au smartphone) selon les besoins et les progrès techniques.</li>
<li>En classe : démonter, observer, schématiser, concevoir et fabriquer, programmer un robot.</li></ul>
`,
  videos: [
    { t: "Pourquoi y a-t-il des saisons ?", ch: "C’est pas sorcier", q: "c'est pas sorcier saisons inclinaison axe terre" },
    { t: "Les phases de la Lune", ch: "1 jour 1 question", q: "1 jour 1 question phases de la lune" },
    { t: "Le système solaire", ch: "C’est pas sorcier", q: "c'est pas sorcier système solaire planètes" },
    { t: "Volcans et tectonique des plaques", ch: "C’est pas sorcier", q: "c'est pas sorcier tectonique des plaques volcans" }
  ],
  resume: "<ul><li>Jour/nuit : rotation de la Terre en 24 h.</li><li>Saisons : inclinaison de l’axe (pas la distance au Soleil).</li><li>Lune : réfléchit la lumière du Soleil, phases en 29,5 jours.</li><li>Objet technique : besoin → fonction → solution technique → matériaux.</li></ul>",
  exercises: [
    { q: "L’alternance jour/nuit est due à :", choices: ["la révolution de la Terre autour du Soleil", "la rotation de la Terre sur elle-même", "la rotation du Soleil autour de la Terre"], answer: 1, expl: "La Terre <b>tourne sur elle-même</b> en 24 h : la face tournée vers le Soleil est dans le jour. La révolution autour du Soleil (1 an) explique les saisons, pas le jour et la nuit." },
    { q: "Les saisons sont dues à :", choices: ["la distance Terre-Soleil", "l’inclinaison de l’axe de la Terre", "les nuages"], answer: 1, expl: "C’est l’<b>inclinaison de l’axe</b> de la Terre qui fait varier la hauteur du Soleil et la durée des jours. Piège classique : la distance au Soleil n’y est pour rien (la Terre est plus proche en janvier !)." },
    { q: "Combien de planètes dans le système solaire ?", answers: ["8", "huit"], expl: "Il y a <b>8 planètes</b> : « Me Voici Toute Mouillée, J’ai Suivi Un Nuage ». Pluton n’est plus qu’une planète naine depuis 2006." },
    { q: "Le Soleil est :", choices: ["une planète", "une étoile", "un satellite"], answer: 1, expl: "Le Soleil est une <b>étoile</b> : il produit sa propre lumière. Les planètes et les satellites, eux, ne font que la réfléchir." },
    { q: "Quand c’est l’été en France, en Australie c’est :", choices: ["l’été", "l’hiver"], answer: 1, expl: "La France est dans l’hémisphère nord, l’Australie dans l’hémisphère sud : à cause de l’inclinaison de l’axe, les saisons sont <b>inversées</b>. Noël en Australie, c’est l’été !" },
    { q: "Les phases de la Lune sont dues à :", choices: ["l’ombre de la Terre", "la position de la Lune par rapport à la Terre et au Soleil", "les nuages"], answer: 1, expl: "La Lune est toujours à moitié éclairée par le Soleil ; selon sa <b>position</b> autour de la Terre, on voit une partie plus ou moins grande de sa face éclairée. L’ombre de la Terre, c’est l’éclipse." },
    { q: "Les volcans se situent principalement :", choices: ["au centre des plaques", "aux limites des plaques"], answer: 1, expl: "Les volcans (et les séismes) se concentrent aux <b>limites des plaques</b> tectoniques, là où le magma remonte, comme autour du Pacifique (« ceinture de feu »)." },
    { q: "Pour un vélo, cite la fonction d’usage et deux solutions techniques.", type: "open", model: "<p><b>Fonction d’usage</b> : permettre à une personne de se déplacer. <b>Solutions techniques</b> : le pédalier + la chaîne + les pignons transmettent le mouvement à la roue arrière ; les freins à patins (ou à disque) ralentissent la roue ; le guidon permet de diriger ; les pneus à chambre à air amortissent.</p>" }
  ],
  evaluation: [
    { q: "Durée d’une révolution de la Terre autour du Soleil :", choices: ["24 h", "29,5 jours", "environ 365 jours"], answer: 2, expl: "La Terre fait le tour du Soleil en <b>environ 365 jours</b> (365,25 : d’où l’année bissextile). 24 h, c’est sa rotation sur elle-même ; 29,5 jours, c’est la lunaison." },
    { q: "Le Soleil se lève :", choices: ["à l’est", "à l’ouest", "au nord"], answer: 0, expl: "Le Soleil se lève à l’<b>est</b> et se couche à l’ouest. C’est un mouvement apparent : en réalité, c’est la Terre qui tourne d’ouest en est." },
    { q: "La planète la plus proche du Soleil :", answers: ["Mercure"], expl: "<b>Mercure</b> est la première planète : c’est le « Me » de « Me Voici Toute Mouillée… »." },
    { q: "La Lune :", choices: ["produit sa lumière", "réfléchit la lumière du Soleil"], answer: 1, expl: "La Lune ne produit pas de lumière : elle <b>réfléchit</b> celle du Soleil, comme un miroir. Seules les étoiles produisent leur lumière." },
    { q: "En été (hémisphère nord), les jours sont :", choices: ["plus longs", "plus courts", "égaux aux nuits"], answer: 0, expl: "En été, notre hémisphère est incliné vers le Soleil : les jours sont <b>plus longs</b> et les rayons arrivent plus verticalement, d’où la chaleur." },
    { q: "Le climat se calcule sur une moyenne de :", choices: ["1 an", "10 ans", "30 ans"], answer: 2, expl: "La météo, c’est le temps d’un jour donné ; le <b>climat</b>, ce sont les conditions moyennes sur <b>30 ans</b>." },
    { q: "Dans le cycle de l’eau, la formation des nuages correspond à :", choices: ["l’évaporation", "la condensation", "l’infiltration"], answer: 1, expl: "La vapeur d’eau monte, se refroidit en altitude et se transforme en gouttelettes : c’est la <b>condensation</b>, qui forme les nuages. L’évaporation est l’étape d’avant." },
    { q: "« Permettre de se déplacer » est, pour une trottinette, :", choices: ["une solution technique", "sa fonction d’usage", "un matériau"], answer: 1, expl: "« À quoi sert l’objet ? » : c’est sa <b>fonction d’usage</b>. Les roues ou le guidon sont des solutions techniques, l’aluminium un matériau." }
  ]
});
