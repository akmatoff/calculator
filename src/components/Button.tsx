import { IButton } from "../types/types";

export default function Button({ id, type, children }: IButton) {
  return (
    <div id={id} className={"button " + type}>
      {children}
    </div>
  );
}
