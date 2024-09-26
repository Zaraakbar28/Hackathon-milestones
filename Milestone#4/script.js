// Get references to the form and the dispplay area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the  resume  content dynamically
    var resumeHtml = "\n  <h2><b>Editable Resume</h2></b>\n  <h3> Personal Information</h3>\n  <p><b>Name:<b><span contenteditable=\"true\">".concat(name, "</span></p>\n  <p><b>Email:<b><span contenteditable=\"true\">").concat(email, "</span></p>\n  <p><b>Phone:<b><span contenteditable=\"true\">").concat(phone, "</span></p>\n  \n  <h3>Educational</h3>\n  <p contenteditable=\"true\">").concat(education, "</p>\n\n <h3>Experience</h3>\n <p contenteditable=\"true\">").concat(experience, "</p>\n \n <h3>Skills</h3>\n <p contenteditable=\"true\">").concat(skills, "</p>\n ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is misssing.');
    }
});
