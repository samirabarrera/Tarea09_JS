//Escribe un programa que lea continuamente el nombre y la distancia
//de dos enemigos y determine cuál de ellos está más cerca. Imprime el nombre del enemigo más cercano.

Entrada:            
enemy1: "EnemyA" 
dist1: 10
enemy2: "EnemyB"
dist2: 20

//Salida:
//EnemyA


let enemy1 = EnemyA;
let dist1 = 10; 

let enemy2 = EnemyB;
let dist2 = 20;

function calcularDistancia (enemy1, enemy2){
    Math.sqrt(dist1 * dist1 + dist2 * dist2);
}

const distanciaCerca = calcularDistancia(enemy1, enemy2);
console.log(`La distancia más corta es: ${distanciaCerca}`);