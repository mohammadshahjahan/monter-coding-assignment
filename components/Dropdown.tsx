"use client";

import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Dropdown = () => {
  const [num, setNum] = useState<number>(1);
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [down, setDown] = useState<boolean>(true);
  return (
    
      <div className="flex space-x-3 border p-1 justify-center items-center">
        <div>{num}</div>
        {down ? (
          <FaCaretDown onClick={() => setDown(!down)} />
        ) : (
          <FaCaretUp onClick={() => setDown(!down)} />
        )}
        <div
          className={`z-10 absolute bottom-0 right-6 ${
            down ? "hidden" : "block"
          }`}
        >
          {numbers.map((n) => (
            <div
              key={n}
              className="p-2 border-2 cursor-pointer"
              onClick={() => setNum(n)}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Dropdown;
