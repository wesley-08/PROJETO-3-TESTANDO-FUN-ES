const usuario = require('./src/usuario');

test('Objeto usuario tem nome, idade e email', () => {
  expect(usuario).toHaveProperty('nome');
  expect(usuario).toHaveProperty('idade');
  expect(usuario).toHaveProperty('email');
});

test('Propriedades do objeto usuario têm os tipos corretos', () => {
  expect(typeof usuario.nome).toBe('string');
  expect(typeof usuario.idade).toBe('number');
  expect(typeof usuario.email).toBe('string');
});