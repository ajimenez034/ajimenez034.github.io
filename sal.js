
var string = document.getElementById("number");
var boton = document.getElementById("btn");

boton.addEventListener("click", function() {
   
    var numeroActual = parseInt(string.textContent);
    string.textContent = (numeroActual + 1).toString();
});