import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Button from "./Button";
import "./Calculator.css";

function Calculator() {
  const currentOperand = useSelector(
    (state: RootState) => state.calculator.currentOperand
  );
  const prevOperand = useSelector(
    (state: RootState) => state.calculator.prevOperand
  );

  return (
    <div id="calculator" className="flex-column">
      <div id="display" className="flex-column">
        <div id="prev-operand">{prevOperand}</div>
        <div id="current-operand">
          {currentOperand === "" ? 0 : currentOperand}
        </div>
      </div>
      <div id="buttons-container">
        <Button id="clear" type="operation">
          AC
        </Button>
        <Button id="divide" type="operation">
          /
        </Button>
        <Button id="multiply" type="operation">
          x
        </Button>

        <Button id="one" type="number">
          1
        </Button>

        <Button id="two" type="number">
          2
        </Button>

        <Button id="three" type="number">
          3
        </Button>

        <Button id="subtract" type="operation">
          -
        </Button>

        <Button id="four" type="number">
          4
        </Button>

        <Button id="five" type="number">
          5
        </Button>

        <Button id="six" type="number">
          6
        </Button>

        <Button id="add" type="operation">
          +
        </Button>

        <Button id="seven" type="number">
          7
        </Button>

        <Button id="eight" type="number">
          8
        </Button>

        <Button id="nine" type="number">
          9
        </Button>

        <Button id="equals" type="operation">
          =
        </Button>

        <Button id="zero" type="number">
          0
        </Button>
        <Button id="decimal" type="number">
          .
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
