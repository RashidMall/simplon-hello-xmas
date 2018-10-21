let names = new Set();

// Add new name
let addName = () => {
    let name = document.getElementById("inputName").value;
    name = capitalizeFirstLetter(name);

    if(name !== ""){
        names.add(name);
    }else{
        name = "Père Noël";
    }
    
    document.getElementById("username").innerHTML = `***"Bonjour ${name} !"***`;
    document.getElementById("inputName").value = null;
    showAll();
};

// Search
let searchNames = () => {
    let search = document.getElementById("searchName").value;
    search = capitalizeFirstLetter(search);

    showAll(search);
};

// Show all names
let showAll = (search = "") => {
    document.getElementById("usernames").innerHTML = null;

    for(const name of names){
        if(name.startsWith(search)){
            let node = document.createElement("LI");
            let textnode = document.createTextNode(name);
            node.appendChild(textnode);
            document.getElementById("usernames").appendChild(node);
        }
    }
};

// Capitalize first letter
let capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

document.getElementById("submit").onclick = addName;
document.getElementById("search").onclick = searchNames;