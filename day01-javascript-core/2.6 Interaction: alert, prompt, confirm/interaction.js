// Alert: It shows a message and waits for user to press ok
alert(hello);

/*The mini-window with the message is called a modal window. 
The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, 
 etc, until they have dealt with the window. In this case – until they press “OK”.*/
 

/*Prompt:
The text to show the visitor.
default
An optional second parameter, the initial value for the input field. */
result = prompt(title,[default]);
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

/* confirm:
The function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is true if OK is pressed and false otherwise. */

let isBoss = confirm("Are you the boss ?")
alert(isBoss); //true if ok is pressed

