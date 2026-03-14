import { CircleDollarSign, Minus, Plus } from "lucide-react";
import DashboardCard from "./DashboardCard";

interface DashboardSummaryProps {
  totalIncome: number;
  totalExpense: number;
  safeBalance: number;
}

export default function DashboardSummary({
  totalIncome,
  totalExpense,
  safeBalance,
}: DashboardSummaryProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-3 justify-center min-h-44">
      <DashboardCard
        title="Total Income"
        amount={`Rp ${totalIncome.toLocaleString("id-ID")}`}
        description="+12% from last month"
        statusColors="text-accent"
      >
        <Plus color="green" />
      </DashboardCard>
      <DashboardCard
        title="Total Expense"
        amount={`Rp ${totalExpense.toLocaleString("id-ID")}`}
        description="-8% from last month"
        statusColors="text-destructive"
      >
        <Minus color="red" />
      </DashboardCard>

      <DashboardCard
        title="Safe Balance"
        amount={`Rp ${safeBalance.toLocaleString("id-ID")}`}
        description="Your available balance"
      >
        <CircleDollarSign />
      </DashboardCard>
    </div>
  );
}
