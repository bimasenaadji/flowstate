export interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: "income" | "expense" | "installment";
  date: string;
}
