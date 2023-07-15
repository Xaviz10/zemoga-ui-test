import { handleResponse } from "../shared";

export interface CountrySelectedInput extends handleResponse {
  name: string;
}

export interface CountrySelectedAlphaInput extends handleResponse {
  alphaCode: string;
}

export interface CountryRepository {
  getCountry({ name, success, error }: CountrySelectedInput): void;
  getCountryByAlpha({
    alphaCode,
    success,
    error,
  }: CountrySelectedAlphaInput): void;
}
