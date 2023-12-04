//resource link: https://www.w3schools.com/jquery/default.asp
$(document).ready(function(){
    $("g3").click(function(){
      $("#poem1").hide();
    });
  });



// $("#happy-img").hide();
// $("#secret-text").hide();
// $("#super-secret").hide();
// $("#popup").hide();






$("#happy-img").click(function(){

    $("#happy-img").hide();
    $("#cat-img").show();
});

$("#cat-img").click(function(){

    $("#happy-img").show();
    $("#cat-img").hide();
});




// $("#poem1").click(function(){

//     $()

// });


// $("#change-bg-color").click(function(){
//     $("#home-screen").css("background-color","khaki");

// });

// $("#secret-text").click(function(){
    
//     $(".main-img").addClass("animate-img"); setTimeout(function(){

//         $(".main-img").removeClass("animate-img");
//         }, 5000); 

//     $("#super-secret").slideToggle(5000);

// });

// $("#super-secret").click(function(){

//     $("#shiba").fadeIn(1000).delay(500).slideUp();
//     $("#shiba").css("width","500px");
// });

// $(".main-img").mouseenter(function(){

//     $(".main-img").css("filter","invert(100%)");
// });

// $(".main-img").mouseleave(function(){

//     $(".main-img").css("filter","invert(0%)");
// });

// $(document).keydown(function(event){

//   if(event.which == 65){
//     console.log("Key code: " + event.which );
//     $("#popup").toggle();
//   }
  

// });
