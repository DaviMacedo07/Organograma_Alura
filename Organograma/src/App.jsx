import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundario:'#d9f7e9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSecundario:'#e8f8ff'
    },
    {
      nome:'Data-Science',
      corPrimaria:'#A6D157',
      corSecundario:'#F0F8E2'
    },
    {
      nome:'Back-End',
      corPrimaria:'#E06B69',
      corSecundario:'#FDE7E8'
    },
    {
      nome:'DevOps',
      corPrimaria:'#DB6EBF',
      corSecundario:'#FAE9F5'
    },
    {
      nome:'Ux e Design',
      corPrimaria:'#FFBA05',
      corSecundario:'#FFF5D9'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FF8A29',
      corSecundario:'#FFEEDF'
    },
  ]


  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);  // Atualiza a lista de colaboradores
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdd} />
      {times.map(time => <Time  
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundario={time.corSecundario}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      ></Time>)}
      <Rodape></Rodape>
    </div>
  );
}
export default App
