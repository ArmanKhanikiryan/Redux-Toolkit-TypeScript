import {configureStore} from "@reduxjs/toolkit";
import todosReducer from '.././featers/silces/slice'
import {ToDoState} from "../featers/silces/slice";

export interface Store {
    todos: ToDoState[]
}

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})