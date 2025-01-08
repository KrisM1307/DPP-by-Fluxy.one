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

let notificationVisible = false;
let notificationElement = null;

function showNotification(message) {
    if (notificationVisible) {
        notificationElement.remove();
        notificationVisible = false;
        return;
    }

    notificationElement = document.createElement("div");
    notificationElement.classList.add('unavailable');
    notificationElement.textContent = message;
    document.body.append(notificationElement);
    notificationVisible = true;

    setTimeout(() => {
        if (notificationElement) {
            notificationElement.remove();
            notificationVisible = false;
            notificationElement = null;
        }
    }, 5000);
}

const unavailableButton = document.querySelector('.menu__item--not');

unavailableButton.addEventListener("click", () => showNotification("Function is temporarily unavailable."));

const translations = {
    lat: {
        title: "Rīgas Melnais Balzams™",
        brand: "AS \"Amber Latvijas balzams\"",
        gln: "GLN: 0000000000000",
        gtin: "GTIN: 0000000000000",
        original: "RĪGAS MELNAIS BALZAMS ORIĢINĀLAIS",
        alcoholContent: "45% 70cl / 700 ml",
        productInfo: "INFORMĀCIJA PAR PRODUKTU",
        productDescription: "Tradicionāls Latvijas balzams (galvaspilsēta ir Rīga) no, iespējams, vecākā rūgtā alus zīmola pasaulē, ņemot vērā, ka tā pirmsākumi meklējami 1752. gadā. Pirms vairāk nekā 260 gadiem kāds farmaceits vārdā Kunze izstrādāja slaveno recepti, izmantojot 24 dabīgu sastāvdaļu maisījumu, tostarp baldriānu, vērmeli, melnos piparus un ingveru, kā arī retāk sastopamus augus, piemēram, genciānu un Peru balzamiko eļļu.",
        healthHeader: "ALKOHOLS & VESELĪBA",
        healthDescription: "Alkohola lietošana var izraisīt veselības problēmas. Regulāra pārmērīga alkohola lietošana ir saistīta ar vairākām slimībām, tostarp aknu slimībām, paaugstinātu asinsspiedienu un dažu veidu vēzi. Dažos zinātniskos pētījumos ir konstatēta saistība starp vieglu vai mērenu alkohola lietošanu un palielinātu krūts vēža risku sievietēm. Vēzis ir sarežģīta slimība, ko ietekmē daudzi faktori, un alkohola lietošana ir viens no tiem. Ja jums ir jautājumi par alkohola lietošanu un tā ietekmi uz jūsu veselību, konsultējieties ar veselības aprūpes speciālistu. Turklāt nepilngadīgām personām, grūtniecēm un citām personām, kurām veselības aprūpes speciālisti ir ieteikuši nedzert, nevajadzētu lietot alkoholu. Šajā sadaļā parādītā informācija ir sniegta tikai informatīvos un izglītojošos nolūkos, un tā nav uzskatāma par medicīnisku padomu, diagnozi vai ārstēšanu. Šīs sadaļas saturs var tikt periodiski atjaunināts.",
        awards: "Rīgas Melnais balzams ir ieguvis vairāk nekā 100 starptautisku apbalvojumu. Iespējams, jūs nekad mūžā neesat nogaršojuši neko līdzīgu, tāpēc noteikti ir vērts to izmēģināt?",
        responsibleDrinkingHeader: "ATBILDĪGA DZERŠANA",
        responsibleDrinkingDescription: "Cik mums zināms, jūsu valsts veselības aprūpes iestādes nav izdevušas ieteikumus par zema riska alkohola lietošanu. Aplūkojot daudzu pasaules valstu veselības aizsardzības iestāžu izdotās vadlīnijas, vairumā no tām sievietēm tiek ieteikts nepārsniegt 1 līdz 1,5 standarta dzērienus dienā, bet vīriešiem - 2 līdz 2,5 standarta dzērienus dienā. Lielākajā daļā valstu, kuras ir izdevušas zema riska alkohola patēriņa vadlīnijas, standarta dzēriens ir vienāds ar 10 g tīra alkohola.",
        ingredientsHeader: "SASTĀVDAĻAS & IZCELSME",
        ingredientsDescription: "Etilspirts, ūdens, karamelizēts cukurs, augu valsts izejvielu ekstrakts (etilspirts, ūdens, bērza pumpuri, genciāna sakne, vērmeles, piparmētra, ingvera sakne, baldriāna sakne, kalmju sakne, melisa, liepu ziedi, ozola miza, asinszāle, melnie pipari, pomeranču miza, puplakši, muskatrieksti), brandy, cukura sīrups (cukurs, ūdens), žāvētu melleņu ekstrakts (etilspirts, ūdens, žāvētas mellenes), koncentrēta aveņu sula, dabīgs medus aromatizētājs, dabīgs aromatizētājs “Peru balsam”.",
        nutritionHeader: "UZTURVĒRTĪBAS FAKTI",
        nutritionFact1: "Tauki tostarp",
        nutritionFact2: "Piesātinātās taukskābes",
        nutritionFact3: "Ogļhidrāti tostarp (g)",
        nutritionFact4: "Cukuri (g)",
        nutritionFact5: "Olbaltumvielas (g)",
        nutritionFact6: "Sāls (g)",
        portionHeader: "PATĒRIŅA VIENĪBA",
        portionUnit1: "PORCIJA(S)",
        portionUnit2: "MILILITRI",
        allergyHeader: "ALERĢIJAS INFORMĀCIJA",
        allergyInfo: "Etilspirts, karamelizēts cukurs, bērzu pumpuri, genciānas sakne, vērmeles sakne, piparmētra, ingvera sakne, baldriāna sakne, akerbijas sakne, melisa, liepu ziedi, ozola miza, asinszāle, melnie pipari, apelsīna miziņa, pupiņas, muskatrieksts, mellenes, aveņu sula, dabīgs medus aromatizētājs, dabīgs aromāts “Peru balsam”.",
        recyclingHeader: "INFORMĀCIJA PAR PĀRSTRĀDI",
        tastingNotesHeader: "DEGUSTĀCIJAS PIEZĪMES",
        tastingNotes: "Aizraujoša un elpu aizraujoša pieredze ar daudzveidīgu garšu. Gluds un vienlaikus rūgts. Izbaudiet nearomatizētu vai kokteiļos pēc izvēles.",
        creationProcess: "Lai radītu Rīgas Melno balzamu, šīs augu izcelsmes vielas tiek iepildītas spirta un ūdens maisījumā, izmantojot “unikālu vienas mucas infūzijas tehnoloģiju”, ko zīmols dēvē par unikālu. Kad ir iegūta “Rīgas Melnā balzama esence”, šķidrums tiek sajaukts ar pārējām sastāvdaļām, piemēram, medu un karameli. Pēc tam to iepilda dabīgā māla pudelē. Pirmos sešus mēnešus pēc iepildīšanas pudelēs Melnā balzama garša attīstās, sastāvdaļām mijiedarbojoties ar mālu.",
        consumptionHeader: "PATĒRIENS",
        consumptionUse1: "Izbaudiet šotos, kas uzklāti uz biezas sulas (piemēram, mango, persiku, banānu).",
        consumptionUse2: "Sajauc ar kolu, limonādi vai ķiršu dzērienu.",
        consumptionUse3: "Lieliska piedeva jebkura veida kokteiļiem.",
        specialtyDrinksHeader: "PARAKSTA DZĒRIENI",
        blackAndStormyUnit1: "Rīgas Melnais balzams",
        blackAndStormyUnit2: "Rīgas melnais degvīns",
        blackAndStormyUnit3: "Cukura sīrups",
        blackAndStormyUnit4: "Ingvera alus",
        blackAndStormyUnit5: "Laima sula",
        blackAndStormy: "Piepildiet glāzi ar ledu un visām sastāvdaļām, izņemot Rīgas Melno Balzamu. Kokteili samaisa un pārlej ar Rīgas Melno balzamu, lai izveidotu tumšu kārtu. Dekorējiet ar piparmētru lapiņām, laima šķēlīti un pārkaisiet ar pūdercukuru.",
        blackShooterUnit1: "Rīgas Melnais balzams",
        blackShooterUnit2: "Persiku sula",
        blackShooter: "Ielej persiku sulu glāzē. Lēnām pievienojiet Rīgas Melno balzamu, uzlejot uz karotes aizmugures.",
    },
    eng: {
        title: "Riga Black Balsam™",
        brand: "AS \"Amber Latvijas balzams\"",
        gln: "GLN: 0000000000000",
        gtin: "GTIN: 0000000000000",
        original: "RIGAS BLACK BALSAM ORIGINAL",
        alcoholContent: "45% 70cl / 700 ml",
        productInfo: "PRODUCT INFORMATION",
        productDescription: "Traditional Latvian balsam (the capital is Riga) from perhaps the oldest bitter beer brand in the world, dating back to 1752. More than 260 years ago, a pharmacist named Kunze developed the famous recipe using a blend of 24 natural ingredients, including valerian, wormwood, black pepper and ginger, as well as less common herbs such as gentian and Peruvian balsamic oil.",
        healthHeader: "ALCOHOL & HEALTH",
        healthDescription: "Drinking alcohol can cause health problems. Regular heavy drinking is linked to a number of diseases, including liver disease, high blood pressure and some cancers. Some scientific studies have found a link between light to moderate alcohol consumption and an increased risk of breast cancer in women. Cancer is a complex disease influenced by many factors, alcohol consumption being one of them. If you have questions about alcohol consumption and its effects on your health, consult a healthcare professional. In addition, under-age people, pregnant women and others who have been advised not to drink by health professionals should not drink alcohol. The information in this section is provided for informational and educational purposes only and does not constitute medical advice, diagnosis or treatment. The contents of this section may be updated from time to time.",
        awards: "Riga Black Balsam has won more than 100 international awards. Perhaps you've never tasted anything like it in your life, so it's definitely worth a try?",
        responsibleDrinkingHeader: "RESPONSIBLE DRINKING",
        responsibleDrinkingDescription: "To our knowledge, your national health authorities have not issued advice on low-risk drinking. Looking at the guidelines issued by health authorities in many countries around the world, most of them recommend that women should not exceed 1 to 1.5 standard drinks per day and men 2 to 2.5 standard drinks per day. In most countries that have issued low-risk drinking guidelines, a standard drink is equal to 10 g of pure alcohol.",
        ingredientsHeader: "INGREDIENTS & ORIGIN",
        ingredientsDescription: "Ethyl alcohol, water, caramelised sugar, herbal extract (ethyl alcohol, water, birch buds, gentian root, wormwood, mint, ginger root, valerian root, calamus root, melissa, lime blossom, oak bark, St John's wort, black pepper, orange peel, bean, nutmeg), brandy, sugar syrup (sugar, water), dried blueberry extract (ethyl alcohol, water, dried blueberries), concentrated raspberry juice, natural honey flavouring, natural flavouring for 'Peruvian voice'.",
        nutritionHeader: "NUTRITION FACTS",
        nutritionFact1: "Fat including",
        nutritionFact2: "Saturated fatty acids",
        nutritionFact3: "Carbohydrate incl. (g)",
        nutritionFact4: "Sugar (g)",
        nutritionFact5: "Protein (g)",
        nutritionFact6: "Salt (g)",
        portionHeader: "CONSUMPTION UNIT",
        portionUnit1: "PORTION(S)",
        portionUnit2: "MILLILITERS",
        allergyHeader: "ALLERGY INFORMATION",
        allergyInfo: "Ethyl alcohol, caramelised sugar, birch buds, gentian root, wormwood root, peppermint, ginger root, valerian root, acerbia root, melissa, lime blossom, oak bark, St John's wort, black pepper, orange peel, beans, nutmeg, blueberries, raspberry juice, natural honey flavour, natural flavour \"Peruvian voice\".",
        recyclingHeader: "RECYCLING INFORMATION",
        tastingNotesHeader: "TASTING NOTES",
        tastingNotes: "An exciting and breathtaking experience with a variety of flavours. Smooth and bitter at the same time. Enjoy unflavoured or in cocktails of your choice.",
        creationProcess: "To create Riga Black Balsam, these botanicals are infused into a mixture of alcohol and water using what the brand calls a 'unique single-barrel infusion technology'. Once the 'essence of Riga Black Balsam' is obtained, the liquid is mixed with the other ingredients, such as honey and caramel. It is then bottled in a natural clay bottle. For the first six months after bottling, the flavour of the Black Balsam develops as the ingredients interact with the clay.",
        consumptionHeader: "CONSUMPTION",
        consumptionUse1: "Enjoy these on thick juice (e.g. mango, peach, banana). Mix with cola, lemonade or cherry drink. A great accompaniment to any type of cocktail.",
        consumptionUse2: "Mix with cola, lemonade or cherry drink.",
        consumptionUse3: "A great accompaniment to any type of cocktail.",
        specialtyDrinksHeader: "SPECIALITY DRINKS",
        blackAndStormyUnit1: "Riga Black Balsam",
        blackAndStormyUnit2: "Riga Black Vodka",
        blackAndStormyUnit3: "Sugar syrup",
        blackAndStormyUnit4: "Ginger beer",
        blackAndStormyUnit5: "Lime juice",
        blackAndStormy: "Fill the glass with ice and all ingredients except Riga Black Balsam. Stir the cocktail and pour over the Riga Black Balsam to create a dark layer. Garnish with mint leaves, a slice of lime and a sprinkle of icing sugar.",
        blackShooterUnit1: "Riga Black Balsam",
        blackShooterUnit2: "Peach juice",
        blackShooter: "Pour peach juice into a glass. Slowly add the Riga Black Balsam, pouring on the back of a spoon.",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById("lang-toggle");
    const languages = document.querySelector(".languages");
    const cross = document.querySelector(".languages__cross");
    const langItems = document.querySelectorAll(".chooseLang__item");

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
            const langCode = item.getAttribute('data-i18n');
            langToggle.textContent = `${langCode.toUpperCase()} ▾`;

            changeLanguage(langCode);
            languages.style.display = "none";
            document.body.style.overflow = ''
        });
    });
});

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

changeLanguage('lat');

document.getElementById('lang-eng').addEventListener('click', () => {
    changeLanguage('eng');
    document.querySelector(".languages").style.display = "none";
    document.body.style.overflow = '';
});

document.getElementById('lang-lat').addEventListener('click', () => {
    changeLanguage('lat');
    document.querySelector(".languages").style.display = "none";
    document.body.style.overflow = '';
});