// Existem alguns tipos de operadores no JS.

// Unários, Binários, Ternario. (O Ternario é somente um)



// Unários: Opera somente com uma variável, ou também podemos dizer que opera somente com um valor literal!

// Ex:

let a = 1;

a++; // Neste caso, temos somente uma única variável, um único operando. Os sinais de + após a variável, irá incremetar 1 no valor da variável. Ou seja, se ao declará-la ela valia 1, após a operação de incremento, ela irá valer 2. Dizemos que é uma operação pós fixada, ou postfixed! Por que ? Porque o operador está após a variável!

// Caso seja necessário, pode-se utilizar o operador antes da variável (como no exemplo mais abaixo). Neste caso, dizemos que é uma operação pré-fixada, ou prefixed!

++a;

// A mesma lógica funciona para operação de decremento, ou seja, subtrair 1 ou mais valores da variável.
// Ex:

a--;
--a;

console.log(a);








// Binários (Aritméticos, Atribuição, Lógicos, Relacionais)

// Aritméticos:

let calculo = 1 + 2; // Adição;
let calculo2 = 2 - 1; // Subtração;
let calculo3 = 2 * 2; // Multiplicação;
let calculo4 = 5 / 5; // Divisão;
let calculo5 = 2 % 1; // Módulo; (Retorna o resto de uma divisão. Ou seja, retornará, quanto sobrou após realizada a operação de divisão);
let calculo6 = 2**2; // Exponenciação; (Neste caso, ocorre a operação de "Dois elevado ao quadrado");


// Atribuição:

let teste = 'Olá Mundo!'; // Neste caso, o sinal de igual, funciona como um operador de atribuição. O que isto quer dizer ? Em uma leitura literal da operação, podemos dizer algo do tipo: "O texto 'Olá Mundo', foi atribuído para a variável chamada teste".




// Lógicos:

//Sinal de negação para booleanos
//No JS, é possível negar um valor booleano. Um valor true pode vir a se tornar false e vice versa. Para fazer isto, deve-se utilizar o sinal de esclamação antes do nome da variável.
//Ex. 
var a = true;
var b = false;

console.log(!a);
console.log(!b);

//Também é possível realizar a dupla negação. Como assim ? Como o proprio nome diz, você irá negar o valor duas vezes. Com isto, após a dupla negação, a variável irá retornar ao valor original.
// A dupla negação no JS, é utilizada nos casos de valores que por padrão valem como se fossem falsos.

console.log(!!a);
console.log(!!b);

//Alguns valores, por padrão, funcionam como se fossem valores falsos.
//Exemplo:
// null, undefined, '', false, 0. 
// A '' é a representação de uma string vazia.
//Com os sinas de negação, é possível torna-los verdadeiros, true. Caso seja necessário, aplica-se a dupla negação tornando-os falsos, ou false.

console.log(null); // null
console.log(!null); // true
console.log(!!null); // false

console.log(undefined); // undefined (não definido)
console.log(!undefined); // true
console.log(!!undefined); // false

console.log(''); // Vazio
console.log(!''); // true
console.log(!!''); // false

console.log(false); // false
console.log(!false); // true
console.log(!!false); // false

console.log(0); // 0
console.log(!0); // true
console.log(!!0); // false

//Por padrão, a maioria dos valores que se pode atribuir a uma variável, são verdadeiros.
//Ex. 20, 'Olá', true, 15.6,...

// Operador AND - &&
// O operador AND é utilizado como uma forma de verificar se duas operações são verdadeiras ou não.
//Ex.
console.log(5 > 3 && '');
console.log(10 == 10 && 25 < 30);
console.log(200 < 100 && 5*5 == 25);

//No operador AND, se todas as operações forem verdadeiras, irá retornar a útlima operação.

//Também existem os casos em que um valor utilizado é null, ou undefined, ou 0, ou uma string vazia ou algum que por padrão é falso, se estiver no início, a verificação não irá continuar até o proxímo valor depois do &&. Caso este valor null, undefined, 0 ou outro falso esteja no final, ele verifica o primeiro, e após passar para o segundo, verificando que é falso, não irá apresentar nenhum resultado, ao não ser o valor falso por padrão apresentado na operação.

//Operador OU - ||
//No caso do ||, ele irá retornar um valor caso haja alguma operação que está sendo realizada que seja verdadeira. Caso uma das operações seja falsa, como por exemplo, null, mas a outra operação seja verdadeira, ele irá retornar o valor verdadeiro.
//Caso haja mais de uma ação a ser verificada, exemplo três, e duas sejam verdadeiras, na primeira verdadeira ele irá encerrar a verificação e irá mostrar o resultado.
//No caso de uma verificação com operações envolvendo booleanos e todas as operações sejam falsas, irá retornar o primeiro valor falso.
//Caso ele verifique operações falsas com por exemplo null || 0 || undefined, ele irá retornar o último valor falso.
//Ex.

var idade = 15;
var gostoFilme = 'Comédia';

function cinema() {
    if (idade >= 18 || gostoFilme == 'Comédia') {
        console.log('Pode entrar!')
    } else {
        console.log('Infelizmente você não irá entrar!')
    }
}

console.log(cinema());

//Resumo de Operadores Lógicos

// && - É utilizado para verificar se duas ou mais operações conjuntas são verdadeiras ou falsas
//Ex. 
console.log('Lucas' && 'Fernandes'); // Ambas verdadeiras
console.log('Lucas' && null); // Neste caso, apesar de o null ser falso, ele ao verificar 'Lucas' e ver que é verdadeiro, já encerra a verificação.
console.log(false && 'carro'); // Aqui ele verificará que false é um valor falso e já encerrará e mostrará o resultado, e não continuará até 'carro'.

// || -  O OU é utilizado para se uma ou mais opções são verdadeiras ou falsas.

//ex1 de ||

var idade = 26;
var time = 'Botafogo';

function lucasFernandes() {
    if (idade == 26 || time == 'Botafogo') {
        console.log('Boa garoto!')
    } else {
        console.log('Não é Lucas')
    }
}

lucasFernandes();