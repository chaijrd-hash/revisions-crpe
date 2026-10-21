/* CONCOURS BLANCS — sujets supplémentaires */
window.CONCOURS = window.CONCOURS || [];

window.CONCOURS.push({
  id: "fm3",
  title: "Concours blanc n°4 — Français et mathématiques",
  short: "Blanc n°4 · Français + Maths",
  duration: 240,
  icon: "📝",
  intro: "<p>Troisième sujet de <b>français et mathématiques</b> (4 heures) : un extrait de récit, de l’étude de la langue, une production d’écrit, puis des problèmes de géométrie, de calcul et d’analyse de productions d’élèves.</p>",
  parts: [
    {
      title: "PARTIE 1 — FRANÇAIS (20 points)",
      doc: `<p><b>Texte support</b> (texte d’entraînement)</p>
<div class="box ex"><p>[§1] Quand Malik poussa la porte de la bibliothèque municipale, une odeur de papier et de cire l’enveloppa. Il n’y était jamais entré : chez lui, on ne lisait guère, faute de temps plus que d’envie. La bibliothécaire, une femme aux cheveux gris qui portait ses lunettes au bout du nez, leva les yeux et lui sourit.</p>
<p>[§2] « Tu cherches quelque chose de précis ? demanda-t-elle.<br>— Je ne sais pas… Un livre où il se passe des choses, répondit Malik en rougissant. »</p>
<p>[§3] Elle se leva, longea lentement les rayonnages et revint avec trois romans qu’elle posa devant lui comme on dépose un trésor. Malik choisit le plus épais, par défi. Ce soir-là, il lut jusqu’à ce que sa mère vienne éteindre la lumière. Le lendemain, il était de retour avant l’ouverture.</p></div>`,
      questions: [
        { pts: 3, type: "open", q: "<b>Compréhension.</b> Quel rôle joue la bibliothécaire dans le texte ? Quelle transformation vit Malik ? Justifiez avec des citations.", model: "<p>La bibliothécaire est une <b>passeuse</b> : attentive (« leva les yeux et lui sourit »), elle accueille Malik sans le juger et lui propose des livres avec soin (« comme on dépose un trésor »). Malik, d’abord intimidé et étranger au monde des livres (« Il n’y était jamais entré », « en rougissant »), devient un lecteur passionné : il lit tard (« jusqu’à ce que sa mère vienne éteindre la lumière ») et revient dès le lendemain « avant l’ouverture ». Le texte montre le rôle décisif d’un adulte dans l’accès à la lecture.</p>" },
        { pts: 1, q: "« faute de temps plus que d’envie » : que signifie cette expression ?", choices: ["Ils n’avaient pas envie de lire.", "Ils manquaient surtout de temps, plus que d’envie.", "Ils lisaient beaucoup."], answer: 1, expl: "« faute de » signifie « par manque de ». La phrase veut dire qu’on ne lisait guère surtout par <b>manque de temps</b>, plus que par manque d’envie : l’envie de lire n’est donc pas absente." },
        { pts: 1, q: "« comme on dépose un trésor » : figure de style ?", choices: ["métaphore", "comparaison", "hyperbole"], answer: 1, expl: "Le mot « <b>comme</b> » relie le geste de la bibliothécaire à celui de déposer un trésor : c’est une <b>comparaison</b>. Elle montre la valeur précieuse que la bibliothécaire donne aux livres." },
        { pts: 1, q: "Le discours utilisé au §2 est :", choices: ["direct", "indirect", "indirect libre"], answer: 0, expl: "Les paroles sont rapportées telles quelles, entre guillemets, avec un tiret au changement d’interlocuteur et des verbes de parole (« demanda-t-elle », « répondit Malik ») : c’est le discours <b>direct</b>." },
        { pts: 1, q: "Fonction de « une femme aux cheveux gris » dans le §1 :", choices: ["COD", "apposition", "attribut du sujet"], answer: 1, expl: "Ce groupe nominal, placé entre virgules juste après « La bibliothécaire », la décrit sans verbe : c’est une <b>apposition</b>. Ce n’est pas un attribut, car il n’y a pas de verbe d’état." },
        { pts: 1, q: "Nature de « qu’ » dans « trois romans qu’elle posa » :", choices: ["pronom relatif", "conjonction de subordination"], answer: 0, expl: "« qu’ » reprend l’antécédent « trois romans » et introduit une subordonnée relative (elle posa les romans) : c’est un <b>pronom relatif</b>, COD de « posa ». Une conjonction n’a pas d’antécédent." },
        { pts: 1, q: "Valeur du passé simple dans « Il lut jusqu’à ce que… » :", choices: ["action de premier plan, délimitée", "description", "habitude"], answer: 0, expl: "Le passé simple présente une action de <b>premier plan</b>, qui fait avancer le récit et qui est délimitée dans le temps (ce soir-là). L’imparfait servirait à la description ou à l’habitude." },
        { pts: 1, q: "Pourquoi le verbe « vienne » est-il au subjonctif ?", choices: ["il est introduit par « jusqu’à ce que »", "il exprime une habitude", "c’est une erreur"], answer: 0, expl: "La locution conjonctive « <b>jusqu’à ce que</b> » impose toujours le subjonctif dans la subordonnée : « jusqu’à ce que sa mère vienne »." },
        { pts: 1, q: "Réécrivez « Elle se leva, longea lentement les rayonnages » au présent.", answers: ["elle se lève, longe lentement les rayonnages"], numeric: false, expl: "Au présent, les verbes du 1ᵉʳ groupe prennent <b>-e</b> à la 3ᵉ personne du singulier : se leva → <b>se lève</b>, longea → <b>longe</b> (le e de « longea » servait seulement à garder le son [ʒ] devant a)." },
        { pts: 1, q: "Dans « rayonnages », quel est le suffixe ?", answers: ["age", "-age"], expl: "rayonnage = « rayon » + suffixe <b>-age</b> (le n est doublé), qui forme un nom désignant un ensemble : les rayonnages sont l’ensemble des rayons. Le -s final est la marque du pluriel, pas un suffixe." },
        { pts: 1, q: "« Le lendemain » : quel indice d’énonciation est-ce ?", choices: ["un indice d’énoncé coupé de la situation d’énonciation (récit)", "un indice d’énoncé ancré (discours)"], answer: 0, expl: "« le lendemain » se repère par rapport à un moment du récit (ce soir-là), pas par rapport au moment où l’on parle (on dirait alors « demain ») : c’est un indice d’un énoncé <b>coupé</b> de la situation d’énonciation." },
        { pts: 2, type: "open", q: "<b>Orthographe.</b> Corrigez et justifiez : « Les livres qu’elle lui a conseillé était passionnant, il les a tous dévorer en une semaine. »", model: "<p>« Les livres qu’elle lui a conseillé<b>s</b> étai<b>ent</b> passionnant<b>s</b>, il les a tous dévor<b>és</b> en une semaine. » <b>conseillés</b> : avoir + COD « qu’ » (= les livres) placé avant ; <b>étaient</b> : sujet « les livres » ; <b>passionnants</b> : attribut du sujet ; <b>dévorés</b> : participe passé (et non infinitif) avec avoir, COD « les » placé avant.</p>" },
        { pts: 1, q: "Combien de phonèmes dans le mot « livre » ?", answers: ["4"], expl: "[l] [i] [v] [ʁ] : le e final est muet." },
        { pts: 4, type: "open", q: "<b>Rédaction.</b> « L’école doit donner à tous les élèves le goût de lire. » En une vingtaine de lignes, vous direz comment, selon vous, un professeur des écoles peut y contribuer. Appuyez-vous sur des exemples précis.", model: "<p><b>Pistes</b> : 1) lire à voix haute chaque jour des textes riches et variés ; 2) faire vivre un coin lecture / la BCD, des rencontres avec des auteurs, des visites à la bibliothèque municipale (comme dans le texte) ; 3) des dispositifs : quart d’heure lecture, rallye lecture, comités de lecture, prix littéraires, carnet de lecteur ; 4) partager ses lectures et laisser choisir les livres ; 5) associer les familles. Critères : thèse claire, arguments + exemples, organisation, langue correcte.</p>" }
      ]
    },
    {
      title: "PARTIE 2 — MATHÉMATIQUES (20 points)",
      doc: "<p><b>Exercice 1 — La cour de récréation (6 points)</b><br>La cour a la forme d’un rectangle de 40 m sur 25 m. On y trace un terrain de jeu circulaire de 6 m de rayon et on prévoit un jardin triangulaire rectangle dont les côtés de l’angle droit mesurent 8 m et 6 m.</p>",
      questions: [
        { pts: 1, q: "Ex. 1 a) Aire de la cour (m²) ?", answers: ["1000"], expl: "La cour est un rectangle : aire = longueur × largeur = 40 × 25 = <b>1 000 m²</b>." },
        { pts: 1, q: "Ex. 1 b) Aire du terrain circulaire, arrondie au m² (π ≈ 3,14) ?", answers: ["113"], expl: "3,14 × 36 = 113,04 ≈ 113 m²." },
        { pts: 1, q: "Ex. 1 c) Aire du jardin triangulaire (m²) ?", answers: ["24"], expl: "Dans un triangle rectangle, les côtés de l’angle droit sont base et hauteur : aire = (8 × 6) ÷ 2 = 48 ÷ 2 = <b>24 m²</b>. Le piège : oublier de diviser par 2." },
        { pts: 1, q: "Ex. 1 d) Longueur du plus grand côté du jardin (m) ?", answers: ["10"], expl: "Pythagore : 8² + 6² = 100." },
        { pts: 1, q: "Ex. 1 e) Pourcentage de la cour occupé par le terrain et le jardin, arrondi à l’unité ?", answers: ["14", "14 %", "14%"], expl: "(113 + 24) / 1 000 = 13,7 % ≈ 14 %." },
        { pts: 1, q: "Ex. 1 f) Sur le plan de l’école, la cour mesure 8 cm de long. Quelle est l’échelle ? (format 1/500)", answers: ["1/500"], numeric: false, expl: "40 m = 4 000 cm ; 4 000 ÷ 8 = 500." },
        { pts: 1, q: "<b>Exercice 2 — Calculs (5 points)</b><br>a) Calculez 3/4 − 2/3 × 3/8.", answers: ["1/2"], numeric: false, expl: "2/3 × 3/8 = 1/4 ; 3/4 − 1/4 = 1/2." },
        { pts: 1, q: "Ex. 2 b) Écrivez 0,000 045 en écriture scientifique (format 4,5×10^-5).", answers: ["4,5×10^-5", "4.5×10^-5", "4,5x10^-5", "4,5*10^-5", "4,5×10⁻⁵"], numeric: false, expl: "On écrit a × 10ⁿ avec 1 ≤ a &lt; 10 : a = 4,5. Pour passer de 4,5 à 0,000 045, on déplace la virgule de <b>5 rangs vers la gauche</b>, donc 0,000 045 = 4,5 × 10⁻⁵." },
        { pts: 1, q: "Ex. 2 c) Résolvez 3(x − 2) = x + 8. x = ?", answers: ["7"], expl: "On développe : 3x − 6 = x + 8. Puis 3x − x = 8 + 6, donc 2x = 14 et x = <b>7</b>. Vérification : 3 × (7 − 2) = 15 et 7 + 8 = 15." },
        { pts: 1, q: "Ex. 2 d) PGCD(105 ; 75) ?", answers: ["15"], expl: "Algorithme d’Euclide : 105 = 75 × 1 + 30 ; 75 = 30 × 2 + 15 ; 30 = 15 × 2 + 0. Le dernier reste non nul est <b>15</b>. (Ou : 105 = 3 × 5 × 7 et 75 = 3 × 5², facteurs communs 3 × 5 = 15.)" },
        { pts: 1, q: "Ex. 2 e) Un prix passe de 80 € à 92 €. Pourcentage d’augmentation ?", answers: ["15", "15 %", "15%"], expl: "L’augmentation est de 92 − 80 = 12 €. On la compare au prix de <b>départ</b> : 12 ÷ 80 = 0,15 = <b>15 %</b>." },
        { pts: 1, type: "vf", q: "<b>Exercice 3 — Vrai ou faux ? (4 points)</b><br>a) « Un nombre divisible par 4 et par 6 est divisible par 24. »", answer: 1, expl: "Faux : 12 est divisible par 4 et 6, pas par 24. (PPCM(4 ; 6) = 12.)" },
        { pts: 1, type: "vf", q: "Ex. 3 b) « La somme de trois entiers consécutifs est un multiple de 3. »", answer: 0, expl: "Vrai : n + (n+1) + (n+2) = 3(n+1)." },
        { pts: 1, type: "vf", q: "Ex. 3 c) « Si l’on augmente de 2 cm le côté d’un carré, son aire augmente de 4 cm². »", answer: 1, expl: "Faux : (c + 2)² = c² + 4c + 4 ; avec c = 5, l’aire passe de 25 à 49." },
        { pts: 1, type: "vf", q: "Ex. 3 d) « La médiane d’une série est toujours égale à sa moyenne. »", answer: 1, expl: "Faux : série 1 ; 2 ; 9 : médiane 2, moyenne 4." },
        { pts: 1, q: "<b>Exercice 4 (3 points)</b><br>a) Combien de menus différents avec 3 entrées, 4 plats et 2 desserts ?", answers: ["24"], expl: "Principe multiplicatif : pour chaque entrée, 4 plats, et pour chacun, 2 desserts : 3 × 4 × 2 = <b>24</b> menus." },
        { pts: 1, q: "Ex. 4 b) On lance deux dés. Probabilité d’obtenir un double ?", answers: ["1/6", "6/36"], numeric: false, expl: "Il y a 6 × 6 = 36 issues équiprobables, dont 6 doubles (1-1, 2-2… 6-6) : 6/36 = <b>1/6</b>." },
        { pts: 1, q: "Ex. 4 c) Somme des angles d’un hexagone (°) ?", answers: ["720"], expl: "Polygone à n côtés : (n − 2) × 180°. Hexagone : (6 − 2) × 180 = 4 × 180 = <b>720°</b>." },
        { pts: 2, type: "open", q: "<b>Exercice 5 — Analyse d’erreur (2 points)</b><br>À la question « Range dans l’ordre croissant : 1/2 ; 1/4 ; 1/3 », un élève de CM1 répond : « 1/2 &lt; 1/3 &lt; 1/4 ». Analysez son erreur et proposez une aide.", model: "<p><b>Analyse</b> : l’élève compare les dénominateurs comme des entiers (2 &lt; 3 &lt; 4) et en déduit l’ordre des fractions. Il n’a pas compris que le dénominateur indique en combien de parts on partage l’unité : plus il est grand, plus chaque part est petite. <b>Aide</b> : manipulation de bandes de papier ou de disques partagés en 2, 3, 4 parts égales pour comparer les parts ; droite graduée ; verbaliser « un quart, c’est une part quand on partage en 4 ». Réponse attendue : 1/4 &lt; 1/3 &lt; 1/2.</p>" }
      ]
    }
  ]
});

window.CONCOURS.push({
  id: "ad2",
  title: "Concours blanc n°5 — Autres domaines d’enseignement",
  short: "Blanc n°5 · Sciences, HG-EMC, Arts",
  duration: 180,
  icon: "🌍",
  intro: "<p>Second sujet sur les <b>autres domaines</b> : technologie et santé, histoire de la colonisation et de la République, enseignement moral et civique, arts.</p><div class=\"box warn\"><span class=\"box-title\">À savoir</span>Ce sujet mélange plusieurs domaines pour réviser. Au concours, l’écrit 2 porte sur <b>un seul domaine choisi</b>, au niveau du collège (cycle 4) : entraîne-toi aussi avec les sujets inédits de ton domaine.</div>",
  parts: [
    {
      title: "PARTIE 1 — SCIENCES ET TECHNOLOGIE (8 points)",
      doc: "<p><b>Document 1</b> — Un élève de CE2 dessine ce que devient une pomme qu’il mange : il trace un tube qui part de la bouche et descend jusqu’aux pieds, en passant par le ventre.</p>",
      questions: [
        { pts: 2, type: "open", q: "Quelle conception de l’élève ce dessin révèle-t-il ? Quelles connaissances faut-il construire ?", model: "<p>L’élève imagine un <b>tube unique</b> qui traverse tout le corps, jusqu’aux pieds : il ignore le trajet réel (bouche → œsophage → estomac → intestin grêle → gros intestin) et le passage des <b>nutriments dans le sang</b> au niveau de l’intestin grêle, qui les distribue à tout le corps. À construire : le trajet des aliments dans le tube digestif, la transformation des aliments en nutriments, leur absorption dans l’intestin grêle et le rôle du sang, l’élimination des déchets (selles).</p>" },
        { pts: 1, q: "Les nutriments passent dans le sang au niveau :", choices: ["de l’estomac", "de l’intestin grêle", "de l’œsophage"], answer: 1, expl: "C’est dans l’<b>intestin grêle</b>, dont la paroi est très longue et repliée, que les nutriments traversent la paroi pour passer dans le sang. L’estomac ne fait que commencer la digestion." },
        { pts: 1, q: "Un antibiotique est efficace contre :", choices: ["les virus", "les bactéries"], answer: 1, expl: "Les antibiotiques détruisent les <b>bactéries</b> ou bloquent leur multiplication. Ils sont <b>inefficaces contre les virus</b> (grippe, rhume) : c’est le piège classique." },
        { pts: 1, q: "Deux roues dentées qui engrènent tournent :", choices: ["dans le même sens", "en sens inverse"], answer: 1, expl: "Les dents de l’une poussent les dents de l’autre : si la première tourne dans le sens des aiguilles d’une montre, la seconde tourne dans le <b>sens inverse</b>." },
        { pts: 1, q: "Dans un circuit en dérivation à 2 lampes, on dévisse une lampe. L’autre :", choices: ["reste allumée", "s’éteint"], answer: 0, expl: "En dérivation, chaque lampe est dans sa propre boucle reliée au générateur : dévisser une lampe n’ouvre pas la boucle de l’autre, qui <b>reste allumée</b>. En série, au contraire, tout s’éteindrait." },
        { pts: 1, q: "Les phases de la Lune s’expliquent par :", choices: ["l’ombre de la Terre", "la position de la Lune par rapport à la Terre et au Soleil"], answer: 1, expl: "La Lune est toujours à moitié éclairée par le Soleil ; selon sa <b>position autour de la Terre</b>, on voit une part plus ou moins grande de sa face éclairée. Le piège : croire que c’est l’ombre de la Terre (c’est seulement le cas lors d’une éclipse)." },
        { pts: 1, q: "Le passage de l’état solide à l’état liquide s’appelle :", answers: ["fusion", "la fusion"], expl: "Le passage de solide à liquide est la <b>fusion</b> (la glace fond). L’inverse, de liquide à solide, est la solidification." }
      ]
    },
    {
      title: "PARTIE 2 — HISTOIRE, GÉOGRAPHIE, EMC (8 points)",
      doc: "<p><b>Document 2</b> — Extrait du décret du 27 avril 1848 : « L’esclavage sera entièrement aboli dans toutes les colonies et possessions françaises, deux mois après la promulgation du présent décret dans chacune d’elles. »</p>",
      questions: [
        { pts: 1, q: "Sous quel régime ce décret est-il pris ?", choices: ["la monarchie absolue", "la IIᵉ République", "le Second Empire"], answer: 1, expl: "En avril 1848, la monarchie de Juillet vient d’être renversée (février 1848) : c’est le gouvernement provisoire de la <b>IIᵉ République</b> qui abolit l’esclavage. Le Second Empire ne commence qu’en 1852." },
        { pts: 1, q: "Quel homme politique est associé à ce décret ?", answers: ["Victor Schœlcher", "Schœlcher", "Schoelcher", "Victor Schoelcher"], expl: "<b>Victor Schœlcher</b>, sous-secrétaire d’État aux colonies, a porté le décret d’abolition de l’esclavage de 1848." },
        { pts: 1, q: "Quelle loi de 2001 reconnaît la traite et l’esclavage comme crimes contre l’humanité ?", answers: ["loi Taubira", "la loi Taubira", "Taubira"], expl: "La loi du 21 mai 2001, portée par la députée Christiane <b>Taubira</b>, reconnaît la traite et l’esclavage comme crimes contre l’humanité." },
        { pts: 1, q: "Les lois Jules Ferry (1881-1882) rendent l’école :", choices: ["payante et religieuse", "gratuite, laïque et obligatoire", "facultative"], answer: 1, expl: "La loi de 1881 rend l’école primaire publique <b>gratuite</b> ; celle de 1882 la rend <b>obligatoire</b> (de 6 à 13 ans) et <b>laïque</b>." },
        { pts: 1, q: "Le concept central de la géographie à l’école élémentaire est :", answers: ["habiter"], expl: "Les programmes de géographie à l’école sont organisés autour de la notion d’« <b>habiter</b> » : comment les êtres humains vivent, se déplacent, travaillent dans les lieux." },
        { pts: 1, q: "Les DROM sont au nombre de :", answers: ["5", "cinq"], expl: "Il y a <b>5</b> départements et régions d’outre-mer : Guadeloupe, Martinique, Guyane, La Réunion et Mayotte." },
        { pts: 2, type: "open", q: "<b>EMC.</b> Proposez une séance de débat réglé au CM2 sur la question « Faut-il des règles dans la cour de récréation ? » (organisation, rôles, trace écrite).", model: "<p>1) Préparation : recueil individuel d’arguments (pour, contre, nuances) ; 2) organisation : classe en U, rappel des règles du débat (lever la main, écouter, argumenter sans attaquer les personnes), rôles distribués : président de séance (distribue la parole), secrétaire (note les arguments), observateurs (vérifient le respect des règles) ; 3) débat de 20 minutes ; 4) synthèse collective : pourquoi des règles (sécurité, respect, égalité, vivre ensemble) ; 5) trace écrite et prolongement : élaboration d’un règlement de cour soumis au conseil d’élèves.</p>" }
      ]
    },
    {
      title: "PARTIE 3 — ARTS ET EPS (4 points)",
      doc: "",
      questions: [
        { pts: 1, q: "« Guernica » (1937) a été peint par :", answers: ["Picasso", "Pablo Picasso"], expl: "<b>Pablo Picasso</b> a peint « Guernica » en 1937 pour dénoncer le bombardement de cette ville basque pendant la guerre d’Espagne." },
        { pts: 1, q: "Les trois piliers du PEAC :", choices: ["rencontrer, pratiquer, connaître", "observer, copier, exposer"], answer: 0, expl: "Le parcours d’éducation artistique et culturelle repose sur trois piliers : <b>rencontrer</b> des œuvres et des artistes, <b>pratiquer</b> soi-même, <b>connaître</b> (s’approprier des repères)." },
        { pts: 1, q: "Le paramètre du son qui distingue deux instruments jouant la même note :", answers: ["timbre", "le timbre"], expl: "Le <b>timbre</b> est la « couleur » du son : une même note (même hauteur) jouée par une flûte et un violon sonne différemment grâce au timbre." },
        { pts: 1, q: "La danse relève du champ d’apprentissage :", choices: ["s’exprimer devant les autres par une prestation artistique et/ou acrobatique", "conduire un affrontement", "produire une performance mesurable"], answer: 0, expl: "La danse vise à créer et présenter une prestation devant un public : c’est le champ « <b>s’exprimer devant les autres par une prestation artistique et/ou acrobatique</b> ». Il n’y a ni adversaire ni performance mesurée." }
      ]
    }
  ]
});
