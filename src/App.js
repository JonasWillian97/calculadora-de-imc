import {useState} from 'react';
import './app.css';

function App() {

  const [peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');
  const [message, setMessage] = useState('');

  function calcularIMC () {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    setPeso('');
    setAltura('');

    if(imc <= 18.6) {
      setMessage('Você está abaixo do peso seu IMC: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      setMessage('Peso ideal! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9){
      setMessage('Você está levemente acima do peso! Seu IMC: ' + imc.toFixed(2));
    } else if(imc > 34.9){
      setMessage('Cuidado! Você está com alta taxa de obesidade! Seu IMC: ' + imc.toFixed(2));
    }

  }



  return (
    <div className="main">
      <h1>Calculadora de IMC</h1>
      <p>Vamos calcular o seu IMC?</p>
      
      <div className='area-input'>
      <input type='text' placeholder='Digite seu peso em (kg) EX:80' value={peso} onChange={(e) => setPeso(e.target.value)}/>
    <input type='text' placeholder='Digite sua altura em (cm) EX:180' value={altura} onChange={(e) => setAltura(e.target.value)}/>

    <button className ='button-calc'onClick={calcularIMC}>Calcular</button>
      </div>
   
   <h2>{message}</h2>
    </div>
  );
}

export default App;
