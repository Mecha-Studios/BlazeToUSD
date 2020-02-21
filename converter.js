var blaze = document.getElementById("blaze");
var usd = document.getElementById("usd");
var tweet = document.getElementById('twitter-share-button');
var version = 1.3;

console.log("BlazeToUSD V" + version);


function convert(){
    var divide = 500;
    usd.value = "$" + blaze.value/divide; 
    tweet.href = "https://twitter.com/intent/tweet?text=" + "I made " + usd.value + " on @storyfireapp in Blaze. I found out using blazetousd.tk!";
}