// Variáveis e Constantes são maneiras de se armazenar valores no JS. Estes valores estarão salvos em um trecho da memória, e assim poderão ser acessados posteriormente.

// Também é possível alterar os valores das variáveis.

// Já no caso das Constantes, como o próprio nome já diz, não é possível alterar seu valor posteriormente.

// Utilizam as palavras reservadas var, let e const. 

// Uma palavra reservada, é algo que é utilizado somente pela linguagem para ser utilizada com alguma finalidade.

// É possível utilizar os tipos de dados na variáveis:

// - String (Texto, sendo necessário escreve-la entre aspas, podendo ser aspas simples ou duplas)

// - Number (Como o nome diz, um número. Mas sendo um número inteiro)

// - Float (Números com decimais. Ex. 20.5)

// - Boolean (Boleano. Irá tetornar 'apenas' true ou false. É utilizado por exemplo, no caso de verificar se um determinado aluno atingiu a média de nota para ser aprovado. Ser sim, true, se não, false).

// Existem três formas de determinar variáveis e constantes no Javascript!

// São: var, let e const.

// var -> É o padrão utilizado basicamente desde o início da linguagem, e é utilizado no escopo global do código. Ou seja, pode ser requisitado e se tornar funcional, a partir de qualquer local do código. Idenpendente se foi declarada no escopo de uma função ou não!

// let -> É o padrão utilizado desde o ECMAScript 2015 e é o mais recomenado a se utilizar, ao invés do var. Ele somente é utilizado no escopo onde é declarado. O que isto quer dizer ? Que a variável que foi declarada utilizando o let, somente poderá ser requisitada e acessada, dentro do escopo onde foi declarada. 
// Se o desenvolvedor declarou uma variável utilizando o let no escopo de uma função, fora desde escopo ela não poderá ser acessada e requisitada. Sendo assim, é mais "seguro" declarar uma variável utilizando o let, pois em um momento posterior do código, em outro escopo, caso algum desenvolvedor queira acessar aquela variável, isto não será permitido. 

// const -> A const, é um padrão de declaração de variável, onde deve-se declarar um valor que nunca irá se alterar. Como assim ? Deve-se utilizar o const, por exemplo, quando queira-se declarar uma variável, que não irá variar seu valor, que durante todo o código, todo o sistema, onde quer que ela seja utilizada, seu valor não será e não poderá ser alterado!


// Variáveis do tipo Var:

// As variáveis do tipo var, são utilizadas no que chamamos de "Escopo Global"! O que isto quer dizer ?
// Quer dizer que esta variável, está passível de ser acessada e, se necessário, ter seu valor alterado, em diferentes momentos dentro do código.
// Por este motivo, deve-se utilizar o var com cuidado.


// Variáveis do tipo Let:

// A forma de atribuir variáveis utilizando o let, surgiu, como dito acima, após o ES6, ou ECMAScript 2015. Ele, ao contrário do var, somente pode ser utilizado no escopo de bloco. O que é Escopo de Bloco, e o que é Escopo ?

// Escopo pode ser entendido como um trecho determinado do código, que pode ser global, abranger todo o código, ou de bloco, que é somente um trecho específico do código. 
// Um exemplo de Escopo de Bloco que podemos dar, é uma função.

// Ex:

function qualquerCoisa() {
    // O que estiver contido aqui dentro, está contido no que chamamos de Escopo de Bloco.
    // O trecho entre o sinal de chaves e o sinal de fechamento, é o que podemos chamar de bloco. 
    // É aqui, por exemplo, que caso definamos uma variável do tipo let, ela irá atuar. Caso tente-se acessa-la fora daqui, isto não ocorrerá!
}


// Variáveis do tipo Const:

// Já no caso das variáveis do tipo const, podemos dizer que elas são "variáves". Mas por que entre aspas ? Porque na verdade, apesar de podermos chama-las de variáveis, elas em momento algum, irão variar.
// O valor que for atribuido a elas, irá permanecer "ao infinito e além"!