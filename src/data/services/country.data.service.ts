"use client";
import { handleResponse } from "@/domain/shared";
import {
  CountryRepository,
  CountrySelectedAlphaInput,
  CountrySelectedInput,
} from "@/domain/repositories";
import { httpService } from "../http/services/http";
import { Endpoints } from "./endpoints";
import { CountryCardEntity } from "@/domain/entities";

interface CountryResponse {
  data: [CountryCardEntity];
}

export function countryDataService(): CountryRepository {
  const { get } = httpService();

  return {
    async getCountry({ name, success, error }: CountrySelectedInput) {
      try {
        const response: CountryResponse = await get(
          `${Endpoints.country}/${name}`
        );
        if (success) {
          success(response.data[0]);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
    async getCountryByAlpha({
      alphaCode,
      success,
      error,
    }: CountrySelectedAlphaInput) {
      try {
        const response: CountryResponse = await get(
          `${Endpoints.alpha}/${alphaCode}`
        );
        if (success) {
          success(response.data);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
  };
}
