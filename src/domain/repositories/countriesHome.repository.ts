import { handleResponse } from "../shared";

export interface CountriesHomeRepository {
  getCountries({ success, error }: handleResponse): void;
}
