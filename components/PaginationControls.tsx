"use client";

import { BiFirstPage } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { useState } from "react";
import useCurrPage from "@/app/_store/useCurrPage";

const PaginationControls = () => {
  const { id, setId } = useCurrPage();
  const incrementPage = () => {
    if (id !== 5) {
      let a = id + 1;
      setId(a);
    }
  };
  const decrementPage = () => {
    if (id !== 1) setId(id - 1);
  };
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 flex space-x-3">
        <div className="cursor-pointer" onClick={decrementPage}>
          <BiFirstPage size={28} />
        </div>
        <div className="cursor-pointer" onClick={decrementPage}>
          Prev
        </div>
        <div
          onClick={() => setId(1)}
          className={`border-2  rounded-md w-8 text-center cursor-pointer ${
            id === 1 ? "border-red-600 bg-red-600 text-white" : "border-black"
          }`}
        >
          1
        </div>
        <div
          onClick={() => setId(2)}
          className={`border-2  rounded-md w-8 text-center cursor-pointer ${
            id === 2 ? "border-red-600 bg-red-600 text-white" : "border-black"
          }`}
        >
          2
        </div>
        <div
          onClick={() => setId(3)}
          className={`border-2  rounded-md w-8 text-center cursor-pointer ${
            id === 3 ? "border-red-600 bg-red-600 text-white" : "border-black"
          }`}
        >
          3
        </div>
        <div
          onClick={() => setId(4)}
          className={`border-2  rounded-md w-8 text-center cursor-pointer ${
            id === 4 ? "border-red-600 bg-red-600 text-white" : "border-black"
          }`}
        >
          4
        </div>
        <div
          onClick={() => setId(5)}
          className={`border-2  rounded-md w-8 text-center cursor-pointer ${
            id === 5 ? "border-red-600 bg-red-600 text-white" : "border-black"
          }`}
        >
          5
        </div>
        <div className="cursor-pointer" onClick={incrementPage}>
          Next
        </div>
        <div className="cursor-pointer" onClick={incrementPage}>
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
  );
};

export default PaginationControls;
