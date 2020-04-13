import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
    }),
);

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="" src="/static/images/avatar/avater.jpg" className={classes.large} />
        </div>
    );
}