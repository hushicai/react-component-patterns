// 无状态组件
import React, { MouseEvent, FunctionComponent } from "react";
import withDefaultProps from "./withDefaultProps";

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
  color?: string;
};

const Button: FunctionComponent<Props> = ({
  onClick: handleClick,
  color,
  children,
}) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
);

const defaultProps = {
  color: "red",
};

export const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button);

// ———————————— 内联形式 begin————————————————
// 函数组件需要显示提供Props，ts无法从参数中推导
// const ButtonWithDefaultProps = withDefaultProps<Props>(
//   defaultProps,
//   ({ onClick: handleClick, color, children }) => (
//     <button style={{ color }} onClick={handleClick}>
//       {children}
//     </button>
//   ),
// );

// 类组件无需显示提供Props，ts可以自行推导
// const ButtonWithDefaultProps = withDefaultProps(
//   defaultProps,
//   class Button extends Component<Props> {
//     render() {
//       const { onClick: handleClick, color, children } = this.props;
//       return (
//         <button style={{ color }} onClick={handleClick}>
//           {Children}
//         </button>
//       );
//     }
//   },
// );
// ———————————— 内联形式 end————————————————

// 函数组件defaultProps即将deprecated
// https://twitter.com/dan_abramov/status/1133878326358171650
// 对于函数组件默认属性，可直接通过默认参数来解决。
export const ButtonWithDefaultParameters: FunctionComponent<Props> = ({
  onClick: handleClick,
  color = "red",
  children,
}) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
