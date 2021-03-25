/*
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.
*/

var a = ["perro","gato","girafa","leon","sarten"]

var sentence = ""

for (let index = 0; index < a.length; index++) {
    sentence += a[index] + " "
}

alert(sentence)