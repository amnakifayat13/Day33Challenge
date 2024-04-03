/* Generate a date object representing your next birthday and log it to the console.*/

function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthDay = new Date (year, month-1, day );
        if(birthDay < today) {
            birthDay.setFullYear(year + 1);
        }
        return birthDay;
    }

    const nextBirthday =  getNextBirthday(5, 13);
    console.log("Next birthday on:", nextBirthday.toLocaleDateString());
    
    
