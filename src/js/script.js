$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('hamburger_active');
        $('.header__menu').toggleClass('header__menu_active');
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 620){
            $(".hamburger span").css("background-color","#a38c60");
        } else if ($(window).scrollTop() < 620) {
            $(".hamburger span").css("background-color","white");
        }
    });
})