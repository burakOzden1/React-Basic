import TaskListItemIcon from "./TaskListItemIcon"

function TakskListItem({task, editTask, removeTask, doneTask}) {
    return (
        
        <li className={`list-group-item ${task.isDone && 'bg-success bg-gradient'}`}>
        {task.priority && 
        <span className="badge text-bg-secondary me-2">
            <TaskListItemIcon />
        </span>}
        {task.task}
        <div className="btn-group float-end" role="group">
            <button className="btn btn-sm btn-success" onClick={() => doneTask(task.uuid)}>Tamamlandı</button>
            <button className="btn btn-sm btn-info" onClick={() => editTask(task.uuid)}>Düzenle</button>
            <button className="btn btn-sm btn-danger" onClick={() => removeTask(task.uuid)}>Sil</button>
        </div>
    </li>
    )
}

export default TakskListItem