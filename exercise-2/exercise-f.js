/*
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un    
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).
*/

var a = "abecedario ultrasonico"
var b = a.substring(0,1).toUpperCase() + a.substring(1,a.indexOf(" ")) + " "
+ a.substring(a.indexOf(" ") + 1,a.indexOf(" ") + 2).toUpperCase() + a.substring(a.indexOf(" ") + 2,a.length)
console.log(b) 