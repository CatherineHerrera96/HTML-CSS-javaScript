// Tareas del modulo de fundamentos en Javascript del curso de Patrones hermososa @CatherineHerrera96

// escribir un ciclo For que escribá los números del 1 al 100 con huecos de 5

for (var numero = 1; numero < 100; numero = numero+ 5) {
    console.log(numero)
}

// escribir un ciclo While que escribirá "Hola mundo!" 1000 veces

contador = 0 
while (contador <1000) {
    console.log("Hola mundo!")
    contador = contador +1
}

// escribir un ciclo For qque escribirá "Hola mundo!" 1000 veces
for (contador = 0; contador < 1000; contador = contador + 1){
    console.log("Hola mundo!")
}

// escribir un ciclo While que nunca parará (ciclo infinito)
while(0==0){
    console.log("Hola mundo!")
}

// escribir un ciclo For que nunca parará (ciclo infinito)
for (var numero = 0; 0==0 ; numero = numero + 1 ){
    console.log(numero)
}


// escribir un ciclo If que nunca parará (ciclo infinito)


while (0==0){
     if (0==0){
     console.log("Hola Mundo!")
 }
}