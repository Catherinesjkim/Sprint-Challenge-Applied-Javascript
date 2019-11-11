# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

  The HTML that I write is parsed by the browser and turned into the DOM. The code in DevTools is the DOM. When I’m looking at the panel in whatever browser’s DevTools I’m using that shows me stuff that looks like HTML, that is a visual representation of the DOM. It was created directly from my HTML. Difference between my HTML and the DOM is that if I have <table> element in my HTML and I left out the required <tbody> element, the browser will just insert that tag for me. It will be there in the DOM so I will be able to find it with JS and style it with CSS, even though it’s not in my HTML. And JS can manipulate the DOM. JS is a language that the browser reads and does stuff with. But the DOM is where that stuff happens. In fact a lot of what I might think of as a “JS thing” is more accurately a “DOM API”.

2. What is an event?

  When I refresh my email inbox, double tap on a post, or scroll through a newsfeed - something cool happens in my browser. These actions are known as events. Events on the web are user interactions and browser manipulations that you can program to trigger functionality. Some examples are: mouse clicking on a button, webpage files loading in the browser, a user swiping right on an image. 

3. What is an event listener?

  An event listener is a procedure or function in a computer program that waits for an event to occur. Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard, disk I/O, network activity, or an internal timer or interrupt. The listener is programmed to react to an input or signal by calling the event’s handler.  

4. Why would we convert a NodeList into an Array?

  Because we can’t use any of the array methods with the elements you get back when using querySelectorAll(), because it returns a NodeList, not an array. Nodelista are not a JS API, but a browser API. Things like querySelectorAll() and getElementsByTagName() aren’t JS methods, they’re browser APIs that let you access DOM elements. You can then manipulate them with JS. 

5. What is a component?

  Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps. 

### Git Set up

* [X] Fork the project into your GitHub user account
* [X] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [X] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [X] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
