"use client";
import { handleResponse } from "@/domain/shared";
import { CountriesHomeRepository } from "../../domain/repositories";
import { httpService } from "../http/services/http";
import { Endpoints } from "./endpoints";
import { CountryCardEntity } from "@/domain/entities";

interface AllCountriesResponse {
  data: CountryCardEntity[];
}

export function countriesHomeDataService(): CountriesHomeRepository {
  const { get } = httpService();

  return {
    async getCountries({ success, error }: handleResponse) {
      try {
        const response: AllCountriesResponse = await get(Endpoints.countries);
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
