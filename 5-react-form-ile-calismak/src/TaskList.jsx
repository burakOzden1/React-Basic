export default function TaskList({tasks, removeTask, editTask}) {

    if (tasks.length === 0) {
        return <></>
    }

    return (
        <>
            <div className="p-3 bg-light my-3 border rounded">
                <ul className="list-group my-3">
                    <li className="list-group-item active" aria-current="true">Görevler</li>
                    {tasks.map((item) => 
                        <li className="list-group-item" key={item.uuid}>{item.task}
                            <div className="btn-group float-end" role="group">
                                <button className="btn btn-sm btn-info" onClick={() => editTask(item.uuid)}>Düzenle</button>
                                <button className="btn btn-sm btn-danger" onClick={() => removeTask(item.uuid)}>Sil</button>
                            </div>
                        </li>
                        )}
                </ul>
            </div>
        </>
    )
}