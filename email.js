function validateEmail()
{
    var x=document.registerform.email.value;
    var atposition=x.indexOf("@");
    var dotposition=x.indexOf(".");
    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {
        alert("Please Enter Valid Email Id");
        document.registerform.email.focus();
        return false;
    }
    else{
        return true;
    }
}