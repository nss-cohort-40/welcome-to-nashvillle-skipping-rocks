// Parks API / Fetch
function getParks() {
  return fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(parks => parks.json())
}


