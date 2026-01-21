const calculadora = require("../../models/calculadora.js");

test("somar 2+2 deve retornar 4", () => {
  const resultados = calculadora.somar(2, 2);

  expect(resultados).toBe(4);
});

test("somar 5+100 deve retornar 105", () => {
  const resultados = calculadora.somar(5, 100);

  expect(resultados).toBe(105);
});

test("somar banana+100 deve retornar erro", () => {
  const resultados = calculadora.somar(100, "banana");

  expect(resultados).toBe("ERRO");
});
