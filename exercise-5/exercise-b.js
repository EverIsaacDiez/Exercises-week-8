/*
Al array anterior convertir la primera 
letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
*/

var a = ["perro","gato","girafa","leon","sarten"]

for (let index = 0; index < a.length; index++) {
    a[index] = a[index].substring(0,1).toUpperCase() + a[index].substring(1,a[index].length)
    alert(a[index])
    
}
