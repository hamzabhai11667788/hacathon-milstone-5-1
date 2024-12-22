// Get reference to the form and display area 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Handle form submition
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page related
    //collect input value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var exprience = document.getElementById("exprience").value;
    var skills = document.getElementById("skills").value;
    // Generated the resume conduct dynamically
    var resumeHTML = "<h2><b>Editable Resume</b></h2>\n       <h3>Personel Information</h3>\n       <p><b>Name</b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>email</b><span contenteditable=\"true\">").concat(email, "</span></p>\n         <p><b>phone</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n         \n         <h3>Education</h3>\n         <p contenteditable=\"true\">").concat(education, "</p>\n         \n         <h3>Exprience</h3>\n         <p contenteditable=\"true\">").concat(exprience, "</p>\n         \n         <h3>Skills</h3>\n         <p contenteditable=\"true\">").concat(skills, "</p>");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display  element is missing.');
    }
});
