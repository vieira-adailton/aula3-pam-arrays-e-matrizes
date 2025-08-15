/*

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

//let array = [[1],2,3,[4]] <- um array dentro de outro array
//console.log(array[0][0]) <- o primeiro acessa o array, enqt o segundo acessa o valor do segundo array
let array = [1,2,3,4,5] //declarado por colchetes, itens são separados por vírgulas, indice (posição do elemento) são iniciados sempre em 0
console.log(array[0]); // acessa uma posição diretamente
console.log(array[10 - 8]); //acessa uma posição por uma operação matematica


