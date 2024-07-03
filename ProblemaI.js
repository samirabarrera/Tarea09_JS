//Escribe un programa que lea continuamente el nombre y la distancia de dos enemigos
//y determine cuál de ellos está más cerca. Imprime el nombre del enemigo más cercano.

Entrada:            
enemy1: "EnemyA" 
dist1: 10
enemy2: "EnemyB"
dist2: 20

Salida:
"EnemyA"


let enemy1 = "EnemyA";
let dist1 = parseInt(10);

let enemy2 = "EnemyB";
let dist2 = parseInt(20);

function calcularDistancia(dist1, dist2) {
    if (dist1 < dist2) {
        return enemy1;
    } else {
        return enemy2;
    }
}

const distanciaCerca = calcularDistancia(dist1, dist2);
console.log(`La distancia más corta es: ${distanciaCerca}`);
