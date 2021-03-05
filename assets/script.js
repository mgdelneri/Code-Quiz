// TODO: First page with instructions and a start button
    // TODO: How to make instruction page disappear when button is pushed

var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-quiz");
var quizContainer = document.querySelector("#quiz-QandA");


function buildQuiz() {
    // First page with instructions hides when "start the quiz" button is clicked
    instructions.style.visibility = "hidden";

    // Create elements for the empty "quizContainer" in HTML
    var timer = document.createElement("h1");
    var question = document.createElement("p");
    var answers = document.createElement("ol");
    var option1 = document.createElement("li");
    var option2 = document.createElement("li");
    var option3 = document.createElement("li");
    var option4 = document.createElement("li");

    // Append elements to "quizContainer"
    quizContainer.appendChild(timer);
    quizContainer.appendChild(question);
    quizContainer.appendChild(answers);
    answers.appendChild(option1);
    answers.appendChild(option2);
    answers.appendChild(option3); 
    answers.appendChild(option4);

    // Assign a class to each new element in "quizContainer"
    









}
// TODO: Once the start button is pressed, the timer starts and the multiple-choice quiz starts
    // TODO: Function that runs the quiz: function quiz()
        // TODO: Show question and answer options
        // TODO: Make each answer clickable
        // TODO: When user selects an answer, it automatically brings them to the next question
        // TODO: Whether the answer is right or wrong is displayed before going to the next question
        // TODO: If answer is wrong, some time is subtracted from the clock
        // TODO: Answers to each questions are stored and then later displayed as a score

// TODO: At the end of the quiz OR when the timer runs out, the user is asked to enter their initials 
    // TODO: User presses a button to see the results page

// TODO: Results page is shown, with initials of each quiz taker and their score, in descending order

startBtn.addEventListener("click", buildQuiz);

