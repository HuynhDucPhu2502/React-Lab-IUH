import React, { useState } from "react";

const CustomerForm = ({ onSave, initialData }) => {
  const [customerName, setCustomerName] = useState(initialData?.name || "");
  const [companyName, setCompanyName] = useState(
    initialData?.company_name || ""
  );
  const [orderValue, setOrderValue] = useState(initialData?.order_value || "");
  const [orderDate, setOrderDate] = useState(initialData?.order_date || "");
  const [status, setStatus] = useState(initialData?.status || "New");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      name: customerName,
      company_name: companyName,
      order_value: orderValue,
      order_date: orderDate,
      status: status,
    };
    onSave(newCustomer);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 ">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-3 rounded-md  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter customer name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Company</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="border p-3 rounded-md  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter company name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Order Value</label>
        <input
          type="number"
          value={orderValue}
          onChange={(e) => setOrderValue(e.target.value)}
          className="border p-3 rounded-md  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter order value"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Order Date</label>
        <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          className="border p-3 rounded-md  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-3 rounded-md  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="New">New</option>
          <option value="In-progress">In-progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-300"
      >
        Save
      </button>
    </form>
  );
};

export default CustomerForm;
