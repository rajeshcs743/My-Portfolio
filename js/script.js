$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-bars fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-bars fa-times');
        $('header').removeClass('toggle');
    });
    
});