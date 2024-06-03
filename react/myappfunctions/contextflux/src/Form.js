import React, { useContext } from "react";
import AppContext from "./AppContext";
import { changeForm, submitForm } from "./Actions";

const Form = () => {
    const { state, dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    dispatch(changeForm(event));
  };

  const handleSubmit = () => {
    dispatch(submitForm(state.form));
  };

  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={state.form.name}
        onChange={handleChange}
      />
      <label>Job</label>
      <input type="text" name="job" value={state.form.job} onChange={handleChange} />
      <br />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
