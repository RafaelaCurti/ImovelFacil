import React from "react";
import { Container, Form, Label, ContainerForm} from "./styles";
import Input from "../../Componentes/Input/Input";
import Button from "../../Componentes/Button/Button";

const Cadastro = () => {
    return (
        <Container>
            <h2>Crie sua conta</h2>
            <p>
                Cadastre-se para acessar a plataforma!
            </p>
            <ContainerForm>
                <Form action="">
                    <Label>
                        Nome:
                    </Label>
                    <Input type="text" placeholder="Informe seu nome">
                    </Input>
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
                    <Button>Cadastrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;