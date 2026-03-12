export default function TransactionHistory({
  className,
}: {
  className?: string;
}) {
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
          <tr>
            <td className="border-b p-2">10 Mar 2024</td>
            <td className="border-b p-2">Salary Deposit</td>
            <td className="border-b p-2">Income</td>
            <td className="border-b p-2 text-end">+Rp 5.000.000</td>
          </tr>
          <tr>
            <td className="border-b p-2">10 Mar 2024</td>
            <td className="border-b p-2">Salary Deposit</td>
            <td className="border-b p-2">Income</td>
            <td className="border-b p-2 text-end">+Rp 5.000.000</td>
          </tr>
          <tr>
            <td className="border-b p-2">10 Mar 2024</td>
            <td className="border-b p-2">Salary Deposit</td>
            <td className="border-b p-2">Income</td>
            <td className="border-b p-2 text-end">+Rp 5.000.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
