// достъпваме съдържание от друг файл

const fs = require('fs');

const data = fs.readFileSync('.\demo.js');
console.log(data.toString());
