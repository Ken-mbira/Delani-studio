$(document).ready(function() {
    $(".design-clickable").click(function() {
        $("#design-showing").toggle();
        $("#design-hidden").toggle();
    })

    $(".development-clickable").click(function() {
        $("#development-showing").toggle();
        $("#development-hidden").toggle();
    });

    $(".program-clickable").click(function() {
        $("#program-showing").toggle();
        $("#program-hidden").toggle();
    });
})