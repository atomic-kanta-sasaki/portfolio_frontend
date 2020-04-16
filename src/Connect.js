import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import styled from 'styled-components';
import InstagramIcon from './InstagramIcon';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '800px',
        marginLeft: '20%',
        marginTop: '2%',
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
    display: flex;
`;

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardActions>
                <IconPlace>
                    <h2>SNS →</h2>
                    <TwitterIcon />
                    <InstagramIcon />
                    <GithubIcon />
                </IconPlace>
            </CardActions>
        </Card>
    );
}
