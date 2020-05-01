
// Parks HTML Factory
const parksHTMLFactory = (parkResults, index) => {
  return `
<section class="park-search-result">
  <div id="park--${index}" class="parksReturnDiv">
    <div class="parkTitle">${parkResults.park_name}</div>
    <div class="">${parkResults.mapped_location.human_address}</div>
    <div class="">${parkResults.canoe_launch}</div>
    <button class="parks-save-button" id="parks-save-button--${index}">Save</button>
  </div>
</section>
  `
};

// Museum HTML Factory
const artComponent = (artResult, index) => {
  return `
  <section class="art-search-result">
<div id="art--${index}" class="artReturnDiv">
  <div class="artLocation">${artResult.location}</div>
  <div class="artLocation">Art Name: ${artResult.artwork}</div>
  <div class="">Artist Name: ${artResult.first_name} ${artResult.last_name}</div>
  <div class="">Description: ${artResult.description}</div>
  <button class="art-save-button" id="art-save-button--${index}">Save</button>
</div >
 </section >
  `;
};



const parksFieldContainer = document.querySelector("#parksField")
const artsFieldContainer = document.querySelector("#artsField")

const resultsContainer = document.querySelector(".searchResults")
const parksResultsContainer = document.querySelector("#parkReturn")
const artsResultsContainer = document.querySelector("#artReturn")
// resultsContainer.innerHTML = artComponent(artsResults)
