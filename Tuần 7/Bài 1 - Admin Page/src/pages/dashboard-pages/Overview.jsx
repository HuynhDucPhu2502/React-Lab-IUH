import React, { useEffect, useState } from "react";
import { SquareChartGantt } from "lucide-react";
import { OverviewCard } from "./OverviewCard";
import { fetchStatic } from "../../services/staticService";

export const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setData(await fetchStatic());
    };

    fetch();
  }, []);

  return (
    <>
      <div className="flex flex-row items-center space-x-4">
        <SquareChartGantt className="text-pink-500 text-xl" />
        <h1 className="text-xl font-bold">Overview</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <OverviewCard
            key={item.id}
            title={item.title}
            total={item.total}
            percent={item.percent}
          />
        ))}
      </div>
    </>
  );
};
