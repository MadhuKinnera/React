export default function TodoItem(props) {
  const { title, status, id, handleToggle, handleDelete } = props;

  const style = {
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
  };

  return (
    <div style={style}>
      <p>
        {title}
        {"------"}
        {status ? "Completed" : "Not Completed"}
      </p>
      <button
        onClick={() => {
          handleToggle(id);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
