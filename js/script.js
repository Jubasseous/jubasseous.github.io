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
                        src="assets/HedgeMagePause.png"
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
                     <a >
                        <img src="assets/HedgeMagePause.png"
                             alt="Hedge Mage Pause Menu">
                        <h2>Hedge Mage</h2>
                    </a>
                    <p>
                        A 2D puzzle adventure built with a custom engine.
                    </p>
                </li>
            </ul>
        </section>
    `,

    //"tic-dec-toe": `
    //    <section id="individual-project" class="individual-project">
    //        <div class="text">Tic-Dec-Toe</div>
    //        <div class="shortDesc">A 4x4 twist on Tic-Tac-Toe featuring kindergarteners and cards with unique effects.</div>
    //        <div class="divider"></div>
    //        <div class= "main-pic"><img src="assets/TicDecToeMenu.png" alt="Tic-Dec-Toe main menu"></div>


    //`,

    "tic-dec-toe": `
    <section id="individual-project" class="individual-project">

        <!-- Project Title -->
        <div class="text">Tic-Dec-Toe</div>

        <div class="shortDesc">
            A two-player twist on Tic-Tac-Toe featuring
            kindergarteners and cards with unique effects.
        </div>

        <div class="divider"></div>

        <!-- Main Project Image -->
        <div class="main-pic">
            <img src="assets/TicDecToeMenu.png"
                 alt="Tic-Dec-Toe main menu">
        </div>

        <!-- Project Details -->
        <div class="project-info">
            <div class="project-stat">
                <h3>ROLE</h3>
                <p>Programmer & UI/UX Designer</p>
            </div>

            <div class="project-stat">
                <h3>TEAM</h3>
                <p>5 Computer Science Students</p>
            </div>

            <div class="project-stat">
                <h3>DURATION</h3>
                <p>One Semester</p>
            </div>

            <div class="project-stat">
                <h3>TECHNOLOGY</h3>
                <p>C++ / DigiPen Game Library</p>
            </div>
        </div>

        <!-- Overview -->
        <div class="project-section">
            <h2>01 / Overview</h2>

            <p>
                Tic-Dec-Toe is a two-player competitive game
                developed over the course of one semester
                as part of a five-person team of Computer
                Science students at DigiPen Institute of
                Technology.
            </p>

            <p>
                Putting a twist on the familiar game of
                Tic-Tac-Toe, the game expands the traditional
                3x3 board into a 4x4 grid. Players compete
                against one another using cards with unique
                effects, adding another layer of strategy
                to the experience.
            </p>

            <p>
                Featuring playful kindergarten-inspired
                characters and colorful visuals, the game
                puts a fun spin on a familiar classic.
            </p>
        </div>

        <!-- My Contributions -->
        <div class="project-section">
            <h2>02 / My Contributions</h2>

            <p>
                I contributed to both the technical and
                visual aspects of the project, focusing
                primarily on programming and UI/UX design.
            </p>

            <div class="project-contributions">

                <div class="contribution">
                    <h3>UI/UX Development</h3>
                    <p>
                        Designed and implemented the game's
                        menus and interface, focusing on
                        intuitive navigation and a cohesive
                        player experience.
                    </p>
                    <img src="assets/TicDecToeMenu.png"
                         alt="Tic-Dec-Toe menu">
                </div>

                <div class="contribution">
                    <h3>Programming</h3>
                    <p>
                        Used C++ and DigiPen's game
                        development library to implement
                        interactive interface elements
                        and supporting game systems.
                    </p>
                </div>

                <div class="contribution">
                    <h3>Pixel Art & Visual Design</h3>
                    <p>
                        Created pixel art assets that
                        contributed to the game's playful
                        visual identity.
                    </p>
                </div>

                <div class="contribution">
                    <h3>Game Presentation</h3>
                    <p>
                        Implemented supporting screens,
                        including the credits, to help
                        complete the overall experience.
                    </p>
                </div>

            </div>
        </div>

        <!-- Development -->
        <div class="project-section">
            <h2>03 / Development Process</h2>

            <p>
                Developing a complete game within one
                semester required collaboration and
                coordination across a five-person team.
                We worked together to bring the gameplay,
                visuals, and interface into one cohesive
                experience.
            </p>

            <p>
                My work focused on connecting the technical
                and visual sides of development, translating
                interface designs into functional systems
                while considering how players would interact
                with the game.
            </p>
        </div>

        <!-- Reflection -->
        <div class="project-section">
            <h2>04 / What I Learned</h2>

            <p>
                Tic-Dec-Toe was one of my first experiences
                developing a complete game as part of a team.
                It helped strengthen my foundation in C++
                and introduced me to the importance of
                designing interfaces alongside gameplay.
            </p>

            <p>
                The project taught me that game development
                extends beyond implementing mechanics.
                The way players navigate, understand, and
                interact with a game is equally important
                to the overall experience.
            </p>
        </div>

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
    <section class="page resume-page">
        <div class="text">Jubilee's Character Sheet...</div>

        <div class="pdf-viewer">
            <iframe
                src="assets/Jubilee_Garcia_Resume.pdf"
                title="Jubilee Garcia Resume"
                loading="lazy">
            </iframe>
        </div>

        <div class="pdf-download">
            <a href="assets/Jubilee_Garcia_Resume.pdf"
               target="_blank"
               rel="noopener">
                Open PDF in New Tab
            </a>

            <a href="assets/Jubilee_Garcia_Resume.pdf"
               download="Jubilee-Garcia-Resume.pdf">
                Download Resume
            </a>
        </div>
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
//const cardTicDecToe = document.querySelector(".TicDecToe.card img");

//cardTicDecToe.addEventListener("click", () => {
//    window.location.href = "ticdectoe.html";
//});


