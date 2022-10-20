import { dispatch } from "../store";
import { ADD_NEW_TASK, REMOVE_TAOM_TASK } from "../types";

export const addNewTask = (arrValue, n) => {
    dispatch({ type: ADD_NEW_TASK, payload: {arrValue, n} })
};

export const removeTaskTaom = (index) => {
    dispatch({ type: REMOVE_TAOM_TASK, payload: index })
};