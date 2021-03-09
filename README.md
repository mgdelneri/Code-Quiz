# Code-Quiz

GOAL: 

The goal of this project was to create a timed multiple-choice quiz from scratch. 

The requirements were that, once a button was clicked, the user is presented with the first question, and the timer starts counting down. Once that question is answered, they are presented with the next question. Every time a question is answered incorrectly, time is subtracted from the clock. The quiz is over when the user has answered all of the questions in the time allotted, or the timer reaches 0. Once the quiz is over, the user is prompted to enter their initials, and then their intials and final score are shown. 

These are images of each section of the code quiz website, in order of appearance: 

![](assets/screencapture-file-Users-Marina-Desktop-homework-coding-Code-Quiz-index-html-2021-03-08-14_05_44.png)

![](assets/screencapture-file-Users-Marina-Desktop-homework-coding-Code-Quiz-index-html-2021-03-08-14_37_56.png)

![](assets/screencapture-file-Users-Marina-Desktop-homework-coding-Code-Quiz-index-html-2021-03-08-14_38_35.png)

![](assets/screencapture-file-Users-Marina-Desktop-homework-coding-Code-Quiz-index-html-2021-03-08-14_38_46.png)


PROCESS: 

In order to tackle this project, I first looked extensively at the type of code taught in this unit. I penned down on paper a lot of the solved code that we went through during all of the activities in class, as to better familiarize myself with the syntax and logic of JavaScript, as well as have a compiled reference for when I needed certain types of code on hand. 

Also on paper, I visually planned out the different sections of the website. This allowed me to not only draw out the format of each section, but also create trees for the general logic of the JavaScript code. Drawing out a plan helped in getting my brain around the steps of the project.

I then created all of the files needed: HTML, CSS, and JavaScript. 

Starting with the HTML, I started formatting the skeleton of the sections. At this point, I paid attention mostly to the intro/instruction part, which is the first section and the first thing the user sees on the screen. I filled in all of the text, created the start button, and styled the page in CSS. I also added divs for what would be the other sections of the code quiz website, and kept those empty. 

Next I wrote pseudo-code in JavaScript, which was essentially steps to be completed. As time went on, I kept adding to this pseudo-code and making it increasingly more detailed. 

The first code written in JavaSCript was to activate the "Start the Quiz" button on the intro page, which would eventually also start the series of functions that make the website run smoothly. In pseudo-code, I wrote out what these functions would be. 

I then started formatting the next three big sections of the code quiz website. The second, biggest, and most complicated section is where the quiz is presented, with a timer countdown attached to it. At first, I formatted and styled it, so I could tell what it was going to be like visually. I also did this for the last two, much simpler, sections: the page where the user is prompted to input their initials, and the page where their score is shown. 

I should note that I formatted the quiz section in JavaScript, using "createElement" and "appendChild". For the third and fourth sections, I used HTML to format the pages. This is because my code was originally not conducive to having the secondary sections (the ones after the intro page) appear in the right place when buttons were clicked. By the time I was formatting the third and fourth sections, I realized that I could actually format them in HTML and have them show up where and how I wanted them to. I left the creation of the elements of the quiz section in JavaScript instead of moving them to HTML because it was good practice using that particular code, and the website was functioning as desired. 

I focused on the code for the functionality of the quiz section for a long time. I started with the countdown function, which counts down the clock for answering all of the questions of the quiz. I then created an object array for all of the questions, answers, and correct answers of the quiz. The five questions/answers found in this quiz came directly from the quiz provided to us in the Unit 03 README of the Bootcamp repo, as found in this link: https://docs.google.com/forms/d/e/1FAIpQLSdDPdtj16MId8J1j5JexXow7zoXbd_BtfnlWGb-lA_Dp2RMbA/viewscore?viewscore=AE0zAgCCycxZHnBfY9k1Yjc3doDgxHq8XzDsDjpVq1q1zPsiTi9uFM86um4fL-jg7w

Once I had some of the desired functionality of the quiz section in place, I started hitting a couple of walls, so I decided to start working on the functionality of the second and third sections. This involved the usage of eventDefault and localStorage in order to save the user's name initials in local storage then later be able to grab it from local storage to attach it to their score on the last page. 

At this point, the website was coming to life, and now it was a matter of chipping away at the logic and code to get it to where I wanted it to go. The help from my tutor was invaluable, and not only helped me understand the logic better, but also set me in the right direction when I felt stuck. There were a couple of more complicated bugs that required collaborative work. 

The last few steps involved testing the website as much as possible to see what would happen in different scenarios, as well as reading through the code to clean it up and make sure there wasn't anything superfluous that needed to be tossed out. 


NOTES/CHALLENGES: 

This project was incredible challenging, which also made it incredibly rewarding. I felt that it was very important and useful to review the material as much as possible beforehand, and break things up into increasingly smaller parts. I found that I was better understanding the logic of JavaScript compared to the previous project, and that helped my confidence in executing this assignment. 

It also showed how crucial team work is to coding. I believe that the challenges I faced would have been virtually impossible to get through had I not had another set of eyes to look over the code. 

Not having started code for this project also forced me to think more like a programmer from the start, as opposed to trying to decipher someone else's code and then trying to expand on it. I know this is also part of being a coder, but writing all of the code myself gave me a better idea of how the logic worked from the beginning. 

The biggest challenges I faced came in the functionality of the answer option buttons under the questions. It took breaking down the code into even smaller pieces in order for them to work correctly in relation to the clock and the score variables. 

There are some things I would improve upon and add to this website. I think it would be useful if other users' scores would also show in the last section, for instance, so the current user can see where they stand in relation to other quiz-takers. Also, if after the user enters their initials they press the return/enter key as opposed to clicking the "Submit" button, the website goes back to the first/intro page. I simply did not have the time to fix this or add anything else to the website. 

The overall experience of creating the code quiz from scratch was incredibly educational and invigorating. It felt like solving a complex and layered puzzle, one that can be completed in many different ways. 

Here is a link to the completed Code Quiz website:

https://mgdelneri.github.io/Code-Quiz/

