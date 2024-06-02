import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Table from "./Table";
import Form from "./Form";
import AutomaticCounter from "./AutomaticCounter";

const title = "Switch React Example";
const headers = { header1: "Name", header2: "Job", header3: "Remove" };
const chInitialState = [{ name: "Charlie", job: "Janitor" }];

const App = () => {
  const [characters, setCharacters] = useState(chInitialState);
  const [counterActive, setCounterActive] = useState(true);

  const handleAddCharacter = (character) => {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  };

  const handleRemoveCharacter = (index) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((character, i) => i !== index),
    );
  };

  const renderTable = () => {
    if (characters.length > 0) {
      return (
        <Table
          headers={headers}
          data={characters}
          removeData={handleRemoveCharacter}
        />
      );
    } else {
      return <h2>No data</h2>;
    }
  };

  const handleUpdateCounter = () => {
    setCounterActive(!counterActive);
  };

  const renderCounter = () => {
    if (counterActive) {
      return <AutomaticCounter endCounter={handleUpdateCounter} />;
    } else {
      return (
        <button onClick={() => handleUpdateCounter()}>Restart Counter</button>
      );
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <Counter />
      <br />
      {renderTable()}
      <br />
      <Form handleSubmit={handleAddCharacter} />
      <br />
      {renderCounter()}
    </div>
  );
};

export default App;
