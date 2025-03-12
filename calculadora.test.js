const { subtrai, ehPar, contarCaracteres } = require('./src/calculadora');

test('Subtrai dois números corretamente', () => {
  expect(subtrai(5, 2)).toBe(3);
  expect(subtrai(10, 3)).toBe(7);
});

test('Verifica se um número é par', () => {
  expect(ehPar(4)).toBe(true);
  expect(ehPar(7)).toBe(false);
});

test('Conta o número de caracteres em uma string', () => {
  expect(contarCaracteres('Hello')).toBe(5);
  expect(contarCaracteres('JavaScript')).toBe(10);
});