function calculateDateDifference(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const timeDifference = endDate - startDate;
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    return Math.abs(dayDifference);
}
const date1 = '2025-02-26';
const date2 = '2025-02-28';
const difference = calculateDateDifference(date1, date2);
console.log(`Độ lệch là ${difference} ngày`);