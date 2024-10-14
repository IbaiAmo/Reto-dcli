//Elementos del DOM
const $form = document.getElementById('form_principal');
const $correo = document.getElementById('correo');
const $opinion = document.getElementById('opinion');
const $error1 = document.getElementById('error1');
const $error2 = document.getElementById('error2');
const $template = document.getElementById('template');
const $body = document.querySelector('body');

let mailBien = false, opinionBien = false;

$form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if($opinion.value.trim() == "" || $opinion.value == ""){
        $error2.textContent = "No puede dejar vacío este campo";
        opinionBien = false;
    }else{
        $error2.textContent = "";
        opinionBien = true;
    }
    
    if($correo.value.trim() == "" || $correo.value == ""){
        $error1.textContent = "Escriba su correo electrónico";
        mailBien = false;
    }else{
        const url = "https://emailvalidation.abstractapi.com/v1/?api_key=7f9da39a20bc4dd083e5cbcce00737cc&email=" + $correo.value;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.is_valid_format.value){
                $error1.textContent = "";
                mailBien = true;
            }else{
                $error1.textContent = "El formato del email es incorrecto.";
                mailBien = false;
            }

            if(mailBien && opinionBien){
                const clon = $template.content.cloneNode(true);
                const $modal = clon.querySelector('.modal');
                $body.appendChild($modal);
                $correo.value = "";
                $opinion.value = "";
        
                setTimeout(() =>{
                    $body.removeChild($modal);
                }, 4500);
            }
        });
    }


});



