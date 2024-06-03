import React, { useContext } from "react";
import AppContext from "./AppContext";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = () => {
  const { state } = useContext(AppContext);
  if (state.characters.length > 0) {
    return (
      <table border={1}>
        <TableHeader />
        <TableBody />
      </table>
    );
  } else {
    return <h2>No data</h2>;
  }
};

export default Table;
