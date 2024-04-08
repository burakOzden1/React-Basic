import { useEffect, useState } from "react"
import TakskListItem from "./TaskListItem";

export default function TaskList({tasks, removeTask, editTask}) {
    const [priority, setPriority] = useState(false)
    const [filteredTasks, setFilteredTasks] = useState(tasks)

    function handlePriorityFilter() {
        setPriority(prev => !prev)
        console.log("priority : ", priority);
    }

    useEffect(() => {
        setFilteredTasks(tasks)
    }, [tasks])

    useEffect(() => {
        priority ? setFilteredTasks(tasks.filter(item => item.priority === priority)) : setFilteredTasks(tasks)
    }, [priority])

    if (tasks.length === 0) {
        return <></>
    }

    return (
        <>
            <div className="p-3 bg-light my-3 border rounded">
                <ul className="list-group my-3">
                    <li className="list-group-item" aria-current="true">Görevler <button onClick={handlePriorityFilter} className={`btn btn-sm ${!priority ? "btn-primary" : "btn-info"} float-end`}>
                        {!priority ? "Öncelikli Olanları Göster" : "Hepsini Göster" }
                        </button></li>
                    {filteredTasks.map((task) => 
                        <TakskListItem key={task.uuid} task={task} editTask={editTask} removeTask={removeTask} />
                    )}
                </ul>
            </div>
        </>
    )
}