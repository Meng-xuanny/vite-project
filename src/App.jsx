import React from "react";
import UseState from "./tutorial/01-useState";
import UseStateObject from "./tutorial/02-useState-object";
import FetchData from "./tutorial/03-useEffect-fetch";
import UserChallenge from "./tutorial/04-operator";
import List from "./tutorial/05-leverage-JS";
import Form from "./tutorial/06-controlled-inputs";
import OtherInputs from "./tutorial/07-checkbox";
import UseRefBasics from "./tutorial/08-useRef";
import FetchHookData from "./tutorial/09-customHooks";
import Navbar from "./tutorial/context api/Navbar";
import ReducerBasics from "./tutorial/10-useReducer";
import Test from "./tutorial/Test";

const App = () => {
  return (
    <div>
      <UseState />
      <UseStateObject />
      <FetchData />
      <UserChallenge />
      <List />
      <Form />
      <OtherInputs />
      <UseRefBasics />
      <FetchHookData />
      <Navbar />
      {/* <ReducerBasics /> */}
      <Test />
    </div>
  );
};

export default App;
