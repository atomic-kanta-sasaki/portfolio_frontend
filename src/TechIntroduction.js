import React from 'react';
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
    padding-left: 54px;
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
                                <Dialog />
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
                                <Dialog />
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
                                <Dialog />
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
                                <Dialog />
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
                                <Dialog />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image
                                src="https://www.dcom-web.co.jp/wp-content/uploads/2015/01/img_play_1.png"
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
                                <Dialog />
                            </DialogStyled>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </CardStyle>
    );
}