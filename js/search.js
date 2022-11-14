function search_animal() {
	let input = document.getElementById("searchbar").value.toLowerCase();
	let x = document.getElementsByClassName("animals");
	
	for (let i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else x[i].style.display = "block";
	}
}
