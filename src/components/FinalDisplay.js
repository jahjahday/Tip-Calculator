import React from "react";

function FinalDisplay({ reset, total, result }) {
  return (
    <div>
      <div className="bg-[#002] lg:ml-4 lg:mt-0 sm:mt-12 rounded-[10px] sm:w-[100%]">
        <div className=" px-4 w-[100%] sm:py-8">
          <div className="flex justify-between w-auto">
            <p>
              Tip Amount <br /> / person
            </p>
            <h3 className="w-auto">{result}</h3>
          </div>
          <div className="flex justify-between mt-8">
            <p>Total</p>
            <h3 className="">{total}</h3>
          </div>
          <button
            onClick={reset}
            className="bg-blue-500 p-2 w-[100%] sm:mt-4 lg:mt-[11rem] rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalDisplay;
