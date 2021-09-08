import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export function DadosDeEntrega({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({cep, endereco, numero, cidade, estado})
            }}
        >
            <TextField
                value={cep}
                onChange={ event => {
                    setCep(event.target.value)
                }} 
                id="cep" 
                label="CEP" 
                type="number" 
                variant="outlined"  
                margin="dense"
            />
            <TextField
                value={endereco}
                onChange={ event => {
                    setEndereco(event.target.value)
                }} 
                id="endereco" 
                label="Endereço" 
                type="text" 
                variant="outlined" 
                fullWidth 
                margin="dense"
            />
            <TextField 
                value={numero}
                onChange={ event => {
                    setNumero(event.target.value)
                }}
                id="numero" 
                label="Número" 
                type="text" 
                variant="outlined" 
                margin="dense"
            />
            <TextField
                value={cidade}
                onChange={ event => {
                    setCidade(event.target.value)
                }} 
                id="cidade" 
                label="Cidade" 
                type="text" 
                variant="outlined" 
                margin="dense"
            />
            <TextField
                value={estado}
                onChange={ event => {
                    setEstado(event.target.value)
                }} 
                id="estado" 
                label="Estado" 
                type="text" 
                variant="outlined" 
                margin="dense"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth> Finalizar Cadastro </Button>

        </form>
    )
}