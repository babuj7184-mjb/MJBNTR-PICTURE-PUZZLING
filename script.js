// ========================================
// TELUGU CINEMA PICTURE PUZZLE
// Modified to use the supplied real picture pack
// ========================================

const LEVELS = [
    { id: 1, size: 3, label: "Easy" },
    { id: 2, size: 4, label: "Medium" },
    { id: 3, size: 5, label: "Hard" }
];

let currentLevelIndex = 0;
let SIZE = LEVELS[currentLevelIndex].size;

const people = [
    {
        "name": "Telugu Cinema Photo 01",
        "category": "all",
        "image": "images/photo_001.jpg"
    },
    {
        "name": "Telugu Cinema Photo 02",
        "category": "all",
        "image": "images/photo_002.jpg"
    },
    {
        "name": "Telugu Cinema Photo 03",
        "category": "all",
        "image": "images/photo_003.jpg"
    },
    {
        "name": "Telugu Cinema Photo 04",
        "category": "all",
        "image": "images/photo_004.jpg"
    },
    {
        "name": "Telugu Cinema Photo 05",
        "category": "all",
        "image": "images/photo_005.jpg"
    },
    {
        "name": "Telugu Cinema Photo 06",
        "category": "all",
        "image": "images/photo_006.jpg"
    },
    {
        "name": "Jr. NTR",
        "category": "hero",
        "image": "images/photo_007.jpg"
    },
    {
        "name": "Telugu Cinema Photo 08",
        "category": "all",
        "image": "images/photo_008.jpg"
    },
    {
        "name": "Telugu Cinema Photo 09",
        "category": "all",
        "image": "images/photo_009.jpg"
    },
    {
        "name": "Telugu Cinema Photo 10",
        "category": "all",
        "image": "images/photo_010.jpg"
    },
    {
        "name": "Telugu Cinema Photo 11",
        "category": "all",
        "image": "images/photo_011.jpg"
    },
    {
        "name": "Telugu Cinema Photo 12",
        "category": "all",
        "image": "images/photo_012.jpg"
    },
    {
        "name": "Telugu Cinema Photo 13",
        "category": "all",
        "image": "images/photo_013.jpg"
    },
    {
        "name": "Telugu Cinema Photo 14",
        "category": "all",
        "image": "images/photo_014.jpg"
    },
    {
        "name": "Telugu Cinema Photo 15",
        "category": "all",
        "image": "images/photo_015.jpg"
    },
    {
        "name": "Telugu Cinema Photo 16",
        "category": "all",
        "image": "images/photo_016.jpg"
    },
    {
        "name": "Telugu Cinema Photo 17",
        "category": "all",
        "image": "images/photo_017.jpg"
    },
    {
        "name": "Allu Arjun",
        "category": "hero",
        "image": "images/photo_018.jpg"
    },
    {
        "name": "Allu Arjun",
        "category": "hero",
        "image": "images/photo_019.jpg"
    },
    {
        "name": "Telugu Cinema Photo 20",
        "category": "all",
        "image": "images/photo_020.jpg"
    },
    {
        "name": "Telugu Cinema Photo 21",
        "category": "all",
        "image": "images/photo_021.jpg"
    },
    {
        "name": "Telugu Cinema Photo 22",
        "category": "all",
        "image": "images/photo_022.jpg"
    },
    {
        "name": "Yash",
        "category": "hero",
        "image": "images/photo_023.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 24",
        "category": "all",
        "image": "images/photo_024.jpeg"
    },
    {
        "name": "Krithi Shetty",
        "category": "heroine",
        "image": "images/photo_025.jpg"
    },
    {
        "name": "Keerthy Suresh",
        "category": "heroine",
        "image": "images/photo_026.jpg"
    },
    {
        "name": "Ravi Teja",
        "category": "hero",
        "image": "images/photo_027.jpg"
    },
    {
        "name": "Sai Pallavi",
        "category": "heroine",
        "image": "images/photo_028.jpg"
    },
    {
        "name": "Shruti Haasan",
        "category": "heroine",
        "image": "images/photo_029.jpg"
    },
    {
        "name": "Venkatesh",
        "category": "hero",
        "image": "images/photo_030.jpg"
    },
    {
        "name": "Vijay Deverakonda",
        "category": "hero",
        "image": "images/photo_031.jpg"
    },
    {
        "name": "Telugu Cinema Photo 32",
        "category": "all",
        "image": "images/photo_032.jfif"
    },
    {
        "name": "Telugu Cinema Photo 33",
        "category": "all",
        "image": "images/photo_033.jfif"
    },
    {
        "name": "Telugu Cinema Photo 34",
        "category": "all",
        "image": "images/photo_034.jfif"
    },
    {
        "name": "Telugu Cinema Photo 35",
        "category": "all",
        "image": "images/photo_035.jfif"
    },
    {
        "name": "Telugu Cinema Photo 36",
        "category": "all",
        "image": "images/photo_036.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 37",
        "category": "all",
        "image": "images/photo_037.jfif"
    },
    {
        "name": "Telugu Cinema Photo 38",
        "category": "all",
        "image": "images/photo_038.jfif"
    },
    {
        "name": "Telugu Cinema Photo 39",
        "category": "all",
        "image": "images/photo_039.jfif"
    },
    {
        "name": "Telugu Cinema Photo 40",
        "category": "all",
        "image": "images/photo_040.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 41",
        "category": "all",
        "image": "images/photo_041.jfif"
    },
    {
        "name": "Telugu Cinema Photo 42",
        "category": "all",
        "image": "images/photo_042.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 43",
        "category": "all",
        "image": "images/photo_043.jfif"
    },
    {
        "name": "Telugu Cinema Photo 44",
        "category": "all",
        "image": "images/photo_044.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 45",
        "category": "all",
        "image": "images/photo_045.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 46",
        "category": "all",
        "image": "images/photo_046.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 47",
        "category": "all",
        "image": "images/photo_047.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 48",
        "category": "all",
        "image": "images/photo_048.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 49",
        "category": "all",
        "image": "images/photo_049.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 50",
        "category": "all",
        "image": "images/photo_050.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 51",
        "category": "all",
        "image": "images/photo_051.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 52",
        "category": "all",
        "image": "images/photo_052.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 53",
        "category": "all",
        "image": "images/photo_053.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 54",
        "category": "all",
        "image": "images/photo_054.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 55",
        "category": "all",
        "image": "images/photo_055.jfif"
    },
    {
        "name": "Telugu Cinema Photo 56",
        "category": "all",
        "image": "images/photo_056.jfif"
    },
    {
        "name": "Telugu Cinema Photo 57",
        "category": "all",
        "image": "images/photo_057.jfif"
    },
    {
        "name": "Telugu Cinema Photo 58",
        "category": "all",
        "image": "images/photo_058.jfif"
    },
    {
        "name": "Telugu Cinema Photo 59",
        "category": "all",
        "image": "images/photo_059.jfif"
    },
    {
        "name": "Telugu Cinema Photo 60",
        "category": "all",
        "image": "images/photo_060.jfif"
    },
    {
        "name": "Telugu Cinema Photo 61",
        "category": "all",
        "image": "images/photo_061.jfif"
    },
    {
        "name": "Telugu Cinema Photo 62",
        "category": "all",
        "image": "images/photo_062.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 63",
        "category": "all",
        "image": "images/photo_063.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 64",
        "category": "all",
        "image": "images/photo_064.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 65",
        "category": "all",
        "image": "images/photo_065.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 66",
        "category": "all",
        "image": "images/photo_066.jpeg"
    },
    {
        "name": "Telugu Cinema Photo 67",
        "category": "all",
        "image": "images/photo_067.jfif"
    },
    {
        "name": "Kajal Aggarwal",
        "category": "heroine",
        "image": "images/photo_068.jpg"
    },
    {
        "name": "Telugu Cinema Photo 69",
        "category": "all",
        "image": "images/photo_069.jpg"
    },
    {
        "name": "Telugu Cinema Photo 70",
        "category": "all",
        "image": "images/photo_070.jpg"
    },
    {
        "name": "Nagarjuna",
        "category": "hero",
        "image": "images/photo_071.jpg"
    },
    {
        "name": "Nani",
        "category": "hero",
        "image": "images/photo_072.jpg"
    },
    {
        "name": "Prabhas",
        "category": "hero",
        "image": "images/photo_073.jpg"
    },
    {
        "name": "Priyamani",
        "category": "heroine",
        "image": "images/photo_074.jpg"
    },
    {
        "name": "Rashmika Mandanna",
        "category": "heroine",
        "image": "images/photo_075.jpg"
    },
    {
        "name": "Sai Pallavi",
        "category": "heroine",
        "image": "images/photo_076.jpg"
    },
    {
        "name": "Samantha",
        "category": "heroine",
        "image": "images/photo_077.jpg"
    },
    {
        "name": "Telugu Cinema Photo 78",
        "category": "all",
        "image": "images/photo_078.jpg"
    }
];

let currentCategory = "all";
let currentPerson = null;
let pieces = [];
let selectedPiece = null;
let moves = 0;
let seconds = 0;
let timer = null;
let gameStarted = false;
let audioContext = null;

const puzzle = document.getElementById("puzzle");
const timeText = document.getElementById("time");
const movesText = document.getElementById("moves");
const scoreText = document.getElementById("score");
const result = document.getElementById("result");
const clue = document.getElementById("clue");
let clueMode = false;
let clueUsed = false;

document.getElementById("heroesBtn").addEventListener("click", () => {
    currentCategory = "hero";
    newGame();
});

document.getElementById("heroinesBtn").addEventListener("click", () => {
    currentCategory = "heroine";
    newGame();
});

document.getElementById("allBtn").addEventListener("click", () => {
    currentCategory = "all";
    newGame();
});

document.getElementById("level1Btn").addEventListener("click", () => setLevel(0));
document.getElementById("level2Btn").addEventListener("click", () => setLevel(1));
document.getElementById("level3Btn").addEventListener("click", () => setLevel(2));
document.getElementById("nextLevel").addEventListener("click", () => {
    const nextIndex = currentLevelIndex === LEVELS.length - 1 ? 0 : currentLevelIndex + 1;
    setLevel(nextIndex);
});

document.getElementById("newGame").addEventListener("click", newGame);
document.getElementById("shuffle").addEventListener("click", shuffleGame);
document.getElementById("clueBtn").addEventListener("click", () => {
    if (!currentPerson || !gameStarted) return;
    clueMode = true;
    clueUsed = false;
    clue.classList.remove("hidden");
    clue.textContent = "Select a tile to reveal where it belongs.";
    clearClueHighlight();
});

function setLevel(levelIndex) {
    currentLevelIndex = Math.max(0, Math.min(levelIndex, LEVELS.length - 1));
    SIZE = LEVELS[currentLevelIndex].size;
    updateLevelUI();
    newGame();
}

function updateLevelUI() {
    const levelText = document.getElementById("level");
    const levelButtons = document.querySelectorAll(".level-btn");

    levelText.textContent = LEVELS[currentLevelIndex].id;

    levelButtons.forEach((button, index) => {
        button.classList.toggle("active", index === currentLevelIndex);
    });

    const puzzle = document.getElementById("puzzle");
    puzzle.style.setProperty("--grid-size", SIZE);
}

function getPeople() {
    if (currentCategory === "all") return people;
    return people.filter(person => person.category === currentCategory);
}

function newGame() {
    const nextLevelButton = document.getElementById("nextLevel");
    const nextLevelText = currentLevelIndex === LEVELS.length - 1 ? "🔁 Play Again" : `➡️ Next Level (${LEVELS[currentLevelIndex + 1].id})`;
    nextLevelButton.textContent = nextLevelText;

    clueMode = false;
    clueUsed = false;
    clue.classList.add("hidden");
    clearClueHighlight();

    const available = getPeople();

    if (available.length === 0) {
        result.innerHTML =
            "<div class='success'>No pictures are available in this category.</div>";
        return;
    }

    const random = Math.floor(Math.random() * available.length);
    currentPerson = available[random];

    moves = 0;
    seconds = 0;
    selectedPiece = null;
    gameStarted = true;

    movesText.textContent = "0";
    scoreText.textContent = "0";
    result.innerHTML = "";

    updateTime();
    createPieces();
    startTimer();
}

function createPieces() {
    pieces = [];

    const total = SIZE * SIZE;

    for (let i = 0; i < total; i++) {
        pieces.push(i);
    }

    shuffleArray(pieces);
    drawPuzzle();
}

function clearClueHighlight() {
    document.querySelectorAll(".piece").forEach((piece) => {
        piece.classList.remove("clue-source", "clue-correct");
    });
}

function drawPuzzle() {
    puzzle.innerHTML = "";
    puzzle.style.setProperty("--grid-size", SIZE);

    pieces.forEach((pieceNumber, position) => {
        const piece = document.createElement("div");
        piece.classList.add("piece");

        piece.style.backgroundImage =
            `url("${encodeURI(currentPerson.image)}")`;

        const row = Math.floor(pieceNumber / SIZE);
        const column = pieceNumber % SIZE;

        piece.style.backgroundSize =
            `${SIZE * 100}% ${SIZE * 100}%`;

        const x = SIZE === 1 ? 0 : (column * 100) / (SIZE - 1);
        const y = SIZE === 1 ? 0 : (row * 100) / (SIZE - 1);

        piece.style.backgroundPosition = `${x}% ${y}%`;

        piece.draggable = true;
        piece.dataset.position = position;

        piece.addEventListener("dragstart", dragStart);
        piece.addEventListener("dragover", dragOver);
        piece.addEventListener("drop", dropPiece);

        piece.addEventListener("click", (event) => {
            if (clueMode) {
                handleClueClick(event);
                return;
            }
            selectPiece(position);
        });

        puzzle.appendChild(piece);
    });
}

function selectPiece(position) {
    if (!gameStarted) return;

    const allPieces = document.querySelectorAll(".piece");

    if (selectedPiece === null) {
        selectedPiece = position;
        allPieces[position].classList.add("selected");
        return;
    }

    if (selectedPiece === position) {
        allPieces[position].classList.remove("selected");
        selectedPiece = null;
        return;
    }

    swap(selectedPiece, position);

    moves++;
    movesText.textContent = moves;

    selectedPiece = null;
    drawPuzzle();
    checkWin();
}

let draggedPosition = null;

function dragStart(event) {
    draggedPosition = Number(event.target.dataset.position);
}

function dragOver(event) {
    event.preventDefault();
}

function dropPiece(event) {
    event.preventDefault();

    const targetPosition = Number(event.target.dataset.position);

    if (
        draggedPosition === null ||
        draggedPosition === targetPosition
    ) {
        return;
    }

    swap(draggedPosition, targetPosition);

    moves++;
    movesText.textContent = moves;

    draggedPosition = null;

    drawPuzzle();
    checkWin();
}

function swap(first, second) {
    const temp = pieces[first];
    pieces[first] = pieces[second];
    pieces[second] = temp;
}

function checkWin() {
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i] !== i) return;
    }

    winGame();
}

function playWinSound() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;

    if (!AudioCtor) {
        return;
    }

    if (!audioContext) {
        audioContext = new AudioCtor();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    const notes = [392.0, 523.25, 659.25, 783.99, 659.25, 523.25];

    notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        const startTime = audioContext.currentTime + index * 0.18;

        gainNode.gain.setValueAtTime(0.0001, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.18, startTime + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.36);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.38);
    });
}

function winGame() {
    gameStarted = false;
    stopTimer();
    playWinSound();

    let finalScore = 1000 - (seconds * 5) - (moves * 10) - ((SIZE - 3) * 200);

    if (finalScore < 100) finalScore = 100;

    scoreText.textContent = finalScore;

    const isLastLevel = currentLevelIndex === LEVELS.length - 1;
    const nextLevelText = isLastLevel ? "🔁 Play Again" : `➡️ Next Level (${LEVELS[currentLevelIndex + 1].id})`;
    document.getElementById("nextLevel").textContent = nextLevelText;

    result.innerHTML = `
        <div class="success">
            🎉 PUZZLE COMPLETE! 🎉
            <br><br>
            <img
                src="${encodeURI(currentPerson.image)}"
                alt="${currentPerson.name}"
            >
            <br>
            ⭐ ${currentPerson.name}
            <br>
            🏆 Score: ${finalScore}
        </div>
    `;
}

function shuffleGame() {
    if (!currentPerson) {
        newGame();
        return;
    }

    shuffleArray(pieces);

    moves = 0;
    seconds = 0;
    selectedPiece = null;
    gameStarted = true;

    movesText.textContent = "0";
    scoreText.textContent = "0";
    result.innerHTML = "";

    updateTime();
    drawPuzzle();
    startTimer();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    stopTimer();

    timer = setInterval(() => {
        if (!gameStarted) return;

        seconds++;
        updateTime();
    }, 1000);
}

function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function updateTime() {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    timeText.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(remaining).padStart(2, "0");
}

updateLevelUI();
newGame();
