import { handleResponse } from "@/domain/shared";
import { CountriesHomeRepository } from "../../repositories";

export function useCaseCountriesHome(repository: CountriesHomeRepository) {
  return {
    get({ success, error }: handleResponse) {
      return repository.getCountries({ success, error });
    },
  };
}
