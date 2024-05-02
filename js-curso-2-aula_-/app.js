let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function mensagemInicial(){
    exibirTexto('h1', 'Adivinhe o número');
    exibirTexto('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto);

    if(chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        let palavreTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o núemero com ${tentativas} ${palavreTentativas}`;
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (chute > numeroSecreto){
            exibirTexto('p', `O número é menor`);
        }else{
            exibirTexto('p', `O número é maior`);
        }

        tentativas++;
        limparCampo();
    }

    
}

function gerarNumeroAleatorio() {

    let numeroEsolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if(quantidadeDeElementos == numeroLimite) {
        listaDeNumerosSorteados= [];
    }

    if(listaDeNumerosSorteados.includes(numeroEsolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEsolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEsolhido;
    }

    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
    
}

/*1
function IMC(p, h){
   
    let IMC = p / (h*h);
    return IMC;
}
//2
let calculoIMC = IMC (68,1.65);
console.log(calculoIMC);


function calculaFatorial(numero){
    
    if(numero === 1 || numero ===0){
        return 1;
    }

    let fatorial = 1;

    for(let i = 1; i <= numero; i++){
        fatorial *= i
    }
    return fatorial;
}

let numero = 4;

let resultado = calculaFatorial(numero);

console.log(`O fatorial de ${numero} é = ${resultado}`);

//3

function conversaoReal(dolar){

    let real = dolar * 4.80;

    return real;

}

let valorDolar = 50.5;
let valorReal = parseFloat(conversaoReal(valorDolar).toFixed(2));

console.log(`A conversão de U$$ ${valorDolar} para real é: R$ ${valorReal}`);


//4
function calculoRetangulo(a, l) {

    return a * l;
    
}

let altura = 5;
let largura = 10;
let retangulo = calculoRetangulo(altura, largura);

console.log(`A área do retângulo com altura ${altura} e largura ${largura} é de: ${retangulo}`);

//5
function calculaCirculo(raio) {
    let area = Math.PI * (raio * raio);
    let perimetro = 2 * Math.PI * raio;

    console.log(`O perímetro do círculo com raio ${raio} é: ${perimetro.toFixed(2)}`);
    console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);
    
}

let raio = 5;

calculaCirculo(raio);
*/
//6

/*function tabuada(num) {
    for (let i=1; i <= 10; i++) {

      let result = num * i;

      console.log(`${num} x ${i} = ${result}`);

    }
  }
  
  let num = 5;

  tabuada(num);

  let listaGenerica = [];
  let linguagensProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

 linguagensProgramacao.push('Java', 'Ruby', 'GoLang');

 console.log(linguagensProgramacao[0]);
 console.log(linguagensProgramacao[1]);
 let ultimo = linguagensProgramacao.length -1;
 console.log(linguagensProgramacao[ultimo]);
*/

  

















//function saudacao(){
 //   console.log('Olá, mundo');
//}
//saudacao();


//function mostraNome(nome){
  //  console.log(`Olá, ${nome}`);
//}

//mostraNome("Isadora");



/*function calculaDobro(numero){
    return numero * 2;
}

let resultado = calculaDobro(10);
console.log(resultado);
*/

/*function media(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

let mediaAritimetica = media(5, 2, 3);
console.log(parseInt(mediaAritimetica));
*/

/*function maiorValor(a, b){
    return a > b ? a : b;
}

let maiorNumero = maiorValor(5, 20);
console.log(maiorNumero);
*/

/*function quadradoDoNumero(numero) {

    return numero * numero;
    
}

let resultado = quadradoDoNumero(5);
console.log(resultado);*/








/*function clicaAlerta(){
    alert('Eu amo JS');
}

function botaoPrompt(){

    let cidade = prompt('Digite o nome de uma cidade do Brasil');

    alert(`Estive em ${cidade} e lembrei de você`);
}

function somar(){
    let num1 = parseInt(prompt('Insira o valor do número 1'));
    let num2 = parseInt(prompt('Insira o valor do número 2'));
    let resultado = num1 + num2;

    alert(`${num1} + ${num2} = ${resultado}`);
}*/
