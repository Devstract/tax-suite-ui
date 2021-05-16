import { Installment } from './installment';

export interface Bill {
  id: string;
  taxYear: string;
  folio: string;
  escrowCode: string;
  millageCode: string;
  amountDue: number;
  amountPaid: number;
  dateDue: Date;
  datePaid: Date;
  installments: Installment[];
}
