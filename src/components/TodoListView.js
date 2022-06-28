import TodoItem from "./Todo";

function TodoView(props){
    return (
        <div>
            <u1>
                {props.todoList.map(todo => <TodoItem todo = {todo}/>)}

            </u1>
        </div>
    )
}

export default TodoView