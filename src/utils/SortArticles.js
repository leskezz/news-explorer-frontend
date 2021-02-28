
export function sortByKeyword (array) {
    const countOfKeywords = array.reduce(function (acc, current) {
        acc[current.keyword] = (acc[current.keyword] || 0) + 1;
        return acc;
    }, {});
    
    return Object.entries(countOfKeywords).sort((a, b) => b[1] - a[1])
}