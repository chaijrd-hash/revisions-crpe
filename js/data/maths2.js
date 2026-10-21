/* MATHÉMATIQUES — partie 2 : proportionnalité, calcul littéral, grandeurs, géométrie, données, algorithmique */

window.MATHS.chapters.push({
  id: 7,
  title: "Proportionnalité et pourcentages",
  short: "Proportionnalité",
  sub: "Tableaux, règle de trois, pourcentages, échelles, vitesses",
  objectifs: [
    "Reconnaître une situation de proportionnalité (et une situation qui ne l’est pas).",
    "Utiliser <b>toutes</b> les procédures : linéarité additive et multiplicative, coefficient, passage à l’unité, produit en croix.",
    "Calculer et appliquer un pourcentage, une augmentation, une réduction, des pourcentages successifs.",
    "Résoudre des problèmes d’échelle et de vitesse moyenne.",
    "Ce chapitre est <b>le plus présent</b> au concours : il faut être très à l’aise."
  ],
  lesson: `
<h2>1. Qu’est-ce que la proportionnalité ?</h2>
<p>Deux grandeurs sont <b>proportionnelles</b> quand on passe de l’une à l’autre en <b>multipliant toujours par le même nombre</b>, appelé <b>coefficient de proportionnalité</b>.</p>
<table><tr><th>Nombre de croissants</th><td>1</td><td>3</td><td>5</td><td>8</td></tr><tr><th>Prix (€)</th><td>1,20</td><td>3,60</td><td>6</td><td>9,60</td></tr></table>
<p>On multiplie toujours par 1,2 : c’est un tableau de proportionnalité. Graphiquement, une situation de proportionnalité est représentée par des <b>points alignés avec l’origine</b>.</p>
<div class="box warn"><span class="box-title">Contre-exemples à connaître</span>
<ul><li>L’âge et la taille d’un enfant : NON proportionnels.</li><li>Un taxi avec prise en charge de 4 € + 1,5 €/km : NON (à 0 km on paie déjà 4 €).</li><li>Le côté et l’aire d’un carré : NON (côté × 2 → aire × 4).</li><li>Le côté et le périmètre d’un carré : OUI (P = 4 × c).</li></ul></div>

<h2>2. Les procédures pour résoudre un problème</h2>
<p>Problème : <i>4 kg de pommes coûtent 6 €. Combien coûtent 10 kg ?</i></p>
<ol>
<li><b>Linéarité multiplicative</b> : 10 kg… ce n’est pas un multiple simple de 4. Mais 2 kg = 4 kg ÷ 2 → 3 € ; puis 10 kg = 2 kg × 5 → 15 €.</li>
<li><b>Linéarité additive</b> : 10 kg = 4 kg + 4 kg + 2 kg → 6 + 6 + 3 = 15 €.</li>
<li><b>Passage à l’unité</b> (« règle de trois ») : 1 kg coûte 6 ÷ 4 = 1,50 €, donc 10 kg coûtent 15 €.</li>
<li><b>Coefficient de proportionnalité</b> : prix = masse × 1,5 → 10 × 1,5 = 15 €.</li>
<li><b>Produit en croix</b> (4ᵉ proportionnelle) : x = 10 × 6 ÷ 4 = 15 €.</li>
</ol>
<p>Au concours, on te demande souvent d’<b>identifier les procédures</b> utilisées par des élèves. Retiens ces cinq noms.</p>

<h2>3. Les pourcentages</h2>
<div class="box def"><span class="box-title">Définition</span>Un pourcentage est une proportion exprimée « sur 100 ». t % = t/100. <b>Prendre t % de A</b> = A × t/100.</div>
<ul><li>25 % de 80 = 80 × 0,25 = 20.</li><li><b>Calculer un pourcentage</b> : 12 filles sur 30 élèves → 12/30 = 0,4 = 40 %.</li></ul>
<div class="box def"><span class="box-title">Augmentations et réductions (coefficient multiplicateur)</span>
<ul><li>Augmenter de t % = multiplier par <b>(1 + t/100)</b>. +20 % → × 1,2.</li><li>Diminuer de t % = multiplier par <b>(1 − t/100)</b>. −30 % → × 0,7.</li></ul></div>
<div class="box warn"><span class="box-title">Le piège des pourcentages successifs</span>Un prix augmente de 10 % puis baisse de 10 %. Revient-il au prix de départ ? NON : × 1,1 × 0,9 = × 0,99 → baisse de 1 %.<br>
De même, +20 % puis +30 % ne donne pas +50 % mais × 1,2 × 1,3 = × 1,56 → +56 %.</div>
<p><b>Retrouver le prix initial</b> : un article soldé −25 % coûte 60 €. Prix initial : 60 ÷ 0,75 = 80 € (et non 60 + 25 % !).</p>

<h2>4. Les échelles</h2>
<p>L’échelle d’une carte est le coefficient de proportionnalité entre les distances sur la carte et les distances réelles <b>dans la même unité</b>. Échelle 1/25 000 : 1 cm sur la carte = 25 000 cm = 250 m en réalité.</p>
<p>Exemple : sur une carte au 1/50 000, deux villages sont à 7 cm. Distance réelle : 7 × 50 000 = 350 000 cm = 3,5 km.</p>

<h2>5. Vitesse moyenne</h2>
<div class="box def"><span class="box-title">Formule</span><span class="formula">v = d / t</span> &nbsp; donc &nbsp; <span class="formula">d = v × t</span> &nbsp; et &nbsp; <span class="formula">t = d / v</span></div>
<p>Exemple : 150 km en 1 h 30 min. Attention : 1 h 30 = 1,5 h (et pas 1,3 h !). v = 150 ÷ 1,5 = 100 km/h.</p>
<p>Conversion : 1 m/s = 3,6 km/h (car 1 m/s = 3 600 m/h = 3,6 km/h).</p>
<div class="box warn"><span class="box-title">Piège de la vitesse moyenne</span>Aller à 60 km/h, retour à 40 km/h sur la même distance : la vitesse moyenne n’est PAS 50 km/h. Avec 120 km : aller 2 h, retour 3 h → 240 km en 5 h = 48 km/h.</div>
`,
  videos: [
    { t: "Reconnaître la proportionnalité", ch: "Yvan Monka", q: "Yvan Monka reconnaître une situation de proportionnalité" },
    { t: "Quatrième proportionnelle", ch: "Yvan Monka", q: "Yvan Monka quatrième proportionnelle produit en croix" },
    { t: "Pourcentages : augmentation et réduction", ch: "Yvan Monka", q: "Yvan Monka coefficient multiplicateur augmentation réduction" },
    { t: "Procédures des élèves en proportionnalité", ch: "Préparation CRPE", q: "CRPE proportionnalité procédures élèves linéarité" }
  ],
  resume: "<ul><li>Proportionnel = même coefficient multiplicateur ; graphique : droite passant par l’origine.</li><li>5 procédures : linéarité ×, linéarité +, passage à l’unité, coefficient, produit en croix.</li><li>+t % → × (1 + t/100). Les pourcentages successifs se multiplient.</li><li>v = d/t ; 1 h 30 = 1,5 h.</li></ul>",
  exercises: [
    { q: "5 stylos coûtent 3,50 €. Combien coûtent 8 stylos (en €) ?", answers: ["5,60", "5,6", "5.6"], expl: "1 stylo : 0,70 € ; 8 × 0,70 = 5,60 €." },
    { q: "Calcule 15 % de 240.", answers: ["36"], expl: "240 × 0,15 = 36." },
    { q: "Un article à 45 € augmente de 20 %. Nouveau prix (en €) ?", answers: ["54"], expl: "45 × 1,2 = 54." },
    { q: "Après une remise de 20 %, un article coûte 64 €. Quel était son prix initial (en €) ?", answers: ["80"], expl: "64 ÷ 0,8 = 80." },
    { q: "Un prix augmente de 50 % puis baisse de 50 %. Évolution globale ?", choices: ["0 %", "−25 %", "+25 %", "−50 %"], answer: 1, expl: "1,5 × 0,5 = 0,75 → −25 %." },
    { q: "Sur une carte au 1/200 000, deux villes sont à 4,5 cm. Distance réelle en km ?", answers: ["9"], expl: "4,5 × 200 000 = 900 000 cm = 9 km." },
    { q: "Un cycliste roule 45 km en 1 h 15 min. Vitesse moyenne en km/h ?", answers: ["36"], expl: "1 h 15 = 1,25 h ; 45 ÷ 1,25 = 36 km/h." },
    { q: "Le prix d’un taxi : 3 € de prise en charge + 2 € par km. Prix et distance sont-ils proportionnels ?", choices: ["Oui", "Non"], answer: 1, expl: "Pour 1 km : 5 € ; pour 2 km : 7 €. 5 × 2 ≠ 7. (Fonction affine, pas linéaire.)" },
    { q: "Un élève résout « 3 cahiers coûtent 4,50 €, combien coûtent 9 cahiers ? » en écrivant « 9 = 3 × 3, donc 4,50 × 3 = 13,50 € ». Nomme sa procédure. Puis propose une autre procédure qu’un élève de CM2 pourrait utiliser.", type: "open", model: "<p>C’est la <b>linéarité multiplicative</b> (propriété : si on multiplie la quantité par 3, le prix est multiplié par 3). Autre procédure : <b>passage à l’unité</b> : 1 cahier = 4,50 ÷ 3 = 1,50 €, 9 cahiers = 9 × 1,50 = 13,50 €. Ou <b>linéarité additive</b> : 9 = 3 + 3 + 3 → 4,50 + 4,50 + 4,50.</p>" }
  ],
  evaluation: [
    { q: "6 œufs pour 250 g de farine. Combien de farine (en g) pour 9 œufs ?", answers: ["375"], expl: "250 ÷ 6 × 9 = 375 g (ou 9 = 6 + 3 → 250 + 125)." },
    { q: "Dans une classe de 25 élèves, 9 sont des garçons. Pourcentage de garçons ?", answers: ["36", "36 %", "36%"], expl: "9/25 = 36/100 = 36 %." },
    { q: "Un prix baisse de 15 %. Par combien est-il multiplié ?", answers: ["0,85", "0.85"], expl: "Baisser de 15 %, c’est garder 100 % − 15 % = 85 % du prix. Or 85 % = 0,85 : le prix est multiplié par <b>0,85</b>. Piège : répondre 0,15 (c’est la baisse, pas ce qui reste)." },
    { q: "Une population passe de 1 200 à 1 500 habitants. Augmentation en % ?", answers: ["25", "25 %", "25%"], expl: "1 500 ÷ 1 200 = 1,25 → +25 %." },
    { q: "+10 % puis +10 % correspondent à une hausse globale de :", choices: ["20 %", "21 %", "19 %", "11 %"], answer: 1, expl: "1,1 × 1,1 = 1,21." },
    { q: "Un train roule à 120 km/h pendant 2 h 45 min. Distance parcourue (en km) ?", answers: ["330"], expl: "2 h 45 = 2,75 h → 120 × 2,75 = 330 km." },
    { q: "Convertis 72 km/h en m/s.", answers: ["20"], expl: "72 ÷ 3,6 = 20 m/s." },
    { q: "Un plan est à l’échelle 1/50. Un mur mesure 8 cm sur le plan. Longueur réelle en m ?", answers: ["4"], expl: "8 × 50 = 400 cm = 4 m." },
    { q: "Laquelle de ces situations est une situation de proportionnalité ?", choices: ["L’aire d’un disque en fonction de son rayon", "Le périmètre d’un cercle en fonction de son rayon", "L’âge et le poids d’un bébé", "Le prix d’un abonnement de 10 € + 2 € par séance en fonction du nombre de séances"], answer: 1, expl: "P = 2πr : coefficient 2π. L’aire, elle, vaut πr² (pas proportionnelle à r)." },
    { q: "Une voiture fait l’aller à 90 km/h et le retour à 60 km/h sur 180 km chaque trajet. Vitesse moyenne sur l’aller-retour (km/h) ?", answers: ["72"], expl: "Aller : 2 h ; retour : 3 h ; 360 km en 5 h = 72 km/h." }
  ]
});

window.MATHS.chapters.push({
  id: 8,
  title: "Calcul littéral, équations et fonctions",
  short: "Calcul littéral",
  sub: "Développer, factoriser, résoudre, fonctions linéaires et affines",
  objectifs: [
    "Utiliser une lettre pour <b>généraliser</b> et <b>prouver</b> (ex. : « la somme de 3 entiers consécutifs est un multiple de 3 »).",
    "Développer, factoriser, utiliser les identités remarquables.",
    "Mettre un problème en équation et le résoudre.",
    "Lire et interpréter une fonction (tableau, graphique, formule) ; distinguer fonctions linéaires et affines."
  ],
  lesson: `
<h2>1. Pourquoi des lettres ?</h2>
<p>Une lettre représente <b>un nombre quelconque</b>. Elle permet de démontrer une propriété <b>pour tous les nombres</b>, alors qu’un exemple ne prouve rien.</p>
<div class="box ex"><span class="box-title">Démonstration type (très fréquente au concours)</span>
« Montrer que la somme de trois entiers consécutifs est un multiple de 3. »<br>
Soit n un entier. Les trois entiers consécutifs sont n, n + 1, n + 2. Leur somme : n + (n + 1) + (n + 2) = 3n + 3 = <b>3(n + 1)</b>. C’est un multiple de 3, quel que soit n. ∎</div>
<p>Conventions : 3 × x s’écrit 3x ; x × x = x² ; 1x = x. ⚠ 3x ≠ x³ et x + x = 2x (pas x²).</p>

<h2>2. Réduire, développer, factoriser</h2>
<ul><li><b>Réduire</b> : 3x + 5 − x + 2 = 2x + 7.</li>
<li><b>Développer</b> (simple distributivité) : <span class="formula">k(a + b) = ka + kb</span>. 4(2x − 3) = 8x − 12.</li>
<li><b>Double distributivité</b> : <span class="formula">(a + b)(c + d) = ac + ad + bc + bd</span>. (x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10.</li>
<li><b>Factoriser</b> = l’inverse : on cherche le facteur commun. 6x + 9 = 3(2x + 3) ; x² − 5x = x(x − 5).</li></ul>
<div class="box def"><span class="box-title">Identités remarquables</span>
<span class="formula">(a + b)² = a² + 2ab + b²</span><br>
<span class="formula">(a − b)² = a² − 2ab + b²</span><br>
<span class="formula">(a + b)(a − b) = a² − b²</span><br>
Application au calcul mental : 101² = (100 + 1)² = 10 000 + 200 + 1 = 10 201 ; 49 × 51 = (50 − 1)(50 + 1) = 2 500 − 1 = 2 499.</div>
<div class="box warn"><span class="box-title">Erreur n°1</span>(a + b)² ≠ a² + b². Exemple : (3 + 4)² = 49 alors que 3² + 4² = 25.</div>

<h2>3. Résoudre une équation</h2>
<p>Résoudre une équation, c’est trouver la (les) valeur(s) de l’inconnue qui rendent l’égalité vraie. On peut <b>ajouter/soustraire</b> le même nombre aux deux membres, et <b>multiplier/diviser</b> les deux membres par un même nombre non nul.</p>
<div class="box ex"><span class="box-title">Exemple</span>5x − 7 = 2x + 8<br>5x − 2x = 8 + 7 (on regroupe les x d’un côté, les nombres de l’autre)<br>3x = 15<br>x = 5. <b>Vérification</b> : 5 × 5 − 7 = 18 et 2 × 5 + 8 = 18 ✔</div>
<p><b>Équation produit nul</b> : si A × B = 0 alors A = 0 ou B = 0. (x − 3)(2x + 4) = 0 → x = 3 ou x = −2.</p>
<div class="box ex"><span class="box-title">Mettre en équation : méthode en 4 étapes</span>
« Un père a 41 ans, son fils 9 ans. Dans combien d’années le père aura-t-il le triple de l’âge de son fils ? »<br>
1) <b>Choix de l’inconnue</b> : x = nombre d’années. 2) <b>Équation</b> : 41 + x = 3(9 + x). 3) <b>Résolution</b> : 41 + x = 27 + 3x → 14 = 2x → x = 7. 4) <b>Vérification et phrase</b> : dans 7 ans, le père aura 48 ans et le fils 16 ans ; 48 = 3 × 16 ✔.</div>

<h2>4. Les fonctions</h2>
<p>Une fonction f associe à chaque nombre x <b>un unique</b> nombre f(x), appelé <b>image</b> de x. Si f(x) = y, x est <b>un antécédent</b> de y.</p>
<ul><li><b>Fonction linéaire</b> : f(x) = ax. Représentation : droite passant par l’origine. C’est la <b>proportionnalité</b>.</li>
<li><b>Fonction affine</b> : f(x) = ax + b. Droite de coefficient directeur a (la pente) et d’ordonnée à l’origine b.</li></ul>
<p>Lire le coefficient a : quand x augmente de 1, f(x) augmente de a. Calcul : a = (f(x₂) − f(x₁)) / (x₂ − x₁).</p>
<div class="box ex"><span class="box-title">Exemple</span>Abonnement : 15 € par mois + 2 € par séance. Prix pour x séances : f(x) = 2x + 15 (affine). Image de 10 : f(10) = 35 €. Antécédent de 41 : 2x + 15 = 41 → x = 13 séances.</div>
`,
  videos: [
    { t: "Développer et réduire", ch: "Yvan Monka", q: "Yvan Monka développer réduire expression littérale" },
    { t: "Identités remarquables", ch: "Yvan Monka", q: "Yvan Monka identités remarquables" },
    { t: "Résoudre une équation du 1er degré", ch: "Yvan Monka", q: "Yvan Monka résoudre une équation premier degré" },
    { t: "Fonctions affines", ch: "Yvan Monka", q: "Yvan Monka fonction affine représentation graphique" }
  ],
  resume: "<ul><li>Une lettre = un nombre quelconque : sert à prouver.</li><li>(a+b)² = a²+2ab+b² ; (a+b)(a−b) = a²−b².</li><li>Équation : regrouper, isoler, vérifier, conclure par une phrase.</li><li>Linéaire f(x)=ax (proportionnalité) ; affine f(x)=ax+b.</li></ul>",
  exercises: [
    { q: "Réduis : 4x + 3 − 6x + 7", answers: ["-2x+10", "−2x+10", "10-2x", "10−2x"], numeric: false, expl: "4x − 6x = −2x ; 3 + 7 = 10." },
    { q: "Développe : 3(2x − 5)", answers: ["6x-15", "6x−15"], numeric: false, expl: "On distribue le 3 à chaque terme de la parenthèse : 3 × 2x − 3 × 5 = <b>6x − 15</b>. Piège : oublier de multiplier le 5." },
    { q: "Développe : (x + 3)(x − 2)", answers: ["x²+x-6", "x^2+x-6", "x²+x−6", "x^2+x−6"], numeric: false, expl: "x² − 2x + 3x − 6 = x² + x − 6." },
    { q: "Factorise : 12x + 18", answers: ["6(2x+3)"], numeric: false, expl: "On cherche le plus grand facteur commun à 12 et 18 : c’est 6. 12x = 6 × 2x et 18 = 6 × 3, donc 12x + 18 = <b>6(2x + 3)</b>. Vérifie en redéveloppant." },
    { q: "Calcule mentalement 99² avec une identité remarquable.", answers: ["9801"], expl: "(100 − 1)² = 10 000 − 200 + 1 = 9 801." },
    { q: "Résous : 3x + 7 = 22. x = ?", answers: ["5"], expl: "On isole x : 3x = 22 − 7 = 15, puis x = 15 ÷ 3 = <b>5</b>. Vérification : 3 × 5 + 7 = 22 ✔." },
    { q: "Résous : 7x − 4 = 3x + 12. x = ?", answers: ["4"], expl: "4x = 16 → x = 4." },
    { q: "f(x) = −2x + 5. Calcule f(3).", answers: ["-1", "−1"], expl: "On remplace x par 3 : f(3) = −2 × 3 + 5 = −6 + 5 = <b>−1</b>." },
    { q: "f(x) = 4x − 3. Quel est l’antécédent de 17 ?", answers: ["5"], expl: "4x − 3 = 17 → 4x = 20 → x = 5." },
    { q: "Démontre que la somme de deux nombres impairs est toujours paire.", type: "open", model: "<p>Un nombre impair s’écrit 2n + 1 (n entier). Soient 2n + 1 et 2m + 1 deux impairs. Leur somme : 2n + 1 + 2m + 1 = 2n + 2m + 2 = 2(n + m + 1). C’est un multiple de 2 : la somme est paire. ∎ (Attention à prendre deux lettres différentes : avec 2n + 1 et 2n + 3 on ne traiterait que des impairs consécutifs.)</p>" }
  ],
  evaluation: [
    { q: "Développe et réduis : 2(x + 4) − 3(x − 1)", answers: ["-x+11", "−x+11", "11-x", "11−x"], numeric: false, expl: "2x + 8 − 3x + 3 = −x + 11." },
    { q: "Développe : (2x + 1)²", answers: ["4x²+4x+1", "4x^2+4x+1"], numeric: false, expl: "Identité remarquable (a + b)² = a² + 2ab + b² avec a = 2x et b = 1 : 4x² + 2 × 2x × 1 + 1 = <b>4x² + 4x + 1</b>. Piège : oublier le double produit et écrire 4x² + 1." },
    { q: "Factorise : x² − 25", answers: ["(x-5)(x+5)", "(x+5)(x-5)", "(x−5)(x+5)", "(x+5)(x−5)"], numeric: false, expl: "x² − 25 = x² − 5² : c’est l’identité a² − b² = (a − b)(a + b). Donc x² − 25 = <b>(x − 5)(x + 5)</b>." },
    { q: "Résous : 5(x − 2) = 2x + 11. x = ?", answers: ["7"], expl: "5x − 10 = 2x + 11 → 3x = 21 → x = 7." },
    { q: "Résous : x/4 + 3 = 8. x = ?", answers: ["20"], expl: "On enlève 3 des deux côtés : x/4 = 5. Puis on multiplie par 4 : x = <b>20</b>. Vérification : 20 ÷ 4 + 3 = 8 ✔." },
    { q: "Les solutions de (x + 1)(x − 6) = 0 sont :", choices: ["1 et −6", "−1 et 6", "−1 et −6", "1 et 6"], answer: 1, expl: "Un produit est nul si l’un des facteurs est nul : x + 1 = 0 donne x = −1, et x − 6 = 0 donne x = 6. Solutions : <b>−1 et 6</b>. Piège : se tromper de signe (1 et −6)." },
    { q: "Calcule 52 × 48 avec une identité remarquable.", answers: ["2496"], expl: "(50 + 2)(50 − 2) = 2 500 − 4 = 2 496." },
    { q: "Une fonction affine vérifie f(0) = 3 et f(2) = 7. Quel est son coefficient a ?", answers: ["2"], expl: "a = (7 − 3)/(2 − 0) = 2. Donc f(x) = 2x + 3." },
    { q: "La représentation graphique d’une fonction linéaire est :", choices: ["une droite passant par l’origine", "une droite quelconque", "une parabole", "une courbe passant par (0 ; 1)"], answer: 0, expl: "Une fonction linéaire s’écrit f(x) = ax : sa courbe est une <b>droite qui passe par l’origine</b>, car f(0) = 0. Une droite quelconque correspond à une fonction affine ax + b." },
    { q: "Trois cahiers et deux stylos coûtent 9,20 €. Un cahier coûte 1,40 € de plus qu’un stylo. Mets en équation et trouve le prix d’un stylo.", type: "open", model: "<p>Soit s le prix d’un stylo. Un cahier coûte s + 1,40. Équation : 3(s + 1,40) + 2s = 9,20 → 3s + 4,20 + 2s = 9,20 → 5s = 5 → s = 1. Un stylo coûte 1 €, un cahier 2,40 €. Vérification : 3 × 2,40 + 2 × 1 = 7,20 + 2 = 9,20 ✔.</p>" }
  ]
});

window.MATHS.chapters.push({
  id: 9,
  title: "Grandeurs et mesures",
  short: "Grandeurs & mesures",
  sub: "Longueurs, masses, contenances, durées, périmètres, aires, volumes",
  objectifs: [
    "Convertir sans erreur toutes les unités (longueurs, masses, contenances, aires, volumes, durées).",
    "Distinguer <b>périmètre</b> et <b>aire</b> (confusion fréquente chez les élèves).",
    "Connaître <b>par cœur</b> les formules de périmètres, d’aires et de volumes.",
    "Faire le lien entre volume et contenance : 1 dm³ = 1 L."
  ],
  lesson: `
<h2>1. Grandeur et mesure : la différence</h2>
<p>Une <b>grandeur</b> est une propriété qu’on peut comparer (la longueur d’une table). Une <b>mesure</b> est le nombre obtenu en choisissant une unité (1,20 m ou 120 cm). À l’école, on compare d’abord <b>sans mesurer</b> (superposer, reporter), puis avec une unité non conventionnelle (la main), puis avec les unités usuelles.</p>

<h2>2. Longueurs, masses, contenances</h2>
<table><tr><th>km</th><th>hm</th><th>dam</th><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr><tr><td>kg</td><td>hg</td><td>dag</td><td>g</td><td>dg</td><td>cg</td><td>mg</td></tr><tr><td>kL</td><td>hL</td><td>daL</td><td>L</td><td>dL</td><td>cL</td><td>mL</td></tr></table>
<p>Chaque colonne vaut <b>10 fois</b> celle de droite. Préfixes : kilo = 1 000, hecto = 100, déca = 10, déci = 1/10, centi = 1/100, milli = 1/1000.</p>
<p>Exemples : 3,5 km = 3 500 m ; 250 g = 0,25 kg ; 75 cL = 0,75 L. Aussi : 1 tonne (t) = 1 000 kg ; 1 quintal = 100 kg.</p>

<h2>3. Les durées : base 60 !</h2>
<p>1 h = 60 min ; 1 min = 60 s ; 1 h = 3 600 s ; 1 jour = 24 h.</p>
<div class="box warn"><span class="box-title">Le piège des durées</span>
<ul><li>1,5 h = 1 h 30 min (0,5 h = 30 min) ; 0,25 h = 15 min ; 0,1 h = 6 min.</li><li>2 h 45 min = 2,75 h (et non 2,45 h).</li><li>Calcul : 9 h 50 + 2 h 25 = 11 h 75 = 12 h 15.</li><li>Durée entre 8 h 40 et 11 h 15 : de 8 h 40 à 9 h = 20 min ; de 9 h à 11 h 15 = 2 h 15 ; total 2 h 35 min.</li></ul></div>

<h2>4. Périmètre ≠ aire</h2>
<p>Le <b>périmètre</b> est la <b>longueur du contour</b> (en m, cm…). L’<b>aire</b> est la <b>mesure de la surface</b> (en m², cm²…). Deux figures peuvent avoir la même aire et des périmètres différents (et inversement).</p>
<table><tr><th>Figure</th><th>Périmètre</th><th>Aire</th></tr>
<tr><td>Carré de côté c</td><td>4 × c</td><td>c × c = c²</td></tr>
<tr><td>Rectangle L × l</td><td>2 × (L + l)</td><td>L × l</td></tr>
<tr><td>Triangle (base b, hauteur h)</td><td>somme des 3 côtés</td><td>(b × h) ÷ 2</td></tr>
<tr><td>Parallélogramme</td><td>somme des côtés</td><td>base × hauteur</td></tr>
<tr><td>Losange (diagonales D, d)</td><td>4 × côté</td><td>(D × d) ÷ 2</td></tr>
<tr><td>Trapèze (bases B, b, hauteur h)</td><td>somme des côtés</td><td>(B + b) × h ÷ 2</td></tr>
<tr><td>Disque de rayon r</td><td>2 × π × r (= π × diamètre)</td><td>π × r²</td></tr></table>

<h2>5. Les unités d’aire : on multiplie par 100</h2>
<table><tr><th>km²</th><th>hm² (ha)</th><th>dam² (a)</th><th>m²</th><th>dm²</th><th>cm²</th><th>mm²</th></tr></table>
<p>Chaque unité vaut <b>100 fois</b> la suivante (car 1 m² = 10 dm × 10 dm = 100 dm²). Dans le tableau, on met <b>2 chiffres par colonne</b>.</p>
<p>Exemples : 3 m² = 300 dm² = 30 000 cm² ; 4,5 ha = 45 000 m² ; 1 a (are) = 100 m².</p>

<h2>6. Les volumes : on multiplie par 1 000</h2>
<p>1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³ (3 chiffres par colonne).</p>
<div class="box def"><span class="box-title">Lien volume / contenance (à savoir)</span><span class="formula">1 dm³ = 1 L</span> ; &nbsp; <span class="formula">1 cm³ = 1 mL</span> ; &nbsp; <span class="formula">1 m³ = 1 000 L</span></div>
<table><tr><th>Solide</th><th>Volume</th></tr>
<tr><td>Cube d’arête a</td><td>a³</td></tr>
<tr><td>Pavé droit</td><td>L × l × h</td></tr>
<tr><td>Prisme droit / cylindre</td><td>aire de la base × hauteur (cylindre : π r² h)</td></tr>
<tr><td>Pyramide / cône</td><td>(aire de la base × hauteur) ÷ 3</td></tr>
<tr><td>Boule de rayon r</td><td>(4/3) × π × r³</td></tr></table>

<h2>7. Agrandissement / réduction</h2>
<p>Si on multiplie les longueurs par k : les <b>aires</b> sont multipliées par <b>k²</b>, les <b>volumes</b> par <b>k³</b>. Doubler les dimensions d’un cube multiplie son volume par 8.</p>
`,
  videos: [
    { t: "Convertir des unités de longueur, masse, contenance", ch: "Yvan Monka", q: "Yvan Monka convertir unités longueur masse contenance" },
    { t: "Convertir des aires et des volumes", ch: "Yvan Monka", q: "Yvan Monka convertir unités d'aire de volume" },
    { t: "Calculer avec les durées", ch: "Les Bons Profs", q: "calculer des durées heures minutes conversion" },
    { t: "Formules d’aires et de volumes", ch: "Yvan Monka", q: "Yvan Monka calculer volume pyramide cône cylindre" }
  ],
  resume: "<ul><li>Longueurs ×10, aires ×100, volumes ×1 000 entre deux unités voisines.</li><li>1 dm³ = 1 L ; 1 m³ = 1 000 L.</li><li>Durées : base 60. 0,5 h = 30 min ; 0,25 h = 15 min.</li><li>Agrandissement k : aires × k², volumes × k³.</li></ul>",
  exercises: [
    { q: "Convertis 4,7 km en m.", answers: ["4700"], expl: "1 km = 1 000 m, donc 4,7 km = 4,7 × 1 000 = <b>4 700 m</b>." },
    { q: "Convertis 350 g en kg.", answers: ["0,35", "0.35"], expl: "1 kg = 1 000 g, donc on divise par 1 000 : 350 g = 350 ÷ 1 000 = <b>0,35 kg</b>." },
    { q: "Convertis 2,5 m² en cm².", answers: ["25000"], expl: "1 m² = 10 000 cm² → 25 000 cm²." },
    { q: "Convertis 1 200 cm³ en L.", answers: ["1,2", "1.2"], expl: "1 200 cm³ = 1,2 dm³ = 1,2 L." },
    { q: "Convertis 1,4 h en heures et minutes (format 1h24).", answers: ["1h24", "1 h 24", "1h24min", "1 h 24 min"], numeric: false, expl: "0,4 h = 0,4 × 60 = 24 min." },
    { q: "Aire d’un triangle de base 8 cm et de hauteur 5 cm (en cm²) ?", answers: ["20"], expl: "Aire d’un triangle = (base × hauteur) ÷ 2 = (8 × 5) ÷ 2 = 40 ÷ 2 = <b>20 cm²</b>. Piège : oublier de diviser par 2." },
    { q: "Aire d’un disque de rayon 3 cm, arrondie au cm² (π ≈ 3,14) ?", answers: ["28"], expl: "3,14 × 9 = 28,26 ≈ 28 cm²." },
    { q: "Volume d’un pavé de 5 cm × 4 cm × 3 cm (en cm³) ?", answers: ["60"], expl: "Volume d’un pavé = longueur × largeur × hauteur = 5 × 4 × 3 = <b>60 cm³</b>." },
    { q: "Un aquarium mesure 50 cm × 30 cm × 40 cm. Combien de litres contient-il ?", answers: ["60"], expl: "60 000 cm³ = 60 dm³ = 60 L." },
    { q: "Un film commence à 20 h 45 et dure 2 h 35. À quelle heure finit-il ? (format 23h20)", answers: ["23h20", "23 h 20", "23:20"], numeric: false, expl: "20 h 45 + 2 h = 22 h 45 ; + 35 min = 23 h 20." }
  ],
  evaluation: [
    { q: "Convertis 0,08 m en mm.", answers: ["80"], expl: "1 m = 1 000 mm, donc 0,08 m = 0,08 × 1 000 = <b>80 mm</b>." },
    { q: "Convertis 3 ha en m².", answers: ["30000"], expl: "1 ha = 10 000 m² (un carré de 100 m de côté). Donc 3 ha = 3 × 10 000 = <b>30 000 m²</b>." },
    { q: "Convertis 0,5 m³ en L.", answers: ["500"], expl: "1 m³ = 1 000 dm³ et 1 dm³ = 1 L, donc 1 m³ = 1 000 L. 0,5 m³ = <b>500 L</b>." },
    { q: "Combien de secondes dans 1 h 15 min ?", answers: ["4500"], expl: "1 h = 3 600 s et 15 min = 15 × 60 = 900 s. Total : 3 600 + 900 = <b>4 500 s</b>. Piège : écrire 1 h 15 = 1,15 h (c’est 1,25 h)." },
    { q: "Périmètre d’un rectangle de 12 cm sur 7,5 cm (en cm) ?", answers: ["39"], expl: "Périmètre d’un rectangle = 2 × (longueur + largeur) = 2 × (12 + 7,5) = 2 × 19,5 = <b>39 cm</b>." },
    { q: "Aire d’un trapèze de bases 10 et 6 cm, hauteur 4 cm (en cm²) ?", answers: ["32"], expl: "Aire d’un trapèze = (grande base + petite base) × hauteur ÷ 2 = (10 + 6) × 4 ÷ 2 = 64 ÷ 2 = <b>32 cm²</b>." },
    { q: "Volume d’un cône de rayon 3 cm et hauteur 10 cm, en fonction de π (format 30π) ?", answers: ["30π", "30pi"], numeric: false, expl: "(π × 9 × 10) ÷ 3 = 30π cm³." },
    { q: "On multiplie toutes les dimensions d’une boîte par 3. Son volume est multiplié par :", choices: ["3", "6", "9", "27"], answer: 3, expl: "Le volume dépend de 3 longueurs (longueur × largeur × hauteur), chacune multipliée par 3 : 3 × 3 × 3 = <b>27</b>. Piège : répondre 3 ; les aires, elles, seraient multipliées par 9." },
    { q: "Vrai ou faux : deux rectangles de même aire ont le même périmètre.", type: "vf", answer: 1, expl: "Faux : 4 × 9 et 6 × 6 ont la même aire (36) mais des périmètres de 26 et 24." },
    { q: "Durée entre 7 h 50 et 10 h 25 ? (format 2h35)", answers: ["2h35", "2 h 35", "2h35min"], numeric: false, expl: "De 7 h 50 à 8 h 00 : 10 min. De 8 h 00 à 10 h 00 : 2 h. De 10 h 00 à 10 h 25 : 25 min. Total : 2 h 35 min. Piège : soustraire comme des décimaux (10,25 − 7,50)." }
  ]
});

window.MATHS.chapters.push({
  id: 10,
  title: "Géométrie plane",
  short: "Géométrie plane",
  sub: "Droites, angles, triangles, quadrilatères, cercle, Pythagore, Thalès, trigonométrie",
  objectifs: [
    "Utiliser le vocabulaire précis (segment, droite, demi-droite, médiatrice, hauteur…).",
    "Connaître les propriétés des triangles et des quadrilatères particuliers pour <b>démontrer</b>.",
    "Utiliser le <b>théorème de Pythagore</b> et sa réciproque, le <b>théorème de Thalès</b> et sa réciproque.",
    "Calculer une longueur ou un angle avec la trigonométrie (cos, sin, tan) dans un triangle rectangle.",
    "Rédiger une démonstration : <b>données → propriété → conclusion</b>."
  ],
  lesson: `
<h2>1. Le vocabulaire de base</h2>
<ul><li><b>Droite (AB)</b> : illimitée des deux côtés. <b>Demi-droite [AB)</b> : origine A, illimitée côté B. <b>Segment [AB]</b> : limité par A et B ; sa longueur se note AB.</li>
<li>Droites <b>perpendiculaires</b> (angle droit) ; droites <b>parallèles</b> (ne se coupent jamais).</li>
<li><b>Médiatrice</b> d’un segment : droite perpendiculaire au segment en son milieu. Tout point de la médiatrice est à égale distance des extrémités.</li>
<li>Angles : <b>aigu</b> (&lt; 90°), <b>droit</b> (90°), <b>obtus</b> (entre 90° et 180°), <b>plat</b> (180°).</li></ul>

<h2>2. Les triangles</h2>
<div class="box def"><span class="box-title">Propriété fondamentale</span>La <b>somme des angles</b> d’un triangle vaut <b>180°</b>.</div>
<ul><li><b>Isocèle</b> : 2 côtés égaux, 2 angles à la base égaux.</li><li><b>Équilatéral</b> : 3 côtés égaux, 3 angles de 60°.</li><li><b>Rectangle</b> : 1 angle droit ; le plus grand côté est l’<b>hypoténuse</b>.</li></ul>
<p><b>Inégalité triangulaire</b> : chaque côté est plus petit que la somme des deux autres. On ne peut pas construire un triangle de côtés 3, 4 et 8 (3 + 4 &lt; 8).</p>
<p><b>Droites remarquables</b> : hauteurs (perpendiculaire à un côté passant par le sommet opposé), médianes (sommet → milieu du côté opposé), médiatrices (leur point de concours est le centre du cercle circonscrit), bissectrices.</p>

<h2>3. Les quadrilatères (hiérarchie à connaître)</h2>
<table><tr><th>Quadrilatère</th><th>Définition / propriétés</th></tr>
<tr><td>Parallélogramme</td><td>côtés opposés parallèles (et égaux) ; diagonales qui se coupent en leur milieu</td></tr>
<tr><td>Rectangle</td><td>parallélogramme avec un angle droit ; diagonales de même longueur</td></tr>
<tr><td>Losange</td><td>parallélogramme avec 4 côtés égaux ; diagonales perpendiculaires</td></tr>
<tr><td>Carré</td><td>à la fois rectangle ET losange</td></tr>
<tr><td>Trapèze</td><td>deux côtés parallèles</td></tr></table>
<p>⚠ Un carré <b>est</b> un rectangle particulier, et un losange particulier. Les élèves pensent souvent l’inverse.</p>

<h2>4. Le cercle</h2>
<p>Ensemble des points à une distance r (le <b>rayon</b>) d’un point O (le <b>centre</b>). Diamètre = 2r. Une <b>corde</b> relie deux points du cercle. Un triangle inscrit dans un cercle dont un côté est un diamètre est <b>rectangle</b>.</p>

<h2>5. Le théorème de Pythagore</h2>
<div class="box def"><span class="box-title">Théorème</span>Si le triangle ABC est rectangle en A, alors <span class="formula">BC² = AB² + AC²</span> (le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés).</div>
<div class="box ex"><span class="box-title">Calculer l’hypoténuse</span>ABC rectangle en A, AB = 6 cm, AC = 8 cm. D’après le théorème de Pythagore : BC² = 6² + 8² = 36 + 64 = 100, donc BC = √100 = <b>10 cm</b>.</div>
<div class="box ex"><span class="box-title">Calculer un côté de l’angle droit</span>EFG rectangle en E, FG = 13, EF = 5. FG² = EF² + EG² → 169 = 25 + EG² → EG² = 144 → EG = 12.</div>
<p><b>Réciproque</b> (pour prouver qu’un triangle est rectangle) : si BC² = AB² + AC², alors ABC est rectangle en A. Ex. : 5, 12, 13 : 13² = 169 = 25 + 144 ✔ → rectangle. Si l’égalité est fausse, le triangle n’est <b>pas</b> rectangle.</p>

<h2>6. Le théorème de Thalès</h2>
<div class="box def"><span class="box-title">Théorème</span>Si les points A, M, B et A, N, C sont alignés (dans cet ordre) et si (MN) // (BC), alors <span class="formula">AM/AB = AN/AC = MN/BC</span>.</div>
<div class="box ex"><span class="box-title">Exemple</span>AM = 3, AB = 5, AC = 7,5, (MN)//(BC). AN = ? → 3/5 = AN/7,5 → AN = 7,5 × 3 ÷ 5 = 4,5.</div>
<p>C’est une situation de <b>proportionnalité</b> : le petit triangle AMN est une réduction du grand triangle ABC. <b>Réciproque</b> : si AM/AB = AN/AC (et les points alignés dans le même ordre), alors (MN) // (BC).</p>

<h2>7. La trigonométrie (triangle rectangle)</h2>
<div class="box def"><span class="box-title">« SOH CAH TOA »</span>Pour un angle aigu x d’un triangle rectangle :<br>
<span class="formula">sin x = Opposé / Hypoténuse</span> ; <span class="formula">cos x = Adjacent / Hypoténuse</span> ; <span class="formula">tan x = Opposé / Adjacent</span></div>
<p>Exemple : rectangle en A, angle B = 30°, hypoténuse BC = 10. AC (côté opposé à B) = 10 × sin 30° = 10 × 0,5 = 5.</p>

<h2>8. Rédiger une démonstration</h2>
<p>Toujours 3 étapes : <b>On sait que</b> (données de l’énoncé) / <b>Or</b> (la propriété utilisée, énoncée en entier) / <b>Donc</b> (la conclusion).</p>
<p>Exemple : <i>On sait que</i> ABCD est un parallélogramme dont les diagonales ont la même longueur. <i>Or</i> si un parallélogramme a des diagonales de même longueur, alors c’est un rectangle. <i>Donc</i> ABCD est un rectangle.</p>
`,
  videos: [
    { t: "Théorème de Pythagore", ch: "Yvan Monka", q: "Yvan Monka théorème de Pythagore calculer une longueur" },
    { t: "Réciproque de Pythagore", ch: "Yvan Monka", q: "Yvan Monka réciproque théorème de Pythagore" },
    { t: "Théorème de Thalès", ch: "Yvan Monka", q: "Yvan Monka théorème de Thalès calculer une longueur" },
    { t: "Trigonométrie : SOH CAH TOA", ch: "Yvan Monka", q: "Yvan Monka trigonométrie cosinus sinus tangente" },
    { t: "Propriétés des quadrilatères", ch: "Les Bons Profs", q: "les bons profs quadrilatères particuliers propriétés" }
  ],
  resume: "<ul><li>Somme des angles d’un triangle = 180°.</li><li>Pythagore : rectangle ⇔ hypoténuse² = somme des carrés des 2 autres côtés.</li><li>Thalès : parallèles ⇒ rapports égaux (proportionnalité).</li><li>SOH CAH TOA.</li><li>Démonstration : On sait que / Or / Donc.</li></ul>",
  exercises: [
    { q: "Dans un triangle, deux angles mesurent 47° et 68°. Mesure du troisième angle (en °) ?", answers: ["65"], expl: "La somme des angles d’un triangle vaut <b>180°</b>. 47 + 68 = 115, donc le troisième angle mesure 180 − 115 = <b>65°</b>." },
    { q: "ABC est rectangle en A avec AB = 9 et AC = 12. Calcule BC.", answers: ["15"], expl: "81 + 144 = 225 → BC = 15." },
    { q: "DEF est rectangle en D avec EF = 10 et DE = 6. Calcule DF.", answers: ["8"], expl: "100 − 36 = 64 → 8." },
    { q: "Un triangle de côtés 7, 24 et 25 est-il rectangle ?", choices: ["Oui", "Non"], answer: 0, expl: "25² = 625 ; 7² + 24² = 49 + 576 = 625 ✔." },
    { q: "Un triangle de côtés 6, 7 et 9 est-il rectangle ?", choices: ["Oui", "Non"], answer: 1, expl: "81 ≠ 36 + 49 = 85." },
    { q: "Thalès : AM = 4, AB = 10, BC = 15, (MN) // (BC). Calcule MN.", answers: ["6"], expl: "4/10 = MN/15 → MN = 6." },
    { q: "Peut-on construire un triangle de côtés 4 cm, 5 cm et 10 cm ?", choices: ["Oui", "Non"], answer: 1, expl: "4 + 5 = 9 &lt; 10 : inégalité triangulaire non respectée." },
    { q: "Un quadrilatère dont les diagonales se coupent en leur milieu et sont perpendiculaires est forcément un :", choices: ["rectangle", "losange", "trapèze", "carré"], answer: 1, expl: "Diagonales qui se coupent en leur milieu → parallélogramme ; si en plus elles sont perpendiculaires → <b>losange</b>. Ce n’est pas forcément un carré : il faudrait aussi des diagonales de même longueur." },
    { q: "Une échelle de 5 m est posée contre un mur vertical. Son pied est à 1,4 m du mur. À quelle hauteur touche-t-elle le mur ? Rédige avec Pythagore.", type: "open", model: "<p>Le mur est perpendiculaire au sol : le triangle formé est rectangle au pied du mur, l’échelle est l’hypoténuse. D’après le théorème de Pythagore : 5² = 1,4² + h² → 25 = 1,96 + h² → h² = 23,04 → h = √23,04 = <b>4,8 m</b>.</p>" }
  ],
  evaluation: [
    { q: "Un triangle isocèle a un angle au sommet de 40°. Mesure de chaque angle à la base (en °) ?", answers: ["70"], expl: "(180 − 40) ÷ 2 = 70°." },
    { q: "Rectangle en A, AB = 5, AC = 12. BC = ?", answers: ["13"], expl: "Le triangle est rectangle en A, donc [BC] est l’hypoténuse. Pythagore : BC² = AB² + AC² = 25 + 144 = 169, donc BC = √169 = <b>13</b>." },
    { q: "Rectangle en A, BC = 17, AB = 8. AC = ?", answers: ["15"], expl: "289 − 64 = 225." },
    { q: "Quel théorème permet de prouver que deux droites sont parallèles ?", choices: ["Pythagore", "Réciproque de Pythagore", "Réciproque de Thalès", "Somme des angles"], answer: 2, expl: "La <b>réciproque de Thalès</b> sert à prouver que deux droites sont parallèles (si les rapports sont égaux et les points alignés dans le même ordre). La réciproque de Pythagore, elle, prouve qu’un triangle est rectangle." },
    { q: "Thalès : AM = 3, AB = 9, AN = 2. AC = ?", answers: ["6"], expl: "Avec (MN) parallèle à (BC), Thalès donne AM/AB = AN/AC, soit 3/9 = 2/AC. Le rapport est 1/3, donc AC = 2 × 3 = <b>6</b>." },
    { q: "Dans un triangle rectangle, le cosinus d’un angle aigu est :", choices: ["opposé / hypoténuse", "adjacent / hypoténuse", "opposé / adjacent", "hypoténuse / adjacent"], answer: 1, expl: "Retiens <b>SOH CAH TOA</b> : CAH = Cosinus = Adjacent / Hypoténuse. Le sinus, c’est opposé / hypoténuse, et la tangente opposé / adjacent." },
    { q: "Vrai ou faux : un carré est un losange.", type: "vf", answer: 0, expl: "<b>Vrai</b> : un losange est un quadrilatère qui a 4 côtés de même longueur. Le carré a bien 4 côtés égaux, c’est donc un losange particulier (avec en plus des angles droits)." },
    { q: "Vrai ou faux : un rectangle est un carré.", type: "vf", answer: 1, expl: "<b>Faux</b> : un rectangle a 4 angles droits, mais ses côtés ne sont pas forcément égaux. C’est l’inverse qui est vrai : un carré est un rectangle particulier." },
    { q: "Un rectangle a pour côtés 6 cm et 8 cm. Longueur de sa diagonale (cm) ?", answers: ["10"], expl: "La diagonale coupe le rectangle en deux triangles rectangles. Pythagore : d² = 6² + 8² = 36 + 64 = 100, donc d = √100 = <b>10 cm</b>." },
    { q: "La diagonale d’un carré de côté 1 mesure :", choices: ["1", "2", "√2", "1,5"], answer: 2, expl: "1² + 1² = 2." }
  ]
});

window.MATHS.chapters.push({
  id: 11,
  title: "Transformations et géométrie dans l’espace",
  short: "Transformations & espace",
  sub: "Symétries, translation, rotation, homothétie, solides, patrons",
  objectifs: [
    "Connaître les transformations du plan et leurs propriétés de conservation.",
    "Identifier les axes de symétrie et centres de symétrie de figures usuelles.",
    "Décrire les solides (faces, arêtes, sommets) et reconnaître leurs patrons.",
    "Se repérer dans l’espace (pavé, sphère terrestre : latitude, longitude)."
  ],
  lesson: `
<h2>1. Les transformations du plan</h2>
<ul>
<li><b>Symétrie axiale</b> (par rapport à une droite d) : effet « pliage » ou miroir. Le point M et son image M’ sont tels que d est la <b>médiatrice</b> de [MM’].</li>
<li><b>Symétrie centrale</b> (par rapport à un point O) : demi-tour autour de O. O est le <b>milieu</b> de [MM’].</li>
<li><b>Translation</b> : « glissement » dans une direction, un sens et une longueur donnés.</li>
<li><b>Rotation</b> de centre O et d’angle α : on tourne autour de O.</li>
<li><b>Homothétie</b> de centre O et de rapport k : agrandissement (k &gt; 1) ou réduction (0 &lt; k &lt; 1).</li>
</ul>
<div class="box def"><span class="box-title">Ce qui est conservé</span>Les symétries, translations et rotations conservent les <b>longueurs</b>, les <b>angles</b>, les <b>aires</b>, l’alignement et le parallélisme (ce sont des « isométries »). L’homothétie conserve les angles et le parallélisme, mais multiplie les longueurs par |k| et les aires par k².</div>

<h2>2. Axes et centres de symétrie</h2>
<table><tr><th>Figure</th><th>Axes de symétrie</th><th>Centre de symétrie</th></tr>
<tr><td>Carré</td><td>4 (2 diagonales + 2 médiatrices des côtés)</td><td>oui</td></tr>
<tr><td>Rectangle (non carré)</td><td>2 (médiatrices des côtés)</td><td>oui</td></tr>
<tr><td>Losange (non carré)</td><td>2 (les diagonales)</td><td>oui</td></tr>
<tr><td>Parallélogramme quelconque</td><td>0</td><td>oui</td></tr>
<tr><td>Triangle isocèle</td><td>1</td><td>non</td></tr>
<tr><td>Triangle équilatéral</td><td>3</td><td>non</td></tr>
<tr><td>Cercle</td><td>une infinité (tous les diamètres)</td><td>oui (son centre)</td></tr></table>
<p>⚠ Les diagonales d’un rectangle ne sont <b>pas</b> des axes de symétrie (erreur très fréquente : plie un rectangle de papier suivant sa diagonale pour t’en convaincre).</p>

<h2>3. Les solides</h2>
<table><tr><th>Solide</th><th>Faces</th><th>Arêtes</th><th>Sommets</th></tr>
<tr><td>Cube</td><td>6 carrés</td><td>12</td><td>8</td></tr>
<tr><td>Pavé droit</td><td>6 rectangles</td><td>12</td><td>8</td></tr>
<tr><td>Prisme à base triangulaire</td><td>5 (2 triangles + 3 rectangles)</td><td>9</td><td>6</td></tr>
<tr><td>Pyramide à base carrée</td><td>5 (1 carré + 4 triangles)</td><td>8</td><td>5</td></tr>
<tr><td>Tétraèdre</td><td>4 triangles</td><td>6</td><td>4</td></tr></table>
<p><b>Relation d’Euler</b> pour les polyèdres convexes : <span class="formula">F + S − A = 2</span>. Cube : 6 + 8 − 12 = 2 ✔.</p>
<p>Les <b>solides de révolution</b> (cylindre, cône, boule) ont des surfaces courbes : ce ne sont pas des polyèdres.</p>

<h2>4. Les patrons</h2>
<p>Un <b>patron</b> est une figure plane qu’on peut plier pour obtenir le solide, sans superposition. Le cube possède <b>11 patrons</b> différents. Pour vérifier un patron de cube : il faut 6 carrés, et aucune face ne doit se superposer au pliage (pas 5 carrés en ligne, pas un « bloc » de 2 × 2).</p>
<p>Patron d’un cylindre : 2 disques + 1 rectangle dont une dimension est le <b>périmètre</b> du disque (2πr).</p>

<h2>5. Se repérer</h2>
<p>Dans un pavé, on repère un point par 3 coordonnées (abscisse, ordonnée, altitude). Sur la Terre : <b>latitude</b> (par rapport à l’équateur, de 0° à 90° Nord ou Sud) et <b>longitude</b> (par rapport au méridien de Greenwich, de 0° à 180° Est ou Ouest).</p>
`,
  videos: [
    { t: "Symétrie axiale et centrale", ch: "Yvan Monka", q: "Yvan Monka symétrie axiale symétrie centrale construire" },
    { t: "Translations et rotations", ch: "Yvan Monka", q: "Yvan Monka translation rotation transformation" },
    { t: "Homothétie", ch: "Yvan Monka", q: "Yvan Monka homothétie 3e" },
    { t: "Les 11 patrons du cube", ch: "Lumni / Mathador", q: "les 11 patrons du cube" }
  ],
  resume: "<ul><li>Symétries, translations, rotations : conservent longueurs, angles, aires.</li><li>Homothétie de rapport k : longueurs × k, aires × k².</li><li>Euler : F + S − A = 2.</li><li>Le cube a 11 patrons.</li></ul>",
  exercises: [
    { q: "Combien d’axes de symétrie possède un carré ?", answers: ["4"], expl: "Un carré a <b>4</b> axes de symétrie : les 2 médiatrices de ses côtés et ses 2 diagonales." },
    { q: "Combien d’axes de symétrie possède un rectangle non carré ?", answers: ["2"], expl: "Un rectangle non carré a <b>2</b> axes : les médiatrices de ses côtés. Piège : ses diagonales ne sont <b>pas</b> des axes de symétrie (fais le test du pliage !)." },
    { q: "Lequel n’a pas de centre de symétrie ?", choices: ["Parallélogramme", "Losange", "Triangle équilatéral", "Cercle"], answer: 2, expl: "Le parallélogramme, le losange et le cercle ont un centre de symétrie (le point d’intersection des diagonales, ou le centre). Le <b>triangle équilatéral</b> n’en a pas : un demi-tour autour de son centre ne le superpose pas à lui-même." },
    { q: "Combien d’arêtes possède une pyramide à base hexagonale ?", answers: ["12"], expl: "6 arêtes à la base + 6 arêtes latérales." },
    { q: "Un polyèdre a 8 faces et 12 sommets. Combien d’arêtes (Euler) ?", answers: ["18"], expl: "F + S − A = 2 → 8 + 12 − A = 2 → A = 18." },
    { q: "Une homothétie de rapport 3 multiplie les aires par :", answers: ["9"], expl: "Une homothétie de rapport k multiplie les longueurs par k et les aires par <b>k²</b>. Ici 3² = <b>9</b>. Piège : répondre 3." },
    { q: "Dans une symétrie centrale de centre O, O est… de [MM’] :", choices: ["la médiatrice", "le milieu", "une extrémité"], answer: 1, expl: "Dans la symétrie de centre O, M’ est le symétrique de M quand O est le <b>milieu</b> de [MM’]. La médiatrice, c’est pour la symétrie axiale." },
    { q: "Combien de patrons différents possède le cube ?", answers: ["11"], expl: "Le cube possède <b>11</b> patrons différents (sans compter ceux qu’on obtient par rotation ou retournement). Un classique du CRPE à connaître !" }
  ],
  evaluation: [
    { q: "Combien d’axes de symétrie a un triangle équilatéral ?", answers: ["3"], expl: "Un triangle équilatéral a <b>3</b> axes de symétrie : chacun passe par un sommet et le milieu du côté opposé (ce sont ses médiatrices)." },
    { q: "Vrai ou faux : les diagonales d’un rectangle sont des axes de symétrie.", type: "vf", answer: 1, expl: "<b>Faux</b> pour un rectangle non carré : si tu le plies selon une diagonale, les deux moitiés ne se superposent pas. Ses axes sont les médiatrices de ses côtés. (Seul le carré a ses diagonales pour axes.)" },
    { q: "Quelle transformation ne conserve pas les longueurs ?", choices: ["Translation", "Rotation", "Homothétie de rapport 2", "Symétrie axiale"], answer: 2, expl: "Translation, rotation et symétrie axiale conservent les longueurs (ce sont des « isométries »). L’<b>homothétie de rapport 2</b> multiplie les longueurs par 2 : c’est un agrandissement." },
    { q: "Nombre de sommets d’un prisme à base pentagonale ?", answers: ["10"], expl: "Un prisme à base pentagonale a 2 bases de 5 sommets chacune : 2 × 5 = <b>10</b> sommets." },
    { q: "Nombre de faces d’un tétraèdre ?", answers: ["4"], expl: "Un tétraèdre est une pyramide à base triangulaire : 1 base + 3 faces latérales = <b>4</b> faces triangulaires." },
    { q: "La longueur du rectangle dans le patron d’un cylindre de rayon 2 cm est (en fonction de π) :", answers: ["4π", "4pi"], numeric: false, expl: "Quand on déroule le cylindre, la longueur du rectangle est le <b>périmètre du cercle de base</b> : 2 × π × r = 2 × π × 2 = <b>4π cm</b>." },
    { q: "Une réduction de rapport 1/2 multiplie les volumes par :", choices: ["1/2", "1/4", "1/8", "2"], answer: 2, expl: "Une réduction de rapport k multiplie les volumes par k³ : (1/2)³ = 1/2 × 1/2 × 1/2 = <b>1/8</b>. Piège : 1/4, c’est pour les aires." },
    { q: "La latitude se mesure par rapport à :", choices: ["l’équateur", "le méridien de Greenwich", "le pôle Nord"], answer: 0, expl: "La latitude mesure la position nord ou sud par rapport à l’<b>équateur</b> (de 0° à 90°). C’est la longitude qui se mesure par rapport au méridien de Greenwich." }
  ]
});

window.MATHS.chapters.push({
  id: 12,
  title: "Statistiques et probabilités",
  short: "Stats & probas",
  sub: "Moyenne, médiane, étendue, fréquences, graphiques, probabilités",
  objectifs: [
    "Calculer une moyenne (simple et pondérée), une médiane, une étendue, des fréquences.",
    "Lire et construire des diagrammes (bâtons, circulaire, histogramme) et repérer un graphique trompeur.",
    "Calculer des probabilités simples et des probabilités d’expériences à deux épreuves (arbre, tableau)."
  ],
  lesson: `
<h2>1. Le vocabulaire</h2>
<p>On étudie une <b>population</b> (ex. : les élèves d’une classe) selon un <b>caractère</b> (ex. : la pointure). L’<b>effectif</b> d’une valeur est le nombre de fois qu’elle apparaît. La <b>fréquence</b> = effectif ÷ effectif total (souvent en %).</p>

<h2>2. Moyenne, médiane, étendue</h2>
<p>Notes : 8 ; 12 ; 15 ; 10 ; 15 ; 9 ; 14.</p>
<ul>
<li><b>Moyenne</b> = somme ÷ effectif = 83 ÷ 7 ≈ 11,9.</li>
<li><b>Médiane</b> : on <b>range</b> les valeurs : 8 ; 9 ; 10 ; <b>12</b> ; 14 ; 15 ; 15. La médiane partage la série en deux moitiés : ici la 4ᵉ valeur, <b>12</b>. Si l’effectif est pair, on prend la moyenne des deux valeurs centrales.</li>
<li><b>Étendue</b> = plus grande − plus petite valeur = 15 − 8 = 7 (mesure la dispersion).</li>
</ul>
<div class="box def"><span class="box-title">Moyenne pondérée</span>Valeurs x avec effectifs (ou coefficients) n : moyenne = (n₁x₁ + n₂x₂ + …) ÷ (n₁ + n₂ + …).<br>
Ex. : 12 (coef 2) et 8 (coef 3) → (24 + 24) ÷ 5 = 9,6.</div>
<div class="box warn"><span class="box-title">Moyenne ≠ médiane</span>La moyenne est sensible aux valeurs extrêmes, pas la médiane. Salaires : 1 500, 1 600, 1 700, 10 000 → moyenne 3 700 €, médiane 1 650 €.</div>

<h2>3. Les graphiques</h2>
<ul><li><b>Diagramme en bâtons</b> : caractère discret (nombre de frères et sœurs).</li><li><b>Diagramme circulaire</b> : répartition en parts. Angle d’un secteur = fréquence × 360°.</li><li><b>Histogramme</b> : données regroupées en classes (tailles 120–130 cm…).</li><li><b>Courbe</b> : évolution dans le temps.</li></ul>
<p>Un graphique peut être <b>trompeur</b> si l’axe vertical ne commence pas à 0 (les écarts paraissent énormes).</p>

<h2>4. Les probabilités</h2>
<p>Une <b>expérience aléatoire</b> a plusieurs <b>issues</b> possibles et on ne peut pas prévoir laquelle se produira. Un <b>événement</b> est un ensemble d’issues.</p>
<div class="box def"><span class="box-title">Équiprobabilité</span>Si toutes les issues ont la même chance : <span class="formula">P(A) = nombre d’issues favorables ÷ nombre d’issues possibles</span>.<br>Une probabilité est toujours comprise entre <b>0</b> (impossible) et <b>1</b> (certain). P(non A) = 1 − P(A).</div>
<p>Exemple : dé à 6 faces. P(obtenir un nombre pair) = 3/6 = 1/2. P(obtenir 7) = 0.</p>
<div class="box ex"><span class="box-title">Deux épreuves : on lance deux pièces</span>Issues : PP, PF, FP, FF (4 issues équiprobables). P(obtenir exactement un pile) = 2/4 = 1/2. Un <b>arbre</b> ou un <b>tableau à double entrée</b> permet de ne rien oublier.<br>
Avec deux dés : 36 issues. P(somme = 7) = 6/36 = 1/6 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1).</div>
<p>Sur un arbre, on <b>multiplie</b> les probabilités le long d’un chemin. Tirage avec remise de 2 boules dans une urne de 3 rouges et 2 vertes : P(deux rouges) = 3/5 × 3/5 = 9/25.</p>
<p><b>Loi des grands nombres</b> : quand on répète une expérience un grand nombre de fois, la fréquence observée se rapproche de la probabilité.</p>
`,
  videos: [
    { t: "Moyenne, médiane, étendue", ch: "Yvan Monka", q: "Yvan Monka médiane étendue moyenne statistiques" },
    { t: "Moyenne pondérée", ch: "Yvan Monka", q: "Yvan Monka moyenne pondérée" },
    { t: "Probabilités : vocabulaire et calculs", ch: "Yvan Monka", q: "Yvan Monka probabilités 3e calculer" },
    { t: "Arbre de probabilités", ch: "Yvan Monka", q: "Yvan Monka arbre de probabilité deux épreuves" }
  ],
  resume: "<ul><li>Médiane : on RANGE d’abord.</li><li>Moyenne pondérée : Σ(coef × valeur) ÷ Σcoef.</li><li>P = favorables / possibles ; 0 ≤ P ≤ 1 ; P(non A) = 1 − P(A).</li><li>Arbre : on multiplie le long d’un chemin.</li></ul>",
  exercises: [
    { q: "Moyenne de 12, 15, 9, 14 ?", answers: ["12,5", "12.5"], expl: "Moyenne = somme des valeurs ÷ nombre de valeurs : (12 + 15 + 9 + 14) ÷ 4 = 50 ÷ 4 = <b>12,5</b>." },
    { q: "Médiane de 3 ; 7 ; 1 ; 9 ; 5 ?", answers: ["5"], expl: "Rangée : 1 ; 3 ; 5 ; 7 ; 9 → valeur centrale 5." },
    { q: "Médiane de 4 ; 8 ; 10 ; 2 ; 6 ; 12 ?", answers: ["7"], expl: "Rangée : 2 ; 4 ; 6 ; 8 ; 10 ; 12 → (6 + 8) ÷ 2 = 7." },
    { q: "Étendue de 14 ; 3 ; 22 ; 9 ?", answers: ["19"], expl: "Étendue = plus grande valeur − plus petite valeur = 22 − 3 = <b>19</b>." },
    { q: "Note 14 coef 3 et note 9 coef 2. Moyenne ?", answers: ["12"], expl: "(42 + 18) ÷ 5 = 12." },
    { q: "Dans un diagramme circulaire, quel angle pour une fréquence de 25 % (en °) ?", answers: ["90"], expl: "Le disque entier fait 360°, qui correspond à 100 %. 25 %, c’est un quart : 360 ÷ 4 = <b>90°</b>." },
    { q: "On tire une carte dans un jeu de 32 cartes. Probabilité d’obtenir un cœur ?", answers: ["1/4", "0,25", "0.25"], expl: "8 cœurs sur 32 → 8/32 = 1/4." },
    { q: "On lance deux dés. Probabilité que la somme fasse 12 ?", answers: ["1/36"], numeric: false, expl: "Une seule issue (6 ; 6) sur 36." },
    { q: "La probabilité qu’il pleuve demain est 0,3. Probabilité qu’il ne pleuve pas ?", answers: ["0,7", "0.7"], expl: "Il pleut ou il ne pleut pas : ce sont des événements contraires, leurs probabilités font 1. Donc 1 − 0,3 = <b>0,7</b>." }
  ],
  evaluation: [
    { q: "Moyenne de 7, 11, 13, 9, 10 ?", answers: ["10"], expl: "(7 + 11 + 13 + 9 + 10) ÷ 5 = 50 ÷ 5 = <b>10</b>." },
    { q: "Médiane de 15 ; 2 ; 8 ; 11 ; 4 ; 20 ; 9 ?", answers: ["9"], expl: "Rangée : 2, 4, 8, 9, 11, 15, 20." },
    { q: "Dans une classe : 10 élèves ont 10, 15 élèves ont 12. Moyenne de la classe ?", answers: ["11,2", "11.2"], expl: "(100 + 180) ÷ 25 = 11,2." },
    { q: "Fréquence (en %) d’une valeur d’effectif 6 dans une série de 24 valeurs ?", answers: ["25", "25 %", "25%"], expl: "Fréquence = effectif de la valeur ÷ effectif total = 6 ÷ 24 = 0,25, soit <b>25 %</b>." },
    { q: "Une urne contient 4 boules rouges et 6 bleues. P(rouge) ?", answers: ["0,4", "0.4", "2/5", "4/10"], expl: "Il y a 4 + 6 = 10 boules en tout, dont 4 rouges : P(rouge) = 4/10 = <b>0,4</b> (ou 2/5). Piège : diviser par 6 (le nombre de bleues)." },
    { q: "On lance deux fois une pièce. P(obtenir deux faces) ?", answers: ["1/4", "0,25", "0.25"], expl: "Il y a 4 issues équiprobables : PP, PF, FP, FF. Une seule donne deux faces : P = <b>1/4</b>. Avec un arbre : 1/2 × 1/2 = 1/4." },
    { q: "Avec deux dés, la somme la plus probable est :", choices: ["6", "7", "8", "12"], answer: 1, expl: "Sur les 36 issues possibles, la somme 7 apparaît 6 fois (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) : c’est le plus grand nombre de façons. Donc <b>7</b> est la somme la plus probable." },
    { q: "Vrai ou faux : une probabilité peut valoir 1,2.", type: "vf", answer: 1, expl: "<b>Faux</b> : une probabilité est toujours comprise entre 0 (impossible) et 1 (certain). 1,2 est impossible." },
    { q: "Salaires (€) : 1 400 ; 1 500 ; 1 600 ; 9 500. Quel indicateur représente le mieux le salaire « typique » ?", choices: ["La moyenne", "La médiane", "L’étendue"], answer: 1, expl: "La médiane (1 550 €) n’est pas influencée par la valeur extrême 9 500 € (moyenne 3 500 €)." }
  ]
});

window.MATHS.chapters.push({
  id: 13,
  title: "Algorithmique et programmation",
  short: "Algorithmique",
  sub: "Scratch, boucles, conditions, variables, programmes de calcul",
  objectifs: [
    "Lire et exécuter un <b>programme de calcul</b> et un script <b>Scratch</b>.",
    "Comprendre les notions de <b>variable</b>, <b>boucle</b> (répéter), <b>condition</b> (si… alors… sinon).",
    "Prévoir la figure tracée par un script de déplacement (stylo, avancer, tourner)."
  ],
  lesson: `
<h2>1. Un algorithme, c’est une recette</h2>
<p>Un <b>algorithme</b> est une suite finie d’instructions qui permet de résoudre un problème. Une recette de cuisine, un itinéraire ou la technique posée de l’addition sont des algorithmes. Un <b>programme</b> est un algorithme écrit dans un langage compris par la machine (Scratch, Python…).</p>

<h2>2. Programmes de calcul</h2>
<div class="box ex"><span class="box-title">Exemple classique</span>
« Choisir un nombre. Lui ajouter 3. Multiplier le résultat par 2. Soustraire 6. »<br>
Avec 5 : 5 + 3 = 8 → 16 → 10. Avec 7 : 10 → 20 → 14. On remarque que le résultat est toujours le <b>double</b> du nombre de départ.<br>
<b>Preuve</b> avec x : (x + 3) × 2 − 6 = 2x + 6 − 6 = <b>2x</b>. ∎</div>

<h2>3. Les briques de Scratch</h2>
<ul>
<li><b>Variable</b> : une « boîte » qui porte un nom et contient une valeur qui peut changer. <code>mettre score à 0</code>, <code>ajouter 1 à score</code>.</li>
<li><b>Boucle</b> : <code>répéter 4 fois</code> (nombre fixé), <code>répéter jusqu’à …</code>, <code>répéter indéfiniment</code>.</li>
<li><b>Condition</b> : <code>si … alors … sinon …</code>.</li>
<li><b>Événements</b> : <code>quand drapeau vert cliqué</code>, <code>quand la touche espace est pressée</code>.</li>
<li><b>Stylo</b> : <code>stylo en position d’écriture</code>, <code>avancer de 50</code>, <code>tourner de 90 degrés</code>.</li>
</ul>

<h2>4. Prévoir une figure</h2>
<pre>stylo en position d’écriture
répéter 4 fois
    avancer de 100
    tourner ↻ de 90 degrés</pre>
<p>→ trace un <b>carré</b> de côté 100. Pour un <b>polygone régulier à n côtés</b>, on tourne de <b>360 ÷ n</b> degrés : triangle équilatéral → 120°, hexagone → 60°.</p>
<div class="box warn"><span class="box-title">Piège</span>Pour un triangle équilatéral, les élèves tournent de 60° (l’angle intérieur) : il faut tourner de 120° (l’angle <b>extérieur</b> = 180° − 60°).</div>

<h2>5. Trace d’exécution</h2>
<p>Pour comprendre un programme avec variables, on fait un <b>tableau</b> qui suit l’évolution de chaque variable à chaque tour de boucle.</p>
<pre>mettre n à 1
mettre s à 0
répéter 4 fois
    ajouter n à s
    ajouter 2 à n
dire s</pre>
<table><tr><th>tour</th><th>s</th><th>n</th></tr><tr><td>départ</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>3</td></tr><tr><td>2</td><td>4</td><td>5</td></tr><tr><td>3</td><td>9</td><td>7</td></tr><tr><td>4</td><td>16</td><td>9</td></tr></table>
<p>Le programme affiche <b>16</b> (somme des 4 premiers nombres impairs = 4²).</p>
`,
  videos: [
    { t: "Découvrir Scratch", ch: "Yvan Monka", q: "Yvan Monka Scratch débuter algorithmique" },
    { t: "Boucles et polygones dans Scratch", ch: "Yvan Monka", q: "Scratch tracer un polygone régulier répéter" },
    { t: "Programme de calcul et calcul littéral", ch: "Yvan Monka", q: "Yvan Monka programme de calcul expression littérale" }
  ],
  resume: "<ul><li>Variable = boîte nommée ; boucle = répéter ; condition = si/alors/sinon.</li><li>Polygone régulier à n côtés : tourner de 360/n.</li><li>Programme de calcul : on le prouve avec une lettre.</li></ul>",
  exercises: [
    { q: "Programme : choisir 4, multiplier par 3, ajouter 5, diviser par 1. Résultat ?", answers: ["17"], expl: "On suit le programme pas à pas : 4 × 3 = 12, puis 12 + 5 = 17, puis 17 ÷ 1 = <b>17</b> (diviser par 1 ne change rien)." },
    { q: "Programme : choisir x, ajouter 1, élever au carré, soustraire x². Avec x = 3, résultat ?", answers: ["7"], expl: "(3 + 1)² − 9 = 16 − 9 = 7. En général : 2x + 1." },
    { q: "De combien de degrés tourner pour tracer un hexagone régulier ?", answers: ["60"], expl: "Pour un polygone régulier, on tourne de 360° ÷ nombre de côtés. Hexagone : 360 ÷ 6 = <b>60°</b>. C’est l’angle extérieur, pas l’angle intérieur (120°)." },
    { q: "De combien de degrés tourner pour un triangle équilatéral ?", answers: ["120"], expl: "On tourne de 360° ÷ 3 = <b>120°</b> (l’angle extérieur). Piège : tourner de 60°, l’angle intérieur, qui ne referme pas le triangle." },
    { q: "« répéter 5 fois : avancer de 80, tourner de 72° » trace :", choices: ["un pentagone régulier", "un hexagone", "une étoile", "un carré"], answer: 0, expl: "5 côtés égaux et 5 × 72° = 360° : la tortue fait exactement un tour et revient au départ. Elle trace un <b>pentagone régulier</b>." },
    { q: "mettre a à 2 ; répéter 3 fois : mettre a à a × 2. Valeur finale de a ?", answers: ["16"], expl: "2 → 4 → 8 → 16." }
  ],
  evaluation: [
    { q: "Pour tracer un octogone régulier, l’angle de rotation est (°) :", answers: ["45"], expl: "Un octogone a 8 côtés : on tourne de 360° ÷ 8 = <b>45°</b> à chaque sommet." },
    { q: "mettre s à 0 ; pour n de 1 à 5 : ajouter n à s. Valeur finale de s ?", answers: ["15"], expl: "La boucle ajoute successivement 1, 2, 3, 4 et 5 à s : 0 + 1 + 2 + 3 + 4 + 5 = <b>15</b>." },
    { q: "Une instruction « si … alors … sinon » est :", choices: ["une boucle", "une condition", "une variable", "un événement"], answer: 1, expl: "« si … alors … sinon » teste une <b>condition</b> : selon qu’elle est vraie ou fausse, le programme exécute l’une ou l’autre partie. Une boucle, c’est « répéter »." },
    { q: "Programme : choisir x, multiplier par 4, soustraire 8, diviser par 4, ajouter 2. Le résultat est toujours :", choices: ["x", "4x", "x + 2", "0"], answer: 0, expl: "(4x − 8)/4 + 2 = x − 2 + 2 = x." },
    { q: "mettre x à 10 ; répéter jusqu’à x < 0 : retirer 3 à x. Valeur finale de x ?", answers: ["-2", "−2"], expl: "10 → 7 → 4 → 1 → −2." },
    { q: "Écris (en langage naturel ou Scratch) un programme qui trace un carré de côté 50, puis explique ce qu’il faut modifier pour tracer un triangle équilatéral.", type: "open", model: "<pre>stylo en position d’écriture\nrépéter 4 fois\n    avancer de 50\n    tourner de 90 degrés</pre><p>Pour un triangle équilatéral : répéter <b>3</b> fois et tourner de <b>120</b> degrés (360 ÷ 3), l’angle extérieur du triangle.</p>" }
  ]
});
