document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('header nav a')

    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100; // Adjusted offset to account for fixed header
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')
            if (top > offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active')
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                })
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                let offset = targetSection.offsetTop - 100; // Adjusted offset to account for fixed header
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
