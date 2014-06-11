

function TestCase(text)					//TestCase class has text and passed parameters
{
	this.text = text;
	this.passed = false;
}

var testCases = [];						//three example test cases
var case0 = new TestCase('Declare a variable.');
testCases.push(case0);

var case1 = new TestCase('Write an if statement.');
testCases.push(case1);

var case2 = new TestCase('Do not use a while loop.');
testCases.push(case2);

var case3 = new TestCase('Write a for loop inside an if statement.');
testCases.push(case3);


function validateCases(input){

	var syntax = esprima.tokenize(input, { tolerant: true } );
	
	//These cases could be combined.  Seperate for clarity.  
	//Could switch from tokenizer to syntax parser for these cases- there's a few differences between the two.
	//The tokenizer accepts as soon as it sees the completed token, but the parser only accepts once the statement is complete.

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

	//using the parse function requires a try catch block.  
	testCases[3].passed = false;
	try
	{
		var parse = esprima.parse(input, {tolerant: true});
		//var errors = parse.errors;
		var bodyLength = parse.body.length;
		for (var i = 0; i < bodyLength; i ++)
		{
			if (parse.body[i].type == "IfStatement")
			{			
				var consequentLength = parse.body[i].consequent.body.length;
				
				for (var j = 0; j < consequentLength; j++)
				{
					if (parse.body[i].consequent.body[j].type == "ForStatement")
					{
						testCases[3].passed = true;
					}
				}
			}			
		}
	} catch(e)
	{

	}
	return testCases;
	
}

