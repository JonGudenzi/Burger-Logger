// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burgers").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.

      console.log("we clicked here");
      event.preventDefault();
  
      var burger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        method: "POST",
        data: burger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  