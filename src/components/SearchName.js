import React, { useContext } from "react"
import DataContext from "../utils/DataContext";
import "../styles/SearchName.css";

const SearchName = () => {
  const Datacontext = useContext(DataContext);

  return (
    <div className="searchbox">
      <div className="input-group">

          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>

          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          onChange={e => Datacontext.handleSearchChange(e)}
          />

      </div>
    </div>
  );
}
export default SearchName;