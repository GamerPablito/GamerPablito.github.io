var daTable = document.getElementById('services');

/**
 * @typedef {Object} commission
 * @prop {string} service
 * @prop {string} desc
 * @prop {number} price
 */

/** @type {commission[]} */
var services = [
    {
        service: "Compiled Build for Windows",
        desc: "Just a compiled build of your mod for Windows\nNot a big deal",
        price: 5
    },
    {
        service: "Easter Egg",
        desc: "Add a cool and/or funny feature into your mod",
        price: 10
    },
    {
        service: "Custom Menu Layout",
        desc: "An improved menu design with the assets you give to me\n(1 menu)",
        price: 10
    },
    {
        service: "Modcharting",
        desc: "A modchart for 1 song according to your description\n(Restrictions may apply)",
        price: 10
    },
    {
        service: "Game Mechanic",
        desc: "A custom mechanic for 1 or many songs\n(Restrictions may apply)",
        price: 10
    },
    {
        service: "Bug Fixing (Basic)",
        desc: "Lesser code corrections\n(for compiling or better functionality)",
        price: 10
    },

    {
        service: "Bug Fixing (Advanced)",
        desc: "Greater code Corrections\n(for a menu/element/class better performance)",
        price: 15
    },
    {
        service: "Port to Another Engine Version",
        desc: "Move your mod to another version\n(latest or better)",
        price: 15
    },
    {
        service: "Basic Modding",
        desc: "1 week (all songs)\nCharacters Setup\n1 Stage Setup\nDeath Screen Setup (Sprites)",
        price: 20
    },
    {
        service: "GameJolt Implementation",
        desc: "I'm gonna implement GameJolt platform in your mod\n(along with trophies, menus, and such)",
        price: 35
    },
    {
        service: "Standard Modding",
        desc: "3 weeks (all songs)\nCharacters Setup\nAll Stages Setup\nUI Design\nDeath Screen Setup (Sprites and SFX)\nCustom presentation in Story Mode",
        price: 50
    },
    {
        service: "Advanced/General Modding",
        desc: "I'll take care of everything the mod needs to be delightful!\n(I'll do my best, that's for sure)",
        price: 80
    }
];

for (var i = 0; i < services.length; i++) {
    var daElement = document.createElement('tr');
    var daService = document.createElement('td');
    var daTitle = document.createElement('strong');
    var daDesc = document.createElement('td');
    var daPrice = document.createElement('td');
    var curService = services[i];

    daTitle.innerText = curService.service;
    daDesc.innerText = curService.desc;
    daPrice.innerText = `$${curService.price}`;
    daPrice.id = "price";

    daService.appendChild(daTitle);
    daElement.appendChild(daService);
    daElement.appendChild(daDesc);
    daElement.appendChild(daPrice);
    daTable.appendChild(daElement);
}