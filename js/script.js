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

    "tic-dec-toe": `
        <section id="individual-project" class="individual-project">
            <div class="text">Tic-Dec-Toe</div>
            <div class="shortDesc">A 4x4 twist on Tic-Tac-Toe featuring kindergarteners and cards with unique effects.</div>
            <div class="divider"></div>
            <div class= "main-pic"><img src="assets/TicDecToeMenu.png" alt="Tic-Dec-Toe main menu"></div>

            <div class="project-details">
            <div>
                <h3>Role</h3>
                <p>Gameplay Programmer & UI/UX Designer</p>
            </div>
            <div>
                <h3>Team</h3>
                <p>5 Computer Science Students</p>
            </div>
            <div>
                <h3>Technology</h3>
                <p>C++, DigiPen Game Library</p>
            </div>
            <div>
                <h3>Project Type</h3>
                <p>Team Game Project</p>
            </div>
        </div>

            <!-- PROJECT OVERVIEW -->
    <section class="case-study-section">
        <h2>01 / Overview</h2>

        <p>
            Tic-Dec-Toe is a turn-based game developed as part
            of a five-person team of Computer Science students
            during my freshman year at DigiPen Institute of
            Technology.
        </p>

        <p>
            Inspired by the simplicity of traditional
            tic-tac-toe, the game expands the experience into
            a 4x4 grid. Featuring playful character voices,
            colorful cards, and a familiar game concept,
            Tic-Dec-Toe aims to make strategy approachable
            and entertaining for younger players.
        </p>
    </section>


    <!-- MY CONTRIBUTIONS -->
    <section class="case-study-section">
        <h2>02 / My Contributions</h2>

        <p>
            As a programmer and UI/UX designer, I worked across
            both the technical and visual aspects of the game.
            My responsibilities included:
        </p>

        <div class="contribution-grid">

            <article class="contribution-card">
                <h3>UI/UX Development</h3>
                <p>
                    Designed and implemented the game's menus
                    and interface, focusing on intuitive
                    navigation and player accessibility.
                </p>
                <img
                    src="YOUR_MENU_IMAGE_PATH"
                    alt="Tic-Dec-Toe menu interface"
                />
            </article>

            <article class="contribution-card">
                <h3>Interface Programming</h3>
                <p>
                    Developed interactive interface elements
                    using C++ and DigiPen's Graphics Library (DGL).
                </p>
                <img
                    src="YOUR_UI_IMAGE_PATH"
                    alt="Tic-Dec-Toe user interface"
                />
            </article>

            <article class="contribution-card">
                <h3>Pixel Art & Visual Design</h3>
                <p>
                    Created pixel art assets that helped
                    establish the game's playful visual
                    identity.
                </p>
                <img
                    src="YOUR_ART_IMAGE_PATH"
                    alt="Tic-Dec-Toe pixel art assets"
                />
            </article>

            <article class="contribution-card">
                <h3>Game Presentation</h3>
                <p>
                    Implemented supporting screens, including
                    the credits, to complete the overall
                    player experience.
                </p>
                <img
                    src="YOUR_CREDITS_IMAGE_PATH"
                    alt="Tic-Dec-Toe credits screen"
                />
            </article>

        </div>
    </section>


    <!-- DEVELOPMENT PROCESS -->
    <section class="case-study-section">
        <h2>03 / Development Process</h2>

        <p>
            Working in a small team meant collaborating across
            different areas of development while ensuring
            individual contributions came together into a
            cohesive experience.
        </p>

        <p>
            I focused on bridging the technical and visual
            sides of development, translating interface
            designs into functional systems while considering
            how players would interact with the game.
        </p>

        <!-- Optional: Add development screenshots here -->
        <figure class="development-image">
            <img
                src="YOUR_DEVELOPMENT_IMAGE_PATH"
                alt="Tic-Dec-Toe development process"
            />
            <figcaption>
                Development and implementation of Tic-Dec-Toe.
            </figcaption>
        </figure>
    </section>


    <!-- REFLECTION -->
    <section class="case-study-section">
        <h2>04 / What I Learned</h2>

        <p>
            Tic-Dec-Toe was one of my first experiences
            developing a complete game as part of a team.
            It helped me build a stronger foundation in C++
            and game development while introducing me to
            the importance of UI/UX design.
        </p>

        <p>
            More importantly, it taught me that game
            development extends beyond implementing
            mechanics. The way players navigate, understand,
            and interact with a game is just as important
            to the overall experience.
        </p>
    </section>

           

            

        </section>
    `,
    /*<div class="exe-container"></div>*/
    //< div class="project-description" >
    //            <h2>About the Project</h2>
    //            <p>
    //                Tic-Dec-Toe is a freshman team project developed
    //                by five Computer Science students.
    //            </p>

    //            <h2>My Contributions</h2>
    //            <p>
    //                I worked on UI/UX design and implementation for
    //                the menus, along with pixel art assets including
    //                playable characters and card designs.
    //            </p>

    //            <h2>Technologies</h2>
    //            <div class="skills">
    //                <span class="skill-tag">C/C++</span>
    //                <span class="skill-tag">Custom Engine</span>
    //                <span class="skill-tag">UI Programming</span>
    //                <span class="skill-tag">Menu Systems</span>
    //            </div>
    //        </div >

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


