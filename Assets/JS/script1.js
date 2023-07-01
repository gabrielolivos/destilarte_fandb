const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
punto.forEach ((cadaPunto, i) => {
    punto[i].addEventListener('click',()=> {
        let posicion = i

        let operacion = posicion * -33.33
        console.log(operacion)

        grande.style.transform = `translateX(${operacion}%) `

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')
    })
})

const boton = document.querySelector('.botonapi')
console.log(boton)

boton.addEventListener('click',()=> {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(informacion){
        console.log(informacion)

        const divGrande = document.querySelector('.apicont')
        const nombreDrink = informacion.drinks[0].strDrink
        const footer = document.querySelector('.footer')
        footer.className+= 'footer active'
        divGrande.className += 'apicont active'

        const tituloDrink = document.querySelector('.tituloDrink')
        tituloDrink.textContent = nombreDrink

        const imgDrink = document.querySelector('.imgDrink')
        imgDrink.src=informacion.drinks[0].strDrinkThumb

        const linkDrink = document.querySelector('.linkDrink')
        linkDrink.target='blank'
        linkDrink.href= 'https://www.youtube.com/results?search_query=drink+recipe+'+nombreDrink
        linkDrink.textContent = "Link a la receta"

        /*const linkDrink = document.createElement('a');
        linkDrink.textContent = "Link a la receta"
        linkDrink.target='blank'
        linkDrink.href= 'https://www.youtube.com/results?search_query=drink+recipe+'+nombreDrink
        linkDrink.className='linkDrink'
        divGrande.appendChild(linkDrink)*/
    

    })




    



} )
_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
}
/* window.onload=function(){
    fetch("http://localhost:8080/admin/odontologo/list")
        .then(function(respuesta){
        return respuesta.json()
        })
        
        .then(function(informacion){
            console.log(informacion)
    
    
    
   
            for (let i=0; i< informacion.length; i++){
    
            let odontologo = "<p>Odontologo ID:" + informacion[i].odontologoId + "</p>" ;
            odontologo +="<p>Nombre:" + informacion[i].nombre + "</p>"
            odontologo +="<p>Apellido:" + informacion[i].apellido + "</p>"
            odontologo +="<p>Matricula:" + informacion[i].matricula + "</p>" 
            
    
    
            document.querySelector("ul").innerHTML += "<div><li>" + odontologo + "</li></div>"
    
            }
    
    
        })}*/
