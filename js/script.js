window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});


// for projects


document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function () {
        const category = this.getAttribute('data-category');

        // Hide all service details
        document.querySelectorAll('.service-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show the selected service details
        const selectedService = document.querySelector(`.${category}`);
        selectedService.style.display = 'block';
    });
});


// form for device

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


    document.querySelectorAll('.list-group-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.list-group-item').forEach(li => li.classList.remove('selected'));
            item.classList.add('selected');
        });
    });



