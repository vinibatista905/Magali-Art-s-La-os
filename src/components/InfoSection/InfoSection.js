import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSectionElements";

function InfoSection({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
  to,
  href
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <a href={href} target="_blank">
                  <Button to={href} big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
