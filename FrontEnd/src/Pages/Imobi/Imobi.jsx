import React, { Fragment } from "react";
import Button from "../../Componentes/Button/Button";
import Input from "../../Componentes/Input/Input";
import TextArea from "../../Componentes/TextArea/TextArea";
import TopBanner from "../../Componentes/TopBanner/TopBanner";

import {
    Container,
    Description,
    Left,
    Profile,
    ProfileContact,
    ProfileDescriptin,
    ProfileFormContact,
    ProfileImg,
    Right,
    Thumb
} from "./styles";

const Imobi = () => {

    return (
        <Fragment>
            <Container>
                <TopBanner />
                <Left>
                    <Thumb>
                        <img alt="Imagem do apartamento" />
                    </Thumb>
                    <Description>
                        <h2>Apartamento / Alugar</h2>
                        <p>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                            <img alt="Imagem do perfil" />
                            <ProfileDescriptin>
                                <h3>Jhon Due</h3>
                                <p>
                                    Descrição do Usuário
                                </p>
                            </ProfileDescriptin>
                        </ProfileImg>
                    </Profile>
                    <ProfileContact>
                        <h3>Informações para Contato:</h3>
                        <p>
                            (11) 0000-0000
                        </p>
                        <p>
                            teste@teste.com
                        </p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Contate por Anunciante</h3>
                        <form autoComplete="off">
                            <Input
                                type="hidden"
                                name="userId"
                            />
                            <Input
                                type="text"
                                placeholder="Nome:"
                                name="client_name"
                            />
                            <Input
                                type="text"
                                placeholder="E-mail:"
                                name="client_email"
                            />
                            <TextArea
                                placeholder="Mensagem:"
                                name="client_mensagem"
                            ></TextArea>
                            <Button>
                                Enviar mensagem
                            </Button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    );
}

export default Imobi;
