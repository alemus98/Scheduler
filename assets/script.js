var save = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

save.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

function savePlanner() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

function timeColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

timeColor();
savePlanner();