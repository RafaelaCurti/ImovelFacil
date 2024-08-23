import React, { useState } from "react";
import { Container, Form, Label, ContainerForm} from "./styles";
import Input from "../../Componentes/Input/Input";
import Button from "../../Componentes/Button/Button";
import Api from "../../Services/Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cadastro = () => {
    const [data, setData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const InputValue = (e) => setData({
      ...data, [e.target.name]:
        e.target.value
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Api.post('/criarUsuarios', data)
        .then((response) => {
          if (!response.data.erro === true) {
            toast(response.data.message);
          } else {
            toast(response.data.message);
          }
        })
        .catch(() => {
          console.log('Erro: Erro no sistema')
        })
    }
  
    return (
      <Container>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se para acessar a plataforma!</p>
        <ContainerForm>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              placeholder="Informe seu Nome"
              onChange={InputValue}
            />
            <Label>E-mail</Label>
            <Input
              type="text"
              name="email"
              placeholder="Informe seu E-mail"
              onChange={InputValue}
            />
            <Label>Senha</Label>
            <Input
              type="password"
              name="password"
              placeholder="Informe sua senha"
              onChange={InputValue}
            />
            <Button type="submit">Fazer Cadastro</Button>
          </Form>
        </ContainerForm>
      </Container>
    )
  }
  
  export default Cadastro;