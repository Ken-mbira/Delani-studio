//Front-end logic
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


});

var submission = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("message").value;
    if (name.length < 1) {
        alert("Please fill out the name field!")
    } else if (email.length < 1) {
        alert("Please fill out the email field")
    } else if (feedback.length < 1) {
        alert("Please fill out the feedback field!")
    } else {
        alert("Thankyou " + name + " ! We have received your feedback");
        open("https://github.us6.list-manage.com/subscribe/post?u=75ccd96aa0d3d31a8df2cb752&amp;id=5eb611c38e");
    }


}