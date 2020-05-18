import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import HomePage from "./HomePage";
import FavsPage from "./FavsPage";
import { Router, RouteComponentProps } from "@reach/router";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<HomePage />} path="/" />
          <RouterPage pageComponent={<FavsPage />} path="/favs" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
