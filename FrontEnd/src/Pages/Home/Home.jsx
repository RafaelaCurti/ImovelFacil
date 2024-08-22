import React, { Fragment } from "react";
import { Container } from "../../Componentes/Header/styles";
import { Header, Wrapper } from "./styles";
import Card from "../../Componentes/Card/Card";
import Banner from "../../Componentes/Banner/Banner";

const Home = () => {
    let Cards = [];
    for (let i = 0; i < 4; i++) {
        Cards.push(<Card key={i} />)
    }
    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>
                    Find the property.
                </h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </Fragment>
    )
}

export default Home;