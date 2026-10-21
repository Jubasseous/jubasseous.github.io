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


//for Single Application Page
const app = document.getElementById("app-content");

// All pages are rendered inside this one container.
const pages = {
    home: `
        <section id="home" class="home">
            <div class="text">jubasseous.exe</div>

            <div class="exe-container">
                <div class="game-screen">
                    <div class="intro-text">
                        <p>New Character Unlocked:</p>
                    </div>

                    <div class="name">
                        <h1>Jubilee Garcia</h1>
                    </div>

                    <div class="typewriter game-text">
                        <p>Game Developer » Technical Designer</p>
                    </div>
                </div>

                <i class="bxf bx-joystick-button-alt icon dpad"></i>

                <div class="initial-buttons">
                    <img src="assets/Buttons.png" alt="Initial Buttons">
                </div>

                <div class="pua">
                    <img src="assets/Pua.png" alt="Flower Sticker">
                </div>
            </div>
        </section>

        <section id="projects" class="projects">
            <ul class="card-container">
                <li class="TicDecToe card">
                    <a href="#tic-dec-toe" data-route="tic-dec-toe">
                        <img
                            class="TicDecToe"
                            src="assets/MenuAnimation.gif"
                            alt="Tic-Dec-Toe Menu"
                        >
                        <h2>Tic-Dec-Toe</h2>
                    </a>

                    <p>
                        Think you know Tic-Tac-Toe? Now throw in
                        kindergarteners, a 4x4 grid, and cards with
                        unique effects. What do you get? Tic-Dec-Toe!
                    </p>

                    <div class="skills">
                        <span class="skill-tag">C/C++</span>
                        <span class="skill-tag">Custom Engine</span>
                        <span class="skill-tag">UI Programming</span>
                        <span class="skill-tag">Menu Systems</span>
                        <span class="skill-tag">Gameplay Programming</span>
                    </div>
                </li>

                <li class="HedgeMage card">
                    <img
                        class="HedgeMage"
                        src="assets/TicDecToeMenu.png"
                        alt="Hedge Mage"
                    >

                    <h2>Hedge Mage</h2>

                    <p>
                        A 2D puzzle adventure where a young wizard
                        navigates a hedge maze with a single fireball.
                    </p>

                    <div class="skills">
                        <span class="skill-tag">C/C++</span>
                        <span class="skill-tag">Custom Engine</span>
                        <span class="skill-tag">UI Programming</span>
                        <span class="skill-tag">Physics Programming</span>
                    </div>
                </li>
            </ul>
        </section>
    `,

    projects: `
        <section id="projects" class="projects">
            <div class="text">Select a Project!</div>

            <ul class="card-container">
                <li class="TicDecToe card">
                    <a href="#tic-dec-toe" data-route="tic-dec-toe">
                        <img src="assets/MenuAnimation.gif"
                             alt="Tic-Dec-Toe Menu">
                        <h2>Tic-Dec-Toe</h2>
                    </a>
                    <p>
                        A 4x4 twist on Tic-Tac-Toe featuring
                        kindergarteners and cards with unique effects.
                    </p>
                </li>

                <li class="HedgeMage card">
                    <h2>Hedge Mage</h2>
                    <p>
                        A 2D puzzle adventure built with a custom engine.
                    </p>
                </li>
            </ul>
        </section>
    `,

    "tic-dec-toe": `
        <section id="individual-project" class="individual-project">
            <div class="text">Tic-Dec-Toe</div>

            <div class="exe-container"></div>

            <img
                class="main-pic"
                src="assets/TicDecToeMenu.png"
                alt="Tic-Dec-Toe main menu"
            >

            <div class="project-description">
                <h2>About the Project</h2>
                <p>
                    Tic-Dec-Toe is a freshman team project developed
                    by five Computer Science students.
                </p>

                <h2>My Contributions</h2>
                <p>
                    I worked on UI/UX design and implementation for
                    the menus, along with pixel art assets including
                    playable characters and card designs.
                </p>

                <h2>Technologies</h2>
                <div class="skills">
                    <span class="skill-tag">C/C++</span>
                    <span class="skill-tag">Custom Engine</span>
                    <span class="skill-tag">UI Programming</span>
                    <span class="skill-tag">Menu Systems</span>
                </div>
            </div>

            <a href="#projects" data-route="projects">
                ← Back to Projects
            </a>
        </section>
    `,

    blog: `
        <section class="page">
            <h1>Blog</h1>
            <p>Coming soon!</p>
        </section>
    `,

    about: `
        <section class="page">
            <h1>About Me</h1>
            <p>Game Developer » Technical Designer</p>
        </section>
    `,

    resume: `
        <section class="page">
            <h1>Resume</h1>
            <p>Resume content coming soon!</p>
        </section>
    `,

    contact: `
        <section class="page">
            <h1>Contact</h1>
            <p>Contact information coming soon!</p>
        </section>
    `
};

function renderPage() {
    // Read the page name from the URL, e.g. #tic-dec-toe
    const route = window.location.hash.slice(1) || "home";

    // Fall back to Home if the route doesn't exist.
    app.innerHTML = pages[route] ?? pages.home;

    // Mark the active sidebar link.
    document.querySelectorAll(".menu-links a[data-route]")
        .forEach(link => {
            link.classList.toggle(
                "active",
                link.dataset.route === route
            );
        });

    // Start the page at the top after switching views.
    window.scrollTo(0, 0);
}

// Render when the URL changes, including Back/Forward navigation.
window.addEventListener("hashchange", renderPage);

// Render the initial view.
renderPage();


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

/*Card buttons*/
const cardTicDecToe = document.querySelector(".TicDecToe.card img");

cardTicDecToe.addEventListener("click", () => {
    window.location.href = "ticdectoe.html";
});


