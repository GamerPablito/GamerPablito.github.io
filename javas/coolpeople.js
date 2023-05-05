// Main Icon Implementation
document.getElementById('pfp1').href = "https://pbs.twimg.com/media/FreRm5jXoAE4-pQ.jpg";

// Members and Sections to Track
/**
 * @typedef {Object} member - Just a format to parse member data into a certain group of tables
 * @prop {string} name - The name of the member
 * @prop {string} desc - The description of the member
 * @prop {string} linkMedia - A link to their social media
 * @prop {string} linkPic - A link to their PFP's url
 */

/** @type {string[]} */
const sections = ['artists', 'coders', 'musicians', 'vas'];

/** @type {member[][]} */
const members = [
    [
        {
            name: "Mari",
            desc: "An incredible artist who is always looking for ways to improve her drawing style, something very admirable of her, in my opinion",
            linkMedia: "https://twitter.com/Mari_chan1401",
            linkPic: "https://pbs.twimg.com/profile_images/1650581056532127755/p7a6xwCs_400x400.jpg"
        },
        {
            name: "Heartly",
            desc: "A furry artist who wants to progress more with her drawings, both in FNF and personal projects to go even further, this girl is pretty perseverant",
            linkMedia: "https://heartlyartist.carrd.co",
            linkPic: "https://pbs.twimg.com/profile_images/1637130247761014785/7wCnJVUj_400x400.jpg"
        },
        {
            name: "FleshSuit",
            desc: "The first person I've worked with since I'm in the FNF Community, also an amazing artist with a so-realistic art style, I'm pretty glad to met her",
            linkMedia: "https://twitter.com/FSSmithart",
            linkPic: "https://pbs.twimg.com/profile_images/1540707136358862850/14f41NUz_400x400.jpg"
        }
    ],
    [
        {
            name: "TentaRJ",
            desc: "A retired programmer who gave me great inspiration to create something totally new, I am and will always be very grateful with her about it",
            linkMedia: "https://twitter.com/TentaRJ",
            linkPic: "https://avatars.githubusercontent.com/u/72235309?v=4"
        }
    ],
    [
        {
            name: "CaliberKat",
            desc: "A cool friend of mine who makes amazing bangers of almost every kind of music, I really love this guy's creations",
            linkMedia: "https://twitter.com/caliberkat",
            linkPic: "https://pbs.twimg.com/media/Ft3kNnAWcAEJ69_.jpg"
        },
        {
            name: "ManuLiken",
            desc: "An amazing musician who likes to remix videogames themes as she likes to make original tunes all by herself, also a very funny and inspirational friend",
            linkMedia: "https://manuliken.carrd.co/",
            linkPic: "https://pbs.twimg.com/media/Fjxso_ZWYAEV_mV?format=jpg"
        }
    ],
    [
        {
            name: "Neen",
            desc: "A super talented girl who does a pretty good job when it comes to making soft and cute voices, she truly earned my eternal respect",
            linkMedia: "https://twitter.com/TakoNeen",
            linkPic: "https://pbs.twimg.com/profile_images/1645628310880411649/jTUBvJGh_400x400.jpg"
        }
    ]
];

// Items Formulation
for (var i = 0; i < sections.length; i++) {
    var daSection = document.getElementById(sections[i]);

    for (var j = 0; j < members[i].length; j++) {
        var daMember = members[i][j];
        var daRow = document.createElement('tr');
        var daMedia = document.createElement('a');
        var daImg = document.createElement('img');
        var daImgCell = document.createElement('td');
        var daTitle = document.createElement('h2');
        var daInfoCell = document.createElement('td');

        daImg.src = daMember.linkPic;
        daImg.alt = `${daMember.name}'s PFP`;
        daMedia.href = daMember.linkMedia;
        daMedia.appendChild(daImg);
        daImgCell.appendChild(daMedia);
        daTitle.innerText = daMember.name;
        daInfoCell.appendChild(daTitle);
        daInfoCell.innerHTML += "\n" + daMember.desc + ".";

        daRow.appendChild(daImgCell);
        daRow.appendChild(daInfoCell);

        daSection.appendChild(daRow);
    }
}