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
            tel: "+998 931580806",
            izox: "Lorem ipsum",
        },
        {
            id: 2,
            name: " Tursunkhujaev Toyirkhuja",
            taomName: "Osh",
            narxi: "20 000",
            soni: "1",
            umumiyNarxi: "20 000",
            tel: "+998 88 110 24 57",
            izox: "...",
        },
        {
            id: 3,
            name: "Barnoyev Mehriddin",
            taomName: "Xonim",
            narxi: "20 000",
            soni: "10",
            umumiyNarxi: "50 000",
            tel: "+998 93 158 08 06",
            izox: "...",
        },
        {
            id: 4,
            name: "Barnoyev Ramziddin",
            taomName: "Big Lavash",
            narxi: "24 000",
            soni: "3",
            umumiyNarxi: "72 000",
            tel: "+998 93 158 08 06",
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