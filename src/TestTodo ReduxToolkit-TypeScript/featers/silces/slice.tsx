import {createSlice} from "@reduxjs/toolkit";
import {
    ADD_TODO_FUNC, CHECK_ALL_FUNC,
    DELETE_DONE_FUNC,
    DELETE_TODO_FUNC,
    DONE_TODO_FUNC,
    EDIT_MODE_FUNC,
    IS_CHECKED_FUNC,
    SAVE_EDIT_CHANGE_FUNC,
} from "../reducers/reducers";

export const initialState: ToDoState[] = []


export interface ToDoState {
    title: string,
    id: number,
    isDone: boolean,
    isChecked: boolean,
    isEditMode: boolean
}


const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        ADD_TODO: ADD_TODO_FUNC,
        IS_CHECKED: IS_CHECKED_FUNC,
        DELETE_CHECKED: DELETE_TODO_FUNC,
        DONE_TODO: DONE_TODO_FUNC,
        DELETE_DONE: DELETE_DONE_FUNC,
        EDIT_MODE: EDIT_MODE_FUNC,
        SAVE_EDITE_CHANGE: SAVE_EDIT_CHANGE_FUNC,
        CHECK_ALL: CHECK_ALL_FUNC
    }
})

export const {
    ADD_TODO,
    IS_CHECKED,
    DELETE_CHECKED,
    DONE_TODO,
    DELETE_DONE,
    EDIT_MODE,
    SAVE_EDITE_CHANGE,
    CHECK_ALL
} = todoSlice.actions

export default todoSlice.reducer;