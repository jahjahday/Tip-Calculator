import { useState } from "react";
import "./App.css";
import { lazy, Suspense } from "react";
const BillsInput = lazy(() => import("./components/BillsInput"));
const FinalDisplay = lazy(() => import("./components/FinalDisplay"));
const NumberOfPeople = lazy(() => import("./components/NumberOfPeople"));
const Tip = lazy(() => import("./components/Tip"));

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

  const twenty = () => {
    setResult((number / person) * 0.2);
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
    <Suspense fallback={<di>Loading...</di>}>
      <div>
        <h1 className="ml-[43%]">Tip Calculator</h1>
        <div className="container grid sm:grid-cols-1 lg:grid-cols-2 text-white w-auto">
          <div className="w-[100%]">
            <BillsInput bill={onChangeHandlerBill} number={number} />
            <Tip
              five={five}
              ten={ten}
              fifteen={fifteen}
              twenty={twenty}
              twentyFive={twentyFive}
              fifty={fifty}
            />
            <NumberOfPeople person={person} onChange={onChangeHandlerPeople} />
          </div>
          <FinalDisplay reset={reset} total={total} result={result} />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
