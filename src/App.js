import React from 'react';
import Navbar from "./components/Navbar"
import UserProfile from "./components/UserProfile"
import { Switch, Route, } from "react-router-dom"
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" render={ () => <div>Home</div>} />
        <Route exact path="/user/profile" render={ () => <UserProfile /> } />
        <Route render={ () => <div>404 Error: Page Not Found</div>} />
      </Switch>
    </Container>
  </>
)

export default App;
