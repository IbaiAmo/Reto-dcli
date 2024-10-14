//Elementos del DOM
const panel = document.querySelector('.actividades'); 
const actividades = document.querySelectorAll('.actividades > .actividad');
const botones = document.querySelectorAll('.btnFiltros > button');

//Lo que ocurre por cada boton
botones.forEach(boton =>{
    boton.onclick = () =>{
        //for para comprobar cuál está activo para cambiar la clase
        for (let i = 0; i < botones.length; i++){
            if(botones[i].classList.contains('filtroActivo')){
                botones[i].classList.remove('filtroActivo');
            }
        }
        boton.classList.add('filtroActivo');
        
        /*Llamada a funcion a la que se le pasa 
        el texto del boton para filtrar*/
        filtrar(boton.textContent);
    }
})


function filtrar(tipo){
    actividades.forEach(actividad =>{
        const $tipo = actividad.children[1].textContent;

        if(tipo == "Todos"){
            actividad.style.display = "flex";
        }else if(tipo != $tipo){
            actividad.style.display = "none";
        }else{
            actividad.style.display = "flex";
        }
    });
}






