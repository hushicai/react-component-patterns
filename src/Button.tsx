// 无状态组件
import React, { MouseEvent, FunctionComponent } from "react";

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
};

const Button: FunctionComponent<Props> = ({
  onClick: handleClick,
  children,
}) => <button onClick={handleClick}>{children}</button>;

export default Button;
