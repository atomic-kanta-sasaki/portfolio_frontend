import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const IconDistance = styled.div`
    margin-bottom: 16px;
    margin-left: 26px;
`;

export default function SimpleCard() {

    return (
        <IconDistance>
            <SocialIcon rel="noreferrer noopener" target="_blank" url="https://github.com/kantasasakimaru" />
        </IconDistance>
    );
}
