import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";



export const loginUser= createAsyncThunk(
    "auth/loginUser",
    async (userData) => {
        try {
            const res= await fetch('http://localhost:3000/api/user/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userData)
            })

            const data= await res.json()
            console.log(data);
            return data
        } catch (error) {
            console.log(`error in posting from frontend ${error}`);
        }
    }
)

export const registerUser=createAsyncThunk(
    "auth/registerUser",
    async (userData) => {
        try {
            const res= await fetch(`http://localhost:3000/api/user/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userData)
            })
            const data= await res.json()
            console.log(data)
            return data

        } catch (error) {
            console.log(`error in registering from from frontend ${error}`);
        }
    }
)


const authSlice= createSlice({
    "name":"auth",
    initialState:{
        user:null,
        token:null,
        isLoading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading= true
        })

        builder.addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoading=false
            state.token= action.payload.token
            state.user= action.payload.user
        })

        builder.addCase(loginUser.rejected,(state)=>{
            state.isLoading= false
        })


        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading= true
        })

        builder.addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.token= action.payload.token
            state.user= action.payload.user
        })

        builder.addCase(registerUser.rejected,(state)=>{
            state.isLoading=false
        })
    }
})


export default authSlice.reducer