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
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#C0C0C0',

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
`;

const Wapper = styled.div`
    padding-left: 15%;
    @media (max-width: 656px) {
      padding-left: 10%;
    }
`;

const DialogStyled = styled.div`
    margin: 0 auto;
`;

const FontColor = styled.div`
`;

const FontContentsColor = styled.div`
`;

export default function MediaCard() {
    const classes = useStyles();
    const classe = useStyle();


    return (

        <Container>
            <Wapper>
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
                                            <FontColor>LabBase</FontColor>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <FontContentsColor>
                                                2019.01 ~ 2019.12LabBaseの新機能開発, 不具合修正, アーキテクチャの刷新を行なっていました
                                            </FontContentsColor>
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
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://lovetech-media.com/wp-content/uploads/2019/03/labbasex_main.png"
                                        title="LabBaseX"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            LabBase X
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            2019.01 ~ 2019.12 シーズ情報, 研究者情報の初期のスクレイピングを担当していました.
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
                </div>
                <div className={classe.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://lh3.googleusercontent.com/proxy/ao-QeVGhBnnoLfzL2YnCJMphikxavH74BK5MBd3d-MKjAMC5JxtWAoBZqtZ8Pv_oOMhxNbPOQ1EgUh9BsrJJa-Hjcg"
                                        title="enPit"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            PARS (enPit2 BizSysD分野)
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            PARSという, 位置情報を使用した予定管理アンドロイドアプリ
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
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/avatar/Reversi.png"
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
                                    <DialogStyled>
                                        <Dialog />
                                    </DialogStyled>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Wapper>
        </Container>
    );
}