import React, { useReducer } from "react";
import { Provider } from "./AppContext";
import reducer from "./Reducer";

const initialState = {
  title: "Switch React Example",
  count: 0,
  aCount: 0,
  characters: [{ name: "Charlie", job: "Janitor" }],
  headers: { header1: "Name", header2: "Job", header3: "Remove" },
  form: { name: "", job: "" },
  autoCounter: true,
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </Provider>
  );
};

export default AppProvider;
