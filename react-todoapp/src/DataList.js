import React from "react";

const DataList = ({ Data, setData, setEditToDo }) => {


    const handleComplete = ( { id } ) => {

        setData (
            Data.map((item) => {
                if ((item.id) === (id)) {
                    return { ...item, completed : !item.completed };
                }

                return item;
            })
        );

    };

    const handleEdit = ({ id }) => {
        const findData = Data.find((Data) => Data.id === id);
        console.log(findData);
        setEditToDo(findData);
    };

    const handleDelete = ({ id }) => {
        setData(Data.filter((Data) => Data.id !== id));
    };

    return <div>
        { Data.map((Data) => (

            <li className="list-item" key={Data.id}>
                <input type="text" value={Data.title} className={`list ${Data.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />
                <input type="text" value={Data.title1} className={`list ${Data.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />
                <input type="numerical" value={Data.title2} className={`list ${Data.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />

                <div>
                    <button className="button-complete task-button" onClick={() => handleComplete(Data)}>
                        <i class="fa fa-check-circle"></i>
                    </button>

                    <button className="button-edit task-button" onClick={() => handleEdit(Data)}>
                        <i class="fa fa-edit"></i>
                    </button>

                    <button className="button-delete task-button" onClick={() => handleDelete(Data)}>
                        <i class="fa fa-trash"></i>
                    </button>

                </div>
            </li>
        ))}
    </div>
};


export default DataList