import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkmode:(state,action: PayloadAction<boolean>)=>{
        state.isDarkMode=action.payload
    }
  },
});
export const {setIsSidebarCollapsed,setIsDarkmode} = globalSlice.actions;
export default globalSlice.reducer;
