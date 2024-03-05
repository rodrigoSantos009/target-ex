/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE:  
	Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;  
*/

function fibbo(n) {
  let previous = 0;
  let next = 1;
  let limit = 144;
  while (n > limit) {
    return `${n} is higher than the limit: ${limit}`;
  }
  while (next < n) {
    let num = previous + next;
    if (num === n) return `${n} in sequence`;
    previous = next;
    next = num;
  }
  return `${n} not in sequence`;
}

console.log(fibbo(3))
