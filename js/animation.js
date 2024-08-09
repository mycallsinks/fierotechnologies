let lastScrollTop = 0;
let scrolledPastPoint = false;
const scrollThreshold = 60; // Adjust this value to determine when the header behavior starts

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        if (scrolledPastPoint) {
            document.querySelector('nav').style.transform = 'translateY(-100%)';
        }
    } else {
        // Scroll up
        if (scrolledPastPoint) {
            document.querySelector('nav').style.transform = 'translateY(0)';
        }
    }

    if (currentScroll > scrollThreshold) {
        scrolledPastPoint = true;
    } else {
        scrolledPastPoint = false;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);



//  // JavaScript to make cards appear when scrolling


document.addEventListener('DOMContentLoaded', function () {
    // Function to observe elements and add 'visible' class
    function observeElements(selector) {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Observing different types of elements
    observeElements('.card');
    observeElements('.our_company_policy');
    observeElements('.accordion-item');
    observeElements('.fromright');
    observeElements('.fromleft');
});



// counting on facts



document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');

    // Function to start counting
    const startCounting = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText.replace(/[^0-9]/g, ''); // Remove non-numeric characters
            const speed = 4000; // Adjust speed (milliseconds)

            if (count < target) {
                const increment = target / speed * 300;
                const newCount = Math.min(count + increment, target).toFixed(0);
                let suffix = '';

                if (counter.innerText.includes('%')) {
                    suffix = '%';
                } else if (counter.innerText.includes('+')) {
                    suffix = '+';
                }

                counter.innerText = newCount + suffix;
                setTimeout(updateCount, 100);
            } else {
                let suffix = '';

                if (counter.innerText.includes('%')) {
                    suffix = '%';
                } else if (counter.innerText.includes('+')) {
                    suffix = '+';
                }

                counter.innerText = target + suffix;
            }
        };

        updateCount();
    };

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // Stop observing once counting has started
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Start observing all counters
    counters.forEach(counter => {
        observer.observe(counter);
    });
});


// new 


// document.addEventListener('DOMContentLoaded', () => {
//     const blurEffect = document.querySelector('.blur-effect');
//     const toggleButton = document.querySelector('.navbar-toggler'); // Adjust selector if necessary

//     toggleButton.addEventListener('click', () => {
//         if (blurEffect.style.display === 'none' || blurEffect.style.display === '') {
//             blurEffect.style.display = 'block';
//         } else {
//             blurEffect.style.display = 'none';
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const blurEffect = document.querySelector('.blur-effect');
    const toggleButton = document.querySelector('.navbar-toggler');

    toggleButton.addEventListener('click', () => {
        blurEffect.classList.toggle('show');
    });
});