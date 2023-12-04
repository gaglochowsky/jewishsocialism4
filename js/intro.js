//resource link: https://www.w3schools.com/jquery/default.asp

$("#cat-img").hide();
$("#poem1").hide();
$("#poem2").hide();
$("#free").hide();

$("#happy-img").click(function(){

    $("#happy-img").hide();
    $("#cat-img").show();
});

$("#cat-img").click(function(){

    $("#cat-img").hide();
    $("#happy-img").show();
});

$("#button1").click(function(){

    $("#poem1").toggle();
    
});

$("#b2").click(function(){

    $("#poem2").toggle();
    
});

$("#stop1").click(function(){

    $("#free").fadeIn(450).delay(0).slideup();
    
    
});


// $("#toggle-text").click(function(){

//     $("#secret-text").toggle();

// });

// $("#change-bg-color").click(function(){

//     $("#home-screen").css("background-color","khaki");

// });

// $("#secret-text").click(function(){

//     $(".main-img").addClass("animate-img");
//     setTimeout(
//         function(){

//         $(".main-img").removeClass("animate-img");
//         }, 
//         5000);
// });

