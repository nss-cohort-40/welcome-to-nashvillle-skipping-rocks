// grab value from the arts search box
// pass .value into the fetch call
// define location of returned results
// loop results and run through the domComponent function
// take each domComponent and append to dom location
// Museum Search Event Handler



// Parks Search Event Handler
document.querySelector("#parkSearchButton").addEventListener("click", event => {
  let parksFieldValue = document.querySelector("#parksField").value;
  getParks(parksFieldValue)
    .then(parks => {
      for (let i = 0; i < parks.length; i++) {
        resultsContainer.innerHTML = parksHTMLFactory(parks[i], i)
      }
      console.log(resultsContainer)
      document.getElementById("parks-save-button").addEventListener("click", event => {
        itineraryResultsContainer.innerHTML = "Test"
      })
    })
})

// Print Park Search To Itinerary
// document.getElementById("parks-save-button").addEventListener("click", function () {
//   console.log("Save Button Works")
// })

// const parkSaveEvent = document.getElementByClass("parkTitle")
// resultsContainer.innerHTML = parksHTMLFactory(park)

// Art Search Event Handler
document.querySelector("#artSearchButton").addEventListener("click", event => {
  const artsFieldValue = document.getElementById("artsField").value
  getArtWorks(artsFieldValue)
    .then(artworks => {
      for (let art of artworks) {
        resultsContainer.innerHTML += artComponent(art)
      }
    })
})