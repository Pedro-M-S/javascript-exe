import React from "react";
import AppContext from "./AppContext";

const TableBody = () => {
  const { characters, handleRemoveCharacter } = React.useContext(AppContext);

  const handleClick = (i) => {
    handleRemoveCharacter(i);
  };

  const rows = characters.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => handleClick(index)}>Delete</button>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

export default TableBody;
