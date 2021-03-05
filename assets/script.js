// TODO: First page with instructions and a start button
    // TODO: How to make instruction page disappear when button is pushed

// Grab sections of the HTML and assign them variables
var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-quiz");
var quizContainer = document.querySelector("#quiz-QandA");

// Create elements for the empty "quizContainer" in HTML
var timer = document.createElement("p");
var question = document.createElement("p");
var answers = document.createElement("ul");
var option1 = document.createElement("li");
var option2 = document.createElement("li");
var option3 = document.createElement("li");
var option4 = document.createElement("li");

// Assign a class to each new element in "quizContainer"
timer.setAttribute("class", "timer");
question.setAttribute("class", "question");
answers.setAttribute("class", "answers");
option1.setAttribute("class", "option");
option2.setAttribute("class", "option");
option3.setAttribute("class", "option");
option4.setAttribute("class", "option");

// Function that will build and run the quiz questions
function buildQuiz() {
    // First page with instructions hides when "start the quiz" button is clicked
    instructions.style.visibility = "hidden";

    // Append elements to "quizContainer"
    quizContainer.appendChild(timer);
    quizContainer.appendChild(question);
    quizContainer.appendChild(answers);
    answers.appendChild(option1);
    answers.appendChild(option2);
    answers.appendChild(option3); 
    answers.appendChild(option4);

    // Define countdown function
    function countdown() {
        // Start the timer at 60 seconds
        var timeLeft = 6;
        // Test
        question.textContent = "QUESTION";
        // Define time interval function and attach it to a variable
        var timeInterval = setInterval(function() {
            if (timeLeft > 1) {
                timer.textContent = timeLeft + " Seconds Remaining";
                timeLeft--;
            } else if (timeLeft === 1) {
                timer.textContent = timeLeft + " Second Remaining";
                timeLeft--;
            } else {
                timer.textContent = "Time's Up!!!";
                clearInterval(timeInterval);
                // TODO: run function that goes to input name page
            }
        }
        , 1000)

        return timeInterval
    }

    countdown();










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

