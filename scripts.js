var list = document.getElementById('list');
var add = document.getElementById('addElem');
var nextElem = document.getElementsByTagName('li');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML += 'item ' + nextElem.length;
	list.appendChild(element);
});
