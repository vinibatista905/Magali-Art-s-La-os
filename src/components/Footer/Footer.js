import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialIcon,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      
      <SocialMedia>
          <SocialMediaWrap>
              <SocialLogo to='/'>
                  <SocialIcon />
                  Magali Art's Laços
              </SocialLogo>
              <WebsiteRights>
                  Magali Art's Laços © 2021
              </WebsiteRights>
              <SocialIcons>
                  <SocialIconLink href='https://www.facebook.com/lacosartslaco/?ref=page_internal' target="_blank" arial-label="Facebook">
                      <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href='https://www.instagram.com/magalibatista0002/' target="_blank" arial-label="Instagram">
                      <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href="mailto:magalibatista.mm@gmail.com" target="_blank" arial-label="E-mail">
                      <MdEmail />
                  </SocialIconLink>
                  <SocialIconLink href='https://wa.me/11987804589' target="_blank" arial-label="Whatsapp">
                      <FaWhatsapp />
                  </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
