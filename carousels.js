var characters = [
    "Angle",
    "Astronaut",
    "Boy",
    "Carpenter",
    "Caveman",
    "Chef",
    "Cowboy",
    "DemiGod",
    "DemiGoddess",
    "Diablo",
    "Entrepurner",
    "Explorer",
    "Girl",
    "Girl2",
    "Girl3",
    "Girl4",
    "GoldenKnight",
    "Handyman",
    "Herms",
    "Hippie",
    "Indian",
    "Invaderman",
    "Jamacain",
    "King",
    "Knight",
    "Lumberjack",
    "Madman",
    "Medic",
    "Ninja",
    "Original",
    "Pirate",
    "Princess",
    "Prisoner",
    "Pupil",
    "Refugee",
    "Robotic",
    "Sage",
    "Soldire",
    "Terminator",
    "Testerman",
    "TreeHugger",
    "Zeus",
    "Zombie"
];

function randomInt (min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// ! TODO: Make both of these able to use images added or removed etc..

function drawRandomChar () {
    var charactersLength = characters.length;
    var characterContainer = document.getElementById("character-carousel");
    var rand = randomInt(0, charactersLength);

    characterContainer.src = "./imgs/avatars/" + characters[rand] + ".png"
}

function drawRandomBanner () {
    // Make scalable
    var bannersLength = 113;
    var rand = randomInt(1, bannersLength);
    var bannerContainer = document.getElementById("banner-carousel");

    bannerContainer.src = "./imgs/BGScreen/" + rand + ".webp";
}
