//Math.random()

const Tetrominoes = ["LTetromino", "ZTetromino", "iTetromino"];

// console.log(Math.random() * Tetrominoes.length); // 0 to < 3

const randomNumber = Math.random() * Tetrominoes.length;
//Math.floor() - rounds numbers down to the nearest full integer
//Math.ceil() - round up
//Math.round() - round to nearest integer

console.log(randomNumber);

const randomInteger = Math.floor(randomNumber);

console.log(randomInteger);

console.log(Tetrominoes[randomInteger]);
