/* Generate a date object representing your next birthday and log it to the console.*/
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthDay = new Date(year, month - 1, day);
    if (birthDay < today) {
        birthDay.setFullYear(year + 1);
    }
    return birthDay;
}
var nextBirthday = getNextBirthday(5, 13);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
