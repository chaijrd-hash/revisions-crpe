/* ARTS (arts plastiques, éducation musicale, histoire des arts) et EPS */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "arts",
  name: "Arts & EPS",
  icon: "🎨",
  intro: "<p>Les arts plastiques, l’éducation musicale, l’histoire des arts et l’EPS font aussi partie des <b>domaines d’enseignement</b> du professeur des écoles. Ils peuvent apparaître à l’écrit (autres domaines) et surtout à l’<b>entretien</b>. On attend une culture de base, du vocabulaire précis et une idée claire de ce qu’on fait en classe.</p>",
  chapters: []
});
window.ARTS = window.SUBJECTS[window.SUBJECTS.length - 1];

window.ARTS.chapters.push({
  id: 1,
  title: "Arts plastiques et histoire des arts",
  short: "Arts plastiques",
  sub: "Vocabulaire plastique, grands mouvements, analyse d’œuvre",
  objectifs: [
    "Maîtriser le vocabulaire plastique (couleurs primaires, complémentaires, plans, cadrage…).",
    "Situer les grands mouvements artistiques et quelques œuvres repères.",
    "Analyser une œuvre selon une méthode simple (identifier, décrire, interpréter)."
  ],
  lesson: `
<h2>1. La couleur</h2>
<ul><li><b>Couleurs primaires</b> (en peinture) : <b>cyan (bleu), magenta (rouge), jaune</b>. On ne peut pas les obtenir par mélange.</li>
<li><b>Secondaires</b> : vert (bleu + jaune), orange (rouge + jaune), violet (rouge + bleu).</li>
<li><b>Complémentaires</b> : face à face sur le cercle chromatique : rouge/vert, bleu/orange, jaune/violet. Juxtaposées, elles se renforcent (contraste).</li>
<li>Couleurs <b>chaudes</b> (rouge, orange, jaune) / <b>froides</b> (bleu, vert, violet). <b>Camaïeu</b> : nuances d’une même couleur.</li></ul>

<h2>2. Le vocabulaire de l’image</h2>
<p><b>Plans</b> : premier plan, second plan, arrière-plan. <b>Cadrage</b> : plan d’ensemble, plan moyen, gros plan. <b>Angle de vue</b> : plongée (vu d’en haut), contre-plongée (vu d’en bas). <b>Composition</b> : lignes de force, perspective (point de fuite, inventée à la Renaissance), symétrie. <b>Support, médium, outil, geste</b>.</p>

<h2>3. Les grands repères</h2>
<table><tr><th>Période / mouvement</th><th>Repères</th></tr>
<tr><td>Préhistoire</td><td>grottes de Chauvet et Lascaux</td></tr>
<tr><td>Antiquité</td><td>pyramides d’Égypte, Parthénon, mosaïques romaines</td></tr>
<tr><td>Moyen Âge</td><td>art roman puis gothique (Notre-Dame, vitraux), enluminures, tapisserie de Bayeux</td></tr>
<tr><td>Renaissance</td><td>Léonard de Vinci (<i>La Joconde</i>), Michel-Ange, perspective</td></tr>
<tr><td>Classicisme / Baroque</td><td>Versailles, Rembrandt, Vermeer</td></tr>
<tr><td>XIXᵉ s.</td><td>Romantisme (Delacroix, <i>La Liberté guidant le peuple</i>), Réalisme (Courbet), <b>Impressionnisme</b> (Monet, <i>Impression, soleil levant</i>, 1872), Van Gogh</td></tr>
<tr><td>XXᵉ s.</td><td>Cubisme (Picasso, <i>Guernica</i>), Surréalisme (Magritte, Dalí), Art abstrait (Kandinsky, Mondrian), Pop art (Warhol), Land art (Goldsworthy)</td></tr></table>

<h2>4. Analyser une œuvre (méthode simple)</h2>
<ol><li><b>Identifier</b> : titre, artiste, date, technique, dimensions, lieu de conservation.</li><li><b>Décrire</b> : ce que l’on voit (plans, couleurs, composition, personnages).</li><li><b>Interpréter</b> : le sens, l’émotion, le contexte historique, l’intention de l’artiste.</li><li><b>Mettre en relation</b> avec d’autres œuvres.</li></ol>
<p>À l’école, la pratique plastique part d’une <b>incitation</b> ouverte (« Fais disparaître un objet »), donne place à l’expérimentation, puis à la <b>verbalisation</b> et à la rencontre avec des œuvres. Le <b>Parcours d’éducation artistique et culturelle (PEAC)</b> repose sur 3 piliers : <b>rencontrer</b> (œuvres, artistes), <b>pratiquer</b>, <b>s’approprier</b> (connaissances).</p>
`,
  videos: [
    { t: "Le cercle chromatique et les complémentaires", ch: "Lumni", q: "cercle chromatique couleurs primaires complémentaires" },
    { t: "L’impressionnisme", ch: "Lumni / Les petits secrets des grands tableaux", q: "impressionnisme Monet expliqué" },
    { t: "Analyser une œuvre d’art", ch: "Les Bons Profs", q: "méthode analyse d'une oeuvre d'art histoire des arts" }
  ],
  resume: "<ul><li>Primaires : cyan, magenta, jaune ; complémentaires face à face.</li><li>Impressionnisme : Monet, 1872.</li><li>PEAC : rencontrer, pratiquer, s’approprier.</li></ul>",
  exercises: [
    { q: "Complémentaire du rouge :", answers: ["vert", "le vert"], expl: "Sur le cercle chromatique, la complémentaire d’une couleur est en <b>face</b> d’elle. Le rouge est opposé au <b>vert</b> (mélange des deux autres primaires, bleu + jaune)." },
    { q: "Bleu + jaune donnent :", answers: ["vert", "le vert"], expl: "<b>Bleu + jaune = vert</b>, une couleur secondaire. Retiens aussi : rouge + jaune = orange, rouge + bleu = violet." },
    { q: "Une vue « d’en bas vers le haut » est une :", choices: ["plongée", "contre-plongée"], answer: 1, expl: "En <b>contre-plongée</b>, on regarde d’en bas vers le haut : le sujet paraît plus grand, plus imposant. La plongée, c’est l’inverse (vu d’en haut)." },
    { q: "Peintre de « Impression, soleil levant » :", answers: ["Monet", "Claude Monet"], expl: "<b>Claude Monet</b> peint <i>Impression, soleil levant</i> en 1872 : ce tableau a donné son nom au mouvement impressionniste." },
    { q: "Les 3 piliers du PEAC :", choices: ["rencontrer, pratiquer, s’approprier", "lire, écrire, compter", "observer, copier, exposer"], answer: 0, expl: "Le PEAC repose sur <b>rencontrer</b> (œuvres, artistes, lieux), <b>pratiquer</b> et <b>s’approprier</b> des connaissances. « Lire, écrire, compter », ce sont les fondamentaux, pas le PEAC." },
    { q: "Picasso est associé au :", choices: ["cubisme", "impressionnisme", "pop art"], answer: 0, expl: "Avec Braque, <b>Picasso</b> invente le <b>cubisme</b> : il représente les objets en formes géométriques, vus sous plusieurs angles à la fois." }
  ],
  evaluation: [
    { q: "Complémentaire du bleu :", answers: ["orange", "l’orange", "l'orange"], expl: "Le bleu est en face de l’<b>orange</b> sur le cercle chromatique (orange = rouge + jaune, les deux autres primaires)." },
    { q: "Mouvement de Magritte et Dalí :", answers: ["surréalisme", "le surréalisme"], expl: "Magritte et Dalí sont des peintres du <b>surréalisme</b> : ils représentent le rêve, l’étrange, l’inattendu (une pipe qui « n’est pas une pipe », des montres molles)." },
    { q: "La perspective à point de fuite se développe pendant :", choices: ["le Moyen Âge", "la Renaissance", "le XXᵉ siècle"], answer: 1, expl: "La perspective à point de fuite est mise au point à la <b>Renaissance</b> (XVᵉ siècle, en Italie) pour donner l’illusion de la profondeur." },
    { q: "Auteur de « La Liberté guidant le peuple » :", answers: ["Delacroix", "Eugène Delacroix"], expl: "<b>Eugène Delacroix</b>, peintre romantique, peint <i>La Liberté guidant le peuple</i> en 1830, en hommage à la révolution de Juillet (les Trois Glorieuses)." },
    { q: "Art qui utilise la nature comme matériau (branches, pierres) :", answers: ["land art", "le land art"], expl: "Dans le <b>land art</b>, l’artiste crée dans et avec la nature (feuilles, pierres, branches), comme Andy Goldsworthy. Les œuvres sont souvent éphémères et photographiées." },
    { q: "Couleur chaude :", choices: ["bleu", "orange", "vert"], answer: 1, expl: "Les couleurs <b>chaudes</b> rappellent le feu et le soleil : rouge, <b>orange</b>, jaune. Bleu et vert sont des couleurs froides (l’eau, la glace)." }
  ]
});

window.ARTS.chapters.push({
  id: 2,
  title: "Éducation musicale",
  short: "Musique",
  sub: "Paramètres du son, familles d’instruments, voix, écoute",
  objectifs: [
    "Connaître les <b>paramètres du son</b> (hauteur, durée, intensité, timbre).",
    "Classer les instruments en <b>familles</b>.",
    "Savoir ce qu’on fait en classe : chanter, écouter, créer."
  ],
  lesson: `
<h2>1. Les 4 paramètres du son</h2>
<table><tr><th>Paramètre</th><th>Ce qu’il décrit</th><th>Vocabulaire</th></tr>
<tr><td><b>Hauteur</b></td><td>grave ou aigu (fréquence)</td><td>grave / aigu</td></tr>
<tr><td><b>Durée</b></td><td>long ou court</td><td>rythme, tempo (lent / rapide)</td></tr>
<tr><td><b>Intensité</b></td><td>fort ou faible (volume)</td><td>piano (doux) / forte (fort), crescendo</td></tr>
<tr><td><b>Timbre</b></td><td>ce qui distingue deux instruments jouant la même note</td><td>la « couleur » du son</td></tr></table>
<p>⚠ Confusion fréquente : « parler plus haut » au sens de « plus fort » mélange hauteur et intensité.</p>

<h2>2. Les familles d’instruments</h2>
<ul><li><b>Cordes</b> : frottées (violon, alto, violoncelle, contrebasse), pincées (guitare, harpe), frappées (piano).</li>
<li><b>Vents</b> : <b>bois</b> (flûte, clarinette, hautbois, basson, saxophone) et <b>cuivres</b> (trompette, cor, trombone, tuba).</li>
<li><b>Percussions</b> : à hauteur déterminée (xylophone, timbales) ou non (tambour, cymbales, triangle).</li></ul>
<p>Œuvres classiques pour la classe : <i>Pierre et le Loup</i> (Prokofiev, chaque personnage = un instrument), <i>Le Carnaval des animaux</i> (Saint-Saëns), <i>Les Quatre Saisons</i> (Vivaldi), <i>Le Boléro</i> (Ravel, crescendo).</p>

<h2>3. En classe</h2>
<p>Les programmes reposent sur : <b>chanter</b> (la voix est le premier instrument ; chorale ; plan « chorale à l’école »), <b>écouter, comparer</b> (écoute active : repérer instruments, tempo, nuances), <b>explorer et imaginer</b> (jouer avec sa voix, des objets sonores), <b>échanger, partager</b>. Apprendre un chant : écouter, apprendre par phrases musicales en imitation, mémoriser, interpréter.</p>
`,
  videos: [
    { t: "Les paramètres du son", ch: "Lumni", q: "paramètres du son hauteur durée intensité timbre éducation musicale" },
    { t: "Pierre et le Loup", ch: "Orchestre / Radio France", q: "Pierre et le loup Prokofiev instruments" },
    { t: "Les familles d’instruments", ch: "Lumni", q: "familles d'instruments orchestre cordes vents percussions" }
  ],
  resume: "<ul><li>Hauteur, durée, intensité, timbre.</li><li>Cordes / vents (bois, cuivres) / percussions.</li><li>Chanter, écouter, explorer, échanger.</li></ul>",
  exercises: [
    { q: "Le paramètre « grave / aigu » est :", choices: ["l’intensité", "la hauteur", "le timbre"], answer: 1, expl: "La <b>hauteur</b> d’un son, c’est grave ou aigu. Piège : « parler plus haut » au sens de « plus fort », c’est l’intensité, pas la hauteur !" },
    { q: "Le paramètre qui distingue une flûte d’un violon jouant la même note :", answers: ["timbre", "le timbre"], expl: "Même note, même volume, et pourtant on les reconnaît : c’est le <b>timbre</b>, la « couleur » propre à chaque instrument ou à chaque voix." },
    { q: "La clarinette appartient aux :", choices: ["bois", "cuivres", "cordes"], answer: 0, expl: "La clarinette est en bois et fonctionne avec une anche : elle fait partie des <b>bois</b>. Les cuivres (trompette, trombone) se jouent avec une embouchure où vibrent les lèvres." },
    { q: "Le piano est un instrument à cordes :", choices: ["frottées", "pincées", "frappées"], answer: 2, expl: "Quand on appuie sur une touche, un petit marteau <b>frappe</b> une corde : le piano est un instrument à cordes <b>frappées</b>." },
    { q: "Œuvre où chaque personnage est représenté par un instrument :", choices: ["Le Boléro", "Pierre et le Loup", "Les Quatre Saisons"], answer: 1, expl: "Dans <i>Pierre et le Loup</i> (Prokofiev), chaque personnage a son instrument : l’oiseau la flûte, le canard le hautbois, le chat la clarinette, le loup les cors…" }
  ],
  evaluation: [
    { q: "« Forte » signifie :", choices: ["fort", "rapide", "aigu"], answer: 0, expl: "En musique, <i>forte</i> (mot italien) veut dire <b>fort</b>, et <i>piano</i> doux. La vitesse, c’est le tempo ; l’aigu, c’est la hauteur." },
    { q: "Le saxophone (en métal) est classé dans les :", choices: ["bois", "cuivres"], answer: 0, expl: "Son anche le classe dans les bois." },
    { q: "Le tempo désigne :", choices: ["la vitesse", "le volume", "la hauteur"], answer: 0, expl: "Le <b>tempo</b> est la <b>vitesse</b> d’exécution d’un morceau (lent, modéré, rapide). Le volume, c’est l’intensité." },
    { q: "Compositeur du Boléro :", answers: ["Ravel", "Maurice Ravel"], expl: "Le <i>Boléro</i> est de <b>Maurice Ravel</b> (1928) : une même mélodie répétée avec un grand crescendo, parfait pour travailler l’intensité et le timbre." },
    { q: "Le premier instrument travaillé à l’école est :", answers: ["la voix", "voix"], expl: "La <b>voix</b> est le premier instrument de l’élève : chanter est au cœur de l’éducation musicale à l’école (chants, chorale)." }
  ]
});

window.ARTS.chapters.push({
  id: 3,
  title: "Éducation physique et sportive (EPS)",
  short: "EPS",
  sub: "Champs d’apprentissage, sécurité, savoir nager",
  objectifs: [
    "Connaître les <b>4 champs d’apprentissage</b> de l’EPS.",
    "Connaître les règles de <b>sécurité</b> et l’attestation du <b>savoir nager</b>.",
    "Construire une séance d’EPS (échauffement, corps de séance, retour au calme)."
  ],
  lesson: `
<h2>1. Les 4 champs d’apprentissage (cycles 2 à 4)</h2>
<ol><li><b>Produire une performance optimale, mesurable à une échéance donnée</b> : courir vite, sauter loin, lancer loin (athlétisme), natation de vitesse.</li>
<li><b>Adapter ses déplacements à des environnements variés</b> : course d’orientation, natation, vélo, escalade, activités nautiques.</li>
<li><b>S’exprimer devant les autres par une prestation artistique et/ou acrobatique</b> : danse, gymnastique, arts du cirque.</li>
<li><b>Conduire et maîtriser un affrontement collectif ou interindividuel</b> : jeux collectifs (handball, basket, football, rugby), jeux de raquettes, lutte.</li></ol>
<p>À l’école maternelle, on parle de « <b>Agir, s’exprimer, comprendre à travers l’activité physique</b> ».</p>

<h2>2. Les objectifs de l’EPS</h2>
<p>Développer sa motricité, s’approprier des méthodes et des outils (règles, rôles : arbitre, observateur), partager des règles et assumer des rôles, apprendre à entretenir sa santé, s’approprier une culture physique sportive et artistique. Horaire : <b>3 heures par semaine</b> à l’école élémentaire, plus <b>30 minutes d’activité physique quotidienne</b>.</p>

<h2>3. La séance type</h2>
<ol><li><b>Échauffement</b> (articulaire, cardio, spécifique).</li><li><b>Corps de séance</b> : situations d’apprentissage avec un but clair, des critères de réussite et des variables (espace, temps, matériel, nombre de joueurs) pour différencier.</li><li><b>Retour au calme</b> et bilan verbal.</li></ol>

<h2>4. Sécurité et savoir nager</h2>
<ul><li>L’enseignant est responsable de la <b>sécurité</b> : vérification du matériel et de l’espace, consignes claires, parades en gymnastique, taux d’encadrement réglementaires pour les sorties et la natation.</li>
<li>L’<b>Attestation du savoir nager en sécurité (ASNS)</b> est à valider à la fin du cycle 3 (au plus tard en 6ᵉ) : entrer dans l’eau en chute arrière, nager, s’immerger, se maintenir sur place, nager sur le dos…</li>
<li>Le <b>« savoir rouler à vélo »</b> est aussi un objectif de l’école.</li></ul>
`,
  videos: [
    { t: "Les champs d’apprentissage en EPS", ch: "Préparation CRPE", q: "CRPE EPS champs d'apprentissage cycle 3" },
    { t: "Construire une séance d’EPS", ch: "Préparation CRPE", q: "construire une séance EPS échauffement retour au calme école" },
    { t: "Attestation du savoir nager", ch: "Éduscol", q: "attestation savoir nager en sécurité ASNS école" }
  ],
  resume: "<ul><li>4 champs : performance, environnement, expression artistique, affrontement.</li><li>3 h d’EPS par semaine + 30 min d’activité quotidienne.</li><li>Séance : échauffement, corps, retour au calme.</li></ul>",
  exercises: [
    { q: "La danse appartient au champ :", choices: ["performance", "environnements variés", "prestation artistique/acrobatique", "affrontement"], answer: 2, expl: "La danse se montre à un public et vise à émouvoir : elle relève du champ « <b>s’exprimer devant les autres par une prestation artistique et/ou acrobatique</b> »." },
    { q: "La course d’orientation appartient au champ :", choices: ["performance", "environnements variés", "affrontement"], answer: 1, expl: "En course d’orientation, il faut lire une carte et s’adapter au terrain : c’est le champ « <b>adapter ses déplacements à des environnements variés</b> »." },
    { q: "Le handball appartient au champ :", choices: ["affrontement collectif", "performance", "prestation artistique"], answer: 0, expl: "Deux équipes s’opposent pour marquer : le handball relève du champ « <b>conduire et maîtriser un affrontement collectif</b> »." },
    { q: "Horaire hebdomadaire d’EPS à l’école élémentaire :", answers: ["3", "3 h", "3 heures", "3h"], expl: "L’EPS, c’est <b>3 heures par semaine</b> à l’école élémentaire, auxquelles s’ajoutent 30 minutes d’activité physique quotidienne." },
    { q: "Dernière phase d’une séance d’EPS :", answers: ["retour au calme", "le retour au calme"], expl: "Une séance se termine par le <b>retour au calme</b> (récupération, étirements) et un bilan verbal. Ordre à retenir : échauffement, corps de séance, retour au calme." }
  ],
  evaluation: [
    { q: "Le saut en longueur appartient au champ :", choices: ["performance mesurable", "environnements variés", "affrontement"], answer: 0, expl: "On mesure la distance sautée : c’est le champ « <b>produire une performance optimale, mesurable</b> à une échéance donnée » (athlétisme)." },
    { q: "Nombre de champs d’apprentissage :", answers: ["4", "quatre"], expl: "Il y a <b>4 champs</b> : performance mesurable, environnements variés, prestation artistique/acrobatique, affrontement collectif ou interindividuel." },
    { q: "L’ASNS doit être validée au plus tard :", choices: ["en CP", "en fin de cycle 3 (6ᵉ)", "au lycée"], answer: 1, expl: "L’attestation du savoir nager en sécurité se prépare à l’école et doit être validée <b>en fin de cycle 3</b>, donc au plus tard en <b>6ᵉ</b>." },
    { q: "La gymnastique appartient au champ :", choices: ["prestation artistique et/ou acrobatique", "affrontement", "environnement"], answer: 0, expl: "En gymnastique, on présente un enchaînement jugé sur sa qualité : c’est le champ « <b>prestation artistique et/ou acrobatique</b> », comme la danse et le cirque." },
    { q: "Pour adapter une situation en EPS, on joue sur :", choices: ["les variables (espace, temps, matériel…)", "la note", "la météo uniquement"], answer: 0, expl: "Pour différencier, on modifie les <b>variables</b> : taille de l’espace, durée, matériel, nombre de joueurs. Ainsi chaque élève trouve un défi à sa mesure." }
  ]
});
