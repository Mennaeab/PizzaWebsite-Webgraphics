const pizzaImages = document.querySelectorAll('.menu-item img');
        pizzaImages.forEach(image => {
            image.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.1)'; // Scale up to 110%
            });
            image.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)'; // Scale back to normal
            });
        });