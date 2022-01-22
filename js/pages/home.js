$(document).ready(function() {
    // banner swiper
    var bannerSwiper = new Swiper('.swiper-container.banner-swiper', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        lazy: {
            preloadImages: false,
            loadPrevNext: true,
            loadPrevNextAmount: 2,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            991.98: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });

    // featured products swiper
    var featuredProductsSwiper = new Swiper('.swiper-container.featured-products-swiper', {
        loop: false,
        slidesPerView: 1.4,
        spaceBetween: 15,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
        watchSlidesVisibility: true,
        lazy: {
            preloadImages: false,
            loadPrevNext: true,
            loadPrevNextAmount: 9,
        },
        navigation: {
            nextEl: '.swiper-btn-next-featured-products',
            prevEl: '.swiper-btn-prev-featured-products'
        },
        breakpoints: {
            1920: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerColumnFill: "row",
                watchSlidesVisibility: true,
            },
            991.98: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerColumnFill: "row",
                watchSlidesVisibility: true,
            },
            // 767.98: {
            //     slidesPerView: 4,
            //     spaceBetween: 20,
            //     slidesPerColumn: 2,
            //     slidesPerColumnFill: "row",
            // },
            // 575.98: {
            //     slidesPerView: 2.5,
            //     spaceBetween: 20,
            //     slidesPerColumn: 2,
            //     slidesPerColumnFill: "row",
            // }
        }
    });

    // about section swiper
    var homeAboutSwiper = new Swiper('.swiper-container.home-about-swiper', {
        loop: false,
        slidesPerView: 2.4,
        spaceBetween: 20,
        lazy: {
            preloadImages: false,
            loadPrevNext: true,
            loadPrevNextAmount: 4,
        },
        breakpoints: {
            991.98: {
                slidesPerView: 5,
                spaceBetween: 25,
                allowTouchMove: false,
                watchSlidesVisibility: true,
            },
        }
    });

    // reviews swiper
    var reviewsSwiper = new Swiper('.swiper-container.reviews-swiper', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        lazy: {
            preloadImages: false,
            loadPrevNext: true,
            loadPrevNextAmount: 4,
        },
        navigation: {
            nextEl: '.swiper-btn-next-reviews',
            prevEl: '.swiper-btn-prev-reviews'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            991.98: {
                slidesPerView: 2,
                spaceBetween: 20,
                watchSlidesVisibility: true,
            },
        }
    });

    // $("#user_feedback_form").validate();
});