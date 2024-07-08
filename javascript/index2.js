var password = "23456jj";
var adminLogin = "";

function checkPassword()
{
    if(adminLogin !== password)
    {
        output.innerHTML = "Please enter a valid password"
    }
    else
    {
       render();
    }
}

checkPassword();