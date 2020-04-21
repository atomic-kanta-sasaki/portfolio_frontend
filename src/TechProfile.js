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

class TechProfile extends Component {
    render() {
        return (
            <Container>
                <TopBar />
                <PastWork />
                <TechIntroduction />
            </Container>
        )
    }
}

export default TechProfile;