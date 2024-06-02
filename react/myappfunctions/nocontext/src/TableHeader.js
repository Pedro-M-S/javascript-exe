const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>{props.headers.header1}</th>
        <th>{props.headers.header2}</th>
        <th>{props.headers.header3}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
