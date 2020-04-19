import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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

    toMainPage() {
        this.props.history.push('/About')
    }

    toWorkPage() {
        this.props.history.push('/Work')
    }

    toContactPage() {
        this.props.history.push('/contact')
    }

    render() {
        return (
            <Container>
                <LinkPosition>
                    <div className="now-link">
                        About
                    </div>
                    <div className="slice">/</div>
                    <div>
                        <a className="link" href="/TechProfile">Work</a>
                    </div>
                    <div className="slice">/</div>
                    <div>
                        <a className="link" href="/">entry</a>
                    </div>

                </LinkPosition>
            </Container>
        );
    }
}

export default TopBar;