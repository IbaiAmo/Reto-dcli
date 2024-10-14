//Elementos del DOM
const $body = document.querySelector('body');
const $template = document.getElementById('template');
const $actividades = document.querySelectorAll('.actividades > .actividad');
const $fondo = document.querySelector('.fondoNegro');


$actividades.forEach($actividad =>{
    $actividad.addEventListener('click', () =>{
        const clon = $template.content.cloneNode(true);
        const $info = clon.querySelector('#informacion');
        const $flechaVolver = clon.querySelector('#informacion i');
        const imagen = clon.querySelector('#informacion img');
        const titulo = clon.querySelector('#informacion div h1');
        const descripcion = clon.querySelector('#informacion div p');

        imagen.src = $actividad.children[0].src;
        titulo.textContent = $actividad.children[2].textContent;
        descripcion.textContent = $actividad.children[3].textContent;
        
        $body.style.overflowY = "hidden";
        $body.appendChild($info);
        $fondo.style.display = "block";

        $flechaVolver.addEventListener('click', () =>{
            $body.removeChild($info);
            $fondo.style.display = "none";
            $body.style.overflowY = "auto";
        });
    });
});