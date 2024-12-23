document.addEventListener('DOMContentLoaded', () => {
    const captions = document.querySelectorAll('.caption');

    captions.forEach(caption => {
        const information = caption.nextElementSibling;
        if (!information.classList.contains('hidden')) {
            caption.classList.add('active');
        }

        caption.addEventListener('click', () => {
            if (information.classList.contains('hidden')) {
                information.classList.remove('hidden');
                caption.classList.add('active');
            } else {
                information.classList.add('hidden');
                caption.classList.remove('active');
            }
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
        document.body.style.overflow = "hidden";
    });

    cross.addEventListener("click", function() {
        navigation.style.display = "none";
        document.body.style.overflow = '';
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
            document.body.style.overflow = '';
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
        document.body.style.overflow = "hidden";
    });

    cross.addEventListener("click", function() {
        languages.style.display = "none";
        document.body.style.overflow = '';
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
            document.body.style.overflow = '';
        });
    });
});

function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add('unavailable');
    notification.textContent = message;
    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

const unavailableButton = document.querySelector('.menu__item--not');

unavailableButton.addEventListener("click", () => showNotification("Function is temporarily unavailable."));