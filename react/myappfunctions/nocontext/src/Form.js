import React, { useState } from "react";

const initialState = { name: "", job: "" };

const Form = (props) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    props.handleSubmit(form);
    setForm(initialState);
  };

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} />
      <label>Job</label>
      <input type="text" name="job" value={form.job} onChange={handleChange} />
      <br />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
