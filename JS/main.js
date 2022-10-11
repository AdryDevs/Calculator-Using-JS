document.querySelector("#sumar").addEventListener('click',() =>{
    let a = parseInt(document.querySelector("#a") .value),
    b = parseInt(document.querySelector("#b") .value);

    setTimeout(() => {
        alert("El resultado es " + (a+b));
    },5000)
})

document.querySelector("#restar").addEventListener('click',() =>{
    let a = parseInt(document.querySelector("#a") .value),
    b = parseInt(document.querySelector("#b") .value);

    setTimeout(() => {
        alert("El resultado es " + (a-b));
    })
})

document.querySelector("#dividir").addEventListener('click',() =>{
    let a = parseInt(document.querySelector("#a") .value),
    b = parseInt(document.querySelector("#b") .value);

    setTimeout(() => {
        alert("El resultado es " + (a/b));
    })
})

document.querySelector("#multiplicar").addEventListener('click',() =>{
    let a = parseInt(document.querySelector("#a") .value),
    b = parseInt(document.querySelector("#b") .value);

    setTimeout(() => {
        alert("El resultado es " + (a*b));
    })
})

document.querySelector("#raizCuadrada").addEventListener('click',() =>{
    let a = parseInt(document.querySelector("#a") .value),
    b = parseInt(document.querySelector("#b") .value);

    setTimeout(() => {
        alert("El resultado es " + (Math.sqrt(a,b)));
    })
})






