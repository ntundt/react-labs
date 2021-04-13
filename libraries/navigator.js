/*(function($) {
    $('.site-nav-accordion > li:eq(0) a').addClass('site-nav-accordion-active').next().slideDown();

    $('.site-nav-accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.site-nav-accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('site-nav-accordion-active')) {
            $(this).removeClass('site-nav-accordion-active');
        } else {
            $(this).closest('.site-nav-accordion').find('a.site-nav-accordion-active').removeClass('site-nav-accordion-active');
            $(this).addClass('site-nav-accordion-active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);*/

/*$(function() {
    var height = $('.content').height(); 
    $('.site-nav-scroll').height(height); 
});*/