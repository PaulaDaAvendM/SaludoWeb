var btnGreet = document.getElementById("btnSaludo")
var txtName = document.getElementById("txtnombre")
var txtGreet = document.getElementById("txtSaludo")
var lista = [
    "Hello",
    "Bonjour",
    "Hallo",
    "Clao",
    "Ola",
    "Namaste",
    "Aloha",
    "Konnichiwa",
    "Merhaba",
    "Que más"
]
function saludar() {
    if(txtName.value =="") {
    alert("Error, ingresa un nombre.")
    txtGreet.innerHTML=""
    }else{
        var nombre = txtName.value
        var numero = Math.floor(Math.random()*lista.length)
        var saludo = lista[numero]+","+ nombre
        txtGreet.innerHTML= saludo
    }
}