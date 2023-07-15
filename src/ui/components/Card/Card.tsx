"use client";
import { FC, MouseEventHandler } from "react";
import { StyledCard, StyledImage, StyledInfoContainer } from "./Card.styles";

interface CardProps {
  image: string;
  country: string;
  population: number;
  region: string;
  capital: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const Card: FC<CardProps> = ({
  image,
  country,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledImage
        src={image}
        alt={`${country}-Flag`}
        title={`${country}-Flag`}
      />
      <StyledInfoContainer>
        <h3>{country}</h3>
        <li>
          <strong>Population:</strong>
          {population}
        </li>
        <li>
          <strong>Region:</strong>
          {region}
        </li>
        <li>
          <strong>Capital:</strong>
          {capital}
        </li>
      </StyledInfoContainer>
    </StyledCard>
  );
};
