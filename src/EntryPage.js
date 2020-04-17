import React, { Component } from 'react';
import './Card.css';
import styled from 'styled-components';

const BackgroundImage = styled.body`
    background-image: url(/static/images/avatar/kanta.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;  
`;

const Contents = styled.div`
    height: 1000px;
    width: 1000px;
`;

export default function MediaCard() {
    return (
        <BackgroundImage>
            <Contents>
            </Contents>
        </BackgroundImage>
    );
}