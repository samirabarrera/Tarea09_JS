//En una simulación de radar, los datos de enemigos y sus distancias cambian dinámicamente.
//Escribe un programa que lea continuamente el nombre y la distancia de dos enemigos y determine 
//cuál de ellos está más cerca. Asegúrate de que el programa maneje
//correctamente entradas donde las distancias pueden cambiar rápidamente. Utiliza prompt para ingresar los datos.

Entrada: 
enemy1: "Enemy1" 
dist1: 50
enemy2: "Enemy2"
dist2: 30

Salida:
"Enemy2"
enemy1: "Enemy1" 
dist1: 25
enemy2: "Enemy2"
dist2: 45

Salida:
"Enemy1"

//Entrada
let enemy1 = "Enemy1"
let dist1 = parseInt(50, 25);

let enemy2 = "Enemy2"
let dist2 = parseInt(30, 45);

function gettingNameDistance (){
    if (dist1 < dist2) {
        prompt ("Distancia aceptada")
    } else {
        (dist1 !== dist2)
        prompt ("Entre cualquier distancia mayor a cero para calcular")
    }
}

const calculatingDistance = gettingNameDistance (dist1, dist2);
console.log (`Calculando la distancia: ${calculatingDistance}`);
