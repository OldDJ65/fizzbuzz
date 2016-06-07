ds//fizzbuzz JavaScript file


$(document).ready(function() {

    var userData = 1;
    var elementOne = ["Fizz", "Buzz", "FizzBuzz"];


    while (userData < 101) {
        var fThree = userData / 3;
        var bFive = userData / 5;
        var fbAll = userData / 15;

        if (typeof fbAll === 'number' && (fbAll % 1) === 0)
        {
            // data is an integer divisible by both 3 and 5
            $("ul").append("<li>" + elementOne[2] + "</li>");
        }
        elseif
            if (typeof fThree === 'number' && (fThree % 1) === 0) {
                // data is an integer divisible by 3
                $("ul").append("<li>" + elementOne[0] + "</li>");
            }
        elseif
            if (typeof bfive === 'number' && (bfive % 1) === 0) {
                // data is an integer divisible by 5
                $("ul").append("<li>" + elementOne[1] + "</li>");
            }
        elseif
            {
            // data is not Fizz or Buss
            $("ul").append("<li>" + userData + "</li>");
        };

        userdata++;
    };
};


