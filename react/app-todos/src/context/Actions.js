
import {fetchUsersFromWS, fetchUserToDosFromWS} from '../services/Service';

export const FETCH_USERS_STARTED = 'FETCH_USERS_STARTED';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
 
export function fetchUsers(dispatch){
    const action = {
      type: FETCH_USERS_STARTED
    }
    dispatch(action);
    const success = (res) => {
      const action = fetchUsersSuccess(res);
      dispatch(action);
    };
    const failure = (err) =>{
      const action = fetchUsersFailure(err.message);
      dispatch(action);
    };

    fetchUsersFromWS(success, failure );
}
export function fetchUserTodos(dispatch, id){
  const action = fetchUserTodosStarted(id);
    dispatch(action);
    const success = (res) => {
      const action = fetchUserTodosSuccess(res);
      dispatch(action);
    };
    const failure = (err) =>{
      const action = fetchUserTodosFailure(err.message);
      dispatch(action);
    };
    fetchUserToDosFromWS(success, failure,id);
}
export function deleteUserTodos(dispatch){
  const action = {
    type: DELETE_USER_TODOS,
  }
  dispatch(action);
}


function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload:{
      data:
        [...users]
    }

  }
}
function fetchUsersFailure(message) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: {
      error: message
    }
  }
}


export const FETCH_USER_TODOS_STARTED = 'FETCH_USER_TODOS_STARTED';
export const FETCH_USER_TODOS_SUCCESS = 'FETCH_USER_TODOS_SUCCESS';
export const FETCH_USER_TODOS_FAILURE = 'FETCH_USER_TODOS_FAILURE';
export const DELETE_USER_TODOS        = 'DELETE_USER_TODOS';

function fetchUserTodosStarted(id) {
  return {
    type: FETCH_USER_TODOS_STARTED,
    payload:{
      userid: id
    }
  }
}

function fetchUserTodosSuccess(todos) {
  return {
    type: FETCH_USER_TODOS_SUCCESS,
    payload:{
      data: [...todos]
    }

  }
}

function fetchUserTodosFailure(message) {
  return {
    type: FETCH_USER_TODOS_FAILURE,
    payload: {
      error: message
    }
  }
}
