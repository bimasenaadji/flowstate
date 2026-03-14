import { useEffect, useState } from "react";
import DashboardSummary from "./components/dashboard/DashboardSummary";
import TransactionForm from "./components/dashboard/TransactionForm";
import TransactionHistory from "./components/dashboard/TransactionHistory";
import Header from "./components/Header";
import { initialTransactions } from "./data/dummyData";
import { type Transaction } from "./types"; // Pastikan import ini ada

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const transactions = localStorage.getItem("transactions");
    if (transactions) {
      return JSON.parse(transactions);
    }
    return initialTransactions;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const totalIncome = transactions
    .filter((trx) => trx.type === "income")
    .reduce((acc, trx) => acc + trx.amount, 0);

  const totalExpense = transactions
    .filter((trx) => trx.type === "expense")
    .reduce((acc, trx) => acc + trx.amount, 0);

  const safeBalance = totalIncome - totalExpense;

  // 1. Ini Walkie-Talkie untuk Anak. Cuma nerima data Object bersih.
  const handleAddTransaction = (newTrx: Transaction) => {
    // Taruh transaksi baru di paling atas array
    setTransactions((prev) => [newTrx, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-8 flex flex-col space-y-5">
        <DashboardSummary
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          safeBalance={safeBalance}
        />
        <div className="grid lg:grid-cols-3 gap-4">
          {/* 2. Kirim Walkie-Talkie-nya ke Form */}
          <TransactionForm
            className="col-span-1"
            onAddTransaction={handleAddTransaction}
          />
          <TransactionHistory
            className="col-span-2"
            transactions={transactions}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
