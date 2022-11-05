$(document).ready(function () {

    var timer;
    var h, m, s, c = 99;

    // Start Event
    $(".start").click(function () {
        $(".stop,.reset").attr('disabled', false);
        startRestartInterval();
        $(".start").attr('disabled', true);

    });

    // Stop Event
    $(".stop").click(function () {
        $(".stop").attr('disabled', true);
        $(".reset").attr('disabled', false);
        getValues();
        clearInterval(timer);
    });

    
    // Reset Event
    $(".reset").click(function () {
        clearInterval(timer);
        $(".time_slot").text("00")
        // $("th").text("00");
        $(".start").show();
        $(".stop,.reset").attr('disabled', true);
        $(".start").attr('disabled', false);
        $('#timer').click(function() {
            location.reload();
        });
    });

    // $(".reset").click(function () {
    //     $("#hr").text("00");
    //     $("#min").text("00");
    //     $("#sec").text("00");
    //     });

    // Functions
    function startRestartInterval() {
        timer = setInterval(function () {
            if (c < 99) {
                c++;
            }
            else {
                c = 0;
                if (s < 59) {
                    s++;
                } else {
                    s = 0;
                    if (m < 59) {
                        m++;
                    } else {
                        m = 0;
                        if (h < 59) {
                            h++;
                        }
                    }
                }
            }
            $("th").eq(0).text((h < 10) ? ("0" + h) : h);
            $("th").eq(1).text((m < 10) ? ("0" + m) : m);
            $("th").eq(2).text((s < 10) ? ("0" + s) : s);
        }, 10);
    }
    function getValues() {
        h = parseInt($("#hr").text());
        m = parseInt($("#min").text());
        s = parseInt($("#sec").text());
    }
});


    // function resettimer() {
    //     document.getElementById("hr").reset();
    //     document.getElementById("min").reset();
    //     document.getElementById("sec").reset();
    // }