$(document).ready(function() {
  console.log("this");
$('.new-tweet textarea').on('keypress', function() {
  console.log('this');
let input = $(this).val().length; // whatever you are typing in
let maxChar = 140;
let remainingChar = maxChar - input;

$('.counter').text(remainingChar)
if (remainingChar <= 0) {
$('.counter').css("color", 'red')
} else {
$('.counter').css("color", '#9f43fa');
}
});
});