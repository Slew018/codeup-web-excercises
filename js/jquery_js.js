$('#all-caps').hide();

$('span').hide();

$('.show-me').show();

$(document).ready(function(){
 $('.orange').css('background-color', 'orange').fadeToggle(1000).fadeToggle(1000).fadeToggle(1000).fadeToggle(1000).fadeToggle(1000).show();
});

window.onload = function(){
 $('.pink').css('background-color', 'pink').fadeToggle(1000).fadeToggle(1000).fadeToggle(1000).fadeToggle(1000).fadeToggle(1000).show();
};


// $('img').each(function(i, item) {
//     let imgHeight = $(item).height();
//     let divHeight = $(item).parent().height();
//     if(imgHeight<divHeight){
//         $(item).css({'width': 'auto', 'height': '100%'});
//
//     }
// });

 $('img').css({'width': 'auto', 'height': '100%'});




