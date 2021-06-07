(function(){
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';
    function addClickEvents(elementsToBind, color1, color2){
        let handlerBlueBckGnd = function(){
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }
    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");


    //Focus on this
    // make sure the DOM is loaded first
    document.addEventListener("DOMContentLoaded", function() {
        addListeners();
    });
    // $('document').ready(function (){
    //
    // });
    //parent method for adding all listeners
    function addListeners(){
        //get the elements to add listener and change image
        let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
        addEvents(cardContainers, './html/jazz-music-rubber-duck.jpg', 'mouseover');
        addEvents(cardContainers, './html/question.png', 'mouseout');
    }
    //add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType){
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }
    //actual function to swap images
    function changeImage(card, imgPath){
        card.setAttribute('src', imgPath);
    }

    $(document).ready(function(){
        $('#submitBtn').click(function(){
            $('#override-bootstrap').css('background', 'red');
        })
    });

    $(document).ready(function (){
        $('p').click(function (){
            $(this).css('background', 'red');
        })
    });

    $(document).ready(function (){
        $('#resetBtn').click(function(){
            location.reload();
        })
    });

    $(document).ready(function (){
        $('#main-title').click(function(){
            $(this).css('font-size', '400%');
        })
    });


    // let hoverIn = function () {
    //     let attributeValue = $(this).attr("data-attribute");
    //     $(".card-title").text(attributeValue);
    // }
    // let hoverOut = function () {
    //     $(this).find(".card-title").text("Card")
    // }
    // $(".col-md-3").hover(hoverIn, hoverOut)


    $('.list-group-item').click(function(){
        $(this).css({'background-color': 'purple', 'text-transform': 'uppercase',});
        // $(this).toggleClass()
    });



})();