// Museums API / Fetch
function getArtWorks(name) {
  return fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?first_name=${name}`)
    .then(arts => arts.json())
};
