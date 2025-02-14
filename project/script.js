document.addEventListener('DOMContentLoaded', function () {

  const currentYear = new Date().getFullYear();
  
  const copyrightElement = document.getElementById("copyright-year");
  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  }

  const isHomePage = window.location.pathname.includes('index.html');
  const isBookingpage = window.location.pathname.includes('booking.html');

  if (isHomePage) {
    const reviewText = document.getElementById('review-text');
    if (reviewText) {
      
    let reviews = [
    "\"The best catering experience available!\"",
    "\"Delicious food and great service. Highly recommend!\"",
    "\"A memorable event thanks to Let's Go Dutch!\"",
    "\"The food was outstanding, and the service was top-notch!\"",
    "\"The fair style peach cobbler brings me out every year!\"",

];

let currentReview = 0;
const reviewText = document.getElementById('review-text');
const nextButton = document.getElementById('next-review');
const prevButton = document.getElementById('prev-review');

function changeReview() {
  if (reviewText) {
    reviewText.textContent = reviews[currentReview];
  }else {
    console.error("Review text element not found.");
  }
}
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', function(){
      currentReview = (currentReview + 1) % reviews.length;
      changeReview();
    });
    prevButton.addEventListener('click', function(){
      currentReview = (currentReview - 1 + reviews.length) % reviews.length;
      changeReview();
    });

setInterval(() => {
  currentReview = (currentReview + 1) % reviews.length;
  changeReview();
}, 3000);
    }
  }
}

if (isBookingpage) {
  const form = document.getElementById('booking-form');
  if (form) {
  form.addEventListener('submit', function(event) { 
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    console.log('Form submitted! Thank you!')

});
} else {
  console.error('Form element not found');
}
}
});
