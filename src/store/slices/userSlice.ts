import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserRole = "driver" | "mechanic" | null;

interface UserState {
  role: UserRole;
}

const initialState: UserState = {
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = userSlice.actions;
export default userSlice.reducer;
