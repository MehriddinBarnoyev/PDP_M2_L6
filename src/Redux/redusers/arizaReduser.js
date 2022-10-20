import { REMOVE_TASK } from "../types";

const initialState = {
    tasks2: [
        {
            id: 1,
            name: "Abdulaziz Ochilov",
            taomName: "Osh",
            narxi: "20 000",
            soni: "2",
            umumiyNarxi: "40 000",
            tel: "+998 97 888 10 27",
            izox: "Lorem ipsum",
        },
        {
            id: 2,
            name: "Ergashev Islom",
            taomName: "Osh",
            narxi: "20 000",
            soni: "1",
            umumiyNarxi: "20 000",
            tel: "+998 88 110 24 57",
            izox: "...",
        },
        {
            id: 3,
            name: "Samidullayev Bahodir",
            taomName: "Manti",
            narxi: "5 000",
            soni: "10",
            umumiyNarxi: "50 000",
            tel: "+998 91 545 45 87",
            izox: "...",
        },
        {
            id: 4,
            name: "To’ramurodov Shoislom",
            taomName: "Big Lavash",
            narxi: "24 000",
            soni: "3",
            umumiyNarxi: "72 000",
            tel: "+998 99 655 78 98",
            izox: "...",
        },
    ],
}


const arizaReduser = (state = initialState, action) => {
    console.log(action);
    let tasks2;
    switch (action.type) {
        case REMOVE_TASK:
            tasks2 = [...state.tasks2];
            tasks2.splice(action.payload, 1);
            return {...state, tasks2};      
        
        default:
            return state;
    }
}

export default arizaReduser;