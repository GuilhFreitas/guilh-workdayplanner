let $window = $(window);
let currentDayEl = $("#currentDay");
let timeBlockEls = $("textarea");
let buttonEls = $("button");

let startHour = Number(moment().format("H"));
let currentDay = moment().format("dddd, MMMM Do");
currentDayEl.text(currentDay);

colorBlocks();
updateDate();
updateHour();

// saves events to local storage
buttonEls.on('click', function(event){
    let textareaEl = $(event.target).siblings('textarea');
    let eventText = textareaEl.val();
    let eventHour = textareaEl.attr('data-hour');
    localStorage.setItem(eventHour, eventText);
})

// updates date when window is focused on!
function updateDate() {
    $window.on("focus", function(){
        currentDay = moment().format("dddd, MMMM Do")
        currentDayEl.text(currentDay);
    })
}

// runs colorBlocks if the hour changes
function updateHour() {
    let timeInterval = setInterval(function() {
        let newHour = Number(moment().format("H"));
        if(newHour > startHour){
            startHour = newHour;
            colorBlocks();
        }
        
    }, 1000)
}

// colors the time blocks depending on current time
function colorBlocks() {
    $.each(timeBlockEls, function(){
        console.log('each running')
        if ($(this).attr('data-hour') < startHour){
            console.log('if running')
            $(this).addClass('past');
        }else if ($(this).attr('data-hour') == startHour){
            console.log('elif running')
            $(this).addClass('present');
        }else{
            console.log('else running')
            $(this).addClass('future');
        }})
}

