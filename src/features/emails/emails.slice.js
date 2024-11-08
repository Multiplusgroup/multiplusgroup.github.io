import sendEmail from "@/services/apiEmail";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  errorMessage: "",
  success: null,
  alertOpen: false,
  isSending: false,
  formData: null,
  message: "",
};

const sendContato = createAsyncThunk("emails/sendContato", async ({ data }) => {
  let results = await sendEmail({ data });
  if (results !== "OK") throw new Error(results);
  // return results;
});

const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    resetToasterMessage: (state) => {
      state.message = "";
    },
    resetFormData: () => {
      return initialState;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(sendContato.fulfilled, (state) => {
        state.error = false;
        state.success = true;
        state.alertOpen = true;
        state.isSending = false;
        state.message =
          "Mensagem enviada com sucesso! Em breve um consultor entrará em contato para tratar sobre a sua solicitação!";
      })
      .addCase(sendContato.pending, (state) => {
        state.isSending = true;
        state.error = null;
        state.success = null;
      })
      .addCase(sendContato.rejected, (state, action) => {
        console.log(action);
        state.error = true;
        state.errorMessage = action.error.message;
        state.success = false;
        state.alertOpen = true;
        state.isSending = false;
        state.message =
          "Sua mensãgem não pode ser enviada neste momento. Por favor, tente novamente mais tarde!";
      }),
});

export default emailsSlice.reducer;

export const { setFormData, resetFormData, resetToasterMessage } =
  emailsSlice.actions;

export { sendContato };
