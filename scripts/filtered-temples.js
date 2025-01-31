document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleString();

    const temples = [
        {
            name: "Portland Oregon Temple",
            location: "Portland, Oregon",
            dedicated: "2000-01-01",
            area: 105000,
            image: "images/temp1-portland.jpg",
        },
        {
            name: "St. George Utah Temple",
            location: "St. George, Utah",
            dedicated: "1877-04-06",
            area: 30000,
            image: "images/temp2-stgeorge.jpg",
        },
        {
            name: "Bountiful Utah Temple",
            location: "Bountiful, Utah",
            dedicated: "1995-01-01",
            area: 51000,
            image: "images/temp3-bountiful.jpg",
        },
        {
            name: "Madrid Spain Temple",
            location: "Madrid, Spain",
            dedicated: "1999-05-20",
            area: 84000,
            image: "images/temp4-madrid.jpg",
        },
        {
            name: "Campinas Brazil Temple",
            location: "Campinas, Brazil",
            dedicated: "2002-04-14",
            area: 58000,
            image: "images/temp5-campinas.jpg",
        },
        {
            name: "Johannesburg South Africa Temple",
            location: "Johannesburg, South Africa",
            dedicated: "1985-04-27",
            area: 52000,
            image: "images/temp6-johannesburg.jpg",
        },
        {
            name: "San Diego California Temple",
            location: "San Diego, California",
            dedicated: "2007-01-01",
            area: 90000,
            image: "images/temp7-sandiego.jpg",
        },
        {
            name: "Manila Philippines Temple",
            location: "Manila, Philippines",
            dedicated: "1984-02-14",
            area: 31000,
            image: "images/temp8-manila.jpg",
        },
        {
            name: "Kona Hawaii Temple",
            location: "Kona, Hawaii",
            dedicated: "2000-06-01",
            area: 24000,
            image: "images/temp9-kona.jpg",
        },
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah",
            dedicated: "1893-04-06",
            area: 150000,
            image: "images/temp10-saltlake.jpg",

        },
        {
            name: "Los Angeles California Temple",
            location: "Los Angeles, California",
            dedicated: "1955-01-11",
            area: 117000,
            image: "images/temp11-losangeles.jpg",
        },
        {
            name: "Tucson Arizona Temple",
            location: "Tucson, Arizona",
            dedicated: "2017-12-17",
            area: 40000,
            image: "images/temp12-tucson.jpg",
        }
    ];

    const displayTemples =(templesArray) => {
        const templeContainer = document.getElementById('temple-cards');
        templeContainer.innerHTML = '';

        templesArray.forEach(temple => {
            const templeCard = document.createElement('article');
            templeCard.classList.add('temple-card');
            templeCard.innerHTML= `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            `;
            templeContainer.appendChild(templeCard);
        });
    };

    const navigationLinks = document.querySelectorAll('.navigation a');
    navigationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');

            let filteredTemples;
            
            switch (filter) {
                case 'old':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                    break;
                case 'new':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                    break;
                case 'large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                default:
                    filteredTemples = temples;
            }
            displayTemples(filteredTemples);
        });

        const menuButton = document.getElementById('menu');
        menuButton.addEventListener('click', () => {
            const navigationMenu = document.querySelector('.navigation');
            navigationMenu.classList.toggle('open');
        });

    });

    displayTemples(temples);
});