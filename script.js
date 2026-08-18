/* ==================================================
   MENU MOBILE
================================================== */

const mobileButton = document.getElementById("mobileButton");
const navigation = document.getElementById("navigation");

if (mobileButton && navigation) {

    mobileButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}



/* ==================================================
   DROPDOWN DE PESQUISA
================================================== */

const researchDropdown =
    document.querySelector(".research-dropdown");

const researchButton =
    document.getElementById("researchButton");


if (researchButton && researchDropdown) {

    researchButton.addEventListener("click", (event) => {

        event.stopPropagation();

        researchDropdown.classList.toggle("open");

    });

}



/* ==================================================
   FECHAR MENU AO CLICAR EM UM LINK
================================================== */

document
    .querySelectorAll(".navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (navigation) {
                navigation.classList.remove("open");
            }

            if (researchDropdown) {
                researchDropdown.classList.remove("open");
            }

        });

    });



/* ==================================================
   FECHAR DROPDOWN AO CLICAR FORA
================================================== */

document.addEventListener("click", (event) => {

    if (
        researchDropdown &&
        !researchDropdown.contains(event.target)
    ) {

        researchDropdown.classList.remove("open");

    }

});



/* ==================================================
   ANIMAÇÃO DO ARCO-ÍRIS
================================================== */

const canvas =
    document.getElementById("oceanCanvas");


if (canvas) {

    const ctx =
        canvas.getContext("2d");


    let particles = [];

    let rainbowDrops = [];

    let explosions = [];


    /* ==================================================
       TAMANHO DO CANVAS
    ================================================== */

    function resizeCanvas() {

        const rect =
            canvas.getBoundingClientRect();

        const dpr =
            window.devicePixelRatio || 1;


        canvas.width =
            rect.width * dpr;

        canvas.height =
            rect.height * dpr;


        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );



    /* ==================================================
       CRIAR PARTÍCULA
    ================================================== */

    function createParticle() {

        const rect =
            canvas.getBoundingClientRect();


        return {

            x:
                Math.random() *
                rect.width,

            y:
                Math.random() *
                rect.height,

            radius:
                Math.random() * 2 + 0.5,

            speed:
                Math.random() * 0.35 + 0.1,

            alpha:
                Math.random() * 0.6 + 0.2,

            phase:
                Math.random() *
                Math.PI * 2

        };

    }



    /* ==================================================
       CRIAR GOTAS
    ================================================== */

    function createDrop() {

        const rect =
            canvas.getBoundingClientRect();


        return {

            x:
                Math.random() *
                rect.width,

            y:
                Math.random() *
                rect.height,

            radius:
                Math.random() * 2 + 1,

            speed:
                Math.random() * 1 + 0.4,

            alpha:
                Math.random() * 0.5 + 0.2

        };

    }



    /* ==================================================
       POPULAR CANVAS
    ================================================== */

    function createParticles() {

        particles = [];

        rainbowDrops = [];


        for (
            let i = 0;
            i < 80;
            i++
        ) {

            particles.push(
                createParticle()
            );

        }


        for (
            let i = 0;
            i < 30;
            i++
        ) {

            rainbowDrops.push(
                createDrop()
            );

        }

    }


    createParticles();



    /* ==================================================
       DESENHAR PARTÍCULA
    ================================================== */

    function drawParticle(
        particle
    ) {

        particle.phase += 0.02;


        const pulse =
            Math.sin(
                particle.phase
            ) * 0.5 + 0.5;


        const radius =
            particle.radius *
            (0.8 + pulse);


        const gradient =
            ctx.createRadialGradient(
                particle.x,
                particle.y,
                0,
                particle.x,
                particle.y,
                radius * 6
            );


        gradient.addColorStop(
            0,
            `rgba(255,255,255,${particle.alpha})`
        );


        gradient.addColorStop(
            0.3,
            `rgba(120,220,255,${particle.alpha * 0.6})`
        );


        gradient.addColorStop(
            1,
            "rgba(255,255,255,0)"
        );


        ctx.beginPath();

        ctx.fillStyle =
            gradient;

        ctx.arc(
            particle.x,
            particle.y,
            radius * 6,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }



    /* ==================================================
       DESENHAR GOTAS
    ================================================== */

    function drawDrop(drop) {

        ctx.beginPath();

        ctx.fillStyle =
            `rgba(150,220,255,${drop.alpha})`;

        ctx.arc(
            drop.x,
            drop.y,
            drop.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }



    /* ==================================================
       ATUALIZAR PARTÍCULAS
    ================================================== */

    function updateParticles() {

        const rect =
            canvas.getBoundingClientRect();


        particles.forEach(
            particle => {

                particle.y -=
                    particle.speed;


                particle.x +=
                    Math.sin(
                        particle.phase
                    ) * 0.15;


                if (
                    particle.y < -10
                ) {

                    particle.y =
                        rect.height + 10;

                    particle.x =
                        Math.random() *
                        rect.width;

                }

            }
        );


        rainbowDrops.forEach(
            drop => {

                drop.y +=
                    drop.speed;


                if (
                    drop.y >
                    rect.height + 10
                ) {

                    drop.y = -10;

                    drop.x =
                        Math.random() *
                        rect.width;

                }

            }
        );

    }



    /* ==================================================
       DESENHAR ARCO-ÍRIS
    ================================================== */

    function drawRainbow() {

        const rect =
            canvas.getBoundingClientRect();


        const centerX =
            rect.width * 0.72;


        const centerY =
            rect.height * 0.88;


        const radius =
            Math.min(
                rect.width * 0.55,
                rect.height * 0.9
            );


        const colors = [

            "#ff3b30",
            "#ff9500",
            "#ffd60a",
            "#34c759",
            "#00c7ff",
            "#5856d6",
            "#af52de"

        ];


        colors.forEach(
            (color, index) => {

                ctx.beginPath();


                ctx.strokeStyle =
                    color;


                ctx.globalAlpha =
                    0.65;


                ctx.lineWidth =
                    8;


                ctx.arc(

                    centerX,

                    centerY,

                    radius -
                    index * 10,

                    Math.PI,

                    Math.PI * 2

                );


                ctx.stroke();

            }
        );


        ctx.globalAlpha = 1;

    }



    /* ==================================================
       DESENHAR BRILHO DO ARCO-ÍRIS
    ================================================== */

    function drawRainbowGlow() {

        const rect =
            canvas.getBoundingClientRect();


        const centerX =
            rect.width * 0.72;


        const centerY =
            rect.height * 0.88;


        const radius =
            Math.min(
                rect.width * 0.55,
                rect.height * 0.9
            );


        const gradient =
            ctx.createRadialGradient(

                centerX,
                centerY - radius * 0.45,
                10,

                centerX,
                centerY - radius * 0.45,
                radius

            );


        gradient.addColorStop(
            0,
            "rgba(255,255,255,0.12)"
        );


        gradient.addColorStop(
            0.4,
            "rgba(100,180,255,0.05)"
        );


        gradient.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            gradient;


        ctx.fillRect(
            0,
            0,
            rect.width,
            rect.height
        );

    }



    /* ==================================================
       EXPLOSÃO COLORIDA
    ================================================== */

    function createExplosion(
        x,
        y
    ) {

        explosions.push({

            x: x,

            y: y,

            radius: 2,

            alpha: 1

        });

    }



    /* ==================================================
       DESENHAR EXPLOSÕES
    ================================================== */

    function drawExplosions() {

        explosions.forEach(
            explosion => {

                explosion.radius += 2;

                explosion.alpha -= 0.025;


                const gradient =
                    ctx.createRadialGradient(

                        explosion.x,
                        explosion.y,
                        0,

                        explosion.x,
                        explosion.y,
                        explosion.radius

                    );


                gradient.addColorStop(
                    0,
                    `rgba(255,255,255,${explosion.alpha})`
                );


                gradient.addColorStop(
                    0.25,
                    `rgba(255,220,100,${explosion.alpha})`
                );


                gradient.addColorStop(
                    0.5,
                    `rgba(120,200,255,${explosion.alpha * 0.6})`
                );


                gradient.addColorStop(
                    1,
                    "rgba(255,255,255,0)"
                );


                ctx.beginPath();

                ctx.fillStyle =
                    gradient;

                ctx.arc(

                    explosion.x,
                    explosion.y,
                    explosion.radius,
                    0,
                    Math.PI * 2

                );

                ctx.fill();

            }
        );


        explosions =
            explosions.filter(
                explosion =>
                    explosion.alpha > 0
            );

    }



    /* ==================================================
       LOOP PRINCIPAL
    ================================================== */

    function animateRainbow() {

        const rect =
            canvas.getBoundingClientRect();


        ctx.clearRect(
            0,
            0,
            rect.width,
            rect.height
        );


        /* Fundo */

        const background =
            ctx.createLinearGradient(
                0,
                0,
                0,
                rect.height
            );


        background.addColorStop(
            0,
            "rgba(15,25,70,0.08)"
        );


        background.addColorStop(
            0.5,
            "rgba(70,100,180,0.08)"
        );


        background.addColorStop(
            1,
            "rgba(100,180,255,0.15)"
        );


        ctx.fillStyle =
            background;


        ctx.fillRect(
            0,
            0,
            rect.width,
            rect.height
        );


        drawRainbowGlow();


        drawRainbow();


        updateParticles();


        particles.forEach(
            drawParticle
        );


        rainbowDrops.forEach(
            drawDrop
        );


        drawExplosions();


        requestAnimationFrame(
            animateRainbow
        );

    }


    animateRainbow();



    /* ==================================================
       CLIQUE NO ARCO-ÍRIS
    ================================================== */

    canvas.addEventListener(
        "click",
        event => {

            const rect =
                canvas.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            createExplosion(
                x,
                y
            );

        }
    );

}



/* ==================================================
   FLASHCARDS
================================================== */

const flashcards =
    document.querySelectorAll(
        ".flashcard"
    );


flashcards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "revealed"
                );

            }
        );

    }
);



/* ==================================================
   QUIZ
================================================== */

const quizQuestions = [

    {

        question:
            "O que é necessário para formar um arco-íris?",

        answers: [

            "Luz solar e gotas de água",

            "Somente luz da Lua",

            "Somente vento",

            "Apenas nuvens"

        ],

        correct: 0

    },


    {

        question:
            "O que acontece quando a luz entra em uma gota de água?",

        answers: [

            "Ela sofre refração",

            "Ela desaparece",

            "Ela vira som",

            "Ela deixa de existir"

        ],

        correct: 0

    },


    {

        question:
            "A luz branca é formada por diferentes cores?",

        answers: [

            "Sim",

            "Não",

            "Somente durante a noite",

            "Somente quando chove"

        ],

        correct: 0

    },


    {

        question:
            "Qual fenômeno ajuda a separar as cores da luz?",

        answers: [

            "Dispersão",

            "Evaporação",

            "Combustão",

            "Fermentação"

        ],

        correct: 0

    },


    {

        question:
            "O arco-íris é um objeto físico que fica no céu?",

        answers: [

            "Não, é um fenômeno óptico",

            "Sim, é um objeto sólido",

            "Sim, é formado por nuvens",

            "Sim, é formado por fumaça"

        ],

        correct: 0

    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;



/* ==================================================
   ELEMENTOS DO QUIZ
================================================== */

const questionElement =
    document.getElementById(
        "question"
    );


const answersElement =
    document.getElementById(
        "answers"
    );


const nextButton =
    document.getElementById(
        "nextQuestion"
    );


const progress =
    document.getElementById(
        "quizProgress"
    );


const scoreDisplay =
    document.getElementById(
        "scoreDisplay"
    );


const questionNumber =
    document.getElementById(
        "questionNumber"
    );


const questionArea =
    document.getElementById(
        "questionArea"
    );


const quizResult =
    document.getElementById(
        "quizResult"
    );


const finalScore =
    document.getElementById(
        "finalScore"
    );


const restartQuiz =
    document.getElementById(
        "restartQuiz"
    );



/* ==================================================
   CARREGAR QUESTÃO
================================================== */

function loadQuestion() {

    if (
        !questionElement ||
        !answersElement ||
        !nextButton
    ) {

        return;

    }


    answered = false;


    nextButton.disabled =
        true;


    const current =
        quizQuestions[
            currentQuestion
        ];


    questionElement.textContent =
        current.question;


    questionNumber.textContent =
        `QUESTÃO ${String(
            currentQuestion + 1
        ).padStart(2, "0")} / ${String(
            quizQuestions.length
        ).padStart(2, "0")}`;


    progress.style.width =
        `${(
            (currentQuestion + 1) /
            quizQuestions.length
        ) * 100}%`;


    answersElement.innerHTML =
        "";


    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        button,
                        index
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    scoreDisplay.textContent =
        `${score} PONTOS`;

}



/* ==================================================
   ESCOLHER RESPOSTA
================================================== */

function selectAnswer(
    selectedButton,
    selectedIndex
) {

    if (answered) {

        return;

    }


    answered = true;


    const current =
        quizQuestions[
            currentQuestion
        ];


    const buttons =
        answersElement
            .querySelectorAll(
                "button"
            );


    buttons.forEach(
        (button, index) => {

            if (
                index ===
                current.correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        selectedIndex ===
        current.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score += 10;

    } else {

        selectedButton.classList.add(
            "wrong"
        );

    }


    scoreDisplay.textContent =
        `${score} PONTOS`;


    nextButton.disabled =
        false;

}



/* ==================================================
   PRÓXIMA QUESTÃO
================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            currentQuestion++;


            if (
                currentQuestion >=
                quizQuestions.length
            ) {

                finishQuiz();

                return;

            }


            loadQuestion();

        }
    );

}



/* ==================================================
   FINALIZAR QUIZ
================================================== */

function finishQuiz() {

    if (!questionArea || !quizResult) {

        return;

    }


    questionArea.style.display =
        "none";


    quizResult.classList.add(
        "show"
    );


    finalScore.textContent =
        `Você fez ${score} de ${
            quizQuestions.length * 10
        } pontos.`;

}



/* ==================================================
   REINICIAR QUIZ
================================================== */

if (restartQuiz) {

    restartQuiz.addEventListener(
        "click",
        () => {

            currentQuestion = 0;

            score = 0;


            quizResult.classList.remove(
                "show"
            );


            questionArea.style.display =
                "block";


            loadQuestion();

        }
    );

}


loadQuestion();



/* ==================================================
   BOTÃO VOLTAR AO TOPO
================================================== */

const backTop =
    document.getElementById(
        "backTop"
    );


if (backTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY >
                600
            ) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* ==================================================
   ANIMAÇÃO DAS SEÇÕES
================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12

        }

    );


document
    .querySelectorAll(
        ".research-section, .quiz-section, .conclusion, .sources"
    )
    .forEach(
        section => {

            observer.observe(
                section
            );

        }
    );