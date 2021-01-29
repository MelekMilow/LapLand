function provera(){
var ime = document.forms["form2"]["unosImePrezime"].value;
var email = document.forms["form2"]["unosEmail"].value;
var komentar = document.forms["form2"]["comments"].value;
if ((ime == "") || (email == "") || (komentar == "") ) {
    alert('Niste popunili sva polja');
} else {
    alert('Poslali ste zahtev');
}

}

$(function(){
    $(".draggable").draggable( );
});

$(function(){
  $(".draggableFU").draggable( {helper : "clone"});
});


$( function() {
    $( "#selektuj" ).selectable();
  } );
  
  $( function() {
    $( "#selectable" ).selectable();
  } );
$( function() {
    $( "#resizable" ).resizable();
  } );

  $(function() {
    $( "#dugme" ).button();
  })

 $( function() {
    $( "#novodugme" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );


$( function() {
    function runEffect() {
      
      $( "#effect" ).toggle( "scale", { percent: 50 }, 500 );
    };
    $( "#novodugme1" ).on( "click", function() {
      runEffect();
    });
  } );
 
$( function() {
    function runEffect() {
      
      $( "#effect" ).toggle( "shake", { percent: 50 }, 500 );
    };
    $( "#novodugme2" ).on( "click", function() {
      runEffect();
    });
  } );
 


 


$( function() {
    $( "input" ).tooltip();
    $( "textarea" ).tooltip();
   
    
    } );

    $( function() {
      $( "#novodugme" ).tooltip();
      $( "#novodugme1" ).tooltip({show: "fold", });
      $( "#novodugme2" ).tooltip({
        disabled: true
     });
     
      
      } );
  

    /*
$( function() {
    $( "input" ).checkboxradio();
  } );

 */
