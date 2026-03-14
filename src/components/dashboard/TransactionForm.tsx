import type { Transaction } from "../../types"; // Sesuaikan path-mu

interface TransactionFormProps {
  className?: string;

  onAddTransaction: (data: Transaction) => void;
}

export default function TransactionForm({
  className,
  onAddTransaction,
}: TransactionFormProps) {
  const handleLocalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("transaction-name") as string;
    const rawAmount = formData.get("amount") as string;
    const amount = Number(rawAmount.replace(/\D/g, ""));
    const type = formData.get("income-type") as
      | "income"
      | "expense"
      | "installment";

    const newTrx: Transaction = {
      id: `trx-${Date.now()}`,
      name,
      amount,
      type,
      date: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    onAddTransaction(newTrx);

    e.currentTarget.reset();
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, "");
    if (cleanValue === "") {
      e.target.value = "";
      return;
    }

    const newValue = new Intl.NumberFormat("id-ID").format(Number(cleanValue));
    e.target.value = newValue;
  };

  return (
    <div className={`${className} p-5 bg-card rounded-md shadow-sm`}>
      <h3 className="text-xl font-semibold mb-3">Add Transaction</h3>
      {/* 4. Arahkan onSubmit ke Pawang Form lokal */}
      <form className="space-y-2" onSubmit={handleLocalSubmit}>
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
            type="text"
            name="amount"
            id="amount"
            inputMode="numeric"
            onChange={handleAmountChange}
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
