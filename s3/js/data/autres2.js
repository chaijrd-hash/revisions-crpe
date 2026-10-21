/* AUTRES DOMAINES — compléments : sciences, histoire-géographie-EMC, arts */

window.SCI.chapters.push({
  id: "s-corps",
  pos: 3.5,
  title: "Le corps humain, la santé et l’environnement",
  short: "Santé",
  sub: "Alimentation, microbes et défenses, hygiène, puberté, impact humain",
  objectifs: [
    "Expliquer l’<b>équilibre alimentaire</b> et le rôle des familles d’aliments.",
    "Comprendre les <b>micro-organismes</b>, la contamination et les défenses de l’organisme (vaccination).",
    "Relier les <b>activités humaines</b> à leurs effets sur l’environnement (climat, biodiversité)."
  ],
  lesson: `
<h2>1. L’alimentation</h2>
<ul><li>Les aliments apportent de l’<b>énergie</b> (glucides, lipides) et des matériaux pour construire le corps (<b>protéines</b>), ainsi que vitamines, sels minéraux, fibres et eau.</li>
<li>Familles d’aliments : fruits et légumes ; féculents ; produits laitiers ; viandes, poissons, œufs, légumineuses ; matières grasses ; produits sucrés ; boissons (l’eau est la seule indispensable).</li>
<li>Un repas équilibré associe plusieurs familles ; on limite le sucre, le sel et les graisses. Le petit-déjeuner aide à rester attentif le matin.</li></ul>

<h2>2. Les micro-organismes et les défenses</h2>
<ul><li>Les <b>micro-organismes</b> (bactéries, virus, champignons microscopiques) sont partout. Beaucoup sont utiles (digestion, fabrication du yaourt, du pain, du fromage) ; certains sont <b>pathogènes</b> (ils provoquent des maladies).</li>
<li><b>Contamination</b> : par l’air, le contact, l’eau, les aliments, une blessure. <b>Prévention</b> : lavage des mains, hygiène alimentaire (chaîne du froid), désinfection des plaies.</li>
<li><b>Défenses</b> : la peau et les muqueuses (barrières), puis le <b>système immunitaire</b> (globules blancs, anticorps). La <b>vaccination</b> prépare l’organisme à reconnaître un microbe. Les <b>antibiotiques</b> agissent contre les bactéries, <b>pas contre les virus</b>.</li></ul>

<h2>3. Grandir</h2>
<p>Le corps change à la <b>puberté</b> (entre 9 et 15 ans environ) sous l’effet des hormones : croissance, développement des organes reproducteurs, transformations différentes chez les filles et les garçons. À l’école, l’éducation à la sexualité et la santé est assurée avec des séances adaptées à l’âge.</p>
<p>Sommeil (10 à 12 h pour un enfant de 6-12 ans), activité physique, limitation des écrans et hygiène bucco-dentaire font partie de l’<b>éducation à la santé</b>.</p>

<h2>4. L’être humain et son environnement</h2>
<ul><li>Les activités humaines rejettent des <b>gaz à effet de serre</b> (dioxyde de carbone, méthane) qui renforcent l’effet de serre naturel : c’est le <b>réchauffement climatique</b>.</li>
<li>La <b>biodiversité</b> recule (destruction des habitats, pollution, espèces invasives, surexploitation).</li>
<li>Actions possibles à l’école : tri et réduction des déchets, compost, potager, économies d’énergie, mobilités douces ; <b>éco-délégués</b> et labellisation E3D (établissement en démarche de développement durable).</li></ul>
`,
  videos: [
    { t: "L’équilibre alimentaire", ch: "1 jour 1 question", q: "1 jour 1 question manger équilibré" },
    { t: "Microbes et système immunitaire", ch: "C’est pas sorcier", q: "c'est pas sorcier microbes système immunitaire vaccin" },
    { t: "Le réchauffement climatique expliqué", ch: "1 jour 1 question", q: "1 jour 1 question réchauffement climatique effet de serre" }
  ],
  resume: "<ul><li>Protéines = construction ; glucides et lipides = énergie.</li><li>Antibiotiques : bactéries seulement, pas virus.</li><li>Vaccination : prépare le système immunitaire.</li><li>Gaz à effet de serre → réchauffement climatique.</li></ul>",
  exercises: [
    { q: "Les aliments « bâtisseurs » qui construisent le corps sont riches en :", choices: ["protéines", "glucides", "fibres"], answer: 0, expl: "Les <b>protéines</b> (viande, poisson, œufs, légumineuses, produits laitiers) servent à construire et réparer le corps. Les glucides, eux, apportent surtout de l’énergie." },
    { q: "Un antibiotique est efficace contre :", choices: ["les virus", "les bactéries", "les deux"], answer: 1, expl: "Les antibiotiques agissent sur les <b>bactéries</b>, <b>pas sur les virus</b>. C’est pour ça qu’ils ne servent à rien contre un rhume ou la grippe, qui sont dus à des virus." },
    { q: "La fabrication du yaourt utilise :", choices: ["des bactéries", "des virus", "aucun micro-organisme"], answer: 0, expl: "Le lait devient yaourt grâce à des <b>bactéries</b> utiles (ferments lactiques). Tous les micro-organismes ne sont pas des microbes dangereux !" },
    { q: "Le principal gaz à effet de serre rejeté par les activités humaines :", choices: ["le dioxygène", "le dioxyde de carbone", "l’azote"], answer: 1, expl: "En brûlant pétrole, charbon et gaz, l’être humain rejette surtout du <b>dioxyde de carbone</b> (CO₂), qui renforce l’effet de serre. Le dioxygène, lui, n’est pas un gaz à effet de serre." },
    { q: "Propose une démarche d’investigation pour montrer aux élèves que les mains transportent des microbes.", type: "open", model: "<p>Question : « Nos mains sont-elles propres quand elles en ont l’air ? » Hypothèses des élèves. Expérience : poser un doigt non lavé sur une tranche de pain de mie (ou une boîte de gélose), un doigt lavé au savon sur une autre, et une tranche témoin non touchée ; enfermer dans des sachets fermés, étiquetés, observer pendant une à deux semaines (sans ouvrir les sachets). Résultat : des moisissures apparaissent surtout sur la tranche touchée sans lavage. Conclusion : les mains transportent des micro-organismes invisibles, le lavage au savon en élimine une grande partie.</p>" }
  ],
  evaluation: [
    { q: "La seule boisson indispensable :", answers: ["eau", "l’eau", "l'eau"], expl: "L’<b>eau</b> est la seule boisson dont le corps a vraiment besoin. Sodas et jus sont facultatifs et souvent très sucrés." },
    { q: "La première barrière contre les microbes :", choices: ["la peau", "le cœur", "l’estomac uniquement"], answer: 0, expl: "La <b>peau</b> (avec les muqueuses) empêche les microbes d’entrer : c’est la première ligne de défense. D’où l’importance de désinfecter une plaie." },
    { q: "Les globules blancs font partie :", choices: ["du système immunitaire", "du système digestif"], answer: 0, expl: "Les <b>globules blancs</b> repèrent et détruisent les microbes, ou fabriquent des anticorps : ils forment le <b>système immunitaire</b>." },
    { q: "La puberté est déclenchée par :", choices: ["les hormones", "l’alimentation seule", "le sport"], answer: 0, expl: "Ce sont les <b>hormones</b> (des messagers chimiques produits par le corps) qui déclenchent les transformations de la puberté, vers 9 à 15 ans." },
    { q: "Un recul du nombre d’espèces vivantes s’appelle une perte de :", answers: ["biodiversité", "la biodiversité"], expl: "La <b>biodiversité</b>, c’est la variété des êtres vivants. Destruction des habitats, pollution et espèces invasives la font reculer." }
  ]
});

window.SCI.chapters.push({
  id: "s-techno",
  pos: 4.5,
  title: "Technologie, numérique et didactique des sciences",
  short: "Techno & didactique",
  sub: "Objets techniques, programmation, numérique responsable, enseigner les sciences",
  objectifs: [
    "Décrire le <b>fonctionnement</b> d’un objet technique (chaîne d’énergie, d’information).",
    "Connaître les enjeux du <b>numérique</b> à l’école (programmation, citoyenneté numérique, Pix).",
    "Savoir conduire une séance de sciences : <b>représentations initiales</b>, cahier d’expériences, trace écrite."
  ],
  lesson: `
<h2>1. Comprendre un objet technique</h2>
<ul><li>Un objet technique répond à un <b>besoin</b> ; on décrit sa <b>fonction d’usage</b>, ses <b>fonctions techniques</b> et les <b>solutions</b> retenues (voir chapitre « La Terre, l’Univers et les objets techniques »).</li>
<li><b>Chaîne d’énergie</b> : alimenter (pile), distribuer (interrupteur), convertir (moteur), transmettre (engrenages, poulies, courroie).</li>
<li><b>Chaîne d’information</b> : acquérir (capteur), traiter (programme), communiquer (lumière, son).</li>
<li><b>Transmission du mouvement</b> : deux roues dentées qui engrènent tournent en sens inverse ; une petite roue entraînée par une grande tourne plus vite.</li></ul>

<h2>2. Le numérique à l’école</h2>
<ul><li><b>Programmation</b> : robots de sol (Bee-Bot, Blue-Bot) dès la maternelle et le cycle 2, Scratch au cycle 3 (voir chapitre d’algorithmique).</li>
<li><b>Citoyenneté numérique</b> : protéger ses données, respecter le droit à l’image, vérifier une information (repérer une infox), prévenir le cyberharcèlement.</li>
<li><b>Pix</b> : plateforme d’évaluation et de certification des compétences numériques (certification en fin de cycle 3 dès la 6ᵉ).</li>
<li>Sobriété : l’usage des écrans est limité et réfléchi, surtout chez les jeunes enfants.</li></ul>

<h2>3. Enseigner les sciences : la démarche en classe</h2>
<ol><li>Recueillir les <b>représentations initiales</b> (dessin individuel : « Dessine ce qu’il y a dans ton corps quand tu manges une pomme ») ; elles sont le point de départ, pas des erreurs à juger.</li>
<li>Faire émerger un <b>problème</b> à partir des différences entre représentations.</li>
<li>Investiguer (expérience, observation, documents) ; noter dans le <b>cahier d’expériences</b> : écrits personnels (hypothèses, schémas), écrits de groupe, écrits de référence.</li>
<li>Rédiger avec la classe la <b>trace écrite</b> (savoir institutionnalisé), avec un schéma légendé et titré.</li></ol>
<p>La fondation <b>La main à la pâte</b> (créée en 1996 à l’initiative de Georges Charpak) promeut cette démarche d’investigation à l’école.</p>
`,
  videos: [
    { t: "Engrenages et transmission du mouvement", ch: "Lumni", q: "engrenages transmission du mouvement technologie collège" },
    { t: "Programmer un robot Bee-Bot", ch: "Canopé", q: "Bee-Bot maternelle programmation séance" },
    { t: "Le cahier d’expériences", ch: "La main à la pâte", q: "la main à la pâte cahier d'expériences" }
  ],
  resume: "<ul><li>Chaîne d’énergie : alimenter, distribuer, convertir, transmettre.</li><li>Roues dentées qui engrènent : sens inverse.</li><li>Sciences : représentations initiales → problème → investigation → trace écrite.</li></ul>",
  exercises: [
    { q: "Deux roues dentées qui engrènent tournent :", choices: ["dans le même sens", "en sens inverse"], answer: 1, expl: "Les dents de l’une poussent les dents de l’autre : si la première tourne dans le sens des aiguilles d’une montre, la seconde tourne <b>en sens inverse</b>. Fais l’essai avec deux mains qui s’entraînent !" },
    { q: "Dans la chaîne d’information, le capteur sert à :", choices: ["acquérir une information", "convertir l’énergie", "transmettre un mouvement"], answer: 0, expl: "Le capteur <b>acquiert</b> une information (lumière, obstacle, température), comme nos sens. Convertir l’énergie et transmettre un mouvement relèvent de la chaîne d’énergie." },
    { q: "La plateforme qui certifie les compétences numériques :", answers: ["Pix"], expl: "<b>Pix</b> est la plateforme publique qui évalue et certifie les compétences numériques des élèves (et des adultes)." },
    { q: "Robot de sol programmable utilisé dès la maternelle :", choices: ["Bee-Bot", "Scratch", "Python"], answer: 0, expl: "La <b>Bee-Bot</b> est un petit robot abeille qu’on programme avec des flèches, sans écran : idéal dès la maternelle. Scratch et Python sont des langages sur ordinateur, pour plus grands." },
    { q: "Les dessins des élèves avant l’apprentissage s’appellent :", answers: ["représentations initiales", "conceptions initiales", "les représentations initiales"], expl: "Ce sont les <b>représentations initiales</b> (ou conceptions initiales) : elles montrent ce que l’élève pense déjà et servent de point de départ, pas d’erreurs à sanctionner." }
  ],
  evaluation: [
    { q: "Un moteur électrique, dans la chaîne d’énergie, sert à :", choices: ["alimenter", "convertir", "acquérir"], answer: 1, expl: "Le moteur transforme l’énergie électrique en mouvement : il <b>convertit</b>. La pile alimente, l’interrupteur distribue." },
    { q: "La fondation La main à la pâte a été lancée par :", choices: ["Georges Charpak", "Jules Ferry", "Marie Curie"], answer: 0, expl: "<b>Georges Charpak</b>, prix Nobel de physique 1992, a lancé La main à la pâte en 1996 pour développer la démarche d’investigation à l’école." },
    { q: "Un écrit de référence dans le cahier d’expériences est :", choices: ["l’hypothèse personnelle d’un élève", "le savoir validé par la classe", "un brouillon"], answer: 1, expl: "L’écrit de référence, c’est le <b>savoir validé</b> par la classe avec l’enseignant (la trace écrite). Les hypothèses personnelles sont des écrits personnels, qu’on ne corrige pas." },
    { q: "Une petite roue entraînée par une grande tourne :", choices: ["plus vite", "moins vite", "à la même vitesse"], answer: 0, expl: "Quand la grande roue fait un tour, la petite doit en faire plusieurs pour suivre : elle tourne <b>plus vite</b>. C’est le principe des vitesses du vélo." },
    { q: "Vérifier la source d’une information relève de :", choices: ["l’éducation aux médias et à l’information", "la géométrie"], answer: 0, expl: "Repérer qui parle, vérifier une info, débusquer une infox : c’est l’<b>éducation aux médias et à l’information</b> (EMI)." }
  ]
});

window.HG.chapters.push({
  id: "h-colonisations",
  pos: 2.5,
  title: "Empires, colonisations et décolonisations",
  short: "Colonisations",
  sub: "Traite et esclavage, empire colonial, décolonisation, mémoire",
  objectifs: [
    "Connaître les repères de la <b>traite atlantique</b> et de l’<b>esclavage</b>, jusqu’à leur abolition.",
    "Comprendre la constitution de l’<b>empire colonial français</b> et la <b>décolonisation</b>.",
    "Connaître les lois et journées de <b>mémoire</b>."
  ],
  lesson: `
<h2>1. La traite atlantique et l’esclavage (XVIᵉ-XIXᵉ s.)</h2>
<ul><li>Le <b>commerce triangulaire</b> relie l’Europe (départ de navires chargés de marchandises, ports de Nantes, Bordeaux, La Rochelle), l’Afrique (achat de captifs) et l’Amérique (vente des esclaves, travail forcé dans les plantations de sucre, coton, café).</li>
<li>Plus de 12 millions d’Africains déportés. Le <b>Code noir</b> (1685) réglemente l’esclavage dans les colonies françaises.</li>
<li>Révoltes : Saint-Domingue (Toussaint Louverture), qui devient <b>Haïti</b>, indépendante en 1804.</li>
<li>Abolitions : 1794 (Convention), rétablissement par Napoléon (1802), <b>abolition définitive en 1848</b> (Victor Schœlcher).</li>
<li>La <b>loi Taubira</b> (2001) reconnaît la traite et l’esclavage comme crimes contre l’humanité ; le <b>10 mai</b> est la journée nationale des mémoires de la traite, de l’esclavage et de leurs abolitions.</li></ul>

<h2>2. L’empire colonial français (XIXᵉ-XXᵉ s.)</h2>
<ul><li>Conquête de l’<b>Algérie</b> à partir de 1830 ; sous la IIIᵉ République, expansion en Afrique (AOF, AEF, Madagascar), en Indochine.</li>
<li>Justifications de l’époque (« mission civilisatrice ») ; réalités : domination, travail forcé, inégalité de droits (code de l’indigénat), mais aussi écoles, routes et hôpitaux pour une minorité.</li>
<li>L’empire atteint son apogée dans l’entre-deux-guerres (Exposition coloniale de 1931).</li></ul>

<h2>3. Les décolonisations</h2>
<ul><li>Après 1945 : guerre d’Indochine (défaite de Diên Biên Phu, 1954).</li>
<li><b>Guerre d’Algérie</b> (1954-1962), accords d’Évian et <b>indépendance en 1962</b>.</li>
<li>Indépendances de la plupart des pays d’Afrique subsaharienne en <b>1960</b>.</li></ul>

<h2>4. Enseigner ces questions</h2>
<p>Ces sujets sont sensibles : l’enseignant s’appuie sur des <b>sources</b> variées, distingue <b>histoire</b> (connaissance critique) et <b>mémoire</b> (souvenir porté par des groupes), et favorise le débat dans le respect de chacun.</p>
`,
  videos: [
    { t: "Le commerce triangulaire", ch: "Lumni / Les Fondamentaux", q: "Lumni commerce triangulaire traite négrière" },
    { t: "L’abolition de l’esclavage en 1848", ch: "Lumni", q: "Lumni abolition esclavage 1848 Schoelcher" },
    { t: "La décolonisation", ch: "Les Bons Profs", q: "les bons profs décolonisation résumé" }
  ],
  resume: "<ul><li>Commerce triangulaire : Europe → Afrique → Amérique.</li><li>Code noir 1685 ; Haïti 1804 ; abolition définitive 1848.</li><li>Loi Taubira 2001 ; 10 mai.</li><li>Indépendances africaines 1960 ; Algérie 1962.</li></ul>",
  exercises: [
    { q: "L’abolition définitive de l’esclavage en France est due à :", answers: ["Victor Schœlcher", "Schœlcher", "Schoelcher", "Victor Schoelcher"], expl: "C’est <b>Victor Schœlcher</b> qui fait signer le décret d’abolition définitive en <b>1848</b>, après le rétablissement de l’esclavage par Napoléon en 1802." },
    { q: "Le Code noir date de :", answers: ["1685"], expl: "Le Code noir est promulgué en <b>1685</b>, sous Louis XIV : il réglemente l’esclavage dans les colonies françaises et fait de l’esclave un « bien meuble »." },
    { q: "La loi Taubira reconnaît la traite et l’esclavage comme :", choices: ["des faits divers", "des crimes contre l’humanité", "des erreurs économiques"], answer: 1, expl: "La loi Taubira (2001) reconnaît la traite et l’esclavage comme des <b>crimes contre l’humanité</b> et demande qu’ils soient enseignés." },
    { q: "Indépendance de l’Algérie :", answers: ["1962"], expl: "Après une guerre de huit ans (1954-1962), les accords d’Évian mènent à l’<b>indépendance de l’Algérie en 1962</b>." },
    { q: "Ordre du commerce triangulaire (départ d’Europe) :", choices: ["Europe → Afrique → Amérique → Europe", "Europe → Amérique → Afrique → Europe", "Afrique → Europe → Amérique"], answer: 0, expl: "Les navires partent d’<b>Europe</b> avec des marchandises, achètent des captifs en <b>Afrique</b>, les vendent en <b>Amérique</b> et reviennent en Europe avec sucre, coton, café." }
  ],
  evaluation: [
    { q: "Première République noire indépendante (1804) :", answers: ["Haïti"], expl: "Après la révolte des esclaves de Saint-Domingue (Toussaint Louverture), la colonie devient <b>Haïti</b>, indépendante en 1804." },
    { q: "Journée nationale des mémoires de la traite et de l’esclavage :", choices: ["10 mai", "8 mai", "11 novembre"], answer: 0, expl: "Le <b>10 mai</b>, date d’adoption de la loi Taubira en 2001. Le 8 mai commémore 1945, le 11 novembre l’armistice de 1918." },
    { q: "La conquête de l’Algérie commence en :", choices: ["1830", "1914", "1954"], answer: 0, expl: "La conquête de l’Algérie commence en <b>1830</b> (prise d’Alger). 1954, c’est le début de la guerre d’indépendance." },
    { q: "De nombreux pays d’Afrique deviennent indépendants en :", answers: ["1960"], expl: "<b>1960</b> est surnommée « l’année de l’Afrique » : la plupart des colonies françaises d’Afrique subsaharienne deviennent indépendantes." },
    { q: "La mémoire, à la différence de l’histoire, est :", choices: ["une connaissance critique fondée sur des sources", "un souvenir porté par des groupes"], answer: 1, expl: "La <b>mémoire</b> est un souvenir porté par des groupes, chargé d’émotion. L’<b>histoire</b> est une connaissance critique, construite à partir de sources." }
  ]
});

window.HG.chapters.push({
  id: "h-didactique",
  pos: 4.5,
  title: "Enseigner l’histoire, la géographie et l’EMC",
  short: "Didactique HG",
  sub: "Frise, sources, croquis, paysage, débat",
  objectifs: [
    "Construire le <b>temps historique</b> avec les élèves (frise, repères).",
    "Faire analyser une <b>source</b> et un <b>paysage</b> ; réaliser un croquis.",
    "Mener un <b>débat réglé</b> ou une discussion à visée philosophique en EMC."
  ],
  lesson: `
<h2>1. Construire le temps</h2>
<ul><li>Cycle 1 et 2 : temps vécu (rituels du calendrier, emploi du temps), <b>chronologie</b> d’une journée, d’une semaine, de sa vie (frise personnelle), générations (arbre généalogique), « avant / maintenant ».</li>
<li>Cycle 3 : temps historique : la <b>frise chronologique</b> à l’échelle (un même nombre d’années = une même longueur), les grandes périodes, les siècles.</li>
<li>Les élèves confondent souvent la durée et l’ancienneté : la frise à l’échelle les aide.</li></ul>

<h2>2. Analyser une source historique</h2>
<p>Méthode en 4 questions : <b>Qui ?</b> (auteur) <b>Quand ?</b> (date, contexte) <b>Quoi ?</b> (nature et contenu) <b>Pourquoi ?</b> (intention, destinataire, limites). Ex. : une enluminure médiévale montre la vision de ceux qui l’ont commandée (souvent l’Église ou un seigneur), pas forcément la réalité de la vie paysanne.</p>

<h2>3. La géographie à l’école</h2>
<ul><li>On part de l’<b>espace proche</b> (la classe, l’école, le quartier : plan, maquette, sortie) pour aller vers des espaces plus lointains.</li>
<li><b>Lire un paysage</b> : plans (premier plan, second plan, arrière-plan), éléments naturels et humains, activités, puis réaliser un <b>croquis</b> avec légende organisée.</li>
<li>Outils : cartes, plans, globe, photographies aériennes, Géoportail, Google Earth.</li>
<li>Toujours poser la question « <b>Comment les hommes habitent-ils ce lieu ?</b> ».</li></ul>

<h2>4. Enseigner l’EMC</h2>
<ul><li><b>Débat réglé</b> : une question, des règles de prise de parole, des rôles (président de séance, secrétaire, observateurs), la recherche d’arguments.</li>
<li><b>Discussion à visée philosophique</b> (DVP) : « Qu’est-ce qu’un ami ? », « Est-il juste d’être puni pour les autres ? » : les élèves apprennent à argumenter et à écouter.</li>
<li><b>Conseil d’élèves / conseil de coopération</b> : régler la vie de la classe, proposer des projets.</li>
<li>Étude de cas, jeux de rôle, dilemmes moraux, liens avec la littérature (albums sur la différence, le harcèlement).</li></ul>
`,
  videos: [
    { t: "Construire une frise chronologique en classe", ch: "Canopé", q: "frise chronologique à l'échelle école cycle 3" },
    { t: "Lire et dessiner un paysage", ch: "Lumni", q: "lecture de paysage croquis géographie école" },
    { t: "Débat réglé et discussion à visée philosophique", ch: "Canopé", q: "débat réglé discussion à visée philosophique école EMC" }
  ],
  resume: "<ul><li>Frise à l’échelle : durée = longueur.</li><li>Source : qui, quand, quoi, pourquoi.</li><li>Paysage : plans, éléments naturels et humains, croquis légendé.</li><li>EMC : débat réglé, DVP, conseil d’élèves.</li></ul>",
  exercises: [
    { q: "Sur une frise à l’échelle, une même durée est représentée par :", choices: ["une même longueur", "une même couleur", "n’importe quelle longueur"], answer: 0, expl: "Sur une frise à l’échelle, <b>une même durée = une même longueur</b> (par exemple 1 cm pour 100 ans). C’est ce qui permet de « voir » les durées." },
    { q: "Les 4 questions pour analyser une source :", choices: ["qui, quand, quoi, pourquoi", "où, combien, comment, lequel"], answer: 0, expl: "<b>Qui</b> (auteur), <b>quand</b> (date, contexte), <b>quoi</b> (nature, contenu), <b>pourquoi</b> (intention, destinataire) : ces 4 questions aident à garder un regard critique." },
    { q: "Dans la lecture de paysage, l’arrière-plan est :", choices: ["la partie la plus proche", "la partie la plus éloignée"], answer: 1, expl: "L’<b>arrière-plan</b> est la partie la plus <b>éloignée</b>, en haut de la photo en général. Le premier plan, c’est le plus proche." },
    { q: "« Qu’est-ce qu’être courageux ? » est un sujet typique de :", choices: ["discussion à visée philosophique", "croquis", "frise chronologique"], answer: 0, expl: "Une question ouverte sur une notion (le courage, l’amitié, la justice), sans bonne réponse unique : c’est une <b>discussion à visée philosophique</b> (DVP)." },
    { q: "Propose une séance de géographie au CE1 sur le quartier de l’école.", type: "open", model: "<p>Objectif : se repérer dans l’espace proche et le représenter. 1) Sortie dans le quartier avec photos des lieux importants (mairie, boulangerie, parc). 2) En classe, placer les photos sur un plan simplifié du quartier, tracer le trajet de l’école à la mairie. 3) Construire une légende avec des pictogrammes. 4) Trace écrite : « Le plan représente le quartier vu d’en haut. » Prolongement : comparer avec une photo aérienne (Géoportail).</p>" }
  ],
  evaluation: [
    { q: "Au cycle 2, on travaille surtout :", choices: ["le temps vécu et proche", "la Révolution française en détail"], answer: 0, expl: "Au cycle 2, on part du <b>temps vécu et proche</b> (journée, semaine, sa propre vie, les générations). Le temps historique avec les grandes périodes vient au cycle 3." },
    { q: "Un croquis géographique doit avoir :", choices: ["une légende organisée et un titre", "des couleurs vives sans légende"], answer: 0, expl: "Un croquis sans légende ne veut rien dire : il faut <b>un titre</b> et <b>une légende organisée</b> qui explique chaque couleur et figuré." },
    { q: "Le président de séance dans un débat réglé :", choices: ["distribue la parole", "donne la bonne réponse"], answer: 0, expl: "Le président de séance <b>distribue la parole</b> et fait respecter les règles. Il n’est pas là pour donner la bonne réponse." },
    { q: "Une enluminure médiévale est une source :", choices: ["primaire", "secondaire"], answer: 0, expl: "Une source <b>primaire</b> date de l’époque étudiée : c’est le cas d’une enluminure du Moyen Âge. Un manuel d’histoire actuel serait une source secondaire." },
    { q: "La géographie à l’école part généralement :", choices: ["de l’espace proche", "des continents lointains"], answer: 0, expl: "On part de l’<b>espace proche</b> (classe, école, quartier), que l’élève peut observer et parcourir, avant d’aller vers des espaces lointains." }
  ]
});

window.ARTS.chapters.push({
  id: "a-histoire-arts",
  pos: 1.5,
  title: "Histoire des arts : repères et œuvres clés",
  short: "Histoire des arts",
  sub: "Architecture, sculpture, peinture, cinéma : œuvres à connaître",
  objectifs: [
    "Connaître une <b>œuvre repère</b> par grande période et par domaine artistique.",
    "Savoir présenter une œuvre en lien avec son <b>contexte historique</b>.",
    "Construire le parcours culturel des élèves (PEAC)."
  ],
  lesson: `
<h2>1. Une œuvre par période</h2>
<table><tr><th>Période</th><th>Œuvres repères</th></tr>
<tr><td>Préhistoire</td><td>Grotte Chauvet ; Lascaux ; menhirs de Carnac</td></tr>
<tr><td>Antiquité</td><td>Pyramides de Gizeh ; Parthénon (Athènes) ; Colisée et pont du Gard (Romains) ; Vénus de Milo</td></tr>
<tr><td>Moyen Âge</td><td>Tapisserie de Bayeux (XIᵉ s.) ; abbaye de Cluny (roman) ; cathédrale de Chartres, Notre-Dame de Paris (gothique) ; châteaux forts</td></tr>
<tr><td>Renaissance</td><td><i>La Joconde</i> (Léonard de Vinci) ; chapelle Sixtine (Michel-Ange) ; château de Chambord</td></tr>
<tr><td>XVIIᵉ - XVIIIᵉ</td><td>Château de Versailles ; <i>La Jeune Fille à la perle</i> (Vermeer) ; musique de Lully, Bach, Mozart</td></tr>
<tr><td>XIXᵉ</td><td><i>La Liberté guidant le peuple</i> (Delacroix, 1830) ; <i>Impression, soleil levant</i> (Monet, 1872) ; tour Eiffel (1889) ; <i>La Nuit étoilée</i> (Van Gogh) ; les frères Lumière inventent le cinématographe (1895)</td></tr>
<tr><td>XXᵉ - XXIᵉ</td><td><i>Guernica</i> (Picasso, 1937) ; <i>Fontaine</i> (Duchamp, 1917) ; <i>La Trahison des images</i> (Magritte) ; Le Corbusier (architecture) ; Niki de Saint Phalle ; Keith Haring ; street art</td></tr></table>

<h2>2. Présenter une œuvre en 5 points</h2>
<ol><li><b>Identité</b> : titre, artiste, date, technique, dimensions, lieu.</li>
<li><b>Description</b> : ce que l’on voit, composition, couleurs.</li>
<li><b>Contexte</b> : événement historique, mouvement artistique.</li>
<li><b>Interprétation</b> : message, émotion, symboles.</li>
<li><b>Mise en relation</b> avec d’autres œuvres (même thème, même époque).</li></ol>
<p>Exemple : <i>Guernica</i> (1937), huile sur toile en noir et gris, peinte par Picasso après le bombardement de la ville basque de Guernica pendant la guerre d’Espagne : corps disloqués, cris, cheval agonisant ; l’œuvre dénonce l’horreur de la guerre et la souffrance des civils.</p>

<h2>3. Le PEAC à l’école</h2>
<p>Le <b>parcours d’éducation artistique et culturelle</b> repose sur 3 piliers : <b>rencontrer</b> (œuvres, artistes, lieux culturels : musée, cinéma, concert), <b>pratiquer</b> (arts plastiques, chant, théâtre, danse) et <b>connaître</b> (repères, vocabulaire). Dispositifs : École et cinéma, chorales, ADAGE (application de suivi du parcours), « Pass Culture » au collège.</p>
`,
  videos: [
    { t: "Les petits secrets des grands tableaux", ch: "Arte", q: "Les petits secrets des grands tableaux Arte" },
    { t: "Guernica expliqué", ch: "Lumni", q: "Guernica Picasso expliqué histoire des arts" },
    { t: "L’art roman et l’art gothique", ch: "Lumni", q: "art roman art gothique différences" }
  ],
  resume: "<ul><li>Une œuvre par période : Lascaux, Parthénon, Bayeux, La Joconde, Versailles, Monet, Guernica.</li><li>Présenter : identité, description, contexte, interprétation, mise en relation.</li><li>PEAC : rencontrer, pratiquer, connaître.</li></ul>",
  exercises: [
    { q: "La tapisserie de Bayeux date du :", choices: ["Moyen Âge", "XIXᵉ siècle", "XXᵉ siècle"], answer: 0, expl: "La tapisserie de Bayeux est une broderie du <b>XIᵉ siècle</b>, donc du <b>Moyen Âge</b> : elle raconte la conquête de l’Angleterre par Guillaume le Conquérant (1066)." },
    { q: "« Guernica » dénonce :", choices: ["la guerre", "la révolution industrielle", "la colonisation"], answer: 0, expl: "Picasso peint <i>Guernica</i> en 1937 après le bombardement de cette ville basque pendant la guerre d’Espagne : l’œuvre dénonce l’horreur de <b>la guerre</b> et la souffrance des civils." },
    { q: "La tour Eiffel a été construite pour l’Exposition universelle de :", answers: ["1889"], expl: "La tour Eiffel a été construite pour l’Exposition universelle de <b>1889</b>, qui célébrait le centenaire de la Révolution française (1789)." },
    { q: "Le cinématographe a été inventé par :", choices: ["les frères Lumière", "Léonard de Vinci", "Monet"], answer: 0, expl: "Les <b>frères Lumière</b> (Auguste et Louis) inventent le cinématographe et organisent la première projection publique en <b>1895</b>." },
    { q: "Présente « La Liberté guidant le peuple » en 5 lignes.", type: "open", model: "<p>Huile sur toile d’<b>Eugène Delacroix</b> (1830), conservée au musée du Louvre. Elle représente les Trois Glorieuses, la révolution de juillet 1830 à Paris : une femme allégorique, la Liberté, coiffée d’un bonnet phrygien et brandissant le drapeau tricolore, guide le peuple (ouvrier, bourgeois, enfant) sur une barricade. Œuvre romantique (mouvement, émotion), elle est devenue un symbole de la République et inspire Marianne.</p>" }
  ],
  evaluation: [
    { q: "Le Parthénon se trouve à :", choices: ["Rome", "Athènes", "Paris"], answer: 1, expl: "Le Parthénon est un temple grec construit sur l’Acropole d’<b>Athènes</b>, dédié à la déesse Athéna. Le Colisée, lui, est à Rome." },
    { q: "Le château de Chambord est un monument de la :", choices: ["Renaissance", "Préhistoire", "XXᵉ siècle"], answer: 0, expl: "Chambord a été construit sous François Iᵉʳ, au XVIᵉ siècle : c’est un joyau de la <b>Renaissance</b>, avec son célèbre escalier à double révolution." },
    { q: "Auteur de « La Nuit étoilée » :", answers: ["Van Gogh", "Vincent van Gogh"], expl: "<i>La Nuit étoilée</i> (1889) est de <b>Vincent van Gogh</b>, reconnaissable à ses ciels tourbillonnants et à sa touche épaisse." },
    { q: "Les 3 piliers du PEAC :", choices: ["rencontrer, pratiquer, connaître", "lire, écrire, compter"], answer: 0, expl: "Le PEAC repose sur trois piliers : <b>rencontrer</b> des œuvres et des artistes, <b>pratiquer</b> soi-même, et <b>connaître</b> (repères, vocabulaire)." },
    { q: "Une cathédrale aux grandes verrières et arcs brisés est de style :", choices: ["roman", "gothique"], answer: 1, expl: "Arcs brisés (en pointe), grandes verrières, élan vers le haut : c’est le <b>gothique</b>. Le roman a des arcs en plein cintre (arrondis), des murs épais et peu de fenêtres." }
  ]
});
