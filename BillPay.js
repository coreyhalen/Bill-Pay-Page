//Individual item buttons
var nodeList = document.getElementsByTagName("li");
for (var i = 0; i < nodeList.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}

// Click on close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'li') {
		ev.target.classList.toggle('checked');
	}
}, false);

// create a new list item when clicking the Add button
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("addBillInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === '') {
		alert("Please enter a bill name.");
	} else {
		document.getElementById("billsList").appendChild(li);
	}
	document.getElementById("addBillInput").value = "";

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}
