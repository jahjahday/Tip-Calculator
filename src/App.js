import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState();
  const [person, setPerson] = useState();
  const [result, setResult] = useState();
  const [total, setTotal] = useState();

  const onChangeHandlerBill = (e) => {
    setNumber(e.target.value);
  };

  const onChangeHandlerPeople = (e) => {
    setPerson(e.target.value);
  };

  const five = () => {
    setResult((number / person) * 0.05);
    setTotal(result * person);
  };

  const ten = () => {
    setResult((number / person) * 0.1);
    setTotal(result * person);
  };

  const fifteen = () => {
    setResult((number / person) * 0.15);
    setTotal(result * person);
  };

  const twentyFive = () => {
    setResult((number / person) * 0.25);
    setTotal(result * person);
  };

  const fifty = () => {
    setResult((number / person) * 0.5);
    setTotal(result * person);
  };

  const reset = () => {
    setNumber("");
    setPerson("");
    setResult("");
    setTotal("");
  };

  return (
    <div>
      <h1 className="ml-[43%]">Tip Calculator</h1>
      <div className="container grid sm:grid-cols-1 lg:grid-cols-2 text-white w-auto">
        <div className="w-[100%]">
          <span>Bill</span>
          <br />
          <input
            onChange={onChangeHandlerBill}
            value={number}
            className="bg-blue-900 p-2 rounded-md lg:w-[81%] sm:w-[100%]"
          />
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
              <button className="button bg-slate-900 ml-2 p-2 px-3  rounded-md">
                Custom{" "}
              </button>
            </div>
          </div>
          <p className="mt-8">Number of People</p>
          <input
            value={person}
            onChange={onChangeHandlerPeople}
            className="bg-blue-900 sm:w-[100%]  mt-2 h-[12%] pl-2 rounded-md"
          />
        </div>
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
    </div>
  );
}

export default App;
