//En un juego de disparos, tu objetivo es atacar siempre al enemigo
//más cercano. Escribe un programa que lea continuamente el nombre y
//la distancia de dos enemigos y seleccione el objetivo más cercano para
//atacar. Si ambos enemigos están a la misma distancia, selecciona el
//que aparece primero.

Entrada: 
enemy1: "EnemyX"
dist1: 15

enemy2: "EnemyY"
dist2: 15

Salida:
EnemyX


let enemy1 = EnemyX
let dist1 = 15; 

let enemy2 = EnemyY
let dist2 = 15;


function attackEnemy () {
    if (dist1 === dist2) {
        console.log ('Atacando');
    }
    return console.log(`El enemigo que aparece primero es: ${dist1}`);
}
