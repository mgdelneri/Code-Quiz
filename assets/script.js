// Grab sections of the HTML and assign them variables
var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-quiz");
var quizContainer = document.querySelector("#quiz");
var initials = document.querySelector("#initials");
var input = document.querySelector("#input");
var results = document.querySelector("#results");
var submitBtn = document.querySelector("#submit");
var recordedResult = document.querySelector("#recorded-result");

// Set variables for numerical values
var currentQuizIndex = 0;
var score = 0;
var timeLeft = 60;
var timeInterval;

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
option2.setAttribute("class", "option");
option3.setAttribute("class", "option");
option4.setAttribute("class", "option");
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

// Function that will build the quiz questions
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
  // Define time interval function and attach it to a variable
  timeInterval = setInterval(function () {
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
  // This makes sure that if the user finishes quiz before the time is up, the webpage moves on to the initialsPage and countdown is stopped
  if (currentQuizIndex > 4) {
    initialsPage();
    clearInterval(timeInterval);
    return;
  }
  
  // Assign variable to grab items from the questionsAnswersArray
  var currentQuestionObject = questionsAnswersArray[currentQuizIndex];
  question.textContent = currentQuestionObject.question;
  option1.textContent = currentQuestionObject.answers.option1;
  option2.textContent = currentQuestionObject.answers.option2;
  option3.textContent = currentQuestionObject.answers.option3;
  option4.textContent = currentQuestionObject.answers.option4;
  
  // Function run if option1 is clicked
  function Option1() {

    if (option1.textContent === currentQuestionObject.correctAnswer) {
      score++;
      answerAlert.textContent = "Correct!";
    } else if (option1.textContent != currentQuestionObject.correctAnswer) {
      timeLeft -= 2;
      answerAlert.textContent = "Wrong!";
    }
    generateQuiz();
    removeEventListeners();
  }
  // Listener is added to option1 button
  option1.addEventListener("click", Option1);

  // Function run if option2 is clicked
  function Option2() {
    if (option2.textContent === currentQuestionObject.correctAnswer) {
      score++;
      answerAlert.textContent = "Correct!";
    } else if (option2.textContent != currentQuestionObject.correctAnswer) {
      timeLeft -= 2;
      answerAlert.textContent = "Wrong!";
    }
    generateQuiz();
    removeEventListeners();
  }
  
  // Listener is added to option2 button
  option2.addEventListener("click", Option2);

  // Function run if option3 is clicked
  function Option3() {
    if (option3.textContent === currentQuestionObject.correctAnswer) {
      score++;
      answerAlert.textContent = "Correct!";
    } else if (option3.textContent != currentQuestionObject.correctAnswer) {
      timeLeft -= 2;
      answerAlert.textContent = "Wrong!";
    }
    generateQuiz();
    removeEventListeners();
  }
  // Listener is added to option3 button
  option3.addEventListener("click", Option3);
  
  // Function run if option4 is clicked
  function Option4() {
    if (option4.textContent === currentQuestionObject.correctAnswer) {
      score++;
      answerAlert.textContent = "Correct!";
    } else if (option4.textContent != currentQuestionObject.correctAnswer) {
      timeLeft -= 2;
      answerAlert.textContent = "Wrong!";
    }
    generateQuiz();
    removeEventListeners();
  }
  // Listener is added to option4 button
  option4.addEventListener("click", Option4);

  // Function that removes listener for all buttons
  function removeEventListeners() {
    option1.removeEventListener("click", Option1);
    option2.removeEventListener("click", Option2);
    option3.removeEventListener("click", Option3);
    option4.removeEventListener("click", Option4);
  }

  // Adds 1 to index for current question, so it moves on to the next question
  currentQuizIndex++;
}

// Function that runs the page where user inputs their initials
function initialsPage() {
  // Quiz page disappears when the quiz is over and/or time runs out
  quizContainer.style.display = "none";
  // Name-input page is displayed; the "block" reverses "display:none" in CSS
  initials.style.display = "block";

  // When submit button is clicked, the input value is stored locally
  submitBtn.addEventListener("click", function (event) {
    // Prevents default action for form input
    event.preventDefault();
    
    var initialsInput = input.value + " : " + score + " out of 5";
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
  // Grab input from local storage and add it to text field in recordedResult container
  var grabbedInput = localStorage.getItem("name");
  recordedResult.textContent = grabbedInput;
}

// Listener added to the start button on the information/initial page
startBtn.addEventListener("click", buildQuiz);
