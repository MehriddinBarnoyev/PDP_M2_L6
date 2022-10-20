import { combineReducers } from "redux";
import katigoriyaReduser from './katigoriyaReduser';
import arizaReduser from './arizaReduser';
import yitkazilganReduser from './yitkazilganReduser';
import foydalanuvchiReduser from './foydalanuvchiReduser';
import taomReduser from './taomReduser';

const rootReduser = combineReducers({
    ariza: arizaReduser,
    yitkazilgan: yitkazilganReduser,
    foydalanuvchi: foydalanuvchiReduser,
    katigoriya: katigoriyaReduser,
    taom: taomReduser,
})

export default rootReduser;