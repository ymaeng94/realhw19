import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import DataContext from "../utils/DataContext";
import API from "../utils/API";


const DataArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "aescend",
    filteredUsers: [],
    headings: [
      { name: "name", width: "20%", order: "aescend" },
      { name: "phone", width: "25%", order: "aescend" },
      { name: "email", width: "25%", order: "aescend" },
    ]
  });


  const handleSort = heading => {
    let currentOrder = developerState.headings
      .filter(elem => elem.name === heading)
      .map(elem => elem.order)
      .toString();

    if (currentOrder === "aescend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "aescend";
    }

    const compareFnc = (a, b) => {
      if (currentOrder === "ascend") {
        // for missing values
        if (a[heading] === undefined) {return 1;} 
        else if (b[heading] === undefined) {return -1;}

        // numerically
        else if (heading === "name") {return b[heading].first.localeCompare(a[heading].first);}
        else if (heading === "dob") {return b[heading].age - a[heading].age;}
        else {return b[heading].localeCompare(a[heading]);}
      }
    };

    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    const updatedHeadings = developerState.headings.map(elem => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings
    });
  };

  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter(item => {
    let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
    if(values.indexOf(filter.toLowerCase()) !== -1){
    return item
    };
    });
    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };

  useEffect(() => {
    API.getUsers().then(results => {
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {developerState.filteredUsers.length > 10 }
      </div>
    </DataContext.Provider>
  );
};

export default DataArea;