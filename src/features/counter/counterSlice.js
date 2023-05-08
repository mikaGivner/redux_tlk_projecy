import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ///count: 0,
  list: [],
  //create state of empty ToDo-list:""
};

export const counterSlice = createSlice({
  name: "listItems",
  initialState,
  reducers: {
    //Here all the actions we do on this state
    add: (state, action) => {
      //take the initialState and do some actions on it
      //const taskToAdd = localStorage.getItem("newTask");
      state.list.push(action.payload.task);
    },
    remove: (state, action) => {
      // *- need to be the key of the task( do with action)
      state.list.splice(action.payload, 1);
    },
  },
});
/// export const counterSlice = createSlice({
///   name: "counter",
///   initialState,
///   reducers: {
///     //Here all the actions we do on this state
///     increment: (state) => {
///       //take the initialState and do some actions on it
///       state.count += 1;
///     },
///     decrement: (state) => {
///       state.count -= 1;
///     },
///   },
/// });

//put all the functions/actions inside the curly brackets
///export const { increment, decrement } = counterSlice.actions;
export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
