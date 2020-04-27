import React, { Component } from 'react';
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
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
    }),
);

class ImageAvatars extends Component {
    render() {
        return (
            <div className={classes.root}>
                <Avatar alt="" src="/static/images/avatar/avaterIcon.jpg" className={classes.large} />
            </div>
        );
    }
}

export default ImageAvatars;