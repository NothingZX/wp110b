## JavaScript

JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.

> Why Learn JavaScript?

JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.

> Take-Away Skills

You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. The concepts covered in these lessons lay the foundation for using JavaScript in any environment.

* Introduction
    * console.log()
    ```
    console.log('Hi there!');
    // Prints: Hi there! 
    ```
    The console.log() method is used to log or print messages to the console. It can also be used to print objects and other info.

    * JavaScript

    JavaScript is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run.

    * Methods
    ```
    // Returns a number between 0 and 1
    Math.random();
    ```
    Methods return information about an object, and are called by appending an instance with a period ., the method name, and parentheses.

    * Libraries
    ```
    Math.random();
    // ☝️ Math is the library
    ``` 
    Libraries contain methods that can be called by appending the library name with a period ., the method name, and a set of parentheses.

    * Numbers
    ```
    let amount = 6;
    let price = 4.99;
    ```
    Numbers are a primitive data type. They include the set of all integers and floating point numbers.

    * String .length
    ```
    let message = 'good nite';
    console.log(message.length);
    // Prints: 9
 
    console.log('howdy'.length);
    // Prints: 5
    ```
    The .length property of a string returns the number of characters that make up the string.

    * Data Instances

    When a new piece of data is introduced into a JavaScript program, the program keeps track of it in an instance of that data type. An instance is an individual case of a data type.

    * Booleans
    ```
    let lateToWork = true;
    ```
    Booleans are a primitive data type. They can be either true or false.

    * Math.random()
    ```
    console.log(Math.random());
    // Prints: 0 - 0.9
    ```
    The Math.random() function returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1.

    * Math.floor()
    ```
    console.log(Math.floor(5.95)); 
    // Prints: 5
    ```
    The Math.floor() function returns the largest integer less than or equal to the given number.

    * Single Line Comments
    ```
    // This line will denote a comment

    ```
    In JavaScript, single-line comments are created with two consecutive forward slashes //.

    * Null
    ```
    let x = null;
    ```
    Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null.

    * Strings
    ```
    let single = 'Wheres my bandit hat?';
    let double = "Wheres my bandit hat?";
    ```
    Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".

    * Arithmetic Operators
    ```
    // Addition
    5 + 5
    // Subtraction
    10 - 5
    // Multiplication
    5 * 10
    // Division
    10 / 5
    // Modulo
    10 % 5
    ```
    JavaScript supports arithmetic operators for :

    `+` addition <br>
    `-` subtraction <br>
    `*` multiplication <br>
    `/` division <br>
    `%` modulo

    * Multi-line Comments
    ```
    /*  
    The below configuration must be 
    changed before deployment. 
    */
 
    let baseUrl = 'localhost/taxwebapp/country';
    ```
    In JavaScript, multi-line comments are created by surrounding the lines with /* at the beginning and */ at the end. Comments are good ways for a variety of reasons like explaining a code block or indicating some hints, etc.

    * Remainder / Modulo Operator
    ```
    // calculates # of weeks in a year, rounds down to nearest integer
    const weeksInYear = Math.floor(365/7);
 
    // calcuates the number of days left over   after 365 is divded by 7
    const daysLeftOver = 365 % 7 ;
 
    console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");
    ```
    The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can.

    * Assignment Operators
    ```
    let number = 100;
 
    // Both statements will add 10
    number = number + 10;
    number += 10;
 
    console.log(number); 
    // Prints: 120
    ```
    An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:

    += addition assignment <br>
    -= subtraction assignment <br>
    *= multiplication assignment <br>
    /= division assignment

    * String Interpolation
    ```
    let age = 7;
 
    // String concatenation
    'Tommy is ' + age + ' years old.';
 
    // String interpolation
    `Tommy is ${age} years old.`;
    ```
    String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).

    It can be performed using template literals: text ${expression} text.

    * Variables
    ```
    const currency = '$';
    let userIncome = 85000; 
 
    console.log(currency + userIncome + ' is more than the average income.');
    // Prints: $85000 is more than the average income.
    ```
    Variables are used whenever there’s a need to store a piece of data. A variable contains data that can be used in the program elsewhere. Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.

    * Undefined
    ```
    var a;
 
    console.log(a); 
    // Prints: undefined
    ```
    Undefined is a primitive JavaScript value that represents lack of defined value. Variables that are declared but not initialized to a value will have the value undefined.

    * Learn Javascript: Variables
    ```
    // examples of variables
    let name = "Tammy";
    const found = false;
    var age = 3;
    console.log(name, found, age);
    // Tammy, false, 3
    ```
    A variable is a container for data that is stored in computer memory. It is referenced by a descriptive name that a programmer can call to assign a specific value and retrieve it.

    * Declaring Variables
    ```
    var age;
    let weight;
    const numberOfFingers = 20;
    ```
    To declare a variable in JavaScript, any of these three keywords can be used along with a variable name:

    var is used in pre-ES6 versions of JavaScript. <br>
    let is the preferred way to declare a   variable when it can be reassigned. <br>
    const is the preferred way to declare a variable with a constant value. <br>

    * Template Literals
    ```
    let name = "Codecademy";
    console.log(`Hello, ${name}`); 
    // Prints: Hello, Codecademy
 
    console.log(`Billy is ${6+8} years old.`); 
    // Prints: Billy is 14 years old.
    ```
    Template literals are strings that allow embedded expressions, ${expression}. While regular strings use single ' or double " quotes, template literals use backticks instead.
    
    * Let Keyword
    ```
    let count; 
    console.log(count); // Prints: undefined
    count = 10;
    console.log(count); // Prints: 10
    ```
    Let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.

    * Const Keyword
    ```
    const numberOfColumns = 4;
    numberOfColumns = 8;
    // TypeError: Assignment to constant variable.
    ```
    A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error.

    * String Concatenation
    ```
    let service = 'credit card';
    let month = 'May 30th'; 
    let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';
 
    console.log(displayText);
    // Prints: Your credit card bill is due on  May 30th.
    ```
    In JavaScript, multiple strings can be concatenated together using the + operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.