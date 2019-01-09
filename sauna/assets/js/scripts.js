$(document).ready(function () {

    // company page - delete photo
    $('.info__photo_del').click(function (e) {
        e.preventDefault();
        $(this).parent('.info__photo,.info__license').remove();
        $(this).closest('.item').remove();
    });

    // banner
    $('.banner').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    // show number
    $('.results .item-location p .toggle, .information .toggle, .header-company .toggle, .company .item-location p .toggle, .comp-loc__info p .toggle').click(function () {
        $(this).prev().addClass('txt-visible');
        $(this).addClass('hidden');
        $('.information .hide').removeClass('hidden');
    });
    $('.information .hide').click(function () {
        $('.information p').removeClass('txt-visible');
        $('.information .toggle').removeClass('hidden');
        $(this).addClass('hidden');
    });

    // checkbox, radio
    $('.filter-label input').click(function () {
        $(this).parent().toggleClass('active');
    });

    //wishlist
    $('.wishlist i').click(function (e) {
        e.preventDefault();
        $(this).addClass('fas');
        setInterval(function () {
            // Если окно не открыто (т.е. не имеет класс in)
            if (!$("#wishlist").hasClass("in")) {
                // то открыть модальное окно
                $("#wishlist").modal('hide');
            }
        }, 3000);
    });

    $(function () {
        var marquee = $("#marquee");
        marquee.css({"overflow": "hidden", "width": "100%"});
        // оболочка для текста ввиде span (IE не любит дивы с inline-block)
        marquee.wrapInner("<span>");
        marquee.find("span").css({"width": "50%", "display": "inline-block", "text-align": "center"});
        marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
        marquee.wrapInner("<div>");
        marquee.find("div").css("width", "200%");
        var reset = function () {
            $(this).css("margin-left", "0%");
            $(this).animate({"margin-left": "-100%"}, 12000, 'linear', reset);
        };
        reset.call(marquee.find("div"));
    });
    $(function () {
        var marquee = $("#marquee2");
        marquee.css({"overflow": "hidden", "width": "100%"});
        // оболочка для текста ввиде span (IE не любит дивы с inline-block)
        marquee.wrapInner("<span>");
        marquee.find("span").css({"width": "50%", "display": "inline-block", "text-align": "center"});
        marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
        marquee.wrapInner("<div>");
        marquee.find("div").css("width", "200%");
        var reset = function () {
            $(this).css("margin-left", "0%");
            $(this).animate({"margin-left": "-100%"}, 12000, 'linear', reset);
        };
        reset.call(marquee.find("div"));
    });

    $('.stock-item').click(function () {
        $(this).toggleClass('active');
    });

    $('#stock-slider').carousel({
        interval: false
    });

    // $('.row.mobile').nextAll().wrapAll('<div class="wrapper"></div>');
    $('.row .more-items').click(function () {
        $(this).hide();
        $(this).parent().next('.wrapper').show();
    });
    $('.testimonials .more-items').click(function () {
        $(this).hide();
        $(this).parent().next().show();
    });

    //search
    $('.dropdown-menu[aria-labelledby="search-cat"] .dropdown-item').click(function () {
        let src = $(this).attr('data-name'),
            txt = $(this).find('.search-label').text();
        $('#search-cat').html('<img class="svg" src="assets/img/svg/' + src + '.svg"><span>' + txt + '</span>');
        $('.dropdown-menu[aria-labelledby="search-cat"] .dropdown-item').removeClass('active');
        $(this).addClass('active');
    });
    $('.dropdown-menu[aria-labelledby="search-location"] .dropdown-item').click(function () {
        let txt = $(this).text();
        $('#search-location span').html(txt);
        $('.dropdown-menu[aria-labelledby="search-location"] .dropdown-item').removeClass('active');
        $(this).addClass('active');
    });
    $('.search-toggle').click(function () {
        $('.search-bar').slideDown();
    });
    $('.search-close').click(function () {
        $('.search-bar').slideUp();
    });

    // fixed menu
    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 50) {
            $('.main-header').addClass('fixed');
        } else {
            $('.main-header').removeClass('fixed');
        }
    });
    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 650) {
            $('.header__filter-items').addClass('fixed');
        } else {
            $('.header__filter-items').removeClass('fixed');
        }
    });

    //mobile menu
    $('.menu-toggle').click(function () {
        $('.navigation__menu-wrapper.mobile').slideToggle();
    });

    // item like
    $('.header-company__like .toggle').click(function () {
        $(this).toggleClass('fas');
    });

    $('.more-photo').click(function () {
        $(this).hide();
        $('.gallery .row').removeClass('hidden');
    });

    // scroll
    $(".header-company__menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // category slider
    $('.cat-slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                    // infinite: false,
                    arrows: true,
                    centerMode: true,
                    centerPadding: '35px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // more graph
    $('.graph-more').click(function () {
        $(this).hide();
        $('.graph-wrap').slideDown();
        $('.graph-less').show();
    });
    $('.graph-less').click(function () {
        $(this).hide();
        $('.graph-wrap').slideUp();
        $('.graph-more').show();
    });

    // slider description
    $('.slide-desc.more').click(function () {
        $(this).hide();
        $(this).next().slideDown();
    });

    // seo text
    $('.seo-txt .toggle.less, .rate-mod .toggle.less').click(
        function () {
            $('.seo-txt .wrap, .rate-mod .wrap').slideUp();
            $(this).hide();
            $('.seo-txt .toggle.more, .rate-mod .toggle.more').show();
        }
    );

    $('.seo-txt .toggle.more, .rate-mod .toggle.more').click(function () {
            $('.seo-txt .wrap, .rate-mod .wrap').slideDown();
            $(this).hide();
            $('.seo-txt .toggle.less, .rate-mod .toggle.less').show();
        }
    );

    //datepicker
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        zIndex: 99999,
        format: 'dd.mm.YYYY',
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        weekStart: 1,
        startView: 0,
        yearFirst: false,
        yearSuffix: ''
    });

    // mask
    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    // map sidebar
    $(".map__filter-checkbox-close").click(function () {
        $(".map__hover-item-wrapper").hide(500)
    }), $(function () {
        $(".map__filter-item").mouseenter(function () {
            var o = $(".map__filter-item").index(this);
            $(".map__hover-item-wrapper").stop().not($(".map__hover-item-wrapper").eq(o).show()).hide();
        })
    })

    $(document).mouseup(function (e) {
        var container = $(".map__hover-item-wrapper");
        if (container.has(e.target).length === 0) {
            container.hide();
        }

        var container2 = $(".search-bar");
        if (container2.has(e.target).length === 0) {
            container2.hide();
        }
    });

    $(document).on('click', '.map-delete', function () {
        let label = $(this).parent().text();
        $(this).parent().remove();
        $('.map__filter-checkbox:contains(' + label + ') input').prop('checked', false);
    });

    $('.map__filter-checkbox input').click(function () {
            let label = $(this).parent().text();
            if ($(this).is(":checked")) {
                $(this).closest('.map__filter-item').append('<span class="map__filter-chosen">' + label + '<a href="#!" class="map-delete"></a></span>');
            } else {
                $('.map__filter-chosen:contains(' + label + ')').remove();
            }
        }
    );

    $('.side-toggle').click(function () {
        $('.map__filter-wrapper').slideToggle();
        $(this).toggleClass('show');
    });

    // voting
    $('.js-rating').thumbs();
    var options = {
        max_value: 5,
        step_size: 0.5
    };

    $(".modal .rating").rate(options);


    // responsive tabs
    if ($(window).width() < 768) {
        $('.header__filter-items').prepend('<button type="button" class="close"><span aria-hidden="true">&times;</span></button>');
    }
    $('.header__filter-items .close').click(function () {
        $('.header__filter-items').addClass('static');
        $(this).hide();
    });

    $('#maps-tab').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".tab-content").offset().top
        }, 1000);
    });
    $('#by-categories-tab').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".tab-content").offset().top
        }, 1000);
    });
    $('#by-rate-tab').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".tab-content").offset().top
        }, 1000);
    });

    $('#advantages .map__filter-checkbox').click(function () {
        if($(this).find('.checkbox').is(':checked')== true){
            $(this).addClass('checked');
        } else{
            $(this).removeClass('checked');
        }
    });


    // our holls slider
    $('.holls-slider .slider-main').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.holls-slider .slider-nav',
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        centerMode: true
    });

    $('.holls-slider .slider-nav').slick({
        slidesToShow: 3,
        asNavFor: '.holls-slider .slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true
    });

    $(window).on('resize orientationchange', function() {
        if ($(window).width() > 1200) {
            $('.holls-slider .slider-nav').slick('unslick');
            $('.holls-slider .slider-nav').slick({
                slidesToShow: 3,
                asNavFor: '.holls-slider .slider-main',
                vertical: true,
                focusOnSelect: true,
                autoplay: false,
                centerMode: true
            });
        }
    });

    // compare table
    $('.price-list .toggle').click(function (e) {
        e.preventDefault();
        $('.price-list .compare').fadeToggle();
    });

    // how we works
    $('.work .slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.work .slider-nav',
        autoplay: true,
        autoplaySpeed: 7000,
    });

    $('.work .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        asNavFor: '.work .slider-main',
        focusOnSelect: false,
        infinite: false,
        autoplay: false
    });

});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// svg filling
$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

