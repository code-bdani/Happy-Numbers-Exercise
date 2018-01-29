console.log("Hello, happy-num.js!");

//var sumNum = 12;

for (var i = 1; i <= 1000; i++) {
    var a = i.toString().charAt(0);
    var b = i.toString().charAt(1);
    var c = i.toString().charAt(2);

    var numSquared = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    var isItHappy = numSquared.toString.charAt(0) + numSquared.toString.charAt(1) + numSquared.toString.charAt(2);

    if (isItHappy === 1 || isItHappy === 10 || isItHappy === 100) {
        console.log("Happy Number! :)", i);
    }   else {
        console.log("Sad Number. :(", i)
    }
}