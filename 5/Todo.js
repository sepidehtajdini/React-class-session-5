import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./5.css";

function Todo() {
    const [tasks, setTask] = useState([]);
    const [removeCounter, setRemoveCounter] = useState(0);
    const [addCounter, setAddCounter] = useState(0);

    function addTodo() {
        let newTask = prompt("Add new task");
        if (tasks.includes(newTask)) { alert("This task has been mentioned before")}
        else {
            setTask([...tasks, newTask]);
            setAddCounter(addCounter + 1);
        }
    }
    function removeTodo(selectedTask) {
        setTask(tasks.filter((allTasks) => selectedTask !== allTasks));
        setRemoveCounter(removeCounter + 1);
        setAddCounter(addCounter - 1);
    }
    function removeAll() {
        const tedad = tasks.length;
        setTask([]);
        setRemoveCounter(removeCounter + tedad);
        setAddCounter(0);
    }
    return (
        <div>
            <div className="todo__header">
                <div className="todo__header__counters">
                    <div>Tasks: {addCounter}</div>
                    <div>Removed Tasks:{removeCounter}</div>
                </div>
                <div className="todo__header__btns">
                    <Button variant="success" onClick={addTodo}>Add task</Button>
                    <Button variant="danger" onClick={removeAll}>Remove all</Button>
                </div>
            </div>
            <div className="todo__main">
                <ul>{
                    tasks.map((allTasks) => <li>
                        <div className="todo__main__tasks">
                            {allTasks} <Button variant="secondary" onClick={() =>
                                removeTodo(allTasks)}>Remove</Button>
                        </div>
                    </li>)
                }</ul>
            </div>
            <hr />
        </div>
    )
}
export default Todo
