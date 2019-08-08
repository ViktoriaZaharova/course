$(document).ready(function () {

    // panel
    $('.panel_heading .block_title').click(function () {
        $('.panel_heading .block_title').removeClass('in');
        $(this).toggleClass('in').next().slideToggle();
        $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
    });
    // panel end

    // tab
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    // tab end

    // slider
    $('.about-slider').slick({
        slidesToShow: 1
    });

    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('display', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });
//end


});
