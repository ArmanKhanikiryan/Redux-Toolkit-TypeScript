import {PayloadAction} from "@reduxjs/toolkit";
import {ToDoState} from "../silces/slice";

export const ADD_TODO_FUNC = (state: ToDoState[], action: PayloadAction<{ title: string }>): void => {
    const {payload} = action
    state[state.length] = {id: Math.random(), title: payload.title, isDone: false, isChecked: false, isEditMode: false}
}

export const IS_CHECKED_FUNC = (state: ToDoState[], action: PayloadAction<{ id: number }>): void => {
    const {payload} = action
    const index = state.findIndex(t => t.id === payload.id)
    state[index].isChecked = !state[index].isChecked
}

export const DELETE_TODO_FUNC = (state: ToDoState[],): ToDoState[] => {
    return state.filter(t => !t.isChecked)
}

export const DONE_TODO_FUNC = (state: ToDoState[], action: PayloadAction<{ id: number }>): void => {
    const {payload} = action
    const index = state.findIndex(t => t.id === payload.id)
    state[index].isDone = !state[index].isDone
}

export const DELETE_DONE_FUNC = (state: ToDoState[],): ToDoState[] => {
    return state.filter(t => !t.isDone)
}

export const EDIT_MODE_FUNC = (state: ToDoState[], action: PayloadAction<{ id: number }>): void => {
    const {payload} = action
    const index = state.findIndex(t => t.id === payload.id)
    state[index].isEditMode = true
}

export const SAVE_EDIT_CHANGE_FUNC = (state: ToDoState[], action: PayloadAction<{ title: string, id: number }>): void => {
    const {payload} = action
    const index = state.findIndex(t => t.id === payload.id)
    state[index].title = payload.title
    state[index].isEditMode = false
}

export const CHECK_ALL_FUNC = (state: ToDoState[],): void => {
    state.forEach(t=> t.isChecked = true)
}