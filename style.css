:root {
    --background: #071019;
    --background-dark: #050d14;
    --card: #102431;
    --cyan: #6ff7e8;
    --cyan-dark: #19bcae;
    --text: #edf8f8;
    --muted: #9ab2b7;
    --border: rgba(111, 247, 232, 0.16);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", Arial, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* HEADER */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: rgba(7, 16, 25, 0.82);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.nav {
    width: 92%;
    max-width: 1160px;
    height: 76px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: "Space Grotesk";
    font-weight: 700;
    letter-spacing: 1px;
}

.logo span {
    color: var(--cyan);
}

.logo-dot {
    display: inline-block;

    width: 10px;
    height: 10px;

    margin-right: 8px;

    border-radius: 50%;

    background: var(--cyan);

    box-shadow: 0 0 18px var(--cyan);
}

.menu {
    list-style: none;

    display: flex;
    gap: 8px;
    align-items: center;
}

.menu a,
.dropdown-button {
    border: none;
    background: transparent;

    color: #c8d7da;

    padding: 10px 14px;

    cursor: pointer;

    font-size: 14px;
}

.menu a:hover,
.dropdown-button:hover {
    color: var(--cyan);
}


/* DROPDOWN */

.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;

    top: 45px;
    right: 0;

    min-width: 190px;

    list-style: none;

    padding: 8px;

    background: #0b1a24;

    border: 1px solid var(--border);

    border-radius: 14px;

    opacity: 0;
    visibility: hidden;

    transform: translateY(-10px);

    transition: 0.25s;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu a {
    display: block;
}


/* MENU MOBILE */

.menu-toggle {
    display: none;

    background: none;
    border: none;

    color: white;

    font-size: 25px;

    cursor: pointer;
}


/* HERO */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    background:
        radial-gradient(
            circle at 80% 45%,
            rgba(39,210,193,0.12),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #06121b,
            #071019
        );
}

.hero-content {
    width: 92%;
    max-width: 1160px;

    margin: auto;

    padding-top: 70px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 60px;

    align-items: center;
}

.eyebrow {
    color: var(--cyan);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 3px;

    margin-bottom: 18px;
}

.hero h1 {
    font-family: "Space Grotesk";

    font-size: clamp(48px, 7vw, 90px);

    line-height: 0.98;

    letter-spacing: -4px;
}

.hero h1 span,
h2 span {
    color: var(--cyan);
}

.description {
    max-width: 620px;

    color: var(--muted);

    font-size: 17px;

    margin: 28px 0;
}


/* BOTÕES */

.buttons {
    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}

.button {
    padding: 13px 20px;

    border-radius: 12px;

    font-size: 14px;

    font-weight: 700;

    transition: 0.2s;
}

.primary {
    background: var(--cyan);

    color: #06201e;
}

.primary:hover {
    transform: translateY(-3px);

    box-shadow:
        0 10px 30px rgba(111,247,232,0.25);
}

.secondary {
    border: 1px solid var(--border);
}

.secondary:hover {
    border-color: var(--cyan);
}


/* ESTATÍSTICAS */

.statistics {
    display: flex;

    gap: 30px;

    margin-top: 50px;
}

.statistics div {
    display: flex;

    flex-direction: column;
}

.statistics strong {
    font-family: "Space Grotesk";

    font-size: 23px;
}

.statistics small {
    color: var(--muted);

    font-size: 11px;
}


/* ORBE */

.hero-light {
    min-height: 500px;

    display: grid;

    place-items: center;

    position: relative;
}

.light-orb {
    width: 400px;

    aspect-ratio: 1;

    border-radius: 50%;

    position: relative;

    background:
        radial-gradient(
            circle,
            #dffffb 0 2%,
            #6ff7e8 5%,
            #1caaa5 17%,
            rgba(23,104,116,0.6) 35%,
            transparent 70%
        );

    filter:
        drop-shadow(
            0 0 50px
            rgba(76,245,226,0.25)
        );

    animation: float 5s ease-in-out infinite;
}

@keyframes float {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

}

.light-core {
    position: absolute;

    width: 25%;

    height: 25%;

    top: 37.5%;
    left: 37.5%;

    border-radius: 50%;

    background: white;

    box-shadow:
        0 0 30px 10px
        var(--cyan);
}

.particle {
    position: absolute;

    width: 5px;
    height: 5px;

    background: var(--cyan);

    border-radius: 50%;

    box-shadow:
        0 0 15px var(--cyan);
}

.particle1 {
    top: 20%;
    left: 70%;
}

.particle2 {
    top: 70%;
    left: 20%;
}

.particle3 {
    top: 75%;
    left: 70%;
}

.particle4 {
    top: 30%;
    left: 20%;
}

.hero-light p {
    position: absolute;

    bottom: 25px;

    color: var(--muted);

    font-size: 10px;

    letter-spacing: 3px;
}


/* SEÇÕES */

.section {
    padding: 120px 0;
}

.two-columns {
    width: 92%;
    max-width: 1160px;

    margin: auto;

    display: grid;

    grid-template-columns: 0.8fr 1.2fr;

    gap: 90px;
}

.title h2,
.center-title h2,
.conclusion h2 {
    font-family: "Space Grotesk";

    font-size: clamp(36px,5vw,58px);

    line-height: 1.05;

    letter-spacing: -2px;
}

.text-card {
    background: #0e202c;

    padding: 32px;

    border: 1px solid var(--border);

    border-radius: 24px;
}

.text-card p {
    color: #c0d0d3;

    margin-bottom: 18px;
}

.text-card strong {
    color: var(--cyan);
}

.fact {
    padding: 16px;

    border-left: 2px solid var(--cyan);

    background: rgba(111,247,232,0.05);

    font-size: 13px;
}


/* IMAGENS */

.image-section {
    height: 570px;

    position: relative;

    background-size: cover;

    background-position: center;

    display: flex;

    align-items: flex-end;

    padding: 8%;
}

.beach {
    background-image:
        linear-gradient(
            rgba(0,10,18,0.15),
            rgba(0,10,18,0.85)
        ),
        url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85");
}

.maragogi {
    background-image:
        linear-gradient(
            rgba(0,10,18,0.25),
            rgba(0,10,18,0.85)
        ),
        url("https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85");
}

.image-text p {
    color: var(--cyan);

    font-size: 10px;

    font-weight: bold;

    letter-spacing: 3px;
}

.image-text h2 {
    font-family: "Space Grotesk";

    font-size: clamp(35px,5vw,65px);

    max-width: 650px;

    line-height: 1.05;
}


/* SEÇÃO ESCURA */

.dark {
    background: var(--background-dark);
}

.center-title {
    width: 92%;
    max-width: 1160px;

    margin: auto;

    text-align: center;
}

.center-title > p:last-child {
    color: var(--muted);

    margin-top: 15px;
}


/* PROCESSO */

.process {
    width: 92%;
    max-width: 1160px;

    margin: 45px auto 0;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;
}

.process article {
    padding: 25px;

    background: #0b1a24;

    border: 1px solid var(--border);

    border-radius: 18px;

    min-height: 190px;
}

.process span {
    color: var(--cyan);

    font-size: 12px;
}

.process h3 {
    margin-top: 25px;

    font-family: "Space Grotesk";

    font-size: 20px;
}

.process p {
    color: var(--muted);

    font-size: 13px;

    margin-top: 8px;
}

.equation {
    width: 92%;
    max-width: 1160px;

    margin: 20px auto 0;

    padding: 25px;

    text-align: center;

    border: 1px solid var(--border);

    border-radius: 18px;
}

.equation p {
    font-family: "Space Grotesk";

    font-size: 19px;
}

.equation strong {
    color: var(--cyan);

    padding: 0 10px;
}

.equation span {
    color: var(--cyan);
}


/* EXEMPLOS */

.examples {
    width: 92%;
    max-width: 1160px;

    margin: 45px auto;

    display: grid;

    grid-template-columns: repeat(2,1fr);

    gap: 18px;
}

.species {
    display: grid;

    grid-template-columns: 190px 1fr;

    background: #0b1922;

    border: 1px solid var(--border);

    border-radius: 20px;

    overflow: hidden;
}

.species-image {
    min-height: 210px;

    background-size: cover;

    background-position: center;
}

.jellyfish {
    background-image:
        url("https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=700&q=80");
}

.firefly {
    background-image:
        url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80");
}

.plankton {
    background-image:
        url("https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=700&q=80");
}

.fungi {
    background-image:
        url("https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=700&q=80");
}

.species-content {
    padding: 25px;
}

.species-content small {
    color: var(--cyan);

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: bold;
}

.species-content h3 {
    font-family: "Space Grotesk";

    font-size: 25px;

    margin: 8px 0;
}

.species-content p {
    color: var(--muted);

    font-size: 13px;
}


/* FUNÇÕES */

.functions {
    background: #eef7f5;

    color: #0a1a20;
}

.functions .eyebrow {
    color: #148f86;
}

.functions h2 span {
    color: #078f84;
}

.function-grid {
    width: 92%;
    max-width: 1160px;

    margin: 45px auto;

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    gap: 15px;
}

.function-grid article {
    padding: 28px;

    background: white;

    border-radius: 18px;

    min-height: 220px;

    border: 1px solid rgba(0,50,50,0.1);
}

.icon {
    font-size: 28px;
}

.function-grid h3 {
    font-family: "Space Grotesk";

    margin: 20px 0 8px;
}

.function-grid p {
    color: #587075;

    font-size: 13px;
}


/* FLASHCARDS */

.flashcards {
    width: 92%;
    max-width: 1160px;

    margin: 45px auto;

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 16px;
}

.flashcard {
    min-height: 275px;

    padding: 27px;

    position: relative;

    text-align: left;

    color: white;

    background:
        linear-gradient(
            145deg,
            #0e2632,
            #091721
        );

    border: 1px solid var(--border);

    border-radius: 20px;

    cursor: pointer;

    overflow: hidden;

    transition: 0.25s;
}

.flashcard:hover {
    transform: translateY(-5px);

    border-color: var(--cyan);
}

.flashcard > span {
    position: absolute;

    right: 20px;
    top: 17px;

    color: #4b676e;

    font-family: "Space Grotesk";
}

.flashcard small {
    display: block;

    color: var(--cyan);

    font-size: 9px;

    font-weight: bold;

    letter-spacing: 2px;

    margin-bottom: 28px;
}

.flashcard strong {
    display: block;

    font-family: "Space Grotesk";

    font-size: 20px;

    line-height: 1.35;
}

.answer {
    position: absolute;

    inset: 0;

    padding: 30px;

    background: #061921;

    display: flex;

    flex-direction: column;

    justify-content: center;

    opacity: 0;

    transform: translateY(20px);

    transition: 0.3s;
}

.answer b {
    color: var(--cyan);

    font-size: 22px;
}

.answer p {
    color: #b8cacc;

    font-size: 13px;

    margin-top: 10px;
}

.flashcard.active .answer {
    opacity: 1;

    transform: translateY(0);
}

.flashcard em {
    position: absolute;

    bottom: 18px;
    left: 27px;

    color: #667f84;

    font-size: 10px;
}


/* CONCLUSÃO */

.conclusion {
    background: #081720;
}

.conclusion-content {
    width: 92%;
    max-width: 1160px;

    margin: auto;

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 80px;

    align-items: center;
}

.conclusion p:not(.eyebrow) {
    color: var(--muted);

    margin-top: 20px;

    max-width: 650px;
}

.firefly {
    height: 350px;

    display: grid;

    place-items: center;

    font-size: 100px;

    color: var(--cyan);

    text-shadow:
        0 0 20px var(--cyan),
        0 0 60px var(--cyan),
        0 0 120px var(--cyan);

    animation: glow 2s infinite alternate;
}

@keyframes glow {

    from {
        opacity: 0.5;
    }

    to {
        opacity: 1;
    }

}


/* EVIDÊNCIAS */

.evidence {
    background: #f1f7f6;

    color: #0a1b20;
}

.evidence .eyebrow {
    color: #138f86;
}

.evidence h2 span {
    color: #0c9187;
}

.evidence .title {
    width: 92%;
    max-width: 1160px;

    margin: auto;
}

.evidence .title > p:last-child {
    color: #617579;

    margin-top: 12px;
}

.gallery {
    width: 92%;
    max-width: 1160px;

    margin: 45px auto;

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    gap: 13px;
}

.gallery figure {
    margin: 0;

    background: white;

    border-radius: 17px;

    overflow: hidden;

    border: 1px solid rgba(0,40,45,0.1);
}

.gallery img {
    width: 100%;

    height: 220px;

    object-fit: cover;

    display: block;
}

.gallery figcaption {
    padding: 13px 15px;

    color: #657a7e;

    font-size: 11px;
}


/* FONTES */

.sources {
    background: #dfecea;

    color: #0a1b20;

    padding: 70px 5%;

    display: grid;

    grid-template-columns:
        0.7fr 1.3fr;

    gap: 50px;

    align-items: center;
}

.sources h2 {
    font-family: "Space Grotesk";

    font-size: 38px;
}

.source-list {
    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 10px;
}

.source-list a {
    padding: 17px;

    border: 1px solid rgba(0,40,45,0.15);

    border-radius: 12px;

    font-size: 12px;

    font-weight: bold;
}

.source-list a:hover {
    border-color: #0c9187;
}


/* FOOTER */

footer {
    background: #050c12;

    padding: 55px 5% 25px;
}

.footer-content {
    max-width: 1160px;

    margin: auto;

    display: grid;

    grid-template-columns:
        1.3fr 1fr 1fr;

    gap: 30px;
}

.footer-content p {
    color: #6f868b;

    font-size: 12px;

    margin-top: 8px;
}

.footer-content small {
    color: #5d757a;

    font-size: 9px;

    letter-spacing: 2px;
}

.footer-content strong {
    display: block;

    font-size: 13px;

    margin-top: 5px;
}

.copyright {
    max-width: 1160px;

    margin: 40px auto 0;

    padding-top: 18px;

    border-top: 1px solid rgba(255,255,255,0.07);

    color: #50666c;

    font-size: 10px;
}


/* BOTÃO TOPO */

#backTop {
    position: fixed;

    right: 22px;
    bottom: 22px;

    width: 43px;
    height: 43px;

    border-radius: 50%;

    border: 1px solid var(--border);

    background: #102733;

    color: var(--cyan);

    cursor: pointer;

    opacity: 0;

    pointer-events: none;

    transition: 0.2s;

    z-index: 100;
}

#backTop.show {
    opacity: 1;

    pointer-events: auto;
}


/* RESPONSIVIDADE */

@media (max-width: 900px) {

    .menu-toggle {
        display: block;
    }

    .menu {
        display: none;

        position: absolute;

        top: 76px;

        left: 4%;
        right: 4%;

        padding: 10px;

        flex-direction: column;

        align-items: stretch;

        background: #0b1a24;

        border: 1px solid var(--border);

        border-radius: 15px;
    }

    .menu.open {
        display: flex;
    }

    .dropdown-menu {
        position: static;

        display: none;

        opacity: 1;

        visibility: visible;

        transform: none;
    }

    .dropdown.open .dropdown-menu {
        display: block;
    }

    .hero-content,
    .two-columns,
    .conclusion-content,
    .sources {
        grid-template-columns: 1fr;
    }

    .process,
    .function-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .flashcards {
        grid-template-columns: repeat(2,1fr);
    }

    .examples {
        grid-template-columns: 1fr;
    }

    .gallery {
        grid-template-columns: repeat(2,1fr);
    }

}


@media (max-width: 600px) {

    .nav {
        height: 68px;
    }

    .hero h1 {
        font-size: 48px;

        letter-spacing: -2px;
    }

    .hero-light {
        min-height: 320px;
    }

    .light-orb {
        width: 280px;
    }

    .process,
    .function-grid,
    .flashcards,
    .gallery {
        grid-template-columns: 1fr;
    }

    .species {
        grid-template-columns: 1fr;
    }

    .species-image {
        height: 220px;
    }

    .image-section {
        height: 450px;
    }

    .section {
        padding: 85px 0;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    .source-list {
        grid-template-columns: 1fr;
    }

}