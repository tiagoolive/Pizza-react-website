import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza Rugs</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='nooper noreferrer'>
                                <FaFacebookSquare />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='nooper noreferrer'>
                                <FaInstagramSquare />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn' rel='nooper noreferrer'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='nooper noreferrer'>
                                <FaTwitterSquare />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='nooper noreferrer'>
                                <FaYoutubeSquare />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
