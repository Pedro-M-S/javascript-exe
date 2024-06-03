export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const CHANGE_FORM = "CHANGE_FORM";
export const TOGGLE_ACOUNTER = 'TOGGLE_ACOUNTER';
export const INCREMENT_ACOUNTER = 'UPDATE_ACOUNTER';
export const RESET_ACOUNTER = 'RESET_ACOUNTER';

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});

export const removeCharacter = (index) => ({
  type: REMOVE_CHARACTER,
  payload: index,
});

export const submitForm = (form) => ({
  type: SUBMIT_FORM,
  payload: form,
});

export const changeForm = (event) => ({
  type: CHANGE_FORM,
  payload: event,
});

export const toggleAutoCounter = () => ({
  type: TOGGLE_ACOUNTER,
});

export const incrementAutoCounter = () => ({
  type: INCREMENT_ACOUNTER,
});

export const resetAutoCounter = () => ({
  type: RESET_ACOUNTER,
});
