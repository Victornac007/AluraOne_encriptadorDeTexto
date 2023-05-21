/*a - ai 
e - enter 
i - imes 
0 - ober 
u - ufat 
*/
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecta a mayusc. como minusc.
    //g es para que afecte a toda la línea u oración
    //m es para que afecte a multiples líeas o parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");


    document.getElementById("Img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecta a mayusc. como minusc.
    //g es para que afecte a toda la línea u oración
    //m es para que afecte a multiples líeas o parrafo
    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");


    document.getElementById("Img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";   
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy")
    alert("¡Se copió!");
 }

const miTextarea = document.querySelector('#texto2');

miTextarea.addEventListener('input',function(){
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});