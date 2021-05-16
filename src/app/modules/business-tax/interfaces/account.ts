import { Address } from 'src/app/core/interfaces/address';
import { Customer } from 'src/app/core/interfaces/customer';
import { Bill } from './bill';
import { Occupation } from './occupation';

export interface Account {
  id: string;
  accountNumber: string;
  owners: Customer;
  businessAddress: Address;
  status: string;
  businessStartDate: Date;
  businessCloseDate: Date;
  district: string;
  occupations: Occupation[];
  bills: Bill[];
}
