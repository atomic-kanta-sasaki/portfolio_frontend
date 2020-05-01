import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import LabBase from './DialogContent/LabBase';
import LabBaseX from './DialogContent/LabBaseX';
import EnPiT from './DialogContent/enPit';
import Reversi from './DialogContent/Reversi';
import './PastWork.css';

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
    text-align: center;
`;

const FontContentsColor = styled.div`
`;



class PastWork extends Component {
    render() {
        return (
            <Container>
                <Wapper>
                    <div className="past_work_container">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Card className="past_work_card_style">
                                    <CardActionArea onClick>
                                        <CardMedia
                                            className="past_work_card_media"
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
                                            <LabBase />
                                        </DialogStyled>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>

                            </Grid>
                        </Grid>
                    </div>
                    <div className="past_work_container">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Card className="past_work_card_style">
                                    <CardActionArea>
                                        <CardMedia
                                            className="past_work_card_media"
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
                                            <EnPiT />
                                        </DialogStyled>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card className="past_work_card_style">
                                    <CardActionArea>
                                        <CardMedia
                                            className="past_work_card_media"
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
                                            <Reversi />
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
}

export default PastWork;