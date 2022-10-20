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
            tel: "+998 97 888 10 27",
            status: "Yitkazilgan",
        },
        {
            id: 2,
            name: "Ergashev Islom",
            taomName: "Osh",
            narxi: "20 000",
            soni: "1",
            umumiyNarxi: "20 000",
            tel: "+998 88 110 24 57",
            status: "Yitkazilgan",
        },
        {
            id: 3,
            name: "Samidullayev Bahodir",
            taomName: "Manti",
            narxi: "5 000",
            soni: "10",
            umumiyNarxi: "50 000",
            tel: "+998 91 545 45 87",
            status: "Yitkazilgan",
        },
        {
            id: 4,
            name: "To’ramurodov Shoislom",
            taomName: "Big Lavash",
            narxi: "24 000",
            soni: "3",
            umumiyNarxi: "72 000",
            tel: "+998 99 655 78 98",
            status: "Yitkazilgan",
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