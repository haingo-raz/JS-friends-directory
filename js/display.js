const createUpdateSection = document.getElementById("create-update");
const readSection = document.getElementById("read");
const deleteSection = document.getElementById("delete");

// get friendsList from the localStorage
var friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];

function initDisplay() {
    createUpdateSection.style.display = 'block';  
    readSection.style.display = 'none';           
    deleteSection.style.display = 'none';         
}

initDisplay();

function displayReadSection(){
    createUpdateSection.style.display = 'none';
    readSection.style.display = 'block';
    deleteSection.style.display = 'none';
}

function displayDeleteSection() {
    createUpdateSection.style.display = 'none';
    readSection.style.display = 'none';
    deleteSection.style.display = 'block';
}