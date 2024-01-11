//IMPRIMIR UN MENSAJE EN EL DOCUMENTO
document.writeln("Hola Mundo");
alert("Hola Mundo!");

//INGRESAR DATOS POR TECLADO
let numero1=prompt("Ingrese un número");
let numero2=prompt("Ingrese otro número");
let suma;

let n1=parseInt(numero1);
let n2=parseInt(numero2);
suma=n1+n2;
document.writeln(suma);
console.log(`La suma es ${suma}`);

//TABLA DE MULTIPLICAR
let multi=parseInt(prompt("Ingrese el factor: "));
for(let i=1; i<=10; i++){
    let multiplicar=i*multi;
    console.log(multiplicar);
}