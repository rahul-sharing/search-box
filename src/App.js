import React from "react";
import "./App.css"
import data from "./fake.json"
import { useState } from "react";


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <div className="inputArea">
        <input type="text" placeholder="Type any name..." value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} />
        <button className='close' onClick={() => { setSearchTerm("") }} > {searchTerm ? "X" : "Search"} </button>
      </div>

      {data.filter((val) => {
        if (searchTerm == "") {
          // return ;    //use empty return if u wana keep the list empty before search
          return val   //return "value" if u want to keep all the data before search
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map(item => {
        return <p onClick={() => { setSearchTerm(item.name) }}> {item.name} </p>   //you can use link here to make the items cliclable
      })}
    </div>
  );
}

export default App;
