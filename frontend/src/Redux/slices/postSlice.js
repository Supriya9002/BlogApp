import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import baseUrl from "./../Urls"

export const getAllBlog = createAsyncThunk("blog/getAllBlog", async(_, {rejectWithValue})=>{
  try{
    // console.log("baseUrl",baseUrl)
      const response = await fetch(`${baseUrl}/api/blog/posts`, {
          method: "GET",
          headers:{
              "Content-Type": "application/json",
          }
      });
      const data = await response.json();
      console.log("data", data)
      if(!response.ok){
          return rejectWithValue(data);
      }
      return data;
  }catch(err){
      //console.log(err);
      return rejectWithValue("An error occurred while fetching blogs")
  }
})
export const getSpecificBlog = createAsyncThunk("blog/getSpecificBlog", async(ID, {rejectWithValue})=>{
  try{
      const response = await fetch(`${baseUrl}/api/blog/posts/${ID}`,{
          method: "GET",
          headers:{
              "Content-Type": "application/json",
          }
      });
      const data = await response.json();
      if(!response.ok){
          return rejectWithValue(data);
      }
      return data;
  }catch(err){
      console.log(err);
      return rejectWithValue(err)
  }
})
export const deleteBlog = createAsyncThunk("blog/deleteBlog", async(ID, {rejectWithValue})=>{
  try{
      const response = await fetch(`${baseUrl}/api/blog/posts/${ID}`,{
          method: "DELETE",
          headers:{
              "Content-Type": "application/json",
          }
      });
      const data = await response.json();
      if(!response.ok){
          return rejectWithValue(data);
      }
      return data;
  }catch(err){
      console.log(err);
      return rejectWithValue(err)
  }
})
export const updateBlog = createAsyncThunk("blog/updateBlog", async({formData, ID}, {rejectWithValue})=>{
  try{
    // console.log("In createThunk",formData, ID )
      const response = await fetch(`${baseUrl}/api/blog/posts/${ID}`,{
          method: "PUT",
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(!response.ok){
          return rejectWithValue(data);
      }
      return data;
  }catch(err){
      console.log(err);
      return rejectWithValue(err)
  }
})

export const createBlog = createAsyncThunk("blog/createBlog", async(formData, {rejectWithValue})=>{
  try{
    // console.log("In createThunk",formData )
      const response = await fetch(`${baseUrl}/api/blog/posts`,{
          method: "POST",
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(!response.ok){
          return rejectWithValue(data);
      }
      return data;
  }catch(err){
      console.log(err);
      return rejectWithValue(err)
  }
})

const postSlice = createSlice({
    name: "post",
    initialState: {
      loading: false,
      error: null,
      successMessage: null,
      blogArr: [],
      specificBlog: {},
    },
    reducers: {
      // i can add other reducers if needed
    },
    extraReducers: (builder)=>{
      builder
      .addCase(getAllBlog.fulfilled, (state, action)=>{
        //   console.log("In getAllBlog By ID action.payload", action.payload)
          state.blogArr = action.payload;
      })
      .addCase(getSpecificBlog.fulfilled, (state, action)=>{
        // console.log("In getAllBlog By ID action.payload", action.payload)
        state.specificBlog = action.payload;
    })
  }
});
  
export const postReducer= postSlice.reducer;
export const postActions = postSlice.actions;