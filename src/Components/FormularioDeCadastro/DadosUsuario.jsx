import { Button, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

export function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()){
                    aoEnviar({email, senha})
                }
            }}
        >
            <TextField
                value={email}
                onChange={ event => {
                    setEmail(event.target.value)
                }}
                id="email" 
                label="email" 
                type="email"
                required 
                variant="outlined" 
                fullWidth 
                margin="dense"
            />
            <TextField 
                id="senha"
                value={senha}
                onChange={ event => {
                    setSenha(event.target.value)
                }}
                name="senha" 
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                label="senha"
                onBlur={validarCampos} 
                type="password" 
                required
                variant="outlined" 
                fullWidth 
                margin="dense"
            />
            <Button type="submit" variant="contained" color="primary"> Próximo </Button>
        </form>
    ); 
}