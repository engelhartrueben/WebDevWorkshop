
const IP = "http://0.0.0.0:8000/";

fetch(IP + "test/", {
	method: "POST",
	headers: {
		'Accept': 'application/json',
		'Content-type': 'application/json'
	},
	body: JSON.stringify({
		"name": "pizza",
		"price": 7.7,
		"count": 8
	}),
})
	.then((response) => response.json())
	.then((json) => console.log(json));

fetch(IP + "again/", {
	method: "POST",
	headers: {
		'Accept': 'application/json',
		'Content-type': 'application/json'
	},
	body: JSON.stringify({ "item": 5 }),
})
	.then(r => r.json())
	.then(j => console.log(j));

