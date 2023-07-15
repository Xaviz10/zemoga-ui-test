import { CountryCurrencyEntity } from "./countryCurrency.entity";
import { CountryFlagsEntity } from "./countryFlags.entity";
import { CountryLanguagesEntity } from "./countryLanguages.entity";

export interface CountryEntity {
  alpha3Code: string;
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  capital: string;
  currencies: CountryCurrencyEntity[];
  region: string;
  subregion: string;
  borders: string[];
  population: number;
  flags: CountryFlagsEntity;
  languages: CountryLanguagesEntity[];
}
