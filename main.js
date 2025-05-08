function displayProductCategory() {
	var prodCategory = document.getElementById('categoryEntry').value;

		switch (prodCategory) {
			case "C":
				document.getElementById("displayCategory").innerHTML ="Category: Clothing 🥼";
				break;

			case "E":
				document.getElementById("displayCategory").innerHTML ="Category: Electronics 📱";
				break;

			case "B":
				document.getElementById("displayCategory").innerHTML ="Category: Books 📕";
				break;

			case "Honorable Mention":
				document.getElementById("displayCategory").innerHTML ="Category: Old Spice";
				break;

			case "Chaos":
				document.getElementById("displayCategory").innerHTML ="Category: CHICKEN JOCKEY! 🐓";
				break;

			default:
				window.alert("Invalid Section Number");
		}
}