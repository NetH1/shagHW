import { useState } from "react";
import './todolist.scss'

export const TodoList = ({ list, setList }) => {
    const [task, setTask] = useState('');

    const HandlerDelete = (id) => {
        const newList = [...list].filter(item => item.id !== id)
        setList(newList)
    }
    const HandlerAddTask = (e) => {
        e.preventDefault();
        setList([...list, { id: Math.random(), task }]);
        setTask('');
    }

    return (
        <ul>
        <h1>Tasks</h1>
            {
                list.map(item =>
                    <li key={item.id}>
                        <h1>{item.task}</h1>
                        <button onClick={() => HandlerDelete(item.id)}>Delete</button>
                    </li>
                )
            }
            <div>
                <input onChange={e => setTask(e.target.value)} type="text" placeholder="Task..." />
                <button onClick={HandlerAddTask}>Add</button>
            </div>
        </ul>
    );
};
