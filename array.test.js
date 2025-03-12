const filtrarPares = require('./src/array');

test('Filtra apenas os números pares de um array', () => {
  const numeros = [1, 2, 3, 4, 5, 6];
  const pares = filtrarPares(numeros);
  expect(pares).toEqual([2, 4, 6]);
});