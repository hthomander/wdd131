const products = [
    {id: "product1", name: "Product 1"},
    {id: "product2", name: "Product 2"},
    {id: "product3", name: "Product 3"},
    {id: "product4", name: "Product 4"},
    {id: "product5", name: "Product 5"}
];

window.onload = function(){
    const productSelect = document.getElementById('product');
    const formElements = document.querySelectorAll('#reviewForm input, #reviewForm select, #reviewForm textarea');

    formElements.forEach(element => {
        if (element !== productSelect) {
            element.disabled = true;
        }
    });

    function populateProductOptions() {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    productSelect.addEventListener('change', function() {
        if (this.value) {
            formElements.forEach(element => {
                element.disabled = false;
            });
        }
    });

    populateProductOptions();


document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let reviewCount = JSON.parse(localStorage.getItem('reviewCount')) || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', JSON.stringify(reviewCount));

    window.location.href = "review.html";
});
};