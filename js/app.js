$(".spoiler").on("click", "button", () => {
  const button = $(".spoiler button");
  //show the spoiler text
  span.show();
  //hide the "Reveal Spoiler" Button
  button.hide();
});
//create the "Reveal Spoiler" button
const $button = $("<button>Reveal Spoiler</button>");
//append to the web page
$(".spoiler").append($button);

//Hide the spoiler text
const span = $(".spoiler span");
span.hide();
