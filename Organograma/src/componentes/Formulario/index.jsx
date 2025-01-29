import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao/Index";
import { useState } from "react";
const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "Back-End",
    "DevOps",
    "Ux e Design",
    "Mobile",
  ];

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        ></CampoTexto>
        <CampoTexto
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}

        ></CampoTexto>
        <CampoTexto
          label="Imagem"
          obrigatorio={true}
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}

        ></CampoTexto>
        <ListaSuspensa 
        label="Time" 
        itens={times} 
        obrigatorio={true}
        valor = {time}
        aoAlterado={valor => setTime(valor)}
        >

        </ListaSuspensa>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
