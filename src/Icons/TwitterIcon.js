import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';


const IconDistance = styled.div`
    margin-bottom: 16px;
    margin-left: 28px;
`;


class TwitterIcon extends Component {
    render() {
        return (
            <IconDistance>
                <SocialIcon color="#FFFFFF" rel="noreferrer noopener" target="_blank" url="https://twitter.com/kanta_sasaki_" />
            </IconDistance>
        );
    }
}

export default TwitterIcon;
