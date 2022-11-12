import React, {useState} from 'react';
import {DONE_TODO, EDIT_MODE, IS_CHECKED, SAVE_EDITE_CHANGE} from "../featers/silces/slice";
import {useDispatch} from "react-redux";

interface EachTodoProps {
    title: string,
    id: number,
    isDone: boolean,
    isChecked: boolean,
    isEditMode: boolean
}


function EachTodo({title, id, isDone, isChecked, isEditMode}: EachTodoProps) {

    const [editInput, setEditInput] = useState<string>(title)
    const dispatch = useDispatch()
    const handleEditInputChange = (e: { target: HTMLInputElement }) => {
        setEditInput(e.target.value)
    }
    const handleSaveEditChanges = (title: string, id: number): void => {
        dispatch(SAVE_EDITE_CHANGE({title: editInput, id}))
    }
    const handleEdit = (id: number): void => {
        dispatch(EDIT_MODE({id}))
    }
    const handleDone = (id: number): void => {
        dispatch(DONE_TODO({id}))
    }
    const handleCheckboxChange = (id: number): void => {
        dispatch(IS_CHECKED({id: id}))
    }


    return (
        <div>
            <div key={id}>
                {isEditMode ? <div>
                    <input onChange={handleEditInputChange} value={editInput} type="text"/>
                    <button onClick={() => handleSaveEditChanges(editInput, id)}>Save</button>
                    <button>Reset</button>
                </div> : <div>
                    <input onChange={() => handleCheckboxChange(id)} type="checkbox" checked={isChecked}/>
                    <h1 className={isDone ? 'done' : ''}>{title}</h1>
                    <button onClick={() => handleDone(id)}>Done</button>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                </div>}
            </div>
        </div>
    );
}

export default EachTodo;