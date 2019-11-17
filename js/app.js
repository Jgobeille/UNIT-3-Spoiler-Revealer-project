$(".spoiler").on("click", "button", e => {
  //show the spoiler text
  this.target = e.target;

  $(this.target)
    .prev()
    .show();
  //hide the "Reveal Spoiler" Button
  $(this.target).hide();
});
//create the "Reveal Spoiler" button
const $button = $("<button>Reveal Spoiler</button>");
//append to the web page
$(".spoiler").append($button);

//Hide the spoiler text
const span = $(".spoiler span");
span.hide();
