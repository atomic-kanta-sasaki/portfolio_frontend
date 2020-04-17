import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from './Dialog';
import './Card.css';
import styled from 'styled-components';
import Image from 'react-image-resizer';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        flowGrow: 1,
        textAlign: 'center',
    },
    media: {
        height: 200,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const DialogStyled = styled.div`
    margin: 0 auto;
`;

const CardStyle = styled.div`
    padding-left: 10%;
`;

const BackgroundImage = styled.body`
    background-image: url(/static/images/avatar/kanta.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;  
`;

const Contents = styled.div`
    height: 1000px;
    width: 1000px;
`;

export default function MediaCard() {
    const classes = useStyles();

    return (
        <BackgroundImage>
            <Contents>
            </Contents>
        </BackgroundImage>
    );
}