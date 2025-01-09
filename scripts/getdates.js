document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = 'last Modified: ${document.lastModified}';

const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;


const lastModifiedParagraph = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = 'Last Modified: ${lastModifiedDate}';