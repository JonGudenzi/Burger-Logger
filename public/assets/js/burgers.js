// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burgers").on("click", function(event) {
      var id = $(this).data("id");
      var burgers = $(this).data("burgers");
  
      var newBurgers = {
        burger_name: $("newBurgers").val() == undefined ? " " : $("#newBurgers").val().trim(),
        devoured: 0
      };
  
  
      $.ajax("/api/burgers/" + id, {
        type: "POST",
        data: newBurgers
      }).then(
        function() {
          console.log("new burger added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      
      event.preventDefault();
  
      var eatenDevoured = {
        burger_name: $("#burger").val().trim(),
        devoured: 1
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenDevoured
      }).then(
        function() {
          console.log("Burger is devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  