const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    let driversFirst= drivers.slice(0,2);
        return driversFirst;
}

const returnLastTwoDrivers =function(){
    let driversLast = drivers.slice(2,4);
    return driversLast;
}
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]
function createFareMultiplier(y){
    return function fareMultiplier(){
        return y* y;

   }
}
const fareDoubler = function(y){
    return y * 2;
}
const fareTripler = function(y){
    return y* 3;
}

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}