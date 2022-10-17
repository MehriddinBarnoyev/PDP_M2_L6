import { dispatch } from "./store"
import { ADD_NEW1_TASK, ADD_NEW2_TASK, ADD_NEW3_TASK, ADD_NEW4_TASK, ADD_NEW_TASK } from "./types"

export const addNewTask = (arrValue) => {
    dispatch({ type: ADD_NEW_TASK, payload: arrValue })
};

export const addNewTask1 = (value) => {
    dispatch({ type: ADD_NEW1_TASK, payload: value })
};

export const addNewTask2 = (value) => {
    dispatch({ type: ADD_NEW2_TASK, payload: value })
};

export const addNewTask3 = (value) => {
    dispatch({ type: ADD_NEW3_TASK, payload: value })
};

export const addNewTask4 = (value) => {
    dispatch({ type: ADD_NEW4_TASK, payload: value })
};

