/* eslint-disable prettier/prettier */
import { SAVE } from './constants';
const initialState = [];

export const reducer = (state = initialState,action)=>{
 switch (action.type){
     case SAVE:
         return [
            ...state,
         {
              name:action.payload.name,
              plannedamount:action.payload.plannedamount,
             actualamount:action.payload.actualamount,
          },

         ];
         default:
             return state;
        }
 };

