import { dispatch } from "../store";
import { REMOVE_YIT_TASK } from "../types";

export const removeTaskYet = (index) => {
    dispatch({ type: REMOVE_YIT_TASK, payload: index })
};