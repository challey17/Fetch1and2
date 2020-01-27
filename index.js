"use strict";

function getDogImage() {
  let quantity = $('input[name="Doggos"]').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //loops through all images returned
  for (let i = 0; i < responseJson.message.length; i++) {
    $(".results").append(
      `<img src="${responseJson.message[i]}" class="results-img" width="200" height="auto">`
    );
  }
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();

    getDogImage();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
