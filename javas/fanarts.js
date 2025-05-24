// Image processing
var imgSection = document.getElementById('fanarts');

/**
 * @typedef {Object} Authors
 * @prop {string} name
 * @prop {string} link
 */
/** @type {Authors[]} */
var authors = [
    {
        name: 'GalaxyGamerGirl',
        link: 'https://twitter.com/GalaxyGamerGi10'
    },
    {
        name: 'Twiszster',
        link: 'https://twitter.com/skodnep'
    },
    {
        name: 'nookoshi',
        link: 'https://twitter.com/nookoshi'
    },
    {
        name: 'sprinklepuff370',
        link: 'https://twitter.com/sprinklepuff370'
    },
    {
        name: 'ElFadicVT',
        link: 'https://twitter.com/FadicVT'
    },
    {
        name: 'beautagicannie',
        link: 'https://twitter.com/beautagicannie'
    },
    {
        name: 'Ruvbon',
        link: 'https://twitter.com/hoothootbon'
    },
    {
        name: 'Bloo',
        link: 'https://twitter.com/boolbler'
    },
    {
        name: 'Sylix (RgGaming)',
        link: 'https://twitter.com/RgMakesArt'
    },
    {
        name: 'MemsterBunny',
        link: 'https://twitter.com/MemsterBunny'
    },
    {
        name: 'Officer_Sam',
        link: 'https://twitter.com/SamtiktokNewac1'
    },
    {
        name: 'Vaderlings',
        link: 'https://twitter.com/vaderlings'
    },
    {
        name: 'MemsterBunny',
        link: 'https://twitter.com/MemsterBunny'
    },
    {
        name: 'Waffle_Modder',
        link: 'https://twitter.com/Waffle_Modder'
    },
    {
        name: 'WhoCigs_',
        link: 'https://twitter.com/WhoCigs_'
    },
    {
        name: 'Mari',
        link: 'https://twitter.com/Mari_Chan1401'
    },
    {
        name: 'Galaxy N.G.',
        link: 'https://twitter.com/gianela_quispe'
    },
    {
        name: 'Azuko',
        link: 'https://www.fiverr.com/azuko0'
    },
    {
        name: 'FoxGamin21',
        link: 'https://twitter.com/foxgamin_'
    },
    {
        name: 'sprinklepuff370',
        link: 'https://twitter.com/sprinklepuff370'
    },
    {
        name: 'conno_conito',
        link: 'https://www.instagram.com/conno_conito_2.0'
    },
    {
        name: 'AB_XP4',
        link: 'https://twitter.com/ab_xp4'
    },
    {
        name: 'Mari',
        link: 'https://twitter.com/Mari_Chan1401'
    },
    {
        name: 'Mari',
        link: 'https://twitter.com/Mari_Chan1401'
    },
    {
        name: 'beautagicannie',
        link: 'https://twitter.com/beautagicannie'
    },
    {
        name: "Snowfie",
        link: "https://x.com/WinterStar78"
    }
];

for (var i = authors.length - 1; i > 0; i--) {
    var newLink = document.createElement('a');
    var newImg = document.createElement('img');

    newImg.title = "Made by: " + authors[i].name;
    newImg.src = `fanarts/${i + 1}.png`;
    newLink.href = authors[i].link;
    newLink.appendChild(newImg);
    imgSection.appendChild(newLink);
}