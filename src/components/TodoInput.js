import React, { useState } from "react";
function InputForm({ handleAddButtonClick }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    handleAddButtonClick(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        className="inputbar"
        value={name}
        autoComplete="off"
        onChange={handleChange}
        placeholder="New todo..."
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}
export default InputForm;
