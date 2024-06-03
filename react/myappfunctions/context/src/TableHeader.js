import React from "react";
import AppContext from "./AppContext";

const TableHeader = () => {
  const { headers } = React.useContext(AppContext);

  return (
    <thead>
      <tr>
        <th>{headers.header1}</th>
        <th>{headers.header2}</th>
        <th>{headers.header3}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
