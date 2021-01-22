





// 1 .Express kilometers in meter.

function KilometerToMeter(numberOfKilometer) // Set parameter
{
    result = numberOfKilometer * 1000;
    return result;
}
var meter = kilometerToMeter(8);
console.log(meter);

// 2 .The sum of the three products is watch, mobile, laptop..

function budgetCalculator(watch, phone, laptop) // Set parameter
{
    var result = watch * 50 + phone * 100 + laptop * 500;
    return result;
}

var totalCost = budgetCalculator(5, 4, 2);
console.log(totalCost);


// 3 .Account of a hotel..

function hotelCost(perDay)  // Set parameter
{
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
    else if (21 <= perDay) {
        dayCost = 50 * perDay;
    }
    return dayCost;
}
var totalDayCost = hotelCost(30);
console.log(totalDayCost);

// 4 .Finding longest string in array

function megaFriend(friendList) // Set parameter 
{
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
