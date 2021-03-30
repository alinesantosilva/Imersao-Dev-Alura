var primeiroVAlor = parseInt(prompt('Digite o primeiro valor'))
var operacao = prompt('Digite: \n / Divisão \n * Multiplicação, \n + Soma \n - Subtração')
var segundoValor = parseInt(prompt('Digite o segundo valor'))
var resultado = primeiroVAlor / segundoValor



if (operacao == '/') {
  var resultado = primeiroVAlor / segundoValor
  document.write('<h2>' + primeiroVAlor + ' / ' + segundoValor + ' = ' + resultado + '</h2')
} else if (operacao == '*') {var resultado = primeiroVAlor * segundoValor
  document.write('<h2>' + primeiroVAlor + ' x ' + segundoValor + ' = ' + resultado + '</h2')
}else if (operacao == '+') {
  var resultado = primeiroVAlor + segundoValor
  document.write('<h2>' + primeiroVAlor + ' + ' + segundoValor + ' = ' + resultado + '</h2')
} else if (operacao == '-') {
  var resultado = primeiroVAlor - segundoValor
  document.write('<h2>' + primeiroVAlor + ' - ' + segundoValor + ' = ' + resultado + '</h2')
} else {
  document.write('<h2>OPÇÃO INVÁLIDA</h2>')
}


// if == se 
// else == senao
// else if == senao se