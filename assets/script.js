// let peso = 40;
// let altura = 1.67;

// alturatotalSumada = altura * altura;

// imc = peso /alturatotalSumada;

// console.log(imc);

// if(imc >= 18.5 && imc < 24.9){
//     alert ("Tu Imc es normal")

// }else if(imc < 18.5){
//     alert("tiene un IMC bajo");
// }else{
//     alert("tiene un IMC alto");
// }



// let imagen = document.querySelector('#imagen');

// imagen.addEventListener('click', () => {
//     if (imagen.style.border === "none" || imagen.style.border === "") {
//         imagen.style.border = '3px solid red';
//     } else {
//         imagen.style.border = "none";
//     }
// });


let imagen = document.querySelector('#imagen');
let bordeActivo = false;

imagen.addEventListener('click', () => {
    bordeActivo = !bordeActivo; // Alternar entre true y false

    if (bordeActivo) {
        imagen.style.border = '3px solid red';
        return;
    } 
         imagen.style.border = 'none';
   
});



let value1 = document.querySelector('#salario').value
let value2 = document.querySelector('#salario-anterior').value

let password = value1 + value2 + value3;


if(password==911){
    alert("password 1 correcto")
}else if(password==714){
    alert("password 2 correcto")
}else{

}

let boton = document.querySelector('#btn');
boton.addEventListener('click', () => {

if (value1 != '' || value2 != ''){
alert('Correcto');
} else {
alert('Incorrecto');
}

});


