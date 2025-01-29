import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao/Index";
const Formulario = () => {

  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "Back-End",
    "DevOps",
    "Ux e Design",
    "Mobile"
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("O formulário foi submetido")
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" obrigatorio={true} placeholder="Digite seu nome"></CampoTexto>
        <CampoTexto label="Cargo" obrigatorio={true} placeholder="Digite seu cargo"></CampoTexto>
        <CampoTexto label="Imagem" obrigatorio={true} placeholder="Digite o endereço da imagem"></CampoTexto>
        <ListaSuspensa label="Time" itens={times}></ListaSuspensa>
        <Botao >
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
