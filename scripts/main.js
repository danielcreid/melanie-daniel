// jQuery Smooth Scrolling via: http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 25
                }, 400);
                return false;
            }
        }
    });
});

// Trigger Smooth Scrolling for mobile menu
$(function () {
    $('#mobile-select').change(function () {
        var target = $(this).find('option:selected').val();

        $('a[href*=#' + target + ']').trigger('click');

        $(this).val(0);
    });
});