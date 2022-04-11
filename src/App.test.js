// ✔ Quando a tela carrega, o componente renderiza corretamente
// ✔ A imagem está acessível com o texto alternativo?
// ✔ O input funciona capturando o valor digitado?
// ✔ Após a usuária digitar o nome, o texto renderiza corretamente na tela?

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('deverá renderizar os elementos corretamente', () => {
  render(<App/>)
  const textElement = screen.queryByText('Hello,');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.queryByPlaceholderText('digite seu nome');
  expect(inputElement).toBeInTheDocument();

  const imageElement = screen.queryByRole('img');
  expect(imageElement).toBeInTheDocument();
})

test('Deverá encontrar a imagem com o texto alternativo correto', () => {
  render(<App />)
  const altTextImageElement  = screen.queryByAltText("ilustração de uma mulher negra usando o computador e segurando uma xícara");
  expect(altTextImageElement).toBeInTheDocument();
})

test('Deverá pegar o input corretamente', () => {
  render(<App />)
  const inputElement = screen.queryByPlaceholderText("digite seu nome");
  fireEvent.change(inputElement, {
    target: {
      value: 'Simara'
    }
  })

  const valorDigitado = screen.queryByText("Simara");
  expect(valorDigitado).toHaveTextContent("Simara");
})

test('Deverá renderizar corretamente o texto digitado', () => {
  render(<App />)

  const inputElement = screen.queryByPlaceholderText("digite seu nome");
  fireEvent.change(inputElement, {
    target: {
      value: 'Simara'
    }
  })

  expect(screen.queryByText('Simara')).toHaveTextContent("Simara");
  expect(screen.queryByText('Hello,')).toHaveTextContent("Hello, Simara");
})