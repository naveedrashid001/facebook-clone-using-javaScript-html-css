document.addEventListener('DOMContentLoaded', function() {
window.onload = function () {
            const days = document.getElementById('dob-day');
            const months = document.getElementById('dob-month');
            const years = document.getElementById('dob-year');

            for (let i = 1; i <= 31; i++) {
                let option = document.createElement('option');
                option.value = i;
                option.text = i;
                days.add(option);
            }

            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            monthNames.forEach((month, index) => {
                let option = document.createElement('option');
                option.value = index + 1;
                option.text = month;
                months.add(option);
            });

            for (let i =2008; i >= 1970; i--) {
                let option = document.createElement('option');
                option.value = i;
                option.text = i;
                years.add(option);
            }
        };

        // get data from form 
        const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            fname: form.fname.value,
            lname: form.lname.value,
            email: form.email.value,
            password: form.password.value,
            dobDay: form['dob-day'].value,
            dobMonth: form['dob-month'].value,
            dobYear: form['dob-year'].value,
            gender: form.gender.value
        };

        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = '../view/mainLayout.html';
    });
});

const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function(){
    window.location.href="../index.html"
})