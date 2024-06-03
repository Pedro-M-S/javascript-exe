import React, { useContext } from "react";
import AppContext from "./AppContext";

const TableHeader = () => {
    const { state } = useContext(AppContext);

  return (
    <thead>
      <tr>
        <th>{state.headers.header1}</th>
        <th>{state.headers.header2}</th>
        <th>{state.headers.header3}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
