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
    var exploded_message = message.split(' ');
    var result_array = [];
    var vowels = ["e","a","i","o","u", "A", "E", "I", "O", "U"];
    var qu = ["qu", "QU", "Qu", "qU"]
    var punctuation = ["!","?",".",","];
    var captial_array = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z", "A", "E", "I", "O", "U"];


    exploded_message.forEach(function(word) {
        var length = word.length;
        word = word.replace(/[\[\]\<\>\(\)\/\{\}]+/g, '');

        for (var i = 0; i < length; i++) {
            var letter = word.slice(i, i+1);
            var result = (word.slice(i, length)).concat((word.slice(0, i)).toLowerCase());

            if (inArray(word.slice(i, i+2), qu)) {
                var result = (word.slice(i+2, length)).concat((word.slice(0, i+2)).toLowerCase());
                if (inArray(word.charAt(0), captial_array)){
                    result = result.charAt(0).toUpperCase() + result.slice(1,length);
                }
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if (inArray(letter, vowels)) {
                if (inArray(word.charAt(0), captial_array)){
                    result = result.charAt(0).toUpperCase() + result.slice(1,length);
                }
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if ((letter === "y") && (i !== 0)) {
                if (inArray(word.charAt(0), captial_array)){
                    result = result.charAt(0).toUpperCase() + result.slice(1,length);
                }
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;

            } else if (length === 1) {
                if (inArray(word.charAt(0), captial_array)){
                    result = result.charAt(0).toUpperCase() + result.slice(1,length);
                }
                var esultray = result.concat("ay");
                result_array.push(punctuationChecker(esultray, punctuation));
                break;
            }
        }
    });

    // result_array.forEach(function(word) {
    //     if (inArray(word.charAt(0), captial_array)){
    //         word = word.charAt(0).toUpperCase() + word.slice(1,length);
    //     }
    // });
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
