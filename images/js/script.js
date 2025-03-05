

// ------------form---------------


// -----------form right and left------------
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));



// --------------form Validation-----------------


  // JavaScript form validation
  function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    // Regular expressions
    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[\dA-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Validation logic
    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    } 
    else if (!nameRegex.test(name)) {
        alert('Name should only contain letters and spaces.');
        return false;
    } 
    else if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    } 
    else if (!passwordRegex.test(password)) {
        alert('Password must be alphanumeric and may include special characters, and must be at least 8 characters long.');
        return false;
    } 

    // If everything is valid, you can submit the form
    alert(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Password: ' + password
    );
    
    // Ensure the form actually submits
    document.getElementById('signupForm').submit();
}

// --------------End form Validation-----------------

// -----------End form---------------







document.addEventListener('DOMContentLoaded', function() {
  // Get the button and cart count elements
  const addToCartButton = document.getElementById('addToCartButton');
  const cartCountElement = document.getElementById('cart-count');

  // Retrieve the cart from localStorage or initialize it as an empty array if it doesn't exist
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to update the cart count on the cart icon
  function updateCartCount() {
      cartCountElement.textContent = cart.length;  // Display the number of items in the cart
  }

  // Update the cart count when the page loads
  updateCartCount();

  // Event listener for the "Add to Cart" button
  addToCartButton.addEventListener('click', function() {
      // Simulate adding an item to the cart (you can customize the item data here)
      const item = {
          id: cart.length + 1,  // You can change this to use a real product ID
          name: 'Example Item',
          price: 29.99
      };

      // Add the item to the cart
      cart.push(item);

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Update the cart count displayed on the page
      updateCartCount();

      // Optional: Show a confirmation message to the user
      alert(`${item.name} has been added to your cart!`);
  });
});


// loader effect
  

       window.addEventListener('load', function() {
           // Simulate loading time
           setTimeout(function() {
               // Hide the loading spinner
               document.querySelector('.loading-container').style.display = 'none';
               // Show the content
               document.querySelector('.content').style.display = 'block';
           }, 3000); // Simulate a 3-second delay
       });
     