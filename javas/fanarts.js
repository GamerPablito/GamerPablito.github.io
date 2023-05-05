// Image processing
var imgSection = document.getElementById('images');
var authors = [
    'GalaxyGamerGirl',
    'Twiszster',
    'nookoshi',
    'sprinklepuff370',
    'ElFadicVT',
    'magicbeautyani',
    'Ruvbon',
    'Bloo',
    'Sylix (RgGaming)',
    'MemsterBunny',
    'Officer_Sam',
    'Vaderlings',
    'MembsterBunny',
    'Waffle_Modder'
];
var authorMedia = [
    'https://twitter.com/GalaxyGamerGi10',
    'https://twitter.com/skodnep',
    'https://twitter.com/nookoshi',
    'https://twitter.com/sprinklepuff370',
    'https://twitter.com/FadicVT',
    'https://twitter.com/beautagicannie',
    'https://twitter.com/hoothootbon',
    'https://twitter.com/boolbler',
    'https://twitter.com/RgMakesArt',
    'https://twitter.com/MemsterBunny',
    'https://twitter.com/SamtiktokNewac1',
    'https://twitter.com/vaderlings',
    'https://twitter.com/MemsterBunny',
    'https://twitter.com/Waffle_Modder'
];

for (var i = 0; i < authorMedia.length; i++) {
    var newLink = document.createElement('a');
    var newImg = document.createElement('img');

    newImg.title = "Made by: " + authors[i];
    newImg.src = `fanarts/${i + 1}.png`;
    newLink.href = authorMedia[i];
    newLink.appendChild(newImg);
    imgSection.appendChild(newLink);
}