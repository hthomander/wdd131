document.addEventListener('DOMContentLoaded', function (){

  const currentYear = new Date().getFullYear();
  
  const copyrightElement = document.getElementById("copyright-year");
  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  }
});


let reviews = [
    "\"The best catering experience available!\"",
    "\"Delicious food and great service. Highly recommend!\"",
    "\"A memorable event thanks to Let's Go Dutch!\"",
    "\"The food was outstanding, and the service was top-notch!\"",
    "\The fair style peach cobbler brings me out every year!\"",

];

let currentReview = 0;

function changeReview() {
    document.querySelector('#review-slider').innerHTML = `<p>${reviews[currentReview]}</p>`;
    currentReview = (currentReview + 1) % reviews.length;
}

setInterval(changeReview, 3000);


const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    alert('Thank you for reaching out! Your message has been saved.');

});
