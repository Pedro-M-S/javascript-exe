import React, { useContext } from "react";
import AppContext from "./AppContext";
import { removeCharacter } from "./Actions";

const TableBody = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = (i) => {
    dispatch(removeCharacter(i));
  };

  const rows = state.characters.map((row, index) => (
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
