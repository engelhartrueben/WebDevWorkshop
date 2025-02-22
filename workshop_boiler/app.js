const form = document.getElementById("form");
const totalSubmissions = document.getElementById("total_submissions");

const IP = "";

console.log("Hello IEEE Hackathon! (:");

const post = (data) => {
	console.log("post: " + JSON.stringify(data));

	// if no ip, return
	// no need to waste resources
	if (IP == "") return;
	const response = fetch(IP + "/submit/", {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify(data),
	});
	// print the response code
	console.log(response.status);
}

const get = async url => {
	// if no ip, return
	// no need to waste resources
	if (IP == "") return;

	const response = await fetch(IP + url, {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Content-type": "application/json",
		}
	}).then(r => r.json());

	return response;
}


const handleForm = (e) => {
    // Prevents page from refreshing after submission
    e.preventDefault();

    // Exercise to show how local storage workes.
    if (localStorage.submissionNumber) {
        localStorage.submissionNumber = Number(localStorage.submissionNumber) + 1;
    } else {
        localStorage.submissionNumber = "1";
    }

    /**
     * FormData will be populated with key/value pairs when
     * given a form element. 
     */
    const data = new FormData(form);

    // This submission object will be what we submit to our server
    let submission = {};
    for (const [name, value] of data) {
        switch (name) {
	    // waterfalling case
		case "lname":
		case "fname":
			if (checkName(value)) {
				submission[name] = value;
			} else {
				// ternary operand
				alert(`Bad ${name == "fname" ? "first name" : "last name"}!`); return;
			}
		break;

        	case "email":
			if (checkEmail(value)) {
				submission[name] = value;
			} else {
				alert('Bad email!');
				return;
			}
            		break;

	    	case "year":
			submission[name] = value;
			break;

        	case "sid":
			if (checkStudentId(value)) {
				submission[name] = value;
			} else {
				alert('Bad Student ID');
				return;
			}
			break;
	
	    	// waterfall case
	    	case "event_1":
	    	case "event_2":
	    	case "event_3":
			if (submission["event"]) {
				submission["event"].push(value);
			} else {
				submission["event"] = [value];
			}
			break;
		}
    }

    // If there are no events picked, alert the user
    // Might be a case to default Guest
    if (!submission["event"]) {
	    alert("Please pick at least one event!");
	    return;
    }

    // post our submission to our server!
    post(submission);
}

// Checks that the name is only standard characters.
// No digits, special characters, or spaces.
// No spaces might not work...
const checkName = (name) => {
    const reg = new RegExp(/^[A-Za-z]+$/);
    return reg.test(name);
}

// Checks that an email has an @ and . symbol,
// in that order and only once.
// re@gmail.com - PASSES
// re.@com      - FAILS
// re@.net      - FAILS
const checkEmail = (email) => {
    const reg = new RegExp(/^[A-Za-z1-9]+[@]{1}[A-Za-z]+[.]{1}[A-Za-z]+$/);
    return reg.test(email);
}

// Checks that a studen id starts with two letters followed
// by 6 digits.
const checkStudentId = (studentId) => {
    const reg = new RegExp(/^[A-Z]{2}\d{6}$/);
    return reg.test(studentId);
}

// Listens for when the submit button is pressed,
// then runs the function handleForm
form.addEventListener("submit", handleForm);
