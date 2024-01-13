import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './ToDosActions.module.scss'
import Button from "../UI/Button";
export default function ToDosActions ({resetTodos, deleteCompletedToDos, completedTodosExist}) {
    return (
        <div className={styles.button__container}>
            <Button onClick={resetTodos} title="Reset Todos">
                <RiRefreshLine/>
            </Button>
            <Button disabled={!completedTodosExist} onClick={deleteCompletedToDos} title="Clear Completed Todos">
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}