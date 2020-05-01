// grab value from the arts search box
// pass .value into the fetch call
// define location of returned results
// loop results and run through the domComponent function
// take each domComponent and append to dom location
// Museum Search Event Handler


let parksFieldValue2 = document.querySelector("#parksField")
let resultsSection = document.querySelector(".searchResults")

// Parks Event Handler
document.querySelector("#parkSearchButton").addEventListener("click", event => {
  let parksFieldValue = document.querySelector("#parksField").value;
  getParks(parksFieldValue)
    .then(parks => {
      for (let i = 0; i < parks.length; i++) {
        resultsContainer.innerHTML = parksHTMLFactory(parks[i], i)
        parksFieldValue2.value = ""
      }
      document.querySelector(".parks-save-button").addEventListener("click", event => {
        parkResultID = document.querySelector("#park--0")
        itineraryResultsContainer.innerHTML += document.querySelector(".parkTitle").innerHTML

        resultsSection.innerHTML =
          `<section>
        <div id ="addedToIItinerary">Park Added to Your Itinerary</div>
        </section > `
      })
      document.querySelector("#parksField").addEventListener("click", event => {
        document.querySelector("#addedToIItinerary").innerHTML = ""
      })
      document.querySelector("#artsField").addEventListener("click", event => {
        document.querySelector("#addedToIItinerary").innerHTML = ""
      })
    })
})

let artsFieldValue2 = document.querySelector("#artsField")

artsFieldValue2 = document.querySelector("#artsField")
// Art Search Event Handler
document.querySelector("#artSearchButton").addEventListener("click", event => {
  let artsFieldValue = document.querySelector("#artsField").value
  getArtWorks(artsFieldValue)
    .then(artworks => {
      for (let i = 0; i < artworks.length; i++) {
        resultsContainer.innerHTML += artComponent(artworks[i], i)
        console.log(resultsContainer)
        artsFieldValue2.value = ""
      }
      document.querySelector(".art-save-button").addEventListener("click", event => {
        artResultID = document.querySelector("#art--0")
        itineraryResultsContainer.innerHTML += document.querySelector(".artLocation").innerHTML
        resultsSection.innerHTML =
          `<section>
        <div id ="addedToIItinerary">Museum Added to Your Itinerary</div>
        </section > `
      })
      document.querySelector("#artsField").addEventListener("click", event => {
        document.querySelector("#addedToIItinerary").innerHTML = ""
      })
      document.querySelector("#parksField").addEventListener("click", event => {
        document.querySelector("#addedToIItinerary").innerHTML = ""
      })
    })
})
// document.querySelector("#artsField").addEventListener("click", event => {
//   document.querySelector("#addedToIItinerary").innerHTML = ""
// })