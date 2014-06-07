

function TestCase(text)					//TestCase class has text and passed parameters
{
	this.text = text;
	this.passed = false;
}

var testCases = [];						//three example test cases
var case0 = new TestCase('Declare a variable.  Try typing: var a = 1;');
testCases.push(case0);

var case1 = new TestCase('Write an if statement. Before console.log, try typing: if (a == 1)')
testCases.push(case1);

var case2 = new TestCase('Do not use a while loop.');
testCases.push(case2);


function validateCases(input){
	
	var syntax = esprima.tokenize(input, { tolerant: true } );

	//These cases could be combined.  Seperate for clarity.  

	//Test Case 0
	testCases[0].passed = false;
	for (var i = 0; i < syntax.length; i++)
	{
		if (syntax[i].type == "Keyword" && syntax[i].value == "var")
		{
		 testCases[0].passed = true;
		}
	}

	//Test Case 1
	testCases[1].passed = false;
	for (i = 0; i < syntax.length; i++)
	{
	if (syntax[i].type == "Keyword" && syntax[i].value == "if")
		{
		  testCases[1].passed = true;
		}
	}

	//Test Case 2
	testCases[2].passed = true;
	for (i = 0; i < syntax.length; i++)
	{
	if (syntax[i].type == "Keyword" && syntax[i].value == "while")
		{
		  testCases[2].passed = false;
		}
	}
	
	return testCases;
	
	//return testCases;
}

