import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {deleteUserTodos, fetchUserTodos} from '../context/Actions';
import TodosList from './TodosList';
function TableBody() {
    const { state, dispatch } = useContext(AppContext);
    const { users, todos } = state;
    const { data } = users;
    const { userid } = todos;


    const handleOnClick = (id) => {
        if (userid !== id) {
            fetchUserTodos(dispatch, id);
        } else {
            deleteUserTodos(dispatch);
        }
    };
    const rows = data.map((row, index) => {
        if (userid !== row.id) {
            return (
                <tr key={index} onClick={() => handleOnClick(row.id)} style={{ cursor: "pointer" }}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                </tr>
            )
        } else {
            return (
                <tr style={{ backgroundColor: "#CCCCCC", cursor: "pointer" }} onClick={() => handleOnClick(row.id)}>
                    <td colspan="4">
                        <table border="4">
                            <tr key={index}>
                                <td style={{ width: "50px" }}>{row.id}</td>
                                <td style={{ width: "200px" }}>{row.name}</td>
                                <td style={{ width: "200px" }}>{row.username}</td>
                                <td style={{ width: "300px" }}>{row.email}</td>
                            </tr>
                            <tr><td colspan="4"><TodosList /></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            )
        }
    });
    return (
        <tbody>{rows}</tbody>
    );
}
export default TableBody;