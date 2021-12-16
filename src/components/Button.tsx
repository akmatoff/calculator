import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  clear,
  appendNumber,
  setOperation,
  setCurrentOperand,
  setPrevOperand,
  calculate,
} from "../redux/calculatorSlice";
import { IButton } from "../types/types";

export default function Button({ id, type, children }: IButton) {
  const dispatch = useDispatch<AppDispatch>();
  const prevOperand = useSelector(
    (state: RootState) => state.calculator.prevOperand
  );
  const currentOperand = useSelector(
    (state: RootState) => state.calculator.currentOperand
  );
  const operation = useSelector(
    (state: RootState) => state.calculator.operation
  );

  const onButtonClick = () => {
    if (children === "." && (currentOperand === "0" || currentOperand === ""))
      return;
    if (
      type === "operation" &&
      (currentOperand === "0" || currentOperand === "") &&
      prevOperand === ""
    )
      return;

    switch (id) {
      case "clear":
        dispatch(clear());
        return;
      case "equals":
        dispatch(calculate());
        return;
    }

    currentOperand === "0" && dispatch(clear());

    dispatch(appendNumber(children));

    if (type === "operation") {
      if (prevOperand !== "") dispatch(calculate());
      dispatch(setOperation(operation));
      dispatch(setPrevOperand(currentOperand));
      dispatch(setCurrentOperand(""));
    }
  };

  return (
    <div id={id} className={"button " + type} onClick={onButtonClick}>
      {children}
    </div>
  );
}
