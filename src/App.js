import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ApiData from './ApiData';
import BusinessList from './BusinessList';

function App() {
  const [data, setData] = useState([])

  async function search(item, location){
   const info = await ApiData(item, location,);
   return setData(info);
  }
  return (
    <div className="App">
      <SearchBar engine={search} />
      <BusinessList data={data} />
    </div>
  );
}

export default App;
