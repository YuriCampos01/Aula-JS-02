// Traduzindo 
function camelize(str) {
    return str
    .split("_")
    .map((word, index) => index == 0 ? word : word[0].toUpperase() + word.slice(1))
    .join("");
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

// Faixa de filtro

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtres = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);