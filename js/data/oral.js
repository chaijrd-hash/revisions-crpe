/* ORAL — épreuves d'admission : entretien avec le jury et oral de français ou de mathématiques */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "oral",
  tab: "oral",
  name: "Oral",
  icon: "🎤",
  intro: "<p>Après l’écrit viennent les <b>épreuves d’admission</b>. Elles comptent beaucoup : l’oral de français ou de mathématiques et l’entretien avec le jury ont de forts coefficients. D’après le site officiel <a href=\"https://www.devenirenseignant.gouv.fr\" target=\"_blank\" rel=\"noopener\">devenirenseignant.gouv.fr</a>, l’oral disciplinaire dure <b>1 h de préparation</b> puis <b>1 h d’épreuve</b> (20 min d’exposé, 40 min d’échange). Les modalités exactes de l’entretien sont à vérifier pour ta session.</p><p>Ici, tu apprends à <b>te présenter</b>, à connaître le <b>cadre du métier</b>, à réagir aux <b>mises en situation</b> et à <b>construire une séance</b>. Entraîne-toi ensuite avec la <b>simulation d’entretien</b> face au jury IA.</p>",
  chapters: []
});
window.ORAL = window.SUBJECTS[window.SUBJECTS.length - 1];

window.ORAL.chapters.push({
  id: 1,
  title: "L’entretien avec le jury : se préparer et se présenter",
  short: "Entretien",
  sub: "Attendus, présentation, motivation, posture",
  objectifs: [
    "Comprendre ce que le jury évalue : ta <b>motivation</b>, ta <b>connaissance du métier</b> et du système éducatif, ton <b>adhésion aux valeurs</b> de la République et ta <b>capacité à réagir</b> en situation.",
    "Préparer une <b>présentation de 5 minutes</b> (motivation et parcours), claire et personnelle.",
    "Adopter une <b>posture professionnelle</b> : écoute, honnêteté, nuance, langage soutenu."
  ],
  lesson: `
<h2>0. Le format officiel de l’entretien</h2>
<div class="box def"><span class="box-title">D’après devenirenseignant.gouv.fr (concours bac+3, à partir de 2026)</span>
<ul><li><b>Première phase (15 min)</b> : tu te présentes pendant <b>5 minutes</b> (motivation, parcours), puis <b>10 minutes</b> d’échange avec le jury sur ta présentation.</li>
<li><b>Seconde phase (20 min)</b> : entretien avec le jury, avec des questionnements divers dont <b>une mise en situation</b>.</li>
<li><b>Thèmes</b> : les <b>valeurs de la République</b> (dont la laïcité), les <b>exigences du service public</b> (neutralité, <b>lutte contre les discriminations</b>, <b>égalité filles-garçons</b>), la <b>transition écologique</b>, l’<b>épanouissement de l’élève</b> et ta <b>projection dans le métier</b>.</li></ul>
Coefficient annoncé : 3. Vérifie les détails pour ta session : le site officiel propose des vidéos de mises en situation et un document « attendus et conseils ».</div>
<h2>1. Ce que le jury cherche à savoir</h2>
<p>Le jury ne cherche pas une personne parfaite : il cherche un <b>futur fonctionnaire</b> capable d’exercer en sécurité, avec bon sens et dans le respect du cadre. Il se pose trois questions :</p>
<ol><li><b>Pourquoi ce métier ?</b> Ta motivation est-elle réfléchie, nourrie d’expériences ?</li>
<li><b>Connais-tu le métier ?</b> Ses missions, ses obligations, le fonctionnement de l’école (cycles, équipe, partenaires).</li>
<li><b>Sauras-tu agir ?</b> Face à un élève en difficulté, un parent en colère, un incident : réagis-tu de façon adaptée, en t’appuyant sur l’équipe et sur le cadre ?</li></ol>

<h2>2. La présentation : un plan simple en 4 temps</h2>
<div class="box def"><span class="box-title">Le plan</span>
<ol><li><b>Qui je suis</b> : parcours en une ou deux phrases (licence, expériences).</li>
<li><b>Ce que j’ai vécu</b> : une ou deux expériences auprès d’enfants (stage, animation, service civique, aide aux devoirs) et ce qu’elles t’ont appris.</li>
<li><b>Pourquoi ce métier</b> : une motivation personnelle mais professionnelle (transmettre, faire réussir tous les élèves, réduire les inégalités).</li>
<li><b>Le professeur que je veux devenir</b> : une ou deux qualités, et ce que tu dois encore apprendre.</li></ol></div>
<div class="box ex"><span class="box-title">Exemple (à personnaliser)</span>« Je m’appelle Léa, j’ai 21 ans et je termine une licence de sciences de l’éducation. Pendant deux ans, j’ai encadré des enfants en centre de loisirs, et j’ai fait un stage d’observation dans une classe de CE1. J’y ai vu une enseignante adapter la même activité de lecture à trois groupes d’élèves : c’est là que j’ai compris que ce métier demande autant de rigueur que d’attention à chacun. Je veux devenir professeure des écoles parce que l’école primaire est le moment où se construisent les apprentissages fondamentaux, et où l’on peut encore réduire les écarts entre les élèves. J’ai conscience d’avoir encore beaucoup à apprendre, notamment sur la gestion de l’hétérogénéité, et c’est ce que je compte travailler pendant mon année de stage. »</div>

<h2>3. Les erreurs à éviter</h2>
<ul><li>« J’ai toujours adoré les enfants » : trop vague. Le métier, c’est faire <b>apprendre</b>.</li>
<li>Parler des vacances, de la sécurité de l’emploi : le jury le note.</li>
<li>Inventer une réponse : mieux vaut dire « Je ne connais pas précisément ce dispositif, mais je me renseignerais auprès de mon directeur ou de mon inspecteur. »</li>
<li>Critiquer l’institution ou des collègues.</li>
<li>Agir seul(e) dans une situation grave : le jury attend que tu parles de l’<b>équipe</b> (directeur, collègues, RASED, infirmière, psychologue de l’Éducation nationale, inspecteur).</li></ul>

<h2>4. La méthode pour répondre à une question</h2>
<p>Utilise la méthode <b>« Constater – Analyser – Agir – Prévenir »</b> :</p>
<ol><li><b>Constater</b> les faits sans juger.</li><li><b>Analyser</b> : quels enjeux (sécurité, apprentissage, droit, valeurs) ?</li><li><b>Agir</b> immédiatement, puis avec l’équipe et les partenaires.</li><li><b>Prévenir</b> : que mettre en place pour que cela ne se reproduise pas ?</li></ol>

<h2>5. La posture le jour J</h2>
<p>Regarde tous les membres du jury, prends une seconde avant de répondre, reformule une question difficile, parle à un rythme posé, accepte la relance (elle n’est pas un piège : le jury t’aide à aller plus loin). Termine tes réponses par une phrase de synthèse.</p>
`,
  videos: [
    { t: "Réussir l’entretien du CRPE", ch: "Préparation CRPE", q: "CRPE épreuve d'entretien conseils jury" },
    { t: "Se présenter devant un jury", ch: "Préparation CRPE", q: "CRPE présentation candidat motivation exemple" }
  ],
  resume: "<ul><li>Présentation : qui je suis → expériences → pourquoi ce métier → quel prof je veux être.</li><li>Réponse : constater, analyser, agir (avec l’équipe), prévenir.</li><li>Ne jamais inventer, ne jamais agir seul(e) dans une situation grave.</li></ul>",
  exercises: [
    { q: "Quelle phrase de motivation est la plus pertinente devant un jury ?", choices: ["J’adore les enfants depuis toujours.", "Je veux faire réussir tous les élèves, en particulier ceux qui ont le plus de difficultés.", "Les vacances scolaires permettent de concilier vie de famille et travail."], answer: 1, expl: "Le jury attend une motivation centrée sur les <b>apprentissages des élèves</b> et la réussite de tous. « J’adore les enfants » reste trop vague, et parler des vacances donne une image peu professionnelle." },
    { q: "Face à une question dont tu ne connais pas la réponse, tu :", choices: ["inventes une réponse plausible", "reconnais ne pas savoir et indiques comment tu te renseignerais", "changes de sujet"], answer: 1, expl: "L’honnêteté est une qualité attendue : reconnais simplement ne pas savoir, puis montre que tu sais <b>où chercher</b> (textes officiels, Éduscol, collègues, IEN). Inventer une réponse est le pire piège : le jury s’en aperçoit tout de suite." },
    { q: "Dans une situation grave en classe, le jury attend que tu :", choices: ["gères tout seul(e) pour montrer ton autonomie", "t’appuies sur l’équipe et le cadre (directeur, IEN, partenaires)", "attendes la fin de l’année"], answer: 1, expl: "Un professeur ne travaille jamais seul : face à une situation grave, tu t’appuies sur l’<b>équipe</b> et la <b>hiérarchie</b> (directeur, IEN) et sur les partenaires. Vouloir tout gérer seul(e) montre au contraire que tu ne connais pas le cadre." },
    { q: "Rédige ta présentation personnelle (environ 5 minutes à l’oral) en suivant le plan en 4 temps.", type: "open", model: "<p>Vérifie que ta présentation : 1) dit qui tu es en une phrase ; 2) cite <b>une expérience précise</b> auprès d’enfants et <b>ce qu’elle t’a appris</b> ; 3) donne une motivation centrée sur les <b>apprentissages des élèves</b> ; 4) nomme une qualité et un point à travailler ; 5) tient en 5 minutes à l’oral (environ 600 mots) ; 6) est écrite dans une langue soignée.</p>" }
  ],
  evaluation: [
    { q: "La méthode de réponse proposée se compose de :", choices: ["Constater – Analyser – Agir – Prévenir", "Écouter – Répéter – Punir", "Questionner – Attendre – Conclure"], answer: 0, expl: "La méthode en 4 temps : <b>Constater</b> (décrire les faits), <b>Analyser</b> (les enjeux, le cadre), <b>Agir</b> (tout de suite et avec l’équipe), <b>Prévenir</b> (pour que cela ne se reproduise pas)." },
    { q: "Durée de la présentation au début de l’entretien :", choices: ["30 secondes", "5 minutes", "20 minutes"], answer: 1, expl: "L’entretien commence par une présentation d’environ <b>5 minutes</b> : assez pour parler de ton parcours et de ta motivation, sans réciter un long discours. Vérifie quand même les modalités exactes de ta session." },
    { q: "Une relance du jury signifie le plus souvent :", choices: ["que ta réponse est fausse", "que le jury t’invite à préciser ou à aller plus loin", "que l’entretien est terminé"], answer: 1, expl: "Une relance n’est pas un piège : le jury t’invite le plus souvent à <b>préciser</b>, nuancer ou aller plus loin. Garde ton calme et complète ta réponse." },
    { q: "Quel argument est à éviter ?", choices: ["la sécurité de l’emploi", "l’envie de transmettre", "la réduction des inégalités"], answer: 0, expl: "La sécurité de l’emploi est un argument personnel, pas une motivation pour le métier. Le jury attend des arguments tournés vers les <b>élèves</b> : transmettre, réduire les inégalités." },
    { q: "Explique en 5 lignes ce que tu as appris d’une expérience auprès d’enfants et comment elle te servira en classe.", type: "open", model: "<p>Une bonne réponse décrit une <b>situation précise</b> (lieu, âge des enfants, ce qui s’est passé), en tire un <b>apprentissage professionnel</b> (ex. : l’importance de consignes courtes et reformulées, de rituels, de la différenciation) et le <b>transpose</b> à la classe (« En classe, je… »).</p>" }
  ]
});

window.ORAL.chapters.push({
  id: 2,
  title: "Le cadre du métier : valeurs, droits et obligations",
  short: "Cadre",
  sub: "Fonctionnaire, laïcité, référentiel, organisation de l’école",
  objectifs: [
    "Connaître les <b>droits et obligations</b> du fonctionnaire (neutralité, secret professionnel, obéissance hiérarchique…).",
    "Connaître le <b>référentiel de compétences</b> des métiers du professorat (2013) et le <b>socle commun</b>.",
    "Savoir comment est organisée l’école : cycles, conseils, acteurs et partenaires."
  ],
  lesson: `
<h2>1. Le professeur des écoles est un fonctionnaire</h2>
<p>Ses droits et obligations sont fixés par le <b>Code général de la fonction publique</b> (entré en vigueur en 2022, il reprend notamment la loi de 1983 dite « loi Le Pors »).</p>
<table><tr><th>Obligations</th><th>Ce que cela veut dire en classe</th></tr>
<tr><td><b>Neutralité</b> (politique, religieuse, philosophique) et <b>laïcité</b></td><td>Aucun signe religieux, aucune opinion personnelle exprimée devant les élèves.</td></tr>
<tr><td><b>Secret et discrétion professionnels</b></td><td>On ne parle pas d’un élève ou d’une famille hors du cadre professionnel.</td></tr>
<tr><td><b>Obéissance hiérarchique</b></td><td>Respect des instructions du directeur (pour le fonctionnement de l’école) et de l’IEN.</td></tr>
<tr><td><b>Dignité, probité, intégrité</b></td><td>Comportement exemplaire, y compris sur les réseaux sociaux.</td></tr>
<tr><td><b>Obligation de signalement</b></td><td>Un enfant en danger doit être signalé (article 40 du Code de procédure pénale pour un crime ou délit, information préoccupante pour un enfant en risque).</td></tr></table>
<p>Droits : liberté d’opinion (mais pas d’expression en classe), droit de grève (avec déclaration préalable 48 h avant dans le premier degré), droit à la formation, <b>protection fonctionnelle</b> en cas d’agression.</p>

<h2>2. Le référentiel de compétences (arrêté du 1ᵉʳ juillet 2013)</h2>
<p>Il définit ce qu’un professeur doit savoir faire. Quelques compétences à citer : <b>faire partager les valeurs de la République</b> ; inscrire son action dans le cadre des principes fondamentaux du système éducatif ; <b>connaître les élèves et les processus d’apprentissage</b> ; prendre en compte la diversité des élèves ; accompagner les élèves dans leur parcours ; agir en éducateur responsable ; <b>coopérer au sein d’une équipe</b> ; coopérer avec les parents et les partenaires ; s’engager dans une démarche de développement professionnel.</p>

<h2>3. Le socle commun</h2>
<p>Le <b>socle commun de connaissances, de compétences et de culture</b> (2015) fixe ce que tout élève doit maîtriser à 16 ans. Il a <b>5 domaines</b> : 1) les langages pour penser et communiquer ; 2) les méthodes et outils pour apprendre ; 3) la formation de la personne et du citoyen ; 4) les systèmes naturels et les systèmes techniques ; 5) les représentations du monde et l’activité humaine.</p>

<h2>4. L’organisation de l’école</h2>
<ul><li><b>Cycles</b> : cycle 1 (maternelle : PS, MS, GS), cycle 2 (CP, CE1, CE2), cycle 3 (CM1, CM2, 6ᵉ), cycle 4 (5ᵉ, 4ᵉ, 3ᵉ). L’instruction est obligatoire de <b>3 à 16 ans</b>.</li>
<li><b>Acteurs</b> : le <b>directeur</b> (pas supérieur hiérarchique des enseignants, mais responsable du fonctionnement), l’<b>IEN</b> (inspecteur de l’Éducation nationale, supérieur hiérarchique), le conseiller pédagogique, le <b>RASED</b> (réseau d’aides spécialisées : enseignants spécialisés et psychologue de l’Éducation nationale), le médecin et l’infirmier scolaires, les <b>AESH</b>, les ATSEM en maternelle, la mairie (bâtiments, cantine, périscolaire).</li>
<li><b>Instances</b> : le <b>conseil d’école</b> (3 fois par an : enseignants, parents élus, mairie, DDEN), le <b>conseil des maîtres</b>, le <b>conseil de cycle</b>, le conseil école-collège.</li>
<li><b>Le projet d’école</b> fixe les priorités de l’école pour plusieurs années.</li>
<li><b>Les APC</b> (activités pédagogiques complémentaires) : aide en petits groupes, en plus du temps de classe.</li></ul>

<h2>5. Élèves à besoins éducatifs particuliers : les sigles</h2>
<table><tr><th>Sigle</th><th>Pour qui ?</th><th>Qui le met en place ?</th></tr>
<tr><td><b>PPRE</b> (programme personnalisé de réussite éducative)</td><td>Élève qui risque de ne pas maîtriser les attendus</td><td>L’équipe pédagogique</td></tr>
<tr><td><b>PAP</b> (plan d’accompagnement personnalisé)</td><td>Troubles des apprentissages (dyslexie…)</td><td>Le directeur, après avis du médecin scolaire</td></tr>
<tr><td><b>PAI</b> (projet d’accueil individualisé)</td><td>Maladie chronique, allergie</td><td>Le directeur, avec le médecin et la famille</td></tr>
<tr><td><b>PPS</b> (projet personnalisé de scolarisation)</td><td>Élève en situation de handicap</td><td>La <b>MDPH</b>, suivi par l’enseignant référent (équipe de suivi de la scolarisation)</td></tr></table>
`,
  videos: [
    { t: "Droits et obligations du fonctionnaire", ch: "Préparation CRPE", q: "droits et obligations du fonctionnaire enseignant CRPE" },
    { t: "Le référentiel de compétences des enseignants", ch: "Préparation CRPE", q: "référentiel de compétences professeur 2013 expliqué" },
    { t: "PAP, PPS, PAI, PPRE : les différences", ch: "Préparation CRPE", q: "PAP PPS PAI PPRE différences école" }
  ],
  resume: "<ul><li>Obligations : neutralité, laïcité, secret professionnel, obéissance hiérarchique, signalement.</li><li>Le directeur n’est pas le supérieur hiérarchique ; l’IEN l’est.</li><li>PPRE (équipe), PAP (troubles des apprentissages), PAI (santé), PPS (handicap, MDPH).</li><li>Socle commun : 5 domaines.</li></ul>",
  exercises: [
    { q: "Le supérieur hiérarchique d’un professeur des écoles est :", choices: ["le directeur d’école", "l’inspecteur de l’Éducation nationale (IEN)", "le maire"], answer: 1, expl: "Le supérieur hiérarchique direct du professeur des écoles est l’<b>IEN</b> (inspecteur de l’Éducation nationale) de la circonscription. Le directeur d’école n’est pas son supérieur hiérarchique, et le maire gère les locaux, pas les enseignants." },
    { q: "Un élève dyslexique peut bénéficier :", choices: ["d’un PAI", "d’un PAP", "d’une exclusion"], answer: 1, expl: "Pour un trouble des apprentissages comme la dyslexie, on met en place un <b>PAP</b> (plan d’accompagnement personnalisé), après avis du médecin scolaire. Le PAI concerne les problèmes de santé (allergie, asthme…)." },
    { q: "Un élève allergique aux arachides relève :", choices: ["d’un PAI", "d’un PPRE", "d’un PPS"], answer: 0, expl: "Une allergie alimentaire est un problème de santé : elle relève d’un <b>PAI</b> (projet d’accueil individualisé), qui prévoit par exemple la trousse d’urgence. Le PPRE concerne les difficultés scolaires, le PPS le handicap." },
    { q: "Le PPS est élaboré par :", choices: ["l’enseignant seul", "la MDPH", "les parents seuls"], answer: 1, expl: "Le PPS (projet personnalisé de scolarisation) concerne les élèves en situation de handicap : il est élaboré par l’équipe pluridisciplinaire de la <b>MDPH</b>, à la demande de la famille." },
    { q: "Combien de domaines compte le socle commun ?", answers: ["5", "cinq"], expl: "Le socle commun de connaissances, de compétences et de culture compte <b>5 domaines</b> : les langages, les méthodes et outils pour apprendre, la formation de la personne et du citoyen, les systèmes naturels et techniques, les représentations du monde et l’activité humaine." },
    { q: "L’instruction est obligatoire de :", choices: ["6 à 16 ans", "3 à 16 ans", "3 à 18 ans"], answer: 1, expl: "Depuis la loi « pour une école de la confiance » de 2019 (rentrée 2019), l’instruction est obligatoire de <b>3 à 16 ans</b>. Avant, elle commençait à 6 ans. Attention : c’est l’<b>instruction</b> qui est obligatoire, pas forcément l’école." },
    { q: "Explique la différence entre neutralité et liberté d’opinion pour un enseignant.", type: "open", model: "<p>Comme tout citoyen, l’enseignant a la <b>liberté d’opinion</b> : il peut avoir des convictions politiques ou religieuses. Mais dans l’exercice de ses fonctions, il est soumis au <b>devoir de neutralité</b> : il ne doit ni les exprimer ni les afficher devant les élèves (pas de signe religieux, pas de propos partisans), car il représente l’État et doit respecter la liberté de conscience des élèves et des familles.</p>" }
  ],
  evaluation: [
    { q: "Le conseil d’école se réunit au moins :", choices: ["1 fois par an", "3 fois par an", "chaque semaine"], answer: 1, expl: "Le conseil d’école se réunit au moins <b>une fois par trimestre</b>, donc 3 fois par an, et obligatoirement dans les 15 jours après l’élection des représentants des parents." },
    { q: "Le RASED regroupe :", choices: ["des enseignants spécialisés et des psychologues de l’Éducation nationale", "les parents élus", "les ATSEM"], answer: 0, expl: "Le RASED (réseau d’aides spécialisées aux élèves en difficulté) regroupe des <b>enseignants spécialisés</b> (aide pédagogique, aide relationnelle) et des <b>psychologues de l’Éducation nationale</b>." },
    { q: "Le cycle 3 comprend :", choices: ["CP, CE1, CE2", "CM1, CM2, 6ᵉ", "CE2, CM1, CM2"], answer: 1, expl: "Le cycle 3, cycle de consolidation, fait le lien entre l’école et le collège : <b>CM1, CM2 et 6ᵉ</b>. Le CP, CE1, CE2 forment le cycle 2." },
    { q: "Le référentiel de compétences des professeurs date de :", answers: ["2013"], expl: "Le référentiel des compétences professionnelles des métiers du professorat et de l’éducation a été fixé par l’arrêté du 1er juillet <b>2013</b>." },
    { q: "Un enfant en danger doit être :", choices: ["signalé selon les procédures (information préoccupante, procureur si nécessaire)", "ignoré si la famille refuse", "confié à un voisin"], answer: 0, expl: "Protéger un enfant en danger est une <b>obligation</b> : on transmet une <b>information préoccupante</b> (avec le directeur) et, si le danger est grave et immédiat, on saisit le procureur. Le refus de la famille n’y change rien." },
    { q: "Le PPRE est mis en place par :", choices: ["la MDPH", "l’équipe pédagogique", "le médecin"], answer: 1, expl: "Le PPRE (programme personnalisé de réussite éducative) est conçu par l’<b>équipe pédagogique</b> pour un élève qui risque de ne pas maîtriser certaines connaissances. La MDPH, elle, intervient pour le handicap (PPS)." },
    { q: "Délai de déclaration préalable avant une grève dans le premier degré :", choices: ["24 h", "48 h", "une semaine"], answer: 1, expl: "Dans le premier degré, chaque enseignant doit déclarer son intention de faire grève au moins <b>48 h</b> à l’avance (dont un jour ouvré), pour que la commune puisse organiser le service minimum d’accueil." }
  ]
});

window.ORAL.chapters.push({
  id: 3,
  title: "Les mises en situation professionnelles",
  short: "Mises en situation",
  sub: "Harcèlement, parents, laïcité, handicap, sécurité, maltraitance",
  objectifs: [
    "Réagir de façon <b>adaptée, graduée et collective</b> aux situations classiques.",
    "Citer les <b>dispositifs</b> et les <b>numéros</b> utiles (pHARe, 3018, 119, information préoccupante).",
    "Toujours relier sa réponse aux <b>valeurs</b> et à l’<b>intérêt de l’élève</b>."
  ],
  lesson: `
<h2>1. Le harcèlement entre élèves</h2>
<p>Le harcèlement se caractérise par la <b>violence</b>, la <b>répétition</b> et l’<b>isolement</b> de la victime. Depuis la loi du 2 mars 2022, le harcèlement scolaire est un <b>délit</b>. Le programme <b>pHARe</b> est généralisé dans les écoles et les collèges.</p>
<div class="box ex"><span class="box-title">Réponse type</span>« Je prends la parole de l’élève au sérieux et je le protège immédiatement. J’en parle au directeur et à l’équipe, qui appliquent le protocole pHARe (entretiens avec la victime, les témoins et les auteurs, méthode de la préoccupation partagée). J’informe les familles. Je reste vigilant(e) dans la cour et je travaille en classe sur l’empathie et le respect (EMC, messages clairs). Les familles peuvent appeler le <b>3018</b>, numéro national contre le harcèlement. »</div>

<h2>2. Un parent mécontent</h2>
<ul><li>Accueillir et écouter, dans un lieu adapté (pas devant les élèves, pas à la grille).</li>
<li>Reformuler, rester calme et factuel, s’appuyer sur le travail de l’élève.</li>
<li>Proposer un rendez-vous, éventuellement avec le directeur.</li>
<li>Rechercher une <b>coopération</b> : les parents sont des partenaires de la réussite de l’enfant.</li>
<li>Si le parent devient menaçant : interrompre l’entretien, prévenir le directeur, faire remonter à l’IEN ; l’enseignant bénéficie de la protection fonctionnelle.</li></ul>

<h2>3. Atteintes à la laïcité</h2>
<p>Exemple : un élève refuse la natation pour des raisons religieuses, ou un parent conteste un enseignement. <b>Réponse</b> : dialogue d’abord, en rappelant que les enseignements sont <b>obligatoires</b> et que la laïcité protège la liberté de conscience de chacun ; s’appuyer sur le directeur et sur l’<b>équipe académique Valeurs de la République</b> ; signaler l’incident via la procédure prévue. On reste ferme sur le principe et bienveillant dans la forme.</p>

<h2>4. Un élève en situation de handicap</h2>
<p>L’école est <b>inclusive</b> (loi de 2005, loi de 2013 « pour la refondation de l’école »). L’enseignant s’appuie sur le <b>PPS</b>, travaille avec l’<b>AESH</b> (qui aide l’élève, mais ne fait pas à sa place et ne remplace pas l’enseignant), adapte les supports, l’espace et les évaluations, échange avec l’enseignant référent et la famille.</p>

<h2>5. Un enfant en danger</h2>
<ul><li>Si un élève se confie : <b>écouter sans questionner de manière suggestive</b>, ne pas promettre le secret, noter ses mots exacts, rassurer.</li>
<li>Prévenir le directeur et rédiger une <b>information préoccupante</b> transmise à la CRIP (cellule de recueil des informations préoccupantes du département).</li>
<li>Si l’enfant est en <b>danger grave et immédiat</b> : signalement au <b>procureur de la République</b> (article 40 du Code de procédure pénale).</li>
<li>Le <b>119</b> (Allô enfance en danger) est le numéro national.</li></ul>

<h2>6. Sécurité</h2>
<p>Surveillance des élèves en permanence (y compris à l’accueil, 10 minutes avant la classe, et en récréation), exercices <b>PPMS</b> (plan particulier de mise en sûreté : risques majeurs et attentat-intrusion) et exercices d’évacuation incendie, autorisation et taux d’encadrement pour les <b>sorties scolaires</b>, trousse et registre de soins, appel au <b>15</b> (SAMU) en cas d’urgence.</p>
`,
  videos: [
    { t: "Le programme pHARe contre le harcèlement", ch: "Éduscol / ministère", q: "programme pHARe harcèlement école expliqué" },
    { t: "Mises en situation CRPE : exemples corrigés", ch: "Préparation CRPE", q: "CRPE entretien mise en situation exemple réponse" },
    { t: "Enfance en danger : l’information préoccupante", ch: "119 / Éduscol", q: "information préoccupante école enseignant procédure" }
  ],
  resume: "<ul><li>Harcèlement : protéger, équipe, protocole pHARe, 3018.</li><li>Parents : écouter, rendez-vous, coopération.</li><li>Laïcité : dialogue + fermeté sur le principe + équipe Valeurs de la République.</li><li>Enfant en danger : écouter sans suggérer, directeur, information préoccupante, 119 ; procureur si danger grave.</li></ul>",
  exercises: [
    { q: "Le numéro national contre le harcèlement est :", answers: ["3018"], expl: "Le <b>3018</b> est le numéro national gratuit contre le harcèlement et le cyberharcèlement. Ne le confonds pas avec le 119 (enfance en danger)." },
    { q: "Le numéro national « Allô enfance en danger » est :", answers: ["119"], expl: "Le <b>119</b> (« Allô enfance en danger ») est gratuit et joignable 24 h/24. Il est obligatoirement affiché dans les écoles." },
    { q: "L’AESH :", choices: ["remplace l’enseignant auprès de l’élève", "accompagne l’élève sans faire à sa place, sous la responsabilité pédagogique de l’enseignant", "décide des adaptations seul"], answer: 1, expl: "L’AESH (accompagnant d’élève en situation de handicap) aide l’élève à accéder aux apprentissages, <b>sans faire à sa place</b>. C’est l’enseignant qui reste responsable de la pédagogie et des adaptations." },
    { q: "Un élève te confie des violences à la maison et te demande de « ne rien dire ». Tu :", choices: ["promets le secret pour garder sa confiance", "expliques que tu dois en parler à des adultes qui vont l’aider, et préviens le directeur", "appelles la famille pour vérifier"], answer: 1, expl: "Tu ne peux pas promettre le secret : protéger l’enfant est une obligation. Tu lui expliques avec douceur que tu vas en parler à des adultes qui vont l’aider, et tu préviens le <b>directeur</b> pour lancer une information préoccupante. Appeler la famille pourrait mettre l’enfant en danger." },
    { q: "Le PPMS sert à :", choices: ["mettre les élèves en sûreté en cas de risque majeur ou d’intrusion", "organiser la cantine", "évaluer les élèves"], answer: 0, expl: "Le PPMS (plan particulier de mise en sûreté) prévoit comment <b>mettre les élèves en sûreté</b> face à un risque majeur (tempête, accident chimique…) ou à une intrusion. Il est testé par des exercices chaque année." },
    { q: "Mise en situation : pendant la récréation, tu vois trois élèves de CM1 bousculer et insulter régulièrement le même camarade. Rédige ta réponse au jury.", type: "open", model: "<p><b>Constater</b> : violences répétées sur un même élève, isolé : ce sont les signes d’un possible harcèlement. <b>Agir tout de suite</b> : j’interviens pour faire cesser la scène et je mets l’élève en sécurité ; je l’écoute en privé. <b>Avec l’équipe</b> : j’informe le directeur ; on applique le protocole pHARe (entretiens avec la victime, les témoins, puis les auteurs, méthode de la préoccupation partagée) ; on informe les familles ; on renforce la surveillance. <b>Prévenir</b> : séances d’EMC sur le respect et l’empathie, ambassadeurs pHARe, règles de vie co-construites, messages clairs. Je rappelle le 3018 aux familles.</p>" },
    { q: "Mise en situation : une mère de famille t’interpelle violemment à la sortie de l’école parce que son fils « n’a jamais de bonnes notes ». Que fais-tu ?", type: "open", model: "<p>Je reste calme et j’évite l’échange devant les élèves et les autres parents : je lui propose un <b>rendez-vous</b> rapidement. Pendant l’entretien, j’écoute son inquiétude, je reformule, je m’appuie sur les <b>travaux de l’enfant</b> pour montrer ses réussites et ses difficultés, et je propose des pistes (aide en APC, conseils à la maison, éventuellement un PPRE). Je peux inviter le directeur. Si les propos deviennent menaçants, j’interromps l’entretien et j’informe le directeur et l’IEN. Objectif : construire une <b>alliance éducative</b> au service de l’enfant.</p>" }
  ],
  evaluation: [
    { q: "Les trois critères du harcèlement :", choices: ["violence, répétition, isolement", "colère, bruit, fatigue", "notes, devoirs, punitions"], answer: 0, expl: "On parle de harcèlement quand trois critères sont réunis : la <b>violence</b> (physique, verbale ou psychologique), la <b>répétition</b> et l’<b>isolement</b> de la victime." },
    { q: "Depuis 2022, le harcèlement scolaire est :", choices: ["une simple incivilité", "un délit", "un sujet réservé aux familles"], answer: 1, expl: "La loi du 2 mars 2022 a fait du harcèlement scolaire un <b>délit</b> à part entière, puni par le Code pénal. Ce n’est donc pas une simple incivilité." },
    { q: "En cas de danger grave et immédiat pour un enfant, on saisit :", choices: ["la mairie", "le procureur de la République", "l’association de parents"], answer: 1, expl: "En cas de danger grave et immédiat, on saisit directement le <b>procureur de la République</b> (en informant le directeur). Dans les autres cas, on transmet une information préoccupante à la cellule départementale (CRIP)." },
    { q: "La loi qui pose le principe de l’école inclusive pour les élèves handicapés date de :", choices: ["1905", "2005", "1989"], answer: 1, expl: "C’est la loi du 11 février <b>2005</b> pour l’égalité des droits et des chances des personnes handicapées : tout enfant handicapé a le droit d’être inscrit dans l’école de son quartier. 1905 est la loi de séparation des Églises et de l’État, 1989 la loi Jospin." },
    { q: "Numéro d’urgence médicale (SAMU) :", answers: ["15"], expl: "Le <b>15</b> est le numéro du SAMU. Retiens aussi le 18 (pompiers), le 17 (police) et le 112 (numéro d’urgence européen)." },
    { q: "Mise en situation : un élève de CE2 refuse de dessiner un personnage en affirmant que sa religion l’interdit. Comment réagis-tu ?", type: "open", model: "<p>Je dialogue avec l’élève sans le mettre en difficulté devant la classe, en rappelant que l’activité fait partie des enseignements obligatoires et qu’à l’école, chacun apprend les mêmes choses, dans le respect de la liberté de conscience de tous. Je peux adapter la consigne sans renoncer à l’objectif (par exemple dessiner un paysage, un objet). Je rencontre la famille pour expliquer les objectifs pédagogiques. J’informe le directeur et, si la situation persiste ou se répète, je sollicite l’équipe académique Valeurs de la République. Ferme sur le principe, bienveillant(e) dans la forme.</p>" }
  ]
});

window.ORAL.chapters.push({
  id: 4,
  title: "L’oral de français ou de mathématiques : construire une séance",
  short: "Oral disciplinaire",
  sub: "Format, analyse de dossier, fiche de préparation, exposé",
  objectifs: [
    "Connaître le format : <b>1 h de préparation, 20 min d’exposé, 40 min d’échange</b>.",
    "Construire une <b>séance</b> complète : objectif, déroulement, différenciation, évaluation.",
    "Analyser des <b>productions d’élèves</b> et des documents pédagogiques."
  ],
  lesson: `
<h2>1. Le format de l’épreuve</h2>
<p>Selon le site officiel, l’épreuve orale porte sur le <b>français ou les mathématiques</b> : <b>1 heure de préparation</b>, puis <b>1 heure d’épreuve</b> composée de <b>20 minutes d’exposé</b> et <b>40 minutes d’échange</b> avec le jury. Le sujet comporte en général un ou plusieurs documents (extraits de manuels, programmes, productions d’élèves). Vérifie le détail du sujet pour ta session sur devenirenseignant.gouv.fr.</p>

<h2>2. Gérer l’heure de préparation</h2>
<table><tr><th>Temps</th><th>À faire</th></tr>
<tr><td>10 min</td><td>Lire le sujet et les documents, repérer la notion, le niveau, le cycle.</td></tr>
<tr><td>15 min</td><td>Analyser : quels savoirs ? quelles difficultés pour les élèves ? quelles erreurs dans les productions ?</td></tr>
<tr><td>25 min</td><td>Construire la séance (fiche) et préparer le plan de l’exposé.</td></tr>
<tr><td>10 min</td><td>Préparer une introduction et une conclusion soignées, numéroter les feuilles.</td></tr></table>

<h2>3. La fiche de préparation</h2>
<div class="box def"><span class="box-title">Les rubriques indispensables</span>
<ul><li><b>Niveau / cycle</b>, <b>domaine</b>, place dans la <b>séquence</b> (séance 2 sur 5…).</li>
<li><b>Objectif</b> formulé avec un verbe observable : « Les élèves seront capables de comparer deux fractions de même numérateur. »</li>
<li><b>Prérequis</b>.</li>
<li><b>Matériel</b> et <b>organisation</b> (collectif, groupes, individuel).</li>
<li><b>Déroulement</b> en phases minutées : rôle de l’enseignant, activité des élèves.</li>
<li><b>Différenciation</b> : aide pour les élèves en difficulté, prolongement pour les plus rapides.</li>
<li><b>Évaluation</b> : critères de réussite, trace écrite.</li></ul></div>

<h2>4. Le déroulement type d’une séance d’apprentissage</h2>
<ol><li><b>Rappel / mise en route</b> (5 min) : réactiver ce qui a été appris (calcul mental, rituel).</li>
<li><b>Situation de recherche</b> (15 min) : un problème qui pose question, travail individuel puis en groupes.</li>
<li><b>Mise en commun</b> (10 min) : confronter les procédures, analyser les erreurs.</li>
<li><b>Institutionnalisation</b> (5 min) : l’enseignant formalise le savoir ; <b>trace écrite</b>.</li>
<li><b>Entraînement</b> (10 min) : exercices différenciés.</li>
<li><b>Bilan</b> (5 min) : « Qu’avons-nous appris aujourd’hui ? »</li></ol>
<p>En français, pour une séance de compréhension : lecture par l’enseignant ou silencieuse, questions de compréhension, débat interprétatif, justification par le texte, synthèse.</p>

<h2>5. L’exposé de 20 minutes</h2>
<p>Plan conseillé : 1) présentation du sujet et des documents ; 2) analyse <b>didactique</b> (notion, enjeux, difficultés, erreurs des élèves) ; 3) proposition de <b>séance</b> justifiée ; 4) prolongements et évaluation. Annonce ton plan, regarde le jury, gère ton temps (montre posée sur la table).</p>

<h2>6. Les 40 minutes d’échange</h2>
<p>Le jury approfondit : savoirs disciplinaires (« Qu’est-ce qu’un nombre décimal ? »), choix pédagogiques (« Pourquoi ce matériel ? »), adaptations (« Et pour un élève allophone ? »). Accepte de revenir sur une erreur : « Vous avez raison, je corrigerais en… ».</p>
`,
  videos: [
    { t: "Réussir l’oral de maths du CRPE", ch: "Préparation CRPE", q: "CRPE oral mathématiques préparation séance conseils" },
    { t: "Réussir l’oral de français du CRPE", ch: "Préparation CRPE", q: "CRPE oral français leçon préparation conseils" },
    { t: "Rédiger une fiche de préparation", ch: "Préparation CRPE", q: "fiche de préparation séance école primaire exemple" }
  ],
  resume: "<ul><li>1 h de préparation, 20 min d’exposé, 40 min d’échange.</li><li>Objectif = verbe observable.</li><li>Séance : rappel → recherche → mise en commun → institutionnalisation → entraînement → bilan.</li><li>Toujours : différenciation et évaluation.</li></ul>",
  exercises: [
    { q: "Quel objectif est correctement formulé ?", choices: ["Faire des fractions.", "Les élèves seront capables de placer des fractions simples sur une droite graduée.", "Découvrir les maths."], answer: 1, expl: "Un bon objectif décrit ce que les élèves <b>sauront faire</b>, de façon observable : un verbe d’action précis (placer) et un contenu précis (des fractions simples sur une droite graduée). « Faire des fractions » est trop vague." },
    { q: "La phase où l’enseignant formalise le savoir et fait écrire la trace écrite s’appelle :", answers: ["institutionnalisation", "l’institutionnalisation"], expl: "L’<b>institutionnalisation</b> est le moment où l’enseignant fixe le savoir à retenir, au-delà de la situation vécue : c’est là qu’on écrit la trace écrite." },
    { q: "Durée de l’exposé :", choices: ["10 min", "20 min", "40 min"], answer: 1, expl: "À l’oral disciplinaire, l’exposé dure <b>20 minutes</b>, puis l’échange avec le jury dure 40 minutes." },
    { q: "Ordre logique :", choices: ["institutionnalisation → recherche → mise en commun", "recherche → mise en commun → institutionnalisation", "entraînement → recherche → bilan"], answer: 1, expl: "Les élèves <b>cherchent</b> d’abord, puis on <b>met en commun</b> pour comparer les procédures, et enfin on <b>institutionnalise</b> le savoir. On ne peut pas fixer un savoir avant de l’avoir construit." },
    { q: "Rédige une fiche de séance (CE1) pour introduire la soustraction avec retenue par la méthode de ton choix : objectif, matériel, déroulement en 4 phases, différenciation.", type: "open", model: "<p><b>Niveau</b> : CE1, séance 1/4. <b>Objectif</b> : calculer une soustraction posée avec retenue en utilisant la décomposition (« casser une dizaine »). <b>Prérequis</b> : numération dizaines/unités, soustraction sans retenue. <b>Matériel</b> : barres de 10 et cubes, ardoises. <b>Déroulement</b> : 1) rappel (5 min) : 45 − 23 sur ardoise ; 2) recherche (15 min) : « J’ai 52 billes, j’en donne 27 » avec le matériel : impossible d’enlever 7 unités à 2 → on échange une barre contre 10 cubes ; 3) mise en commun (10 min) : comparaison des procédures ; 4) institutionnalisation et trace écrite (10 min) : la soustraction posée avec la dizaine « cassée ». <b>Différenciation</b> : matériel conservé pour les élèves fragiles, nombres à trois chiffres pour les plus rapides. <b>Évaluation</b> : 3 calculs en fin de séance.</p>" }
  ],
  evaluation: [
    { q: "Temps de préparation de l’oral disciplinaire :", choices: ["30 min", "1 h", "2 h"], answer: 1, expl: "L’oral disciplinaire commence par <b>1 h de préparation</b>, suivie d’1 h d’épreuve (20 min d’exposé et 40 min d’échange)." },
    { q: "Durée de l’échange avec le jury :", choices: ["20 min", "40 min", "1 h"], answer: 1, expl: "Après les 20 minutes d’exposé, l’échange avec le jury dure <b>40 minutes</b> : 20 + 40 = 1 h d’épreuve." },
    { q: "Une rubrique indispensable de la fiche de préparation :", choices: ["la différenciation", "la météo", "la liste des parents"], answer: 0, expl: "La <b>différenciation</b> est indispensable : le jury veut voir comment tu adaptes ta séance aux élèves en difficulté comme aux plus avancés." },
    { q: "La mise en commun sert à :", choices: ["noter les élèves", "confronter et analyser les procédures", "faire une dictée"], answer: 1, expl: "La mise en commun sert à <b>confronter et analyser les procédures</b> des élèves : on compare les méthodes, on discute des erreurs, et on prépare l’institutionnalisation." },
    { q: "Le jury te signale une erreur dans ta séance. Tu :", choices: ["maintiens ta position coûte que coûte", "reconnais et proposes une correction argumentée", "changes de sujet"], answer: 1, expl: "Reconnaître une erreur est une preuve de professionnalisme : tu remercies, tu <b>reconnais</b> et tu proposes une <b>correction argumentée</b>. Le jury évalue aussi ta capacité à te remettre en question." }
  ]
});

window.ORAL.chapters.push({
  id: 5,
  title: "Pédagogie générale : apprendre et enseigner",
  short: "Pédagogie",
  sub: "Théories de l’apprentissage, évaluation, différenciation, gestion de classe",
  objectifs: [
    "Citer les grands auteurs (Piaget, Vygotski, Bruner) et les notions clés.",
    "Distinguer les types d’<b>évaluation</b> (diagnostique, formative, sommative).",
    "Expliquer la <b>différenciation</b> et l’<b>enseignement explicite</b>.",
    "Connaître les leviers de la <b>gestion de classe</b>."
  ],
  lesson: `
<h2>1. Les grandes théories de l’apprentissage</h2>
<table><tr><th>Auteur</th><th>Idée clé</th><th>En classe</th></tr>
<tr><td><b>Piaget</b></td><td>L’enfant construit ses connaissances par l’action ; stades de développement ; assimilation / accommodation.</td><td>Manipuler avant d’abstraire.</td></tr>
<tr><td><b>Vygotski</b></td><td><b>Zone proximale de développement</b> : ce que l’enfant réussit avec l’aide d’un autre ; rôle des interactions sociales.</td><td>Travail en groupes, tutorat, tâches ni trop faciles ni trop difficiles.</td></tr>
<tr><td><b>Bruner</b></td><td><b>Étayage</b> : l’adulte soutient l’enfant puis retire progressivement son aide.</td><td>Aides graduées.</td></tr>
<tr><td><b>Sciences cognitives</b> (Dehaene)</td><td>4 piliers de l’apprentissage : <b>attention</b>, <b>engagement actif</b>, <b>retour sur erreur</b>, <b>consolidation</b> (sommeil, répétition espacée).</td><td>Consignes claires, élèves actifs, feedback rapide, réactivations régulières.</td></tr></table>
<p><b>Conflit sociocognitif</b> : confronter des points de vue différents fait progresser (Doise et Mugny). <b>Métacognition</b> : réfléchir sur sa propre façon d’apprendre.</p>

<h2>2. Les trois évaluations</h2>
<ul><li><b>Diagnostique</b> : avant l’apprentissage, pour savoir où en sont les élèves (ex. évaluations nationales de début de CP, CE1…).</li>
<li><b>Formative</b> : pendant l’apprentissage, pour réguler ; elle n’est pas notée. <b>Évaluation formatrice / auto-évaluation</b> : l’élève évalue lui-même son travail grâce à des critères.</li>
<li><b>Sommative</b> : à la fin, pour faire le bilan. Elle est communiquée aux familles dans le <b>livret scolaire unique (LSU)</b>.</li></ul>

<h2>3. Différencier</h2>
<p>Différencier, c’est <b>adapter</b> l’enseignement aux besoins des élèves sans renoncer aux objectifs communs. On peut faire varier : les <b>contenus</b> (exercices plus ou moins complexes), les <b>supports</b> (manipulation, schéma, texte), les <b>aides</b> (outils, tutorat, coup de pouce), le <b>temps</b>, les <b>groupements</b> (besoin, hétérogène), les <b>productions</b> attendues.</p>

<h2>4. L’enseignement explicite</h2>
<p>L’enseignant rend visible ce qu’il faut apprendre et comment : 1) <b>modelage</b> (« je fais, je dis à voix haute ce que je pense ») ; 2) <b>pratique guidée</b> (« nous faisons ensemble ») ; 3) <b>pratique autonome</b> (« tu fais seul »). Il vérifie fréquemment la compréhension et organise des révisions régulières.</p>

<h2>5. La gestion de classe</h2>
<ul><li><b>Règles</b> peu nombreuses, positives, construites avec les élèves, affichées et rappelées.</li>
<li><b>Rituels</b> et routines qui sécurisent (entrée en classe, passation des consignes).</li>
<li><b>Consignes</b> courtes, une à la fois, reformulées par un élève.</li>
<li><b>Valoriser</b> les comportements attendus plutôt que relever uniquement les écarts.</li>
<li>Sanctions éducatives, proportionnées et <b>individuelles</b> ; jamais de punition collective ni d’humiliation ; les châtiments corporels sont interdits.</li>
<li>Le <b>climat scolaire</b> favorise les apprentissages : coopération, sentiment de sécurité.</li></ul>
`,
  videos: [
    { t: "Les 4 piliers de l’apprentissage", ch: "Stanislas Dehaene / Collège de France", q: "Dehaene quatre piliers de l'apprentissage" },
    { t: "Zone proximale de développement", ch: "Préparation CRPE", q: "Vygotski zone proximale de développement expliquée" },
    { t: "L’enseignement explicite", ch: "Préparation CRPE", q: "enseignement explicite modelage pratique guidée autonome" }
  ],
  resume: "<ul><li>Piaget (action), Vygotski (ZPD, interactions), Bruner (étayage), Dehaene (4 piliers).</li><li>Évaluation diagnostique / formative / sommative.</li><li>Différencier : contenus, supports, aides, temps, groupements.</li><li>Explicite : modelage → guidé → autonome.</li></ul>",
  exercises: [
    { q: "La zone proximale de développement est un concept de :", choices: ["Piaget", "Vygotski", "Bruner"], answer: 1, expl: "La zone proximale de développement est un concept de <b>Vygotski</b> : c’est l’écart entre ce que l’enfant fait seul et ce qu’il réussit avec l’aide d’un adulte ou d’un pair." },
    { q: "L’étayage est un concept de :", choices: ["Bruner", "Freinet", "Montessori"], answer: 0, expl: "L’étayage est un concept de <b>Bruner</b> : c’est l’ensemble des aides apportées par l’adulte pour que l’enfant réussisse une tâche qu’il ne pourrait pas faire seul, aides que l’on retire peu à peu." },
    { q: "L’évaluation réalisée pendant l’apprentissage pour le réguler est :", choices: ["diagnostique", "formative", "sommative"], answer: 1, expl: "L’évaluation <b>formative</b> a lieu pendant l’apprentissage pour le réguler. La diagnostique se fait avant (pour connaître les acquis), la sommative après (pour faire le bilan)." },
    { q: "Les 4 piliers de l’apprentissage selon Dehaene :", choices: ["attention, engagement actif, retour sur erreur, consolidation", "lire, écrire, compter, respecter", "écoute, silence, mémoire, notes"], answer: 0, expl: "Selon Stanislas Dehaene, on apprend grâce à 4 piliers : l’<b>attention</b>, l’<b>engagement actif</b>, le <b>retour sur erreur</b> et la <b>consolidation</b>." },
    { q: "Ordre de l’enseignement explicite :", choices: ["autonome → guidé → modelage", "modelage → pratique guidée → pratique autonome", "guidé → modelage → bilan"], answer: 1, expl: "Dans l’enseignement explicite, l’enseignant <b>montre</b> d’abord en verbalisant (modelage), puis les élèves s’exercent <b>avec son aide</b> (pratique guidée), et enfin <b>seuls</b> (pratique autonome)." },
    { q: "Cite trois façons de différencier une séance de lecture dans un CE2 hétérogène.", type: "open", model: "<p>1) Varier les <b>supports</b> : texte plus court ou avec illustrations pour les lecteurs fragiles, texte complet pour les autres ; 2) varier les <b>aides</b> : lecture à voix haute par l’enseignant ou un pair, lexique des mots difficiles, questions guidées ; 3) varier les <b>groupements</b> : groupe de besoin avec l’enseignant pendant que les autres travaillent en autonomie ; 4) varier les <b>productions</b> : réponse orale, dessin légendé ou réponse écrite rédigée. Les objectifs de compréhension restent communs.</p>" }
  ],
  evaluation: [
    { q: "Assimilation et accommodation sont des notions de :", choices: ["Piaget", "Vygotski", "Dehaene"], answer: 0, expl: "Assimilation et accommodation sont des notions de <b>Piaget</b> : on assimile une nouveauté à ce qu’on sait déjà, ou on accommode (on modifie) ses connaissances quand elles ne suffisent plus." },
    { q: "Le livret scolaire unique se nomme :", answers: ["LSU"], expl: "Le livret scolaire unique s’appelle le <b>LSU</b> : il suit l’élève du CP à la 3ᵉ et regroupe les bilans périodiques et de fin de cycle." },
    { q: "Une punition collective est :", choices: ["recommandée", "à proscrire", "obligatoire en cas de bruit"], answer: 1, expl: "Les punitions collectives sont <b>à proscrire</b> : une punition doit être individuelle et proportionnée. Punir toute la classe pénalise des élèves qui n’ont rien fait." },
    { q: "Le conflit sociocognitif repose sur :", choices: ["la confrontation de points de vue entre pairs", "la sanction", "la répétition seule"], answer: 0, expl: "Le conflit sociocognitif naît de la <b>confrontation de points de vue</b> entre pairs : en découvrant une réponse différente de la sienne, l’élève doit argumenter et peut faire évoluer sa pensée." },
    { q: "La consolidation des apprentissages est favorisée par :", choices: ["le sommeil et les révisions espacées", "une seule leçon très longue", "l’absence de révisions"], answer: 0, expl: "La mémoire se consolide pendant le <b>sommeil</b> et grâce aux <b>révisions espacées</b> dans le temps. Une seule longue leçon, sans y revenir, s’oublie vite." },
    { q: "Explique à un jury pourquoi tu ferais des rituels de calcul mental quotidiens.", type: "open", model: "<p>Les rituels quotidiens de calcul mental s’appuient sur la <b>consolidation</b> : des réactivations courtes et régulières ancrent les faits numériques en mémoire (tables, compléments à 10). Ils libèrent ainsi la mémoire de travail pour la résolution de problèmes. Ils mobilisent l’<b>attention</b> et l’<b>engagement actif</b> (ardoise, procédé La Martinière), permettent un <b>retour immédiat sur l’erreur</b> et rassurent les élèves grâce à un cadre connu. Ils répondent aux recommandations officielles sur la place du calcul mental.</p>" }
  ]
});
