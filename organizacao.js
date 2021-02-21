// O Javascript é uma linguagem que é dividida em Sentenças de Código e Bloco de Código. O que isto quer dizer ?

// Quer dizer que todo código JS, é escrito em sentenças, ou seja, linhas de código com instruções específicas - sentenças de código estas, que podem ser escritas em uma ou mais linhas - que "falam" para o browser ou sistemas onde o JS esteja sendo utilizado, o que deve ser feito.

// Já no caso dos blocos de código, por exemplo, um objeto, uma função, um array, por exemplo, podem conter instruções dentro de blocos de código.

// Exemplo de Senteça de Código:

console.log('Olá') // No caso do JS, ao final das senteças, pode ser adicionado ponto e vírgula ou não! Também pode ser usar aspas simples ou duplas, não há diferença!

// Exemplo de Bloco de Código:

function algo() {
    // Este é um exemplo de uma função, que abre-se colchetes para que dentro deles, escrevam-se instruções que deverão ser realizadas pela função em específico. Os colchetes sempre tem a sua abertura e seu fechamento. E este espaço aberto, é um bloco de código que irá armazenar e conter todas as instruções que devem ser realizadas.
}

// Pode-se também haver bloco dentro de bloco. Como assim ? Veja o exemplo abaixo que ilustra bem isto.

{
    {
        {
            console.log("Isto também funciona!") // Este é um exemplo de blocos de códigos contidos dentro de outros blocos de código. O fato o console.log() esta dentro do terceiro bloco, não irá interferir na sua execução.
        }
    }
}