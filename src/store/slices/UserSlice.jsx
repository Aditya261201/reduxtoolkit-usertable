import {createSlice} from "@reduxjs/toolkit";

// this is how we create a slice named users
// for users having initialState as [] empty array and having functions (reducers) for adding,deleting and deleting all users.
const users = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action){ },
        removeUser(state,action){ },
        deleteAllUsers(state,action){ },
    }
});


export {users};