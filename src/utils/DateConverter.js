const getTodayDate = () => {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() < 10 && '0'}${d.getMonth()}-${d.getDate()}`;
}

const getSevenEarlierDays = () => {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    return `${d.getFullYear()}-${d.getMonth() < 10 && '0'}${d.getMonth()}-${d.getDate()}`;
}

export {getTodayDate, getSevenEarlierDays};
