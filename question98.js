/* Create a JavaScript snippet that calculates and logs how many days are left until New Year.*/
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
//another method:
function timeDifference() {
    var d1 = new Date("April 03 2024 09:30:30");
    var d2 = new Date("January 01 2025, 09:30:30");
    var timeDifference1 = d2.getTime() - d1.getTime();
    var days = timeDifference1 / (1000 * 60 * 60 * 24);
    return days;
}
console.log(timeDifference() + "days until new Year.");
