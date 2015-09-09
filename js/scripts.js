var pigLatinizer = function(message) {
    var lowerString = message.toLowerCase();
    var exploded_message = lowerString.split(' ');
    var result_array = [];
    exploded_message.forEach(function(word) {
        var length = word.length;
        for (var i = 0; i < length; i++) {
            if (word.slice(i,i+2) === "qu") {
                var result = (word.slice(i+2, length)).concat(word.slice(0, i+2));
                var esultray = result.concat("ay");
                result_array.push(esultray);
                break;
            } else if ((word.slice(i,i+1) === "a") || (word.slice(i,i+1) === "e") || (word.slice(i,i+1) === "i") || (word.slice(i,i+1) === "o") || (word.slice(i,i+1) === "u") || ((word.slice(i,i+1) === "y") && i !== 0)) {
                var result = (word.slice(i, length)).concat(word.slice(0, i));
                var esultray = result.concat("ay");
                result_array.push(esultray);
                break;
            } else if (length === 1) {
                var result = (word.slice(i, length)).concat(word.slice(0, i));
                var esultray = result.concat("ay");
                result_array.push(esultray);
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
