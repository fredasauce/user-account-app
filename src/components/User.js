import React from "react"
import { Card, } from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider"

const User = () => (
  <UserConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>
            {value.firstName} {value.lastName}
          </Card.Header>
          <Card.Meta>{value.gender}</Card.Meta>
          <Card.Description>Email: {value.email}</Card.Description>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default User;