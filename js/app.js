var desktopHeader = $("#desktop_header");
var mobileHeader = $("#mobile_header");
var searchPopup = $("#search_popup");
var mobileMenuWrapper = $("#mobile_menu_wrapper");
var mobileMenu = $("#mobile_menu");
$(document).ready(function() {
    $("#desktop_subscription_form, #mobile_subscription_form").validate();

    //lazy loading
    if ($("img.lazy").length > 0) {
        $("img.lazy").lazy({
            effect: "fadeIn",
        });
    }

    $("i.convert-svg").each(function() {
        var $img = $(this);
        convertSvgToIcon($img);
    });

    // desktop header
    desktopHeader.find(".header-item.dropdown .link").on("click", function(e) {
        $this = $(this);
        $this.closest(".header-item").toggleClass("active");
        $this.closest(".header-item").find(".dropdown-menu-container").toggleClass("show");
        desktopHeader.find(".dropdown-menu-container").not($this.closest(".header-item").find(".dropdown-menu-container")).removeClass("show");
        desktopHeader.find(".header-item.dropdown").not($this.closest(".header-item")).removeClass("active");
        $("#desktop_profile_dropdown").addClass("d-none");
        desktopHeader.find("#desktop_cart").addClass("d-none");
        desktopHeader.find("#desktop_cart_btn").removeClass("active");
    });

    $("#desktop_profile_btn").on("click", function() {
        $(this).closest(".profile-section").find("#desktop_profile_dropdown").toggleClass("d-none");
        desktopHeader.find(".dropdown-menu-container").removeClass("show");
        desktopHeader.find(".header-item.dropdown").removeClass("active");
        desktopHeader.find("#desktop_cart").addClass("d-none");
        desktopHeader.find("#desktop_cart_btn").removeClass("active");
    });

    $("#desktop_cart_btn").on("click", function() {
        desktopHeader.find("#desktop_cart").toggleClass("d-none");
        $(this).toggleClass("active");
        desktopHeader.find(".dropdown-menu-container").removeClass("show");
        desktopHeader.find(".header-item.dropdown").removeClass("active");
        desktopHeader.find("#desktop_profile_dropdown").addClass("d-none");
    });

    desktopHeader.find("#close_cart_btn").on("click", function() {
        desktopHeader.find("#desktop_cart").addClass("d-none");
        desktopHeader.find("#desktop_cart_btn").removeClass("active");
    });

    //search popup
    desktopHeader.find("#desktop_search_btn").on("click", function() {
        searchPopup.addClass("show");
        $("body").addClass("modal-open");
    });
    searchPopup.find(".close-search-btn").on("click", function() {
        searchPopup.removeClass("show");
        $("body").removeClass("modal-open");
    });

    mobileHeader.find("#mobile_search_btn").on("click", function() {
        searchPopup.addClass("show");
        $("body").addClass("modal-open");
    });

    mobileHeader.find("#mobile_cart_btn").on("click", function() {
        mobileHeader.find("#mobile_cart").addClass("show");
        $("body").addClass("modal-open");
    });
    mobileHeader.find("#close_cart_btn").on("click", function() {
        mobileHeader.find("#mobile_cart").removeClass("show");
        $("body").removeClass("modal-open");
    });


    // mobile menu
    mobileHeader.find("#mobile_menu_btn").on("click", function() {
        mobileMenuWrapper.addClass("show");
        mobileMenu.addClass("show");
        $("body").addClass("modal-open");
    });
    mobileMenu.find("#close_mobile_menu_btn").on("click", function() {
        mobileMenuWrapper.removeClass("show");
        mobileMenu.removeClass("show");
        $("body").removeClass("modal-open");
    });

    $(document).on("click", function(e) {
        if (
            $(e.target).is("header .dropdown-menu-container, header .dropdown-menu-container *") ||
            $(e.target).is("header .header-item.dropdown, header .header-item.dropdown *") ||
            $(e.target).is("#desktop_profile_dropdown, #desktop_profile_dropdown *") ||
            $(e.target).is("#desktop_profile_btn, #desktop_profile_btn *") ||
            $(e.target).is("#desktop_cart_btn, #desktop_cart_btn *") ||
            $(e.target).is("#desktop_cart, #desktop_cart *")
        ) {
            return;
        }
        desktopHeader.find(".dropdown-menu-container").removeClass("show");
        desktopHeader.find(".header-item.dropdown").removeClass("active");
        desktopHeader.find("#desktop_profile_dropdown").addClass("d-none");
        desktopHeader.find("#desktop_cart").addClass("d-none");
    });

    // Cart incrementor
    const qtyInput = $("input[name=qty]");
    $(".incrementor-style-1 button.plus").on("click", function() {
        let newVal = increment($(this).closest(".incrementor-style-1").find(qtyInput));
        $(this).closest(".incrementor-style-1").find(qtyInput).val(newVal);
        $(this).closest(".incrementor-style-1").find("button.minus").prop("disabled", false);
    });

    $(".incrementor-style-1 button.minus").on("click", function() {
        let newVal = decrement($(this).closest(".incrementor-style-1").find(qtyInput));
        if (newVal) {
            $(this).closest(".incrementor-style-1").find(qtyInput).val(newVal);
        }
        if (newVal == 1) {
            $(this).prop("disabled", true);
        }
    });
});


function convertSvgToIcon($img) {
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("data-src");
    if (typeof imgURL === "undefined") {
        return false;
    }

    $svg = getSvgIconByUrl(imgURL);
    if ($svg == null) {
        return false;
    }

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
    }
    $img.replaceWith($svg);
}

function getSvgIconByUrl(imgURL) {
    var $svg = null;

    $.ajax({
        url: imgURL,
        type: "get",
        dataType: "xml",
        async: false,
        success: function(data) {
            $svg = $(data).find("svg");

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a");

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
                $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
            }
        },
    });

    return $svg;
}

function increment(element) {
    return parseInt(element.val()) + 1;
}

function decrement(element) {
    let number = parseInt(element.val());
    if (number > 0) {
        return number - 1;
    }

    return false;
}