import { dispatch } from "../store";
import { ADD_NEW1_TASK, REMOVE_KAT_TASK } from "../types";

export const addNewTask1 = (value, n) => {
    dispatch({ type: ADD_NEW1_TASK, payload: {value, n}})
};

export const removeTaskKat = (index) => {
    dispatch({ type: REMOVE_KAT_TASK, payload: index })
};