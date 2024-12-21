document.addEventListener('DOMContentLoaded', () => {
    const captions = document.querySelectorAll('.caption');

    captions.forEach(caption => {
        caption.addEventListener('click', () => {
            const information = caption.nextElementSibling;
            information.classList.toggle('active');
            caption.classList.toggle('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.querySelector(".navigation");
    const cross = document.querySelector(".navigation__cross");
    const menuItems = document.querySelectorAll(".sideMenu__item, .sideMenu__choice");

    menuToggle.addEventListener("click", function() {
        navigation.style.display = "block";
    });

    cross.addEventListener("click", function() {
        navigation.style.display = "none";
    });

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetSection = this.getAttribute("href");
            const targetElement = document.querySelector(targetSection);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });

                const information = targetElement.querySelector('.hidden');
                if (information) {
                    information.classList.add('active');
                    const caption = targetElement.querySelector('.caption');
                    if (caption) {
                        caption.classList.add('active');
                    }
                }
            }

            menuItems.forEach(mi => {
                mi.classList.remove('sideMenu__choice');
                mi.classList.add('sideMenu__item');
            });
            this.classList.add('sideMenu__choice');

            navigation.style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const langToggle = document.getElementById("lang-toggle");
    const languages = document.querySelector(".languages");
    const cross = document.querySelector(".languages__cross");
    const langItems = document.querySelectorAll(".chooseLang__item, .chooseLang__choice");

    langToggle.addEventListener("click", function() {
        languages.style.display = "block";
    });

    cross.addEventListener("click", function() {
        languages.style.display = "none";
    });

    langItems.forEach(item => {
        item.addEventListener("click", function() {
            const langCode = item.textContent.split(' ')[1].replace('<', '').replace('>', '').trim();
            langToggle.textContent = `${langCode} ▾`; // 
            langItems.forEach(mi => {
                mi.classList.remove('chooseLang__choice');
                mi.classList.add('chooseLang__item');
            });
            this.classList.add('chooseLang__choice');

            languages.style.display = "none";
        });
    });
});