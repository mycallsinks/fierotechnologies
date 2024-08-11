window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});


// for projects

document.querySelectorAll('.list-group-item-for-projects').forEach(item => {
    item.addEventListener('click', function () {
        const category = this.getAttribute('data-category');

        // Hide all service details
        document.querySelectorAll('.project-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show the selected service details
        const selectedService = document.querySelector(`.${category}`);
        selectedService.style.display = 'block';
    });
});


// for services

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


    document.querySelectorAll('.list-group-item-for-projects').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.list-group-item-for-projects').forEach(li => li.classList.remove('selected'));
            item.classList.add('selected');
        });
    });



    // animation for projects
document.addEventListener('DOMContentLoaded', function() {
    const projectCategories = document.querySelectorAll('.list-group-item-for-projects');
    const projectDetails = document.querySelectorAll('.project-details');

    function getRandomAnimationClass() {
        const animations = [
            'animate-top-left',
            'animate-top-right',
            'animate-bottom-left',
            'animate-bottom-right',
            'animate-top',
            'animate-bottom',
            'animate-left',
            'animate-right'
        ];
        return animations[Math.floor(Math.random() * animations.length)];
    }

    projectCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove 'selected' class from all categories
            projectCategories.forEach(cat => cat.classList.remove('selected'));

            // Add 'selected' class to the clicked category
            this.classList.add('selected');

            // Get the data-category of the selected item
            const selectedCategory = this.getAttribute('data-category');

            // Hide all project details
            projectDetails.forEach(detail => {
                detail.style.display = 'none';
                detail.classList.remove('animate-top-left', 'animate-top-right', 'animate-bottom-left', 'animate-bottom-right', 'animate-top', 'animate-bottom', 'animate-left', 'animate-right');
            });

            // Show the selected project details with animation
            const targetProjectDetails = document.querySelector(`.${selectedCategory}`);
            targetProjectDetails.style.display = 'block';

            // Add random animation classes to project cards
            const cards = targetProjectDetails.querySelectorAll('.card');
            cards.forEach(card => {
                // Add a random animation class to each card
                card.classList.add(getRandomAnimationClass());
            });
        });
    });
});


// for modals

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalImage');

  modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // Button that triggered the modal
    const imageUrl = button.getAttribute('data-image'); // Extract info from data-* attributes
    modalImage.src = imageUrl; // Update the modal's image source
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
  
    modal.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget; // Button that triggered the modal
      const imageUrl = button.getAttribute('data-image'); // Extract info from data-* attributes
      modalImage.src = imageUrl; // Update the modal's image source
  
      // Initialize Panzoom
      panzoom(modalImage, {
        maxZoom: 5, // Adjust the zoom level as needed
      });
    });
  });


//   dragable


// testimonial





