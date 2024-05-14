import { REMOVE_YIT_TASK } from "../types";

const initialState = {
    tasks3: [
        {
            id: 1,
            name: "Abdulaziz Ochilov",
            taomName: "Osh",
            narxi: "20 000",
            soni: "2",
            umumiyNarxi: "40 000",
            tel: "+998 931580806",
        },
        {
            id: 2,
            name: " Tursunkhujaev Toyirkhuja",
            taomName: "Osh",
            narxi: "20 000",
            soni: "1",
            umumiyNarxi: "20 000",
            tel: "+998 88 110 24 57",
        },
        {
            id: 3,
            name: "Barnoyev Mehriddin",
            taomName: "Xonim",
            narxi: "20 000",
            soni: "10",
            umumiyNarxi: "50 000",
            tel: "+998 93 158 08 06",
        },
        {
            id: 4,
            name: "Barnoyev Ramziddin",
            taomName: "Big Lavash",
            narxi: "24 000",
            soni: "3",
            umumiyNarxi: "72 000",
            tel: "+998 93 158 08 06",
        },
    ],   
}

const yitkazilganReduser = (state = initialState, action) => {
    
    let tasks3;

    switch (action.type) {
        case REMOVE_YIT_TASK:
            tasks3 = [...state.tasks3]
            tasks3.splice(action.payload, 1)
            return {...state, tasks3}    
        default:
            return state;
    }
}

export default yitkazilganReduser;