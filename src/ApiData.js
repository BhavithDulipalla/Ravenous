import React from "react";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer <API KEY>'
  }
};

 async function ApiData(item, loc) {
 const list = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${loc}&term=${item}&categories=&sort_by=best_match&limit=10`, options)
  .then(response => response.json())
  .then(response => response)
  .catch(err => console.error(err));
  return list.businesses;
}

export default ApiData;