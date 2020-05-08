$(document).ready(function () {

    var timeEl = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    var timeWi = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
    

    //Pinning current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    
    ToDo();
    
    function ToDo() {
        for (var i = 0; i < timeEl.length; i++) {
            if (parseInt(timeEl) > currentTime) {
            }

            //Saving input to local storage
            $("button".on("click", function dataKeep() {
                var timeEl = document.getElementById("time-slot").value;
                var myTodo = document.getElementById("userinput").value;

                localStorage.setItem(timeEl, myTodo);
                console.log(timeEl, myTodo);
            });
        


                pastNowfuture();

                function pastNowfuture() {
                    var currentClock = moment().format('H');
                    for (var i = 0; i < timeWi.length; i++) {
                        if (timeEl[i] > currentClock) {
                            $("#" + timeWi[i]).attr("style", "background-color: blue");
                        } else if (timeEl[i] < currentClock) {
                            $("#" + timeWi[i]).attr("style", "background-color: green");
                        } else if (timeEl[i] == currentClock) {
                            $("#" + timeWi[i]).attr("style", "background-color: grey");
                        }
                    }
                };



  
            });