import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from './Dialog';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Container = styled.div`
    padding-left: 15%;
`;

export default function MediaCard() {
    const classes = useStyles();
    const classe = useStyle();


    return (
        <Container>
            <div className={classe.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://material.labbase.jp/product/main_ogp.png"
                                    title="LabBase"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        LabBase
                        </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        2019.01 ~ 2019.12LabBaseの新機能開発, 不具合修正, アーキテクチャの刷新を行なっていました
                        </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Dialog />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://assets.st-note.com/production/uploads/images/12299385/rectangle_large_type_2_154e5ea223a9dd1687fcd2f9864ee45a.png?fit=bounds&quality=45&width=1280"
                                    title="LabBaseX"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        LabBase X
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        2019.01 ~ 2019.12 LabBaseXで使用しているシーズ情報, 研究者情報の初期のスクレイピングを<br />
                                        担当していました.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Dialog />
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div className={classe.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://material.labbase.jp/product/main_ogp.png"
                                    title="LabBase"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        PARS (enPit2 BizSysD分野)
                        </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        位置情報を使用した予定管理アプリ(Android)
                        </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Dialog />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://assets.st-note.com/production/uploads/images/12299385/rectangle_large_type_2_154e5ea223a9dd1687fcd2f9864ee45a.png?fit=bounds&quality=45&width=1280"
                                    title="LabBaseX"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Reversi
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Min-MaxとAlphaBeta法を利用したオセロアプリケーション
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Dialog />
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>

    );
}