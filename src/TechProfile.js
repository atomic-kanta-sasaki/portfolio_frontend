import React, { Component } from 'react';
import TechIntroduction from './TechIntroduction';
import TopBar from './TopBar';
import styled from 'styled-components';
import PastWork from './PastWork';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #191919;
`;

const Greeting = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    font-family: 'Caveat', cursive;
    color: #FFFFFF;
    font-size: 60px;
`;

class TechProfile extends Component {
    render() {
        return (
            <Container>
                <TopBar />
                <Greeting>Past Works</Greeting>
                <PastWork />
                <Greeting>Usage Tech</Greeting>
                <TechIntroduction />
            </Container>
        )
    }
}

export default TechProfile;