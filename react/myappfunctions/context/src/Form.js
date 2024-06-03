import React from "react";
import AppContext from "./AppContext";

const Form = () => {
  const { form, handleFormChange, handleFormSubmit } = React.useContext(AppContext);

  const handleChange = (event) => {
    handleFormChange(event);
  };

  const handleSubmit = () => {
    handleFormSubmit(form);
  };

  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label>Job</label>
      <input type="text" name="job" value={form.job} onChange={handleChange} />
      <br />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
