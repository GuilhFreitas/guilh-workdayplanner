let currentDayEl = $("#currentDay");
let currentDay = moment().format("HH:mm:ss dddd, MMMM Do");
let $window = $(window);

currentDayEl.text(currentDay);

updateDate();

// function updateDate(){
//     let daily = setInterval(function(){
//         currentDay = moment().format("dddd, MMMM Do")
//         currentDayEl.text(currentDay);
//     },1000)
// }

function updateDate() {
    $window.on("focus", function(){
        currentDay = moment().format("HH:mm:ss dddd, MMMM Do")
        currentDayEl.text(currentDay);
    })
}