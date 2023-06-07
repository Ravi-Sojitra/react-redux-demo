// src/reducers/itemReducer.js
import { CREATE_ITEM, UPDATE_ITEM, } from "../Action/actionTypes";

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
    console.log('state===',state, '&&','action===',action);
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    // Define similar cases for READ_ITEM, UPDATE_ITEM, and DELETE_ITEM
    case UPDATE_ITEM:
       let tempArray = [...state];

      return tempArray.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
      });

    default:
      return state;
  }
};

export default itemReducer;
