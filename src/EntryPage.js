import React, { Component } from 'react';
import './Card.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import './EntryPage.css'

const BackgroundImage = styled.body`
    background-image: url(/static/images/avatar/kanta.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;  
`;

const Contents = styled.div`
    width: 100vw;
    height: 100vh;
`;
const ButtonPosition = styled.div`
    text-align: center;
    padding-top: 38%;
    &:hover {
        transform: rotateX(360deg);
    }
`;

class EntryPage extends Component {

    toMainPage() {
        this.props.history.push('/About')
    }

    render() {
        return (
            <BackgroundImage>
                <Contents>
                    <ButtonPosition>
                        <Button id="btn-1" onClick={this.toMainPage.bind(this)}>
                            entry
                        </Button>
                    </ButtonPosition>
                </Contents>
            </BackgroundImage>
        )
    }
}

export default EntryPage;