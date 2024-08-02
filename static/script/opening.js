const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

main();
updateTime();

setInterval(function() {
    main();
    updateTime();
}, 60000);

function main() {
    var dateNow = new Date();
    var dayNow = 6 //dateNow.getDay();

    if (dayNow === 0) {
        sundayTimes();
    } else {
        weekdayTime();
    }

    function weekdayTime () {
        var time = 14 //dateNow.getHours();
        if (time < 12) {
            $("#open").text("We are closed right now and open at midday today.")
        } else if (time > 21) {
            if (dayNow === 6) {
                $("#open").text("We are closed right now and open tomorrow at 10am.")
            } else {
                $("#open").text("We are closed right now and open tomorrow at midday.")
            }
        } else {
            $("#open").text("We are open, why not give us a call to book your next visit.")
        }
    }

    function sundayTimes () {
        var time = 22 //dateNow.getHours();
        if (time < 10) {
            $("#open").text("We are closed right now and open at 10am today.")
        } else if (time > 3) {
            $("#open").text("We are closed right now and open tomorrow at midday.")
        } else {
            $("#open").text("We are open, why not give us a call to book your next visit.")
        }
    }
}

function updateTime() {
    const today = new Date();
    var mth = today.getMonth();
    var monthWord = MONTHS[mth]
    var day = today.getDay();
    var dayWord = DAYS[day];
    var hrs = today.getHours();
    var min = today.getMinutes();
    min = checkTime(min);
    console.log(dayWord)
    $("#clock").text(hrs + ":" + min );
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

