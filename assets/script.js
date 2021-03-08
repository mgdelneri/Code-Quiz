// Grab sections of the HTML and assign them variables
var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-quiz");
var quizContainer = document.querySelector("#quiz");
var initials = document.querySelector("#initials");
var input = document.querySelector("#input");
var results = document.querySelector("#results");
var submitBtn = document.querySelector("#submit");
var currentQuizIndex = 0;
var listItem = document.querySelector(".list-item");

// Create elements for the empty "quizContainer" in HTML
var timer = document.createElement("p");
var question = document.createElement("p");
var answers = document.createElement("div");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");
var answerAlert = document.createElement("p");

// Assign a class to each new element in "quizContainer"
timer.setAttribute("class", "timer");
question.setAttribute("class", "question");
answers.setAttribute("class", "answers");
option1.setAttribute("class", "option");
//option1.setAttribute("id", "op1");
option2.setAttribute("class", "option");
//option2.setAttribute("id", "op2");
option3.setAttribute("class", "option");
//option3.setAttribute("id", "op3");
option4.setAttribute("class", "option");
//option4.setAttribute("id", "op4");
answerAlert.setAttribute("id", "answerAlert");

// Array of five quiz questions, answer options, and correct answers
var questionsAnswersArray = [
  {
    question: "What are the six primitive data types in JavaScript?",
    answers: {
      option1: "string, number, boolean, bigInt, symbol, undefined",
      option2: "sentence, int, truthy, bigInt, symbol, undefined",
      option3: "string, num, falsy, bigInt, symbol, undefined",
      option4: "sentence, float, data, bigInt, symbol, undefined",
    },
    correctAnswer: "string, number, boolean, bigInt, symbol, undefined",
  },
  {
    question: "How do we declare a conditional statement in JavaScript?",
    answers: {
      option1: "for loop",
      option2: "difference...between",
      option3: "while loop",
      option4: "if...else",
    },
    correctAnswer: "if...else",
  },
  {
    question:
      "From the given array, which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    answers: {
      option1: "3",
      option2: "0",
      option3: "1",
      option4: "2",
    },
    correctAnswer: "1",
  },
  {
    question: "How do we stop a loop from repeating indefinitely?",
    answers: {
      option1: "We have to explicitly end the loop with the break keyword",
      option2: "A loop will stop executing when the condition is false",
      option3: "A loop will stop executing when the condition is true",
      option4: "When we have iterated through half of the condition",
    },
    correctAnswer: "A loop will stop executing when the condition is false",
  },
  {
    question:
      "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
    answers: {
      option1: "forEach() and pop()",
      option2: "push() and sort()",
      option3: "concat() and shift()",
      option4: "pop() and unshift()",
    },
    correctAnswer: "pop() and unshift()",
  },
];

renderStoredInputs();

// Function that will build and run the quiz questions
function buildQuiz() {
  // First page with instructions disappears when "start the quiz" button is clicked
  instructions.style.display = "none";

  // Append elements to "quizContainer"
  quizContainer.appendChild(timer);
  quizContainer.appendChild(question);
  quizContainer.appendChild(answers);
  answers.appendChild(option1);
  answers.appendChild(option2);
  answers.appendChild(option3);
  answers.appendChild(option4);
  quizContainer.appendChild(answerAlert);

  // Run countdown function below
  countdown();
  // Run the generateQuiz function below
  generateQuiz();
}

// Define countdown function
function countdown() {
  // Start the timer at 60 seconds
  var timeLeft = 5;

  // Define time interval function and attach it to a variable
  var timeInterval = setInterval(function () {
    if (timeLeft > 10) {
      timer.textContent = timeLeft + " Seconds Remaining";
      timeLeft--;
    } else if (timeLeft < 11 && timeLeft > 1) {
      timer.textContent = timeLeft + " Seconds Remaining";
      timer.setAttribute("style", "color: red; font-size: 30px");
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " Second Remaining";
      timer.setAttribute("style", "color: red; font-size: 30px");
      timeLeft--;
    } else if (timeLeft === 0) {
      timer.textContent = "Time's Up!!!";
      timer.setAttribute("style", "color: red; font-size: 30px");
      timeLeft--;
    } else if (timeLeft < 0) {
      clearInterval(timeInterval);
      initialsPage();
    }
  }, 1000);

  // Run time interval definition
  return timeInterval;
}

// Function that will run the loop with quiz questions and answers
function generateQuiz() {
  // Assign variable to grab items from the questionsAnswersArray
  var currentQuestionObject = questionsAnswersArray[currentQuizIndex];
  question.textContent = currentQuestionObject.question;
  option1.textContent = currentQuestionObject.answers.option1;
  option2.textContent = currentQuestionObject.answers.option2;
  option3.textContent = currentQuestionObject.answers.option3;
  option4.textContent = currentQuestionObject.answers.option4;

  option1.addEventListener("click", function () {
    if (option1.textContent === currentQuestionObject.correctAnswer) {
      answerAlert.textContent = "Correct!";
    } else if (option1.textContent != currentQuestionObject.correctAnswer) {
      answerAlert.textContent = "Wrong!";
    }
    currentQuizIndex++;
    generateQuiz();
  });

  option2.addEventListener("click", function () {
    if (option2.textContent === currentQuestionObject.correctAnswer) {
      answerAlert.textContent = "Correct!";
    } else if (option2.textContent != currentQuestionObject.correctAnswer) {
      answerAlert.textContent = "Wrong!";
    }
    currentQuizIndex++;
    generateQuiz();
  });
}

// Function that runs the page where user inputs their initials
function initialsPage() {
  // Quiz page disappears when the quiz is over and/or time runs out
  quizContainer.style.display = "none";
  // Name-input page is displayed; the "block" reverses "display:none" in CSS
  initials.style.display = "block";

  // When submit button is clicked, the input value is stored locally
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var initialsInput = input.value;
    localStorage.setItem("name", initialsInput);
  });
  
  // When the submit button is clicked, the resultsPage function is called
  submitBtn.addEventListener("click", resultsPage);
}

// Function that runs the page where quiz results are displayed
function resultsPage() {
  // initialsPage disappears when user presses submit button
  initials.style.display = "none";
  // Results page is displayed; the "block" reverses "display:none" in CSS
  results.style.display = "block";

  // Get input value from local storage and add it to results list
  //var initialsInput = input.value;
  var grabbedInput = localStorage.getItem("name");
  listItem.textContent = grabbedInput;
}

// Function that grabs previously stored intials and scores from local storage
function renderStoredInputs() {
    var storedInputs = localStorage.getItem("name");
    // If nothing stored, return the function
    if (!name) {
        return;
    };
    // If there are stored inputs, add them to the list in resultsPage
    listItem.textContent = storedInputs;
}

startBtn.addEventListener("click", buildQuiz);