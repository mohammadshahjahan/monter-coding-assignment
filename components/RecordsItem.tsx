import React from "react";
import { GrDocumentDownload } from "react-icons/gr";

interface RecordsItemProps {
  date: string;
  time: string;
  report_name: string;
}

const RecordsItem: React.FC<RecordsItemProps> = ({
  date,
  time,
  report_name,
}) => {
  return (
    <div className="grid grid-cols-6 p-5  ">
      <div className="">
        <div>{date}</div>
        <div className="text-xs text-gray-600">{time}</div>
      </div>
      <div className="col-span-4">{report_name}</div>
      <div className="text-right flex items-end justify-end">
        <GrDocumentDownload size={32} />
      </div>
    </div>
  );
};

export default RecordsItem;
