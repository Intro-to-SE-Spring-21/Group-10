function submit()
{
	alert("tweet posted");
	var t = document.getElementById("tweet").value;
	
	var respond = document.getElementById("tweetlist").innerHTML = document.getElementById("tweet").value;
	
	window.writeValues = function(form) {
	var tweet = form.tweet.value;

  document.getElementById('tweetlist').innerHTML += tweet;
}
}