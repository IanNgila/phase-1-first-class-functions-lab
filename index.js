// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (int) {
    return function (fare) {
        return fare * int
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


selectDifferentDrivers = (array,cb) => {
    return cb(array)
} 