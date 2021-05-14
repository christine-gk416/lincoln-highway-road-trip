// Run code when DOM is ready for JS to execute

$(document).ready(function () {

  // Toggle more text when Read More button is clicked

  $(".read-more-btn").click(function () {
    $(this).prev().toggle();

    // Show the additional text in hidden <span>

    $(this).siblings(".more-text").toggle();

    // When button hasn't been clicked, show Read More
    if ($(this).text() == 'Read More') {

      // After button is clicked show Read Less

      $(this).text('Read Less');
    }

    // Show Read More when button toggles to original position
    else {
      $(this).text('Read More');
    }
  });
});