"use strict";

var names = new Set();

// Add new name
var addName = function addName() {
    var name = document.getElementById("inputName").value;
    name = capitalizeFirstLetter(name);

    if (name !== "") {
        names.add(name);
    } else {
        name = "Père Noël";
    }

    document.getElementById("username").innerHTML = "***\"Bonjour " + name + " !\"***";
    document.getElementById("inputName").value = null;
    showAll();
};

// Search
var searchNames = function searchNames() {
    var search = document.getElementById("searchName").value;
    search = capitalizeFirstLetter(search);

    showAll(search);
};

// Show all names
var showAll = function showAll() {
    var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    document.getElementById("usernames").innerHTML = null;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            if (name.startsWith(search)) {
                var node = document.createElement("LI");
                var textnode = document.createTextNode(name);
                node.appendChild(textnode);
                document.getElementById("usernames").appendChild(node);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

// Capitalize first letter
var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

document.getElementById("submit").onclick = addName;
document.getElementById("search").onclick = searchNames;