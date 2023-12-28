function changeColor() {

    var hex_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var code = '';

    for (var p = 0; p<6; p++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        code += hex_numbers[random_index];
    }

    document.getElementById("all-code").innerHTML = code;
    document.body.style.backgroundColor = '#' + code;

}


//  function changeColor() {
//     var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
// }
