//COMENTARIOS DE UNA SOLA LINEA
/*COMENTARIOS
DE MAS 
DE UNA 
LINEA*/

//IMPRIMIR UN MENSAJE EN CONSOLA
console.log("Hola Mundo!");

//DECLARACIÓN DE VARIABLES
let nombre= "Esteban";
let apellido= "Apellido"
let edad= 23;

//CONCATENACIÓN DE CADENAS
console.log("Mi nombre es "+nombre+" y mi apellido es "+apellido+" tengo "+edad+" años");

//TEMPLATE DE CADENAS - INTERPOLACIÓN DE CADENAS
console.log(`Mi nombre es ${nombre} ${apellido} tengo ${edad} años`);

//TIPO DE DATOS UNDEFINED
let a;
console.log(a);

//TIPO DE DATO NAN
let b= 5;
let c= "hola";
let multi= b*c;
console.log(multi);

//TIPO DE DATOS OBJETO
const persona={
    nombre: "Esteban",
    apellido: "Calopiña",
    edad: 29,
    estado_civil: "Casado",
    pasaTiempos: ["Jugar fútbol, bailar"],
    estudios:{
        primaria: "Escuela Municipal Eugenio Espejo",
        secundaria: "Unidad Educativa Municipal Eugenio Espejo",
        superior: "ITSQmet"
    },
    saludar: function(){
        return "Buenas noches!"
    }
}

console.log(persona.nombre);
console.log(persona.pasaTiempos);
console.log(persona.saludar());

//TIPO DE DATO ARRAY
const arreglo=["hola", true, 22, "Chao"];
console.log(arreglo);
console.log(arreglo[1]);

arreglo.push("Pedro");
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

//OPERADOR TYPE OF
