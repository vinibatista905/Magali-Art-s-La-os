import styled from "styled-components";
import { GiBowTieRibbon } from "react-icons/gi";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #844d88;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;

`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    
    
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  font-family: "Pacifico", cursive;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: #391c3b;
  }
`;

export const SocialIcon = styled(GiBowTieRibbon)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #391c3b;
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }
`;
