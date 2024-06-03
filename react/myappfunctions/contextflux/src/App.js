import "./App.css";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import Counter from "./Counter";
import Table from "./Table";
import Form from "./Form";
import AutomaticCounter from "./AutomaticCounter";

const App = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h1>{state.title}</h1>
      <Counter />
      <br />
      <Table />
      <br />
      <Form />
      <br />
      <AutomaticCounter />
    </div>
  );
};

export default App;
