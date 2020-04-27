import React, { Component } from 'react';
import styled from 'styled-components';
import './TopBar.css';

const Container = styled.div`
    background-color: #000000;
    height: 70px;
    display: flex;
`;

const LinkPosition = styled.div`
    padding-top: 20px;
    display:flex;
    color: 	#808080;
    font-size: 25px;
    margin: auto;
`;

class TopBar extends Component {
    render() {
        return (
            <Container>
                <LinkPosition>
                    <div className="link">
                        <a className="link" href="/About">About</a>
                    </div>
                    <div className="slice">/</div>
                    <div>
                        <a className="link" href="/work">Work</a>
                    </div>
                    <div className="slice">/</div>
                    <div>
                        <a className="link" href="/contact">contact</a>
                    </div>

                </LinkPosition>
            </Container>
        );
    }
}

export default TopBar;