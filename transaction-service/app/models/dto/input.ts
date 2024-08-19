export interface TransactionInput {
  id: string;
  amount: number;
  amount_received: number;
  capture_method: string;
  created: number;
  currency: string;
  customer: string;
  payment_method: string;
  payment_method_types: string[];
  status: string;
}