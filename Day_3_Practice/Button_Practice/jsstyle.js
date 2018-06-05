function js_style() {
    text.style.fontSize= "14pt";
    text.style.color = "red";
    text.style.fontFamily = "Impact";
}

function getFormValue(){
    //CREATE FUNCTION TO RETURN FIRST NAME AND LAST NAME TO THE CONSOLE
    var firstName = document.querySelector('input[name=fname]').value;

    //document.getElementbyId;
    //document.getElementsByClassName;
    //document.getElementsByTagName;

    var lastName = document.querySelector('input[name=lname]').value; 

    console.log(firstName);
    console.log(lastName);
}
