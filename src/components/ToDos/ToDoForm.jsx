import {useState} from "react";
import styles from './ToDoForm.module.scss';
import Button from "../UI/Button";
export default function ToDoForm ({addToDo}) {
    const [text, setText] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            addToDo(text);
            setText('');
        }
    }

    return (
        <div className={styles.todoFormContainer}>
            <form className="form" onSubmit={onSubmitHandler}>
                <div className="form__input-wrapper">
                    <label htmlFor="toDo"></label>
                    <input id="toDo" type="text" placeholder="Enter new todo" value={text} onChange={handleOnChange}/>
                </div>
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    )
}