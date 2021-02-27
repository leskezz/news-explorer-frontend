function getTodayDate() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() < 9 && '0'}${d.getMonth() + 1}-${d.getDate()}`;
}

function getSevenEarlierDays() {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    return `${d.getFullYear()}-${d.getMonth() < 9 && '0'}${d.getMonth() + 1}-${d.getDate()}`;
}

export {getTodayDate, getSevenEarlierDays};
