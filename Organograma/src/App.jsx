import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador);  // Aqui você pode verificar o que está sendo passado
    setColaboradores([...colaboradores, colaborador]);  // Atualiza a lista de colaboradores
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdd} />
      <Time nome="Programação"></Time>
      <Time nome="Frontend"></Time>
      <Time nome="Data Science"></Time>


    </div>
  );
}
export default App
