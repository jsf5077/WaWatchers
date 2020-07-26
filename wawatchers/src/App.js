import React from "react";
import PageHeader from "./Header";
import MenuCard from "./Cards.js";
import categories from "./Categories.json";
import { Card } from "semantic-ui-react";

class App extends React.Component {
  state = {
    categories,
  };
  render() {
    return (
      <div>
        <PageHeader />
        <Card.Group doubling itemsPerRow={3} stackable>
          {this.state.categories.map((cat) => (
            <MenuCard id={cat.id} avatar={cat.avatar} header={cat.header} />
          ))}
        </Card.Group>
      </div>
    );
  }
}
export default App;
