// Modulo de fundamentos en Javascript del curso de Patrones hermososa @CatherineHerrera96

// creación de variables: 
var mi_nombre = "Catherine"
var este_ano = 2022
var booleano = "true"
var booleano = "false"

// creación de listas:
var letras = []
var letras = ["a","b","c","d"]
var mumeros = [1,2,3,4,5]
var mixto = ["a", 1 ,"b", 2 ,"c", 3]

// condicionales 

4 > 3 // 4 es mayor que 3 (verdadero)
10 <= 10 // x es menor o igual que 10 (verdadero)
2 == 3 // 2 es igual que 3 (falso) 
(10==10) && (10 < 11) // al utilizar && se deben cumplir ambas partes para que sea verdadero
(10==10)  (10 < 11) // || significa o y nos uede ayudar a ver si alguna de las partes es verdadera, si ambas son falsas el resultado ser "false"


// ciclo if 

var referencia = 2020
var este_ano = 2021

if (referencia == este_ano) {
    console.log ("el año en el que estoy es el 2020 ")
}
else if ((referencia + 1) == (este_ano)) {
    console.log ("el año en el que estoy es un año más adelante que la referencia")

}
else  {
    console.log("el año en que estoy no es la referencia ni la referencia más 1")

}

// Ciclo While (mientras) 
// se repite la condicion hasta que la condicón no sea cumpla

var contador = 1;
while(contador < 6) {
    console.log (contador)
    contador = contador + 1
}

// Ciclo For (Para)
// inicio, condicion para terminar, actualizar contador
for (var contador = 1; contador < 5; contador = contador +1){
console.log(contador)
} 

