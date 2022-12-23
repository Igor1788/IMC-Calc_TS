// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.insertAdjacentHTML(
  'afterbegin',
  `
  <h1>Calculadora de IMC</h1>
  <form id="formulario">
    <input type="text" name="nome" id="nome" placeholder="Nome">
    <input type="float" name"altura" id="altura" placeholder="Altura">
    <input type="number" name"peso" id="peso" placeholder="Peso">
    <input type="submit" value="Enviar">
  </form>
  <p id="resultado"></p>
`
);

const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  return (resultado.innerText = `Olá ${nome.value}, seu IMC é ${calculaIMC(
    altura.value,
    peso.value
  ).toFixed(2)}`);
});

function calculaIMC(altura, peso) {
  return peso / (altura * altura);
}
