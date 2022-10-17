import { ADD_NEW1_TASK, ADD_NEW2_TASK, ADD_NEW3_TASK, ADD_NEW4_TASK, ADD_NEW5_TASK, ADD_NEW_TASK } from "./types";

const initialState = {
    tasks: [
        {
            taomnomi: "Osh",
            taomtarifi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum?",
            taomNarxi: "20 000",
            kategoriya: "Suyuq taomlar",
        },
        {
            taomnomi: "Lavash",
            taomtarifi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum?",
            taomNarxi: "25 000",
            kategoriya: "Quyuq taomlar",
        },
        {
            taomnomi: "Sho'rva",
            taomtarifi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolorum?",
            taomNarxi: "18 000",
            kategoriya: "Suyuq taomlar",
        },
    ],
    tasks1: [
        "Quyuq taomlar", "Suyuq taomlar", "Ichimliklar",
    ],
    tasks2: [
        {
            name: "Abdulaziz Ochilov",
            taomName: "Osh",
            narxi: "20 000",
            soni: "2",
            umumiyNarxi: "40 000",
            tel: "+998 97 888 10 27",
            izox: "Lorem ipsum",
        },
        {
            name: "Ergashev Islom",
            taomName: "Osh",
            narxi: "20 000",
            soni: "1",
            umumiyNarxi: "20 000",
            tel: "+998 88 110 24 57",
            izox: "...",
        },
        {
            name: "Samidullayev Bahodir",
            taomName: "Manti",
            narxi: "5 000",
            soni: "10",
            umumiyNarxi: "50 000",
            tel: "+998 91 545 45 87",
            izox: "...",
        },
        {
            name: "To’ramurodov Shoislom",
            taomName: "Big Lavash",
            narxi: "24 000",
            soni: "3",
            umumiyNarxi: "72 000",
            tel: "+998 99 655 78 98",
            izox: "...",
        },
    ],
    tasks3: [
        {
            name: "Abdulaziz Ochilov",
            taomName: "Osh",
            narxi: "20 000",
            soni: "2",
            umumiyNarxi: "40 000",
            tel: "+998 97 888 10 27",
            status: "Yitkazilgan",
        },
        {
            name: "Ergashev Islom",
            taomName: "Osh",
            narxi: "20 000",
            soni: "1",
            umumiyNarxi: "20 000",
            tel: "+998 88 110 24 57",
            status: "Yitkazilgan",
        },
        {
            name: "Samidullayev Bahodir",
            taomName: "Manti",
            narxi: "5 000",
            soni: "10",
            umumiyNarxi: "50 000",
            tel: "+998 91 545 45 87",
            status: "Yitkazilgan",
        },
        {
            name: "To’ramurodov Shoislom",
            taomName: "Big Lavash",
            narxi: "24 000",
            soni: "3",
            umumiyNarxi: "72 000",
            tel: "+998 99 655 78 98",
            status: "Yitkazilgan",
        },
    ],
    tasks4:[
        {
            name: "Abdulaziz Ochilov",
            tel: "+998 97 888 10 27",
            rol: "Admin",
        },
        {
            name: "Ergashev Islom",
            tel: "+998 88 110 24 57",
            rol: "Yitkazuvchi",
        },
        {
            name: "Samidullayev Bahodir",
            tel: "+998 91 545 45 87",
            rol: "Admin",
        },
        {
            name: "To’ramurodov Shoislom",
            tel: "+998 99 655 78 98",
            rol: "Foydalanuvchi",
        },
    ],
}

const reduser = (state = initialState, action) =>{
    console.log(action);

    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state, tasks: [...state.tasks, 
                    {
                        taomnomi: action.payload[0], 
                        taomtarifi: action.payload[1],
                        taomNarxi: action.payload[2],
                        kategoriya: action.payload[3],
                    }]
            };
        case ADD_NEW1_TASK:
            return{
                ...state, tasks1: [...state.tasks1, action.payload]
            };
        case ADD_NEW2_TASK:
            return{
                
            };
        case ADD_NEW3_TASK:
            return{
                    
            };
        case ADD_NEW4_TASK:
            return{
                        
            };
            
        default:
            return state;
    };
}

export default reduser;