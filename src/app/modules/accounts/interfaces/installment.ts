export interface Installment {
  id: string;
  taxYear: string;
  folio: string;
  escrowCode: string;
  millageCode: string;
  amountDue: number;
  amountPaid: number;
  dateDue: Date;
  datePaid: Date;
}
