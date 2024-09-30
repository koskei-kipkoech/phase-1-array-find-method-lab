// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]
function superbowlWin(record){
    const winYear = record.find(item => item.result === 'W')
    return winYear ? winYear.year : undefined
}
console.log(superbowlWin(record))

