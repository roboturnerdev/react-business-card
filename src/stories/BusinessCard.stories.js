import React from 'react';
import { storiesOf } from '@storybook/react';
import BusinessCard from '../components/core/BusinessCard/BusinessCard';
import styled from 'styled-components';

const Container = styled.div`
    width: 317px;
    height: 780px;
`

export default {
    title: "BusinessCard",
    component: BusinessCard
}

export const Current = () => (
    <Container>
        <BusinessCard 
        heading="Lauren Turner"
        job="Founder & CEO, Lunar Beauty"
        website="lunarbeauty.co"
        icon="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
        eyeicon="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png"
        fb="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
        twt="https://cdn4.iconfinder.com/data/icons/socialcones/508/Viber-512.png"
        linked="https://cdn2.iconfinder.com/data/icons/social-media-2189/48/16-Reddit-512.png"
        />
    </Container>
)