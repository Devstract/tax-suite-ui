import { AdValoremAuthority } from './ad-valorem-authority';
import { Address } from './address';
import { Bill } from './bill';
import { Customer } from './customer';
import { NonAdValoremAuthority } from './non-ad-valorem-authority';

export interface Account {
  id: string;
  accountNumber: string;
  owner: Customer[];
  situs: Address;
  bills: Bill[];
  adValorem: AdValoremAuthority[];
  nonAdValorem: NonAdValoremAuthority[];
  folio: string;
  legalDescription: string;
  book: string;
  page: string;
  geoNumber: string;
  range: string;
  township: string;
  section: string;
  neighborhood: string;
  block: string;
  lot: string;
  useCode: string;
  totalAcres: string;
  installmentPlan: boolean;
  linkedAccountIds: string[];
}
