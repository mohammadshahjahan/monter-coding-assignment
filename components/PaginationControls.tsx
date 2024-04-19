"use client";

import { BiFirstPage } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";
import Dropdown from "./Dropdown";

const PaginationControls = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5">
        <div className="col-span-3 flex space-x-3">
          <div>
            <BiFirstPage size={28} />
          </div>
          <div>Prev</div>
          <div className="border-2 border-black rounded-md w-8 text-center">
            1
          </div>
          <div className="border-2 border-black rounded-md w-8 text-center">
            2
          </div>
          <div className="border-2 border-black rounded-md w-8 text-center">
            3
          </div>
          <div className="border-2 border-black rounded-md w-8 text-center">
            4
          </div>
          <div className="border-2 border-black rounded-md w-8 text-center">
            5
          </div>
          <div>Next</div>
          <div>
            <BiLastPage size={28} />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-x-3 ">
            <div>Rows per page</div>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
