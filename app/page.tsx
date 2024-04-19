import PaginationControls from "@/components/PaginationControls";
import RecordsTable from "@/components/RecordsTable";
import { CiFilter } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="p-4">
      <div className=" grid grid-cols-5">
        <div className="col-span-3 text-right font-bold md:text-2xl">
          Recently Generated Reports
        </div>
        <div className="flex justify-end space-x-2 col-span-2 pr-3">
          <div className="">
            <CiFilter size={32} className="border-2 border-black rounded-md " />
          </div>
          <div>
            <VscClose size={32} className="border-2 border-black rounded-md " />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 p-5 mt-4 bg-slate-100 font-bold">
        <div className="">Date</div>
        <div className="col-span-4">Report Name</div>
        <div className="text-right">Download</div>
      </div>

      <div className="bottom-1 absolute lg:left-72">
        <PaginationControls />
      </div>
      <RecordsTable />
    </div>
  );
}
