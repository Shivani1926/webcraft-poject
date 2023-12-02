const designations = [
    " an electrical engineering student",
    " a tech enthusiast",
    " a web developer"
];

let currentDesignationIndex = 0;

function changeDesignation() {
    document.getElementById('designation').innerText = designations[currentDesignationIndex];
    currentDesignationIndex = (currentDesignationIndex + 1) % designations.length;
}
window.setInterval(changeDesignation, 1000);