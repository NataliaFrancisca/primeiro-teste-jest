import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('should be able to render the component correctly', () => {
    render(<App/>)
    const textElement = screen.queryByText('Hello,');
    expect(textElement).toBeInTheDocument();
  
    const inputElement = screen.queryByPlaceholderText('digite seu nome');
    expect(inputElement).toBeInTheDocument();
  
    const imageElement = screen.queryByRole('img');
    expect(imageElement).toBeInTheDocument();
  })
  
  it('should be able to find the image by the alt text', () => {
    render(<App />)
    const altTextImageElement  = screen.queryByAltText("ilustração de uma mulher negra usando o computador e segurando uma xícara");
    expect(altTextImageElement).toBeInTheDocument();
  })
  
  it('should be able to get input value correctly', () => {
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
  
  it('should be able to render the correct content after user type', () => {
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
})