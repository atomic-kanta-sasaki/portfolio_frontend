import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import styled from 'styled-components';
import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';

const useStyles = makeStyles({
    root: {
        width: '800px',
        marginLeft: '20%',
        // backgroundColor: '#808080',
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

const IconPlace = styled.div`
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #808080;
    padding-top: 20%;
`;

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Container>
            <Card className={classes.root}>
                <CardActions>
                    <IconPlace>
                        <TwitterIcon />
                        <InstagramIcon />
                        <FacebookIcon />
                        <GithubIcon />
                    </IconPlace>
                </CardActions>
            </Card>
        </Container>
    );
}
