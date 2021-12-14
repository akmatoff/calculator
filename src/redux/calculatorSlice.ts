import { createSlice } from "@reduxjs/toolkit";

import { ICalculatorState } from "../types/types";

const initialState: ICalculatorState = {
  currentOperand: "0",
  prevOperand: "",
  operation: null
}

const calculatorSlice = createSlice({
  name: "calculators",
  initialState,
  reducers: {
    clear: (state) => {
      return {...state, prevOperand: "", currentOperand: ""}
    },
    appendNumber: (state, action) => {
      if (action.payload === '.' && state.currentOperand.includes('.')) return;
      if (action.payload === '0' && state.currentOperand === '0') return;
      return { ...state, currentOperand: state.currentOperand + action.payload}
    },
  }
})

export const {clear, appendNumber} = calculatorSlice.actions;

export default calculatorSlice.reducer;

