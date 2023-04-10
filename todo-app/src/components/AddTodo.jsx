import React from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button
        onClick={() => {
            handleAdd(text);
            setText("");
        }}
      >
        ADD TODO
      </button>
    </div>
  );
}
