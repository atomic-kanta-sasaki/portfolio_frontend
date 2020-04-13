import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ProgressBar from './ProgressBar';
import AppBar from './AppBar';
import Avatar from './Avatar';
import Card from './Card';
import Skelton from './Skelton';

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
      <Skelton />
      <Card />
    </Paper>
  );
}