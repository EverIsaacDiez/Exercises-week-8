/*
Crear una variable 
“Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
*/

var Age = 12

if( Age < 2){
alert("Bebe")
}else if( Age <= 12){
alert("Nino")
}else if( Age <= 19){
alert("Adolescente")
}else if( Age <= 30){
alert("Joven")
}else if(Age <= 60){
alert("Adulto")
}else if( Age <= 75){
alert("Adulto mayor")
}else{
alert("Anciano")
}