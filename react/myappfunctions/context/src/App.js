import "./App.css";
import React from "react";
import AppContext from "./AppContext";
import Counter from "./Counter";
import Table from "./Table";
import Form from "./Form";
import AutomaticCounter from "./AutomaticCounter";

const App = () => {
  const { title } = React.useContext(AppContext);

  return (
    <div>
      <h1>{title}</h1>
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
