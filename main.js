$(document).ready(function(){
    $('.nav-link').hover(function(){
        $(this).animate({opacity: 0.75, top: "-=5px"}, 200);
    },function(){
        $(this).animate({opacity: 1.0, top: "+=5px"}, 200);
    });

    $('.logo').hover(function(){
        $(this).animate({opacity: 0.6}, 200);
    },function(){
        $(this).animate({opacity: 1.0}, 200);
    });

});

function showContent(id) {
    $('.sub-content').fadeOut('slow');

    setTimeout(function(){
        $(id).fadeIn('slow');
        focusBlock(id);
    }, 500);

    $('#byline').animate({
        'margin-top': 50,
    }, 'slow');

}

function hideContent() {
    $('.sub-content').fadeOut('slow');

    setTimeout(function() {
        $('#byline').animate({
            'margin-top': 200,
        }, 'slow');
    }, 500);

}