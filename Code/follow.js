

  function followToggle() { //function for the button
    followButton = document.getElementById("followbtn");
    if(followButton.innerHTML == "Follow") {// changes the button text
      followButton.className = 'unfollow';
      followButton.innerHTML = "Unfollow";
    } else if (followButton.innerHTML == "Unfollow") { // changes the button text
      followButton.className = 'follow';
      followButton.innerHTML = "Follow";
    }
  }
