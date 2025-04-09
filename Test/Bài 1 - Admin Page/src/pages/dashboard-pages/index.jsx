import { Overview } from "./Overview";
import { DetailedReport } from "./DetailedReport";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-4 py-12 px-4">
      <Overview />
      <DetailedReport />
    </div>
  );
};

export default DashboardPage;
