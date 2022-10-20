import { dispatch } from "../store";
import { REMOVE_TASK } from "../types";


export const removeTask = (index) => {
    dispatch({ type: REMOVE_TASK, payload: index })
    console.log(index);
};
