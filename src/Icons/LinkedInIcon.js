import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const IconDistance = styled.div`
    margin-bottom: 16px;
    margin-left: 15px;
`;

class LinkedInIcon extends Component {

    render() {
        return (
            <IconDistance>
                <SocialIcon rel="noreferrer noopener" target="_blank" url="https://www.linkedin.com/in/%E5%AF%9B%E5%A4%AA-%E4%BD%90%E3%80%85%E6%9C%A8-8498b71a7/" />
            </IconDistance>
        )
    }
}

export default LinkedInIcon;