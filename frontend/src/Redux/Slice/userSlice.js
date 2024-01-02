import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    state: {
        isFetching: false,
    },
    userInfo :{
      userName: 'No user',
      isAdmin: false,
    }
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
      state.state.isFetching = true;
    },
    setUser : (state, userInfo) => {
      state.userInfo = {...userInfo.payload};
    },
    logout : (state) => {
      state.userInfo = {
        userName: 'No user',
        isAdmin: false,
      }
    },
  }  
});

export const {
      setIsFetching,
      setUser,
      logout,
    } = userSlice.actions;


export default userSlice.reducer;