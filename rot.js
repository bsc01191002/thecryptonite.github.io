function rot(s, i) {
	return s.replace(/[a-zA-Z]/g, function (c) {
		return String.fromCharCode(
			(c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26
		);
	});
}

function rot2(s, i) {
	return s.replace(/[a-zA-Z]/g, function (c) {
		return String.fromCharCode(
			(c >= "a" ? 97 : 65) <= (c = c.charCodeAt(0) - i) ? c : c + 26
		);
	});
}

function update() {
	if(document.getElementById("type").value == 2)
	document.getElementById("output").value = rot2(
		document.getElementById("input").value,
		+document.getElementById("rot").value
	);
	else
	document.getElementById("output").value = rot(
		document.getElementById("input").value,
		+document.getElementById("rot").value
	);
}

$("#rot").on("change", function () {
	let selected = document.getElementById("rot").value;
	$("#output").attr('placeholder', 'ROT ' + selected + ' Output');
});
