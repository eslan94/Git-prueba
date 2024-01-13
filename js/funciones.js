//FUNCIONES DECLARADAS - HOISTING
console.log(saludar());

function saludar(nombre){
    return `Hola, buenas noches! ${nombre}`;
}

console.log(saludar());

//FUNCION FLECHA - NO HOSTING
//let saludar=()=>{}

let saludo=(nombre2)=> `Hola, buenas noches! ${nombre2}`;

console.log(saludo("Rafael"));


let generarCaracteres=(num, caracter)=>{
    let respuesta="";
    for(let i=0; i<num; i++){
        respuesta+=caracter;
    }
    return respuesta;
}

console.log(generarCaracteres(7,"a"));

let sumaArreglo=(arreglo)=>{
    let suma=0;
    let longitud=arreglo.length
    for(let i=0; i<longitud; i++){
        suma+=arreglo[i];
    }
    return suma;
}

console.log(sumaArreglo([6,1]));

let objeto = (obj) =>{
    return Object.keys(obj);
}
console.log(objeto({nombre:"Teresa", edad:23, direccion:"Quito"}));

let precio = parseFloat(prompt("Ingrese el prcio de un producto: "));
let descuento = parseFloat(prompt("Ingrese el descuento"));
let calcularPrecio=(precio, descuento)=>{
    let iva = 0.12;
    let precioNeto=precio-(precio*descuento)
    return calcularPrecio;
}

document.writeln(calcularPrecio);