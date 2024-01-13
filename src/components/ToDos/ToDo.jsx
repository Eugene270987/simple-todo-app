import styles from './ToDo.module.scss';
import {v4} from "uuid";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

export default function ToDo ({todo, deleteTodo, toggleTodo}) {
    const dynamicId = v4().slice(0,8);
    return (
        <li id={`${dynamicId}__item`} className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>
                {todo.text}
            </div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}></FaCheck>
        </li>
    )
}