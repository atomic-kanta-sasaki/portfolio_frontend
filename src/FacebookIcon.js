import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';


const IconDistance = styled.div`
    margin-bottom: 16px;
    margin-left: 2px;
`;

export default function SimpleCard() {
    return (
        <IconDistance>
            <SocialIcon color="#FFFFFF" rel="noreferrer noopener" target="_blank" url="https://www.facebook.com/profile.php?id=100034645643304" />
        </IconDistance>
    );
}
