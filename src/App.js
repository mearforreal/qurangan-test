import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./comp/Header";
import Home from "./comp/Home";
import Post from "./comp/Post";
import Login from "./comp/Login";
import Profile from "./comp/Profile";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
