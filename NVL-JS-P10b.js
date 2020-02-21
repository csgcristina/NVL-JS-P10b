var veces = 0;
var pares = [];
var impares = [];
while (veces<50){
	var numero = Math.floor((Math.random() * 100) + 1);
	veces++;
	console.log(numero);
	if (numero%2==0) {
		pares.push(numero);
	}
	else {
		impares.push(numero);
	}
}
alert("Estos son los números pares:"+pares);
alert("Estos son los números impares:"+impares); 