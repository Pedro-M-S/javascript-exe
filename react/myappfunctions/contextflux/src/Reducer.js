import {
  INCREMENT_COUNTER,
  RESET_COUNTER,
  REMOVE_CHARACTER,
  SUBMIT_FORM,
  CHANGE_FORM,
  TOGGLE_ACOUNTER,
  INCREMENT_ACOUNTER,
  RESET_ACOUNTER,
} from "./Actions";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case RESET_COUNTER:
      return { ...state, count: 0 };
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((_, i) => i !== action.payload),
      };
    case SUBMIT_FORM:
      return {
        ...state,
        characters: [...state.characters, action.payload],
        form: { name: "", job: "" },
      };
    case CHANGE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case TOGGLE_ACOUNTER:
      return { ...state, autoCounter: !state.autoCounter };
    case INCREMENT_ACOUNTER:
      return { ...state, aCount: state.aCount + 1 };
    case RESET_ACOUNTER:
      return { ...state, aCount: 0 };
    default:
      return state;
  }
};

export default reducer;
