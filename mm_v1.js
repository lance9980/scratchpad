$(document).ready(function(){

  $(".card").click(function() {
    play(this);
  });

  // call 'card_clicked' function when '.card' div is clicked
  //$(".card").click(card_clicked);
  // call 'reset_stats' function when '.reset' button is clicked
  //$(".reset").click(reset_stats);
});

function shuffle_cards() {
  for (var i=0; i<cards_array.length; i++) {

  }
}

// ***********************************
function card_clicked(){

  // if an already flipped or 3rd card is clicked, do nothing
  if ($(this).find(".back").is(':hidden') || (second_card_clicked != null)) {
    return;
  }

  // if 1st card is clicked, flip the card
  if (first_card_clicked == null) {
    $(this).find(".back").hide();
    // save 1st card DOM info to the tracker, while setting it to non-null
    first_card_clicked = $(this);
  }
  // if 2nd card is clicked, flip the card
  else {
    $(this).find(".back").hide();
    // save 2nd card DOM info to the tracker, while setting it to non-null
    second_card_clicked = $(this);
    // increment 'attempts' counter
    attempts++;

    // Nested If #1 - if 1st and 2nd cards match by checking image src, check if game is won
    if (first_card_clicked.find(".front img").attr("src") == second_card_clicked.find(".front img").attr("src")) {
      // increment 'matches' counter
      matches++;
      // call 'display_stats' function
      display_stats();
      // reset 'first_card_clicked' and 'second_card_clicked' trackers
      first_card_clicked = null;
      second_card_clicked = null;

      // set timeout when the game is won, so the last card flipped can be seen before winning image
      setTimeout(function(){
        // Nested If #2 - if all possible matches are made, game is won
        if (matches == total_possible_matches) {
          // display game winning image
          $("#img_win").css("display", "initial");
          // alert a win message
          alert("You Win!");
        }
      }, 1500);
    }
    // Nested Else #1 - if 1st & 2nd cards don't match, flip back the cards
    else {
      // call 'display_stats' to update attempts and accuracy
      display_stats();
      // set timeout before flipping back 1st and 2nd cards
      setTimeout(function(){
        // flip back 1st and 2nd cards
        first_card_clicked.find(".back").show();
        second_card_clicked.find(".back").show();
        // reset 'first_card_clicked' and 'second_card_clicked' trackers
        first_card_clicked = null;
        second_card_clicked = null;
      }, 2000);
    }

  }

}