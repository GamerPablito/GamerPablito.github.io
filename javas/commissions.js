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
        service: "Bug Fixing (Basic)",
        desc: "Code Corrections\n(for compilation)",
        price: 8
    },
    {
        service: "Bug Fixing (Advanced)",
        desc: "Code Corrections\n(for a menu/element/class better performance)",
        price: 15
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

    daService.appendChild(daTitle);
    daElement.appendChild(daService);
    daElement.appendChild(daDesc);
    daElement.appendChild(daPrice);
    daTable.appendChild(daElement);
}