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
    setOperation: (state, action) => {
      if (state.currentOperand === '') return;
      return {...state, operation: action.payload}
    },
    setCurrentOperand: (state, action) => {
      return { ...state, currentOperand: action.payload}
    },
    setPrevOperand: (state, action) => {
      return { ...state, prevOperand: action.payload }
    },
    calculate: (state) => {
      var result: number;
      var prev: number = parseFloat(state.prevOperand);
      var current: number = parseFloat(state.currentOperand);

      switch (state.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "/":
          result = prev / current;
          break;
        case "x":
          result = prev * current;
          break;
        default:
          return;
      }

      return { ...state, prevOperand: '', currentOperand: result.toString(), operation: null}
    }
  }
})

export const {clear, appendNumber, setOperation, setCurrentOperand, setPrevOperand, calculate} = calculatorSlice.actions;

export default calculatorSlice.reducer;

