const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    <li style={{ marginBottom: '0.5rem' }}>
      {todo}
      <button
        onClick={() => deleteTodo(index)}
        style={{ marginLeft: '1rem' }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
