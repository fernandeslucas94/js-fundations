// O Javascript é uma linguagem de tipagem fraca. O que é isto ? Isto quer dizer que uma variável que inicialmente foi declarada como tipo de dados String, em outro momento pode assumir um valor do tipo Number!

// Ex:
// Atribuindo um valor de tipo String

let qualquerCoisa = 'Olá';

console.log(qualquerCoisa);
console.log(typeof qualquerCoisa);

// Reatribuindo valor para a variável, mas agora do tipo Number

qualquerCoisa = 26;

console.log(qualquerCoisa);
console.log(typeof qualquerCoisa);

// Devemos sempre evitar nomear as variáveis com nomes genéricos e siglas.
// Ex:

let numero = 1; // Número é algo genérico e que pode significar diversas coisas. Por isto, devemos deixar explicito no nome da varáivel, a que estamos nos referindo.

let a = 0; // No caso do exemplo com a letra a, isto é uma sigla. Também não deixa explicito a que, ou qual operação ou valor, esta sigla se refere.