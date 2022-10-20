import { REMOVE_FOY_TASK } from "../types"

const initialState = {
    tasks4:[
        {
            id: 1,
            name: "Abdulaziz Ochilov",
            tel: "+998 97 888 10 27",
            rol: "Admin",
        },
        {
            id: 2,
            name: "Ergashev Islom",
            tel: "+998 88 110 24 57",
            rol: "Yitkazuvchi",
        },
        {
            id: 3,
            name: "Samidullayev Bahodir",
            tel: "+998 91 545 45 87",
            rol: "Admin",
        },
        {
            id: 4,
            name: "To’ramurodov Shoislom",
            tel: "+998 99 655 78 98",
            rol: "Foydalanuvchi",
        },
    ],
}

const foydalanuvchiReduser = (state = initialState, action) => {
    let tasks4;
    switch (action.type) {
        case REMOVE_FOY_TASK:
            tasks4 = [...state.tasks4]
            tasks4.splice(action.payload, 1)
            return {...state, tasks4}

        default:
            return state;
    }
}

export default foydalanuvchiReduser;