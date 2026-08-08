const cartridges =
    document.querySelectorAll(".cartridge");

const screen =
    document.getElementById("game-screen");

const content =
    document.getElementById("content");

const close =
    document.getElementById("close");


const pages = {

    about: `
        <h1>ABOUT ME</h1>

        <p>
            Hey! I'm Jubilee — a computer science
            and game development student.
        </p>
    `,

    projects: `
        <h1>PROJECTS</h1>

        <p>
            Engine programming, graphics,
            gameplay systems, and experiments.
        </p>
    `,

    games: `
        <h1>GAME LIBRARY</h1>

        <p>
            A collection of games and interactive
            projects I've worked on.
        </p>
    `,

    experience: `
        <h1>ADVENTURE LOG</h1>

        <p>
            TA experience, leadership,
            internships, and other adventures.
        </p>
    `,

    contact: `
        <h1>CONTACT</h1>

        <p>
            Want to build something together?
        </p>
    `

};


cartridges.forEach(cartridge => {

    cartridge.addEventListener("click", () => {

        const page =
            cartridge.dataset.page;

        content.innerHTML =
            pages[page];

        screen.classList.add("active");

    });

});


close.addEventListener("click", () => {

    screen.classList.remove("active");

});