/* ==================================================
   MENU MOBILE
================================================== */

const mobileButton =
    document.getElementById("mobileButton");

const navigation =
    document.getElementById("navigation");


mobileButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});



/* ==================================================
   DROPDOWN
================================================== */

const researchDropdown =
    document.querySelector(".research-dropdown");

const researchButton =
    document.getElementById("researchButton");


researchButton.addEventListener("click", () => {

    researchDropdown.classList.toggle("open");

});



/* ==================================================
   FECHAR MENU AO CLICAR
================================================== */

document
    .querySelectorAll(".navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            researchDropdown.classList.remove("open");

        });

    });



/* ==================================================
   MAR DE BIOLUMINESCÊNCIA
================================================== */

const canvas =
    document.getElementById("oceanCanvas");

const ctx =
    canvas.getContext("2d");


let particles = [];

let explosions = [];

let mouse = {

    x: null,

    y: null,

    active: false

};



/* ==================================================
   TAMANHO DO CANVAS
================================================== */

function resizeCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    canvas.width =
        rect.width *
        window.devicePixelRatio;

    canvas.height =
        rect.height *
        window.devicePixelRatio;

    ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
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
            rect.height *
            (0.35 + Math.random() * 0.6),

        radius:
            Math.random() * 2.8 + 1,

        speedX:
            (Math.random() - .5) *
            .35,

        speedY:
            -(Math.random() * .25 + .03),

        alpha:
            Math.random() * .6 + .25,

        phase:
            Math.random() * Math.PI * 2,

        pulse:
            Math.random() * .03 + .01,

        blue:
            Math.random() > .5

    };

}



/* ==================================================
   POPULAR O MAR
================================================== */

function createParticles() {

    particles = [];

    const amount = 95;


    for (let i = 0; i < amount; i++) {

        particles.push(
            createParticle()
        );

    }

}


createParticles();



/* ==================================================
   DESENHAR PARTÍCULA
================================================== */

function drawParticle(particle) {

    const pulse =
        Math.sin(particle.phase) * .35 + .65;


    const radius =
        particle.radius *
        (0.8 + pulse * .5);


    const gradient =
        ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            radius * 8
        );


    gradient.addColorStop(
        0,
        `rgba(190,255,255,${particle.alpha})`
    );


    gradient.addColorStop(
        .12,
        `rgba(0,245,255,${particle.alpha * .8})`
    );


    gradient.addColorStop(
        .4,
        `rgba(0,150,255,${particle.alpha * .25})`
    );


    gradient.addColorStop(
        1,
        "rgba(0,120,255,0)"
    );


    ctx.beginPath();

    ctx.fillStyle =
        gradient;

    ctx.arc(
        particle.x,
        particle.y,
        radius * 8,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.beginPath();

    ctx.fillStyle =
        particle.blue
            ? "#32dfff"
            : "#8affff";

    ctx.globalAlpha =
        particle.alpha + .25;

    ctx.arc(
        particle.x,
        particle.y,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.globalAlpha = 1;

}



/* ==================================================
   ANIMAÇÃO DAS PARTÍCULAS
================================================== */

function updateParticles() {

    const rect =
        canvas.getBoundingClientRect();


    particles.forEach(particle => {

        particle.phase +=
            particle.pulse;


        particle.x +=
            particle.speedX;


        particle.y +=
            particle.speedY;


        /*
         * Movimento suave de onda
         */

        particle.x +=
            Math.sin(
                particle.phase
            ) * .12;


        /*
         * Se sair pelo topo,
         * volta para baixo
         */

        if (particle.y < rect.height * .27) {

            particle.y =
                rect.height;

            particle.x =
                Math.random() *
                rect.width;

        }


        /*
         * Se sair pela lateral
         */

        if (particle.x < -20) {

            particle.x =
                rect.width + 20;

        }


        if (particle.x >
            rect.width + 20) {

            particle.x = -20;

        }

    });

}



/* ==================================================
   LINHAS SUAVES DO MAR
================================================== */

function drawOceanWaves() {

    const rect =
        canvas.getBoundingClientRect();


    for (
        let wave = 0;
        wave < 5;
        wave++
    ) {

        ctx.beginPath();


        for (
            let x = 0;
            x <= rect.width;
            x += 8
        ) {

            const y =
                rect.height * .60 +
                wave * 42 +
                Math.sin(
                    x * .012 +
                    Date.now() * .0005 +
                    wave
                ) * 10;


            if (x === 0) {

                ctx.moveTo(x, y);

            } else {

                ctx.lineTo(x, y);

            }

        }


        ctx.strokeStyle =
            `rgba(0,190,255,${.035 - wave * .004})`;


        ctx.lineWidth = 1;

        ctx.stroke();

    }

}



/* ==================================================
   EXPLOSÃO DE LUZ
================================================== */

function createExplosion(x, y) {

    explosions.push({

        x: x,

        y: y,

        radius: 2,

        alpha: 1

    });


    /*
     * Cria partículas extras
     */

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        particles.push({

            x: x,

            y: y,

            radius:
                Math.random() * 2 + 1,

            speedX:
                (Math.random() - .5) * 2,

            speedY:
                (Math.random() - .5) * 2,

            alpha: 1,

            phase: Math.random() * 6,

            pulse: .05,

            blue: true

        });

    }

}



/* ==================================================
   DESENHAR EXPLOSÕES
================================================== */

function drawExplosions() {

    explosions.forEach(
        explosion => {

            explosion.radius += 2;

            explosion.alpha -= .025;


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
                .2,
                `rgba(0,255,255,${explosion.alpha})`
            );


            gradient.addColorStop(
                1,
                "rgba(0,180,255,0)"
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

function animateOcean() {

    const rect =
        canvas.getBoundingClientRect();


    ctx.clearRect(
        0,
        0,
        rect.width,
        rect.height
    );


    /*
     * fundo do mar
     */

    const background =
        ctx.createLinearGradient(
            0,
            0,
            0,
            rect.height
        );


    background.addColorStop(
        0,
        "rgba(1,8,17,0)"
    );


    background.addColorStop(
        .5,
        "rgba(0,28,48,.1)"
    );


    background.addColorStop(
        1,
        "rgba(0,80,120,.15)"
    );


    ctx.fillStyle =
        background;

    ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
    );


    drawOceanWaves();


    updateParticles();


    particles.forEach(
        drawParticle
    );


    drawExplosions();


    requestAnimationFrame(
        animateOcean
    );

}


animateOcean();



/* ==================================================
   CLIQUE NO MAR
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
            "O que é bioluminescência?",

        answers: [

            "Produção de luz por organismos vivos",

            "Reflexo da luz solar",

            "Uma doença marinha",

            "Um tipo de fotossíntese"

        ],

        correct: 0

    },


    {

        question:
            "Qual organismo é conhecido por produzir luz?",

        answers: [

            "Vaga-lume",

            "Elefante",

            "Cachorro",

            "Coala"

        ],

        correct: 0

    },


    {

        question:
            "Qual molécula participa da reação bioluminescente?",

        answers: [

            "Luciferina",

            "Hemoglobina",

            "Celulose",

            "Amido"

        ],

        correct: 0

    },


    {

        question:
            "Qual é uma função da bioluminescência?",

        answers: [

            "Defesa contra predadores",

            "Produção de ossos",

            "Digestão",

            "Respiração"

        ],

        correct: 0

    },


    {

        question:
            "O mar pode apresentar brilho causado por microrganismos?",

        answers: [

            "Sim",

            "Não",

            "Somente durante o dia",

            "Somente em água doce"

        ],

        correct: 0

    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


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
   PRÓXIMA
================================================== */

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



/* ==================================================
   FINALIZAR
================================================== */

function finishQuiz() {

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


loadQuestion();



/* ==================================================
   BOTÃO VOLTAR AO TOPO
================================================== */

const backTop =
    document.getElementById(
        "backTop"
    );


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
            threshold: .12
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