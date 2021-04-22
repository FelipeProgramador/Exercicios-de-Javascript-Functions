3//Criar uma funçao que mostre se um valor é truthy
function testaValor(dado){
	return !!dado;
}

console.log(testaValor(21));

//Crie uma função matematica que retorne o perimetro de um quadrado
function calculaPerimetro(lado){
	var perimetro = lado * 4;
	return perimetro;
}

console.log(calculaPerimetro(2));

//Crie uma função que retorne seu nome completo
function retornaNome(nome,sobrenome){
	var nomeCompleto = nome + ' ' + sobrenome;
	return nomeCompleto;
}

console.log(retornaNome('Izuko','Midoriya'));

//Crie uma função que verifica se um número é par
function verificaPar(numero){
	var modulo = numero % 2;
	if (modulo === 0) {
		return true;
	}else{
		return false;
	}
}

console.log(verificaPar(13));

//Crie uma funçao que retorne o typeof do valor colocado nela
function verificaTypeof(valor){
	var tipo = typeof valor;
	return tipo;
}

console.log(verificaTypeof(function(){
	console.log('oi');
}));

//Usar o addEventListener para mostrar meu nome quando fizer um click
addEventListener('click', function(){
		console.log('Deku');
});
	

