function formValidate(){
    var username = document.getElementById("Username").value;
    var Email = document.getElementById("Email").value;
    var Phone = document.getElementById("Phone").value;
    var Error = document.getElementById("Error");
    var text ="";

    if(username.length<3){
        text="Enter valid username";
        Error.innerHTML=text;
        return false;
    }
    else if(Email.indexof("@")==-1||Email.indexof(".")==-1||Email.length<10){
        text="Enter valid Email";
        Error.innerHTML=text;
        return false;
    }
    else if(Phone.length!=11||isNaN(Phone)){
        text="Enter valid Phone";
        Error.innerHTML=text;        
        return false;
    }
    else{
        return true;
    }
}
formValidate();
