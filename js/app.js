$(document).ready(function() {
	var n = 100;
	for(var i=1; i<=n; i++)
	{
		var output = "";
		if(!(i%3)) {
				output += "fizz"; 
				if(!(i%5)) output += "buzz";
			}
		else { 
				if(!(i%5)) output += "buzz";
				else output = i;
			}
		$("script").first().before("<p>"+output+"</p>");
	}
});