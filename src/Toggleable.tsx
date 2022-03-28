import { Component, MouseEvent } from "react";
import { isFunction } from "./utils";

const initialState = {
  show: false,
};

type State = Readonly<typeof initialState>;

type Props = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
type ToggleableComponentProps = {
  show: State["show"];
  toggle: Toggleable["toggle"];
};

export default class Toggleable extends Component<Props, State> {
  readonly state: State = initialState;

  render() {
    const { render, children } = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle,
    };

    if (render) {
      return render(renderProps);
    }

    // type guard
    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = (event: MouseEvent<HTMLElement>) =>
    this.setState(updateShowState);
}

const updateShowState = (prevState: State) => ({ show: !prevState.show });
