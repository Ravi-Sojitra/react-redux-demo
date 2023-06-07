import { CREATE_ITEM,READ_ITEM,UPDATE_ITEM,DELETE_ITEM } from "./actionTypes";

export const handleAdd = (item)=>{
    // console.log('action',item);
    return{
        type:CREATE_ITEM,payload:item
    }
}

export const handleUpdate = (data)=>{
    console.log('update action ', data);
    return{
        type:UPDATE_ITEM,
        payload:data
    }
}