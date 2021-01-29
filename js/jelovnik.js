

  $(function(){
    $("#accordion").accordion();
});

$( function() {
  $( document ).tooltip();
} );


var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("slide");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
     
      slides[slideIndex-1].style.display = "block";  
    }
    $( function() {
      $( "#draggable" ).draggable();
    } );

    $( function() {
      var state = true;
      $( "#button" ).on( "click", function() {
        if ( state ) {
          $( "#effect" ).animate({
            backgroundColor: "#aa0000",
            color: "#fff",
            width: 500
          }, 1000 );
        } else {
          $( "#effect" ).animate({
            backgroundColor: "#fff",
            color: "#000",
            width: 240
          }, 1000 );
        }
        state = !state;
      });
    } ) ;
    $( function() {
      $( "#dialog" ).dialog();
    } );

    $( function() {
      $( "#tabs" ).tabs({
        event: "mouseover"
      });
    } );


    $( function() {
      $( "#draggable1" ).draggable();
    } );
