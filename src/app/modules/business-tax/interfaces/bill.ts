export interface Bill {
  id: string;
  taxYear: Date;
  amountDue: number;
  amountPaid: number;
  dateDue: Date;
  datePaid: Date;
  occupationId: string;
}
