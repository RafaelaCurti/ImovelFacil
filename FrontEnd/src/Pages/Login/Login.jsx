import React, { useState, useContext } from 'react';
import { Container, ContainerForm, Label, Form } from "./styles";
import Input from "../../Componentes/Input/Input";
import Button from "../../Componentes/Button/Button";
import { AppContext } from "../../Context/AppContext"; // Certifique-se de que o caminho está correto

const Login = () => {
    const { authenticate } = useContext(AppContext); // Use o contexto diretamente
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      await authenticate(email, password);
    }

    return (
      <Container>
        <h2>Acesse sua conta</h2>
        <p>Entre com seu e-mail e senha!</p>
        <ContainerForm>
          <Form onSubmit={handleLogin} autoComplete="off">
            <Label>E-mail</Label>
            <Input
              type="text"
              name="email"
              placeholder="Informe seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Senha</Label>
            <Input
              type="password"
              name="password"
              placeholder="Informe sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Fazer Login</Button>
          </Form>
        </ContainerForm>
      </Container>
    )
}

export default Login;
