//fizzbuzz JavaScript file


$(document).ready(function() {

    var userData = 1;
    var elementOne = ["Fizz", "Buzz", "FizzBuzz"];
    var fThree = 0;
    var bFive = 0;
    var fbAll = 0;


    while (userData < 101) {
        fThree = userData / 3;
        bFive = userData / 5;
        fbAll = userData / 15;

        if (typeof fbAll === 'number' && (fbAll % 1) === 0)
        {
            // data is an integer divisible by both 3 and 5
            $("ul").append("<li>" + elementOne[2] + "</li>");
        }
        else if (typeof fThree === 'number' && (fThree % 1) === 0) {
                // data is an integer divisible by 3
                $("ul").append("<li>" + elementOne[0] + "</li>");
            }
        else if (typeof bFive === 'number' && (bFive % 1) === 0) {
                // data is an integer divisible by 5
                $("ul").append("<li>" + elementOne[1] + "</li>");
            }
        else {
            // data is not Fizz or Buss
            $("ul").append("<li>" + userData + "</li>");
        }

        userData++;
    }
});


