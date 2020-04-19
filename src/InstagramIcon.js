import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const IconDistance = styled.div`
    margin-bottom: 16px;
`;
export default function SimpleCard() {

    return (
        <IconDistance>
            <SocialIcon rel="noreferrer noopener" target="_blank" url="https://www.instagram.com/kanta.sasaki.0111/?hl=ja" />
        </IconDistance>
    );
}
