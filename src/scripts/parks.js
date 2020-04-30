// Parks API / Fetch
function getParks(park) {
  return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?park_name=${park}`)
    .then(parks => parks.json())
}


