import './App.scss';
import ToDoForm from "../ToDos/ToDoForm";
import ToDoList from "../ToDos/ToDoList";
import {useState} from "react";
import {v4} from "uuid";
import ToDosActions from "../ToDos/ToDosActions";
function App() {
    const [todos, setTodos] = useState([]);

    const addToDoHandler = (text) => {
        const uniqId = v4().slice(0, 12);

        const newToDo = {
            text: text,
            isCompleted: false,
            id: uniqId
        }
        setTodos([...todos, newToDo]);
    }

    const handleDeleteToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const toggleToDoHandler = (id) => {
        setTodos(todos.map(todo => {
            return todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo};
        }))
    }

    const resetToDosHandler = () => {
        setTodos([]);
    }

    const deleteCompletedToDosHandler = () => {
        setTodos(todos.filter(todo => !todo.isCompleted));
    }

    const completedTodosCount = todos.filter(todo => todo.isCompleted).length;

    return (
    <div className="app">
        <h1>Todo App</h1>
        <ToDoForm addToDo={addToDoHandler}/>
        {!!todos.length && <ToDosActions completedTodosExist={!!completedTodosCount} deleteCompletedToDos={deleteCompletedToDosHandler} resetTodos={resetToDosHandler}/>}
        <ToDoList deleteTodo={handleDeleteToDo} todos={todos} toggleTodo={toggleToDoHandler}/>
        {!!completedTodosCount && <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
