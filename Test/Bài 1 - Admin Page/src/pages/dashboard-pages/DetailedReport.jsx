import React, { useEffect, useState } from "react";
import { fetchCustomer } from "../../services/CustomerService";
import { SquareChartGantt } from "lucide-react";
import DataTable from "react-data-table-component";
import { columns } from "./DataTableConfig";

export const DetailedReport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setData(await fetchCustomer());
    };

    fetch();
  }, []);

  return (
    <>
      <div className="flex flex-row items-center space-x-4">
        <SquareChartGantt className="text-pink-500 text-xl" />
        <h1 className="text-xl font-bold">Detailed Report</h1>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    </>
  );
};
