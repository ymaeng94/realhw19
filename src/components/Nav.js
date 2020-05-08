import React from "react";
import SearchName from "./SearchName.js";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button"></button>
      <div className="collapse navbar-collapse row" id="navbarNav">
      <div className="search-area col-4">
          <SearchName />
      </div>
      </div>
    </nav>
  );
}
export default Nav;