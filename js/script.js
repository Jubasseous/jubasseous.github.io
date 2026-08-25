/*dark and light mode*/
const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    }
    else {
        modeText.innerText = "Dark Mode";
    }
});

/*stickers coming in*/

const home = document.querySelector(".home");
const stickers = document.querySelectorAll(".sticker");

//container
const placedStickers = [];
//minimum distances for too close and too center
const minDist = 250;
const minDistCenter = 500;
const centerY = home.clientHeight / 2;
const centerX = home.clientWidth / 2;


stickers.forEach(sticker => {

    // Random final position
    let x;
    let y;
    let centerDistX;
    let centerDistY;
    let tooClose = true;
    let tooCenter = true;

    while (tooClose || tooCenter) {
        x = Math.random() * (home.clientWidth - 250);
        y = Math.random() * (home.clientHeight - 250);

        //work to see if it overlaps with the typewriter center
        centerDistX = x - centerX;
        centerDistY = y - centerY;

        const distance = Math.sqrt(centerDistX * centerDistX + centerDistY * centerDistY);
        tooCenter = distance < minDistCenter;

        //work to see if they are too close to each 
        tooClose = placedStickers.some(position => {
            const dx = x - position.x;
            const dy = y - position.y;

            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < minDist;
        });

    }

    //remember this sticker's position
    placedStickers.push({ x, y });

    //random rotation in the range of -30 to 30
    let rotation = Math.random() * 60 - 30;

    //don't let it not have a rotation
    while (rotation == 0)
    {
        rotation = Math.random() * 60 - 30;
    }

    //apply final position
    sticker.style.left = `${x}px`;
    sticker.style.top = `${y}px`;

    //apply rotation
    sticker.style.setProperty("--rotation", `${rotation}deg`);

    //random animation delay
    sticker.style.animationDelay = `${Math.random()}s`;
});


/*typewriter*/
const element = document.querySelector(".typewriter p");
const text = element.textContent;

element.textContent = "";

let i = 0;

function type() {
    if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(type, 80);
    }
}

type();