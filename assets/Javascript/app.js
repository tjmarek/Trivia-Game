$('#start').on('click', function () {
    // subwrapper will remove start button and replace with questions
    // $('#subwrapper').remove();
    game.start();
})
var questions = [{
        question: "What Was Quintin Tarantino's Directorial Debut film?",
        answers: ["Pulp Fiction", "Kill Bill", "Resovior Dogs", "Jackie Brown", "Fight Club"],
        correctAnswer: "Resovior Dogs"
},
    {
        question: "Who won the NBA Rookie of The Year award in 2018-2019?",
        answers: ["D Rose", "Luka Doncic", "Zion Williamson", "Ja Morant", "LeBron James"],
        correctAnswer: "Luka Doncic"
    },
    {
        question: "Where was Texas Native, and world famous actor, Matthew Mcconaughey, born?",
        answers: ["Dallas", "Austin", "Bee Cave", "Waco", "Uvalde"],
        correctAnswer: "Uvalde"
    },
    {
        question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
        answers: ["2","6","4","5","7"],
        correctAnswer: "6"
    },
    {
        question: "Who is Seth Rogan?",
        answers: ["Actor", "Writer", "A Canadian", "A Stoner", "All of the Above"],
        correctAnswer: "All of the Above"
    },
    {
        question: "How old would Tupac Shakur be today, 2020?",
        answers: ["49", "46", "39", "53", "44"],
        correctAnswer: "49"
    }
]

var game = {
    correct: 0,
    incorrect: 0,
    // seconds
    counter: 30,
    countdown: function () {
        // created counter function that will 'start' below
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            // this method will run when game is done
            game.done();
        }
    },
    start: function () {
        // insert time, 1000seconds
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            // append to subwrapper
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h3>All done!</h3>");
        // print all correct and incorrect answers
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        // print questions not answered
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}