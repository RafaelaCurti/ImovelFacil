import React from "react";
import { Container, ContainerForm, Label, Form } from "./styles";
import Input from "../../Componentes/Input/Input";
import Button from "../../Componentes/Button/Button";

const Login = () => {
    return (
        <Container>
            <h2>Acesse sua conta</h2>
            <p>
                Entre com seu email e senha!
            </p>
            <ContainerForm>
                <Form action="">
                    <Label>
                        Email:
                    </Label>
                    <Input type="email" placeholder="Informe seu email">
                    </Input>
                    <Label>
                        Senha:
                    </Label>
                    <Input type="password" placeholder="Informe sua senha">
                    </Input>
                </Form>
                <Button>Entrar</Button>
            </ContainerForm>
        </Container>
    )
}

export default Login;