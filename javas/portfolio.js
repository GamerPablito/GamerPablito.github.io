// Portfolio Building
/**
 * @typedef {Object} proyect - Just a type to parse portfolio correctly
 * @prop {string} title - The name of the project
 * @prop {string[]} descripts - The descriptions this project counts with
 * @prop {string} link - The link to the project showup
 */

/** @type {proyect[]} */
var projects = [
    {
        title: "GameJolt Client for HaxeFlixel",
        descripts: [
            'Inspired in TentaRJ\'s adaptation, I decided to make an adaptation with similar functionality but made from zero and with original stuff from me',
            'I wanted to make this in order to help those users whose acknowledge about coding is kinda low and want to implement something like this in their mods or HaxeFlixel games'
        ],
        link: "https://github.com/GamerPablito/HaxeGJClient"
    }
];

var daSection = document.getElementById('works');
for (var i = 0; i < projects.length; i++) {
    var daTable = document.createElement('table');
    var daTitle = document.createElement('h2');
    var daMedia = document.createElement('a');
    var daProject = projects[i];

    daTitle.innerText = daProject.title;
    daMedia.href = daProject.link;
    daMedia.appendChild(daTitle);
    daSection.appendChild(daMedia);

    for (var j = 0; j < daProject.descripts.length; j++) {
        var daComment = daProject.descripts[j];

        var daRow = document.createElement('tr');
        var daImg = document.createElement('img');
        var daImgCell = document.createElement('td');
        var daInfoCell = document.createElement('td');

        daImg.src = `portfolio/${i + 1}_${j + 1}.png`;
        daImgCell.appendChild(daImg);
        daInfoCell.innerText = daComment;

        daRow.appendChild(daImgCell);
        daRow.appendChild(daInfoCell);
        daTable.appendChild(daRow);
    }

    daSection.appendChild(daTable);
}