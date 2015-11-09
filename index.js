/**
 * Created by lancy on 11/9/15.
 */

$(function() {
    var bindRequest = function (postMsg) {
        return function (e) {
            e.preventDefault();
            $.ajax({
                url: "/answer",
                method: "POST",
                data: { answer: postMsg }
            }).done(
                function (res) {
                    alert(res);
                    window.location = window.location;
                }
            );
        }
    };

    $("#A").click("click", bindRequest("A"));
    $("#B").click("click", bindRequest("B"));
    $("#C").click(bindRequest("C"));
    $("#D").click(bindRequest("D"));
});