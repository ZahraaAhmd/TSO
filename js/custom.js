$(document).ready(function() {
    AOS.init({
        duration: 1000,
        disable: 'mobile' // values from 0 to 3000, with step 50ms

    });
    $(".navbar-light .navbar-toggler").click(function() {
        $("body").toggleClass("fixed-header");
    });
    $(".toggle-menu").click(function() {
        $(".profile-side-menu").toggleClass("hide-slide");
        $(".main-content").toggleClass("full-screen");
    });
});