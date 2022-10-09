import React from "react";

function NumberOfPeople({ person, onChange }) {
  return (
    <div>
      <p className="mt-8">Number of People</p>
      <input
        value={person}
        onChange={onChange}
        className="bg-blue-900 sm:w-[100%]  mt-2 h-12 pl-2 rounded-md"
      />
    </div>
  );
}

export default NumberOfPeople;
