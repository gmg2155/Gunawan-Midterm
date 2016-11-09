document.getElementById('buttonA').addEventListener('click',function quizAnswerA (){
var sentenceChoice = prompt('Which sentence best conveys the message in the simplest way? a or b?');
if (sentenceChoice ==='b'){
	alert("Perfect! Good Job!");

} else {
	alert("Sorry, your answer is wrong. Please try again.");}
});

document.getElementById('buttonB').addEventListener('click',function quizAnswerB (){
var sentenceChoice = prompt('Which sentence best conveys the message in the simplest way? a or b?');
if (sentenceChoice ==='b'){
	alert("Perfect! Good Job!");

} else {
	alert("Sorry, your answer is wrong. Please try again.");}
});

document.getElementById('buttonDone').addEventListener('click',function challengeDone (){
var sentenceChoice = prompt('Have you checked all the boxes after following all the steps? y or n?');
if (sentenceChoice ==='y'){
	alert("Congratulations, you are now a speech master!");

} else {
	alert("Please go back to the checklist and make sure you have finished all the steps.");}
});
