$(document).ready(function() {

// sets max number of characters a user inputs in a tweet to 140 
$('.new-tweet textarea').on('input', function() {
let input = $(this).val().length; // whatever you are typing in
let maxChar = 140;
let remainingChar = maxChar - input;

// changes counter color to red when the max is reached
$('.counter').text(remainingChar)
if (remainingChar <= 0) {
$('.counter').css("color", 'red')
} else {
$('.counter').css("color", '#9f43fa');
}
});
});
