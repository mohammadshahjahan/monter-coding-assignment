"use client";

import React, { useEffect } from "react";
import DATA from "@/libs/REPORTS.json";
import useCurrPage from "@/app/_store/useCurrPage";
import RecordsItem from "./RecordsItem";

const RecordsTable = () => {
  const { id } = useCurrPage();
  var records = DATA.filter((e) => e.page_number === id);
  useEffect(() => {
    records = DATA.filter((e) => e.page_number === id);
    console.log(records);
  }, [id]);
  return (
    <div>
      <div className="">
        {records.map((e) => (
          <RecordsItem
            date={e.date}
            report_name={e.report_name}
            time={e.time}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordsTable;
