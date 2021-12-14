import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { clear, appendNumber } from "../redux/calculatorSlice";
import { IButton } from "../types/types";

export default function Button({ id, type, children }: IButton) {
  const dispatch = useDispatch<AppDispatch>();
  const currentOperand = useSelector(
    (state: RootState) => state.calculator.currentOperand
  );

  const onButtonClick = () => {
    if (children === "." && currentOperand === "0") return;

    switch (id) {
      case "clear":
        dispatch(clear());
        break;
    }

    if (type === "number") {
      currentOperand === "0" && dispatch(clear());
      dispatch(appendNumber(children));
    }
  };

  return (
    <div id={id} className={"button " + type} onClick={onButtonClick}>
      {children}
    </div>
  );
}
