export interface IButton {
  id: string;
  type: "operation" | "number";
  children?: string;
}

export interface IOutput {
  currentOperand: string;
  prevOperand: string;
}