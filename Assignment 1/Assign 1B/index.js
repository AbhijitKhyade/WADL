
let button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("Form submitted");
    // if (!form.checkValidity()) {
    //     console.log("Form is not valid");
    // } else {
    console.log("Form is valid");
    // Collect registration data
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        dob: document.getElementById('dob').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
        state: document.getElementById('state').value,
        hobbies: []
    };

    let hobbyCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    hobbyCheckboxes.forEach((checkbox) => {
        formData.hobbies.push(checkbox.value);
    });

    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function (response) {
            window.location.href = 'users.html?data' + JSON.stringify(response);
        },
        error: function (error) {
            console.log('Error:', error)
        }
    })
}

    // form.classList.add("was-validated");

);