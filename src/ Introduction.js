import React, { Component } from 'react';
import styled from 'styled-components';
import './SelfIntroduction.css';
import TopBar from './TopBar';

const Container = styled.div`
    background-color: #191919;
`;

const ImagePlace = styled.div`
`;

const SelfIntroductionSpace = styled.div`
    text-align: center;
    color: #C0C0C0;
`;

const Greeting = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    font-family: 'Caveat', cursive;
    color: #FFFFFF;
    font-size: 60px;
`;


class Introduction extends Component {

    render() {

        return (
            <Container>
                <TopBar />
                <Greeting>
                    Hi, I'm Kanta Sasaki!
            </Greeting>
                <ImagePlace>
                    <img
                        id="icon-image"
                        src="static/images/avatar/avater.jpg"
                        height={400}
                        width={400}
                    />
                </ImagePlace>
                <SelfIntroductionSpace>
                    <h1>Profile</h1>
                    {"1999生, 学生, Webエンジニア"}<br />
                    {"2019年1月~2019年12月"}<br />
                    {" 株式会社POLエンジニアインターン."}<br />
                    {"サーバーサイドをメインにPlay for Javaで新機能開発, 不具合修正を担当."}<br />
                    {"ReactJSを用いたフロントエンドのUIリプレイス, 不具合修正も担当."}<br />
                    <br />
                    <br />
                    {"2019年8月~2020年1月"}<br />
                    {"enPit2 BizSysD参画"}<br />
                    {"Kotlinを用いたAndroidアプリケーションを作成."}<br />
                    {"同時に東京都市大学拠点リーダーをつとめチーム開発の進捗の把握, 次週の開発計画を立てるなど, "}<br />
                    {"チームビルディングを努めながら, 自らも開発を行なった."}<br />
                    <br />
                    <br />
                    {"2020年1月~現在"}<br />
                    {"東京都市大学HumanMediaLab.に配属"}<br />
                    {"研究室ではHCI, ユビキタスコンピューティングに関連した研究を実施中"}<br />
                    <br />

                </SelfIntroductionSpace>
                <SelfIntroductionSpace>
                    <h1>Belonging</h1>
                    {"東京都市大学 Human Media Lab."}
                </SelfIntroductionSpace>
                <SelfIntroductionSpace>
                    <h1>Career</h1>
                    {"調布北高校卒"}<br />
                    {"東京都市大学 情報工学部 知能情報工 在学中"}
                    <br />
                    <br />
                    <br />
                </SelfIntroductionSpace>
            </Container>
        );
    }
}

export default Introduction;