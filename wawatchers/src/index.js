import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  componentDidMount() {}

  renderContent() {}

  render() {
    return <div>hello</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
