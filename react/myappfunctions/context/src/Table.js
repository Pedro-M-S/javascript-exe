import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import React from "react";
import AppContext from "./AppContext";

const Table = () => {
  const { characters } = React.useContext(AppContext);
  if (characters.length > 0) {
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
