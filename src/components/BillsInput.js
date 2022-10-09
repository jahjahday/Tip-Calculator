import React from "react";

function BillsInput({ bill, number }) {
  return (
    <div>
      <span>Bill</span>
      <br />
      <input
        onChange={bill}
        value={number}
        className="bg-blue-900 h-12 p-2 rounded-md lg:w-[81%] sm:w-[100%]"
      />
    </div>
  );
}

export default BillsInput;
