

let dato1 = document.querySelector('#valor1');
let dato2 = document.querySelector('#valor2');
let dato3 = document.querySelector('#valor3');

let passwordTxt = document.querySelector('#txtInserto');


let botonera = document.querySelector('#buscarPassword');

botonera.addEventListener('click', () => {

    let totalPass = dato1.value + dato2.value + dato3.value;

    if(totalPass=='911'){
       
        passwordTxt.innerHTML = "tu password 1 es correcta";
        return;

    }else if(totalPass=='714'){

        passwordTxt.innerHTML = "tu password 2 es correcta";
        return;

    }
    passwordTxt.innerHTML = "tu password es incorrecta";

});