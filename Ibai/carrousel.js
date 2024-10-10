//DOM
const flechaIzq = document.getElementById('flechaIzq');
const flechaDer = document.getElementById('flechaDer');
const fotos = document.querySelectorAll('.carFotos');
const puntos = document.querySelectorAll('.punto');
const carrusel = document.querySelector('.carrousel');

flechaIzq.addEventListener('click', () =>{
    fotoAnterior();
});

flechaDer.addEventListener('click', () =>{
    fotoSiguiente();
});

let xStart = 0;
let xEnd = 0;
carrusel.addEventListener('touchstart', (e) =>{
    xStart = e.touches[0].clientX;
    
});

carrusel.addEventListener('touchend', e =>{
    xEnd = e.changedTouches[0].clientX;
    
    if(xStart > xEnd){
        fotoSiguiente();
    }else{
        fotoAnterior();
    }
});

function fotoSiguiente(){
    for(let i = 0; i < fotos.length; i++){
        if(fotos[i].classList.contains('showFoto') && i != fotos.length-1){
            fotos[i].classList.remove('showFoto');
            fotos[i].classList.add('fotoPasada');
            fotos[i+1].classList.add('showFoto');
            puntos[i].classList.remove('puntoActivo');
            puntos[i+1].classList.add('puntoActivo');
            break;
        }
    }
}

function fotoAnterior(){
    for(let i = 0; i < fotos.length; i++){

        if(fotos[i].classList.contains('showFoto') && i != 0){
            fotos[i].classList.remove('showFoto');
            fotos[i-1].classList.remove('fotoPasada');
            fotos[i-1].classList.add('showFoto');
            puntos[i].classList.remove('puntoActivo');
            puntos[i-1].classList.add('puntoActivo');
            break;
        }
    }
}