import React, { FC } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 780px;
`
const Image = styled.img`
    max-height: 317px;
    object-fit: none;
    width: 100%;
    object-position: 50% 0%;
`
const Layout = styled.div`
    font-family: Inter;
    padding: 0;
    background: #1A1B21;
    height: 399px;
    color: #F5F5F5;
`
const Contact = styled.div`
    width: 317px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
`
const Nameplate = styled.h1`
    margin-top: 25px;
    margin-bottom: 6px;
    font-size: 25px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
`
const Occupation = styled.h2`
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #F3BF99;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`
const Website = styled.h4`
    margin: 0px;
    font-size: 10px;
    font-weight: 400;
    color: #F5F5F5;
    font-size: 10px;
    line-height: 15px;
`
const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 34px;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.05);
    border-radius: 6px;
    background: #FFFFFF;
    color: #1E1F26;
    border: 1px solid #D1D5DB;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 9px, 13px, 9px, 11px;
    margin: 8px;
`
const Instagrama = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 34px;
    box-sizing: border-box;
    border: none;
    border-radius: 6px;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    padding: 9px, 13px, 9px, 11px;
    margin: 8px;
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
`
// instagram background color gradient
// credit: Iggy https://stackoverflow.com/users/1276188/iggy

const EmailIcon = styled.img`
    max-height: 16px;
    display: flex;
    padding-right: 8px;
`
const Eyeicon = styled.img`
    max-height: 16px;
    max-width: 16px;
    display: flex;
    padding-right: 8px;
`
const Buttongroup = styled.div`
    display: flex;
    flex-directon: row;
    alight-items: center;
    justify-content: center;
    margin-top: 15px;
`
const Textgroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 247px;
    height: 201px;
`
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin-left: 32px;
    margin-right: 32px;
    font-family: Inter;
`
const MainHeader = styled.h3`
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #F5F5F5;
    margin-top: 32px;
    margin-bottom: 0;
`
const MainParagraph = styled.p`
    font-family: Inter;
    font-weight: normal;
    font-size: 10.24px;
    line-height: 150%;
    color: #DCDCDC;
    margin-top: 5px;
`
const MainHeader2 = styled.h3`
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #F5F5F5;
    margin-top: 0px;
    margin-bottom: 0;
`
const MainParagraph2 = styled.p`
    font-family: Inter;
    font-weight: normal;
    font-size: 10.24px;
    line-height: 150%;
    color: #DCDCDC;
    margin-top: 5px;
`
const Footer = styled.div`
    background: #161619;
    border-radius: 0px 0px 10px 10px;
    height: 64px;
    width: 317px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Footimage1 = styled.img`
    height: 30px;
    width: 30px;
    padding: 43px;
`
const Footimage2 = styled.img`
    height: 30px;
    width: 30px;
`
const Footimage3 = styled.img`
    height: 30px;
    width: 30px;
`
type BusinessCardProps = {
    heading: string;
    job: string;
    website: string;
    icon: string;
    eyeicon: string;
    fb: string;
    twt: string;
    linked: string;
}

const BusinessCard:FC<BusinessCardProps> = ({heading, job, website, icon, eyeicon, fb, twt, linked}) => (
    <Container>
        <Image src="https://i.imgur.com/eQEhsbV.png"/>
        <Layout>
            <Contact>
                <Textgroup>
                    <Nameplate>
                    {heading}
                    </Nameplate>
                    <Occupation>
                    {job}
                    </Occupation>
                    <Website>
                    {website}
                    </Website>
                </Textgroup>
                <Buttongroup>
                    <Button>
                    <EmailIcon src={icon} />Email
                    </Button>
                    <Instagrama>
                    <Eyeicon src={eyeicon} />Instagram
                    </Instagrama>
                </Buttongroup>
            </Contact>
            <MainContent>
                <MainHeader>
                About
                </MainHeader>
                <MainParagraph>
                I am a licensed cosmetologist with a particular interest in making things engaging and exciting to learn! I try to keep up with modern trends and techniques, you could even say I'm fashion-forward!
                </MainParagraph>
                <MainHeader2>
                Interests
                </MainHeader2>
                <MainParagraph2>
                Punk rock mom. Horror movie enthusiast. Coffee fanatic. Entrepreneur. Lover of Pizza. Traveler. Beauty Queen. 
                </MainParagraph2>
            </MainContent>
        </Layout>
        <Footer>
            <Footimage2 src={twt} />
            <Footimage1 src={fb} />
            <Footimage3 src={linked} />
        </Footer>
    </Container>
)

export default BusinessCard;