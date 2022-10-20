import { dispatch } from "../store";
import { REMOVE_FOY_TASK } from "../types";

export const removeTaskFoy = (index) => {
    dispatch({ type: REMOVE_FOY_TASK, payload: index })
};

