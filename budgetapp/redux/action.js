/* eslint-disable prettier/prettier */
import { SAVE } from './constants';

export const save = (name,plannedamount,actualamount)=>{
    return {
     type:SAVE,
    payload:{name,plannedamount,actualamount},
    };

};
