import { CircleDollarSign, Minus, Plus } from "lucide-react";
import DashboardCard from "./DashboardCard";

export default function DashboardSummary() {
  return (
    <div className="w-full grid grid-cols-3 gap-3 justify-center min-h-44">
      <DashboardCard
        title="Total Income"
        amount="Rp 7.000.000"
        description="+12% from last month"
        statusColors="text-accent"
      >
        <Plus color="green" />
      </DashboardCard>
      <DashboardCard
        title="Total Expense"
        amount="Rp 3.000.000"
        description="-8% from last month"
        statusColors="text-destructive"
      >
        <Minus color="red" />
      </DashboardCard>

      <DashboardCard
        title="Safe Balance"
        amount="Rp.4.000.000"
        description="Your available balance"
      >
        <CircleDollarSign />
      </DashboardCard>
    </div>
  );
}
