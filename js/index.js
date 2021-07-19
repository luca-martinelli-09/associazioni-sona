$(".menu-toggle").click(function(e) {
    e.preventDefault();

    $($(this).data("ref")).toggleClass("menu-opened");
    $(this).toggleClass("menu-opened");
    $("body").toggleClass("overflow-hidden");
});