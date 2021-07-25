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
    $("#black-project").hover(function() {
            $("#black-text").show();
        },
        function() {
            $("#black-text").hide();
        })

    $("#security-project").hover(function() {
            $("#security-text").show();
        },
        function() {
            $("#security-text").hide();
        })
    $("#abstract-project").hover(function() {
            $("#abstract-text").show();
        },
        function() {
            $("#abstract-text").hide();
        })
    $("#status-project").hover(function() {
            $("#status-text").show();
        },
        function() {
            $("#status-text").hide();
        })
    $("#health-project").hover(function() {
            $("#health-text").show();
        },
        function() {
            $("#health-text").hide();
        })
    $("#button-project").hover(function() {
            $("#button-text").show();
        },
        function() {
            $("#button-text").hide();
        })
    $("#logo-project").hover(function() {
            $("#logo-text").show();
        },
        function() {
            $("#logo-text").hide();
        })
    $("#restaurant-project").hover(function() {
            $("#restaurant-text").show();
        },
        function() {
            $("#restaurant-text").hide();
        })


})