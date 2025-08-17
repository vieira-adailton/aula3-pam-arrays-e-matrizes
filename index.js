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
    }
    matriz[linha] = tabuada
}
console.log(matriz)
*/