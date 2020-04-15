import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from './Avatar';
import Biograpyh from './ Biography';
import SelfIntroduction from './ SelfIntroduction';
import styled from 'styled-components';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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

const IntroducutionStyle = styled.div`
    display: flex;
`;

const CardSize = styled.div`
    width: 486px;
    height: 336px;
    margin-right: 6px;
`;

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <IntroducutionStyle>
                    <Avatar />
                    <CardSize>
                        <Biograpyh />
                    </CardSize>
                    <CardSize>
                        <SelfIntroduction />
                    </CardSize>
                </IntroducutionStyle>
            </CardContent>
        </Card>
    );
}