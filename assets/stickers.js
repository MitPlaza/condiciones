

let cantidad1 = document.querySelector('#sticker1');
let cantidad2 = document.querySelector('#sticker2');
let cantidad3 = document.querySelector('#sticker3');
let verificar = document.querySelector('#verificarStickers');

let mensaje = document.querySelector('#txtInserto');

verificar.addEventListener('click', () => {
    // Obtener los valores como números
    let valor1 = parseInt(cantidad1.value) || 0; // Si no es un número válido, se establece a 0
    let valor2 = parseInt(cantidad2.value) || 0;
    let valor3 = parseInt(cantidad3.value) || 0;

    // Realizar la suma
    let sumarStickers = valor1 + valor2 + valor3;

    if(sumarStickers <=10){
        mensaje.innerHTML="Llevas " + sumarStickers + " stickers";
        return;
    }
        mensaje.innerHTML="llevas muchos stickers";
    
});

