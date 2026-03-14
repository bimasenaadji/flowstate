import type { Transaction } from "../types";

export const initialTransactions: Transaction[] = [
  {
    id: "trx-1",
    name: "Gaji Project Web",
    amount: 3500000,
    type: "income",
    date: "10 Mar 2026",
  },
  {
    id: "trx-2",
    name: "Makan Siang Nasi Padang",
    amount: 35000,
    type: "expense",
    date: "11 Mar 2026",
  },
  {
    id: "trx-3",
    name: "Cicilan Laptop",
    amount: 750000,
    type: "installment",
    date: "12 Mar 2026",
  },
  {
    id: "trx-4",
    name: "Langganan Internet",
    amount: 350000,
    type: "expense",
    date: "13 Mar 2026",
  },
];
