
import React, {useReducer} from 'react';
import PropTypes from "prop-types";
import {Provider} from './AppContext';
import reducer from './Reducer';

const menus = [
  { key: 'home', label: 'Home' },
  { key: 'pagea', label: 'Page A' },
  { key: 'pageb', label: 'Page B' },
  { key: 'about', label: 'About' },
]
const nav ={
  selectedMenu:menus[0],
  menus: menus,
  
};

const AppData={
  nav: nav,
}
  const AppProvider = (props) =>{

    const initialState = AppData;

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <Provider value={{
          state,
          dispatch}}>
          {props.children}
      </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};
    
  
  export default AppProvider;