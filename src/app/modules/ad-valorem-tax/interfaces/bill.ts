import { Installment } from './installment';

export interface Bill {
  id: string;
  taxYear: Date;
  folio: string;
  escrowCode: string;
  millageCode: string;
  amountDue: number;
  amountPaid: number;
  dateDue: Date;
  datePaid: Date;
  installments: Installment[];
}
