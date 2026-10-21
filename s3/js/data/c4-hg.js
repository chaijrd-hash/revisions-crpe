/* HISTOIRE-GÉOGRAPHIE-EMC — niveau cycle 4 (collège), pour l'écrit 2 du CRPE bac+3 */

window.HG.intro = "<p>Pour l’<b>écrit 2</b>, tu peux choisir l’histoire-géographie-EMC : le programme de référence est celui du <b>cycle 4 (collège : 5ᵉ, 4ᵉ, 3ᵉ)</b>. Les premiers chapitres reprennent les bases de l’école ; la partie <b>« Collège »</b> (chapitres marqués 🎓) traite le programme du cycle 4 dans l’ordre chronologique, puis la géographie et l’EMC, et se termine par la <b>méthode de l’épreuve</b>.</p><p>Au concours, on attend des <b>repères précis</b> (dates, lieux, acteurs), l’<b>analyse de documents</b> et des réponses <b>rédigées et argumentées</b>.</p>";

window.HG.chapters.push({
  id: "hc4-medieval", pos: 10,
  title: "🎓 Du Moyen Âge à la monarchie absolue (5ᵉ)",
  short: "Moyen Âge → XVIIᵉ",
  sub: "Chrétientés et islam, féodalité, Renaissance, Réformes, absolutisme",
  objectifs: ["Situer les grandes étapes du Moyen Âge et des débuts de l’époque moderne.", "Expliquer la société féodale, le rôle de l’Église, les échanges entre chrétientés et islam.", "Expliquer Renaissance, Réformes, grandes découvertes et affirmation de l’État royal."],
  lesson: `
<h2>1. Chrétientés et islam (VIᵉ-XIIIᵉ siècle)</h2>
<ul><li><b>Byzance</b> (Empire romain d’Orient, capitale Constantinople) et l’<b>Occident chrétien</b> (pape à Rome) se séparent : <b>schisme de 1054</b> entre catholiques et orthodoxes.</li>
<li>L’<b>islam</b> naît en Arabie au VIIᵉ siècle (Mahomet, <b>Hégire en 622</b>). Califats omeyyade (Damas) puis abbasside (<b>Bagdad</b>, capitale intellectuelle) ; Al-Andalus en Espagne (Cordoue).</li>
<li>Contacts et conflits : <b>croisades</b> (première en 1095-1099, prise de Jérusalem), <b>Reconquista</b> en Espagne, mais aussi échanges commerciaux et transmission des savoirs (traductions, chiffres dits « arabes », médecine).</li></ul>

<h2>2. La société féodale (Xᵉ-XVᵉ siècle)</h2>
<ul><li>Société d’<b>ordres</b> : ceux qui prient (clergé), ceux qui combattent (nobles), ceux qui travaillent (paysans, l’immense majorité).</li>
<li>Lien <b>féodo-vassalique</b> : le vassal prête hommage à son seigneur (suzerain) et reçoit un <b>fief</b> ; la <b>seigneurie</b> encadre les paysans (corvées, taxes, banalités).</li>
<li>L’<b>Église</b> encadre la vie (sacrements, calendrier, dîme) ; essor des ordres monastiques (Cluny, Cîteaux) ; art roman puis gothique.</li>
<li>Essor des <b>villes</b> et du commerce (foires de Champagne, Hanse) à partir du XIᵉ siècle ; affirmation du pouvoir royal capétien (Philippe Auguste, Saint Louis, Philippe le Bel).</li></ul>

<h2>3. Transformations de l’Europe et ouverture sur le monde (XVᵉ-XVIIᵉ siècle)</h2>
<ul><li><b>Grandes découvertes</b> : Christophe Colomb atteint l’Amérique (<b>1492</b>), Vasco de Gama contourne l’Afrique (1498), Magellan (tour du monde, 1519-1522). Conquêtes (Cortés, empire aztèque), premiers empires coloniaux, début de la traite atlantique.</li>
<li><b>Humanisme et Renaissance</b> : imprimerie de Gutenberg (vers 1450), retour aux textes antiques, Érasme, Léonard de Vinci, Michel-Ange.</li>
<li><b>Réformes</b> : Luther (1517) puis Calvin contestent l’Église catholique ; Réforme catholique (concile de Trente) ; guerres de Religion en France (massacre de la Saint-Barthélemy en 1572) ; <b>édit de Nantes (1598)</b>.</li>
<li><b>Affirmation de l’État</b> : ordonnance de Villers-Cotterêts (1539) ; <b>Louis XIV</b> (règne personnel 1661-1715), monarchie absolue de droit divin, Versailles, centralisation (intendants), révocation de l’édit de Nantes (1685).</li></ul>
`,
  videos: [{ t: "La société féodale", ch: "Lumni", q: "Lumni société féodale seigneurs vassaux" }, { t: "Les grandes découvertes", ch: "Lumni", q: "Lumni grandes découvertes Christophe Colomb Magellan" }, { t: "Louis XIV et la monarchie absolue", ch: "Les Bons Profs", q: "les bons profs Louis XIV monarchie absolue" }],
  resume: "<ul><li>622 Hégire ; 1054 schisme ; 1095 première croisade.</li><li>Société d’ordres, lien féodo-vassalique, seigneurie.</li><li>1492 Colomb ; vers 1450 imprimerie ; 1517 Luther ; 1598 édit de Nantes.</li><li>Louis XIV : monarchie absolue de droit divin.</li></ul>",
  exercises: [
    { q: "L’Hégire, point de départ du calendrier musulman, date de :", answers: ["622"], expl: "En <b>622</b>, Mahomet quitte La Mecque pour Médine : c’est l’Hégire (« émigration »). Cette date devient l’an 1 du calendrier musulman." },
    { q: "Le schisme entre catholiques et orthodoxes a lieu en :", answers: ["1054"], expl: "En <b>1054</b>, le pape de Rome et le patriarche de Constantinople s’excommunient mutuellement : la chrétienté se coupe en deux, les <b>catholiques</b> à l’ouest et les <b>orthodoxes</b> à l’est." },
    { q: "Le vassal reçoit de son seigneur :", choices: ["un fief", "une dîme", "un édit"], answer: 0, expl: "Le vassal reçoit un <b>fief</b> (le plus souvent une terre) en échange de sa fidélité et de son aide militaire : c’est le lien féodal. La dîme est un impôt versé à l’Église, et un édit est une décision du roi." },
    { q: "Qui lance la Réforme protestante en 1517 ?", answers: ["Luther", "Martin Luther"], expl: "En <b>1517</b>, le moine allemand <b>Martin Luther</b> publie ses 95 thèses contre la vente des indulgences : c’est le début de la Réforme protestante." },
    { q: "La révocation de l’édit de Nantes est décidée par :", choices: ["Henri IV", "Louis XIV", "François Iᵉʳ"], answer: 1, expl: "C’est <b>Louis XIV</b> qui révoque l’édit de Nantes en <b>1685</b> (édit de Fontainebleau) pour imposer l’unité religieuse. Henri IV, lui, avait signé l’édit en 1598." },
    { q: "Explique en 5 lignes pourquoi on parle de « monarchie absolue » sous Louis XIV.", type: "open", model: "<p>Le roi concentre tous les pouvoirs (faire la loi, rendre la justice, lever l’impôt, déclarer la guerre) ; il affirme tenir son pouvoir de Dieu (<b>droit divin</b>) et ne pas avoir à rendre de comptes. Louis XIV gouverne sans Premier ministre à partir de 1661, contrôle la noblesse à Versailles, impose son autorité dans les provinces grâce aux intendants et cherche l’unité religieuse (révocation de l’édit de Nantes, 1685).</p>" }
  ],
  evaluation: [
    { q: "Capitale du califat abbasside :", choices: ["Damas", "Bagdad", "Cordoue"], answer: 1, expl: "La capitale des califes abbassides est <b>Bagdad</b>, fondée en 762, grand centre de savoir (la « Maison de la sagesse »). Damas était la capitale des Omeyyades, et Cordoue celle des Omeyyades d’Espagne." },
    { q: "Les trois ordres de la société médiévale :", choices: ["clergé, noblesse, paysans (tiers état)", "rois, ducs, comtes", "marchands, artisans, soldats"], answer: 0, expl: "La société médiévale se divise en trois ordres : ceux qui prient (<b>clergé</b>), ceux qui combattent (<b>noblesse</b>) et ceux qui travaillent (<b>paysans</b>, futur tiers état)." },
    { q: "Le premier tour du monde est réalisé par l’expédition de :", answers: ["Magellan"], expl: "L’expédition de <b>Magellan</b> part en 1519 et revient en 1522. Magellan meurt en route aux Philippines : c’est Elcano qui ramène le dernier navire en Espagne, mais on retient le nom de Magellan." },
    { q: "Invention de l’imprimerie à caractères mobiles en Europe :", choices: ["vers 1450", "vers 1250", "vers 1650"], answer: 0, expl: "Gutenberg met au point l’imprimerie à caractères mobiles à Mayence <b>vers 1450</b> ; sa célèbre Bible est imprimée vers 1455. Les livres deviennent moins chers et les idées circulent plus vite." },
    { q: "Le massacre de la Saint-Barthélemy a lieu en :", answers: ["1572"], expl: "Le massacre de la Saint-Barthélemy a lieu dans la nuit du 23 au 24 août <b>1572</b> à Paris : des milliers de protestants sont tués. C’est un épisode tragique des guerres de Religion." },
    { q: "Ordonnance qui impose le français dans les actes officiels :", answers: ["Villers-Cotterêts", "ordonnance de Villers-Cotterêts"], expl: "Par l’ordonnance de <b>Villers-Cotterêts</b> (1539), François Iᵉʳ impose le français à la place du latin dans les actes officiels et de justice. C’est le plus ancien texte encore en vigueur en France." }
  ]
});

window.HG.chapters.push({
  id: "hc4-revolutions", pos: 10.1,
  title: "🎓 Le XVIIIᵉ et le XIXᵉ siècle : Lumières, révolutions, industrialisation (4ᵉ)",
  short: "XVIIIᵉ-XIXᵉ",
  sub: "Lumières, Révolution, Empire, révolution industrielle, colonisation, IIIᵉ République",
  objectifs: ["Expliquer les idées des Lumières et les étapes de la Révolution française.", "Décrire l’industrialisation et ses conséquences sociales.", "Expliquer la conquête coloniale et l’enracinement de la République."],
  lesson: `
<h2>1. Le siècle des Lumières</h2>
<p>Philosophes : <b>Montesquieu</b> (<i>De l’esprit des lois</i>, 1748 : séparation des pouvoirs), <b>Voltaire</b> (tolérance, combat contre le fanatisme), <b>Rousseau</b> (<i>Du contrat social</i>, 1762 : souveraineté du peuple), <b>Diderot et d’Alembert</b> (<i>Encyclopédie</i>). Diffusion par les salons, les cafés, les académies. Le XVIIIᵉ siècle est aussi celui de l’essor de la <b>traite atlantique</b> et des ports négriers.</p>

<h2>2. Révolutions</h2>
<ul><li><b>Révolution américaine</b> : Déclaration d’indépendance (<b>4 juillet 1776</b>), Constitution de 1787.</li>
<li><b>Révolution française</b> : États généraux (mai 1789), serment du Jeu de paume, prise de la Bastille (<b>14 juillet 1789</b>), abolition des privilèges (4 août), <b>DDHC (26 août 1789)</b>, monarchie constitutionnelle (1791), <b>Iʳᵉ République (septembre 1792)</b>, exécution de Louis XVI (janvier 1793), Terreur (1793-1794).</li>
<li><b>Napoléon Bonaparte</b> : coup d’État (1799), Code civil (1804), sacre (1804), conquêtes puis défaite (Waterloo, 1815). Il conserve des acquis révolutionnaires (égalité civile) mais rétablit l’esclavage (1802).</li>
<li>Au XIXᵉ siècle, alternance de régimes : Restauration, monarchie de Juillet (1830), <b>IIᵉ République (1848)</b> : suffrage universel masculin et abolition de l’esclavage ; Second Empire (Napoléon III, 1852-1870).</li></ul>

<h2>3. L’industrialisation</h2>
<ul><li>Partie d’Angleterre à la fin du XVIIIᵉ siècle : machine à vapeur, charbon, textile, chemin de fer, sidérurgie ; deuxième industrialisation fin XIXᵉ (électricité, pétrole, chimie, automobile).</li>
<li>Conséquences : <b>exode rural</b>, urbanisation, naissance du <b>monde ouvrier</b> (conditions de travail dures, travail des enfants), essor de la bourgeoisie, mouvement ouvrier (syndicats autorisés en 1884, socialisme).</li></ul>

<h2>4. Conquêtes et sociétés coloniales</h2>
<p>Les puissances européennes se partagent l’Afrique (conférence de Berlin, 1884-1885). La France conquiert l’Algérie (dès 1830), l’Afrique de l’Ouest, Madagascar, l’Indochine. Sociétés coloniales inégalitaires : colons et « indigènes » (code de l’indigénat), exploitation économique, résistances.</p>

<h2>5. La IIIᵉ République (1870-1940)</h2>
<p>Proclamée le 4 septembre 1870, elle s’enracine : lois sur les libertés (presse 1881, réunion, syndicats 1884), <b>lois Ferry (1881-1882)</b>, affaire Dreyfus (1894-1906), <b>loi de 1905</b> de séparation des Églises et de l’État. Les femmes restent exclues du vote, malgré les combats des féministes.</p>
`,
  videos: [{ t: "La Révolution française", ch: "Lumni", q: "Lumni Révolution française étapes 1789 1799" }, { t: "La révolution industrielle", ch: "Les Bons Profs", q: "les bons profs révolution industrielle XIXe" }, { t: "La IIIe République", ch: "Lumni", q: "Lumni Troisième République enracinement" }],
  resume: "<ul><li>Montesquieu (séparation des pouvoirs), Rousseau (souveraineté du peuple).</li><li>1776 ; 1789 ; 1792 ; 1804 ; 1815 ; 1848.</li><li>Industrialisation : exode rural, monde ouvrier.</li><li>IIIᵉ République : lois Ferry, 1905.</li></ul>",
  exercises: [
    { q: "Le philosophe de la séparation des pouvoirs :", answers: ["Montesquieu"], expl: "<b>Montesquieu</b>, dans <i>De l’esprit des lois</i> (1748), explique qu’il faut séparer les pouvoirs législatif, exécutif et judiciaire pour éviter les abus : « le pouvoir arrête le pouvoir »." },
    { q: "Déclaration d’indépendance des États-Unis :", answers: ["1776", "4 juillet 1776"], expl: "Les treize colonies anglaises d’Amérique proclament leur indépendance le <b>4 juillet 1776</b>. C’est pour cela que le 4 Juillet est la fête nationale des États-Unis." },
    { q: "Le Code civil est promulgué en :", answers: ["1804"], expl: "Le Code civil est promulgué par Napoléon Bonaparte en <b>1804</b>, l’année même où il devient empereur. Il fixe les règles du droit civil (famille, propriété) et l’égalité devant la loi." },
    { q: "En 1848, la IIᵉ République instaure :", choices: ["le suffrage universel masculin et l’abolition de l’esclavage", "le vote des femmes", "la laïcité"], answer: 0, expl: "En <b>1848</b>, la IIᵉ République instaure le <b>suffrage universel masculin</b> et abolit l’<b>esclavage</b> (décret Schœlcher). Les femmes n’obtiendront le vote qu’en 1944, et la laïcité sera fixée en 1905." },
    { q: "Conférence qui organise le partage de l’Afrique :", answers: ["Berlin", "conférence de Berlin"], expl: "La conférence de <b>Berlin</b> (1884-1885) réunit les puissances européennes, qui fixent les règles du partage de l’Afrique entre elles, sans aucun Africain autour de la table." },
    { q: "Décris en 5 lignes les conséquences sociales de l’industrialisation.", type: "open", model: "<p>L’industrialisation entraîne un <b>exode rural</b> massif et la croissance des villes. Une nouvelle classe sociale apparaît, le <b>monde ouvrier</b>, qui travaille dans des conditions difficiles (longues journées, salaires faibles, travail des enfants, logements insalubres). La bourgeoisie industrielle s’enrichit. Les ouvriers s’organisent (grèves, syndicats légalisés en 1884, idées socialistes) et obtiennent progressivement des lois sociales.</p>" }
  ],
  evaluation: [
    { q: "Auteur de « Du contrat social » :", answers: ["Rousseau", "Jean-Jacques Rousseau"], expl: "<i>Du contrat social</i> (1762) est l’œuvre de <b>Jean-Jacques Rousseau</b>, philosophe des Lumières : il y défend l’idée que le pouvoir appartient au peuple (souveraineté populaire)." },
    { q: "Abolition des privilèges :", choices: ["4 août 1789", "14 juillet 1789", "21 janvier 1793"], answer: 0, expl: "Dans la nuit du <b>4 août 1789</b>, les députés abolissent les privilèges de la noblesse et du clergé. Le 14 juillet 1789 est la prise de la Bastille, et le 21 janvier 1793 l’exécution de Louis XVI." },
    { q: "Défaite définitive de Napoléon :", answers: ["Waterloo"], expl: "Napoléon est définitivement battu à <b>Waterloo</b> (Belgique actuelle) le 18 juin 1815, à la fin des Cent-Jours. Il est ensuite exilé à Sainte-Hélène, où il meurt en 1821." },
    { q: "Pays où débute la révolution industrielle :", answers: ["Angleterre", "Royaume-Uni", "l’Angleterre"], expl: "La révolution industrielle commence en <b>Angleterre</b> à la fin du XVIIIᵉ siècle, grâce au charbon, à la machine à vapeur (perfectionnée par James Watt) et à l’industrie textile." },
    { q: "Les syndicats sont autorisés en France en :", answers: ["1884"], expl: "La loi Waldeck-Rousseau de <b>1884</b> autorise les syndicats en France. Les ouvriers peuvent désormais s’organiser légalement pour défendre leurs droits." },
    { q: "L’affaire Dreyfus oppose :", choices: ["dreyfusards et antidreyfusards", "royalistes et bonapartistes", "Anglais et Français"], answer: 0, expl: "L’affaire Dreyfus (1894-1906) divise la France entre <b>dreyfusards</b>, qui défendent le capitaine juif injustement condamné pour trahison (comme Zola avec « J’accuse… ! »), et <b>antidreyfusards</b>." }
  ]
});

window.HG.chapters.push({
  id: "hc4-guerres", pos: 10.2,
  title: "🎓 L’Europe, théâtre des guerres totales (1914-1945) (3ᵉ)",
  short: "Guerres totales",
  sub: "Grande Guerre, révolution russe, totalitarismes, Seconde Guerre mondiale, génocides",
  objectifs: ["Expliquer ce qu’est une guerre totale et en citer les manifestations.", "Caractériser les régimes totalitaires.", "Connaître les étapes de la Seconde Guerre mondiale, le génocide des Juifs et des Tsiganes, la France de Vichy et la Résistance."],
  lesson: `
<h2>1. La Première Guerre mondiale (1914-1918)</h2>
<ul><li>Déclenchement : attentat de Sarajevo (28 juin 1914), jeu des alliances : Triple Entente (France, Royaume-Uni, Russie) contre Triple Alliance / puissances centrales (Allemagne, Autriche-Hongrie).</li>
<li>Guerre de mouvement puis de <b>tranchées</b> ; batailles de <b>Verdun</b> et de la Somme (1916) ; violence de masse ; <b>génocide des Arméniens</b> par l’Empire ottoman (1915).</li>
<li><b>Guerre totale</b> : mobilisation de toute la société (économie de guerre, femmes à l’usine, propagande, colonies).</li>
<li>1917 : entrée en guerre des États-Unis ; révolutions russes. Armistice le <b>11 novembre 1918</b> ; traité de <b>Versailles (1919)</b>.</li></ul>

<h2>2. Les régimes totalitaires</h2>
<ul><li><b>URSS de Staline</b> : parti unique communiste, culte du chef, collectivisation, terreur (goulag, Grande Terreur 1936-1938).</li>
<li><b>Allemagne nazie</b> : Hitler chancelier en <b>janvier 1933</b>, parti unique, idéologie raciste et antisémite (lois de Nuremberg, 1935), embrigadement de la jeunesse, terreur (SS, Gestapo, camps de concentration).</li>
<li>Points communs : un parti et un chef uniques, une idéologie qui veut créer un « homme nouveau », la propagande, la terreur, l’encadrement de toute la société.</li></ul>

<h2>3. La Seconde Guerre mondiale (1939-1945)</h2>
<ul><li>Invasion de la Pologne (1ᵉʳ septembre 1939) ; défaite française (juin 1940) ; guerre mondiale à partir de 1941 (Pearl Harbor, invasion de l’URSS).</li>
<li>Guerre d’anéantissement ; tournants : <b>Stalingrad</b> (1942-1943), débarquement en Normandie (<b>6 juin 1944</b>) ; capitulation de l’Allemagne (<b>8 mai 1945</b>) ; bombes atomiques sur Hiroshima et Nagasaki (août 1945).</li>
<li><b>Génocide des Juifs (Shoah)</b> et des <b>Tsiganes</b> : ghettos, fusillades de masse, centres de mise à mort (Auschwitz-Birkenau) : environ <b>6 millions</b> de Juifs assassinés.</li></ul>

<h2>4. La France défaite et occupée</h2>
<p>Armistice du 22 juin 1940 ; le maréchal <b>Pétain</b> instaure le <b>régime de Vichy</b> (État français, autoritaire, antisémite), qui <b>collabore</b> avec l’Allemagne (rafle du Vél’ d’Hiv, juillet 1942). <b>Appel du 18 juin 1940</b> du général de Gaulle ; <b>Résistance</b> intérieure unifiée par Jean Moulin (CNR, 1943) ; Libération (1944).</p>
`,
  videos: [{ t: "La Première Guerre mondiale", ch: "Lumni", q: "Lumni première guerre mondiale guerre totale" }, { t: "Les régimes totalitaires", ch: "Les Bons Profs", q: "les bons profs régimes totalitaires 3e" }, { t: "Vichy, collaboration et Résistance", ch: "Lumni", q: "Lumni Vichy collaboration Résistance" }],
  resume: "<ul><li>1914-1918 : guerre totale ; 11 novembre 1918 ; Versailles 1919.</li><li>Totalitarismes : parti unique, chef, idéologie, propagande, terreur.</li><li>1939-1945 ; Stalingrad ; 6 juin 1944 ; 8 mai 1945 ; Shoah.</li><li>Vichy collabore ; 18 juin 1940 ; Jean Moulin.</li></ul>",
  exercises: [
    { q: "Attentat qui déclenche la Première Guerre mondiale :", answers: ["Sarajevo", "attentat de Sarajevo"], expl: "Le 28 juin 1914, l’archiduc François-Ferdinand, héritier de l’Autriche-Hongrie, est assassiné à <b>Sarajevo</b> par un nationaliste serbe. Le jeu des alliances entraîne la guerre en quelques semaines." },
    { q: "Le génocide des Arméniens a lieu en :", answers: ["1915"], expl: "En <b>1915</b>, en pleine guerre, le gouvernement de l’Empire ottoman organise l’extermination des Arméniens : environ 1,2 million de morts. C’est le premier génocide du XXᵉ siècle." },
    { q: "Hitler devient chancelier en :", answers: ["1933", "janvier 1933"], expl: "Hitler est nommé chancelier le 30 janvier <b>1933</b> par le président Hindenburg. En quelques mois, il installe une dictature : le parti nazi devient parti unique." },
    { q: "Bataille qui marque un tournant sur le front de l’Est :", answers: ["Stalingrad"], expl: "La bataille de <b>Stalingrad</b> (1942-1943) se termine par la capitulation de l’armée allemande en février 1943 : c’est le tournant de la guerre à l’Est, l’Armée rouge passe à l’offensive." },
    { q: "Qui unifie la Résistance intérieure ?", answers: ["Jean Moulin", "Moulin"], expl: "Envoyé par de Gaulle, <b>Jean Moulin</b> unifie les mouvements de la Résistance intérieure et crée le Conseil national de la Résistance (CNR) en mai 1943. Arrêté, il meurt après avoir été torturé." },
    { q: "Définis la notion de guerre totale avec deux exemples.", type: "open", model: "<p>Une guerre totale mobilise <b>toutes les ressources</b> d’un pays (hommes, économie, sciences, opinion publique) et touche aussi les <b>civils</b>. Exemples : en 1914-1918, les femmes remplacent les hommes dans les usines d’armement et la propagande encadre l’opinion ; en 1939-1945, les bombardements des villes et les génocides visent directement les populations civiles.</p>" }
  ],
  evaluation: [
    { q: "Traité qui met fin à la Première Guerre mondiale avec l’Allemagne :", answers: ["Versailles", "traité de Versailles"], expl: "Le <b>traité de Versailles</b> est signé le 28 juin 1919 avec l’Allemagne, jugée responsable de la guerre : elle perd des territoires (dont l’Alsace-Moselle) et doit payer de lourdes réparations." },
    { q: "Le régime de Vichy est dirigé par :", answers: ["Pétain", "le maréchal Pétain", "Philippe Pétain"], expl: "Le régime de Vichy (1940-1944) est dirigé par le <b>maréchal Pétain</b>, qui supprime la République et collabore avec l’Allemagne nazie. Sa devise : « Travail, Famille, Patrie »." },
    { q: "Rafle du Vél’ d’Hiv :", choices: ["juillet 1942", "juin 1940", "juin 1944"], answer: 0, expl: "La rafle du Vél’ d’Hiv a lieu les 16 et 17 <b>juillet 1942</b> : plus de 13 000 Juifs, dont environ 4 000 enfants, sont arrêtés à Paris par la police française, puis déportés." },
    { q: "Lois antisémites de Nuremberg :", answers: ["1935"], expl: "Les lois de Nuremberg (<b>1935</b>) privent les Juifs allemands de la citoyenneté et interdisent les mariages avec des non-Juifs. C’est une étape dans la persécution qui mènera à la Shoah." },
    { q: "Caractéristique commune aux régimes totalitaires :", choices: ["le pluralisme politique", "le parti unique et la terreur", "la séparation des pouvoirs"], answer: 1, expl: "Les régimes totalitaires (URSS de Staline, Allemagne nazie) reposent sur un <b>parti unique</b>, un chef tout-puissant, la propagande et la <b>terreur</b>. Pluralisme et séparation des pouvoirs sont au contraire des traits de la démocratie." },
    { q: "Nombre approximatif de Juifs assassinés pendant la Shoah :", choices: ["600 000", "6 millions", "60 millions"], answer: 1, expl: "Environ <b>6 millions</b> de Juifs d’Europe ont été assassinés par les nazis pendant la Shoah, dans les ghettos, par les fusillades et dans les centres de mise à mort comme Auschwitz-Birkenau." }
  ]
});

window.HG.chapters.push({
  id: "hc4-depuis1945", pos: 10.3,
  title: "🎓 Le monde et la France depuis 1945 (3ᵉ)",
  short: "Depuis 1945",
  sub: "Guerre froide, décolonisation, Europe, Vᵉ République, société",
  objectifs: ["Expliquer la guerre froide et ses crises.", "Connaître les étapes de la construction européenne.", "Décrire la refondation de la République et la Vᵉ République, et les évolutions de la société."],
  lesson: `
<h2>1. La guerre froide (1947-1991)</h2>
<ul><li>Affrontement indirect entre les <b>États-Unis</b> (bloc de l’Ouest, démocratie libérale, capitalisme) et l’<b>URSS</b> (bloc de l’Est, communisme) : course aux armements nucléaires, propagande, conflits par alliés interposés.</li>
<li>Crises : blocus de Berlin (1948-1949), guerre de Corée (1950-1953), <b>mur de Berlin (1961)</b>, crise des missiles de <b>Cuba (1962)</b>, guerre du Vietnam.</li>
<li>Fin : chute du mur de Berlin (<b>9 novembre 1989</b>), réunification allemande (1990), disparition de l’URSS (<b>décembre 1991</b>).</li></ul>

<h2>2. Décolonisations et nouveaux États</h2>
<p>Indépendance de l’Inde (1947), guerre d’Indochine (Diên Biên Phu, 1954), <b>guerre d’Algérie (1954-1962)</b>, indépendances africaines (1960), conférence de Bandung (1955) et affirmation du tiers-monde.</p>

<h2>3. La construction européenne</h2>
<p>CECA (1951), <b>traité de Rome (1957)</b> : CEE à 6, élection du Parlement européen au suffrage universel (1979), <b>traité de Maastricht (1992)</b> : Union européenne, euro (2002 en pièces et billets), élargissements (27 membres aujourd’hui, après le Brexit en 2020).</p>

<h2>4. Une République repensée</h2>
<ul><li>1944-1947 : programme du CNR, <b>droit de vote des femmes</b> (ordonnance de 1944, premier vote en 1945), <b>Sécurité sociale (1945)</b>, nationalisations, IVᵉ République (1946).</li>
<li><b>Vᵉ République (1958)</b> : constitution voulue par de Gaulle, président fort ; élection du président au suffrage universel direct (référendum de 1962) ; alternance (1981, François Mitterrand) ; cohabitations.</li>
<li>Société : Trente Glorieuses et société de consommation, Mai 1968, évolution des droits des femmes (contraception, loi Neuwirth 1967 ; IVG, <b>loi Veil 1975</b> ; parité), majorité à 18 ans (1974), abolition de la peine de mort (1981).</li></ul>
`,
  videos: [{ t: "La guerre froide", ch: "Lumni", q: "Lumni guerre froide résumé" }, { t: "La construction européenne", ch: "Les Bons Profs", q: "les bons profs construction européenne étapes" }, { t: "La Vᵉ République", ch: "Lumni", q: "Lumni Ve République 1958 de Gaulle" }],
  resume: "<ul><li>Guerre froide : 1947-1991 ; Berlin 1961-1989 ; Cuba 1962.</li><li>Europe : 1951, 1957, 1992, 2002.</li><li>1944 vote des femmes ; 1945 Sécurité sociale ; 1958 Vᵉ République ; 1962 élection directe du président ; 1975 loi Veil.</li></ul>",
  exercises: [
    { q: "Construction du mur de Berlin :", answers: ["1961"], expl: "Le mur de Berlin est construit dans la nuit du 12 au 13 août <b>1961</b> par la RDA, pour empêcher les Allemands de l’Est de fuir vers l’Ouest. Il devient le symbole de la guerre froide." },
    { q: "Crise des missiles de Cuba :", answers: ["1962"], expl: "En octobre <b>1962</b>, les États-Unis découvrent des missiles nucléaires soviétiques à Cuba. Le monde frôle la guerre nucléaire, avant que l’URSS n’accepte de les retirer." },
    { q: "Traité qui crée l’Union européenne :", answers: ["Maastricht", "traité de Maastricht"], expl: "Le traité de <b>Maastricht</b> (signé en 1992, en vigueur en 1993) crée l’Union européenne et prévoit la monnaie unique, l’euro. Ne le confonds pas avec le traité de Rome (1957), qui crée la CEE." },
    { q: "La loi autorisant l’IVG (1975) porte le nom de :", answers: ["Veil", "Simone Veil", "loi Veil"], expl: "La loi de 1975 autorisant l’IVG porte le nom de <b>Simone Veil</b>, ministre de la Santé, qui l’a défendue avec courage devant l’Assemblée. Elle était aussi une rescapée d’Auschwitz." },
    { q: "Depuis 1962, le président est élu :", choices: ["par le Parlement", "au suffrage universel direct", "par les maires"], answer: 1, expl: "Depuis le référendum de <b>1962</b> voulu par de Gaulle, le président est élu au <b>suffrage universel direct</b>, c’est-à-dire directement par les citoyens. Cela renforce beaucoup sa légitimité." },
    { q: "Explique en 5 lignes pourquoi on parle de « guerre froide ».", type: "open", model: "<p>Les États-Unis et l’URSS s’opposent de 1947 à 1991 sans jamais s’affronter directement par les armes, car la possession de l’arme nucléaire rend une guerre directe trop dangereuse (équilibre de la terreur). L’affrontement passe par la course aux armements, la propagande, la conquête spatiale et des conflits indirects (Corée, Vietnam) ou des crises (Berlin, Cuba).</p>" }
  ],
  evaluation: [
    { q: "Chute du mur de Berlin :", answers: ["1989", "9 novembre 1989"], expl: "Le mur de Berlin tombe le <b>9 novembre 1989</b>, sous la pression des Allemands de l’Est. L’Allemagne est réunifiée moins d’un an après, le 3 octobre 1990." },
    { q: "Disparition de l’URSS :", answers: ["1991"], expl: "L’URSS disparaît en décembre <b>1991</b> : Gorbatchev démissionne et les républiques deviennent indépendantes. C’est la fin de la guerre froide." },
    { q: "Création de la Sécurité sociale :", answers: ["1945"], expl: "La Sécurité sociale est créée en <b>1945</b> (ordonnances d’octobre 1945), à la Libération, en appliquant le programme du Conseil national de la Résistance. Elle protège contre la maladie, la vieillesse, les accidents du travail." },
    { q: "Premier président socialiste de la Vᵉ République (1981) :", answers: ["François Mitterrand", "Mitterrand"], expl: "<b>François Mitterrand</b> est élu en 1981 : c’est le premier président socialiste de la Vᵉ République. Il reste au pouvoir 14 ans (deux septennats, 1981-1995)." },
    { q: "La majorité passe à 18 ans en :", answers: ["1974"], expl: "La majorité civile et le droit de vote passent de 21 à <b>18 ans</b> en <b>1974</b>, au début de la présidence de Valéry Giscard d’Estaing." },
    { q: "La CEE est créée par le traité de :", answers: ["Rome", "traité de Rome"], expl: "La CEE (Communauté économique européenne) est créée par le <b>traité de Rome</b> en 1957, entre 6 pays : France, RFA, Italie, Belgique, Pays-Bas et Luxembourg." }
  ]
});

window.HG.chapters.push({
  id: "gc4-monde", pos: 10.4,
  title: "🎓 Géographie : population, ressources, villes et mondialisation (5ᵉ-4ᵉ)",
  short: "Géo du monde",
  sub: "Démographie, développement, ressources, risques, urbanisation, mobilités, mondialisation",
  objectifs: ["Maîtriser le vocabulaire : croissance démographique, IDH, développement durable, métropole, mondialisation.", "Expliquer les enjeux des ressources et du changement global.", "Décrire l’urbanisation et les espaces de la mondialisation."],
  lesson: `
<h2>1. Population et développement (5ᵉ)</h2>
<ul><li>La population mondiale dépasse <b>8 milliards</b> (2022). Croissance démographique = solde naturel (naissances − décès) + solde migratoire. <b>Transition démographique</b> : passage de taux de natalité et de mortalité élevés à des taux faibles.</li>
<li>Le développement se mesure par l’<b>IDH</b> (indice de développement humain : espérance de vie, éducation, niveau de vie, entre 0 et 1). Fortes <b>inégalités</b> entre pays et à l’intérieur des pays.</li></ul>

<h2>2. Ressources et changement global (5ᵉ)</h2>
<ul><li>Gérer des ressources limitées : <b>eau</b> (inégalement répartie, stress hydrique), <b>énergie</b> (fossiles, nucléaire, renouvelables), <b>alimentation</b> (nourrir 8 milliards d’humains, sous-nutrition, gaspillage).</li>
<li><b>Changement climatique</b> d’origine humaine (gaz à effet de serre) ; risques (inondations, sécheresses, cyclones, séismes) : risque = aléa × vulnérabilité ; prévention et adaptation.</li></ul>

<h2>3. Urbanisation du monde (4ᵉ)</h2>
<p>Plus de la moitié de l’humanité vit en ville (depuis 2007 environ). <b>Métropoles</b> et <b>mégapoles</b> (plus de 10 millions d’habitants : Tokyo, Delhi, Shanghai…) ; <b>métropolisation</b> ; étalement urbain ; quartiers informels (bidonvilles) ; villes durables.</p>

<h2>4. Mobilités et mondialisation (4ᵉ)</h2>
<ul><li><b>Mobilités</b> : migrations (de travail, réfugiés), tourisme international (le plus grand flux de personnes).</li>
<li><b>Mondialisation</b> : mise en relation des territoires par les flux de marchandises (90 % par voie maritime, conteneurisation), de capitaux, d’informations (Internet, câbles sous-marins).</li>
<li>Espaces clés : grands <b>ports</b> (Shanghai, Singapour, Rotterdam), <b>détroits</b> (Malacca, Ormuz, Gibraltar), <b>canaux</b> (Suez, Panama), façades maritimes (Northern Range en Europe), places financières (New York, Londres).</li></ul>
`,
  videos: [{ t: "La transition démographique", ch: "Les Bons Profs", q: "les bons profs transition démographique" }, { t: "L’urbanisation du monde", ch: "Lumni", q: "urbanisation du monde mégapoles 4e" }, { t: "Mers et océans dans la mondialisation", ch: "Lumni", q: "mers océans mondialisation conteneurs 4e" }],
  resume: "<ul><li>Croissance démographique = solde naturel + solde migratoire ; IDH.</li><li>Risque = aléa × vulnérabilité.</li><li>Mégapole > 10 millions d’habitants ; métropolisation.</li><li>Mondialisation : flux, ports, détroits, canaux.</li></ul>",
  exercises: [
    { q: "L’IDH prend en compte :", choices: ["l’espérance de vie, l’éducation et le niveau de vie", "uniquement le PIB", "la superficie"], answer: 0, expl: "L’IDH (Indice de développement humain) combine trois critères : l’<b>espérance de vie</b> (santé), l’<b>éducation</b> (durée de scolarisation) et le <b>niveau de vie</b> (revenu par habitant). Il est donc plus complet que le seul PIB." },
    { q: "Une mégapole compte plus de :", choices: ["1 million d’habitants", "10 millions d’habitants", "100 millions d’habitants"], answer: 1, expl: "Une <b>mégapole</b> est une très grande ville de plus de <b>10 millions d’habitants</b> (Tokyo, Delhi, Shanghai, Lagos…). Au-dessus d’un million, on parle simplement de grande ville ou de métropole." },
    { q: "Canal qui relie la Méditerranée à la mer Rouge :", answers: ["Suez", "canal de Suez"], expl: "Le canal de <b>Suez</b> (Égypte), ouvert en 1869, relie la Méditerranée à la mer Rouge : les navires évitent ainsi le tour de l’Afrique. Il ne faut pas le confondre avec le canal de Panama, entre Atlantique et Pacifique." },
    { q: "Risque = … × vulnérabilité :", answers: ["aléa", "l’aléa"], expl: "Un <b>risque</b> naît de la rencontre entre un <b>aléa</b> (le phénomène : séisme, inondation…) et la <b>vulnérabilité</b> (les hommes et les biens exposés). Sans population exposée, il y a un aléa mais pas de risque." },
    { q: "Premier port d’Europe :", choices: ["Marseille", "Rotterdam", "Le Havre"], answer: 1, expl: "<b>Rotterdam</b> (Pays-Bas), à l’embouchure du Rhin, est le premier port d’Europe. Marseille et Le Havre sont les grands ports français, mais bien plus petits." }
  ],
  evaluation: [
    { q: "La transition démographique est le passage :", choices: ["de fortes natalité et mortalité à des taux faibles", "d’une population rurale à urbaine", "d’un pays pauvre à riche"], answer: 0, expl: "La transition démographique est le passage d’un régime où <b>natalité et mortalité sont fortes</b> à un régime où elles sont <b>faibles</b>. La mortalité baisse d’abord, puis la natalité : entre-temps, la population augmente très vite." },
    { q: "Part du commerce mondial en volume transportée par mer :", choices: ["environ 10 %", "environ 50 %", "environ 90 %"], answer: 2, expl: "Environ <b>90 %</b> des marchandises échangées dans le monde (en volume) voyagent par la mer, surtout dans des porte-conteneurs : c’est le transport le moins cher pour les grandes quantités." },
    { q: "Détroit stratégique entre l’Asie du Sud-Est et l’Asie orientale :", answers: ["Malacca", "détroit de Malacca"], expl: "Le détroit de <b>Malacca</b>, entre la Malaisie et l’île de Sumatra, relie l’océan Indien à la mer de Chine. C’est l’un des passages maritimes les plus fréquentés du monde." },
    { q: "Depuis environ 2007, la majorité de l’humanité vit :", choices: ["en ville", "à la campagne"], answer: 0, expl: "Vers <b>2007</b>, pour la première fois de l’histoire, plus de la moitié de l’humanité vit <b>en ville</b>. Aujourd’hui, c’est environ 55 % et la part continue d’augmenter." },
    { q: "Le premier flux mondial de personnes :", choices: ["le tourisme", "les réfugiés", "les étudiants"], answer: 0, expl: "Le <b>tourisme</b> est le premier flux mondial de personnes : environ 1,4 milliard d’arrivées de touristes internationaux par an avant la crise du Covid. Les réfugiés et les étudiants sont bien moins nombreux." }
  ]
});

window.HG.chapters.push({
  id: "gc4-france", pos: 10.5,
  title: "🎓 Géographie : la France et l’Union européenne (3ᵉ)",
  short: "Géo de la France",
  sub: "Aires urbaines, espaces productifs, faible densité, aménagement, outre-mer, UE",
  objectifs: ["Décrire les dynamiques des territoires français.", "Expliquer l’aménagement du territoire et ses acteurs.", "Situer la France dans l’Union européenne et le monde."],
  lesson: `
<h2>1. Les aires urbaines</h2>
<p>Selon l’Insee, plus de 9 Français sur 10 vivent dans l’aire d’attraction d’une ville : ville-centre, banlieue, couronne périurbaine. <b>Périurbanisation</b> (dépendance à la voiture, mobilités pendulaires), <b>métropolisation</b> (Paris, Lyon, Marseille, Toulouse, Lille, Bordeaux…).</p>

<h2>2. Les espaces productifs</h2>
<ul><li><b>Agricoles</b> : grande puissance agricole (céréales du Bassin parisien, vigne, élevage de l’Ouest), PAC.</li>
<li><b>Industriels</b> : désindustrialisation, reconversions, technopôles (Sophia Antipolis), aéronautique (Toulouse).</li>
<li><b>Tertiaires et touristiques</b> : le secteur tertiaire emploie environ les trois quarts des actifs ; la France est l’une des premières destinations touristiques mondiales.</li></ul>

<h2>3. Les espaces de faible densité</h2>
<p>Espaces ruraux, montagnes : déprise dans certains territoires, mais aussi renouveau (néoruraux, tourisme vert, télétravail). Enjeux : services publics, accès au numérique, mobilités.</p>

<h2>4. Aménager le territoire</h2>
<p>Objectif : réduire les inégalités entre territoires et rendre le territoire plus attractif et durable. Acteurs : État, régions, départements, intercommunalités, communes, Union européenne (fonds européens). Exemples : lignes à grande vitesse, désenclavement, couverture numérique, transition énergétique. Les <b>territoires ultramarins</b> (DROM et COM) offrent à la France la <b>deuxième zone économique exclusive (ZEE)</b> du monde, mais connaissent des difficultés (chômage, coût de la vie).</p>

<h2>5. La France et l’Union européenne</h2>
<p>27 États, espace Schengen (libre circulation), zone euro (une vingtaine de pays), politiques communes (PAC, politique régionale). La France est une puissance d’influence : membre permanent du Conseil de sécurité de l’ONU, francophonie, puissance nucléaire, rayonnement culturel.</p>
`,
  videos: [{ t: "Les aires urbaines en France", ch: "Lumni", q: "aires urbaines France périurbanisation 3e" }, { t: "L’aménagement du territoire", ch: "Les Bons Profs", q: "les bons profs aménagement du territoire France" }, { t: "La France et l’Union européenne", ch: "Lumni", q: "la France et l'Union européenne 3e géographie" }],
  resume: "<ul><li>Périurbanisation, métropolisation.</li><li>Tertiaire : environ 3/4 des emplois.</li><li>Aménagement : réduire les inégalités, acteurs multiples.</li><li>Outre-mer : 2ᵉ ZEE du monde.</li></ul>",
  exercises: [
    { q: "L’étalement des villes vers les campagnes proches s’appelle :", answers: ["périurbanisation", "la périurbanisation"], expl: "La <b>périurbanisation</b> est l’extension des villes vers les campagnes proches : des lotissements se construisent autour des villes et les habitants font chaque jour le trajet vers la ville pour travailler." },
    { q: "La France possède la … ZEE du monde :", choices: ["1ʳᵉ", "2ᵉ", "10ᵉ"], answer: 1, expl: "Grâce à ses outre-mer répartis sur tous les océans, la France possède la <b>2ᵉ ZEE du monde</b> (environ 10 millions de km²), juste derrière les États-Unis." },
    { q: "Secteur qui emploie le plus d’actifs en France :", choices: ["primaire", "secondaire", "tertiaire"], answer: 2, expl: "Le secteur <b>tertiaire</b> (services : commerce, santé, éducation, transports…) emploie environ <b>3 actifs sur 4</b> en France. Le primaire (agriculture) et le secondaire (industrie) sont bien moins importants." },
    { q: "Ville spécialisée dans l’aéronautique :", answers: ["Toulouse"], expl: "<b>Toulouse</b> est la capitale de l’aéronautique et de l’espace en Europe : c’est là qu’Airbus assemble ses avions." },
    { q: "Espace de libre circulation des personnes en Europe :", answers: ["Schengen", "espace Schengen"], expl: "L’espace <b>Schengen</b> (accords de 1985, du nom d’un village du Luxembourg) permet de circuler librement entre les pays membres, sans contrôle aux frontières intérieures." }
  ],
  evaluation: [
    { q: "La PAC est une politique :", choices: ["agricole commune", "de défense", "de santé"], answer: 0, expl: "La PAC est la <b>politique agricole commune</b>, lancée en 1962 par la CEE pour moderniser l’agriculture et assurer l’autosuffisance alimentaire. La France en est l’une des principales bénéficiaires." },
    { q: "Membre permanent du Conseil de sécurité de l’ONU :", choices: ["la France", "l’Allemagne", "l’Italie"], answer: 0, expl: "La <b>France</b> est l’un des 5 membres permanents du Conseil de sécurité de l’ONU, avec les États-Unis, le Royaume-Uni, la Russie et la Chine. Ils disposent d’un droit de veto. L’Allemagne et l’Italie n’en font pas partie." },
    { q: "Un technopôle associe :", choices: ["recherche, universités et entreprises innovantes", "agriculture et tourisme", "ports et raffineries"], answer: 0, expl: "Un <b>technopôle</b> regroupe sur un même site des centres de <b>recherche</b>, des <b>universités</b> et des <b>entreprises</b> de haute technologie, pour favoriser l’innovation (ex. : Sophia-Antipolis, près de Nice)." },
    { q: "Nombre d’États de l’Union européenne :", answers: ["27"], expl: "L’Union européenne compte <b>27 États membres</b> depuis le départ du Royaume-Uni (Brexit) en 2020." },
    { q: "Les mobilités quotidiennes domicile-travail sont dites :", answers: ["pendulaires"], expl: "On parle de mobilités <b>pendulaires</b> car les trajets domicile-travail font un aller-retour quotidien, comme le balancier d’une pendule." }
  ]
});

window.HG.chapters.push({
  id: "ec4-emc", pos: 10.6,
  title: "🎓 EMC au collège : citoyenneté, droit, défense, engagement",
  short: "EMC cycle 4",
  sub: "Droits et devoirs, justice, défense et sécurité, engagement, médias",
  objectifs: ["Connaître les droits et devoirs du citoyen et l’organisation de la justice.", "Connaître la défense nationale et le parcours citoyen.", "Comprendre l’engagement et l’éducation aux médias."],
  lesson: `
<h2>1. Les quatre domaines de l’EMC</h2>
<p>Au cycle 4, l’EMC vise à développer la <b>sensibilité</b> (soi et les autres), le rapport à la <b>règle et au droit</b>, le <b>jugement</b> (penser par soi-même et avec les autres) et l’<b>engagement</b> (agir individuellement et collectivement).</p>

<h2>2. Citoyenneté, droits et devoirs</h2>
<ul><li>Être <b>citoyen</b> : avoir la nationalité, des droits civils, politiques (vote à 18 ans, éligibilité) et sociaux, et des devoirs (respecter la loi, payer l’impôt, participer à la défense).</li>
<li>Textes fondateurs : DDHC (1789), préambule de 1946, Constitution de 1958, Convention européenne des droits de l’homme (1950), Déclaration universelle des droits de l’homme (ONU, <b>1948</b>).</li>
<li>Lutte contre les <b>discriminations</b> (l’égalité filles-garçons, le racisme, l’homophobie, le handicap) : la loi punit les discriminations ; le Défenseur des droits peut être saisi.</li></ul>

<h2>3. La justice</h2>
<p>Justice <b>civile</b> (conflits entre personnes), <b>pénale</b> (infractions : contraventions, délits, crimes ; tribunal de police, tribunal correctionnel, cour d’assises), <b>administrative</b> (litiges avec l’administration). Principes : présomption d’innocence, droit à un avocat, possibilité de faire appel. Justice des mineurs adaptée (juge des enfants).</p>

<h2>4. Défense et sécurité</h2>
<p>La défense protège le territoire et la population ; la France participe à des opérations extérieures et à l’OTAN. <b>Parcours de citoyenneté</b> : enseignement de défense, recensement à 16 ans, <b>Journée défense et citoyenneté (JDC)</b> ; Service national universel (SNU). Sécurité civile : gestes qui sauvent, risques majeurs.</p>

<h2>5. S’engager et s’informer</h2>
<p>Formes d’engagement : délégués, éco-délégués, associations, service civique, vote. <b>Éducation aux médias et à l’information (EMI)</b> : vérifier les sources, distinguer information et opinion, repérer les infox, comprendre les algorithmes et les réseaux sociaux, liberté de la presse.</p>
`,
  videos: [{ t: "Les droits et devoirs du citoyen", ch: "Lumni", q: "Lumni droits et devoirs du citoyen" }, { t: "Comment fonctionne la justice", ch: "1 jour 1 question", q: "1 jour 1 question comment fonctionne la justice" }, { t: "Repérer une fausse information", ch: "Lumni", q: "Lumni repérer fake news infox" }],
  resume: "<ul><li>EMC : sensibilité, règle et droit, jugement, engagement.</li><li>DUDH 1948 ; CEDH 1950.</li><li>Pénal : contravention, délit, crime (cour d’assises).</li><li>Recensement à 16 ans, JDC.</li></ul>",
  exercises: [
    { q: "Déclaration universelle des droits de l’homme :", answers: ["1948"], expl: "La Déclaration universelle des droits de l’homme est adoptée par l’ONU le 10 décembre <b>1948</b> à Paris, après les horreurs de la Seconde Guerre mondiale. René Cassin a participé à sa rédaction." },
    { q: "Un crime est jugé par :", choices: ["le tribunal de police", "le tribunal correctionnel", "la cour d’assises"], answer: 2, expl: "Les <b>crimes</b> (meurtre, viol…), les infractions les plus graves, sont jugés par la <b>cour d’assises</b>, avec des jurés citoyens. Le tribunal correctionnel juge les délits et le tribunal de police les contraventions." },
    { q: "Le recensement citoyen se fait à :", answers: ["16 ans", "16"], expl: "Tout jeune Français doit se faire recenser à la mairie dans les trois mois qui suivent ses <b>16 ans</b>. L’attestation est nécessaire pour passer des examens comme le bac ou le permis." },
    { q: "Principe selon lequel toute personne est innocente tant qu’elle n’a pas été jugée coupable :", answers: ["présomption d’innocence", "la présomption d’innocence", "présomption d'innocence"], expl: "La <b>présomption d’innocence</b>, affirmée dans la Déclaration de 1789 (article 9), signifie qu’une personne est considérée comme innocente tant que la justice ne l’a pas déclarée coupable." },
    { q: "Autorité indépendante que l’on peut saisir en cas de discrimination :", answers: ["Défenseur des droits", "le Défenseur des droits"], expl: "Le <b>Défenseur des droits</b> (créé en 2011) est une autorité indépendante que tout le monde peut saisir gratuitement, notamment en cas de discrimination ou d’atteinte aux droits de l’enfant." }
  ],
  evaluation: [
    { q: "La justice qui règle les litiges avec l’administration :", choices: ["civile", "pénale", "administrative"], answer: 2, expl: "Les litiges entre un citoyen et l’administration (une mairie, l’État…) relèvent de la justice <b>administrative</b> (tribunal administratif). La justice civile règle les conflits entre particuliers, la justice pénale sanctionne les infractions." },
    { q: "Convention européenne des droits de l’homme :", answers: ["1950"], expl: "La Convention européenne des droits de l’homme est signée à Rome en <b>1950</b> dans le cadre du Conseil de l’Europe. La Cour européenne des droits de l’homme, à Strasbourg, veille à son respect." },
    { q: "La JDC signifie :", answers: ["Journée défense et citoyenneté", "journée défense et citoyenneté"], expl: "La JDC est la <b>Journée défense et citoyenneté</b>, obligatoire pour tous les jeunes Français après le recensement. Elle présente les enjeux de la défense et les droits et devoirs du citoyen." },
    { q: "Les quatre domaines de l’EMC : sensibilité, règle et droit, jugement et …", answers: ["engagement", "l’engagement"], expl: "Les programmes d’EMC s’organisent autour de quatre dimensions : la sensibilité, la règle et le droit, le jugement et l’<b>engagement</b> (agir individuellement et collectivement)." },
    { q: "Vérifier l’origine d’une information relève de :", answers: ["EMI", "l’EMI", "éducation aux médias et à l’information"], expl: "Vérifier la source d’une information relève de l’<b>EMI</b>, l’éducation aux médias et à l’information : on apprend à se demander qui parle, quand, et dans quel but, pour repérer les fausses informations." }
  ]
});

window.HG.chapters.push({
  id: "hc4-methode", pos: 10.9,
  title: "🎓 Méthode de l’écrit 2 en histoire-géographie-EMC",
  short: "Méthode HG",
  sub: "Analyser un document, développement construit, croquis, repères",
  objectifs: ["Analyser un document historique ou géographique selon une méthode rigoureuse.", "Rédiger un développement construit (paragraphe argumenté).", "Réaliser un croquis ou un schéma avec une légende organisée."],
  lesson: `
<h2>1. Analyser un document</h2>
<ol><li><b>Présenter</b> : nature, auteur, date, source, destinataire, contexte.</li>
<li><b>Prélever</b> les informations utiles (citer entre guillemets, relever des chiffres).</li>
<li><b>Expliquer</b> avec tes connaissances : ce que le document montre, ce qu’il ne dit pas.</li>
<li><b>Porter un regard critique</b> : point de vue de l’auteur, intention (propagande ?), limites.</li></ol>

<h2>2. Le développement construit</h2>
<p>Une réponse rédigée et organisée : une <b>introduction</b> (contexte, problématique), deux ou trois <b>paragraphes</b> (une idée + des faits précis : dates, lieux, acteurs, exemples), une <b>conclusion</b>. Utilise des connecteurs et le vocabulaire historique ou géographique précis.</p>
<div class="box ex"><span class="box-title">Exemple de plan</span>Sujet : « Montrez que la Première Guerre mondiale est une guerre totale. » 1) Une mobilisation militaire et économique de toute la société ; 2) des violences de masse contre les soldats et les civils ; 3) une mobilisation des esprits (propagande, censure).</div>

<h2>3. Le croquis</h2>
<p>Un titre, une légende organisée en parties (2 à 3), des figurés adaptés (surfaces, points, lignes, flèches), une nomenclature lisible (noms de lieux), une orientation.</p>

<h2>4. La frise et les repères</h2>
<p>Construis ta propre frise des repères du cycle 4 (de l’Hégire à la chute de l’URSS) et révise-la chaque semaine : elle sert dans toutes les questions.</p>

<h2>5. Enseigner (dimension didactique)</h2>
<p>Le sujet peut te demander comment transposer une notion à l’école : partir d’un document accessible (image, témoignage), questionner, faire construire une frise ou un croquis simple, institutionnaliser une trace écrite courte.</p>
`,
  videos: [{ t: "Analyser un document en histoire", ch: "Les Bons Profs", q: "les bons profs analyser un document histoire méthode" }, { t: "Le développement construit", ch: "Les Bons Profs", q: "les bons profs développement construit brevet histoire" }, { t: "Réaliser un croquis", ch: "Les Bons Profs", q: "les bons profs réaliser un croquis géographie" }],
  resume: "<ul><li>Document : présenter, prélever, expliquer, critiquer.</li><li>Développement construit : intro, 2-3 paragraphes argumentés, conclusion.</li><li>Croquis : titre, légende organisée, figurés, nomenclature.</li></ul>",
  exercises: [
    { q: "Première étape de l’analyse d’un document :", choices: ["le critiquer", "le présenter (nature, auteur, date)", "le recopier"], answer: 1, expl: "On commence toujours par <b>présenter</b> le document : sa nature (texte, affiche…), son auteur, sa date et son contexte. On ne peut le critiquer qu’après l’avoir identifié et compris." },
    { q: "Une affiche de propagande doit être analysée en tenant compte :", choices: ["de l’intention de son auteur", "de sa couleur uniquement", "rien de particulier"], answer: 0, expl: "Une affiche de propagande cherche à convaincre ou à manipuler : il faut donc toujours se demander <b>qui</b> l’a produite et <b>dans quel but</b> (l’intention de l’auteur)." },
    { q: "Un croquis doit toujours avoir :", choices: ["un titre et une légende organisée", "des couleurs vives sans légende", "une photo"], answer: 0, expl: "Un croquis doit toujours avoir un <b>titre</b> et une <b>légende organisée</b> en parties : sans légende, les couleurs et les figurés ne veulent rien dire." },
    { q: "Rédige un développement construit (10-12 lignes) : « Montrez que la Vᵉ République renforce le pouvoir exécutif. »", type: "open", model: "<p><b>Intro</b> : en 1958, dans le contexte de la guerre d’Algérie, de Gaulle fait adopter une nouvelle Constitution. <b>1)</b> Le président dispose de pouvoirs importants : il nomme le Premier ministre, peut dissoudre l’Assemblée nationale, recourir au référendum, et l’article 16 lui donne des pouvoirs exceptionnels en cas de crise. <b>2)</b> Sa légitimité est renforcée par l’élection au suffrage universel direct, adoptée par référendum en 1962. <b>3)</b> Le gouvernement peut faire adopter un texte sans vote (article 49.3), ce qui limite le pouvoir du Parlement. <b>Conclusion</b> : la Vᵉ République est un régime où l’exécutif domine, tempéré par les cohabitations.</p>" }
  ],
  evaluation: [
    { q: "Dans un développement construit, chaque paragraphe contient :", choices: ["une idée et des faits précis", "uniquement des dates", "une citation sans explication"], answer: 0, expl: "Chaque paragraphe d’un développement construit développe <b>une idée</b>, appuyée sur des <b>faits précis</b> (dates, acteurs, exemples). Des dates seules ou une citation sans explication ne suffisent pas." },
    { q: "La critique d’un document consiste à :", choices: ["dire s’il est beau", "identifier le point de vue, l’intention et les limites", "le résumer"], answer: 1, expl: "Critiquer un document ne veut pas dire le juger beau ou laid : c’est identifier le <b>point de vue</b> de l’auteur, son <b>intention</b> et les <b>limites</b> du document (ce qu’il ne dit pas, ce qu’il exagère)." },
    { q: "Les figurés d’un croquis sont :", choices: ["surfaciques, ponctuels, linéaires", "rouges, verts, bleus", "grands, moyens, petits"], answer: 0, expl: "On distingue trois types de figurés : <b>surfaciques</b> (zones colorées), <b>ponctuels</b> (points, symboles pour les villes…) et <b>linéaires</b> (flèches, traits pour les flux et les axes)." },
    { q: "Une problématique est :", choices: ["une question qui guide la réponse", "une date", "un résumé du document"], answer: 0, expl: "Une problématique est la <b>question</b> qui guide toute la réflexion : elle donne un fil directeur à la réponse et évite de simplement réciter ou résumer." }
  ]
});
