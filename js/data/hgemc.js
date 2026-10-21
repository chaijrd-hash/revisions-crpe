/* HISTOIRE — GÉOGRAPHIE — EMC */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "hgemc",
  name: "Histoire-Géo-EMC",
  icon: "🌍",
  intro: "<p>Histoire, géographie et enseignement moral et civique font partie des <b>autres domaines</b> évalués à l’écrit. On attend une culture solide sur les <b>grands repères chronologiques et spatiaux</b> des programmes de l’école et du collège, la capacité à <b>analyser un document</b> (texte, carte, image, frise) et à connaître les <b>valeurs de la République</b>.</p>",
  chapters: []
});
window.HG = window.SUBJECTS[window.SUBJECTS.length - 1];

window.HG.chapters.push({
  id: 1,
  title: "Les grandes périodes et repères de l’histoire (Préhistoire → Moyen Âge)",
  short: "Histoire 1",
  sub: "Préhistoire, Antiquité, Gaule romaine, Moyen Âge",
  objectifs: [
    "Situer les <b>grandes périodes</b> et leurs bornes sur une frise.",
    "Connaître les <b>repères</b> des programmes de l’école (cycle 3) jusqu’à la fin du Moyen Âge.",
    "Savoir ce qu’est une <b>source historique</b> et comment l’analyser."
  ],
  lesson: `
<h2>1. Les 5 grandes périodes</h2>
<table><tr><th>Période</th><th>Début</th><th>Fin</th></tr>
<tr><td><b>Préhistoire</b></td><td>apparition des premiers humains (≈ 3 millions d’années ; <i>Homo sapiens</i> ≈ 300 000 ans)</td><td>invention de l’<b>écriture</b> (≈ −3300, Mésopotamie)</td></tr>
<tr><td><b>Antiquité</b></td><td>≈ −3300</td><td><b>476</b> : chute de l’Empire romain d’Occident</td></tr>
<tr><td><b>Moyen Âge</b></td><td>476</td><td><b>1492</b> : Christophe Colomb en Amérique (ou 1453, prise de Constantinople)</td></tr>
<tr><td><b>Temps modernes</b></td><td>1492</td><td><b>1789</b> : Révolution française</td></tr>
<tr><td><b>Époque contemporaine</b></td><td>1789</td><td>aujourd’hui</td></tr></table>
<p><b>Lire les dates</b> : « av. J.-C. » (ou −) = avant la naissance supposée de Jésus-Christ, an 1 de notre calendrier. Il n’y a pas d’année 0. Le <b>Iᵉʳ siècle</b> va de l’an 1 à l’an 100 ; le XXIᵉ siècle de 2001 à 2100. Astuce : 1515 → on ajoute 1 aux centaines : XVIᵉ siècle.</p>

<h2>2. La Préhistoire</h2>
<ul><li><b>Paléolithique</b> : chasseurs-cueilleurs <b>nomades</b>, outils en pierre taillée, maîtrise du <b>feu</b> (≈ −400 000), art pariétal (grotte <b>Chauvet</b> ≈ −36 000, <b>Lascaux</b> ≈ −18 000).</li>
<li><b>Néolithique</b> (à partir de ≈ −10 000 au Proche-Orient, −6 000 en France) : invention de l’<b>agriculture</b> et de l’<b>élevage</b>, <b>sédentarisation</b> (villages), poterie, pierre polie, mégalithes (Carnac).</li>
<li>Âge des métaux (cuivre, bronze, fer).</li></ul>

<h2>3. L’Antiquité</h2>
<ul><li>Premières civilisations de l’écriture : Mésopotamie (cunéiforme), Égypte (hiéroglyphes, pharaons).</li>
<li><b>Grèce</b> : cités (Athènes invente la <b>démocratie</b> au Vᵉ s. av. J.-C.), Jeux olympiques (−776).</li>
<li><b>Les Gaulois</b> : peuples celtes. <b>−52</b> : <b>Alésia</b>, défaite de <b>Vercingétorix</b> face à <b>Jules César</b> → la Gaule devient romaine (<b>Gaule romaine</b> : villes, routes, aqueducs comme le pont du Gard, latin, romanisation).</li>
<li>Le christianisme se diffuse puis devient religion officielle de l’Empire romain (IVᵉ s.).</li></ul>

<h2>4. Le Moyen Âge</h2>
<ul><li><b>496 (ou 498/499)</b> : baptême de <b>Clovis</b>, roi des Francs.</li>
<li><b>800</b> : <b>Charlemagne</b> couronné empereur ; il développe les écoles.</li>
<li><b>987</b> : <b>Hugues Capet</b> roi : début de la dynastie capétienne.</li>
<li>Société féodale : <b>seigneurs</b> (château fort), <b>paysans</b> (serfs), Église (abbayes, cathédrales romanes puis gothiques). « Ceux qui prient, ceux qui combattent, ceux qui travaillent ».</li>
<li><b>Croisades</b> (à partir de 1095), <b>guerre de Cent Ans</b> (1337-1453), <b>Jeanne d’Arc</b> (brûlée en 1431).</li>
<li>Le monde musulman : naissance de l’islam au VIIᵉ s. (Hégire, 622), Bagdad, Al-Andalus.</li></ul>

<h2>5. Travailler avec des sources</h2>
<p>Une <b>source</b> (ou document historique) est une trace du passé : <b>source primaire</b> (produite à l’époque : une lettre, une pièce de monnaie, une fresque) ou <b>secondaire</b> (produite plus tard par un historien). Pour l’analyser : <b>nature</b> du document, <b>auteur</b>, <b>date</b>, <b>destinataire</b>, <b>contexte</b>, puis ce qu’il nous apprend et ses <b>limites</b> (point de vue, propagande).</p>
`,
  videos: [
    { t: "La frise des grandes périodes", ch: "Lumni / Les Fondamentaux", q: "Lumni les grandes périodes de l'histoire frise chronologique" },
    { t: "Le Néolithique", ch: "C’est pas sorcier / Lumni", q: "Lumni néolithique agriculture sédentarisation" },
    { t: "Alésia et la Gaule romaine", ch: "Lumni", q: "Lumni Alésia Vercingétorix Gaule romaine" },
    { t: "La société féodale", ch: "Les Bons Profs", q: "les bons profs société féodale seigneurs Moyen Âge" }
  ],
  resume: "<ul><li>Préhistoire / −3300 écriture / Antiquité / 476 / Moyen Âge / 1492 / Temps modernes / 1789 / Époque contemporaine.</li><li>−52 Alésia ; 496 Clovis ; 800 Charlemagne ; 987 Hugues Capet.</li><li>Néolithique = agriculture + sédentarisation.</li></ul>",
  exercises: [
    { q: "Quel événement marque la fin de la Préhistoire ?", choices: ["la maîtrise du feu", "l’invention de l’écriture", "l’agriculture"], answer: 1, expl: "C’est l’<b>invention de l’écriture</b> (vers −3300, en Mésopotamie) qui fait passer de la Préhistoire à l’Histoire : on a enfin des traces écrites. Le feu et l’agriculture sont des étapes importantes, mais elles se situent <b>pendant</b> la Préhistoire." },
    { q: "En quelle année a eu lieu la bataille d’Alésia ? (format −52)", answers: ["-52", "−52", "52 av. J.-C.", "52 av J-C"], numeric: false, expl: "En <b>−52</b> (52 av. J.-C.), Jules César assiège Alésia et Vercingétorix doit se rendre : c’est la fin de la résistance gauloise. Le signe « − » indique une date <b>avant</b> la naissance de Jésus-Christ." },
    { q: "Quel siècle pour l’année 1789 ?", choices: ["XVIIᵉ", "XVIIIᵉ", "XIXᵉ"], answer: 1, expl: "Astuce : on prend les centaines et on ajoute 1. <b>1789</b> → 17 + 1 = <b>18</b>, donc XVIIIᵉ siècle (de 1701 à 1800). C’est le siècle des Lumières et de la Révolution." },
    { q: "Charlemagne est couronné empereur en :", answers: ["800"], expl: "Charlemagne est couronné empereur par le pape à Rome le 25 décembre <b>800</b>. Retiens ce chiffre rond : <b>800</b>, l’an de l’empereur à la barbe fleurie !" },
    { q: "La sédentarisation et l’agriculture caractérisent :", choices: ["le Paléolithique", "le Néolithique", "l’Antiquité"], answer: 1, expl: "Le <b>Néolithique</b> (« nouvelle pierre », à partir d’environ −10 000 au Proche-Orient) est l’époque où les hommes deviennent agriculteurs et éleveurs, et se fixent dans des villages. Au <b>Paléolithique</b>, ils étaient nomades et vivaient de chasse et de cueillette." },
    { q: "Date de la chute de l’Empire romain d’Occident :", answers: ["476"], expl: "En <b>476</b>, le dernier empereur romain d’Occident, Romulus Augustule, est déposé par le chef germain Odoacre. Cette date marque traditionnellement la fin de l’Antiquité et le début du Moyen Âge." },
    { q: "Une pièce de monnaie romaine retrouvée lors de fouilles est une source :", choices: ["primaire", "secondaire"], answer: 0, expl: "Une source <b>primaire</b> date de l’époque étudiée : la pièce a été fabriquée et utilisée par les Romains eux-mêmes. Une source <b>secondaire</b> est produite après coup (un manuel, un livre d’historien)." }
  ],
  evaluation: [
    { q: "Début du Moyen Âge :", answers: ["476"], expl: "Le Moyen Âge commence en <b>476</b>, avec la chute de l’Empire romain d’Occident. Il dure environ mille ans, jusqu’à la fin du XVᵉ siècle." },
    { q: "Fin du Moyen Âge (date retenue en France) :", answers: ["1492"], expl: "En France, on retient souvent <b>1492</b> : Christophe Colomb atteint l’Amérique, ce qui ouvre l’époque des Grandes Découvertes et des Temps modernes. On rencontre aussi 1453 (prise de Constantinople), mais 1492 est la date la plus utilisée à l’école." },
    { q: "Les peintures de Lascaux datent du :", choices: ["Paléolithique", "Néolithique", "Moyen Âge"], answer: 0, expl: "Les peintures de Lascaux (Dordogne) datent d’environ <b>−18 000 / −17 000 ans</b>, au <b>Paléolithique</b> : elles ont été faites par des chasseurs-cueilleurs nomades. Le Néolithique, avec l’agriculture, vient bien plus tard." },
    { q: "Hugues Capet devient roi en :", answers: ["987"], expl: "En <b>987</b>, Hugues Capet est élu roi des Francs : il fonde la dynastie des <b>Capétiens</b>, qui va régner (avec ses branches Valois et Bourbon) jusqu’à la Révolution." },
    { q: "La démocratie est inventée à :", choices: ["Rome", "Athènes", "Sparte"], answer: 1, expl: "La démocratie (« pouvoir du peuple ») naît à <b>Athènes</b> au Vᵉ siècle av. J.-C., avec Clisthène puis Périclès. Attention : seuls les citoyens votaient (pas les femmes, les esclaves ni les étrangers). Rome était une république, et Sparte une cité militaire dirigée par une oligarchie." },
    { q: "L’an 1515 appartient au :", choices: ["XVᵉ siècle", "XVIᵉ siècle"], answer: 1, expl: "1515 → 15 + 1 = <b>16</b>, donc <b>XVIᵉ siècle</b> (1501 à 1600). C’est l’année de la victoire de François Iᵉʳ à Marignan : « 1515, Marignan » !" },
    { q: "La guerre de Cent Ans oppose la France à :", choices: ["l’Espagne", "l’Angleterre", "l’Empire romain"], answer: 1, expl: "La guerre de Cent Ans (1337-1453, en réalité 116 ans) oppose la <b>France</b> à l’<b>Angleterre</b> pour la couronne de France. C’est l’époque de Jeanne d’Arc." },
    { q: "Qui a vaincu Vercingétorix ?", answers: ["Jules César", "César"], expl: "C’est <b>Jules César</b>, général romain, qui bat Vercingétorix à <b>Alésia en −52</b> et achève la conquête de la Gaule." }
  ]
});

window.HG.chapters.push({
  id: 2,
  title: "Repères de l’histoire (Temps modernes → aujourd’hui)",
  short: "Histoire 2",
  sub: "Renaissance, Louis XIV, Révolution, République, guerres mondiales, construction européenne",
  objectifs: [
    "Connaître les <b>repères</b> des Temps modernes et de l’époque contemporaine.",
    "Comprendre la mise en place de la <b>République</b> et de la démocratie en France.",
    "Situer les deux guerres mondiales et la construction européenne."
  ],
  lesson: `
<h2>1. Les Temps modernes (1492-1789)</h2>
<ul><li><b>Grandes découvertes</b> : 1492, Christophe Colomb atteint l’Amérique. Colonisation et traite atlantique.</li>
<li><b>Renaissance</b> (XVᵉ-XVIᵉ s.) : imprimerie (Gutenberg, vers 1450), humanisme, Léonard de Vinci, <b>François Iᵉʳ</b> (1515 Marignan ; 1539 ordonnance de Villers-Cotterêts : le français devient langue officielle des actes).</li>
<li><b>Réformes</b> religieuses (Luther, 1517) et guerres de religion ; <b>1598 : édit de Nantes</b> (Henri IV) accordant la liberté de culte aux protestants.</li>
<li><b>Louis XIV</b> (règne 1643-1715) : <b>monarchie absolue</b>, Versailles.</li>
<li>Les <b>Lumières</b> (XVIIIᵉ s.) : Voltaire, Montesquieu, Rousseau, Diderot (l’<i>Encyclopédie</i>) critiquent l’absolutisme et défendent la raison et la liberté.</li></ul>

<h2>2. La Révolution et l’Empire</h2>
<ul><li><b>14 juillet 1789</b> : prise de la Bastille. <b>4 août 1789</b> : abolition des privilèges. <b>26 août 1789</b> : <b>Déclaration des droits de l’homme et du citoyen</b>.</li>
<li><b>1792</b> : proclamation de la <b>Iʳᵉ République</b>. 1793 : exécution de Louis XVI.</li>
<li><b>Napoléon Bonaparte</b> : Code civil (1804), sacré empereur (1804), défaite à Waterloo (1815).</li></ul>

<h2>3. Le XIXᵉ siècle</h2>
<ul><li><b>1848</b> : <b>abolition définitive de l’esclavage</b> (Victor Schœlcher) et <b>suffrage universel masculin</b>.</li>
<li><b>Révolution industrielle</b> : machine à vapeur, chemin de fer, usines, exode rural, monde ouvrier.</li>
<li><b>1870</b> : IIIᵉ République. <b>1881-1882</b> : <b>lois Jules Ferry</b> : école <b>gratuite, laïque et obligatoire</b> (de 6 à 13 ans).</li>
<li><b>1905</b> : loi de <b>séparation des Églises et de l’État</b> (laïcité).</li>
<li>Colonisation : empire colonial français (Afrique, Asie).</li></ul>

<h2>4. Le XXᵉ siècle</h2>
<ul><li><b>Première Guerre mondiale (1914-1918)</b> : guerre des tranchées, Verdun (1916), armistice le <b>11 novembre 1918</b>.</li>
<li><b>Seconde Guerre mondiale (1939-1945)</b> : régime de Vichy et collaboration, <b>appel du 18 juin 1940</b> du général de Gaulle, Résistance, <b>génocide des Juifs et des Tsiganes</b> (Shoah), débarquement en Normandie (6 juin 1944), capitulation allemande le <b>8 mai 1945</b>.</li>
<li><b>1944</b> : <b>droit de vote des femmes</b> (premier vote en 1945).</li>
<li><b>1958</b> : <b>Vᵉ République</b> (de Gaulle). Décolonisation (indépendance de l’Algérie en 1962).</li>
<li><b>Construction européenne</b> : 1957 traité de Rome (CEE à 6), 1992 Maastricht (Union européenne), 2002 euro.</li>
<li>1981 : abolition de la peine de mort.</li></ul>
`,
  videos: [
    { t: "La Révolution française en résumé", ch: "Lumni / Les Fondamentaux", q: "Lumni Révolution française 1789 résumé" },
    { t: "Jules Ferry et l’école", ch: "Lumni", q: "Lumni Jules Ferry école gratuite laïque obligatoire" },
    { t: "La Première Guerre mondiale", ch: "Lumni / C’est pas sorcier", q: "Lumni première guerre mondiale résumé" },
    { t: "La Seconde Guerre mondiale", ch: "Lumni", q: "Lumni seconde guerre mondiale résumé collège" }
  ],
  resume: "<ul><li>1789 Révolution / DDHC ; 1792 Iʳᵉ République ; 1848 abolition de l’esclavage et suffrage universel masculin.</li><li>1881-82 lois Ferry ; 1905 laïcité.</li><li>1914-1918 ; 1939-1945 ; 1944 vote des femmes ; 1958 Vᵉ République.</li></ul>",
  exercises: [
    { q: "Date de la Déclaration des droits de l’homme et du citoyen :", answers: ["1789", "26 août 1789"], expl: "La Déclaration des droits de l’homme et du citoyen est adoptée le <b>26 août 1789</b>, quelques semaines après la prise de la Bastille. Son article 1 : « Les hommes naissent et demeurent libres et égaux en droits. »" },
    { q: "Les lois rendant l’école gratuite, laïque et obligatoire sont dues à :", choices: ["Victor Hugo", "Jules Ferry", "Napoléon"], answer: 1, expl: "Ce sont les lois de <b>Jules Ferry</b> (1881-1882) : l’école primaire devient gratuite (1881), puis obligatoire de 6 à 13 ans et laïque (1882). Victor Hugo était écrivain et Napoléon a créé les lycées, pas l’école primaire gratuite." },
    { q: "Année de la loi de séparation des Églises et de l’État :", answers: ["1905"], expl: "La loi du 9 décembre <b>1905</b> sépare les Églises et l’État : la République garantit la liberté de culte mais ne reconnaît ni ne finance aucun culte. C’est un pilier de la <b>laïcité</b>." },
    { q: "Les femmes obtiennent le droit de vote en France en :", answers: ["1944"], expl: "Le droit de vote des femmes est accordé par l’ordonnance du 21 avril <b>1944</b> (gouvernement provisoire du général de Gaulle). Elles votent pour la première fois en <b>1945</b>, aux élections municipales." },
    { q: "L’esclavage est définitivement aboli en France en :", answers: ["1848"], expl: "L’esclavage est aboli une première fois en 1794, rétabli par Napoléon en 1802, puis aboli <b>définitivement en 1848</b> grâce au décret porté par <b>Victor Schœlcher</b>, sous la IIᵉ République." },
    { q: "Le roi de la monarchie absolue qui fit construire Versailles :", answers: ["Louis XIV", "Louis 14"], expl: "C’est <b>Louis XIV</b>, le « Roi-Soleil » (règne 1643-1715). Il fait de Versailles le symbole de la monarchie absolue et s’y installe avec la cour en 1682." },
    { q: "La Vᵉ République est fondée en :", answers: ["1958"], expl: "La Vᵉ République est fondée en <b>1958</b> : en pleine guerre d’Algérie, le général de Gaulle fait adopter une nouvelle Constitution par référendum (4 octobre 1958). C’est toujours notre régime aujourd’hui." }
  ],
  evaluation: [
    { q: "Armistice de la Première Guerre mondiale :", answers: ["11 novembre 1918", "1918"], expl: "L’armistice est signé le <b>11 novembre 1918</b> à Rethondes : les combats cessent à 11 h. C’est pour cela que le 11 Novembre est un jour férié de commémoration." },
    { q: "Appel du général de Gaulle :", choices: ["18 juin 1940", "6 juin 1944", "8 mai 1945"], answer: 0, expl: "Le <b>18 juin 1940</b>, depuis Londres à la radio BBC, de Gaulle appelle les Français à continuer le combat : c’est l’acte fondateur de la France libre. Le 6 juin 1944, c’est le Débarquement en Normandie, et le 8 mai 1945 la capitulation allemande." },
    { q: "L’édit de Nantes (1598) accorde :", choices: ["le droit de vote", "la liberté de culte aux protestants", "l’abolition des privilèges"], answer: 1, expl: "Par l’édit de Nantes (1598), <b>Henri IV</b> met fin aux guerres de Religion en accordant aux <b>protestants</b> la liberté de culte (dans certains lieux) et des places de sûreté. Louis XIV le révoquera en 1685." },
    { q: "Philosophes des Lumières :", choices: ["Voltaire et Rousseau", "Clovis et Charlemagne", "Ferry et Gambetta"], answer: 0, expl: "<b>Voltaire</b> et <b>Rousseau</b> sont des philosophes des Lumières (XVIIIᵉ siècle), qui défendent la raison, la tolérance et la liberté. Clovis et Charlemagne sont des rois du haut Moyen Âge, Ferry et Gambetta des républicains du XIXᵉ siècle." },
    { q: "Proclamation de la Iʳᵉ République :", answers: ["1792"], expl: "La Iʳᵉ République est proclamée le <b>21-22 septembre 1792</b>, juste après la chute de la monarchie (10 août 1792). Louis XVI sera exécuté en janvier 1793." },
    { q: "Le Code civil est promulgué par :", answers: ["Napoléon", "Napoléon Bonaparte", "Bonaparte"], expl: "Le Code civil est promulgué en <b>1804</b> par <b>Napoléon Bonaparte</b> : il rassemble les règles du droit (famille, propriété, contrats) et reprend des acquis de la Révolution comme l’égalité devant la loi." },
    { q: "Le traité de Rome (1957) crée :", choices: ["l’ONU", "la CEE", "l’euro"], answer: 1, expl: "Le traité de Rome (1957) crée la <b>CEE</b> (Communauté économique européenne) entre 6 pays, ancêtre de l’Union européenne. L’ONU date de 1945 et l’euro est mis en circulation en 2002." },
    { q: "Abolition de la peine de mort en France :", answers: ["1981"], expl: "La peine de mort est abolie en <b>1981</b>, grâce à la loi portée par le garde des Sceaux <b>Robert Badinter</b>, sous la présidence de François Mitterrand." }
  ]
});

window.HG.chapters.push({
  id: 3,
  title: "Géographie : habiter le monde",
  short: "Géographie",
  sub: "Repères spatiaux, territoires français, mondialisation, développement durable",
  objectifs: [
    "Connaître les <b>repères spatiaux</b> : continents, océans, grands fleuves et reliefs de France.",
    "Comprendre la notion d’<b>« habiter »</b> au cœur des programmes de géographie de l’école.",
    "Lire une carte (légende, échelle, orientation), un paysage, un graphique.",
    "Connaître les enjeux du <b>développement durable</b> et de la mondialisation."
  ],
  lesson: `
<h2>1. Les grands repères mondiaux</h2>
<ul><li><b>6 continents</b> (on compte souvent : Afrique, Amérique, Antarctique, Asie, Europe, Océanie).</li>
<li><b>5 océans</b> : Pacifique (le plus grand), Atlantique, Indien, Arctique, Austral.</li>
<li>Population mondiale : environ <b>8 milliards</b> d’habitants (plus de la moitié en ville). Foyers de peuplement : Asie de l’Est, Asie du Sud, Europe.</li>
<li>Lignes : <b>équateur</b> (latitude 0°), tropiques, cercles polaires, méridien de Greenwich (longitude 0°).</li></ul>

<h2>2. La France</h2>
<ul><li>La France métropolitaine + 5 départements et régions d’outre-mer (<b>DROM</b> : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte) + des collectivités d’outre-mer.</li>
<li><b>13 régions métropolitaines</b> (+ 5 ultramarines) ; <b>101 départements</b>.</li>
<li>Population : environ <b>68 millions</b> d’habitants.</li>
<li><b>Fleuves</b> : la <b>Loire</b> (le plus long, ≈ 1 000 km), la Seine, le Rhône, la Garonne (+ le Rhin à la frontière).</li>
<li><b>Massifs</b> : Alpes (mont Blanc, 4 805 m), Pyrénées, Massif central, Jura, Vosges.</li>
<li>Grandes aires urbaines : Paris, Lyon, Marseille, Toulouse, Lille, Bordeaux… <b>Métropolisation</b> : concentration des populations et des activités dans les grandes villes.</li></ul>

<h2>3. « Habiter » : le concept central à l’école</h2>
<p>Au cycle 3, la géographie part de la question : <b>comment les humains habitent-ils les lieux ?</b> (se loger, travailler, se déplacer, se divertir). Thèmes : découvrir les lieux où j’habite ; se loger, travailler, se cultiver ; consommer en France ; se déplacer ; communiquer d’un bout à l’autre du monde grâce à Internet ; habiter un littoral, une montagne, un espace à fortes contraintes ; mieux habiter (développement durable).</p>

<h2>4. Lire une carte</h2>
<ul><li>Toujours : un <b>titre</b>, une <b>légende</b>, une <b>échelle</b>, une <b>orientation</b> (le nord), une <b>source</b>.</li>
<li>Échelle numérique 1/100 000 : 1 cm = 1 km ; échelle graphique : une barre graduée. (Voir maths ch. 7.)</li>
<li>Croquis : figurés <b>ponctuels</b> (villes), <b>linéaires</b> (fleuves, routes), <b>surfaciques</b> (zones).</li></ul>

<h2>5. Mondialisation et développement durable</h2>
<p>La <b>mondialisation</b> est la mise en relation des territoires du monde par les échanges (marchandises par conteneurs, flux financiers, informations par Internet, personnes). Le <b>développement durable</b> est « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs » (rapport Brundtland, 1987). Il a <b>3 piliers</b> : <b>environnemental</b>, <b>social</b>, <b>économique</b>. L’ONU a fixé 17 Objectifs de développement durable (ODD).</p>
`,
  videos: [
    { t: "Continents et océans", ch: "Lumni / Les Fondamentaux", q: "Lumni continents et océans géographie" },
    { t: "Les fleuves et reliefs de France", ch: "Lumni", q: "fleuves et reliefs de France carte cycle 3" },
    { t: "Le développement durable", ch: "1 jour 1 question", q: "1 jour 1 question développement durable" },
    { t: "La mondialisation expliquée", ch: "Les Bons Profs", q: "les bons profs mondialisation" }
  ],
  resume: "<ul><li>5 océans, 6 continents, ≈ 8 milliards d’humains.</li><li>France : 13 régions métropolitaines, 101 départements, 5 DROM, Loire = plus long fleuve.</li><li>Développement durable : 3 piliers.</li></ul>",
  exercises: [
    { q: "Le plus grand océan :", answers: ["Pacifique", "le Pacifique", "océan Pacifique"], expl: "L’océan <b>Pacifique</b> est le plus grand : il couvre environ un tiers de la surface de la Terre, plus que toutes les terres émergées réunies !" },
    { q: "Le plus long fleuve de France :", answers: ["Loire", "la Loire"], expl: "La <b>Loire</b> est le plus long fleuve de France (environ 1 000 km) ; elle se jette dans l’océan Atlantique. Le Rhin et le Rhône sont plus longs au total, mais une grande partie de leur cours est hors de France." },
    { q: "Le point culminant de la France (mont Blanc) mesure environ :", choices: ["2 800 m", "3 900 m", "4 800 m"], answer: 2, expl: "Le mont Blanc, dans les Alpes, culmine à environ <b>4 806 m</b> (sa hauteur varie un peu selon la neige) : c’est le plus haut sommet d’Europe occidentale." },
    { q: "Lequel n’est pas un DROM ?", choices: ["Guyane", "Mayotte", "Corse", "La Réunion"], answer: 2, expl: "La <b>Corse</b> est une collectivité territoriale de France métropolitaine, pas un DROM. Les 5 DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte." },
    { q: "Les 3 piliers du développement durable sont :", choices: ["social, économique, environnemental", "politique, culturel, social", "local, national, mondial"], answer: 0, expl: "Le développement durable répond aux besoins d’aujourd’hui sans compromettre ceux des générations futures. Il repose sur 3 piliers : <b>social</b> (équitable), <b>économique</b> (viable) et <b>environnemental</b> (vivable)." },
    { q: "Sur une carte au 1/100 000, 1 cm représente :", choices: ["100 m", "1 km", "10 km"], answer: 1, expl: "Au 1/100 000, 1 cm sur la carte = 100 000 cm en réalité. Or 100 000 cm = 1 000 m = <b>1 km</b>. Astuce : on enlève 5 zéros pour passer des cm aux km." }
  ],
  evaluation: [
    { q: "Combien de départements en France (DROM compris) ?", answers: ["101"], expl: "La France compte <b>101 départements</b> : 96 en métropole et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)." },
    { q: "La latitude 0° correspond à :", choices: ["le méridien de Greenwich", "l’équateur", "le tropique du Cancer"], answer: 1, expl: "La latitude 0° est l’<b>équateur</b>, qui partage la Terre en hémisphères Nord et Sud. Le méridien de Greenwich, lui, correspond à la <b>longitude</b> 0°." },
    { q: "Population mondiale actuelle environ :", choices: ["2 milliards", "8 milliards", "15 milliards"], answer: 1, expl: "La population mondiale a dépassé les <b>8 milliards</b> d’habitants en novembre 2022. Il y a deux siècles, vers 1800, on n’était qu’environ 1 milliard." },
    { q: "Le fleuve qui passe à Lyon et se jette dans la Méditerranée par un delta (la Camargue) :", answers: ["Rhône", "le Rhône"], expl: "Le <b>Rhône</b> traverse Lyon (où il reçoit la Saône) puis se jette dans la Méditerranée par un delta, la Camargue, à l’ouest de Marseille." },
    { q: "Concentration des hommes et des activités dans les grandes villes :", answers: ["métropolisation", "la métropolisation"], expl: "La <b>métropolisation</b> est la concentration des populations, des activités et des pouvoirs dans les plus grandes villes, les métropoles. C’est un phénomène majeur de la mondialisation." },
    { q: "Éléments obligatoires d’une carte :", choices: ["titre, légende, échelle, orientation", "uniquement la légende", "des couleurs vives"], answer: 0, expl: "Une carte doit toujours avoir un <b>titre</b> (de quoi parle-t-elle ?), une <b>légende</b> (que signifient les figurés ?), une <b>échelle</b> (quelles distances ?) et une <b>orientation</b> (où est le nord ?)." },
    { q: "Le concept central de la géographie à l’école primaire est :", answers: ["habiter"], expl: "Les programmes du primaire placent la notion d’<b>habiter</b> au cœur de la géographie : on étudie comment les hommes vivent, se déplacent et aménagent les lieux, en partant de l’environnement proche de l’élève." }
  ]
});

window.HG.chapters.push({
  id: 4,
  title: "Enseignement moral et civique (EMC)",
  short: "EMC",
  sub: "Valeurs et symboles de la République, laïcité, institutions, droits de l’enfant",
  objectifs: [
    "Connaître les <b>valeurs</b> et les <b>symboles</b> de la République.",
    "Définir précisément la <b>laïcité</b> et son application à l’école (Charte de la laïcité, loi de 2004).",
    "Connaître les institutions de la Vᵉ République et de l’Union européenne.",
    "Connaître les droits de l’enfant (CIDE 1989) et les objectifs de l’EMC."
  ],
  lesson: `
<h2>1. Les valeurs et symboles de la République</h2>
<ul><li><b>Devise</b> : « Liberté, Égalité, Fraternité ».</li>
<li><b>Symboles</b> : le drapeau tricolore (bleu, blanc, rouge), l’hymne national (<i>La Marseillaise</i>, Rouget de Lisle, 1792), <b>Marianne</b>, le <b>14 juillet</b> (fête nationale), le coq (symbole officieux), le sceau.</li>
<li>Article 1ᵉʳ de la Constitution : « La France est une République <b>indivisible, laïque, démocratique et sociale</b>. Elle assure l’égalité devant la loi de tous les citoyens sans distinction d’origine, de race ou de religion. »</li></ul>

<h2>2. La laïcité</h2>
<div class="box def"><span class="box-title">Définition</span>La laïcité repose sur la <b>séparation des Églises et de l’État</b> (loi du 9 décembre 1905) : l’État est <b>neutre</b>, il ne reconnaît ni ne subventionne aucun culte ; il garantit la <b>liberté de conscience</b> (croire ou ne pas croire) et le libre exercice des cultes dans le respect de l’ordre public.</div>
<ul><li>À l’école : les <b>enseignants</b> (agents publics) ont un devoir de <b>stricte neutralité</b> ; les <b>élèves</b> ne peuvent porter de signes religieux <b>ostensibles</b> (loi du 15 mars 2004).</li>
<li>La <b>Charte de la laïcité à l’École</b> (2013) comporte 15 articles et doit être affichée dans les établissements.</li>
<li>La laïcité n’est pas une opinion contre les religions : elle protège la liberté de chacun.</li></ul>

<h2>3. Les institutions</h2>
<ul><li><b>Pouvoir exécutif</b> : le <b>Président de la République</b> (élu au suffrage universel direct pour <b>5 ans</b>), le <b>Premier ministre</b> et le gouvernement.</li>
<li><b>Pouvoir législatif</b> : le <b>Parlement</b> = <b>Assemblée nationale</b> (577 députés élus pour 5 ans) + <b>Sénat</b> (sénateurs élus au suffrage indirect). Il vote les lois.</li>
<li><b>Pouvoir judiciaire</b> : les tribunaux. La <b>séparation des pouvoirs</b> (Montesquieu) protège les libertés.</li>
<li>Collectivités : commune (maire, conseil municipal), département, région.</li>
<li><b>Citoyenneté</b> : droit de vote à <b>18 ans</b> ; les citoyens européens peuvent voter aux élections municipales et européennes.</li>
<li><b>Union européenne</b> : 27 États membres ; Parlement européen (élu), Commission, Conseil.</li></ul>

<h2>4. Les droits de l’enfant</h2>
<p>La <b>Convention internationale des droits de l’enfant</b> (CIDE) a été adoptée par l’ONU le <b>20 novembre 1989</b>. Elle reconnaît notamment le droit à l’éducation, à la santé, à la protection contre la violence, à l’identité, à exprimer son opinion. Le 20 novembre est la journée des droits de l’enfant.</p>

<h2>5. L’EMC à l’école : les objectifs</h2>
<p>L’EMC vise à transmettre le <b>respect d’autrui</b>, les <b>valeurs de la République</b>, et à construire une <b>culture civique</b> (sensibilité, règle et droit, jugement, engagement). Méthodes : <b>débats réglés</b>, <b>discussions à visée philosophique</b>, conseils d’élèves, élection de délégués, jeux de rôles. La lutte contre le <b>harcèlement</b> (programme pHARe) et contre les discriminations en fait partie.</p>
`,
  videos: [
    { t: "Les symboles de la République", ch: "Lumni / 1 jour 1 question", q: "1 jour 1 question symboles de la République" },
    { t: "La laïcité expliquée", ch: "1 jour 1 question", q: "1 jour 1 question c'est quoi la laïcité" },
    { t: "Les institutions de la Vᵉ République", ch: "Lumni", q: "Lumni institutions Ve République séparation des pouvoirs" },
    { t: "Les droits de l’enfant", ch: "1 jour 1 question", q: "1 jour 1 question droits de l'enfant convention 1989" }
  ],
  resume: "<ul><li>Liberté, Égalité, Fraternité ; République indivisible, laïque, démocratique et sociale.</li><li>Laïcité : loi de 1905 ; loi de 2004 sur les signes religieux à l’école ; Charte de 2013.</li><li>Président : 5 ans ; Parlement = Assemblée + Sénat.</li><li>CIDE : 20 novembre 1989.</li></ul>",
  exercises: [
    { q: "Devise de la République :", choices: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Liberté, Justice, Solidarité"], answer: 0, expl: "<b>Liberté, Égalité, Fraternité</b> est la devise de la République, inscrite dans la Constitution. « Travail, Famille, Patrie » était celle du régime de Vichy (1940-1944) : attention au piège !" },
    { q: "La loi de séparation des Églises et de l’État date de :", answers: ["1905"], expl: "La loi de séparation des Églises et de l’État date du 9 décembre <b>1905</b>. Elle garantit la liberté de conscience et le libre exercice des cultes, et l’État ne reconnaît ni ne finance aucun culte." },
    { q: "Durée du mandat présidentiel :", answers: ["5", "5 ans", "cinq ans"], expl: "Depuis le référendum de 2000 (appliqué en 2002), le président est élu pour <b>5 ans</b> : c’est le quinquennat. Avant, le mandat durait 7 ans (septennat)." },
    { q: "Le Parlement est composé de :", choices: ["l’Assemblée nationale et le Sénat", "le Président et le gouvernement", "les maires"], answer: 0, expl: "Le Parlement, qui vote les lois, est composé de deux chambres : l’<b>Assemblée nationale</b> (577 députés) et le <b>Sénat</b> (348 sénateurs). Le Président et le gouvernement forment le pouvoir exécutif." },
    { q: "La CIDE a été adoptée en :", answers: ["1989"], expl: "La Convention internationale des droits de l’enfant (CIDE) a été adoptée par l’ONU le 20 novembre <b>1989</b>. Le 20 novembre est d’ailleurs la Journée internationale des droits de l’enfant." },
    { q: "Un enseignant peut-il porter un signe religieux en classe ?", choices: ["Oui, s’il est discret", "Non, il a un devoir de neutralité"], answer: 1, expl: "<b>Non</b> : l’enseignant est un agent du service public et a un <b>devoir de neutralité</b>. Il ne peut porter aucun signe religieux, même discret. Ce sont les élèves qui ne doivent pas porter de signes <b>ostensibles</b> (loi de 2004)." },
    { q: "Explique en quelques lignes, comme à des élèves de CM2, ce qu’est la laïcité.", type: "open", model: "<p>« La laïcité, c’est une règle de notre pays qui permet à chacun de croire en la religion de son choix, ou de ne croire en aucune religion. L’État et l’école ne favorisent aucune religion : ils sont neutres. À l’école publique, on apprend ensemble, quelles que soient nos croyances, et on se respecte. C’est ce qui nous permet de vivre ensemble librement et à égalité. »</p>" }
  ],
  evaluation: [
    { q: "Hymne national :", answers: ["La Marseillaise", "Marseillaise"], expl: "<b>La Marseillaise</b> est l’hymne national. Écrite par Rouget de Lisle en 1792 comme chant de guerre, elle fut chantée par les soldats venus de Marseille, d’où son nom." },
    { q: "Fête nationale :", answers: ["14 juillet", "le 14 juillet"], expl: "La fête nationale est le <b>14 juillet</b> (choisie en 1880). Elle rappelle la prise de la Bastille (14 juillet 1789) et la fête de la Fédération (14 juillet 1790)." },
    { q: "Nombre de députés :", answers: ["577"], expl: "L’Assemblée nationale compte <b>577 députés</b>, élus au suffrage universel direct pour 5 ans. Ne les confonds pas avec les 348 sénateurs." },
    { q: "La loi interdisant les signes religieux ostensibles à l’école date de :", answers: ["2004"], expl: "La loi du 15 mars <b>2004</b> interdit aux élèves des écoles, collèges et lycées publics de porter des signes religieux <b>ostensibles</b> (voile, kippa, grande croix…)." },
    { q: "Âge du droit de vote en France :", answers: ["18", "18 ans"], expl: "En France, on peut voter à <b>18 ans</b> depuis la loi de 1974 (avant, c’était 21 ans). Il faut aussi être de nationalité française et inscrit sur les listes électorales." },
    { q: "Le pouvoir législatif :", choices: ["applique les lois", "vote les lois", "juge"], answer: 1, expl: "Le pouvoir <b>législatif</b> (le Parlement) <b>vote les lois</b>. Le pouvoir exécutif (Président, gouvernement) les applique, et le pouvoir judiciaire (les juges) juge. C’est la séparation des pouvoirs chère à Montesquieu." },
    { q: "Nombre d’États membres de l’Union européenne :", answers: ["27"], expl: "L’Union européenne compte <b>27 États membres</b> depuis la sortie du Royaume-Uni (Brexit) le 31 janvier 2020." },
    { q: "Méthode pédagogique typique de l’EMC :", choices: ["dictée", "débat réglé", "calcul mental"], answer: 1, expl: "Le <b>débat réglé</b> (ou argumenté) est typique de l’EMC : les élèves échangent leurs arguments en respectant des règles (prise de parole, écoute, respect). Il développe le jugement et l’esprit critique." }
  ]
});
