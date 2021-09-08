import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioDeCadastro from './Components/FormularioDeCadastro/FormularioDeCadastro';
import "fontsource-roboto"
import {validarCpf, validarSenha} from "./models/Cadastro"
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf: validarCpf, senha: validarSenha}}>
        <FormularioDeCadastro aoEnviar={aoEnviarForm } />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;
