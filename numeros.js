// Documentação relativa a aula sobre Number no JS.

let peso1 = 1.0; // Neste caso, o tipo Number é atribuido a variável sem necessidade de informar que será um Number

let peso2 = Number('2.0'); // Já neste caso, foi "informado" para a variável, que o valor a ser atribuido a ela é do tipo Number. Assim, desta forma, o Number() funciona como uma função, onde passamos como parâmetro, na forma de String, o valor que será atribuido a variável!

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Neste caso, usamos o .isInteger() como um função, e como parâmetro da função, passamos o nome da variável que queremos verificar. Da forma que está escrita, queremos dizer algo do tipo: Queremos saber se na variável chamada peso1, temos algum valor do tipo Number. Ou melhor dizendo, se a variável peso1, contém nela, algum valor que é do tipo Number.

console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2); 

console.log(media);
console.log(media.toFixed(2)); // Aqui, nós podemos exemplificar o uso do .toFixed() que é usado para que seja feita uma "redução" no tamanho do resultado apresentado. Dentro dos parênteses, passamos o valor que queremos que seja apresentado após o ponto. No exemplo citado, será apresentado somente dois números após o ponto. Se quisessemos que fosse mostrado somente um número, deveriamos passar o número 1, e assim por diante!

console.log(media.toString()); // No caso do .toString(), ele irá rodar esta função que irá ao apresentar o número, ao invés apresentar como um Number, irá apresentar como uma String. Mas sem modificar o valor!

// Da mesma forma que fizemos acima com o Number('2.0'), podemos fazer com outros tipos de dados.
// Ex:

let nome = String('Lucas');
let verdade = Boolean(true);