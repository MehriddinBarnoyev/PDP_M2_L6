import { ADD_NEW1_TASK, REMOVE_KAT_TASK } from "../types";

const initialState = {
    tasks1: [
        {   
            id: 1,
            katigoriya: "Quyuq taomlar"
        }, 
        {
            id: 2,
            katigoriya: "Suyuq taomlar"
        }, 
        {
            id: 3,
            katigoriya: "Ichimliklar"
        },
    ],
}

const katigoriyaReduser = (state = initialState, action) =>{
    console.log(action);
    let tasks1;
    switch (action.type) {
        
        case ADD_NEW1_TASK:
            return{
                ...state, tasks1: [...state.tasks1, {id: action.payload.n+1, katigoriya: action.payload.value}]
            };
        case REMOVE_KAT_TASK:
            tasks1 = [...state.tasks1]
            tasks1.splice(action.payload, 1)
            return {...state, tasks1}

        default:
            return state;
    };
}

export default katigoriyaReduser;