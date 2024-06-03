import React, { useState } from "react";
import { Provider } from "./AppContext";

const title = "Switch React Example";
const headers = { header1: "Name", header2: "Job", header3: "Remove" };
const charactersInitialState = [{ name: "Charlie", job: "Janitor" }];
const formInitialState = { name: "", job: "" };

const AppProvider = (props) => {
  const [characters, setCharacters] = useState(charactersInitialState);
  const [counterActive, setCounterActive] = useState(true);
  const [form, setForm] = useState(formInitialState);
  const [count, setCount] = useState(0);

  const handleAddCharacter = (character) => {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  };

  const handleRemoveCharacter = (index) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((character, i) => i !== index),
    );
  };

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (form) => {
    handleAddCharacter(form);
    setForm(formInitialState);
  };

  const handleCountIncrement = () => {
    setCount(count + 1);
  };
  const handleCountReset = () => {
    setCount(0);
  };

  const handleUpdateCounter = () => {
    setCounterActive((prevCounterActive) => !prevCounterActive);
  };

  return (
    <Provider
      value={{
        title,
        headers,
        characters,
        counterActive,
        form,
        count,
        handleAddCharacter,
        handleRemoveCharacter,
        handleFormChange,
        handleFormSubmit,
        handleCountIncrement,
        handleCountReset,
        handleUpdateCounter,
      }}
    >
      {props.children}
    </Provider>
  );
};

export default AppProvider;
