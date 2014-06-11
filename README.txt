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
I use the tokenizer for the first three tests and the syntax parser for the last one.  A tokenizer-test checks if a specific token, like an if statement, is present.  This means that they will be passed as soon as ‘if’ is written.  The syntax parser requires complete syntax for the case to pass.  For example, ‘if for’ will not pass the final test.  For the simpler tests, the tokenizer and syntax parser are interchangeable but the parser is required for more involved ones.   The documentation for Esprima is brief - I ended up looking at the page source of a couple pages on their website to figure some stuff out.

4.
Ace is amazingly nice.  It made this project a lot easier.

5.
There’s no slowdown to user input.  This might be an issue for large pieces of code with involved tests.

Known issues:
Creating an open ended string as the first line of code will cause this to break.  It’s a version problem with Ace.  I’ll look into this later.

The code is currently very messy.  I’ll fix this later.


By Adam Fisher

