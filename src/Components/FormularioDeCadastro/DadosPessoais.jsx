import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

export default function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState(""); 
    const [sobrenome, setSobrenome] = useState(""); 
    const [cpf, setCpf] = useState(""); 
    const [novidades, setNovidades] = useState(true); 
    const [promocoes, setPromocoes] = useState(true); 
    
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    return (
        <form 
            onSubmit={ (event) => {
                event.preventDefault();
                if (possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
                }
            }}
        >
            <TextField 
                value={nome}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth  
                margin="dense"
                onChange={ event => {
                    setNome(event.target.value)
                }}
            />  

            <TextField 
                value={sobrenome}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="dense"
                onChange={ event => {
                    setSobrenome(event.target.value)
                }}
            />

            <TextField 
                value={cpf}
                name="cpf"
                type="number"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="dense"
                onChange={ event => {
                    setCpf(event.target.value)
                }}
                onBlur={validarCampos}
            />
            <FormControlLabel
                label="Promoções"  
                control={<Switch 
                    checked={promocoes}
                    name="Promoções" 
                    color="primary" 
                    onChange={ event => {
                        setPromocoes(event.target.checked)
                    }}
                />} 
            /> 
              
            <FormControlLabel 
                label="Novidades"  
                control={<Switch 
                    name="Novidades" 
                    checked={novidades} 
                    color="primary" 
                    onChange={ event => {
                        setNovidades(event.target.checked)
                    }}
                />} 
            />
            

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    )
}