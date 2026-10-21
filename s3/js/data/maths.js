/* MATHÉMATIQUES — partie 1 : Nombres et calculs (chapitres 1 à 6) */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "maths",
  name: "Mathématiques",
  icon: "📐",
  intro: "<p>Le programme de mathématiques du CRPE L3 correspond aux savoirs <b>de l’école et du collège (jusqu’au cycle 4)</b>, répartis en grands domaines que l’on suit ici <b>dans l’ordre</b> : <b>Nombres et calculs</b>, <b>Fonctions et calcul littéral</b>, <b>Grandeurs et mesures</b>, <b>Espace et géométrie</b>, <b>Organisation et gestion de données, probabilités</b> et <b>Algorithmique</b>, puis un chapitre de <b>didactique</b> pour l’oral.</p><p>Au concours, on attend de toi des réponses <b>justifiées</b> : un résultat sans explication rapporte peu. Chaque leçon te montre comment rédiger.</p>",
  chapters: []
});
window.MATHS = window.SUBJECTS[window.SUBJECTS.length - 1];

window.MATHS.chapters.push({
  id: 1,
  title: "Numération : entiers et systèmes de numération",
  short: "Numération",
  sub: "Chiffre/nombre, valeur positionnelle, grands nombres, autres bases",
  objectifs: [
    "Distinguer <b>chiffre</b> et <b>nombre</b>, <b>chiffre des dizaines</b> et <b>nombre de dizaines</b> (question classique et piégeuse).",
    "Décomposer un nombre de plusieurs façons (additive, multiplicative, avec les puissances de 10).",
    "Comprendre le principe de notre numération (<b>décimale</b> et <b>positionnelle</b>) et savoir écrire un nombre dans une autre base (base 2, base 5…).",
    "Lire et écrire les grands nombres en chiffres et en lettres (règles d’orthographe des nombres).",
    "Analyser une erreur d’élève liée à la numération (le zéro, l’écriture « comme on entend »)."
  ],
  lesson: `
<h2>1. Chiffre ou nombre ? La base de tout</h2>
<p>Imagine les lettres de l’alphabet : avec 26 lettres, on écrit tous les mots. En maths, c’est pareil : avec seulement <b>10 chiffres</b> (0, 1, 2, 3, 4, 5, 6, 7, 8, 9), on écrit <b>tous les nombres</b>.</p>
<div class="box def"><span class="box-title">Définitions</span>
<ul><li>Un <b>chiffre</b> est un <b>symbole</b> (comme une lettre). Il y en a 10.</li>
<li>Un <b>nombre</b> est une <b>quantité</b> (comme un mot). Il s’écrit avec un ou plusieurs chiffres.</li></ul>
Exemple : « 7 » est à la fois un chiffre et un nombre (comme « a » est une lettre et un mot). « 742 » est un nombre écrit avec trois chiffres.</div>

<h2>2. Une numération décimale et positionnelle</h2>
<p>Notre système a deux propriétés qu’il faut savoir <b>nommer</b> au concours :</p>
<ol>
<li><b>Décimale</b> (base 10) : on fait des <b>groupements par 10</b>. 10 unités = 1 dizaine ; 10 dizaines = 1 centaine ; 10 centaines = 1 millier, etc.</li>
<li><b>Positionnelle</b> : la valeur d’un chiffre dépend de sa <b>place</b> dans le nombre. Dans 333, le premier 3 vaut 300, le deuxième 30, le dernier 3.</li>
</ol>
<p>Le chiffre <b>0</b> est indispensable : il indique qu’une position est <b>vide</b>. Dans 405, le 0 dit « il n’y a aucune dizaine isolée ». Sans lui, on confondrait 405 et 45.</p>

<table><tr><th>Classe des millions</th><th colspan="3">Classe des mille</th><th colspan="3">Classe des unités simples</th></tr>
<tr><td>unités de millions</td><td>centaines de mille</td><td>dizaines de mille</td><td>unités de mille</td><td>centaines</td><td>dizaines</td><td>unités</td></tr>
<tr><td>4</td><td>2</td><td>0</td><td>7</td><td>5</td><td>3</td><td>8</td></tr></table>
<p>Le nombre ci-dessus s’écrit <b>4 207 538</b> (on laisse un espace entre chaque classe de 3 chiffres).</p>

<h2>3. LE piège classique : « chiffre des » ≠ « nombre de »</h2>
<div class="box warn"><span class="box-title">À savoir par cœur</span>
Prenons <b>4 207 538</b>.
<ul><li>Le <b>chiffre des dizaines</b> est <b>3</b> (on regarde seulement la colonne des dizaines).</li>
<li>Le <b>nombre de dizaines</b> est <b>420 753</b> (on compte toutes les dizaines contenues dans le nombre : on « coupe » le nombre juste après la colonne des dizaines).</li>
<li>Le <b>chiffre des centaines</b> est 5 ; le <b>nombre de centaines</b> est 42 075.</li>
<li>Le <b>chiffre des milliers</b> est 7 ; le <b>nombre de milliers</b> est 4 207.</li></ul></div>
<p><b>Astuce de prof</b> : pour trouver le nombre de dizaines, cache avec ton doigt tout ce qui est à droite de la colonne des dizaines. Ce qui reste visible, c’est le nombre de dizaines.</p>

<h2>4. Décomposer un nombre</h2>
<p>Prenons 3 052. On peut l’écrire :</p>
<ul>
<li><b>Décomposition additive</b> : 3 000 + 50 + 2</li>
<li><b>Décomposition multiplicative (canonique)</b> : (3 × 1 000) + (0 × 100) + (5 × 10) + (2 × 1)</li>
<li><b>Avec les puissances de 10</b> : 3 × 10³ + 0 × 10² + 5 × 10¹ + 2 × 10⁰ (rappel : 10⁰ = 1)</li>
<li><b>Décompositions non canoniques</b> (très utilisées à l’école) : 30 centaines + 52 unités ; 305 dizaines + 2 unités.</li>
</ul>

<h2>5. Écrire les nombres en lettres (orthographe)</h2>
<div class="box def"><span class="box-title">Les règles (réforme de 1990, recommandée à l’école)</span>
<ul><li>On met des <b>traits d’union</b> entre <b>tous</b> les mots : vingt-et-un, deux-cent-trois, mille-cinq-cents.</li>
<li><b>Vingt</b> et <b>cent</b> prennent un <b>s</b> quand ils sont <b>multipliés et terminent</b> le nombre : quatre-vingts, trois-cents ; mais quatre-vingt-deux, trois-cent-cinq.</li>
<li><b>Mille</b> est <b>invariable</b> : deux-mille, trois-mille.</li>
<li><b>Million</b> et <b>milliard</b> sont des <b>noms</b> : ils prennent un s au pluriel (deux millions).</li></ul></div>
<p>Avec l’orthographe traditionnelle (aussi acceptée), le trait d’union ne s’utilise qu’entre les mots inférieurs à cent, sauf avec « et » : vingt et un, deux cent trois.</p>

<h2>6. Les autres bases : comprendre en profondeur</h2>
<p>Le concours aime demander d’écrire un nombre dans une <b>autre base</b>, car cela montre si tu as compris le principe des groupements.</p>
<p>En <b>base 5</b>, on groupe par <b>5</b> (au lieu de 10) et on n’utilise que les chiffres 0, 1, 2, 3, 4. Les positions valent 1, 5, 25 (=5²), 125 (=5³)…</p>
<div class="box ex"><span class="box-title">Exemple 1 : de la base 5 vers la base 10</span>
Le nombre noté (231)<sub>5</sub> vaut : 2 × 25 + 3 × 5 + 1 × 1 = 50 + 15 + 1 = <b>66</b>.</div>
<div class="box ex"><span class="box-title">Exemple 2 : de la base 10 vers la base 2 (méthode des divisions successives)</span>
Écrire 13 en base 2 : on divise par 2 et on note les restes.<br>
13 = 2 × 6 + <b>1</b> ; 6 = 2 × 3 + <b>0</b> ; 3 = 2 × 1 + <b>1</b> ; 1 = 2 × 0 + <b>1</b>.<br>
On lit les restes <b>de bas en haut</b> : 13 = (1101)<sub>2</sub>. Vérification : 8 + 4 + 0 + 1 = 13 ✔</div>
<div class="box ex"><span class="box-title">Exemple 3 : méthode des puissances (plus intuitive)</span>
Écrire 87 en base 5. Puissances de 5 : 1, 5, 25, 125. 125 &gt; 87, donc on commence par 25.<br>
Dans 87, il y a 3 fois 25 (75), reste 12. Dans 12, il y a 2 fois 5 (10), reste 2. Donc 87 = (322)<sub>5</sub>.</div>

<h2>7. Comprendre les erreurs des élèves</h2>
<ul>
<li>Un élève écrit « 50034 » pour « cinq-cent-trente-quatre » : il écrit <b>comme il entend</b> (500 puis 34). Il n’a pas compris que la position remplace les mots.</li>
<li>Un élève écrit « 48 » pour « quatre-cent-huit » : il <b>oublie le zéro</b>, qui marque l’absence de dizaines.</li>
<li>Un élève dit que dans 356 il y a 5 dizaines : il confond <b>chiffre</b> des dizaines et <b>nombre</b> de dizaines (il y en a 35).</li>
</ul>
<p>Au concours, quand on te demande d’analyser une erreur : 1) <b>décris</b> ce que l’élève a fait, 2) fais une <b>hypothèse</b> sur l’origine (ce qu’il n’a pas compris), 3) propose une <b>aide</b> (matériel de numération, tableau de numération, groupements de bûchettes par 10).</p>
`,
  videos: [
    { t: "Lire et écrire les grands nombres", ch: "Yvan Monka (M@ths et tiques)", q: "Yvan Monka lire et écrire un nombre entier" },
    { t: "Chiffre des dizaines / nombre de dizaines", ch: "Lumni / Les Fondamentaux", q: "chiffre des dizaines nombre de dizaines CM1" },
    { t: "Changer de base : base 2, base 5", ch: "Yvan Monka", q: "Yvan Monka écrire un nombre en base 2 binaire" },
    { t: "Numération CRPE : bases et numération de position", ch: "Préparation CRPE", q: "CRPE maths numération base 5 exercice corrigé" }
  ],
  resume: "<ul><li>10 chiffres pour écrire une infinité de nombres. Numération <b>décimale</b> (groupements par 10) et <b>positionnelle</b> (la place donne la valeur).</li><li><b>Chiffre des</b> centaines = un seul chiffre ; <b>nombre de</b> centaines = tout ce qui est à gauche, colonne des centaines comprise.</li><li>En base b, les positions valent 1, b, b², b³… et on utilise les chiffres de 0 à b−1.</li></ul>",
  exercises: [
    { q: "Dans le nombre 58 436, quel est le <b>chiffre</b> des centaines ?", answers: ["4"], expl: "On regarde uniquement la colonne des centaines : 58 <b>4</b>36 → 4." },
    { q: "Dans le nombre 58 436, quel est le <b>nombre</b> de centaines ?", answers: ["584"], expl: "On cache tout ce qui est à droite de la colonne des centaines : 584|36. Il y a 584 centaines (584 × 100 = 58 400, et il reste 36)." },
    { q: "Combien y a-t-il de dizaines dans 7 090 ?", answers: ["709"], expl: "7 090 = 709 × 10. Le nombre de dizaines est 709 (le chiffre des dizaines, lui, est 9)." },
    { q: "Quel nombre correspond à : 4 × 10³ + 6 × 10 + 2 ?", answers: ["4062", "4 062"], expl: "4 × 1 000 + 0 × 100 + 6 × 10 + 2 = 4 062. Attention : il n’y a pas de centaines, donc un 0 à cette position." },
    { q: "Quelle écriture est correcte (orthographe recommandée de 1990) pour 280 ?", choices: ["deux cent quatre-vingt", "deux-cent-quatre-vingts", "deux-cents-quatre-vingts", "deux-cent-quatre-vingt"], answer: 1, expl: "Traits d’union partout. « Cent » est multiplié mais ne termine pas le nombre → pas de s. « Vingt » est multiplié (quatre-vingts) ET termine le nombre → s." },
    { q: "Convertis (213)<sub>5</sub> en base 10.", answers: ["58"], expl: "2 × 25 + 1 × 5 + 3 × 1 = 50 + 5 + 3 = 58." },
    { q: "Écris 11 en base 2 (réponds avec les chiffres seulement, ex. 101).", answers: ["1011"], expl: "11 = 8 + 2 + 1 = 1×8 + 0×4 + 1×2 + 1×1 → 1011." },
    { q: "Vrai ou faux : « Le chiffre 0 ne sert à rien dans 305 car il ne vaut rien. »", type: "vf", answer: 1, expl: "Faux ! Le zéro indique qu’une position est vide. Sans lui, 305 deviendrait 35. C’est ce qui rend possible une numération positionnelle." },
    { q: "Un élève écrit « 200 7 » ou « 2007 » quand on lui dicte « deux-cent-sept ». Analyse son erreur et propose une remédiation.", type: "open", model: "<p><b>Description</b> : l’élève a écrit 2007 au lieu de 207 : il juxtapose « 200 » et « 7 » comme il les entend.</p><p><b>Hypothèse</b> : il n’a pas compris le caractère <b>positionnel</b> de la numération : il croit qu’il faut écrire « 200 » en entier puis « 7 », alors que la position du chiffre suffit à indiquer sa valeur.</p><p><b>Remédiation</b> : utiliser un tableau de numération (centaines / dizaines / unités) et du matériel (plaques de 100, barres de 10, cubes). Faire placer 2 centaines, 0 dizaine et 7 unités, puis écrire un chiffre par colonne. On peut aussi utiliser des « cartes Montessori » superposables (200 + 7 se superposent pour donner 207).</p>" }
  ],
  evaluation: [
    { q: "Dans 3 609 245, quel est le chiffre des dizaines de mille ?", answers: ["0"], expl: "3 | 6 0 9 | 2 4 5 : classe des mille = 609 ; dizaines de mille = 0." },
    { q: "Combien y a-t-il de milliers dans 3 609 245 ?", answers: ["3609", "3 609"], expl: "On coupe après la colonne des unités de mille : 3 609." },
    { q: "Quelle est la décomposition de 50 703 ?", choices: ["5 × 10⁴ + 7 × 10² + 3", "5 × 10⁵ + 7 × 10³ + 3", "5 × 10⁴ + 7 × 10³ + 3", "5 × 10³ + 7 × 10² + 3"], answer: 0, expl: "5 dizaines de mille (10⁴), 0 millier, 7 centaines (10²), 0 dizaine, 3 unités." },
    { q: "Convertis (1010)<sub>2</sub> en base 10.", answers: ["10"], expl: "1×8 + 0×4 + 1×2 + 0×1 = 10." },
    { q: "Écris 40 en base 5 (chiffres seulement).", answers: ["130"], expl: "40 = 1 × 25 + 3 × 5 + 0 → (130)₅." },
    { q: "Quelle écriture est correcte pour 1 200 (orthographe de 1990) ?", choices: ["mille-deux-cents", "milles-deux-cents", "mille-deux-cent", "mil deux cent"], answer: 0, expl: "Mille est invariable ; cent est multiplié et termine le nombre → cents." },
    { q: "Vrai ou faux : notre numération est dite « positionnelle » car on fait des groupements par dix.", type: "vf", answer: 1, expl: "Faux : les groupements par 10 la rendent <b>décimale</b>. Elle est <b>positionnelle</b> parce que la valeur d’un chiffre dépend de sa position." },
    { q: "En base 5, quel est le plus grand chiffre utilisable ?", answers: ["4"], expl: "En base b, on utilise les chiffres de 0 à b − 1, soit de 0 à 4." },
    { q: "Combien de nombres entiers s’écrivent avec exactement 3 chiffres ?", answers: ["900"], expl: "De 100 à 999 : 999 − 100 + 1 = 900." },
    { q: "Un élève affirme que dans 2 485 il y a 8 dizaines. Explique-lui son erreur comme tu le ferais en classe.", type: "open", model: "<p>Le chiffre des dizaines est bien 8, mais le <b>nombre</b> de dizaines est 248 : 2 485 = 248 dizaines et 5 unités. Pour le montrer : 1 millier = 100 dizaines, donc 2 milliers = 200 dizaines ; 4 centaines = 40 dizaines ; plus 8 dizaines → 200 + 40 + 8 = 248 dizaines. Avec du matériel, on « casse » les milliers et centaines en barres de dix et on compte les barres.</p>" }
  ]
});

window.MATHS.chapters.push({
  id: 2,
  title: "Les quatre opérations et le calcul",
  short: "Opérations",
  sub: "Sens des opérations, priorités, techniques opératoires, division euclidienne",
  objectifs: [
    "Connaître le vocabulaire : somme, différence, produit, quotient, terme, facteur, dividende, diviseur, reste.",
    "Appliquer les <b>priorités opératoires</b> sans erreur, avec et sans parenthèses.",
    "Maîtriser la <b>division euclidienne</b> et écrire l’égalité a = b × q + r avec 0 ≤ r &lt; b.",
    "Utiliser les propriétés (commutativité, associativité, distributivité) pour calculer mentalement.",
    "Résoudre des problèmes en choisissant la bonne opération (problèmes additifs et multiplicatifs)."
  ],
  lesson: `
<h2>1. Le vocabulaire des opérations</h2>
<table><tr><th>Opération</th><th>Exemple</th><th>Les nombres s’appellent</th><th>Le résultat s’appelle</th></tr>
<tr><td>Addition</td><td>12 + 5 = 17</td><td>les <b>termes</b></td><td>la <b>somme</b></td></tr>
<tr><td>Soustraction</td><td>12 − 5 = 7</td><td>les <b>termes</b></td><td>la <b>différence</b></td></tr>
<tr><td>Multiplication</td><td>12 × 5 = 60</td><td>les <b>facteurs</b></td><td>le <b>produit</b></td></tr>
<tr><td>Division</td><td>12 ÷ 5 = 2,4</td><td><b>dividende</b> (12) et <b>diviseur</b> (5)</td><td>le <b>quotient</b></td></tr></table>
<p>Ce vocabulaire est très important : une question du type « Calculer le produit de la somme de 3 et 4 par 5 » signifie <span class="formula">(3 + 4) × 5 = 35</span>.</p>

<h2>2. Les priorités opératoires</h2>
<div class="box def"><span class="box-title">La règle, dans l’ordre</span>
<ol><li>On calcule d’abord ce qui est <b>entre parenthèses</b> (en commençant par les plus intérieures).</li>
<li>Puis les <b>puissances</b>.</li>
<li>Puis les <b>multiplications et divisions</b>, de gauche à droite.</li>
<li>Enfin les <b>additions et soustractions</b>, de gauche à droite.</li></ol></div>
<div class="box ex"><span class="box-title">Exemples pas à pas</span>
<p>A = 5 + 3 × 4 = 5 + 12 = <b>17</b> (et non 32 !)</p>
<p>B = 20 − 8 ÷ 2 + 1 = 20 − 4 + 1 = <b>17</b></p>
<p>C = 2 × (7 − 3)² = 2 × 4² = 2 × 16 = <b>32</b></p>
<p>D = 18 ÷ 3 × 2 = 6 × 2 = <b>12</b> (de gauche à droite : on ne fait pas 3 × 2 d’abord !)</p></div>

<h2>3. Les propriétés qui rendent le calcul mental facile</h2>
<ul>
<li><b>Commutativité</b> : l’ordre ne compte pas pour + et × : 4 + 9 = 9 + 4 ; 25 × 7 × 4 = 25 × 4 × 7 = 700. <b>Faux</b> pour − et ÷.</li>
<li><b>Associativité</b> : on peut regrouper comme on veut : (17 + 8) + 2 = 17 + (8 + 2) = 27.</li>
<li><b>Distributivité</b> de × sur + et − : <span class="formula">k × (a + b) = k × a + k × b</span>.<br>
Exemple de calcul mental : 23 × 99 = 23 × (100 − 1) = 2 300 − 23 = 2 277.</li>
</ul>

<h2>4. La division euclidienne (division avec reste)</h2>
<p>Elle répond à la question : « Combien de fois b dans a, et combien il reste ? ».</p>
<div class="box def"><span class="box-title">Définition</span>
Effectuer la division euclidienne de a par b (b ≠ 0), c’est trouver deux entiers <b>q</b> (le quotient) et <b>r</b> (le reste) tels que :
<p class="center"><span class="formula">a = b × q + r</span> &nbsp; avec &nbsp; <span class="formula">0 ≤ r &lt; b</span></p>
La condition <b>r &lt; b</b> est essentielle : sinon on pourrait encore « mettre une fois b ».</div>
<div class="box ex"><span class="box-title">Exemple</span>
Division euclidienne de 87 par 6 : 6 × 14 = 84 et 87 − 84 = 3. Donc <b>87 = 6 × 14 + 3</b>, avec 3 &lt; 6 ✔.<br>
⚠ L’égalité 87 = 6 × 13 + 9 est vraie, mais ce n’est <b>pas</b> la division euclidienne de 87 par 6 car 9 &gt; 6.<br>
Remarque : comme 3 &lt; 14, cette même égalité traduit aussi la division euclidienne de 87 par 14 (quotient 6, reste 3).</div>
<p><b>Interpréter le reste dans un problème</b> : « 87 élèves, des bus de 6 places… » → il faut 15 bus (14 pleins + 1 pour les 3 restants). Le contexte décide si on arrondit au-dessus ou non.</p>

<h2>5. Les techniques opératoires posées</h2>
<p>Tu dois savoir poser l’addition (avec retenues), la soustraction (méthode par emprunt ou par compensation), la multiplication (en décalant d’un rang à chaque ligne) et la division (potence).</p>
<div class="box ex"><span class="box-title">La soustraction par compensation (« on ajoute 10 en haut et en bas »)</span>
Pour 52 − 27 : 2 − 7 impossible, on ajoute 10 unités en haut (12 − 7 = 5) et 1 dizaine en bas (2 + 1 = 3 dizaines) : 5 − 3 = 2. Résultat : 25. Cela repose sur la propriété : <b>a − b = (a + 10) − (b + 10)</b>.</div>
<div class="box ex"><span class="box-title">La division posée 742 ÷ 5</span>
On cherche dans 7 centaines : 1 fois 5, reste 2 → on abaisse le 4 : 24 dizaines, 4 fois 5 = 20, reste 4 → on abaisse le 2 : 42 unités, 8 fois 5 = 40, reste 2. Quotient 148, reste 2. Vérification : 5 × 148 + 2 = 742 ✔.</div>

<h2>6. Choisir la bonne opération : typologie de Vergnaud</h2>
<p>Gérard Vergnaud a classé les problèmes. C’est une référence au CRPE :</p>
<ul>
<li><b>Problèmes additifs</b> : <i>composition</i> de deux états (12 filles et 15 garçons → combien d’élèves ?), <i>transformation</i> d’un état (j’avais 12 billes, j’en gagne 5…), <i>comparaison</i> (Paul a 5 billes de plus que Léa…).</li>
<li><b>Problèmes multiplicatifs</b> : <i>proportionnalité simple</i> (1 cahier coûte 3 €, combien coûtent 7 cahiers ?), <i>produit de mesures</i> (3 pantalons et 4 chemises : combien de tenues ?), <i>comparaison multiplicative</i> (« 3 fois plus »).</li>
<li>Pour la division, on distingue <b>la division-partage</b> (« 24 bonbons pour 6 enfants : combien chacun ? ») et <b>la division-quotition</b> (« 24 bonbons par paquets de 6 : combien de paquets ? »).</li>
</ul>
<div class="box warn"><span class="box-title">Piège</span>« Paul a 5 billes de <b>plus</b> que Léa. Paul a 12 billes. Combien en a Léa ? » → on fait une <b>soustraction</b> (12 − 5 = 7) alors que le mot « plus » apparaît : c’est ce qu’on appelle un problème à « indice trompeur ».</div>
`,
  videos: [
    { t: "Priorités opératoires", ch: "Yvan Monka", q: "Yvan Monka priorités opératoires" },
    { t: "Division euclidienne", ch: "Yvan Monka", q: "Yvan Monka division euclidienne" },
    { t: "Poser une division", ch: "Les Bons Profs", q: "les bons profs poser une division" },
    { t: "Typologie des problèmes de Vergnaud", ch: "Préparation CRPE", q: "CRPE typologie Vergnaud problèmes additifs multiplicatifs" }
  ],
  resume: "<ul><li>Priorités : parenthèses → puissances → × et ÷ (de gauche à droite) → + et −.</li><li>Division euclidienne : a = b × q + r avec 0 ≤ r &lt; b.</li><li>k(a + b) = ka + kb : l’outil n°1 du calcul mental.</li></ul>",
  exercises: [
    { q: "Calcule : 7 + 3 × 5", answers: ["22"], expl: "La multiplication est prioritaire : 3 × 5 = 15, puis 7 + 15 = 22." },
    { q: "Calcule : (7 + 3) × 5", answers: ["50"], expl: "Parenthèses d’abord : 10 × 5 = 50." },
    { q: "Calcule : 48 ÷ 4 × 2", answers: ["24"], expl: "De gauche à droite : 48 ÷ 4 = 12, puis 12 × 2 = 24." },
    { q: "Calcule : 30 − 2 × 3²", answers: ["12"], expl: "Puissance : 3² = 9 ; multiplication : 2 × 9 = 18 ; soustraction : 30 − 18 = 12." },
    { q: "Calcule mentalement 25 × 36 (astuce : 36 = 4 × 9).", answers: ["900"], expl: "25 × 4 × 9 = 100 × 9 = 900." },
    { q: "Calcule mentalement 47 × 101.", answers: ["4747"], expl: "47 × (100 + 1) = 4 700 + 47 = 4 747 (distributivité)." },
    { q: "Dans la division euclidienne de 158 par 12, quel est le reste ?", answers: ["2"], expl: "12 × 13 = 156 ; 158 − 156 = 2. Donc 158 = 12 × 13 + 2 avec 2 &lt; 12." },
    { q: "L’égalité 100 = 7 × 13 + 9 traduit-elle la division euclidienne de 100 par 7 ?", choices: ["Oui", "Non, car 9 ≥ 7", "Non, car 13 > 7"], answer: 1, expl: "Le reste doit être strictement inférieur au diviseur. Ici 9 ≥ 7. La bonne écriture : 100 = 7 × 14 + 2." },
    { q: "Et traduit-elle la division euclidienne de 100 par 13 ?", choices: ["Oui, car 9 < 13", "Non"], answer: 0, expl: "Diviseur 13, quotient 7, reste 9 et 9 &lt; 13 : c’est bien la division euclidienne de 100 par 13." },
    { q: "Une école emmène 125 élèves en sortie. Un car contient 48 places. Combien de cars faut-il réserver au minimum ?", answers: ["3"], expl: "125 = 48 × 2 + 29 : 2 cars pleins ne suffisent pas, il reste 29 élèves, il faut donc un 3ᵉ car." },
    { q: "« 36 crayons sont rangés par boîtes de 6. Combien de boîtes ? » C’est une division…", choices: ["partage", "quotition"], answer: 1, expl: "On connaît la taille de chaque part (6) et on cherche le nombre de parts : c’est une <b>quotition</b>." }
  ],
  evaluation: [
    { q: "Calcule : 12 − 4 × 2 + 6", answers: ["10"], expl: "4 × 2 = 8 ; 12 − 8 + 6 = 10." },
    { q: "Calcule : 2 × (3 + 4)² − 10", answers: ["88"], expl: "(7)² = 49 ; 2 × 49 = 98 ; 98 − 10 = 88." },
    { q: "Calcule : 60 ÷ (2 + 3) × 2", answers: ["24"], expl: "60 ÷ 5 = 12 ; 12 × 2 = 24." },
    { q: "Calcule mentalement 99 × 15.", answers: ["1485"], expl: "(100 − 1) × 15 = 1 500 − 15 = 1 485." },
    { q: "Quel est le quotient dans la division euclidienne de 250 par 9 ?", answers: ["27"], expl: "9 × 27 = 243 ; 250 − 243 = 7 &lt; 9. Quotient 27, reste 7." },
    { q: "Quelle propriété utilise-t-on dans 8 × 57 = 8 × 50 + 8 × 7 ?", choices: ["commutativité", "associativité", "distributivité", "transitivité"], answer: 2, expl: "On distribue le facteur 8 sur la somme 50 + 7." },
    { q: "Le produit de la somme de 5 et 3 par leur différence vaut :", answers: ["16"], expl: "(5 + 3) × (5 − 3) = 8 × 2 = 16." },
    { q: "« Léa a 18 ans. Elle a 4 ans de plus que son frère. » Quel âge a son frère ?", answers: ["14"], expl: "Problème de comparaison : 18 − 4 = 14. Le mot « plus » induit une soustraction ici." },
    { q: "Dans a = b × q + r, quelle condition sur r définit la division euclidienne (b > 0) ?", choices: ["r < q", "0 ≤ r < b", "r ≤ b", "r > 0"], answer: 1, expl: "Le reste doit être <b>positif ou nul</b> et <b>strictement plus petit que le diviseur b</b> : 0 ≤ r &lt; b. Sinon, on pourrait encore faire un « paquet » de plus. Piège : comparer r au quotient q, ça n’a pas de sens." },
    { q: "Un fleuriste a 87 roses et fait des bouquets de 12 roses. Combien de bouquets complets et combien de roses restantes ? Rédige avec l’égalité de la division euclidienne.", type: "open", model: "<p>87 = 12 × 7 + 3 avec 3 &lt; 12. Le fleuriste peut faire <b>7 bouquets complets</b> et il lui reste <b>3 roses</b>.</p>" }
  ]
});

window.MATHS.chapters.push({
  id: 3,
  title: "Multiples, diviseurs et nombres premiers",
  short: "Arithmétique",
  sub: "Critères de divisibilité, nombres premiers, décomposition, PGCD, PPCM",
  objectifs: [
    "Utiliser les mots <b>multiple, diviseur, divisible</b> correctement dans les deux sens.",
    "Connaître et justifier les <b>critères de divisibilité</b> par 2, 3, 4, 5, 9, 10.",
    "Reconnaître un <b>nombre premier</b> et décomposer un nombre en produit de facteurs premiers.",
    "Calculer un <b>PGCD</b> et un <b>PPCM</b>, et les utiliser dans des problèmes (partages, rendez-vous).",
    "Rendre une fraction <b>irréductible</b>."
  ],
  lesson: `
<h2>1. Multiple et diviseur : deux façons de dire la même chose</h2>
<div class="box def"><span class="box-title">Définition</span>
a et b sont des entiers (b ≠ 0). Si a = b × k avec k entier, on dit que :
<ul><li><b>a est un multiple de b</b> ;</li><li><b>b est un diviseur de a</b> ;</li><li><b>a est divisible par b</b> ;</li><li>le reste de la division euclidienne de a par b est <b>0</b>.</li></ul></div>
<p>Exemple : 35 = 7 × 5. Donc 35 est un multiple de 7, 7 est un diviseur de 35, 35 est divisible par 7 (et par 5).</p>
<p>⚠ 0 est multiple de tous les nombres (0 = b × 0). 1 est diviseur de tous les nombres. Tout nombre est multiple et diviseur de lui-même.</p>

<h2>2. Les critères de divisibilité</h2>
<table><tr><th>Divisible par</th><th>Critère</th><th>Exemple</th></tr>
<tr><td>2</td><td>le chiffre des unités est 0, 2, 4, 6 ou 8 (nombre pair)</td><td>3 518</td></tr>
<tr><td>3</td><td>la <b>somme des chiffres</b> est divisible par 3</td><td>4 125 : 4+1+2+5 = 12 ✔</td></tr>
<tr><td>4</td><td>le nombre formé par les <b>deux derniers chiffres</b> est divisible par 4</td><td>7 316 : 16 ✔</td></tr>
<tr><td>5</td><td>le chiffre des unités est 0 ou 5</td><td>8 735</td></tr>
<tr><td>9</td><td>la <b>somme des chiffres</b> est divisible par 9</td><td>7 245 : 7+2+4+5 = 18 ✔</td></tr>
<tr><td>10</td><td>le chiffre des unités est 0</td><td>4 560</td></tr></table>
<div class="box tip"><span class="box-title">Pourquoi le critère de 9 marche (justification attendue au concours)</span>
Prenons 7 245 = 7 × 1000 + 2 × 100 + 4 × 10 + 5. Or 1000 = 999 + 1, 100 = 99 + 1, 10 = 9 + 1.<br>
Donc 7 245 = (7 × 999 + 2 × 99 + 4 × 9) + (7 + 2 + 4 + 5). La première parenthèse est un multiple de 9 (car 999, 99 et 9 le sont). Donc 7 245 est divisible par 9 <b>si et seulement si</b> la somme 7 + 2 + 4 + 5 l’est. Même raisonnement pour 3.</div>
<p>Pour 6 : divisible par 2 <b>et</b> par 3. Pour 15 : par 3 <b>et</b> par 5. (Cela marche car 2 et 3 n’ont pas de diviseur commun autre que 1.) ⚠ Divisible par 2 et 4 ne veut pas dire divisible par 8 (ex. 12).</p>

<h2>3. Les nombres premiers</h2>
<div class="box def"><span class="box-title">Définition</span>Un nombre <b>premier</b> est un entier qui a <b>exactement deux diviseurs</b> : 1 et lui-même.</div>
<p>Les nombres premiers inférieurs à 50 (à connaître) : <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>.</p>
<ul><li><b>1 n’est pas premier</b> (il n’a qu’un seul diviseur).</li><li><b>2</b> est le seul nombre premier pair.</li><li>Il y a une infinité de nombres premiers (démontré par Euclide).</li></ul>
<p><b>Méthode pour savoir si n est premier</b> : on teste la divisibilité par les nombres premiers 2, 3, 5, 7, 11… tant que leur carré est inférieur ou égal à n. Ex. : 97 ? On teste 2, 3, 5, 7 (car 11² = 121 &gt; 97). Aucun ne divise 97 → 97 est premier.</p>

<h2>4. Décomposer en produit de facteurs premiers</h2>
<p>Tout entier ≥ 2 s’écrit de façon <b>unique</b> comme produit de nombres premiers.</p>
<div class="box ex"><span class="box-title">Exemple : décomposer 360</span>
360 ÷ 2 = 180 ; 180 ÷ 2 = 90 ; 90 ÷ 2 = 45 ; 45 ÷ 3 = 15 ; 15 ÷ 3 = 5 ; 5 ÷ 5 = 1.<br>
Donc <b>360 = 2³ × 3² × 5</b>.</div>

<h2>5. PGCD et PPCM</h2>
<p><b>PGCD</b> = Plus Grand Commun Diviseur. <b>PPCM</b> = Plus Petit Commun Multiple (non nul).</p>
<div class="box ex"><span class="box-title">Méthode 1 : avec les décompositions</span>
84 = 2² × 3 × 7 et 90 = 2 × 3² × 5.<br>
PGCD : on prend les facteurs <b>communs</b> avec le <b>plus petit</b> exposant : 2 × 3 = <b>6</b>.<br>
PPCM : on prend <b>tous</b> les facteurs avec le <b>plus grand</b> exposant : 2² × 3² × 5 × 7 = <b>1 260</b>.</div>
<div class="box ex"><span class="box-title">Méthode 2 : algorithme d’Euclide (divisions successives)</span>
PGCD(84 ; 90) : 90 = 84 × 1 + 6 ; 84 = 6 × 14 + 0. Le dernier reste non nul est <b>6</b>.</div>
<p><b>Propriété utile</b> : PGCD(a ; b) × PPCM(a ; b) = a × b. (6 × 1 260 = 7 560 = 84 × 90 ✔)</p>
<p><b>Nombres premiers entre eux</b> : deux nombres dont le PGCD vaut 1 (ex. 8 et 15).</p>

<h2>6. Les problèmes types</h2>
<ul>
<li><b>« Le plus grand nombre de paquets identiques »</b> → PGCD. Ex. : 84 billes rouges et 90 bleues dans des sachets identiques, sans reste : au plus 6 sachets, chacun avec 14 rouges et 15 bleues.</li>
<li><b>« La prochaine fois qu’ils se retrouvent »</b> → PPCM. Ex. : un phare clignote toutes les 12 s, un autre toutes les 18 s. Ils clignotent ensemble toutes les PPCM(12 ; 18) = 36 s.</li>
<li><b>Fraction irréductible</b> : on divise numérateur et dénominateur par leur PGCD : 84/90 = 14/15.</li>
</ul>
`,
  videos: [
    { t: "Critères de divisibilité", ch: "Yvan Monka", q: "Yvan Monka critères de divisibilité" },
    { t: "Décomposer en facteurs premiers", ch: "Yvan Monka", q: "Yvan Monka décomposer un nombre en produit de facteurs premiers" },
    { t: "PGCD : algorithme d’Euclide", ch: "Yvan Monka", q: "Yvan Monka PGCD algorithme d'Euclide" },
    { t: "Problèmes PGCD / PPCM", ch: "Les Bons Profs", q: "problème PGCD PPCM exercice corrigé 3e" }
  ],
  resume: "<ul><li>a multiple de b ⇔ b diviseur de a ⇔ reste nul.</li><li>Critères 3 et 9 : somme des chiffres. Critère de 4 : deux derniers chiffres.</li><li>Premier = exactement 2 diviseurs (1 n’est pas premier).</li><li>PGCD → partages ; PPCM → rendez-vous.</li></ul>",
  exercises: [
    { q: "Le nombre 2 142 est-il divisible par 9 ?", choices: ["Oui", "Non"], answer: 0, expl: "Somme des chiffres : 2 + 1 + 4 + 2 = 9, qui est divisible par 9. Donc 2 142 est divisible par 9 (2 142 = 9 × 238)." },
    { q: "Quel est le plus petit nombre premier ?", answers: ["2"], expl: "1 n’est pas premier (un seul diviseur). Le plus petit est 2." },
    { q: "Le nombre 91 est-il premier ?", choices: ["Oui", "Non"], answer: 1, expl: "91 = 7 × 13. Piège très fréquent !" },
    { q: "Décompose 72 en produit de facteurs premiers (écris par ex. 2^3×3^2).", answers: ["2^3×3^2", "2^3*3^2", "2³×3²", "2×2×2×3×3", "2^3x3^2", "2*2*2*3*3"], numeric: false, expl: "72 = 8 × 9 = 2³ × 3²." },
    { q: "Calcule PGCD(48 ; 60).", answers: ["12"], expl: "48 = 2⁴ × 3 ; 60 = 2² × 3 × 5 → PGCD = 2² × 3 = 12. Ou Euclide : 60 = 48 × 1 + 12 ; 48 = 12 × 4 + 0." },
    { q: "Calcule PPCM(6 ; 8).", answers: ["24"], expl: "6 = 2 × 3 ; 8 = 2³ → PPCM = 2³ × 3 = 24." },
    { q: "Rends la fraction 48/60 irréductible.", answers: ["4/5"], numeric: false, expl: "On divise par le PGCD 12 : 48/60 = 4/5." },
    { q: "Deux bus partent ensemble à 8 h. L’un repasse toutes les 15 min, l’autre toutes les 20 min. À quelle heure repartiront-ils ensemble pour la première fois ? (format 9h00)", answers: ["9h00", "9h", "9 h", "9:00", "9h00min"], numeric: false, expl: "PPCM(15 ; 20) = 60 min. Ils se retrouvent à 9 h." },
    { q: "Justifie que tout nombre dont la somme des chiffres est divisible par 3 est divisible par 3, sur l’exemple de 471.", type: "open", model: "<p>471 = 4 × 100 + 7 × 10 + 1 = 4 × (99 + 1) + 7 × (9 + 1) + 1 = (4 × 99 + 7 × 9) + (4 + 7 + 1). La première partie est un multiple de 3 (car 99 et 9 sont des multiples de 3). Donc 471 est divisible par 3 si et seulement si 4 + 7 + 1 = 12 l’est : c’est le cas, donc 471 est divisible par 3 (471 = 3 × 157).</p>" }
  ],
  evaluation: [
    { q: "Lequel de ces nombres est divisible par 4 ?", choices: ["1 342", "2 718", "5 316", "7 450"], answer: 2, expl: "On regarde les deux derniers chiffres : 42, 18, 16, 50. Seul 16 est divisible par 4." },
    { q: "Lequel de ces nombres est premier ?", choices: ["51", "57", "59", "87"], answer: 2, expl: "51 = 3 × 17 ; 57 = 3 × 19 ; 87 = 3 × 29 ; 59 n’est divisible ni par 2, 3, 5, 7." },
    { q: "Combien le nombre 12 a-t-il de diviseurs ?", answers: ["6"], expl: "1, 2, 3, 4, 6, 12." },
    { q: "Calcule PGCD(126 ; 84).", answers: ["42"], expl: "126 = 84 × 1 + 42 ; 84 = 42 × 2 + 0 → 42." },
    { q: "Calcule PPCM(12 ; 18).", answers: ["36"], expl: "12 = 2² × 3 ; 18 = 2 × 3² → 2² × 3² = 36." },
    { q: "Décompose 150 en facteurs premiers.", answers: ["2×3×5^2", "2×3×5²", "2*3*5^2", "2×3×5×5", "2x3x5^2", "2*3*5*5"], numeric: false, expl: "150 = 2 × 75 = 2 × 3 × 25 = 2 × 3 × 5²." },
    { q: "Vrai ou faux : un nombre divisible par 2 et par 4 est divisible par 8.", type: "vf", answer: 1, expl: "Faux : 12 est divisible par 2 et 4 mais pas par 8. (2 et 4 ne sont pas premiers entre eux.)" },
    { q: "Un pâtissier a 90 macarons au chocolat et 75 à la vanille. Il veut faire le plus grand nombre de boîtes identiques en utilisant tous les macarons. Combien de boîtes ?", answers: ["15"], expl: "PGCD(90 ; 75) = 15. Chaque boîte : 6 chocolat et 5 vanille." },
    { q: "Rends 126/84 irréductible.", answers: ["3/2"], numeric: false, expl: "On divise par 42 : 3/2." },
    { q: "Vrai ou faux : 1 est un nombre premier.", type: "vf", answer: 1, expl: "Faux : un nombre premier a exactement deux diviseurs distincts ; 1 n’en a qu’un." }
  ]
});

window.MATHS.chapters.push({
  id: 4,
  title: "Les fractions",
  short: "Fractions",
  sub: "Sens, égalité, comparaison, les 4 opérations, problèmes",
  objectifs: [
    "Comprendre les différents <b>sens</b> d’une fraction (partage, quotient, rapport, nombre sur la droite graduée).",
    "Simplifier, comparer, ranger des fractions.",
    "Additionner, soustraire, multiplier et diviser des fractions <b>sans erreur</b>.",
    "Résoudre des problèmes du type « les 2/3 de… », « fraction d’une fraction »."
  ],
  lesson: `
<h2>1. Qu’est-ce qu’une fraction ?</h2>
<p>Dans <span class="formula">3/4</span>, 3 est le <b>numérateur</b> (en haut : le nombre de parts prises) et 4 le <b>dénominateur</b> (en bas : en combien de parts égales on a coupé l’unité). Le dénominateur ne peut jamais être 0.</p>
<p>Une fraction a plusieurs <b>sens</b>, que tu dois connaître pour le concours :</p>
<ol>
<li><b>Fraction-partage</b> : je coupe une pizza en 4 parts égales et j’en prends 3 → 3/4 de pizza.</li>
<li><b>Fraction-quotient</b> : 3/4 est le nombre qui, multiplié par 4, donne 3. C’est le résultat de 3 ÷ 4 = 0,75.</li>
<li><b>Fraction-opérateur</b> : prendre les 3/4 de 20 €, c’est 20 ÷ 4 × 3 = 15 €.</li>
<li><b>Fraction-nombre</b> : 3/4 est un point précis de la droite graduée, entre 0 et 1.</li>
</ol>

<h2>2. Fractions égales et simplification</h2>
<div class="box def"><span class="box-title">Propriété fondamentale</span>On ne change pas une fraction en multipliant (ou en divisant) le numérateur <b>et</b> le dénominateur par le <b>même nombre</b> non nul.<br>
<span class="formula">2/3 = 4/6 = 10/15</span> ; &nbsp; <span class="formula">18/24 = 9/12 = 3/4</span></div>
<p>Une fraction est <b>irréductible</b> quand on ne peut plus la simplifier (numérateur et dénominateur n’ont plus de diviseur commun autre que 1).</p>
<div class="box warn"><span class="box-title">Erreur interdite</span>On ne peut pas « simplifier » en ajoutant : (2 + 3)/(2 + 5) ≠ 3/5. On ne simplifie que des <b>facteurs</b> (multiplications), jamais des termes (additions).</div>

<h2>3. Comparer des fractions</h2>
<ul>
<li><b>Même dénominateur</b> : la plus grande est celle qui a le plus grand numérateur (3/7 &lt; 5/7).</li>
<li><b>Même numérateur</b> : la plus grande est celle qui a le plus <b>petit</b> dénominateur (3/5 &gt; 3/8 : un cinquième de pizza est plus gros qu’un huitième).</li>
<li><b>Cas général</b> : on met au même dénominateur. 2/3 et 3/4 → 8/12 et 9/12 → 2/3 &lt; 3/4.</li>
<li>Comparer à 1 : si numérateur &lt; dénominateur, la fraction est inférieure à 1.</li>
</ul>

<h2>4. Additionner et soustraire</h2>
<div class="box def"><span class="box-title">Règle</span>On ne peut additionner que des fractions de <b>même dénominateur</b>. On additionne alors les numérateurs, et on <b>garde</b> le dénominateur.<br><span class="formula">2/7 + 3/7 = 5/7</span></div>
<div class="box ex"><span class="box-title">Exemple avec dénominateurs différents</span>
1/4 + 5/6 : on cherche un dénominateur commun (le PPCM de 4 et 6 est 12).<br>
1/4 = 3/12 et 5/6 = 10/12. Donc 1/4 + 5/6 = 3/12 + 10/12 = <b>13/12</b>.</div>
<p>⚠ L’erreur classique : 1/4 + 5/6 = 6/10. C’est FAUX : on n’additionne jamais les dénominateurs.</p>

<h2>5. Multiplier</h2>
<div class="box def"><span class="box-title">Règle</span>On multiplie les numérateurs entre eux et les dénominateurs entre eux : <span class="formula">a/b × c/d = (a × c)/(b × d)</span></div>
<p>Exemple : 2/3 × 5/7 = 10/21. Astuce : simplifie <b>avant</b> de multiplier : 4/9 × 3/8 = (4 × 3)/(9 × 8) = (4 × 3)/(3 × 3 × 4 × 2) = 1/6.</p>
<p>« Prendre les 2/3 de 3/4 » = 2/3 × 3/4 = 6/12 = 1/2.</p>

<h2>6. Diviser</h2>
<div class="box def"><span class="box-title">Règle</span>Diviser par une fraction, c’est <b>multiplier par son inverse</b>. L’inverse de c/d est d/c.<br><span class="formula">a/b ÷ c/d = a/b × d/c</span></div>
<p>Exemple : 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8. Et 6 ÷ 1/2 = 6 × 2 = 12 (dans 6 pizzas, il y a 12 demi-pizzas).</p>

<h2>7. Problème type du concours</h2>
<div class="box ex"><span class="box-title">Énoncé</span>Une classe de 30 élèves : 2/5 sont demi-pensionnaires, 1/3 rentrent déjeuner chez eux, les autres vont chez une nourrice. Quelle fraction va chez une nourrice ? Combien d’élèves ?
<p><b>Solution</b> : 2/5 + 1/3 = 6/15 + 5/15 = 11/15. Fraction restante : 1 − 11/15 = 4/15. Nombre d’élèves : 4/15 × 30 = 120/15 = <b>8 élèves</b>.<br>
Vérification : 2/5 × 30 = 12 ; 1/3 × 30 = 10 ; 12 + 10 + 8 = 30 ✔</p></div>
`,
  videos: [
    { t: "Comprendre les fractions (sens)", ch: "Lumni", q: "Lumni fraction partage comprendre" },
    { t: "Additionner des fractions", ch: "Yvan Monka", q: "Yvan Monka additionner des fractions dénominateurs différents" },
    { t: "Multiplier et diviser des fractions", ch: "Yvan Monka", q: "Yvan Monka diviser des fractions inverse" },
    { t: "Problèmes avec fractions", ch: "Les Bons Profs", q: "les bons profs problème fractions" }
  ],
  resume: "<ul><li>+ et − : même dénominateur obligatoire.</li><li>× : en haut avec en haut, en bas avec en bas.</li><li>÷ : multiplier par l’inverse.</li><li>« Les a/b de X » = a/b × X.</li></ul>",
  exercises: [
    { q: "Simplifie au maximum 36/48.", answers: ["3/4"], numeric: false, expl: "PGCD(36 ; 48) = 12 → 3/4." },
    { q: "Calcule 2/9 + 5/9 (réponse sous forme de fraction).", answers: ["7/9"], numeric: false, expl: "Même dénominateur : on additionne les numérateurs." },
    { q: "Calcule 1/2 + 1/3.", answers: ["5/6"], numeric: false, expl: "3/6 + 2/6 = 5/6." },
    { q: "Calcule 3/4 − 1/6.", answers: ["7/12"], numeric: false, expl: "9/12 − 2/12 = 7/12." },
    { q: "Calcule 2/3 × 9/4 (forme irréductible).", answers: ["3/2"], numeric: false, expl: "18/12 = 3/2. Ou en simplifiant d’abord : (2 × 9)/(3 × 4) = (2 × 3 × 3)/(3 × 2 × 2) = 3/2." },
    { q: "Calcule 5/6 ÷ 5/3.", answers: ["1/2"], numeric: false, expl: "5/6 × 3/5 = 15/30 = 1/2." },
    { q: "Range dans l’ordre croissant : 3/4 ; 2/3 ; 5/6.", choices: ["2/3 < 3/4 < 5/6", "3/4 < 2/3 < 5/6", "5/6 < 3/4 < 2/3"], answer: 0, expl: "Dénominateur 12 : 9/12 ; 8/12 ; 10/12." },
    { q: "Combien valent les 3/8 de 64 € ?", answers: ["24"], expl: "64 ÷ 8 = 8 ; 8 × 3 = 24 €." },
    { q: "Un élève écrit 2/3 + 1/4 = 3/7. Analyse son erreur.", type: "open", model: "<p>L’élève additionne les numérateurs entre eux et les dénominateurs entre eux. Il applique la règle de la multiplication à l’addition, ou il traite la fraction comme deux nombres entiers séparés. Il n’a pas compris que le dénominateur indique la <b>taille des parts</b> : on ne peut additionner que des parts de même taille. Remédiation : bandes de papier ou disques fractionnés ; montrer que 3/7 &lt; 2/3, alors qu’en ajoutant 1/4 le résultat devrait grandir. Bonne réponse : 8/12 + 3/12 = 11/12.</p>" }
  ],
  evaluation: [
    { q: "Calcule 5/8 + 1/4.", answers: ["7/8"], numeric: false, expl: "5/8 + 2/8 = 7/8." },
    { q: "Calcule 2 − 3/5.", answers: ["7/5"], numeric: false, expl: "10/5 − 3/5 = 7/5." },
    { q: "Calcule 4/15 × 5/8 (forme irréductible).", answers: ["1/6"], numeric: false, expl: "20/120 = 1/6." },
    { q: "Calcule 3 ÷ 3/4.", answers: ["4"], expl: "3 × 4/3 = 4." },
    { q: "Quelle fraction est la plus grande ?", choices: ["5/9", "4/7", "3/5", "7/12"], answer: 2, expl: "En décimal : 0,555… ; 0,571… ; 0,6 ; 0,583… → 3/5." },
    { q: "Les 2/3 des 3/5 d’une somme représentent quelle fraction de la somme ?", answers: ["2/5"], numeric: false, expl: "2/3 × 3/5 = 6/15 = 2/5." },
    { q: "Quelle fraction de l’heure représentent 45 minutes ?", answers: ["3/4"], numeric: false, expl: "45/60 = 3/4." },
    { q: "Vrai ou faux : 3/4 = 0,75.", type: "vf", answer: 0, expl: "<b>Vrai</b> : 3/4 = 3 ÷ 4 = 0,75. Tu peux aussi le voir avec les centièmes : 3/4 = 75/100 = 0,75." },
    { q: "Un réservoir de 60 L est rempli aux 3/4. On utilise 1/3 de son contenu. Combien de litres restent ?", answers: ["30"], expl: "Contenu : 45 L. On utilise 15 L. Reste 30 L." },
    { q: "Vrai ou faux : (3 + 5)/(3 + 7) = 5/7.", type: "vf", answer: 1, expl: "Faux : 8/10 = 4/5. On ne simplifie pas des termes d’une somme." }
  ]
});

window.MATHS.chapters.push({
  id: 5,
  title: "Nombres décimaux",
  short: "Décimaux",
  sub: "Écriture, comparaison, opérations, arrondis, puissances de 10",
  objectifs: [
    "Passer d’une écriture fractionnaire décimale à une écriture à virgule (et inversement).",
    "Comparer et ranger des décimaux, connaître les erreurs classiques des élèves.",
    "Calculer avec les décimaux, multiplier et diviser par 10, 100, 1 000, 0,1…",
    "Arrondir, tronquer, donner un ordre de grandeur.",
    "Distinguer entiers, décimaux, rationnels (et savoir que 1/3 n’est pas décimal)."
  ],
  lesson: `
<h2>1. Qu’est-ce qu’un nombre décimal ?</h2>
<div class="box def"><span class="box-title">Définition</span>Un nombre <b>décimal</b> est un nombre qui peut s’écrire comme une <b>fraction décimale</b> : un entier divisé par 10, 100, 1 000… (une puissance de 10).<br>
Exemple : 3,47 = 347/100 ; 0,5 = 5/10.</div>
<p>Dans 3,47 : 3 est la <b>partie entière</b>, 47 la <b>partie décimale</b>. Le 4 est le chiffre des <b>dixièmes</b>, le 7 celui des <b>centièmes</b>.</p>
<table><tr><th>centaines</th><th>dizaines</th><th>unités</th><th>,</th><th>dixièmes (1/10)</th><th>centièmes (1/100)</th><th>millièmes (1/1000)</th></tr>
<tr><td></td><td></td><td>3</td><td>,</td><td>4</td><td>7</td><td></td></tr></table>
<p><b>Les ensembles de nombres</b> (à connaître) : les entiers naturels (0, 1, 2…) ⊂ les entiers relatifs (…, −1, 0, 1…) ⊂ les décimaux ⊂ les rationnels (toutes les fractions) ⊂ les réels.</p>
<div class="box warn"><span class="box-title">Piège : 1/3 n’est pas décimal</span>1/3 = 0,3333… (une infinité de 3). On ne peut pas l’écrire avec une puissance de 10 au dénominateur. Une fraction irréductible est décimale si et seulement si son dénominateur ne contient que des facteurs 2 et 5 (ex. 7/20 = 0,35 car 20 = 2² × 5).</div>

<h2>2. Comparer des décimaux</h2>
<p>On compare d’abord les parties entières, puis chiffre par chiffre : les dixièmes, puis les centièmes…</p>
<div class="box warn"><span class="box-title">Les erreurs des élèves (très demandées au CRPE)</span>
<ul><li>« 2,15 &gt; 2,3 car 15 &gt; 3 » : l’élève traite la partie décimale comme un <b>entier</b>. Or 2,3 = 2,30 et 30 centièmes &gt; 15 centièmes.</li>
<li>« 2,3 &gt; 2,15 car il y a moins de chiffres après la virgule » : la réponse est juste mais la règle (« le plus court est le plus grand ») est fausse : elle conduirait à dire que 2,1 &gt; 2,15.</li>
<li>Remédiation : ajouter des zéros (2,30), utiliser le tableau de numération, la droite graduée, lire « 2 unités et 3 dixièmes ».</li></ul></div>
<p>Entre deux décimaux, il y a <b>toujours</b> une infinité d’autres décimaux (entre 2,3 et 2,4 : 2,35 ; 2,301…). Ce n’est pas vrai pour les entiers.</p>

<h2>3. Multiplier et diviser par 10, 100, 1 000</h2>
<ul><li>Multiplier par 10 : chaque chiffre prend une valeur <b>10 fois plus grande</b> : il « glisse » d’un rang vers la gauche. 3,47 × 10 = 34,7.</li>
<li>Diviser par 100 : chaque chiffre glisse de 2 rangs vers la droite : 3,47 ÷ 100 = 0,0347.</li>
<li>Multiplier par 0,1 = diviser par 10 ; multiplier par 0,01 = diviser par 100.</li></ul>
<p>⚠ On évite de dire « on déplace la virgule » ou « on ajoute un zéro » aux élèves : 3,4 × 10 ≠ 3,40 ! Ce sont les chiffres qui changent de rang.</p>

<h2>4. Opérations avec les décimaux</h2>
<ul>
<li><b>Addition/soustraction posées</b> : on aligne les virgules (unités sous unités, dixièmes sous dixièmes…). 12,5 + 3,47 = 15,97.</li>
<li><b>Multiplication</b> : on calcule sans les virgules, puis on place la virgule en comptant le total de chiffres après la virgule dans les facteurs. 2,3 × 0,15 : 23 × 15 = 345, il y a 1 + 2 = 3 chiffres décimaux → 0,345.</li>
<li><b>Division</b> : on rend le diviseur entier : 7,2 ÷ 0,3 = 72 ÷ 3 = 24.</li>
</ul>
<p>⚠ Multiplier par un nombre inférieur à 1 <b>diminue</b> le résultat (12 × 0,5 = 6). Les élèves pensent souvent que « multiplier agrandit toujours ».</p>

<h2>5. Arrondir, tronquer, encadrer</h2>
<ul><li><b>Troncature</b> au dixième de 3,476 : on coupe → 3,4.</li>
<li><b>Arrondi</b> au dixième de 3,476 : on regarde le chiffre suivant (7 ≥ 5) → on arrondit au-dessus → 3,5.</li>
<li><b>Encadrement</b> au centième : 3,47 &lt; 3,476 &lt; 3,48.</li>
<li><b>Ordre de grandeur</b> : 39,8 × 51,2 ≈ 40 × 50 = 2 000. Sert à vérifier un résultat.</li></ul>

<h2>6. Puissances de 10 et écriture scientifique</h2>
<p>10³ = 1 000 ; 10⁻² = 1/100 = 0,01. <b>Écriture scientifique</b> : a × 10ⁿ avec 1 ≤ a &lt; 10.<br>
Ex. : 45 000 = 4,5 × 10⁴ ; 0,0032 = 3,2 × 10⁻³.</p>
<p>Règles : 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ ; 10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ ; (10ᵃ)ᵇ = 10ᵃˣᵇ.</p>
`,
  videos: [
    { t: "Comparer des nombres décimaux", ch: "Yvan Monka", q: "Yvan Monka comparer des nombres décimaux" },
    { t: "Multiplier des décimaux", ch: "Les Bons Profs", q: "les bons profs multiplication nombres décimaux" },
    { t: "Arrondi, troncature, encadrement", ch: "Yvan Monka", q: "Yvan Monka arrondi troncature" },
    { t: "Écriture scientifique", ch: "Yvan Monka", q: "Yvan Monka écriture scientifique" }
  ],
  resume: "<ul><li>Décimal = fraction de dénominateur 10, 100, 1 000…</li><li>Comparer : chiffre par chiffre, on peut compléter par des zéros.</li><li>× 10 : chaque chiffre prend une valeur 10 fois plus grande.</li><li>Écriture scientifique : a × 10ⁿ, 1 ≤ a &lt; 10.</li></ul>",
  exercises: [
    { q: "Écris 3/8 sous forme décimale.", answers: ["0,375", "0.375"], expl: "3 ÷ 8 = 0,375 (8 = 2³, donc 3/8 est bien décimal)." },
    { q: "Écris 2,07 sous forme de fraction décimale.", answers: ["207/100"], numeric: false, expl: "2,07 = 2 unités et 7 centièmes = 207 centièmes = 207/100." },
    { q: "Quel est le plus grand nombre ?", choices: ["4,125", "4,2", "4,09", "4,19"], answer: 1, expl: "Chiffre des dixièmes : 1, 2, 0, 1 → 4,2 est le plus grand." },
    { q: "Calcule 0,6 × 0,4.", answers: ["0,24", "0.24"], expl: "6 × 4 = 24, 2 chiffres décimaux au total → 0,24." },
    { q: "Calcule 4,5 ÷ 0,09.", answers: ["50"], expl: "On multiplie les deux par 100 : 450 ÷ 9 = 50." },
    { q: "Arrondis 12,3549 au centième.", answers: ["12,35", "12.35"], expl: "Chiffre des millièmes : 4 &lt; 5 → 12,35." },
    { q: "Écris 0,000 72 en écriture scientifique (format 7,2×10^-4).", answers: ["7,2×10^-4", "7.2×10^-4", "7,2x10^-4", "7,2*10^-4", "7.2*10^-4", "7,2×10⁻⁴", "7.2x10^-4"], numeric: false, expl: "On déplace de 4 rangs : 7,2 × 10⁻⁴." },
    { q: "La fraction 1/6 est-elle un nombre décimal ?", choices: ["Oui", "Non"], answer: 1, expl: "6 = 2 × 3 contient le facteur 3 : 1/6 = 0,1666… n’est pas décimal." },
    { q: "Un élève affirme : « 3,12 &gt; 3,7 car 12 &gt; 7 ». Explique son erreur et la façon de l’aider.", type: "open", model: "<p>L’élève considère la partie décimale comme un nombre entier (12 contre 7). Il ne prend pas en compte la valeur des chiffres selon leur position : 7 dixièmes = 70 centièmes, supérieur à 12 centièmes. Aide : écrire 3,70 et 3,12 pour comparer des centièmes, utiliser le tableau de numération ou la droite graduée, verbaliser « 3 unités et 7 dixièmes ».</p>" }
  ],
  evaluation: [
    { q: "Écris 7/25 sous forme décimale.", answers: ["0,28", "0.28"], expl: "7/25 = 28/100 = 0,28." },
    { q: "Calcule 2,5 × 1,2.", answers: ["3"], expl: "25 × 12 = 300 → 3,00 = 3." },
    { q: "Calcule 0,5 × 0,5.", answers: ["0,25", "0.25"], expl: "0,5 × 0,5, c’est la moitié de 0,5, donc <b>0,25</b>. Méthode : 5 × 5 = 25, puis on place 2 chiffres après la virgule (1 + 1). Piège : répondre 2,5 ou 0,5." },
    { q: "Calcule 6 ÷ 0,2.", answers: ["30"], expl: "60 ÷ 2 = 30. (Combien de fois 0,2 dans 6 ? 30 fois.)" },
    { q: "Calcule 45,3 ÷ 100.", answers: ["0,453", "0.453"], expl: "Diviser par 100, c’est rendre chaque chiffre <b>100 fois plus petit</b> : il recule de 2 rangs (la virgule « se décale » de 2 crans vers la gauche). 45,3 ÷ 100 = <b>0,453</b>." },
    { q: "Tronque 8,769 au dixième.", answers: ["8,7", "8.7"], expl: "Tronquer, c’est <b>couper</b> sans regarder la suite : on garde les chiffres jusqu’aux dixièmes et on efface le reste. 8,7|69 → <b>8,7</b>." },
    { q: "Arrondis 8,769 au dixième.", answers: ["8,8", "8.8"], expl: "Pour arrondir au dixième, on regarde le chiffre des centièmes : ici 6, qui est ≥ 5, donc on arrondit au-dessus. 8,769 → <b>8,8</b>. Piège : confondre avec la troncature (8,7)." },
    { q: "Quel nombre est compris entre 1,3 et 1,31 ?", choices: ["1,35", "1,305", "1,4", "1,031"], answer: 1, expl: "Écris les nombres avec autant de décimales : 1,300 et 1,310. Entre les deux, il y a 1,305 (1,300 &lt; 1,305 &lt; 1,310). 1,35 et 1,4 sont trop grands, 1,031 est plus petit que 1,3." },
    { q: "Écris 3,1 × 10⁵ en écriture décimale.", answers: ["310000", "310 000"], expl: "Multiplier par 10⁵, c’est multiplier par 100 000 : chaque chiffre avance de 5 rangs. 3,1 × 100 000 = <b>310 000</b>. Attention : 10⁵ ne veut pas dire « ajouter 5 zéros » à 3,1." },
    { q: "Vrai ou faux : quand on multiplie un nombre positif par un décimal, le résultat est toujours plus grand.", type: "vf", answer: 1, expl: "Faux : multiplier par un nombre entre 0 et 1 diminue (8 × 0,5 = 4)." }
  ]
});

window.MATHS.chapters.push({
  id: 6,
  title: "Nombres relatifs, puissances et racines carrées",
  short: "Relatifs & puissances",
  sub: "Règle des signes, puissances, racines carrées",
  objectifs: [
    "Additionner, soustraire, multiplier, diviser des nombres relatifs (règle des signes).",
    "Calculer avec des puissances (exposants positifs et négatifs).",
    "Connaître les carrés parfaits jusqu’à 15² et calculer avec des racines carrées simples."
  ],
  lesson: `
<h2>1. Les nombres relatifs</h2>
<p>Un nombre relatif a un <b>signe</b> (+ ou −) et une <b>distance à zéro</b>. −5 et +5 sont <b>opposés</b> : même distance à zéro, signes contraires. Pense au thermomètre : −5 °C est plus froid que −2 °C, donc <b>−5 &lt; −2</b>.</p>

<h2>2. Additionner et soustraire</h2>
<ul><li><b>Même signe</b> : on additionne les distances à zéro et on garde le signe. (−3) + (−4) = −7.</li>
<li><b>Signes contraires</b> : on soustrait les distances à zéro, et on prend le signe de celui qui a la plus grande distance à zéro. (−8) + (+3) = −5.</li>
<li><b>Soustraire, c’est ajouter l’opposé</b> : 5 − (−3) = 5 + 3 = 8 ; −2 − 6 = −2 + (−6) = −8.</li></ul>
<div class="box tip"><span class="box-title">Image mentale</span>Gains (+) et dettes (−). « J’ai une dette de 8 € et je gagne 3 € → il me reste une dette de 5 € ». « Enlever une dette de 3 €, c’est comme gagner 3 € ».</div>

<h2>3. Multiplier et diviser : la règle des signes</h2>
<table><tr><th>×</th><th>+</th><th>−</th></tr><tr><th>+</th><td>+</td><td>−</td></tr><tr><th>−</th><td>−</td><td>+</td></tr></table>
<p>(−4) × (−5) = +20 ; (−12) ÷ 3 = −4. Pour un produit de plusieurs facteurs : s’il y a un nombre <b>pair</b> de facteurs négatifs, le résultat est positif ; s’il est <b>impair</b>, négatif.</p>

<h2>4. Les puissances</h2>
<div class="box def"><span class="box-title">Définition</span>aⁿ = a × a × … × a (n facteurs). On lit « a puissance n » ; n est l’<b>exposant</b>. a⁰ = 1 (a ≠ 0) ; a⁻ⁿ = 1/aⁿ.</div>
<p>Exemples : 2⁵ = 32 ; 3⁴ = 81 ; 10⁻³ = 0,001 ; 2⁻¹ = 1/2.</p>
<div class="box warn"><span class="box-title">Pièges</span>
<ul><li>(−3)² = 9 mais −3² = −9 (la puissance ne s’applique qu’au 3).</li><li>2³ ≠ 2 × 3 : 2³ = 8.</li><li>aⁿ × aᵐ = aⁿ⁺ᵐ mais aⁿ + aᵐ ne se simplifie pas.</li></ul></div>
<p>Règles : aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ / aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿˣᵐ ; (ab)ⁿ = aⁿbⁿ.</p>

<h2>5. Les racines carrées</h2>
<p>La racine carrée de a (a ≥ 0), notée √a, est le nombre <b>positif</b> dont le carré vaut a. √49 = 7 car 7² = 49.</p>
<p><b>Carrés parfaits à connaître</b> : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.</p>
<p>Règles : √(a × b) = √a × √b ; √(a/b) = √a / √b. Mais <b>√(a + b) ≠ √a + √b</b> (√(9 + 16) = 5, alors que √9 + √16 = 7).</p>
<p>Simplifier : √50 = √(25 × 2) = 5√2. Encadrer : √30 est entre 5 et 6 car 25 &lt; 30 &lt; 36.</p>
<p>Utilité principale au concours : le <b>théorème de Pythagore</b> (chapitre 10).</p>
`,
  videos: [
    { t: "Additionner des nombres relatifs", ch: "Yvan Monka", q: "Yvan Monka addition nombres relatifs" },
    { t: "Multiplier des relatifs", ch: "Yvan Monka", q: "Yvan Monka multiplication nombres relatifs règle des signes" },
    { t: "Puissances : définitions et règles", ch: "Yvan Monka", q: "Yvan Monka puissances d'un nombre" },
    { t: "Racines carrées", ch: "Yvan Monka", q: "Yvan Monka racine carrée définition" }
  ],
  resume: "<ul><li>Soustraire = ajouter l’opposé.</li><li>− × − = +.</li><li>(−3)² = 9 mais −3² = −9.</li><li>√(a+b) ≠ √a + √b.</li></ul>",
  exercises: [
    { q: "Calcule (−7) + (+4).", answers: ["-3", "−3"], expl: "Signes contraires : 7 − 4 = 3, signe du plus éloigné de 0 (−7) → −3." },
    { q: "Calcule 3 − (−5).", answers: ["8"], expl: "3 + 5 = 8." },
    { q: "Calcule (−6) × (−4).", answers: ["24"], expl: "Règle des signes : <b>moins × moins = plus</b>. 6 × 4 = 24, et le produit de deux négatifs est positif, donc <b>24</b>." },
    { q: "Calcule (−2)³.", answers: ["-8", "−8"], expl: "(−2) × (−2) × (−2) = 4 × (−2) = −8." },
    { q: "Calcule −4².", answers: ["-16", "−16"], expl: "Seul 4 est au carré : −(4²) = −16." },
    { q: "Écris 2³ × 2⁴ sous la forme 2ⁿ. Quelle est la valeur de n ?", answers: ["7"], expl: "2³ × 2⁴ = (2 × 2 × 2) × (2 × 2 × 2 × 2) : on a 7 facteurs 2. Quand on multiplie des puissances d’un même nombre, on <b>additionne les exposants</b> : 3 + 4 = <b>7</b>. Piège : multiplier les exposants (12)." },
    { q: "Calcule √144.", answers: ["12"], expl: "√144 est le nombre positif dont le carré vaut 144. Comme 12 × 12 = 144, √144 = <b>12</b>." },
    { q: "Simplifie √72 (format a√b, ex. 6√2).", answers: ["6√2", "6V2", "6racine2"], numeric: false, expl: "√72 = √(36 × 2) = 6√2." },
    { q: "Range dans l’ordre croissant : −3 ; 2 ; −7 ; 0.", choices: ["−7 < −3 < 0 < 2", "−3 < −7 < 0 < 2", "0 < 2 < −3 < −7"], answer: 0, expl: "Plus un nombre négatif est « loin » de 0, plus il est petit : −7 &lt; −3. Ensuite viennent 0 puis 2. Piège : croire que −7 &gt; −3 parce que 7 &gt; 3. Pense à une droite graduée ou à un thermomètre." }
  ],
  evaluation: [
    { q: "Calcule (−12) + (−8).", answers: ["-20", "−20"], expl: "On ajoute deux nombres négatifs : on additionne leurs distances à zéro (12 + 8 = 20) et on garde le signe moins : <b>−20</b>. Comme une dette de 12 € puis une dette de 8 €." },
    { q: "Calcule −5 − 9.", answers: ["-14", "−14"], expl: "−5 − 9, c’est −5 + (−9) : deux négatifs, donc 5 + 9 = 14 avec le signe moins : <b>−14</b>. Sur un thermomètre : à −5 °C, la température baisse de 9 degrés." },
    { q: "Calcule (−36) ÷ (−9).", answers: ["4"], expl: "Règle des signes : un négatif divisé par un négatif donne un <b>positif</b>. 36 ÷ 9 = 4, donc <b>4</b>." },
    { q: "Calcule (−1)¹⁰¹.", answers: ["-1", "−1"], expl: "101 est impair → −1." },
    { q: "Calcule 10⁻² sous forme décimale.", answers: ["0,01", "0.01"], expl: "10⁻² = 1/10² = 1/100 = <b>0,01</b>. Un exposant négatif ne donne pas un nombre négatif : il indique un inverse." },
    { q: "Calcule 3² + 4².", answers: ["25"], expl: "On calcule d’abord les puissances (priorité) : 3² = 9 et 4² = 16, puis 9 + 16 = <b>25</b>. Piège : écrire 3² + 4² = 7² = 49, c’est faux." },
    { q: "√(16 + 9) vaut :", choices: ["7", "5", "25", "√7"], answer: 1, expl: "On calcule d’abord sous la racine : 16 + 9 = 25, puis √25 = <b>5</b>. Piège : √(16 + 9) n’est pas √16 + √9 = 4 + 3 = 7." },
    { q: "Entre quels entiers consécutifs se trouve √50 ?", choices: ["6 et 7", "7 et 8", "24 et 26", "5 et 6"], answer: 1, expl: "49 &lt; 50 &lt; 64." },
    { q: "Calcule (−2) × 3 × (−5) × (−1).", answers: ["-30", "−30"], expl: "3 facteurs négatifs (impair) → négatif : −30." },
    { q: "Calcule 5⁰.", answers: ["1"], expl: "Tout nombre non nul à la puissance 0 vaut <b>1</b>. Tu peux le voir ainsi : 5³ ÷ 5³ = 1 et, avec les exposants, 5³⁻³ = 5⁰. Piège : répondre 0." }
  ]
});
