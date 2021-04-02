var newTweet = document.getElementById("tweet-body");
var tweets = document.getElementById("tweets");
var existingTweets = ['Example tweet.'];

window.onload = function() {
    getTweets();
}

function createTweet() {
    document.getElementById("display-create").hidden = false;
}

function hideForm() {
    document.getElementById("display-create").hidden = true;
}

function getTweets() {
    // for (var i = 0; i < existingTweets.length; i++) {
    //     var tweet = existingTweets[i];
    //     var li = document.createElement('li');
    //     li.className = 'collection-item';
    //     li.appendChild(document.createTextNode(tweet));
    //     tweets.appendChild(li); 
    // }
    // console.log(existingTweets);
    let tweetList;
    if(localStorage.getItem('tweetList')===null){
        tweetList = [];
    } else {
        tweetList = JSON.parse(localStorage.getItem("tweetList"));
    }
    tweetList.forEach(function(tweet) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(tweet));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        tweets.appendChild(li);
    })
}

function storeTweet(tweet) {

    // existingTweets.push(tweet);
    // console.log(existingTweets);
    // e.preventDefault();
    let tweetList;
    if(localStorage.getItem('tweetList')===null){
        tweetList = [];
    } else {
        tweetList = JSON.parse(localStorage.getItem("tweetList"));
    }
    tweetList.push(tweet);
    localStorage.setItem('tweetList', JSON.stringify(tweetList));
}

function addTweet() {
    if (newTweet.value === '') {
        alert("Please type something to post.");
    } else {
        storeTweet(newTweet.value);
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(newTweet.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        tweets.appendChild(li);
        console.log(newTweet.value);
        getTweets();
        newTweet.value = '';
    }
}

function clearTweets() {
    localStorage.clear();
}