$(document).ready(function() {
// You'll create a trivia form with multiple choice answers.
// The player will have a limited amount of time to finish the quiz.
// The game ends when the time runs out. 
// The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.
var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 100;
var intervalId;


$('#results').hide();
$('#questions').hide();
$('.start').click(run);
$('#submit').click(endGame);


function run() {
    $('.start').hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $('#questions').show();
  
  };


function decrement() {
    timer--;
    $("#time-remaining").html("<h2>" + timer + "</h2>");

    if (timer === 0){
        stop();
        endGame();
    }
};

function stop() {
    clearInterval(intervalId);
}


function endGame() {
    $('#questions').hide();
    stop();

    $("input[type='radio']").click(function(){
        var answers = $("input[name='choices']:checked"). val();
        if (answers[i] === 'true'){
            correct++;
        }else if (answers[i] === 'false'){
            wrong++;
        }else {
            unanswered++;
        }

    $('#results').text("Correct: " + correct + "Wrong: " + wrong + "Unanswered: " + unanswered);
    });
};

});