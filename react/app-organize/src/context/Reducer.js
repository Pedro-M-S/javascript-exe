import { SELECT_MENU } from './Actions'


const reducer = (state, action) => {
  debugger
  switch (action.type) {
    case SELECT_MENU:
      const key = action.payload.key;
      const{nav} = state;
      const menu = nav.menus.find((item) => (item.key === key));
      const newNav={...nav, selectedMenu: menu}

      return {
        ...state,
        nav: newNav,
      };
    default:
      return state;
  }
};

export default reducer;
