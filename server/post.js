
const IP = "http://localhost:8989/";

fetch(IP)
	.then((response) => response.json())
	.then((json) => console.log(json));

fetch(IP + "sub/", {
	method: "POST",
	body: JSON.stringify({
		"item": {
    			"name": "Foo",
    			"description": "The pretender",
			"price": 42.0,
			"tax": 3.2
		}
	}),
	headers: {
		"Content-Type": "application/json"
	}
})
	.then((response) => response.json())
	.then((json) => console.log(json));
