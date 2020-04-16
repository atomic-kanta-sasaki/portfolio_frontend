import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';
import AppBar from './AppBar';
import styled from 'styled-components';
import Card from './TechIntroduction';
import Introduction from './ Introduction';
import SocialIcons from './SocialIcon';

const useStyles = makeStyles({
  root: {
    width: '1400px',
    margin: 'auto',
    width: '90%',
  },
});

const IntroductionSpace = styled.div`
  margin: 54px;
  margin-top:24px;
`;

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ProgressBar />
      <AppBar />
      <IntroductionSpace>
        <Introduction />
      </IntroductionSpace>
      <Card />
      <SocialIcons />
    </Paper>
  );
}