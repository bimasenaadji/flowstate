export default function TransactionForm({ className }: { className?: string }) {
  return (
    <div className={`${className} p-5 bg-card rounded-md shadow-sm`}>
      <h3 className="text-xl font-semibold mb-3">Add Transaction</h3>
      <form className="space-y-2">
        <div className="flex flex-col space-y-4">
          <label className="font-semibold text-sm" htmlFor="transaction-name">
            Transaction Name
          </label>
          <input
            className="px-3 py-1 border border-border rounded-sm"
            type="text"
            name="transaction-name"
            id="transaction-name"
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <label className="font-semibold text-sm" htmlFor="amount">
            Amount (IDR)
          </label>
          <input
            className="px-3 py-1 border border-border rounded-sm"
            type="number"
            name="amount"
            id="amount"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-sm" htmlFor="income-type">
            Type
          </label>
          <select
            className="px-3 py-1 border border-border rounded-sm"
            name="income-type"
            id="income-type"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="installment">Installment</option>
          </select>
        </div>
        <button
          className="py-2 w-full bg-primary rounded-md text-white mt-2"
          type="submit"
        >
          Save Transaction
        </button>
      </form>
    </div>
  );
}
