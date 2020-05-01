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
        resultsContainer.innerHTML += parksHTMLFactory(parks[i], i)
        // console.log(resultsContainer)
        parksFieldValue2.value = ""
      }
      const allParkSaveButtons = document.querySelectorAll(".parks-save-button")
      allParkSaveButtons.forEach(button => button.addEventListener("click", event => {
        const parkID = event.target.id.split("--")[1]
        parkResultContainer = document.querySelector(`#park--${parkID}`)
        // let titleONly = document.querySelector(".parkTitle").textContent
        parksResultsContainer.innerHTML += parkResultContainer.children[0].textContent

        resultsSection.innerHTML =
          `<section>
          <div id="addedToItinerary">"Park Added to Your Itinerary"</div>
          <div class="thumbsUp"</div>
        </section> `
      }))
      document.querySelector("#parksField").addEventListener("click", event => {
        document.querySelector("#addedToItinerary").innerHTML = ""
      })
      document.querySelector("#artsField").addEventListener("click", event => {
        document.querySelector("#addedToItinerary").innerHTML = ""
      })
      document.querySelector("#parksField").addEventListener("click", event => {
        document.querySelector(".thumbsUp").classList = ""
      })
      document.querySelector("#artsField").addEventListener("click", event => {
        document.querySelector(".thumbsUp").classList = ""
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
        artsFieldValue2.value = ""
      }
      const allArtSaveButtons = document.querySelectorAll(".art-save-button")
      allArtSaveButtons.forEach(button => button.addEventListener("click", event => {
        const artID = event.target.id.split("--")[1]
        artsResultContainer = document.querySelector(`#art--${artID}`)
        artsResultsContainer.innerHTML += artsResultContainer.children[0].textContent
        resultsSection.innerHTML =
          `<section>
          <div id="addedToItinerary">Museum Added to Your Itinerary</div>
          <div class="thumbsUp"</div>
        </section> `
      }))
      document.querySelector("#artsField").addEventListener("click", event => {
        document.querySelector("#addedToItinerary").innerHTML = ""
      })
      document.querySelector("#parksField").addEventListener("click", event => {
        document.querySelector("#addedToItinerary").innerHTML = ""
      })
      document.querySelector("#parksField").addEventListener("click", event => {
        document.querySelector(".thumbsUp").classList = ""
      })
      document.querySelector("#artsField").addEventListener("click", event => {
        document.querySelector(".thumbsUp").classList = ""
      })
    })
})
// document.querySelector("#artsField").addEventListener("click", event => {
//   document.querySelector("#addedToItinerary").innerHTML = ""
// })