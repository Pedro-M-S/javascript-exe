import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = (props) => {
  return (
    <table border={1}>
      <TableHeader headers={props.headers} />
      <TableBody data={props.data} removeData={props.removeData} />
    </table>
  );
};

export default Table;
