const calcTax = (income) => {
    if (!income) {
        return "please enter valid income";
    }
    income = Number(income);
    if (income <= 250000) {
        return 0;
    }
    if (income > 250000 && income <= 500000) {
        return income / 10;
    }
    if (income > 500000 && income <= 1000000) {
        return income / 5;
    }
    if (income > 1000000) {
        return (income * 3) / 10;
    }
}

module.exports = calcTax;