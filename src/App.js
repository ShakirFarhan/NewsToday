import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newsitem from "./components/Newsitem";
import News from "./components/News";
import {
  HashRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" pageSize="6" category="general" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={<News key="business" pageSize="6" category="business" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize="6"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={<News key="general" pageSize="6" category="general" />}
            ></Route>
            <Route
              exact
              path="/health"
              element={<News key="health" pageSize="6" category="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize="6" category="science" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize="6" category="sports" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News key="technology" pageSize="6" category="technology" />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
