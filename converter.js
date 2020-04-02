var blaze = document.getElementById("blaze");
var usd = document.getElementById("usd");
var tweet = document.getElementById('twitter-share-button');
var version = "1.7.2";
var versiontext = document.getElementById("versionnumber");
var views = document.getElementById("views");
console.log("BlazeToUSD Version:" + version);
versiontext.innerHTML+= version;

function convertUSD(){
    var divide = 500;
    let finalAmount = blaze.value/divide;
    usd.value = "$" + Math.floor(finalAmount * 100) / 100;
    tweet.href = "https://twitter.com/intent/tweet?text=" + "I made " + usd.value + " on @storyfireapp in Blaze. I found out using blazetousd.tk! Click here if you'd like to donate to help fund this project: paypal.me/tylerruotolo";
}

function convertViews(){
    var divideblaze = 500;
    let final = blaze.value*views.value/divideblaze;
    usd.value = "$" + Math.floor(final * 100) / 100;
    tweet.href = "https://twitter.com/intent/tweet?text=" + "I made " + usd.value + " on @storyfireapp in Blaze from paid views. I found out using blazetousd.tk! Click here if you'd like to donate to help fund this project: paypal.me/tylerruotolo";
}