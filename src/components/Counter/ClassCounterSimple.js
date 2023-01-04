import React, { Component } from "react";

export default class ClassCounterSimple extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementBy1 = this.incrementBy1.bind(this);
  }

  incrementBy1() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  decrementBy1() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  incrementBy3 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 3,
      };
    });
  };

  decrementBy3 = () => {
    this.setState(function (prevState) {
      return { count: prevState.count - 3 };
    });
  };

  //   improperIncrement = () => {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   };

  //   properIncrement = () => {
  //     setCount((prevCount) => prevCount + 1);
  //     setCount((prevCount) => prevCount + 1);
  //     setCount((prevCount) => prevCount + 1);
  //   };

  render() {
    return (
      <div>
        <h3> Simple Class Counter </h3>

        <div>
          Count : {this.state.count} &nbsp;{" "}
          <button onClick={() => this.setState({ count: 0 })}>Reset</button>
          <hr />
          <button onClick={this.incrementBy1}> + 1</button>
          <button onClick={this.decrementBy1.bind(this)}> - 1</button>
          <br />
          <button onClick={this.incrementBy3}>+ 3</button>
          <button onClick={this.decrementBy3}>- 3</button>
          <br />
          {/* <h4>
            The below button calls methods improperIncrement, where we call setCount(count + 1) 3
            times.
          </h4>
          <h4>But this will not increase the counter to +3. Instead it will go only to +1</h4>
          <button onClick={improperIncrement}>Improper Increment</button>
          <h4>
            To fix this, use setCount(prevCount =&gt; prevCount + 1). Check below button which calls
            properIncrement()
          </h4>
          <button onClick={properIncrement}>Proper Increment</button> */}
        </div>
      </div>
    );
  }
}
