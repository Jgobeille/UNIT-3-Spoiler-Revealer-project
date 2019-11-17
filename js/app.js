$(".spoiler").on("click", "button", e => {
  const button = $(".spoiler button");
  //show the spoiler text
  //   span.show();
  //hide the "Reveal Spoiler" Button
  $(e.target).hide();
});
//create the "Reveal Spoiler" button
const $button = $("<button>Reveal Spoiler</button>");
//append to the web page
$(".spoiler").append($button);

//Hide the spoiler text
const span = $(".spoiler span");
span.hide();
