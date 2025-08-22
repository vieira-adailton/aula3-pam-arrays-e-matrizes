/*
//ctrl + ; = comentario

let x = 5;
let y = 1;

x = x + y
y = x - y
x = x - y

console.log(`${x} e ${y}`)

*/

//Correção / redução de código

/*
for(let count = 0; count <= 10; count++){
    for(let count1 = 0; count1 <= 10; count1++){
        console.log(count + " x " + count1 + " = " + count * count1)
    }
}

*/

//Do while
/*
let count = 1
do{
    
    let count1 = 1;
    do{
        console.log(`${count} x ${count1} = ${count * count1}`)
        count1++;
    } while(count1 <= 10);

    count++;
} while(count <= 10)
*/
//While
/* 
let count = 1
while(count <=10){
    while(count1<=10){
        console.log(`${count} X ${count1} = ${count * count1}`)
    }
}
*/
/*
//let array = [[1],2,3,[4]] <- um array dentro de outro array
//console.log(array[0][0]) <- o primeiro acessa o array, enqt o segundo acessa o valor do segundo array
let array = [1,2,3,4,5] //declarado por colchetes, itens são separados por vírgulas, indice (posição do elemento) são iniciados sempre em 0
console.log(array[0]); // acessa uma posição diretamente
console.log(array[10 - 8]); //acessa uma posição por uma operação matematica
*/

// let array = [1,2,3,4,5]; //array de 5 elementos e 4 posições

// array[5] = 10; //acessa uma posição inexistente (acrescenta) e adiciona o valor 10

// console.log(array);

// array[5] = 152.1
// console.log(array)

/*
let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

console.log(matriz[2][2]) //Acessa o valor 13 dentro da matriz
*/

//Exercicio - Calcular a tabuada do 1 ao 10 usando uma matriz. Lembre-se uma matriz é um array dentro do outro.
<<<<<<< HEAD
/*
let matriz = []
for(let col = 0; col <= 10; col++){
    for(let linha = 0; linha <= 10; linha++){
        let tabuada = col * linha
        let matriz = [tabuada]
        let array = [
            [col]
            [linha]
        ]
        console.log(array)
=======

function Matriz(){
    
    let matriz=[]
    for(let x = 0; x <= 10;x++){
        matriz = [x]
        
        let valor = []
        for(let y=0; y<=10;y++){
            valor= x * y
            matriz.push(valor)
            
        } 
        
        console.log(matriz)
        
    }   

    return 
} 

Matriz() //chama a função matriz


/*
let matriz = [];
for(let linha = 0; linha <=10;linha++){
    let tabuada = [];
    for(let coluna = 0; linha <=10;coluna++){
        tabuada[coluna] = linha * coluna
>>>>>>> ad292b1ba869fab571129042fc5b819421db64db
    }
    matriz[linha] = tabuada
}
<<<<<<< HEAD
*/

//funções
/*
function somar(a,b){
    return a+b;
}

function multiplicar(a,b){
    return a * b
}

let subtrair = (a,b) => a-b // Arrow function

let dividir = function(a,b){ //Lambda function
    return a / b
}

let power = (a,b) => Math.pow(a,b)
let porcentagem = (a,b) => (a * b)/100
//console.log(somar(50,50), dividir(6,2), subtrair(10,3));

function calc (operacao, a ,b){
    switch (operacao){
        case 'somar' :
            console.log(somar(a,b));
            break;
        case 'subtrair':
            console.log(subtrair(a,b));
            break;
        case 'multiplicar':
            console.log(multiplicar(a,b));
            break;
        case 'dividir':
            console.log(dividir(a,b));
            break;
        case 'power':
            console.log(power(a,b))
            break
        case 'porcentagem':
            console.log(porcentagem(a,b))
            break
        default:
            console.log("Operação inexistente");
            break
    }
    return
}

calc('porcentagem', 100,10)
*/

/*
Exercicios 

1- Crie uma função que receba um parametro e retorne a tabuada desse número; detalhe use um laço de repetição

2- Crie uma função que receba um parametro que indique quantos e quais números da sequencia fibonnaci deve ser retornado

3- Crie uma funçao que receba um array e retorne seu tamanho, ou seja, quantos elementos o array possui dentro dele
*/

//Ex1

/*
function tabuada(num, matriz, res){
    matriz = []
    for(let valor = 0; valor <= 10; valor++){
        res = valor * num
        matriz.push(res);
        
    }
    console.log(matriz)
}

tabuada(5)
*/

//Ex2 -- correção pelo professor
function fibonacci(limite){
 let inicio = 1;
 let fim = 0;
 let sequencia = 0;

 console.log(`Os ${limite} primeiros de Fibonnaci são: `)
 for(let count = 1; count < limite; count ++){
    console.log(fim);
    sequencia = inicio + fim
    fim = inicio;
    inicio = sequencia;
 }
}
fibonacci(30)
/*
//Ex3
function tamanhoArray(arr){
    return console.log(arr.length)
}

let array = [1,2,3,4,5,6,7,8,9,0]

tamanhoArray(array)
=======
console.log(matriz)
>>>>>>> ad292b1ba869fab571129042fc5b819421db64db
*/