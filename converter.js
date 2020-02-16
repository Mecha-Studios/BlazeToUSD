function convert(){
    var blaze = document.getElementById("blaze");
    var usd = document.getElementById("usd");
    var divide = 500;
    usd.value = "$" + blaze.value/divide; 
}