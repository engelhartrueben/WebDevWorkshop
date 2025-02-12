/**
 * { 
 * fname : str,
 * lname : str,
 * sid   : str,
 * year  : int,
 * events: [str]
 * }
 */

const form = document.getElementById("form");
const submit = document.getElementById("submit");

console.log("Hello IEEE Hackathon!");

const handleForm = (e) => {
    e.preventDefault();

    if (localStorage.submissionNumber) {
        localStorage.submissionNumber = Number(localStorage.submissionNumber) + 1;
    } else {
        localStorage.submissionNumber = "1";
    }

    console.log("submission_number: ", localStorage.submissionNumber);
    
    /**
     * FormData will be populated with key/value pairs when
     * given a form element. 
     */
    const data = new FormData(form);
    for (const [name, value] of data) {
        console.log(name, ":", value);
        switch (name) {
            case "fName" || "lName":
                checkName(value);
            case "email":
                checkEmail(value);
                break;
            case "sid":
                checkStudentId(value);
                break;
        }
    }
}

const checkName = (name) => {

}

const checkEmail = (email) => {
    console.log("In check email submission!")
}

const checkStudentId = (studentId) => {
    const reg = new RegExp(/^[A-Z]{2}\d{6}$/);
    if (reg.test(studentId)) { 
        console.log("Is correct!")
    } else {
        alert("Student ID is not correct! Example: AB123456")
    }
}

const post = () => {

}

form.addEventListener("submit", handleForm);
