// Link Github  https://github.com/KaziAkibRayhan/assignment-for-javascipt-1


// 1 .Kilometer To Meter...
function kilometerToMeter(numberOfKilometer) {
    result = numberOfKilometer * 1000;
    return result;
}
var meter = kilometerToMeter(8);
console.log(meter);

// 2 .Budget of three products ..
function budgetCalculator(watch,phone,laptop){
    var result = watch*50 + phone*100 + laptop*500;
    return result;
}

var totalCost = budgetCalculator(2,2,2);
console.log(totalCost);


// 3 . A hotel daily cost.. 

function hotelCost(perDay) {
    var dayCost = 0;
    if (perDay <= 10) {
        dayCost = perDay * 100;
    }
    else if (perDay <= 20) {
        var firstpart = 10 * 80;
        var remaining = perDay - 10;
        var secondpart = remaining * 80;
        dayCost = firstpart + secondpart;
    }
    else if (21<=perDay) {
         dayCost = 50 * perDay;
    }
    return dayCost;
}
var totalDayCost = hotelCost(10);
console.log(totalDayCost);


// 4 . Finding the lagest String..

function megaFriend(friendList) {
    var lgth = 0;
    var largest;
    for (var i = 0; i < friendList.length; i++) {
        if (friendList[i].length > lgth) {
            var lgth = friendList[i].length;
            largest = friendList[i];
        }
    }
    return largest;
}

console.log(megaFriend(friendList = ['rohim', 'korim hasan', 'rokibul', 'jobbar']));
