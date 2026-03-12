interface DashboardCardProps {
  children: React.ReactNode;
  title: string;
  amount: string;
  description: string;
  statusColors?: string;
}

export default function DashboardCard({
  children,
  title,
  amount,
  description,
  statusColors,
}: DashboardCardProps) {
  return (
    <div className="shadow-sm p-5 bg-card rounded-md flex flex-col justify-between ">
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{amount}</p>
          <div className="p-2 rounded-full bg-secondary">{children}</div>
        </div>
        <p className={`text-sm ${statusColors}`}>{description}</p>
      </div>
    </div>
  );
}
