import type { Transaction } from "../../types";

interface TransactionHistoryProps {
  className?: string;
  transactions: Transaction[];
}

export default function TransactionHistory({
  className,
  transactions,
}: TransactionHistoryProps) {
  return (
    <div className={`${className} bg-card p-5 rounded-md shadow-md`}>
      <h3 className="text-xl font-semibold">Transaction History</h3>

      <table className="w-full table-fixed mt-5">
        <thead>
          <tr>
            <th className="border-b p-2 text-start">Date</th>
            <th className="border-b p-2 text-start">Item Name</th>
            <th className="border-b p-2 text-start">Type</th>
            <th className="border-b p-2 text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trx) => (
            <tr key={trx.id}>
              <td className="border-b p-2">{trx.date}</td>
              <td className="border-b p-2">{trx.name}</td>
              <td className="border-b p-2">{trx.type}</td>
              <td className="border-b p-2 text-end">{trx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
