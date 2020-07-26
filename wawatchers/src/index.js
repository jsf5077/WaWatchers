import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PageHeader from "./Header";
import MenuCard from "./Cards.js";

class App extends React.Component {
  componentDidMount() {}

  renderContent() {}

  render() {
    return (
      <div>
        <PageHeader />
        <MenuCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
