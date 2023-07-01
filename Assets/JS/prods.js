window.onload=function(){
fetch("http://gabrielo.pythonanywhere.com/productos")
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(informacion){
        console.log(informacion)
        
        for (let i = 0; i < informacion.length; i++) {
            
            let producto = "<div class='textoprods'><p class='pnombre'>" + informacion[i].nombre + "</p>";
            producto += "<p class='pprecio'>" + informacion[i].precio + " ARS </p>"
            producto += "<p class='pstock'> " + informacion[i].stock + " unidades en stock</p></div> "
            producto += "<img class='prodImg' src='" + informacion[i].imagen + "' />"

            document.querySelector(".sectionprod").innerHTML += "<div class='prodsdiv'>" + producto + "</div>" }
 
            
        })}
        
        
        
        
          
        
/* for (let i=0; i< informacion.length; i++){
    
            let odontologo = "<p>Odontologo ID:" + informacion[i].odontologoId + "</p>" ;
            odontologo +="<p>Nombre:" + informacion[i].nombre + "</p>"
            odontologo +="<p>Apellido:" + informacion[i].apellido + "</p>"
            odontologo +="<p>Matricula:" + informacion[i].matricula + "</p>" 
            
    
    
            document.querySelector("ul").innerHTML += "<div><li>" + odontologo + "</li></div>"
    
            }
    
    
        })}*/

       
