export interface Installment {
  id: string;
  taxYear: Date;
  folio: string;
  escrowCode: string;
  millageCode: string;
  amountDue: number;
  amountPaid: number;
  dateDue: Date;
  datePaid: Date;
}
