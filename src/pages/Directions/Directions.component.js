import React from "react";
import { DirectionsIframe, DirectionsList } from "./styles";
import {
  ThanksgivingHightlight,
  ThanksgivingPageWrapper,
  ThanksgivingSpacer,
  ThanksgivingText,
  ThanksgivingTitle,
} from "../../styles";

export const Directions = () => (
  <ThanksgivingPageWrapper>
    <ThanksgivingTitle>
      Directions, Parking & Things to do close by
    </ThanksgivingTitle>

    <ThanksgivingText>
      The party is located at Calle Sierra Nevada, N24, Benalmadena, Malaga.
    </ThanksgivingText>
    <DirectionsIframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.612251092169!2d-4.565906050035468!3d36.58756078724356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e34aa2810cd1%3A0x6f01db297a261131!2sC.%20Sierra%20Nevada%2C%2024%2C%2029631%20Benalm%C3%A1dena%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sus!4v1636313276755!5m2!1sen!2sus"
      allowFullScreen=""
      loading="lazy"
    />

    <ThanksgivingSpacer />

    <ThanksgivingHightlight>Parking</ThanksgivingHightlight>
    <ThanksgivingText>
      Parking is relatively easy and you will be able to find a spot to park on
      the street. You have to park ON the street. What that means is that you
      have to drive the wheels on to the pavement and park.
    </ThanksgivingText>

    <ThanksgivingSpacer />

    <ThanksgivingHightlight>Things to do close by</ThanksgivingHightlight>
    <ThanksgivingText>
      This blog post sums up best what there is to do!{" "}
      <a
        href="https://mylittleworldoftravelling.com/things-to-do-in-benalmadena/"
        rel="noreferrer"
        target="_blank"
      >
        Things to do in Benalmadena
      </a>{" "}
      Summary of the list below:
    </ThanksgivingText>
    <DirectionsList>
      <li>Puerto Marina Benalmadena</li>
      <li>Parque de la Paloma</li>
      <li>Selwo Marina</li>
      <li>Castillo de Colomares</li>
      <li>Buddist Temple</li>
      <li>Mariposario de Benalmádena</li>
      <li>Benalmadena Cable Car</li>
      <li>Castillo de Bil Bil</li>
      <li>Benalmadena Pueblo</li>
    </DirectionsList>
  </ThanksgivingPageWrapper>
);
