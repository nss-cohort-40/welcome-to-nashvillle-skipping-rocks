// Parks HTML Factory
const parksHTMLFactory = (parkResults, index) => {
  console.log(parkResults)
  return `
<section class="park-search-result">
  <div id="park--${index}" class="parksReturnDiv">
    <div class="parkTitle">Park: ${parkResults.park_name}</div>
    <div>Location: ${parkResults.mapped_location.human_address}</div>
    <div>Canoe Launch Available: ${parkResults.canoe_launch}</div>
    <button class="parks-save-button" id="parks-save--${index}">Save</button>
  </div>
</section>
  `
};

// Museum HTML Factory
const artComponent = (artResult) => {
  return `
  <section>
  <div class="artReturnDiv">
    <div id="">${artResult.location}</div>
    <div id="">${artResult.first_name}</div>
    <div id="">${artResult.last_name}</div>
    <div id="">${artResult.page_link.url}</div>
    <button class="art-save-button" id="art-save-button">Save</button>
  </div>
</section> `;
};






const parksFieldContainer = document.querySelector("#parksField")
const artsFieldContainer = document.querySelector("#artsField")

const resultsContainer = document.querySelector(".searchResults")
const itineraryResultsContainer = document.querySelector(".itineraryResults")
// resultsContainer.innerHTML = artComponent(artsResults)
