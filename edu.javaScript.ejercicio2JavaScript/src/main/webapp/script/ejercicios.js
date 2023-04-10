/**
 * EJERCICIO 1 Y 2
 */

 // EJERCICIO 1: Pide la edad, si es mayor de edad dice "Tiene permiso para acceder", si no "No se permite acceso a menores de edad"
 // La edad debe estar entre 1 y 100, ambos inclusive
function ejercicio1(){
	 let edad = Number(prompt("Introduzca su edad"));
 
	 while(edad < 1 || edad > 100){
		 edad = Number(prompt("Introduzca su edad"));
	 }
	 
	 if(edad >= 18)
	 	alert("Tiene permiso para acceder");
	 else
	 	alert("No se permite acceso a menores de edad");
}

// EJERCICIO 2: Se solicitará la categoría de ropa y el precio actual, aplicará uno de los descuentos siguientes:
// -Camisetas: 5%; -Pantalones: 10%; -Ropa interior: 0%; -Chaquetones: 50%; -A cualquier otra categoría: 2%

function ejercicio2(){
	let categoria = prompt("Introduzca la categoria de ropa: ").toLowerCase();
	let precio = Number(prompt("Introduzca el precio: "));
	
	let descuento;
	switch(categoria){
		case "camisetas":
			descuento = 0.05;
			break;
		case "pantalones":
			descuento = 0.10;
			break;
		case "ropa interior":
			descuento = 0;
			break;
		case "chaquetones":
			descuento = 0.5;
			break;
		default:
			descuento = 0.02;
			break;
	}
	
	precio = precio - precio*descuento;
	
	alert("Precio de la compra: " + precio);
}

// EJERCICIO 3: Realiza un programa en el cual se solicite al usuario que introduzca un valor mediante un form. 
// A este valor se calculará el 30% y se mostrará por la pantalla del navegador y por el log de la consola.

function ejercicio3(){
	let valor = document.getElementsByName('formValor')[0].value;
	// Calculamos el 30% del valor
	valor = valor * 0.3;
	// Imprimimos por pantalla y por la consola
	document.write("El 30% del valor introducido es " +valor);
	console.log("El 30% del valor introducido es " +valor);
}

// EJERCICIO 4 (CALCULADORA FALSA): Crea un programa que evalúe la expresión aritmética que se le pase por pantalla. 
// Una vez la haya evaluado, mostrará el valor de la operación en un campo input de tipo text.
// Añade un input de tipo reset que permita volver al estado inicial del campo en el que se escribe la expresión aritmética.

function evaluar(form){
	let resultado = form.formOperaciones.value;
	form.resultadoOperacion.value = eval(resultado);
}


// CALCULADORA PESO CORPORAL

// EJERCICIO CALCULADORA PESO CORPORAL: El usuario introduce la edad, la altura en centímetros y el sexo biológico.
// Utilizando la fórmula:
// 50+((altura-150)/4)*3 + (edad - 20)/4  Hombre
// (50+((altura-150)/4)*3 + (edad - 20)/4)*0,9  Mujer

function evaluarCalcPesoCorporal(form){
	let edad = form.edadForm.value;
	let altura = form.alturaForm.value;
	let sexo = form.sexoForm.value;
	sexo = sexo.toLowerCase();
	let resultado = (sexo == "hombre" || sexo == "masculino") ? 50+((altura-150)/4)*3 + (edad - 20)/4 : (50+((altura-150)/4)*3 + (edad - 20)/4)*0.9;
	form.resultadoPesoForm.value = eval(resultado);
}