import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:'',
    isLogged:false
}

const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        setUser:(state,{payload}) => {
            state.user = payload
            state.isLogged = true
        },
        logOut:(state) => {
            state.isLogged = false
            state.user = ''
        }
    }
})

export const {setUser, logIn, logOut} = accountSlice.actions
export default accountSlice.reducer