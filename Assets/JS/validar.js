const nombre= document.getElementById("vnombre");
const email= document.getElementById("vemail");
const mensaje= document.getElementById("vmsje");
const formulario= document.getElementById("formulario");
const parrafo=document.getElementById("avisos");


var validar = function (e)
{
/*e.preventDefault();*/
let warnings ="";
let entra=false;
parrafo.innerHTML="";
let exp_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (nombre.value.length < 1 || (/^\s+$/.test(nombre.value))){ 
    e.preventDefault();
    warnings=warnings+' Nombre Inválido <br>';
      entra=true;
    }
    if (!exp_email.test(email.value)){
        e.preventDefault();
        warnings =warnings+'Email Inválido <br>';
        entra=true
    }
    if (mensaje.value.length < 1 || (/^\s+$/.test(mensaje.value))) {
        e.preventDefault();
        warnings =warnings+ 'Mensaje está vacio o incorrecto <br>';
        entra=true;
    }
    if (entra){
    parrafo.innerHTML=warnings
    }
    else
    {   e.preventDefault();
        parrafo.innerHTML="Mensaje Enviado <br>"}
}

formulario.addEventListener ("submit", validar)