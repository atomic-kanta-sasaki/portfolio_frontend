import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';
import AppBar from './AppBar';
import Avatar from './Avatar';
import Card from './Card';

const useStyles = makeStyles({
  root: {
    width: '1400px',
    margin: 'auto',
    width: '90%',
  },
});

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ProgressBar />
      <AppBar />
      <Avatar />
      <Card />
    </Paper>
  );
}