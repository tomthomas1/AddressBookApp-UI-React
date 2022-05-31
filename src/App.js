import './App.css';
import AddressBookForm from "./components/address-form/addressbook-form";
import HomePage from "./components/home/home";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path = "/addressbook-form"><AddressBookForm /></Route>
          <Route exact path = "/home"><HomePage /></Route>
          <Route exact path="/addressbook-form/:id"><AddressBookForm /></Route>
          <Route exact path=""><Redirect exact from="/" to="/home" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;