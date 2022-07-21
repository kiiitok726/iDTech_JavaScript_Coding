var fortune = 7;

if (fortune < 0 || fortune > 10){
    console.log("Your fortune cannot be read correctly")
}
else if (fortune <= 3){
    console.log("You've chosen a low fortune")
}
else if(fortune <= 7){
    console.log("You've chosen a average fortune")
}
else {
    console.log("You've chosen a high fortune")
}