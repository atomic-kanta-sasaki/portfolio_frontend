import React, { Component, Profiler } from 'react';
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
import Arduino from './TechContents/Arduino';
import Docker from './TechContents/Docker';
import Java from './TechContents/Java';
import JS from './TechContents/JS';
import Kotlin from './TechContents/Kotlin';
import Play from './TechContents/Play';
import Python from './TechContents/Python';
import Reacts from './TechContents/React'
import MySQL from './TechContents/MySQL';

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

export default function MediaCard() {
    const classes = useStyles();

    return (
        <CardStyle>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2015/12/java_logo-320x320.png"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Java
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Java />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Reacts />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    JavaScript
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <JS />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="data:image/png;base64,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"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Python
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Python />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="data:image/png;base64,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"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    MySQL
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <MySQL />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="https://pbs.twimg.com/profile_images/525406577080037377/HqN22PuY_400x400.png"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Play
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Play />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="data:image/jpeg;base64,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"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Kotlin
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Kotlin />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="https://datawokagaku.com/wp-content/uploads/2020/01/docker_icon.png"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Docker
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Docker />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="data:image/jpeg;base64,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"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Arduino
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Level: ★★★★
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <DialogStyled>
                                <Arduino />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </CardStyle>
    );
}