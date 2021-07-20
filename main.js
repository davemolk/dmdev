$(document).ready(function() {
    $("#up").on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 70);
    })
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true,
    })
})

