$(document).ready(function() {
  // Get the image gallery container
  var imageGallery = $("#image-gallery");

  // Get the large image container
  var largeImageContainer = $("#large-image-container");

  // Get the large image element
  var largeImage = $("#large-image-container img");

  // Function to handle thumbnail click
  function handleThumbnailClick() {
    // Get the source of the clicked thumbnail
    var largeImageUrl = $(this).find("img").attr("src");

    // Set the source of the large image element
    largeImage.attr("src", largeImageUrl);

    // Show the large image container
    largeImageContainer.fadeIn();

    // Display a message to the user
    showMessage("You are viewing the image in its original dimensions.");
  }

  // Function to close the large image
  function closeLargeImage() {
    largeImageContainer.fadeOut();
  }

  // Function to display a message
  function showMessage(message) {
    // Create a message element and append it to the large image container
    var messageElement = $("<div class='message'>" + message + "</div>");
    largeImageContainer.append(messageElement);

    // Automatically remove the message after a few seconds
    setTimeout(function() {
      messageElement.remove();
    }, 3000); // Remove message after 3 seconds
  }

  // Add a click event listener to each thumbnail
  $(".thumbnails li").click(handleThumbnailClick);

  // Add a click event listener to the large image container to close it
  largeImageContainer.click(closeLargeImage);
});
