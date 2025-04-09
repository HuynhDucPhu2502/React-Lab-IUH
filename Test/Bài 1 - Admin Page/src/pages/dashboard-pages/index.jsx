import { SquareChartGantt } from "lucide-react";
import { Overview } from "./Overview";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-4 py-12 px-4">
      <Overview />
      <div className="flex flex-row items-center space-x-4">
        <SquareChartGantt className="text-pink-500 text-xl" />
        <h1 className="text-xl font-bold">Detailed Report</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
