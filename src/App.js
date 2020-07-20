// NPM packages
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import VideoPlayer from "./pages/VideoPlayer";

// styles
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/video/:videoId" component={VideoPlayer} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
