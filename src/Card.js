import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from './Dialog';
import './Card.css';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        flowGrow: 1,
        textAlign: 'center',

    },
    media: {
        height: 290,
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
                            <CardMedia
                                className={classes.media}
                                image="https://cpoint-lab.co.jp/wp-content/uploads/2019/06/javaicon.png"
                                title="Java Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    言語, 技術名: Java
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
                            <CardMedia
                                className={classes.media}
                                image="https://cpoint-lab.co.jp/wp-content/uploads/2019/06/javaicon.png"
                                title="Java Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    言語, 技術名: Java
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
                            <CardMedia
                                className={classes.media}
                                image="https://cpoint-lab.co.jp/wp-content/uploads/2019/06/javaicon.png"
                                title="Java Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    言語, 技術名: Java
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
                            <CardMedia
                                className={classes.media}
                                image="https://cpoint-lab.co.jp/wp-content/uploads/2019/06/javaicon.png"
                                title="Java Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    言語, 技術名: Java
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
                            <CardMedia
                                className={classes.media}
                                image="https://cpoint-lab.co.jp/wp-content/uploads/2019/06/javaicon.png"
                                title="Java Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    言語, 技術名: Java
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
                            <CardMedia
                                className={classes.media}
                                image="https://cpoint-lab.co.jp/wp-content/uploads/2019/06/javaicon.png"
                                title="Java Icon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    言語, 技術名: Java
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