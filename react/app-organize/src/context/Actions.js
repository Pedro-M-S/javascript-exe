export const SELECT_MENU = 'SELECT_MENU';

export function selecMenu(name) {
    return { 
      type: SELECT_MENU, 
      payload: {
        key: name
      } 
    }
  };