import ToDo from "./ToDo";
import styles from './ToDoList.module.scss';
export default function ToDoList ({todos, deleteTodo, toggleTodo}) {
    return (
        <ul className={styles.todoListContainer}>
            {!todos.length && <li>ToDo List is empty</li>}
            {todos.map(todo => <ToDo deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleTodo={toggleTodo}/>)}
        </ul>
    )
}

