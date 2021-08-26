let tuitt = ["Charles", "Paul", "Sef", "Alex", "Paul"];

function addName(newName, tuitt) {
	if (tuitt.indexOf(newName) == -1) { //use Equality to confirm the position of newName
		tuitt.push(newName);
		console.log(newName + " is successfully added.")
	}
	else {
		console.log("The name already exists")
	}
}