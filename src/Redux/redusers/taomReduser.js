import { ADD_NEW_TASK, REMOVE_TAOM_TASK } from "../types";

const initialState = {
    tasks: [
        {
            id: 1,
            taomnomi: "Osh",
            taomtarifi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum?",
            taomNarxi: "20 000",
            kategoriya: "Suyuq taomlar",
        },
        {
            id: 2,
            taomnomi: "Lavash",
            taomtarifi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum?",
            taomNarxi: "25 000",
            kategoriya: "Quyuq taomlar",
        },
        {
            id: 3,
            taomnomi: "Sho'rva",
            taomtarifi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum?",
            taomNarxi: "18 000",
            kategoriya: "Suyuq taomlar",
        },
    ],
}


const taomReduser = (state = initialState, action) =>{
    console.log(action);
    let tasks;
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state, tasks: [...state.tasks, 
                    {   
                        id: action.payload.n+1,
                        taomnomi: action.payload.arrValue[0], 
                        taomtarifi: action.payload.arrValue[1],
                        taomNarxi: action.payload.arrValue[2],
                        kategoriya: action.payload.arrValue[3],
                    }]
            };
        case REMOVE_TAOM_TASK:
            tasks = [...state.tasks]
            tasks.splice(action.payload, 1)
            return {...state, tasks}
        default:
            return state;
    };
}

export default taomReduser;