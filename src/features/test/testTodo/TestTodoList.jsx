import TestTodo from "./TestTodo";

export default function TestTodoList({todos}) {

    return (
        <>
            <section className="bg-warning p-5">
                <div className="container">
                <h1>Todos ({todos.length})</h1>
                
                {
                    todos.map((todo) => {
                        return <TestTodo key={todo.id} todo={todo}  />
                    })
                }
                    </div>
            </section>
        </>

    )
}