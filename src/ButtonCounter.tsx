// 有状态组件
import React, { Component } from "react";

import Button from "./Button";

const initialState = { clicksCount: 0 };

type State = Readonly<typeof initialState>;

class ButtonCounter extends Component<object, State> {
  readonly state: State = initialState;

  // doBadThings = () => {
  //   // 编译时State类型安全
  //   this.state = { clicksCount: 12 };
  //   this.state.clicksCount = 12312;
  // };

  render() {
    const { clicksCount } = this.state;
    return (
      <>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
        You've clicked me {clicksCount} times!
      </>
    );
  }

  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);
}

const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
  // clicksCount类型安全
  // clicksCount: prevState.clicksCount--,
});

export default ButtonCounter;
