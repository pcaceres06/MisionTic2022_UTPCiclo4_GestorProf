import React from 'react'

// import {FaFacebook} from 'react-icons/fa'

import {FooterContainer,FooterLink,FooterLinksContainer,FooterLinkItems,FooterLinksWrapper,FooterWrap,FooterLinkTitle,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRirghts} from './FooterElements'

import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorena</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Inverstors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Pedro</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Inverstors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Jose</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Inverstors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Esteban</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Inverstors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Santiago</FooterLinkTitle>
                                <FooterLink to="/signin">About us</FooterLink>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Inverstors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                            <WebsiteRirghts>dolla C {new Date().getFullYear()}All Rights reserved</WebsiteRirghts>
                            {/* <SocialIconLink fref="/" target="_blank" arial-label="Faccebook">
                                <FaFacebook></FaFacebook>
                            </SocialIconLink>
                            <SocialIconLink fref="/" target="_blank" arial-label="Faccebook">
                                <FaFacebook></FaFacebook>
                            </SocialIconLink>
                            <SocialIconLink fref="/" target="_blank" arial-label="Faccebook">
                                <FaFacebook></FaFacebook>
                            </SocialIconLink> */}


                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
