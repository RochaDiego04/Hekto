import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  message: string;
  isVisible: boolean;
  type: "success" | "error";
}
interface AlertPayload {
  message: string;
  type: "success" | "error";
}

const initialState: ToastState = {
  message: "",
  isVisible: false,
  type: "success",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showAlert(state, action: PayloadAction<AlertPayload>) {
      state.message = action.payload.message;
      state.isVisible = true;
      state.type = action.payload.type;
    },
    hideAlert: (state) => {
      state.isVisible = false;
      state.message = "";
    },
  },
});

export const { showAlert, hideAlert } = toastSlice.actions;
export default toastSlice.reducer;
