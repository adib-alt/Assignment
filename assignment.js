//https://github.com/adib-alt/Assignment

//kilometerToMeter

function kilometerToMeter(x){

var result = x*1000;
return result;

}

//budgetCalculator

function budgetCalculator(watch, phone, laptop){

var budget = watch*50 + phone*100 + laptop*500;

return budget;

}

//hotelCost

function hotelCost(days){
if(days <= 10){
    var result = days*100;
    return result; 
}

else if(days > 10){
    var minus = days-10;
    var result = 10*100 + minus*80;
    return result;
}
}

//megaFriend




