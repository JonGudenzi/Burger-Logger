
// $(function() {
//     $(".burgers").on("click", function(event) {
//       var id = $(this).data("id");
      
  
//       var newBurger = {
//         burger_name: $("#newBurger-input").val().trim(),
//         devoured: false
//       };
  
      
//       $.ajax("/api/burgers/", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           location.reload();
//         }
//       );
//     });
  

//     $("devour-burger").on("submit", (event) => {
//       var id = $(this).data("id");
//       event.preventDefault();
  
//       var devouredBurger = {
        
//         devoured: true
//       };
  
      
//       $.ajax("/api/burgers" + id,  {
//         method: "PUT",
//         data: devouredBurger
//       }).then(
//         function() {
//           console.log("created new burger");
          
//           location.reload();
//         }
//       );
//     });
//   });




// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".burgers").on("click", function(event) {
    var id = $(this).data("id");
    var burgers = $(this).data("burgers");

    var burgers = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgers
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event) => {
    
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
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});