/* MATHÉMATIQUES — compléments (placés dans l'ordre du programme grâce à « pos ») */

window.MATHS.chapters.push({
  id: "m-reels",
  pos: 6.5,
  title: "Des entiers aux réels : les ensembles de nombres",
  short: "Ensembles de nombres",
  sub: "ℕ, ℤ, 𝔻, ℚ, ℝ, nombres irrationnels, écriture décimale périodique",
  objectifs: [
    "Situer un nombre dans le bon ensemble : entier naturel, relatif, décimal, rationnel, réel.",
    "Savoir qu’un rationnel a une écriture décimale <b>finie ou périodique</b>, et retrouver la fraction d’un nombre périodique.",
    "Connaître des nombres <b>irrationnels</b> (√2, π) et la démonstration classique pour √2."
  ],
  lesson: `
<h2>1. Les ensembles emboîtés</h2>
<table><tr><th>Ensemble</th><th>Contient</th><th>Exemples</th></tr>
<tr><td>ℕ entiers naturels</td><td>0, 1, 2, 3…</td><td>0 ; 17 ; 2 024</td></tr>
<tr><td>ℤ entiers relatifs</td><td>les entiers positifs et négatifs</td><td>−5 ; 0 ; 12</td></tr>
<tr><td>𝔻 décimaux</td><td>les nombres a/10ⁿ</td><td>3,25 ; −0,7</td></tr>
<tr><td>ℚ rationnels</td><td>les quotients a/b (b ≠ 0)</td><td>1/3 ; −2/7 ; 0,5</td></tr>
<tr><td>ℝ réels</td><td>tous les nombres de la droite graduée</td><td>√2 ; π</td></tr></table>
<p>On a ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ : chaque ensemble contient le précédent. 12 est à la fois naturel, relatif, décimal, rationnel et réel.</p>

<h2>2. L’écriture décimale d’un rationnel</h2>
<ul><li>Si le dénominateur (fraction irréductible) n’a que des facteurs 2 et 5, l’écriture est <b>finie</b> : 3/8 = 0,375.</li>
<li>Sinon, elle est <b>illimitée périodique</b> : 1/3 = 0,333… ; 5/11 = 0,4545… ; 1/7 = 0,142857142857…</li></ul>
<div class="box ex"><span class="box-title">Retrouver la fraction d’un nombre périodique</span>x = 0,4545… Alors 100x = 45,4545… En soustrayant : 100x − x = 45, donc 99x = 45 et x = 45/99 = 5/11.<br>
Cas célèbre : 0,999… = 1 (car x = 0,999…, 10x = 9,999…, 9x = 9, x = 1).</div>

<h2>3. Les nombres irrationnels</h2>
<p>Un nombre <b>irrationnel</b> est un réel qui n’est pas rationnel : son écriture décimale est illimitée et <b>non périodique</b>. Exemples : √2 ≈ 1,41421…, √3, π ≈ 3,14159… ⚠ 22/7 et 3,14 ne sont que des <b>valeurs approchées</b> de π.</p>
<div class="box tip"><span class="box-title">Démonstration (par l’absurde) que √2 est irrationnel</span>Supposons √2 = p/q avec p/q irréductible. Alors 2 = p²/q², donc p² = 2q² : p² est pair, donc p est pair. On écrit p = 2k : 4k² = 2q², donc q² = 2k² et q est pair aussi. p et q seraient tous deux pairs : la fraction ne serait pas irréductible. Contradiction : √2 n’est pas rationnel. ∎</div>
<p>√n est irrationnel dès que n n’est pas un carré parfait (√9 = 3 est entier, √10 est irrationnel).</p>
`,
  videos: [
    { t: "Les ensembles de nombres", ch: "Yvan Monka", q: "Yvan Monka ensembles de nombres N Z D Q R" },
    { t: "Racine de 2 est irrationnel", ch: "Yvan Monka", q: "Yvan Monka démontrer racine de 2 irrationnel" },
    { t: "Écriture décimale périodique en fraction", ch: "Yvan Monka", q: "écriture décimale périodique convertir en fraction" }
  ],
  resume: "<ul><li>ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ.</li><li>Rationnel : écriture décimale finie ou périodique.</li><li>Irrationnel : illimitée non périodique (√2, π).</li></ul>",
  exercises: [
    { q: "Le plus petit ensemble qui contient −3 :", choices: ["ℕ", "ℤ", "𝔻", "ℚ"], answer: 1, expl: "−3 est un entier, mais il est <b>négatif</b> : il n’est pas dans ℕ (entiers naturels, positifs). Le plus petit ensemble qui le contient est donc <b>ℤ</b>, les entiers relatifs." },
    { q: "Le plus petit ensemble qui contient 2/3 :", choices: ["𝔻", "ℚ", "ℝ"], answer: 1, expl: "2/3 est un quotient d’entiers, donc il est dans <b>ℚ</b>. Il n’est pas décimal : 2/3 = 0,666… ne s’arrête jamais (le dénominateur 3 n’est ni 2 ni 5)." },
    { q: "√16 est :", choices: ["irrationnel", "un entier naturel", "seulement réel"], answer: 1, expl: "√16 = 4, car 4 × 4 = 16. C’est donc un <b>entier naturel</b>. Attention au piège : une racine carrée n’est irrationnelle que si le nombre n’est pas un carré parfait." },
    { q: "Écris 0,777… sous forme de fraction irréductible.", answers: ["7/9"], numeric: false, expl: "10x − x = 7 → x = 7/9." },
    { q: "π est égal à 22/7. Vrai ou faux ?", type: "vf", answer: 1, expl: "Faux : 22/7 ≈ 3,1428, une valeur approchée. π est irrationnel." },
    { q: "Explique pourquoi 1/6 n’est pas décimal mais est rationnel.", type: "open", model: "<p>1/6 est un quotient d’entiers : il est <b>rationnel</b>. Sa fraction irréductible a pour dénominateur 6 = 2 × 3 : le facteur 3 empêche d’écrire 1/6 avec un dénominateur 10ⁿ. Son écriture décimale est 0,1666… (illimitée périodique) : il n’est donc pas décimal.</p>" }
  ],
  evaluation: [
    { q: "0,25 appartient au plus petit ensemble :", choices: ["ℤ", "𝔻", "ℚ"], answer: 1, expl: "0,25 = 25/100 s’écrit avec un nombre fini de chiffres après la virgule : c’est un <b>décimal</b> (𝔻). Ce n’est pas un entier, donc pas dans ℤ." },
    { q: "Lequel est irrationnel ?", choices: ["√25", "1/3", "√5", "0,121212…"], answer: 2, expl: "√5 est irrationnel car 5 n’est pas un carré parfait. Les autres sont rationnels : √25 = 5, 1/3 est une fraction, et 0,121212… est périodique (= 12/99 = 4/33)." },
    { q: "Écris 0,363636… sous forme de fraction irréductible.", answers: ["4/11"], numeric: false, expl: "100x − x = 36 → x = 36/99 = 4/11." },
    { q: "0,999… est égal à :", choices: ["un peu moins que 1", "1"], answer: 1, expl: "0,999… est <b>exactement égal à 1</b>. Pose x = 0,999… : 10x = 9,999…, donc 10x − x = 9, soit 9x = 9 et x = 1. L’intuition « un peu moins que 1 » est le piège classique." },
    { q: "L’écriture décimale d’un nombre rationnel est :", choices: ["toujours finie", "finie ou périodique", "jamais périodique"], answer: 1, expl: "Un rationnel a une écriture décimale <b>finie</b> (3/8 = 0,375) ou <b>illimitée périodique</b> (1/3 = 0,333…). Seuls les irrationnels ont une écriture illimitée non périodique." }
  ]
});

window.MATHS.chapters.push({
  id: "m-inequations",
  pos: 8.5,
  title: "Inéquations et lecture graphique",
  short: "Inéquations",
  sub: "Résoudre une inéquation, lire un graphique, comparer des offres",
  objectifs: [
    "Résoudre une <b>inéquation du premier degré</b> (attention au changement de sens).",
    "Lire graphiquement images, antécédents, solutions d’équations et d’inéquations.",
    "Comparer deux offres tarifaires (problème très fréquent au concours)."
  ],
  lesson: `
<h2>1. Résoudre une inéquation</h2>
<p>Une inéquation se résout comme une équation, avec une règle supplémentaire :</p>
<div class="box warn"><span class="box-title">La règle à ne jamais oublier</span>Si on <b>multiplie ou divise</b> les deux membres par un nombre <b>négatif</b>, on <b>change le sens</b> de l’inégalité.<br>−2x &lt; 6 → x &gt; −3 (on a divisé par −2).</div>
<div class="box ex"><span class="box-title">Exemple</span>3x − 5 ≤ 7x + 3 → 3x − 7x ≤ 3 + 5 → −4x ≤ 8 → x ≥ −2 (changement de sens). Les solutions sont tous les nombres supérieurs ou égaux à −2 : sur une droite graduée, on hachure ou colore à partir de −2, crochet fermé car −2 est solution.</div>

<h2>2. Lecture graphique</h2>
<ul><li><b>Image de a</b> : on part de a sur l’axe horizontal, on monte jusqu’à la courbe, on lit l’ordonnée.</li>
<li><b>Antécédents de b</b> : on part de b sur l’axe vertical, on trace une horizontale, on lit les abscisses des points d’intersection (il peut y en avoir plusieurs, ou aucun).</li>
<li><b>Solutions de f(x) &gt; b</b> : les abscisses des points de la courbe situés <b>au-dessus</b> de la droite horizontale d’ordonnée b.</li></ul>

<h2>3. Comparer deux offres</h2>
<div class="box ex"><span class="box-title">Problème type</span>Médiathèque : formule A à 3 € par livre emprunté ; formule B : abonnement de 24 € puis 1 € par livre. À partir de combien de livres la formule B est-elle plus avantageuse ?<br>
A(x) = 3x (linéaire) ; B(x) = x + 24 (affine). B plus avantageuse si x + 24 &lt; 3x → 24 &lt; 2x → x &gt; 12. <b>À partir de 13 livres.</b> Pour 12 livres, les deux coûtent 36 €.<br>
Graphiquement : les deux droites se coupent au point (12 ; 36) ; après ce point, la droite de B est en dessous.</div>
`,
  videos: [
    { t: "Résoudre une inéquation", ch: "Yvan Monka", q: "Yvan Monka résoudre une inéquation du premier degré" },
    { t: "Lire graphiquement image et antécédent", ch: "Yvan Monka", q: "Yvan Monka lire graphiquement image antécédent" },
    { t: "Comparer deux tarifs", ch: "Les Bons Profs", q: "comparer deux tarifs fonction affine problème 3e" }
  ],
  resume: "<ul><li>Multiplier/diviser par un négatif : on change le sens.</li><li>Antécédents : on part de l’axe vertical.</li><li>Comparer deux offres : poser l’inéquation, conclure par une phrase.</li></ul>",
  exercises: [
    { q: "Résous 2x + 3 > 11. Les solutions sont x > …", answers: ["4"], expl: "2x + 3 &gt; 11 → 2x &gt; 11 − 3 → 2x &gt; 8 → x &gt; 4. On divise par 2, un nombre positif : le sens ne change pas." },
    { q: "Résous −3x ≤ 12. Les solutions sont :", choices: ["x ≤ −4", "x ≥ −4", "x ≥ 4"], answer: 1, expl: "On divise par −3, un nombre <b>négatif</b> : on <b>change le sens</b>. −3x ≤ 12 → x ≥ 12 ÷ (−3) → x ≥ −4. Le piège : oublier de retourner le signe." },
    { q: "Résous 5 − x < 2. Les solutions sont x > …", answers: ["3"], expl: "5 − x &lt; 2 → −x &lt; 2 − 5 → −x &lt; −3. On multiplie par −1 (négatif) : on change le sens, donc x &gt; 3." },
    { q: "Offre A : 15 € par mois. Offre B : 60 € puis 10 € par mois. À partir de combien de mois B est-elle strictement plus avantageuse ?", answers: ["13"], expl: "60 + 10x < 15x → 60 < 5x → x > 12 : à partir de 13 mois." },
    { q: "Le nombre −2 est-il solution de 4x + 1 ≥ −7 ?", choices: ["Oui", "Non"], answer: 0, expl: "4 × (−2) + 1 = −7 ≥ −7 : oui." }
  ],
  evaluation: [
    { q: "Résous 7x − 2 ≥ 5x + 8. Les solutions sont x ≥ …", answers: ["5"], expl: "On regroupe les x d’un côté : 7x − 5x ≥ 8 + 2, donc 2x ≥ 10 et x ≥ 5." },
    { q: "Résous −x/2 > 3. Les solutions sont :", choices: ["x > −6", "x < −6", "x < 6"], answer: 1, expl: "On multiplie par −2 (négatif) : on <b>change le sens</b>. −x/2 &gt; 3 → x &lt; 3 × (−2) → x &lt; −6. Vérifie avec x = −8 : −(−8)/2 = 4 &gt; 3." },
    { q: "Sur un graphique, les antécédents de 4 se lisent :", choices: ["en partant de 4 sur l’axe horizontal", "en partant de 4 sur l’axe vertical"], answer: 1, expl: "Pour les antécédents de 4, on cherche les x tels que f(x) = 4 : on part de 4 sur l’<b>axe vertical</b> (les images), on trace une horizontale et on lit les abscisses. Partir de l’axe horizontal, c’est chercher l’image de 4." },
    { q: "Taxi A : 2 €/km. Taxi B : 10 € + 1,50 €/km. Pour quelle distance (km) les deux prix sont-ils égaux ?", answers: ["20"], expl: "2x = 10 + 1,5x → 0,5x = 10 → x = 20." },
    { q: "Vrai ou faux : 3 est solution de 2x − 1 < 5.", type: "vf", answer: 1, expl: "2 × 3 − 1 = 5, et 5 < 5 est faux." }
  ]
});

window.MATHS.chapters.push({
  id: "m-angles",
  pos: 10.5,
  title: "Angles, repérage et constructions",
  short: "Angles & constructions",
  sub: "Angles alternes-internes, correspondants, repère, constructions à la règle et au compas",
  objectifs: [
    "Utiliser les angles <b>opposés par le sommet</b>, <b>alternes-internes</b> et <b>correspondants</b> pour démontrer.",
    "Se repérer dans un plan (coordonnées, milieu) et dans un pavé.",
    "Réaliser et décrire les <b>constructions</b> à la règle et au compas (programme de construction)."
  ],
  lesson: `
<h2>1. Les angles particuliers</h2>
<ul><li><b>Complémentaires</b> : somme 90°. <b>Supplémentaires</b> : somme 180°. <b>Adjacents</b> : même sommet, un côté commun, de part et d’autre.</li>
<li><b>Opposés par le sommet</b> : formés par deux droites sécantes, ils sont <b>égaux</b>.</li></ul>
<div class="box def"><span class="box-title">Deux droites coupées par une sécante</span>
<ul><li><b>Alternes-internes</b> : de part et d’autre de la sécante, entre les deux droites.</li><li><b>Correspondants</b> : du même côté de la sécante, l’un entre les droites, l’autre à l’extérieur, « à la même place ».</li></ul>
<b>Propriété</b> : si les deux droites sont <b>parallèles</b>, les angles alternes-internes (et correspondants) sont <b>égaux</b>. <b>Réciproque</b> : si deux angles alternes-internes sont égaux, les droites sont parallèles.</div>
<p>Application : démontrer que la somme des angles d’un triangle vaut 180° en traçant la parallèle à un côté passant par le sommet opposé.</p>
<p>Polygone : la somme des angles d’un polygone convexe à n côtés vaut (n − 2) × 180°. Un hexagone régulier a des angles de 720 ÷ 6 = 120°.</p>

<h2>2. Se repérer</h2>
<ul><li>Dans un repère, un point a une <b>abscisse</b> (horizontale) puis une <b>ordonnée</b> (verticale) : A(3 ; −2).</li>
<li><b>Milieu</b> de [AB] : ((x_A + x_B)/2 ; (y_A + y_B)/2). Milieu de A(2 ; 5) et B(6 ; −1) : (4 ; 2).</li>
<li>À l’école, le repérage commence par les quadrillages (case B3, jeu de bataille navale) et les déplacements codés (flèches, robots).</li></ul>

<h2>3. Les constructions à connaître</h2>
<table><tr><th>Construction</th><th>Méthode</th></tr>
<tr><td>Médiatrice de [AB]</td><td>Compas : deux arcs de même rayon (plus grand que AB/2) centrés en A et en B ; la droite qui passe par leurs deux intersections.</td></tr>
<tr><td>Triangle de côtés 5, 4, 3 cm</td><td>Tracer [AB] = 5 cm ; arc de centre A de rayon 4 cm ; arc de centre B de rayon 3 cm ; C à l’intersection.</td></tr>
<tr><td>Perpendiculaire à (d) passant par M</td><td>Équerre, ou compas : deux points de (d) équidistants de M, puis leur médiatrice.</td></tr>
<tr><td>Parallèle à (d) passant par M</td><td>Équerre et règle (deux perpendiculaires), ou report de longueurs (parallélogramme).</td></tr>
<tr><td>Cercle circonscrit à un triangle</td><td>Centre = intersection des médiatrices des côtés.</td></tr>
<tr><td>Hexagone régulier</td><td>Reporter 6 fois le rayon sur le cercle.</td></tr></table>
<p>Au concours, on demande souvent d’écrire un <b>programme de construction</b> : des phrases courtes, à l’impératif, dans l’ordre, avec le vocabulaire exact (« Trace le segment [AB] de 6 cm. Trace le cercle de centre A et de rayon 4 cm… »).</p>
`,
  videos: [
    { t: "Angles alternes-internes et correspondants", ch: "Yvan Monka", q: "Yvan Monka angles alternes internes correspondants" },
    { t: "Construire une médiatrice au compas", ch: "Yvan Monka", q: "Yvan Monka construire la médiatrice compas" },
    { t: "Coordonnées du milieu", ch: "Yvan Monka", q: "Yvan Monka coordonnées du milieu d'un segment" }
  ],
  resume: "<ul><li>Droites parallèles ⇔ angles alternes-internes (ou correspondants) égaux.</li><li>Somme des angles d’un polygone à n côtés : (n − 2) × 180°.</li><li>Milieu : moyenne des coordonnées.</li><li>Centre du cercle circonscrit : intersection des médiatrices.</li></ul>",
  exercises: [
    { q: "Deux angles supplémentaires : l’un mesure 115°. L’autre (°) ?", answers: ["65"], expl: "Deux angles supplémentaires ont une somme de <b>180°</b> : 180 − 115 = 65°. Ne confonds pas avec complémentaires (somme 90°)." },
    { q: "Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure 48°. L’autre (°) ?", answers: ["48"], expl: "Quand les droites sont <b>parallèles</b>, deux angles alternes-internes sont <b>égaux</b> : l’autre mesure aussi 48°." },
    { q: "Somme des angles d’un pentagone (°) :", answers: ["540"], expl: "Pour un polygone à n côtés : (n − 2) × 180°. Pentagone : n = 5, donc 3 × 180 = <b>540°</b> (on peut le découper en 3 triangles)." },
    { q: "Coordonnées du milieu de A(−2 ; 4) et B(6 ; 0) (format (2;2)) :", answers: ["(2;2)", "(2 ; 2)", "2;2"], numeric: false, expl: "Le milieu a pour coordonnées la <b>moyenne</b> des coordonnées : ((−2 + 6)/2 ; (4 + 0)/2) = (4/2 ; 4/2) = (2 ; 2)." },
    { q: "Le centre du cercle circonscrit à un triangle est l’intersection :", choices: ["des hauteurs", "des médiatrices", "des médianes"], answer: 1, expl: "Le centre du cercle circonscrit est à égale distance des trois sommets : il est donc sur les <b>médiatrices</b> des côtés (chaque point de la médiatrice de [AB] est équidistant de A et B)." },
    { q: "Rédige un programme de construction pour un losange ABCD de côté 5 cm dont la diagonale [AC] mesure 8 cm.", type: "open", model: "<p>1) Trace le segment [AC] de 8 cm. 2) Trace un arc de cercle de centre A et de rayon 5 cm de chaque côté de [AC]. 3) Trace un arc de cercle de centre C et de rayon 5 cm de chaque côté. 4) Nomme B et D les deux points d’intersection des arcs. 5) Trace les segments [AB], [BC], [CD] et [DA].</p>" }
  ],
  evaluation: [
    { q: "Deux angles opposés par le sommet sont :", choices: ["supplémentaires", "égaux", "complémentaires"], answer: 1, expl: "Deux angles opposés par le sommet, formés par deux droites sécantes, sont toujours <b>égaux</b>. Ce sont deux angles adjacents (côte à côte sur une droite) qui sont supplémentaires." },
    { q: "Angle intérieur d’un octogone régulier (°) :", answers: ["135"], expl: "(8 − 2) × 180 ÷ 8 = 135." },
    { q: "Complémentaire d’un angle de 27° :", answers: ["63"], expl: "Deux angles complémentaires ont une somme de <b>90°</b> : 90 − 27 = 63°. Le piège : faire 180 − 27 (supplémentaire)." },
    { q: "Pour prouver que deux droites sont parallèles, on peut montrer :", choices: ["que deux angles alternes-internes sont égaux", "que deux angles sont adjacents", "que les droites ont la même longueur"], answer: 0, expl: "C’est la <b>réciproque</b> de la propriété des angles alternes-internes : s’ils sont égaux, les droites sont parallèles. Une droite n’a pas de longueur, et des angles adjacents ne disent rien sur le parallélisme." },
    { q: "Milieu de A(1 ; 3) et B(5 ; 7) :", choices: ["(3 ; 5)", "(6 ; 10)", "(2 ; 2)"], answer: 0, expl: "On fait la moyenne des coordonnées : ((1 + 5)/2 ; (3 + 7)/2) = (3 ; 5). Le piège (6 ; 10) : additionner sans diviser par 2." }
  ]
});

window.MATHS.chapters.push({
  id: "m-logique",
  pos: 12.5,
  title: "Dénombrement et raisonnement logique",
  short: "Dénombrement & logique",
  sub: "Arbres, principe multiplicatif, implication, réciproque, contre-exemple",
  objectifs: [
    "Dénombrer avec un <b>arbre</b>, un <b>tableau</b> ou le <b>principe multiplicatif</b>.",
    "Distinguer une propriété, sa <b>réciproque</b> et sa <b>contraposée</b>.",
    "Savoir qu’un <b>contre-exemple</b> suffit à prouver qu’une affirmation est fausse, mais qu’un exemple ne prouve jamais qu’elle est vraie."
  ],
  lesson: `
<h2>1. Dénombrer</h2>
<div class="box def"><span class="box-title">Principe multiplicatif</span>Si un choix se fait en deux étapes, avec a possibilités puis b possibilités, il y a <b>a × b</b> possibilités en tout.</div>
<ul><li>3 entrées, 4 plats, 2 desserts → 3 × 4 × 2 = <b>24 menus</b>.</li>
<li>Codes à 3 chiffres (0 à 9) → 10 × 10 × 10 = 1 000 codes. Sans répéter un chiffre → 10 × 9 × 8 = 720.</li>
<li>Nombre de façons de ranger 4 livres → 4 × 3 × 2 × 1 = 24.</li>
<li><b>Poignées de main</b> entre 6 personnes : chacune serre 5 mains, mais chaque poignée est comptée deux fois → 6 × 5 ÷ 2 = 15.</li></ul>
<p>Méthodes à montrer aux élèves : la <b>liste organisée</b>, l’<b>arbre</b>, le <b>tableau à double entrée</b>.</p>

<h2>2. Implication, réciproque, contraposée</h2>
<p>Une propriété « <b>Si A, alors B</b> » se note A ⇒ B.</p>
<ul><li><b>Réciproque</b> : « Si B, alors A ». Elle peut être fausse ! « Si un quadrilatère est un carré, alors il a 4 côtés égaux » est vraie ; sa réciproque « s’il a 4 côtés égaux, c’est un carré » est fausse (losange).</li>
<li><b>Contraposée</b> : « Si non B, alors non A ». Elle est <b>toujours équivalente</b> à la propriété. « S’il n’a pas 4 côtés égaux, ce n’est pas un carré. »</li>
<li>Quand une propriété et sa réciproque sont vraies, on dit « <b>A si et seulement si B</b> » (A ⇔ B). Ex. : Pythagore et sa réciproque.</li></ul>
<p><b>Condition nécessaire / suffisante</b> : dans A ⇒ B, A est une condition <b>suffisante</b> pour B, et B une condition <b>nécessaire</b> pour A. Être un carré suffit pour être un rectangle ; être un rectangle est nécessaire pour être un carré.</p>

<h2>3. Prouver ou réfuter</h2>
<div class="box warn"><span class="box-title">La règle d’or du « vrai ou faux » au concours</span>
<ul><li>Pour montrer qu’une affirmation générale est <b>fausse</b> : <b>un seul contre-exemple</b> suffit.</li>
<li>Pour montrer qu’elle est <b>vraie</b> : il faut une <b>démonstration générale</b> (souvent avec des lettres) ; des exemples, même nombreux, ne suffisent pas.</li></ul></div>
<p>Exemple : « n² + n + 41 est toujours premier » : vrai pour n = 0, 1, 2… jusqu’à 39, mais faux pour n = 40 (40² + 40 + 41 = 41²).</p>
`,
  videos: [
    { t: "Dénombrer avec un arbre", ch: "Yvan Monka", q: "dénombrement arbre principe multiplicatif" },
    { t: "Réciproque et contraposée", ch: "Yvan Monka", q: "réciproque contraposée implication logique" },
    { t: "Le contre-exemple", ch: "Les Bons Profs", q: "contre-exemple démonstration vrai faux maths" }
  ],
  resume: "<ul><li>Principe multiplicatif : a × b × c.</li><li>Réciproque : parfois fausse ; contraposée : toujours équivalente.</li><li>Faux : un contre-exemple suffit. Vrai : il faut une démonstration.</li></ul>",
  exercises: [
    { q: "2 pantalons, 3 tee-shirts et 2 paires de chaussures. Combien de tenues ?", answers: ["12"], expl: "Principe multiplicatif : pour chaque pantalon, 3 tee-shirts, et pour chacun, 2 paires de chaussures : 2 × 3 × 2 = <b>12</b> tenues. On multiplie, on n’additionne pas." },
    { q: "Combien de nombres de 3 chiffres différents peut-on écrire avec 1, 2, 3, 4 ?", answers: ["24"], expl: "4 × 3 × 2 = 24." },
    { q: "Lors d’un tournoi, 8 équipes se rencontrent une fois chacune. Combien de matchs ?", answers: ["28"], expl: "8 × 7 ÷ 2 = 28." },
    { q: "Contraposée de « S’il pleut, le sol est mouillé » :", choices: ["Si le sol est mouillé, il pleut.", "Si le sol n’est pas mouillé, il ne pleut pas.", "S’il ne pleut pas, le sol n’est pas mouillé."], answer: 1, expl: "La contraposée de « Si A, alors B » est « Si non B, alors non A » : on inverse <b>et</b> on nie. Ici : « Si le sol n’est pas mouillé, il ne pleut pas ». La première proposition est la réciproque, la troisième ne fait que nier." },
    { q: "Pour prouver que « tous les multiples de 4 sont multiples de 8 » est faux, il suffit de :", choices: ["donner un contre-exemple, comme 12", "vérifier 10 exemples", "c’est impossible"], answer: 0, expl: "Pour montrer qu’une affirmation générale est fausse, <b>un seul contre-exemple</b> suffit : 12 est multiple de 4 mais pas de 8. Vérifier des exemples ne prouve rien." }
  ],
  evaluation: [
    { q: "Nombre de codes à 4 chiffres (0 à 9) :", answers: ["10000"], expl: "Chaque chiffre a 10 possibilités (de 0 à 9) et on peut répéter : 10 × 10 × 10 × 10 = <b>10 000</b> codes (de 0000 à 9999)." },
    { q: "Nombre de façons de ranger 5 élèves en file :", answers: ["120"], expl: "5 choix pour la 1re place, puis 4, puis 3, puis 2, puis 1 : 5 × 4 × 3 × 2 × 1 = <b>120</b>." },
    { q: "Réciproque de « Si un nombre est multiple de 6, il est pair » :", choices: ["Si un nombre est pair, il est multiple de 6 (fausse)", "Si un nombre n’est pas pair, il n’est pas multiple de 6"], answer: 0, expl: "La réciproque échange les deux parties : « Si un nombre est pair, il est multiple de 6 ». Elle est fausse (4 est pair, pas multiple de 6). L’autre phrase est la contraposée." },
    { q: "Être multiple de 4 est une condition … pour être multiple de 2 :", choices: ["nécessaire", "suffisante", "ni l’un ni l’autre"], answer: 1, expl: "Si un nombre est multiple de 4, il est forcément multiple de 2 : être multiple de 4 <b>suffit</b>. Mais ce n’est pas nécessaire : 6 est multiple de 2 sans être multiple de 4." },
    { q: "Vrai ou faux : si une propriété est vraie pour 100 exemples, elle est démontrée.", type: "vf", answer: 1, expl: "<b>Faux</b> : des exemples, même nombreux, ne démontrent rien ; il faut une démonstration générale. Exemple : n² + n + 41 est premier pour n = 0 à 39, mais pas pour n = 40." }
  ]
});

window.MATHS.chapters.push({
  id: "m-didactique",
  pos: 14,
  title: "Didactique des mathématiques",
  short: "Didactique maths",
  sub: "Erreurs d’élèves, procédures, matériel, résolution de problèmes",
  objectifs: [
    "Analyser une <b>production d’élève</b> : décrire, faire une hypothèse, proposer une remédiation.",
    "Connaître les notions de didactique : <b>situation-problème</b>, <b>variable didactique</b>, <b>obstacle</b>, <b>institutionnalisation</b>.",
    "Connaître les <b>étapes</b> manipuler → verbaliser → abstraire et la place du calcul mental et des problèmes."
  ],
  lesson: `
<h2>1. Les mots de la didactique (Brousseau et la théorie des situations)</h2>
<ul><li><b>Situation-problème</b> : une tâche pour laquelle l’élève n’a pas encore la solution experte, mais qu’il peut commencer avec ses connaissances ; le nouveau savoir apparaît comme l’outil efficace.</li>
<li><b>Variable didactique</b> : un élément de la tâche que l’enseignant peut modifier et qui <b>change les procédures</b> des élèves. Ex. : la taille des nombres (avec 4 + 3, l’élève compte sur ses doigts ; avec 48 + 37, il doit calculer autrement), la présence ou non du matériel, la disposition des données.</li>
<li><b>Obstacle</b> : une connaissance ancienne, efficace dans un domaine, qui devient source d’erreurs ailleurs (« multiplier agrandit toujours », vrai pour les entiers, faux pour 0,5).</li>
<li><b>Dévolution</b> : l’élève accepte de prendre en charge le problème. <b>Institutionnalisation</b> : l’enseignant dit ce qu’il faut retenir.</li>
<li><b>Contrat didactique</b> : les attentes implicites entre maître et élèves (célèbre « âge du capitaine » : des élèves calculent une réponse à un problème absurde parce qu’ils pensent qu’il faut toujours utiliser les nombres de l’énoncé).</li></ul>

<h2>2. Manipuler, verbaliser, abstraire</h2>
<p>Les programmes et les recommandations insistent sur trois étapes : 1) <b>manipuler</b> du matériel (cubes, barres, jetons, bandes de papier) ; 2) <b>verbaliser</b> (dire ce qu’on fait, avec le vocabulaire précis) ; 3) <b>abstraire</b> (schémas, puis écritures mathématiques). Exemple en numération : groupements par 10 avec des bûchettes → « 3 paquets de dix et 4 » → 34.</p>
<p>La <b>méthode dite « de Singapour »</b> s’appuie sur cette progression (concret → imagé → abstrait) et sur le <b>schéma en barres</b> pour les problèmes.</p>

<h2>3. Résoudre des problèmes</h2>
<ul><li>Les problèmes sont au cœur des apprentissages : ils donnent du sens aux opérations. On distingue les problèmes <b>basiques</b> (une étape), <b>complexes</b> (plusieurs étapes) et <b>atypiques</b> (recherche, logique).</li>
<li>Typologie de <b>Vergnaud</b> (voir chapitre « Les quatre opérations »).</li>
<li>Aider à modéliser : reformuler l’énoncé, schématiser (schémas en barres), estimer l’ordre de grandeur, vérifier la vraisemblance.</li></ul>

<h2>4. Analyser une erreur : la méthode en 3 temps</h2>
<div class="box ex"><span class="box-title">Exemple</span>Un élève de CM1 range : 3,7 &lt; 3,25 &lt; 3,125.<br>
<b>1) Décrire</b> : il range les nombres selon la longueur de la partie décimale (ou selon la partie décimale lue comme un entier).<br>
<b>2) Hypothèse</b> : il applique aux décimaux une règle des entiers (« plus il y a de chiffres, plus le nombre est grand ») : c’est un <b>obstacle</b> lié aux entiers.<br>
<b>3) Remédiation</b> : tableau de numération, écriture fractionnaire (3,7 = 3 + 7/10 = 3 + 70/100), droite graduée, comparaison de 3,700 / 3,250 / 3,125.</div>

<h2>5. Le calcul mental</h2>
<p>Il est quotidien (recommandation : environ 15 minutes par jour à l’école élémentaire). On distingue le <b>calcul automatisé</b> (résultats mémorisés : tables, compléments à 10) et le <b>calcul réfléchi</b> (stratégies : 49 + 27 = 50 + 27 − 1). Le procédé La Martinière (ardoise) permet de voir toutes les réponses.</p>
`,
  videos: [
    { t: "Variable didactique : définition et exemples", ch: "Préparation CRPE", q: "CRPE variable didactique exemple mathématiques" },
    { t: "Manipuler, verbaliser, abstraire", ch: "Éduscol / Canopé", q: "manipuler verbaliser abstraire mathématiques école" },
    { t: "Le schéma en barres", ch: "Méthode de Singapour", q: "schéma en barres résolution de problèmes école" }
  ],
  resume: "<ul><li>Variable didactique : élément de la tâche qui change les procédures.</li><li>Obstacle : connaissance ancienne qui devient source d’erreurs.</li><li>Manipuler → verbaliser → abstraire.</li><li>Erreur : décrire, faire une hypothèse, remédier.</li></ul>",
  exercises: [
    { q: "Remplacer « 8 + 5 » par « 38 + 25 » dans un problème, c’est modifier :", choices: ["le contrat didactique", "une variable didactique", "l’institutionnalisation"], answer: 1, expl: "La taille des nombres est une <b>variable didactique</b> : l’enseignant la modifie et cela change les procédures des élèves (compter sur ses doigts ne suffit plus pour 38 + 25)." },
    { q: "« Multiplier agrandit toujours » est un exemple :", choices: ["d’obstacle", "de variable didactique", "de dévolution"], answer: 0, expl: "C’est un <b>obstacle</b> : une connaissance vraie pour les entiers, qui devient fausse ailleurs (8 × 0,5 = 4, plus petit que 8)." },
    { q: "La phase où l’enseignant dit ce qu’il faut retenir :", answers: ["institutionnalisation", "l’institutionnalisation"], expl: "C’est l’<b>institutionnalisation</b> : l’enseignant formule le savoir officiel à retenir, souvent sous forme de trace écrite, après la phase de recherche." },
    { q: "L’« âge du capitaine » illustre :", choices: ["le contrat didactique", "la proportionnalité", "le calcul mental"], answer: 0, expl: "Des élèves calculent l’âge du capitaine à partir de nombres sans rapport, car ils pensent qu’il faut toujours utiliser les données de l’énoncé : c’est un effet du <b>contrat didactique</b> (les attentes implicites de la classe)." },
    { q: "Un élève de CE2 écrit 304 − 127 = 223. Analyse son erreur et propose une remédiation.", type: "open", model: "<p><b>Description</b> : à chaque rang, l’élève soustrait le plus petit chiffre du plus grand (4 − 7 devient 7 − 4 = 3 ; 0 − 2 devient 2 − 0 = 2 ; 3 − 1 = 2). <b>Hypothèse</b> : il ne sait pas gérer la retenue, encore moins avec un zéro au rang des dizaines, et il considère la soustraction comme commutative chiffre par chiffre. <b>Remédiation</b> : retour au matériel (plaques, barres, cubes) pour « casser » une centaine en dizaines puis une dizaine en unités ; verbalisation ; contrôle par l’addition (223 + 127 = 350 ≠ 304) ; estimation (300 − 130 ≈ 170).</p>" }
  ],
  evaluation: [
    { q: "Dans la démarche « manipuler, verbaliser, abstraire », l’étape d’abstraction correspond :", choices: ["au matériel", "aux écritures mathématiques", "au jeu libre"], answer: 1, expl: "Abstraire, c’est passer du concret aux schémas puis aux <b>écritures mathématiques</b> (34 = 3 dizaines et 4 unités). Le matériel correspond à l’étape « manipuler »." },
    { q: "Le calcul « 49 + 27 = 50 + 27 − 1 » relève :", choices: ["du calcul automatisé", "du calcul réfléchi"], answer: 1, expl: "On utilise une <b>stratégie</b> (arrondir à 50 puis corriger) : c’est du <b>calcul réfléchi</b>. Le calcul automatisé, ce sont les résultats mémorisés, comme les tables." },
    { q: "La didactique des situations est associée à :", choices: ["Guy Brousseau", "Jules Ferry", "Montessori"], answer: 0, expl: "La théorie des situations didactiques a été élaborée par <b>Guy Brousseau</b> (dévolution, institutionnalisation, contrat didactique)." },
    { q: "Première étape de l’analyse d’une erreur :", choices: ["proposer une remédiation", "décrire ce que l’élève a fait", "noter l’élève"], answer: 1, expl: "On commence toujours par <b>décrire</b> objectivement ce que l’élève a fait, puis on fait une hypothèse sur l’origine de l’erreur, et enfin on propose une remédiation." },
    { q: "Le schéma en barres sert surtout à :", choices: ["modéliser un problème", "poser une division", "tracer un cercle"], answer: 0, expl: "Le schéma en barres (méthode de Singapour) aide l’élève à <b>modéliser</b> un problème : représenter les quantités et leurs relations pour choisir la bonne opération." }
  ]
});
