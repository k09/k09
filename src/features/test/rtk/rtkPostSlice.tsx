import { createSlice } from "@reduxjs/toolkit";

const posts = [
    { id: 1, title: 'json-server', author: 'typicode' },
    { id: 2, title: "react", "author": "k09" },
    { id: 3, title: "redux", "author": "k09" },
    { id: 4, title: "redux toolkit", "author": "k09" },
    { id: 5, title: "redux toolkit query", "author": "k09" }
];  
const count = "5 post(s).";
const postState = { rtkPosts: posts, rtkCount: count};
const initialState = postState;

const rtkPostSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        created: (state, action) => {
            state.rtkPosts.push(action.payload);
        },
        updated: (state, action) => {
            [state, action];
        },
        deleted: (state, action) => {
            [state, action];
        }
    }
});

export const rtkCountSelector = (state) => state.rtkPost.rtkCount;
export const rtkPostsSelector = (state) => state.rtkPost.rtkPosts;
export const { created, updated, deleted } = rtkPostSlice.actions;
export default rtkPostSlice.reducer;