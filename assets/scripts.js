
let imagen = document.querySelector('#imagen');

imagen.addEventListener('click', () => {
    if (imagen.style.border === "none" || imagen.style.border === "") {
        imagen.style.border = '3px solid red';
        return;
    }
        imagen.style.border = "none";
    
});