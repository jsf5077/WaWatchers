import React, { Component, Fragment } from "react";
import { Card, Divider, Image } from "semantic-ui-react";

function MenuCard(props) {
  return (
    <Fragment id={props.id}>
      <Card key={props.header}>
        <Image src={props.avatar} />

        <Card.Content textAlign="center">
          <Fragment>
            <Card.Header>{props.header}</Card.Header>
          </Fragment>
        </Card.Content>
      </Card>
    </Fragment>
  );
}
export default MenuCard;
