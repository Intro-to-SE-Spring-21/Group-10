//Name: Gary Davis
//NETID: gjd26

// the following code was collected from a DCSP Class detailing javaScript Examples
//
// Can be used and edited for reference in building our login page
// the submit() function is used as the action(s) that follow when the submit button is pressed
// in the code below, the alert appears when the button is pressed, It also will receive the input
// for the username, password and will add it to the information stored in our database
// 
// it will also display the text "error" if there is not a match. 

// NOTE 2 self: when creating the login page do not include specifics about errors. This is specifically done this way 
// to prevent people from guessing if a user's username appears in our database at the time and prevent
// 'hackers' from trying to guess users' passwords.

function submit()
{
    alert("Please Enter Your Username And password"); // displays to the screen before the button is pressed

    var username = document.getElementById("username").value; // accept and store the information in the 'username' textbox
    var password = document.getElementById("pass1").value; // accept and store the information in the 'password' textbox
    var confirm = document.getElementById("pass2").value; // accept and store the information in the 'confirm' textbox

    if(password == confirm)
    {
        document.getElementById("pass1").classList.remove("error"); // this will remove the 'error' comment that appears if a password that is created matches the 'confirm' password
        document.getElementById("pass2").classList.remove("error");
    }

    else
    {
        document.getElementById("pass1").classList.add("error"); // this will display 'error' if the password entered does not match the created password in the 'confirm' text box
        document.getElementById("pass2").classList.add("error");
    }

}
