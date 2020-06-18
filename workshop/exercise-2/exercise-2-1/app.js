// Preset values
const FROGS = 3;
let racers = [];

const track = document.getElementById('track');

//Exercise 2.1//

for (let  laneNumber= 1; laneNumber <= FROGS; laneNumber++) {
    const lane = document.createElement('li');
    track.appendChild(lane);

    let number = document.createElement('span');
    number.innerText = laneNumber;
    lane.appendChild(number);

    lane.id = `frog-${laneNumber}`;
}

//Exercise 2.2//

for (let i = 0; i < FROGS; i++) {
    const froggies = frogStable[i]
    racers.push(froggies);
}

console.log(racers);

//Exercise 2.3//


racers.forEach(function (racer, id) {
const froggies = document.createElement('span');
froggies.innerText = `${racer.number}`;
froggies.classList.add('frog');
froggies.style.background = racer.color;
document.getElementById(`frog-${id + 1}`).appendChild(froggies);

racers[id].progress = 0;
racers[id].lane = `frog-${id + 1}`;

const frogP = document.createElement('span');
frogP.id = racers[id].name;
document.getElementById(`frog-${id + 1}`).appendChild(frogP);
});


