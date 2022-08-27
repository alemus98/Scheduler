var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});