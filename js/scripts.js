var inArray = function(character, array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[i] === character) {
            return true;
        }
    }
    return false;
};

var punctuationChecker = function(word, array) {
    var punctuation = "";

    for (var i = 0; i < word.length; i++) {
        var letter = word.slice(i, i+1);

        if (inArray(letter, array)){
            punctuation += letter;
            word = word.replace(letter, '');
            i--;
        }
    }
    return word.concat(punctuation);
};

var pigLatinizer = function(message) {
    var lowerString = message.toLowerCase();
    var exploded_message = lowerString.split(' ');
    var result_array = [];
    var vowels = ["e","a","i","o","u"];
    var punctuation = ["!","?",".",","];


    exploded_message.forEach(function(word) {
        var length = word.length;
        for (var i = 0; i < length; i++) {
            var letter = word.slice(i, i+1);

            if (word.slice(i,i+2) === "qu") {
                var result = (word.slice(i+2, length)).concat(word.slice(0, i+2));
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if ((inArray(letter, vowels)) === true) {
                var result = (word.slice(i, length)).concat(word.slice(0, i));
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if ((inArray(letter, punctuation)) === true) {
                var result = (word.slice(i, length)).concat(word.slice(0, i));
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if ((letter === "y") && (i !== 0)) {
                var result = (word.slice(i, length)).concat(word.slice(0, i));
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if (length === 1) {
                var result = (word.slice(i, length)).concat(word.slice(0, i));
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;
            }
        }
    });
    var end_result = result_array.join(" ");

    return end_result;
};



///jquery

$(document).ready(function() {
    $("form#message").submit(function(event) {
        var message = $("input#message").val();
        var result = pigLatinizer(message);

        $(".pigLatin").text(result);

        event.preventDefault();
    });
});
