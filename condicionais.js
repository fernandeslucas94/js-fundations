// IF e ELSE

// O IF/ELSE, são uma forma de verificar se uma ou mais condições são satisfeitas, caso sejam, algo deverá ocorrer, ou não!

var time = 'Cruzeiro'
var estado = 'Minas Gerais'

if (time == 'Cruzeiro' && estado == 'Minas Gerais') {
    console.log('Excelente!')
} else {
    console.log('Não é mineiro')
}

// Operador Ternário

// O operador ternário, é uma forma de fazer um if/else de uma maneira mais elegante e rápida.
//Ex.
console.log (time == 'Cruzeiro' ? 'Time bom' : 'Time regular');







// Switch/Case

// Switch Case é uma 'forma' de realizar um IF/ELSE de outra maneira.

// O código irá checar valores diferentes para verificar se irão ou não ser compatíveis com o valor, ou valores, requisitados como padrão.

// O switch é utilizado para que seja informada uma variável que recebe o valor a ser verificado

// O case é utilizado para adicionar uma alternativa. Por exemplo, "Caso seja isto, faça aquilo".

// O break é utilizado para que caso a condição de verificação seja satisfeita, o código para e não prossegue com as outras verificações.

//Ex.1

//switch/case "normal"

var cor = 'marrom';

switch (cor) {
case 'azul':
console.log('Cor Azul')
break;

case 'rosa':
console.log('Cor Rosa')
break;

case 'verde':
console.log('Cor Verde')
break;

default :
console.log('Cor não identificada');
}

//switch/case multi case

var banda = 'john';

switch (banda) {
case 'john':
case 'paul':
case 'george':
case 'ringo':
console.log('The Beatles')
break;

default :
console.log('Banda não identificada');
}