export interface IButton {
  id: string;
  type: "operation" | "number";
  children?: string;
}

export interface ICalculatorState {
  currentOperand: string;
  prevOperand: string;
  operation: "+" | "-" | "/" | "x" | null;
}
