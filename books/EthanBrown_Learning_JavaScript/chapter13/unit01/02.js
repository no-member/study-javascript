function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0) {
        console.log(`${year} is NOT a leap year`);
        return
    }

    if (year % 100 !== 0) {
        console.log(`${year} IS a leap year.`);
        return
    }

    if (year % 400 !== 0) {
        console.log(`${year} is NOT a leap year`);
        return
    }

    console.log(`${year} IS a leap year.`);
}

printLeapYearStatus();