Hey!  Thanks for checking out my project.  

Here’s a little bit about it.

I used the code editor Ace along with Esprima to check if certain conditions were fulfilled by the code entered in the text box.

editor.html contains the editor and conditions.js is holds the conditions to be cleared.

1. 
Acorn.js vs Esprima:
I chose to use Esprima on the basis of superior documentation and support.  Esprima has a speed comparison page (http://esprima.org/test/compare.html).  Esprima is around 50% slower than Acorn.js but the absolute difference should not be relevant.

‘“Acorn.js” tutorial' turned up about 8,000 results on google, while '”Esprima” tutorial' produced about 32,000 results.  This is more important to me.

I was unsatisfied with the documentation for Esprima.  If I were to continue development, I would give a deeper look into Acorn.js.

2.
I could not test this program on Internet Explorer but everything is fully functional on Firefox, Chrome, and Safari.

3.
I could not fully figure out Esprima so I only use the tokenizer.  The documentation for Esprima is woefully brief.  As a result, did not do test case 3.  Given more time, I would add full functionality.
4.
Ace is amazingly nice.  It made this project a lot easier.

5.
There’s no slowdown to user input. 

Known issues:
Creating an open ended string as the first line of code will cause this to break.  It’s a problem with Ace.


By Adam Fisher

