
const IP = "https://debianhomelab.tailc1a913.ts.net:8443";

console.log("Hello IEEE Hackathon! (:");

const post = (data) => {
	console.log("post: " + JSON.stringify(data));

}

const get = async url => {
	
}


const handleForm = (e) => {
    // Prevents page from refreshing after submission
    e.preventDefault();

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

