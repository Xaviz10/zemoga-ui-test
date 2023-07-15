import { CountryFlagsEntity } from "./countryFlags.entity";

export interface CountryCardEntity {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: CountryFlagsEntity;
}
