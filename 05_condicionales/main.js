/* && - ||

let edad = prompt ('Ingresa tu edad')
if(edad < 16){
    console.log('No puedes sacar tu licencia')
}else if (edad >= 16 && edad === 17){
    console.log('Puedes sacar tu permiso')
}else {
    console.log('Puedes conducir')
} */
/* 
Si mi numero es par : Escribir en la consola *Numero* es par
Si mi numero es impar : Escribir en la consola *Numero* es impar */

// Modulo -> %

/* let num = prompt('Ingresa un numero')

if(num % 2 === 0){
    console.log ('El numero ' + num + ' es un numero par')
}else{
    console.log ('El numero ' + num + ' es un numero impar')
} */

// Que es concatenar?

let player1 = prompt('Elige: Piedra, Papel o Tijera')
let player2 = prompt('Elige: Piedra, Papel o Tijera')

if(player1 === player2){
    console.log('Es un empate :|')
}else if(player1 === 'Piedra' && player2 === 'Tijera')
{
    console.log('Gana Player 1')
}else if(player1 === 'Piedra' && player2 === 'Papel')
{
    console.log('Gana Player 2')
}else if(player1 === 'Papel' && player2 === 'Piedra')
{
    console.log('Gana Player 1')
}else if(player1 === 'Papel' && player2 === 'Tijera')
{
    console.log('Gana Player 2')
}else if(player1 === 'Tijera' && player2 === 'Papel')
{
    console.log('Gana Player 1')
}else if(player1 === 'Tijera' && player2 === 'Piedra')
{
    console.log('Gana Player 2')
}else{
    console.log('No entendi, vuelve a intentarlo :c')
}

 