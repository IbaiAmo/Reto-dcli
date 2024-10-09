//DOM
const flechaIzq = document.getElementById('flechaIzq');
const flechaDer = document.getElementById('flechaDer');
const fotos = document.querySelectorAll('.carFotos');

flechaIzq.addEventListener('click', () =>{
    for(let i = 0; i < fotos.length; i++){

        if(fotos[i].classList.contains('showFoto') && i != 0){
            fotos[i].classList.remove('showFoto');
            fotos[i-1].classList.remove('fotoPasada');
            fotos[i-1].classList.add('showFoto');
            break;
        }
    }
});

flechaDer.addEventListener('click', () =>{
    for(let i = 0; i < fotos.length; i++){

        if(fotos[i].classList.contains('showFoto') && i != fotos.length-1){
            fotos[i].classList.remove('showFoto');
            fotos[i].classList.add('fotoPasada');
            fotos[i+1].classList.add('showFoto');
            break;
        }
    }
    
});