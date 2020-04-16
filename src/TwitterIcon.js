import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';


const IconDistance = styled.div`
    margin-right: 10px;
`;

export default function SimpleCard() {
    return (
        <IconDistance>
            <SocialIcon rel="noreferrer noopener" target="_blank" url="https://twitter.com/kanta_sasaki_" />
        </IconDistance>
    );
}
