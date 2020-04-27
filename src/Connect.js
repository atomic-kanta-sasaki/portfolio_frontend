import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TwitterIcon from './Icons/TwitterIcon';
import GithubIcon from './Icons/GithubIcon';
import styled from 'styled-components';
import InstagramIcon from './Icons/InstagramIcon';
import FacebookIcon from './Icons/FacebookIcon';
import TopBar from './TopBar';
import LinkedInIcon from './Icons/LinkedInIcon';

const useStyles = makeStyles({
    root: {
        width: '350px',
        backgroundColor: '#333333',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const BackgroundStyle = styled.div`

`;

const IconPlace = styled.div`
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #191919;
`;
const NameSpace = styled.div`
    display: flex;
    align-items: center;
`;

const IconName = styled.div`
    color: #FFFFFF;
    margin-right: 10px;
    font-size: 20px;
    margin-bottom: 12px;
`;

const TitleSpace = styled.div`
    font-style: oblique;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF
`;
const Greeting = styled.div`
    text-align: center;
    font-family: 'Caveat', cursive;
    color: #FFFFFF;
    background-color: #191919;
    font-size: 60px;
`;

class Connect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            root: {
                width: '350px',
                backgroundColor: '#333333',
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        }
    }

    useStyles = makeStyles({

    });

    classes = useStyles();


    render() {
        return (
            <div>
                <TopBar />
                <Greeting>Contact</Greeting>
                <Container>
                    <Card className={this.state.root}>
                        <TitleSpace>SNS Accounts</TitleSpace>
                        <CardActions>
                            <IconPlace>
                                <NameSpace>
                                    <IconName>Twitter</IconName>
                                    <TwitterIcon />
                                </NameSpace>
                                <NameSpace>
                                    <IconName>Instagram</IconName>
                                    <InstagramIcon />
                                </NameSpace>
                                <NameSpace>
                                    <IconName>FaceBook</IconName>
                                    <FacebookIcon />
                                </NameSpace>
                                <NameSpace>
                                    <IconName>GitHub</IconName>
                                    <GithubIcon />
                                </NameSpace>
                                <NameSpace>
                                    <IconName>LinkedIn</IconName>
                                    <LinkedInIcon />
                                </NameSpace>
                            </IconPlace>
                        </CardActions>
                        <TitleSpace>Email</TitleSpace>
                        <IconName>Gmail→ kanta.sasaki.0111@gmail.com</IconName>
                        <IconName>Univ.Mail→ g1723035@tcu.ac.jp</IconName>
                    </Card>
                </Container>
            </div>

        );
    }
}

export default Connect;