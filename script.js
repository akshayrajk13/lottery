let lottery = [
    123456, 654321, 789012, 345678, 901234, 567890, 234567, 890123, 456789, 123987, 
    654098, 789456, 345901, 901678, 567123, 234890, 890456, 456123, 789789, 345012, 
    901456, 567345, 234678, 890789, 456234, 789123, 345890, 901234, 567890, 234567, 
    890123, 456789, 123456, 654321, 789012, 345678, 901234, 567890, 234567, 890123, 
    456789, 123987, 654098, 789456, 345901, 901678, 567123, 234890, 789123
];
let length = lottery.length;
let print = "";
lottery.forEach(printLottery);
function printLottery (value) {
    print += + value + " ";
}   
document.getElementById("showLottery").innerHTML = print;
function selectRandom() {
    randomIndexSelector = Math.floor(Math.random() * length);
    pickedLottery = lottery[randomIndexSelector];
    console.log("Winner is: " + pickedLottery);
    document.getElementById("winnerLottery").innerHTML = "Winner is: " + pickedLottery;
    document.getElementById("winnerLottery").style.color = "#ff0000";
    document.getElementById("winnerLotteryModal").innerHTML = "Winner is: " + pickedLottery;
    document.getElementById("winnerLotteryModal").style.color = "#ff0000";
    // document.getElementById("picker").setAttribute("disabled", true); 
}