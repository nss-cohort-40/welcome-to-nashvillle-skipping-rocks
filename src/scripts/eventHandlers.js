// grab value from the arts search box
// pass .value into the fetch call
// define location of returned results
// loop results and run through the domComponent function
// take each domComponent and append to dom location 
// Museum Search Event Handler



// Parks Search Event Handler
// document.querySelector("#parkSearchButton").addEventListener("click", function () {
//   // console.log("NOOOOO")
//   getArtWorks("parksFieldContainer").value
//     .then(artworks => {
//       for (let art of artworks) {

//         resultsContainer.innerHTML = artComponent(art)
//       }
//     })
// })

// Art Search Event Handler
document.querySelector("#artSearchButton").addEventListener("click", function () {
  // console.log("Hello")
  const fieldVariable = document.querySelector(".artsFieldContainer").value
  getArtWorks(fieldVariable)
    .then(artworks => {
      for (let art of artworks) {
        resultsContainer.innerHTML = artComponent(art)
      }
    })
})