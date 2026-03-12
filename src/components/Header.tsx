import { HandCoins } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full border-b border-border bg-card p-6 px-10 flex justify-between items-center ">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary rounded-md">
          <HandCoins color="#fff" />
        </div>

        <h1 className="text-2xl font-bold">FlowState</h1>
      </div>
      <p className="text-muted-foreground">Cash flow & Debt Tracker</p>
    </div>
  );
}
