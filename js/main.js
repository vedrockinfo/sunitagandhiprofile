(function ($) {
    $(function () {

        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });

        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });

        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });

        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// Header JS Ends

$('.hero-fading-slide').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    animateOut: 'fadeOut',
    navText: ['<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.country-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$(function () {
    $("#tabs").tabs();
});

$('.inspiration-quotes').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


$('.awards-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.affiliation-slider').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

$('.media-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})


jQuery(document).ready(function () {
    jQuery('.contact-form .form-control').on('focus', function () {
        jQuery(this).parent().addClass('focused');
    }).on('blur', function () {
        jQuery(this).parent().removeClass('focused');
    }).on('input', function () {
        jQuery(this).parent().addClass('inputted');
    });

});

// jQuery(document).ready(function () {
//     jQuery(".load-more").click(function () {
//         jQuery(this).parent().addClass("loaded");
//     });
// });
$(function () {
    $(".load-more").on("click", function () {
        $(".tab-pane").toggleClass("loaded");
    });
});