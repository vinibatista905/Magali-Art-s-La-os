import React from 'react'
import { Button } from '../../globalStyles';
import { GiBowTieRibbon, GiHeartNecklace, GiTiara } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  ButtonLink
} from './ProductsElements';

function Photos() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
             <PricingSection>
        <PricingWrapper>
          <PricingHeading>Produtos</PricingHeading>
          <PricingContainer>

            <PricingCard href='https://www.facebook.com/lacosartslaco/photos/?ref=page_internal' target="_blank" arial-label="Facebook">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiBowTieRibbon />
                </PricingCardIcon>
                <PricingCardPlan>Laços Infantis</PricingCardPlan>
                <PricingCardCost>R$4.99</PricingCardCost>
                <PricingCardLength>a partir de</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Mais de 30 tipos</PricingCardFeature>
                  <PricingCardFeature>Para todas as idades</PricingCardFeature>
                  <PricingCardFeature>Todas Personalizadas</PricingCardFeature>
                </PricingCardFeatures>
                <ButtonLink href='https://www.facebook.com/lacosartslaco/photos/?ref=page_internal' target="_blank" arial-label="Facebook">
                <Button primary>Ver Fotos</Button>
                </ButtonLink>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard href='https://www.facebook.com/lacosartslaco/photos/?ref=page_internal' target="_blank" arial-label="Facebook">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHeartNecklace />
                </PricingCardIcon>
                <PricingCardPlan>Pulseiras Infantis</PricingCardPlan>
                <PricingCardCost>R$9.99</PricingCardCost>
                <PricingCardLength>a partir de</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Mais de 20 tipos</PricingCardFeature>
                  <PricingCardFeature>Para todas as idades</PricingCardFeature>
                  <PricingCardFeature>Todas Personalizadas</PricingCardFeature>
                </PricingCardFeatures>
                <ButtonLink href='https://www.facebook.com/lacosartslaco/photos/?ref=page_internal' target="_blank" arial-label="Facebook">
                <Button primary>Ver Fotos</Button>
                </ButtonLink>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard href='https://www.facebook.com/lacosartslaco/photos/?ref=page_internal' target="_blank" arial-label="Facebook">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTiara />
                </PricingCardIcon>
                <PricingCardPlan>Tiaras Infantis</PricingCardPlan>
                <PricingCardCost>R$9.99</PricingCardCost>
                <PricingCardLength>a partir de</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Mais de 10 tipos</PricingCardFeature>
                  <PricingCardFeature>Para todas as idades</PricingCardFeature>
                  <PricingCardFeature>Todas Personalizadas</PricingCardFeature>
                </PricingCardFeatures>
                <ButtonLink href='https://www.facebook.com/lacosartslaco/photos/?ref=page_internal' target="_blank" arial-label="Facebook">
                <Button primary>Ver Fotos</Button>
                </ButtonLink>
              </PricingCardInfo>
            </PricingCard>

          </PricingContainer>
        </PricingWrapper>
      </PricingSection>



            
        </IconContext.Provider>
    )
}

export default Photos
