// Main Icon Implementation
const pfpUrl = "fanarts/16.png";
var mainIcon = document.getElementById('pfp2');
mainIcon.src = pfpUrl;
mainIcon.width = mainIcon.height = 200;
mainIcon.title = "PFP by: Mari_chan1401";
mainIcon.onclick = (ev) => window.open('https://twitter.com/GamerPablito1');

// Creation of Main Buttons

const buttonNames = ['Portfolio', 'Commissions', 'Fanarts', "Space Trace"];
var buttonLinks = ['portfolio.html', 'commissions/index.html', 'fanarts/index.html', "https://gamejolt.com/games/fnf-space-trace/866969"];
var buttonNav = document.getElementById('buttons');

for (var i = 0; i < buttonLinks.length; i++) {
    var daAnchor = document.createElement('a');
    var daButton = document.createElement('button');

    daButton.type = "button";
    daButton.innerText = buttonNames[i];
    daAnchor.href = buttonLinks[i];
    if (i == buttonLinks.length - 1)
    {
        daButton.id = "st";
    }

    daAnchor.appendChild(daButton);
    buttonNav.appendChild(daAnchor);
}