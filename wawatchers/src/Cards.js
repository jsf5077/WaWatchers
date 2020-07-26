import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Button, Card, Divider, Image, Placeholder } from "semantic-ui-react";
import categories from "./Categories.json";

export default class MenuCard extends Component {
  state = {
    categories,
  };

  render() {
    return (
      <Fragment>
        <Divider />

        <Card.Group doubling itemsPerRow={3} stackable>
          {this.state.categories.map((categories) => (
            <Card key={categories.header}>
              <Image src={categories.avatar} />

              <Card.Content textAlign="center">
                <Fragment>
                  <Card.Header>{categories.header}</Card.Header>
                </Fragment>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}
