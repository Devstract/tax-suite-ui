import { Account } from './account';
import { Address } from './address';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  businessName: string;
  billingAddress: Address;
  shippingAddress: Address;
  accounts: Account[];
}
