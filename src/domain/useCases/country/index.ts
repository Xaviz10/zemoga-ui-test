import { handleResponse } from "@/domain/shared";
import {
  CountryRepository,
  CountrySelectedAlphaInput,
  CountrySelectedInput,
} from "../../repositories";

export function useCaseCountry(repository: CountryRepository) {
  return {
    get({ name, success, error }: CountrySelectedInput) {
      return repository.getCountry({ name, success, error });
    },
    getByAlpha({ alphaCode, success, error }: CountrySelectedAlphaInput) {
      return repository.getCountryByAlpha({ alphaCode, success, error });
    },
  };
}
