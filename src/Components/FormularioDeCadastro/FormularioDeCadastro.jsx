//import { Typography } from "@material-ui/core";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

function FormularioDeCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formulario.length -1){
            aoEnviar(dadosColetados);
        }
    });

    const formulario=[
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosDeEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigada pelo Cadastro!</Typography>
    ];
    function coletarDados(dados) {
        setDados({...dadosColetados, ...dados});
        proximo();
    }
    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }
    /*evitar switch case... nesse caso é possível utilizar a estrutura de arrays
    function formularioAtual(etapa){
        switch(etapa) {
            case 0: 
                return <DadosUsuario aoEnviar={proximo}/>
            case 1: 
                return <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf}/>
            case 2:
                return <DadosDeEntrega aoEnviar={aoEnviar}/>
            default:
                return <Typography>Erro ao selecionar Formulário </Typography>
        }
    }*/

    return <>
    <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper> 
    {formulario[etapaAtual]}  
    </>;

}


export default FormularioDeCadastro;