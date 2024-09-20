window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.scroll-animation');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach(function(element) {
        let offset = element.offsetTop;

        if (scrollTop + window.innerHeight > offset + 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
});
