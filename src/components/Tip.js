import React from "react";

function Tip({ five, ten, fifteen, twenty, twentyFive, fifty }) {
  return (
    <div>
      <h2 className="mt-16">Select Tip %</h2>
      <div className="mt-2">
        <div className="flex">
          <button
            onClick={five}
            className="button bg-slate-500 ml-2 p-2 px-7 rounded-md"
          >
            5%
          </button>
          <button
            onClick={ten}
            className="button bg-slate-500 ml-2 p-2 px-6  rounded-md"
          >
            10%
          </button>
          <button
            onClick={fifteen}
            className="button bg-slate-500 ml-2 p-2 px-6  rounded-md"
          >
            15%
          </button>
        </div>
        <div className="flex mt-2">
          <button
            onClick={twenty}
            className="button bg-slate-500 ml-2 p-2 px-6  rounded-md"
          >
            20%
          </button>
          <button
            onClick={twentyFive}
            className="button bg-slate-500 ml-2 p-2 px-6  rounded-md"
          >
            25%
          </button>
          <button
            onClick={fifty}
            className="button bg-slate-500 ml-2 p-2 px-6  rounded-md"
          >
            50%
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tip;
