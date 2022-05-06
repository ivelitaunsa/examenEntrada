var pregunta
var parametro
var boton
const persona = {
    nombre: "",
    apellido: "",
    año: 0,
}


function obtenerValores() {
    pregunta = document.getElementById("pregunta")
    parametro = document.getElementById("llenar")
    boton = document.getElementById("button")
}

function loginName() {
    obtenerValores()
    persona.nombre = parametro.value
    pregunta.textContent = "Ingrese su apellido"
    parametro.value = ""
    //attributes[0] = id, attributes[1] = onclick
    boton.attributes[1].nodeValue = "loginSurname()"
    
}

function loginSurname() {
    obtenerValores()
    persona.apellido = parametro.value
    parametro.value = ""
    pregunta.textContent = "Ingrese su año de nacimiento"
    document.getElementById("llenarInput").innerHTML = `<p>Día(OPCIONAL): </p><input type='text'>
    <p>Mes(OPCIONAL): </p><input type='text'>
    <p>Año: </p> <input type='number' id='llenar'><br>`
    //attributes[0] = id, attributes[1] = onclick
    boton.attributes[1].nodeValue = "loginYear()"
}

function loginYear() {
    
    obtenerValores()
    if(parametro.value == ""){
        parametro.value = ""
    }else{
        let number = parseInt(parametro.value)
        if(number < 0){
            parametro.value = ""
        }else{
            persona.año = number
            pregunta.textContent = "Registro Completado con éxito"
            document.getElementById("llenarInput").innerHTML = `<h3>Hola ${persona.nombre} ${persona.apellido}</h3>
            <h3>Usted tiene ${2022 - persona.año}</h3>`
            boton.textContent = "Reiniciar"
            boton.attributes[1].nodeValue = "location.reload()"
            
        }

    }

    console.log(persona)
    console.log(pregunta)
    console.log(parametro)
    console.log(boton)
}