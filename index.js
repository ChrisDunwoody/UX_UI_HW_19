
console.log("your index.js file is loaded correctly!")

/*$( "#card" ).on( "Click", function() {
console.log( "You clicked on #card" );
} );*/

/*$( "#target" ).on( "click", function() {
    alert( "Handler for `click` called." );
  } );*/

  /*$("#card").click();{} */
  
  /*$("#card").click(function(){
    // action goes here!!
  });*/

  /*$(document).ready(function(){
    $("#card").click(function(){
      $(this).hide();
    });
  });*/

  function myFunction() {
    var x = document.getElementById("#pop");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  