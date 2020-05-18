import React from "react";
import { Link } from "@reach/router";
import { Store } from "./Store";

const App = ({ children }: any): JSX.Element => {
  const {
    state: { favorites },
  } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick tour favorite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favs">Favourite(s): {favorites.length}</Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default App;
