import { Address } from 'src/app/core/interfaces/address';
import { Customer } from 'src/app/core/interfaces/customer';
import { AdValoremAuthority } from './ad-valorem-authority';
import { Bill } from './bill';
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
