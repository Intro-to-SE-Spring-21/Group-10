function submit()
{
    alert("Please Enter Your Username And password");

    var username = document.getElementById("username").value;
    var password = document.getElementById("pass1").value;
    var confirm = document.getElementById("pass2").value;

    if(password == confirm)
    {
        document.getElementById("pass1").classList.remove("error");
        document.getElementById("pass2").classList.remove("error");
    }

    else
    {
        document.getElementById("pass1").classList.add("error");
        document.getElementById("pass2").classList.add("error");
    }

    document.getElementById("empty").innerHTML += "<br>This is a thing.";
}
