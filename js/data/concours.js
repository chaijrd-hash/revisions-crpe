/* CONCOURS BLANCS — sujets d’entraînement au format de l’écrit du CRPE L3.
   Chaque sujet : parties (titre, consignes/documents), questions avec barème (pts). Note ramenée sur 20. */
window.CONCOURS = [
{
  id: "fm1",
  title: "Concours blanc n°1 — Français et mathématiques",
  short: "Blanc n°1 · Français + Maths",
  duration: 240,
  icon: "📝",
  intro: "<p>Sujet d’entraînement au format de l’épreuve écrite de <b>français et mathématiques</b> (4 heures). Partie français sur 20 points, partie mathématiques sur 20 points ; la note finale est ramenée sur 20.</p><p>Conseil : 2 h par partie, dont 10 min de relecture. Brouillon autorisé, calculatrice interdite.</p>",
  parts: [
    {
      title: "PARTIE 1 — FRANÇAIS (20 points)",
      doc: `<p><b>Texte support</b> (texte d’entraînement)</p>
<div class="box ex"><p>[§1] Le matin de la rentrée, Lucie se réveilla bien avant que le réveil ne sonne. Dehors, la pluie fine dessinait sur la vitre des chemins qui se croisaient sans jamais se rejoindre. Elle resta un long moment immobile, les yeux grands ouverts, le cœur battant comme un tambour. Trente visages inconnus l’attendaient ; trente prénoms qu’il faudrait apprendre, trente histoires qu’elle ne connaissait pas encore.</p>
<p>[§2] Dans la cuisine, sa grand-mère avait déjà préparé le café. « Tu n’as rien avalé hier soir, dit-elle doucement. Une maîtresse qui s’évanouit le premier jour, ce n’est pas très sérieux ! » Lucie sourit malgré elle. Elle but quelques gorgées, attrapa le cartable de cuir qu’on lui avait offert pour son concours, et sortit.</p>
<p>[§3] Les rues étaient presque vides. À mesure qu’elle approchait de l’école, sa peur se transformait étrangement en une sorte de joie impatiente. Lorsqu’elle aperçut la grille verte et les premiers enfants qui couraient dans la cour, elle comprit qu’elle était exactement là où elle avait toujours voulu être.</p></div>`,
      questions: [
        { pts: 3, type: "open", q: "<b>Compréhension.</b> Comment évoluent les sentiments de Lucie au fil du texte ? Justifiez votre réponse en citant au moins deux passages.", model: "<p>Le texte montre le passage de l’<b>appréhension</b> à la <b>joie</b>. Au §1, Lucie est angoissée : elle se réveille « bien avant que le réveil ne sonne », reste « immobile », « le cœur battant comme un tambour », et pense aux « trente visages inconnus ». Au §2, l’humour bienveillant de sa grand-mère la détend (« Lucie sourit malgré elle »). Au §3, « sa peur se transformait étrangement en une sorte de joie impatiente » et la dernière phrase exprime un sentiment d’accomplissement : « elle était exactement là où elle avait toujours voulu être ».</p><p><b>Barème</b> : évolution identifiée (1 pt), deux citations pertinentes (1 pt), rédaction correcte (1 pt).</p>" },
        { pts: 1, q: "Quel est le point de vue adopté par le narrateur ?", choices: ["externe", "interne (celui de Lucie)", "omniscient"], answer: 1, expl: "On perçoit les événements et les émotions à travers Lucie (sa peur, sa joie, ce qu’elle aperçoit)." },
        { pts: 1, q: "« le cœur battant comme un tambour » : quelle figure de style ?", choices: ["métaphore", "comparaison", "personnification", "hyperbole"], answer: 1, expl: "Outil de comparaison « comme ». Elle traduit l’intensité de l’angoisse." },
        { pts: 1, q: "Quelle est la valeur de l’imparfait dans « la pluie fine dessinait sur la vitre » ?", choices: ["action ponctuelle de premier plan", "description, arrière-plan", "habitude", "hypothèse"], answer: 1, expl: "Ici l’imparfait <b>décrit le décor</b> (le temps qu’il fait) : c’est l’arrière-plan du récit. Les actions de premier plan, elles, sont au passé simple (« Lucie se réveilla »)." },
        { pts: 1, q: "Nature de « qu’ » dans « trente histoires qu’elle ne connaissait pas encore » :", choices: ["conjonction de subordination", "pronom relatif", "pronom personnel"], answer: 1, expl: "Il a un antécédent (histoires) et introduit une subordonnée relative ; il est COD de « connaissait »." },
        { pts: 1, q: "Fonction de « doucement » dans « dit-elle doucement » :", choices: ["COD", "complément circonstanciel de manière", "attribut du sujet"], answer: 1, expl: "« doucement » est un adverbe qui indique <b>comment</b> elle parle : c’est un complément circonstanciel de manière. Il n’est pas COD (on ne « dit » pas « doucement ») et ne qualifie pas le sujet." },
        { pts: 1, q: "Nature et fonction de la proposition « Lorsqu’elle aperçut la grille verte » :", choices: ["subordonnée relative, complément de l’antécédent", "subordonnée circonstancielle de temps, CC de temps", "subordonnée complétive, COD"], answer: 1, expl: "« Lorsque » est une conjonction de subordination de <b>temps</b> : la proposition indique <b>quand</b> elle comprit. C’est une subordonnée circonstancielle de temps, CC de temps du verbe « comprit »." },
        { pts: 1, q: "Réécrivez « Elle but quelques gorgées » au passé composé.", answers: ["elle a bu quelques gorgées"], numeric: false, expl: "Le passé composé = auxiliaire au présent + participe passé : « elle <b>a bu</b> quelques gorgées ». Le participe passé de « boire » est <b>bu</b>." },
        { pts: 1, type: "open", q: "Réécrivez au discours indirect : « Tu n’as rien avalé hier soir, dit-elle doucement. »", model: "<p>« Elle lui dit doucement qu’elle n’avait rien avalé la veille au soir. » (pronoms : tu → elle ; passé composé → plus-que-parfait ; hier soir → la veille au soir)</p>" },
        { pts: 2, type: "open", q: "<b>Orthographe.</b> Corrigez les erreurs de cette phrase et justifiez chaque correction : « Les enfant qu’elle a accueilli était impatient de découvrir leurs nouvelle classe. »", model: "<p>« Les enfant<b>s</b> qu’elle a accueilli<b>s</b> étai<b>ent</b> impatient<b>s</b> de découvrir leur nouvelle classe. »</p><ul><li>enfant<b>s</b> : pluriel commandé par le déterminant « les ».</li><li>accueilli<b>s</b> : participe passé avec avoir, COD « qu’ » (= les enfants) placé avant.</li><li>étai<b>ent</b> : accord avec le sujet « les enfants » (3ᵉ pers. du pluriel).</li><li>impatient<b>s</b> : attribut du sujet, accord avec « enfants ».</li><li><b>leur</b> : chaque enfant découvre une seule nouvelle classe (accepté : leurs nouvelles classes, avec les deux accords).</li></ul><p>Barème : 0,5 pt par correction justifiée (4 attendues sur 5).</p>" },
        { pts: 1, q: "Dans « impatiente », quel est le préfixe ?", answers: ["im", "im-"], expl: "im- (forme de in- devant p) exprime le contraire." },
        { pts: 1, q: "Donnez l’antonyme de « inconnus » formé sur le même radical.", answers: ["connus"], expl: "« inconnus » = préfixe <b>in-</b> (contraire) + « connus ». En enlevant le préfixe, on obtient l’antonyme : <b>connus</b>." },
        { pts: 1, q: "Combien de phonèmes dans le mot « cuisine » ?", answers: ["6"], expl: "[k] [ɥ] [i] [z] [i] [n] : 6 phonèmes." },
        { pts: 4, type: "open", q: "<b>Rédaction.</b> Comme Lucie, un professeur débutant peut ressentir de l’appréhension. Selon vous, quelles qualités sont essentielles pour un professeur des écoles ? Vous développerez une argumentation organisée d’une vingtaine de lignes, appuyée sur des exemples.", model: "<p><b>Plan possible</b> : introduction (amorce + problématique + annonce) ; 1) des qualités relationnelles : bienveillance, écoute, exigence (exemple : accueillir l’erreur sans moquerie) ; 2) des qualités professionnelles : maîtrise des savoirs, capacité d’organisation, adaptation aux besoins de chaque élève (différenciation) ; 3) des qualités personnelles : patience, curiosité, capacité à se remettre en question et à travailler en équipe ; conclusion.</p><p><b>Critères</b> : pertinence des arguments (1,5), exemples précis (1), organisation et connecteurs (0,5), correction de la langue (1).</p>" }
      ]
    },
    {
      title: "PARTIE 2 — MATHÉMATIQUES (20 points)",
      doc: "<p><b>Exercice 1 — Sortie au zoo (6 points)</b><br>Une école organise une sortie au zoo pour trois classes de 26, 28 et 24 élèves, accompagnées de 9 adultes. La location d’un car de 50 places coûte 380 €. L’entrée au zoo coûte 12,50 € par enfant ; elle est gratuite pour les adultes.</p>",
      questions: [
        { pts: 1, q: "Ex. 1 a) Combien de personnes participent à la sortie ?", answers: ["87"], expl: "26 + 28 + 24 = 78 élèves ; 78 + 9 = 87 personnes." },
        { pts: 1, q: "Ex. 1 b) Combien de cars faut-il réserver ?", answers: ["2"], expl: "87 = 50 × 1 + 37 : un car ne suffit pas, il en faut 2." },
        { pts: 1, q: "Ex. 1 c) Quel est le coût total de la sortie (en €) ?", answers: ["1735"], expl: "Cars : 2 × 380 = 760 € ; entrées : 78 × 12,50 = 975 € ; total 1 735 €." },
        { pts: 1, q: "Ex. 1 d) La coopérative scolaire prend en charge 40 % du coût ; le reste est partagé équitablement entre les familles des 78 élèves. Combien paie chaque famille (en €, arrondi au centime) ?", answers: ["13,35", "13.35"], tol: 0.006, expl: "Reste : 1 735 × 0,6 = 1 041 € ; 1 041 ÷ 78 ≈ 13,346… ≈ 13,35 €." },
        { pts: 1, q: "Ex. 1 e) Le zoo est à 105 km. Le car roule à 75 km/h de moyenne et part à 8 h 20. À quelle heure arrive-t-il ? (format 9h44)", answers: ["9h44", "9 h 44", "9:44", "9h44min"], numeric: false, expl: "t = 105 ÷ 75 = 1,4 h = 1 h 24 min (0,4 × 60 = 24). 8 h 20 + 1 h 24 = 9 h 44." },
        { pts: 1, q: "Ex. 1 f) Sur le plan du zoo à l’échelle 1/2 500, une allée mesure 18 cm. Quelle est sa longueur réelle (en m) ?", answers: ["450"], expl: "18 × 2 500 = 45 000 cm = 450 m." },
        { pts: 1, q: "<b>Exercice 2 — Le jardin pédagogique (5 points)</b><br>Le jardin est un rectangle ABCD avec AB = 12 m et BC = 5 m.<br>a) Calculez la longueur de la diagonale AC (en m).", answers: ["13"], expl: "ABC est rectangle en B. Pythagore : AC² = 12² + 5² = 144 + 25 = 169, donc AC = 13 m." },
        { pts: 1, q: "Ex. 2 b) Quelle est l’aire du jardin (en m²) ?", answers: ["60"], expl: "Aire d’un rectangle = longueur × largeur : 12 × 5 = <b>60 m²</b>. Ne confonds pas avec le périmètre (2 × (12 + 5) = 34 m)." },
        { pts: 1, q: "Ex. 2 c) E est le point de [AC] tel que AE = 5,2 m, et F le point de [AB] tel que (EF) // (BC). Calculez AF (en m).", answers: ["4,8", "4.8"], expl: "Thalès : AF/AB = AE/AC → AF = 12 × 5,2 ÷ 13 = 4,8 m." },
        { pts: 1, q: "Ex. 2 d) Calculez EF (en m).", answers: ["2"], expl: "EF/BC = AE/AC → EF = 5 × 5,2 ÷ 13 = 2 m." },
        { pts: 1, q: "Ex. 2 e) On plante un piquet tous les 0,5 m sur le contour du jardin, en commençant par un coin. Combien de piquets ?", answers: ["68"], expl: "Périmètre : 2 × (12 + 5) = 34 m. Sur un contour fermé, il y a autant de piquets que d’intervalles : 34 ÷ 0,5 = 68." },
        { pts: 1, type: "vf", q: "<b>Exercice 3 — Vrai ou faux ? (4 points)</b><br>a) « La somme de deux multiples de 3 est un multiple de 3. »", answer: 0, expl: "Vrai : 3a + 3b = 3(a + b)." },
        { pts: 1, type: "vf", q: "Ex. 3 b) « Si un prix augmente de 20 % puis baisse de 20 %, il revient à sa valeur initiale. »", answer: 1, expl: "Faux : × 1,2 × 0,8 = × 0,96, soit une baisse de 4 %." },
        { pts: 1, type: "vf", q: "Ex. 3 c) « Le carré d’un nombre est toujours supérieur ou égal à ce nombre. »", answer: 1, expl: "Faux : 0,5² = 0,25 &lt; 0,5. Un contre-exemple suffit." },
        { pts: 1, type: "vf", q: "Ex. 3 d) « Un quadrilatère qui a quatre angles droits est un carré. »", answer: 1, expl: "Faux : c’est un rectangle, pas forcément un carré (contre-exemple : rectangle 4 × 2)." },
        { pts: 1, q: "<b>Exercice 4 (3 points)</b><br>a) Décomposez 540 en produit de facteurs premiers (ex. 2^2×3^3×5).", answers: ["2^2×3^3×5", "2²×3³×5", "2^2*3^3*5", "2×2×3×3×3×5", "2^2x3^3x5"], numeric: false, expl: "540 = 2 × 270 = 2² × 135 = 2² × 3³ × 5." },
        { pts: 1, q: "Ex. 4 b) Une urne contient 5 boules rouges, 3 vertes et 2 bleues. On tire une boule au hasard. Quelle est la probabilité de ne pas tirer une boule rouge ?", answers: ["1/2", "0,5", "0.5", "5/10"], expl: "5 boules non rouges sur 10 : 5/10 = 1/2." },
        { pts: 1, q: "Ex. 4 c) Un élève a obtenu 12, 15, 9 et 14. Quelle note doit-il avoir au 5ᵉ contrôle pour obtenir 13 de moyenne ?", answers: ["15"], expl: "Total nécessaire : 13 × 5 = 65 ; 65 − (12 + 15 + 9 + 14) = 65 − 50 = 15." },
        { pts: 2, type: "open", q: "<b>Exercice 5 — Analyse d’erreur (2 points)</b><br>Un élève de CM1 écrit : « 4,5 × 10 = 4,50 ». Analysez son erreur et proposez une aide.", model: "<p><b>Analyse</b> : l’élève applique la règle « pour multiplier par 10, on ajoute un zéro », valable pour les entiers mais fausse pour les décimaux. Il ne comprend pas que multiplier par 10 rend chaque chiffre 10 fois plus grand (changement de rang). 4,50 = 4,5 : son résultat est égal au nombre de départ, ce qu’un contrôle de vraisemblance aurait révélé.</p><p><b>Aide</b> : tableau de numération pour montrer le glissement des chiffres d’un rang vers la gauche (4 unités → 4 dizaines, 5 dixièmes → 5 unités → 45) ; ordre de grandeur (4,5 × 10 ≈ 5 × 10 = 50) ; bannir la formule « ajouter un zéro ».</p>" }
      ]
    }
  ]
},
{
  id: "fm2",
  title: "Concours blanc n°2 — Français et mathématiques",
  short: "Blanc n°2 · Français + Maths",
  duration: 240,
  icon: "📝",
  intro: "<p>Deuxième sujet d’entraînement au format de l’épreuve écrite de <b>français et mathématiques</b> (4 heures). Texte argumentatif en français, problèmes de la vie de l’école en mathématiques.</p>",
  parts: [
    {
      title: "PARTIE 1 — FRANÇAIS (20 points)",
      doc: `<p><b>Texte support</b> (texte d’entraînement)</p>
<div class="box ex"><p>[§1] Pendant longtemps, on a cru que l’enfant arrivait à l’école comme une page blanche, qu’il suffisait de remplir. Les recherches en sciences cognitives ont profondément bouleversé cette idée. Avant même de savoir lire, le jeune enfant possède des intuitions sur les nombres, il repère des régularités dans la langue et il formule sans cesse des hypothèses sur le monde qui l’entoure.</p>
<p>[§2] Apprendre, ce n’est donc pas recevoir passivement un savoir : c’est transformer ce que l’on croyait savoir. Lorsqu’un élève affirme que les objets lourds tombent plus vite que les objets légers, il ne se trompe pas par hasard ; il s’appuie sur une expérience quotidienne qui lui paraît évidente. Le rôle de l’enseignant n’est pas de balayer cette erreur d’un revers de main, mais de créer les situations qui permettront à l’élève de la dépasser.</p>
<p>[§3] Certes, cette démarche demande du temps. Mais un savoir construit par l’élève lui-même sera plus solide qu’une formule apprise par cœur et oubliée la semaine suivante.</p></div>`,
      questions: [
        { pts: 3, type: "open", q: "<b>Compréhension.</b> Quelle est la thèse défendue par l’auteur ? Quels arguments avance-t-il ? Répondez en quelques lignes en citant le texte.", model: "<p><b>Thèse</b> : apprendre ne consiste pas à recevoir passivement un savoir mais à transformer ses conceptions (« c’est transformer ce que l’on croyait savoir »). <b>Arguments</b> : 1) les sciences cognitives montrent que l’enfant n’est pas une « page blanche » : il a déjà des intuitions et formule des hypothèses ; 2) les erreurs reposent sur des expériences quotidiennes (exemple de la chute des objets), il faut donc les faire dépasser par des situations adaptées ; 3) un savoir construit est « plus solide » qu’un savoir appris par cœur. L’auteur concède que cette démarche « demande du temps » (§3).</p>" },
        { pts: 1, q: "Ce texte est principalement :", choices: ["narratif", "descriptif", "argumentatif", "injonctif"], answer: 2, expl: "L’auteur défend une <b>thèse</b> (apprendre, c’est transformer ce qu’on croyait savoir) avec des arguments et une concession (« Certes… Mais ») : c’est un texte <b>argumentatif</b>." },
        { pts: 1, q: "« l’enfant arrivait à l’école comme une page blanche » : figure de style ?", choices: ["métaphore", "comparaison", "oxymore"], answer: 1, expl: "L’outil « <b>comme</b> » relie l’enfant (comparé) à la page blanche (comparant) : c’est une <b>comparaison</b>. Une métaphore rapprocherait les deux sans outil de comparaison." },
        { pts: 1, q: "Quel rapport logique introduit « Certes… Mais » (§3) ?", choices: ["cause", "concession", "conséquence", "but"], answer: 1, expl: "« Certes » reconnaît un point faible (la démarche demande du temps), puis « Mais » réaffirme la thèse : c’est une <b>concession</b>." },
        { pts: 1, q: "Nature de la proposition « qu’il suffisait de remplir » (§1) :", choices: ["subordonnée relative", "subordonnée complétive", "subordonnée circonstancielle"], answer: 0, expl: "« qu’ » reprend l’antécédent « une page blanche »." },
        { pts: 1, q: "Nature de la proposition « que les objets lourds tombent plus vite » :", choices: ["relative", "complétive (COD de « affirme »)", "circonstancielle de cause"], answer: 1, expl: "La proposition complète le verbe « affirme » : on affirme <b>quoi</b> ? « que les objets lourds tombent plus vite ». C’est une <b>complétive</b> COD. Ce n’est pas une relative : « que » n’a pas d’antécédent." },
        { pts: 1, q: "Valeur du présent dans « le jeune enfant possède des intuitions » :", choices: ["énonciation", "vérité générale", "narration", "futur proche"], answer: 1, expl: "L’auteur énonce un fait vrai pour tous les jeunes enfants, à toute époque : c’est un présent de <b>vérité générale</b>." },
        { pts: 1, q: "Réécrivez « on a cru » au plus-que-parfait.", answers: ["on avait cru"], expl: "Le plus-que-parfait = auxiliaire à l’<b>imparfait</b> + participe passé : « on a cru » devient « on <b>avait</b> cru »." },
        { pts: 1, q: "Mettez « permettront » au conditionnel présent (même personne).", answers: ["permettraient"], expl: "Le conditionnel présent = radical du futur + terminaisons de l’imparfait : permettr- + <b>-aient</b> (3ᵉ personne du pluriel) → « permettraient »." },
        { pts: 1, q: "Pourquoi « construit » est-il au masculin singulier dans « un savoir construit par l’élève » ?", choices: ["participe passé avec avoir, COD placé après", "participe passé employé seul, accordé avec le nom « savoir »", "il est invariable"], answer: 1, expl: "« construit » est un participe passé <b>employé seul</b>, sans auxiliaire : il s’accorde comme un adjectif avec le nom qu’il complète, « savoir » (masculin singulier)." },
        { pts: 2, type: "open", q: "<b>Orthographe.</b> Corrigez et justifiez : « Les erreurs que les élèves ont fait sont souvent riche d’enseignement, ils faut les analysé. »", model: "<p>« Les erreurs que les élèves ont fait<b>es</b> sont souvent riche<b>s</b> d’enseignement, <b>il</b> faut les analys<b>er</b>. »</p><ul><li>fait<b>es</b> : avoir + COD « que » (= les erreurs, féminin pluriel) placé avant.</li><li>riche<b>s</b> : attribut du sujet « les erreurs ».</li><li><b>il</b> faut : verbe impersonnel, sujet « il » singulier.</li><li>analys<b>er</b> : infinitif après « faut » (test : « il faut les vendre »).</li></ul><p>0,5 pt par correction justifiée.</p>" },
        { pts: 1, q: "Comment est formé l’adverbe « passivement » ?", choices: ["composition", "adjectif féminin « passive » + suffixe -ment", "préfixe pass- + radical"], answer: 1, expl: "On forme souvent les adverbes en -ment sur l’adjectif au <b>féminin</b> : passive + -ment = passivement (comme lente → lentement). C’est une dérivation, pas une composition." },
        { pts: 1, q: "Combien de syllabes orales dans le mot « enseignant » ?", answers: ["3"], expl: "en-sei-gnant." },
        { pts: 4, type: "open", q: "<b>Rédaction.</b> « L’erreur est une étape normale de l’apprentissage. » Vous discuterez cette affirmation dans un développement argumenté d’une vingtaine de lignes, en vous appuyant sur des exemples précis.", model: "<p><b>Plan possible</b> : 1) l’erreur est un indicateur précieux : elle révèle les conceptions de l’élève (exemple : 2,15 &gt; 2,3), elle permet à l’enseignant d’ajuster son enseignement ; 2) l’erreur est un moteur : on apprend en confrontant ses idées au réel (démarche d’investigation), le conflit cognitif fait progresser ; 3) nuances : encore faut-il qu’elle soit analysée et corrigée, sans quoi elle se fixe ; un climat de classe bienveillant est nécessaire pour que l’élève ose se tromper.</p><p><b>Critères</b> : thèse claire (1), arguments et exemples (1,5), organisation (0,5), langue (1).</p>" }
      ]
    },
    {
      title: "PARTIE 2 — MATHÉMATIQUES (20 points)",
      doc: "<p><b>Exercice 1 — La kermesse (6 points)</b><br>Recette du gâteau pour 8 personnes : 200 g de farine, 3 œufs, 150 g de sucre, 1/4 L de lait. Les jeux fonctionnent avec des tickets : 1,50 € le ticket, ou 12 € le carnet de 10 tickets.</p>",
      questions: [
        { pts: 1, q: "Ex. 1 a) Quelle masse de farine (en g) pour 20 personnes ?", answers: ["500"], expl: "200 ÷ 8 × 20 = 500 g (ou 20 = 8 × 2,5)." },
        { pts: 1, q: "Ex. 1 b) Combien d’œufs faut-il acheter pour 20 personnes ?", answers: ["8"], expl: "3 ÷ 8 × 20 = 7,5 : on ne peut pas acheter un demi-œuf, il en faut 8." },
        { pts: 1, q: "Ex. 1 c) Quel pourcentage de réduction le carnet représente-t-il par rapport à 10 tickets achetés à l’unité ?", answers: ["20", "20 %", "20%"], expl: "10 tickets à l’unité : 15 €. Économie : 3 € ; 3/15 = 0,2 = 20 %." },
        { pts: 1, q: "Ex. 1 d) On a vendu 340 tickets à l’unité et 45 carnets. Quelle est la recette (en €) ?", answers: ["1050"], expl: "340 × 1,5 = 510 ; 45 × 12 = 540 ; total 1 050 €." },
        { pts: 1, q: "Ex. 1 e) À partir de combien de tickets le carnet devient-il strictement plus avantageux que l’achat à l’unité ?", answers: ["9"], expl: "8 tickets coûtent 12 € (autant que le carnet) ; à partir de 9 tickets (13,50 €), le carnet est plus avantageux." },
        { pts: 1, q: "Ex. 1 f) Ventes de jus par heure : 12 ; 20 ; 25 ; 15 ; 8. Quelle est la moyenne horaire ?", answers: ["16"], expl: "80 ÷ 5 = 16." },
        { pts: 1, q: "<b>Exercice 2 — Le bac à sable (5 points)</b><br>Un bac à sable est un pavé droit de 2 m × 1,5 m × 0,4 m.<br>a) Quel est son volume (en m³) ?", answers: ["1,2", "1.2"], expl: "Volume d’un pavé droit = longueur × largeur × hauteur : 2 × 1,5 × 0,4 = 3 × 0,4 = <b>1,2 m³</b>." },
        { pts: 1, q: "Ex. 2 b) Convertissez ce volume en litres.", answers: ["1200"], expl: "1 m³ = 1 000 dm³ = <b>1 000 L</b>, donc 1,2 m³ = 1,2 × 1 000 = <b>1 200 L</b>." },
        { pts: 1, q: "Ex. 2 c) On le remplit aux 3/4 avec du sable vendu en sacs de 25 L. Combien de sacs ?", answers: ["36"], expl: "3/4 × 1 200 = 900 L ; 900 ÷ 25 = 36 sacs." },
        { pts: 1, q: "Ex. 2 d) Un triangle a pour côtés 6 cm, 8 cm et 10 cm. Est-il rectangle ?", choices: ["Oui, d’après la réciproque du théorème de Pythagore", "Non"], answer: 0, expl: "10² = 100 et 6² + 8² = 36 + 64 = 100." },
        { pts: 1, q: "Ex. 2 e) Aire d’un disque de diamètre 10 cm, arrondie au cm² ?", answers: ["79"], expl: "Rayon 5 cm : π × 25 ≈ 78,54 ≈ 79 cm²." },
        { pts: 1, type: "vf", q: "<b>Exercice 3 — Vrai ou faux ? (4 points)</b><br>a) « 1/3 est un nombre décimal. »", answer: 1, expl: "Faux : 1/3 = 0,333… ; son dénominateur contient le facteur 3." },
        { pts: 1, type: "vf", q: "Ex. 3 b) « Le produit de deux nombres impairs est impair. »", answer: 0, expl: "Vrai : (2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1." },
        { pts: 1, type: "vf", q: "Ex. 3 c) « Pour tous nombres a et b, (a + b)² = a² + b². »", answer: 1, expl: "Faux : (1 + 1)² = 4 ≠ 2. Il manque le double produit 2ab." },
        { pts: 1, type: "vf", q: "Ex. 3 d) « Si on double le rayon d’un disque, son aire double. »", answer: 1, expl: "Faux : l’aire est multipliée par 2² = 4." },
        { pts: 1, q: "<b>Exercice 4 (3 points)</b><br>a) Deux gyrophares s’allument ensemble, puis l’un toutes les 12 s et l’autre toutes les 18 s. Au bout de combien de secondes s’allument-ils de nouveau ensemble ?", answers: ["36"], expl: "PPCM(12 ; 18) = 36." },
        { pts: 1, q: "Ex. 4 b) Script : « répéter 6 fois : avancer de 50, tourner de 60° ». Quelle figure est tracée ?", choices: ["un triangle équilatéral", "un hexagone régulier", "un carré"], answer: 1, expl: "6 côtés égaux de 50, et on tourne de 60° à chaque fois : 6 × 60° = 360°, on revient au départ. C’est un <b>hexagone régulier</b> (un triangle demanderait 3 fois 120°)." },
        { pts: 1, q: "Ex. 4 c) Quel est le périmètre de cette figure ?", answers: ["300"], expl: "L’hexagone a 6 côtés de 50 pas : 6 × 50 = <b>300</b>." },
        { pts: 2, type: "open", q: "<b>Exercice 5 — Analyse d’erreur (2 points)</b><br>« Pour 8 personnes, il faut 200 g de farine. Combien pour 12 personnes ? » Un élève répond : « 204 g, car 12 = 8 + 4. » Analysez et proposez une aide.", model: "<p><b>Analyse</b> : l’élève utilise un <b>raisonnement additif</b> (il ajoute 4 aux grammes parce qu’on ajoute 4 personnes) au lieu d’un raisonnement <b>multiplicatif</b> : il ne reconnaît pas la situation de proportionnalité.</p><p><b>Aide</b> : manipuler/représenter (4 personnes = la moitié de 8 → 100 g), utiliser la linéarité additive correcte (12 = 8 + 4 → 200 g + 100 g = 300 g) ou le passage à l’unité (25 g par personne), tableau de proportionnalité, contrôle de vraisemblance (4 personnes de plus pour seulement 4 g de farine ?).</p>" }
      ]
    }
  ]
},
{
  id: "ad1",
  title: "Concours blanc n°3 — Autres domaines d’enseignement",
  short: "Blanc n°3 · Sciences, HG-EMC, Arts",
  duration: 180,
  icon: "🌍",
  intro: "<p>Sujet d’entraînement pour l’épreuve portant sur les <b>autres domaines</b> : sciences et technologie, histoire-géographie-EMC, arts et EPS. Documents à analyser et questions de connaissances.</p><div class=\"box warn\"><span class=\"box-title\">À savoir</span>Ce sujet mélange plusieurs domaines pour réviser. Au concours, l’écrit 2 porte sur <b>un seul domaine choisi</b>, au niveau du collège (cycle 4) : entraîne-toi aussi avec les sujets inédits de ton domaine.</div>",
  parts: [
    {
      title: "PARTIE 1 — SCIENCES ET TECHNOLOGIE (8 points)",
      doc: `<p><b>Document 1 — Expérience réalisée en classe de CM1</b> (10 graines de haricot par lot, observation après 8 jours)</p>
<table><tr><th>Lot</th><th>Eau</th><th>Lumière</th><th>Température</th><th>Graines germées</th></tr>
<tr><td>A</td><td>oui</td><td>oui</td><td>20 °C</td><td>9 / 10</td></tr>
<tr><td>B</td><td>non</td><td>oui</td><td>20 °C</td><td>0 / 10</td></tr>
<tr><td>C</td><td>oui</td><td>non</td><td>20 °C</td><td>9 / 10</td></tr>
<tr><td>D</td><td>oui</td><td>oui</td><td>4 °C</td><td>0 / 10</td></tr></table>`,
      questions: [
        { pts: 1, q: "Quel lot joue le rôle de témoin ?", choices: ["A", "B", "C", "D"], answer: 0, expl: "Le témoin est le lot où <b>toutes les conditions</b> sont réunies (eau, lumière, 20 °C) : le lot A. On compare chaque autre lot à lui, en ne changeant qu’un seul facteur à la fois." },
        { pts: 1, q: "D’après le document, quels facteurs sont nécessaires à la germination ?", choices: ["l’eau et la lumière", "l’eau et une température suffisante", "la lumière seulement"], answer: 1, expl: "B (sans eau) et D (froid) ne germent pas ; C (obscurité) germe comme A." },
        { pts: 1, type: "vf", q: "La lumière est nécessaire à la germination.", answer: 1, expl: "Faux : le lot C germe dans l’obscurité. (Elle sera en revanche nécessaire à la croissance de la plante.)" },
        { pts: 1, type: "open", q: "Pourquoi utilise-t-on 10 graines par lot plutôt qu’une seule ?", model: "<p>Pour que le résultat ne dépende pas du hasard (une graine peut être abîmée ou stérile) : avec plusieurs graines, le résultat est plus <b>fiable</b>. D’ailleurs, même dans le lot A, une graine n’a pas germé.</p>" },
        { pts: 1, q: "La buée qui se forme sur une vitre froide est :", choices: ["de la vapeur d’eau", "de l’eau liquide issue de la liquéfaction de la vapeur d’eau de l’air", "de la fumée"], answer: 1, expl: "La vapeur d’eau de l’air est <b>invisible</b>. Au contact de la vitre froide, elle se <b>liquéfie</b> en fines gouttelettes : la buée est donc de l’eau liquide. Le piège : croire qu’on voit la vapeur." },
        { pts: 2, type: "open", q: "Un élève affirme : « Il fait plus chaud en été parce que la Terre est plus près du Soleil. » Expliquez pourquoi c’est faux et donnez l’explication scientifique.", model: "<p>C’est faux : la Terre est même un peu plus proche du Soleil début janvier (hiver dans l’hémisphère nord), et les saisons sont inversées entre les deux hémisphères, ce qui serait impossible si la distance était en cause. Les saisons s’expliquent par l’<b>inclinaison de l’axe de rotation de la Terre</b> (environ 23,5°) combinée à sa révolution autour du Soleil : en été, les rayons arrivent plus verticalement (plus d’énergie reçue par m²) et les jours sont plus longs.</p>" },
        { pts: 1, q: "Quelle chaîne alimentaire est correctement écrite ?", choices: ["renard → lapin → herbe", "herbe → lapin → renard", "lapin → herbe → renard"], answer: 1, expl: "La flèche signifie « est mangé par » ; la chaîne commence par un végétal." }
      ]
    },
    {
      title: "PARTIE 2 — HISTOIRE ET GÉOGRAPHIE (7 points)",
      doc: "<p><b>Document 2</b> — « Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l’utilité commune. » (Article 1ᵉʳ de la Déclaration des droits de l’homme et du citoyen)</p>",
      questions: [
        { pts: 1, q: "En quelle année ce texte a-t-il été adopté ?", answers: ["1789"], expl: "La Déclaration des droits de l’homme et du citoyen a été adoptée le 26 août <b>1789</b>, au début de la Révolution française." },
        { pts: 1, q: "Ce texte ouvre la période historique appelée :", choices: ["Temps modernes", "Époque contemporaine", "Moyen Âge"], answer: 1, expl: "Par convention, la Révolution française de 1789 marque le début de l’<b>Époque contemporaine</b> ; les Temps modernes vont de 1492 à 1789." },
        { pts: 1, q: "Quelle caractéristique de la société d’Ancien Régime cet article remet-il en cause ?", choices: ["les privilèges liés à la naissance", "l’existence des villes", "la religion catholique"], answer: 0, expl: "Sous l’Ancien Régime, la société est divisée en trois ordres et la noblesse et le clergé ont des <b>privilèges</b> de naissance. L’article 1ᵉʳ affirme l’égalité en droits : il les remet en cause." },
        { pts: 1, q: "Ordre chronologique correct :", choices: ["Clovis – Charlemagne – Hugues Capet – Jeanne d’Arc", "Charlemagne – Clovis – Jeanne d’Arc – Hugues Capet", "Hugues Capet – Clovis – Charlemagne – Jeanne d’Arc"], answer: 0, expl: "Clovis (vers 500), Charlemagne (couronné empereur en 800), Hugues Capet (987), Jeanne d’Arc (XVᵉ siècle, vers 1429)." },
        { pts: 1, q: "L’année 1515 appartient au :", choices: ["XVᵉ siècle", "XVIᵉ siècle", "XIVᵉ siècle"], answer: 1, expl: "Le XVIᵉ siècle va de 1501 à 1600. Astuce : on ajoute 1 aux deux premiers chiffres : 15 + 1 = 16, donc XVIᵉ siècle." },
        { pts: 1, q: "Quel est le plus long fleuve de France ?", answers: ["Loire", "la Loire"], expl: "La <b>Loire</b> est le plus long fleuve de France (environ 1 000 km), devant la Seine et le Rhône (dont une partie coule en Suisse)." },
        { pts: 1, q: "Les trois piliers du développement durable sont :", choices: ["économique, social, environnemental", "local, national, mondial", "agricole, industriel, tertiaire"], answer: 0, expl: "Le développement durable concilie trois dimensions : <b>économique</b> (produire des richesses), <b>sociale</b> (répondre aux besoins de tous) et <b>environnementale</b> (préserver la planète)." }
      ]
    },
    {
      title: "PARTIE 3 — EMC, ARTS ET EPS (5 points)",
      doc: "",
      questions: [
        { pts: 1, q: "La loi de séparation des Églises et de l’État date de :", answers: ["1905"], expl: "La loi du 9 décembre <b>1905</b> sépare les Églises et l’État : la République garantit la liberté de culte mais ne reconnaît ni ne finance aucun culte." },
        { pts: 2, type: "open", q: "Expliquez, avec des mots adaptés à des élèves de CM2, ce qu’est la laïcité.", model: "<p>« La laïcité permet à chacun de croire en la religion de son choix, ou de ne pas croire. L’État et l’école publique ne favorisent aucune religion : ils sont neutres. À l’école, nous apprenons tous ensemble, quelles que soient nos croyances, dans le respect des autres. »</p><p>Critères : liberté de conscience (0,5), neutralité de l’État / de l’école (0,5), vivre ensemble / égalité (0,5), langage adapté (0,5).</p>" },
        { pts: 1, q: "La couleur complémentaire du bleu est :", choices: ["le vert", "l’orange", "le violet"], answer: 1, expl: "La complémentaire d’une couleur primaire est le mélange des deux autres primaires : rouge + jaune = <b>orange</b>. Le violet contient du bleu, il n’est donc pas sa complémentaire." },
        { pts: 1, q: "La course d’orientation relève du champ d’apprentissage :", choices: ["produire une performance optimale", "adapter ses déplacements à des environnements variés", "conduire un affrontement"], answer: 1, expl: "En course d’orientation, l’élève doit se repérer et se déplacer dans un milieu inconnu ou changeant : c’est le champ « <b>adapter ses déplacements à des environnements variés</b> », comme la natation ou l’escalade." }
      ]
    }
  ]
}
];
