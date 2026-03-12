import DashboardSummary from "./components/dashboard/DashboardSummary";
import TransactionForm from "./components/dashboard/TransactionForm";
import TransactionHistory from "./components/dashboard/TransactionHistory";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-8 flex flex-col space-y-5">
        <DashboardSummary />
        <div className="grid lg:grid-cols-3 gap-4">
          <TransactionForm className="col-span-1" />
          <TransactionHistory className="col-span-2" />
        </div>
      </main>
    </div>
  );
}

export default App;
