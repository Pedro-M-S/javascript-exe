const TableBody = (props) => {
  const handleClick = (i) => {
    props.removeData(i);
  };

  const rows = props.data.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => handleClick(index)}>Delete</button>
      </td>
    </tr>
  ));

  return (<tbody>{rows}</tbody>);
};

export default TableBody;
