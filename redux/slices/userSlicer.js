import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state, action){},
        deleteUsers(state,action){}
    }
})

// console.log(userSlices.actions.addUser)

export default userSlices.reducer;

export const { addUser,removeUser,deleteUsers}  = userSlices.actions;