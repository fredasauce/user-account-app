import React from "react"
import { Form, } from "semantic-ui-react"
import { UserConsumer } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = { 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    gender: this.props.gender, 
    email: this.props.email,
  };

  handleChange = (e, {name, value,}) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser({...this.state,});
  };

  render() {
    const { firstName, lastName, gender, email, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <Form.Select
            label="Gender"
            name="gender"
            value={gender}
            onChange={this.handleChange}
            options={genderOptions}
          />
        </Form.Group>
        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="purple" inverted>Save</Form.Button>
      </Form>
    );
  };
};

const genderOptions = [
  { key: "f", text: "Female", value: "Female", },
  { key: "m", text: "Male", value: "Male", },
  { key: "o", text: "Other", value: "Other", },
  { key: "p", text: "Prefer Not to Say", value: "Prefer Not to Say", },
];

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm
          {...props}
          firstName={value.firstName}
          lastName={value.lastName}
          gender={value.gender}
          email={value.email}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;