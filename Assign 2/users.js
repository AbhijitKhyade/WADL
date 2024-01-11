document.addEventListener("DOMContentLoaded", function () {
    // Retrieve registration data from the request
    var registrationData = null;
  
    try {
      registrationData = JSON.parse(localStorage.getItem('registrationData'));
    } catch (error) {
      console.error('Error parsing registration data:', error);
    }
  
    // Display the list of registered users (modify as needed)
    if (registrationData) {
      var userListContainer = document.querySelector('.container');
      var userListHTML = '<ul>';
  
      registrationData.forEach(user => {
        userListHTML += `<li>${user.name} - ${user.email}</li>`;
        // Add other user details as needed
      });
  
      userListHTML += '</ul>';
      userListContainer.innerHTML += userListHTML;
    }
  });
  