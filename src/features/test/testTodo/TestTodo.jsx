

export default function TestTodo({todo}) {
    //handleTodoClick = () => {
    //    toggleTodo(todo.id)
    //}
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={todo.toggleTodo} /> 
            &nbsp;
            {todo.id}: {todo.title} ({todo.complete.toString()})
        </label>
      
    </div>
  )
}
