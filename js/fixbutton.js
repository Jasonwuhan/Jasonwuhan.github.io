$(function() {
    //绑定滚动条事件 
    //绑定滚动条事件 
    $(window).bind("scroll", function() {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        var trigger = $("#header").height();
        var trigger = parseInt(trigger);

        if (sTop >= trigger) {
            if (!$("#fixbutton").is(":visible")) {
                try {
                    $("#fixbutton").slideDown();
                } catch (e) {
                    $("#fixbutton").show();
                }
            }
        } else {
            if ($("#fixbutton").is(":visible")) {
                try {
                    $("#fixbutton").slideUp();
                } catch (e) {
                    $("#fixbutton").hide();
                }
            }
        }
    });
})