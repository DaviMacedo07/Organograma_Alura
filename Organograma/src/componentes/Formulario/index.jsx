import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao/Index";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState(""); 
  const [time, setTime] = useState("");
  const [erroImagem, setErroImagem] = useState(false);

  const handleImagem = (evento) => {
    const file = evento.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
        setErroImagem(false); // Remove erro ao selecionar imagem
      };
      reader.readAsDataURL(file);
    }
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    if (!imagem) {
      setErroImagem(true); // Ativa erro se não tiver imagem
      return;
    }
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
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
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        
        <div className="campo">
          <label>Imagem (Upload)</label>
          <input type="file" accept="image/*" onChange={handleImagem} />
          {erroImagem && <p className="erro">⚠️ A imagem é obrigatória!</p>}
        </div>
        
       
        <ListaSuspensa
          label="Time"
          itens={props.times}
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
