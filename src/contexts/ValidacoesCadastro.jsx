import { createContext } from "react";

const ValidacoesCadastro = createContext(
    {cpf: semValidacao, senha: semValidacao}
);
function semValidacao(dados) {
    console.log(dados)
    return { valido: true, texto: ""}
}
//em vez de passar o provider, pode passar o dados default
export default ValidacoesCadastro;