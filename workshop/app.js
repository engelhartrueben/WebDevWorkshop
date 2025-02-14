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

const IP = "http://localhost:8000";

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
    let submission = {};
    let latch = true;
    for (const [name, value] of data) {
        console.log(name, ":", value);
        switch (name) {
            case "fName" || "lName":
                latch = latch && checkName(value);
            case "email":
                latch = latch && checkEmail(value);
                break;
            case "sid":
                latch = latch && checkStudentId(value);
                break;
        }
	submission[name] = value;
    }
    console.log(submission);
    if (latch) post(submission);
    // add error if latch is broken
}

const checkName = (name) => {
	return true;
}

const checkEmail = (email) => {
    console.log("In check email submission!");
    return true;
}

const checkStudentId = (studentId) => {
    const reg = new RegExp(/^[A-Z]{2}\d{6}$/);
    if (reg.test(studentId)) { 
	    return true
    }
    return false; 
}

const post = (data) => {
	console.log("post: " + JSON.stringify(data));
	const response = fetch(IP + "/submit/", {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify(data),
	})
}

form.addEventListener("submit", handleForm);

