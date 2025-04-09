import React, { useCallback, useState } from "react";
import { fetchCustomer } from "../../../services/CustomerService";
import { SquareChartGantt } from "lucide-react";
import DataTable from "react-data-table-component";
import { columns } from "./DataTableConfig";
import { Loading } from "../../../components/Loading";
import useFetch from "../../../hooks/useFetch";
import { Modal } from "../../../components/Modal";
import CustomerForm from "./CustomerForm";

export const DetailedReport = () => {
  const stableFetchCustomer = useCallback(fetchCustomer, []);
  const { data, isLoading } = useFetch(stableFetchCustomer);
  const [isEditting, setIsEditting] = useState(false);
  const [edittingCustomer, setEdittingCustomer] = useState(null);

  const closeEdit = () => setIsEditting(false);
  const handleStartEdit = (row) => {
    setIsEditting(true);
    setEdittingCustomer(row);
  };

  return (
    <>
      <div className="flex flex-row items-center space-x-4">
        <SquareChartGantt className="text-pink-500 text-xl" />
        <h1 className="text-xl font-bold">Detailed Report</h1>
      </div>

      {/* Đang Fetch */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}

      {/* Hoàn thành Fetch */}
      {!isLoading && (
        <DataTable
          columns={columns(handleStartEdit)}
          data={data}
          pagination
          highlightOnHover
          striped
        />
      )}

      {isEditting && (
        <Modal title={"Customer Form"} onClose={closeEdit}>
          <CustomerForm initialData={edittingCustomer} />
        </Modal>
      )}
    </>
  );
};
