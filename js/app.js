$(document).ready(function() {
	$("#fizzbuzz").click(function () {
		var n = parseInt($("#num").val()); 
		console.log(n);
		if(!n) alert("please input a number");
		fizzbuzz(n);
	});
	function fizzbuzz(n) {
		for(var i=1; i<=n; i++)
		{
			var output = "";
			if(!(i%3)) output += "fizz"; 
			if(!(i%5)) output += "buzz";
			if(!output) output = i;
		
			$("script").first().before("<p>"+output+"</p>");
		}
	}
});