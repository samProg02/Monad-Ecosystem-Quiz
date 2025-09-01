// Questions Array
const questions = [
  {
    question: "What is Monad primarily known for?",
    options: ["Scalability", "Gaming", "NFT Marketplace", "Storage"],
    answer: "Scalability",
  },
  {
    question: "Which language is Monad EVM compatible with?",
    options: ["Solidity", "Rust", "Go", "Python"],
    answer: "Solidity",
  },
  {
    question: "What consensus does Monad use?",
    options: ["Proof of Work", "Proof of Stake", "Delegated PoS", "Hybrid"],
    answer: "Proof of Stake",
  },
  {
    question: "What is Monad's block time target?",
    options: ["1s", "2s", "400ms", "500ms"],
    answer: "200ms",
  },
  {
    question: "Which is not part of the founder?",
    options: ["Benja", "Keone", "James", "Eunice"],
    answer: "Benja",
  },
  {
    question: "Which NFT made it to the Monad founder residency?",
    options: ["Chog", "SLMND", "Mongang", "Chogstarr"],
    answer: "Chog",
  },
  {
    question: "Who is the founder of Mondana Baddies?",
    options: ["Medusa", "OrpheuzKaze", "Dreiki", "Clawnad"],
    answer: "Medusa",
  },
  {
    question: "Who is the founder of Mongang?",
    options: ["Drieki", "Emil", "Tequila", "Frost"],
    answer: "Emil",
  },
  {
    question: "Which of the following is not a memecoin platform on Monad?",
    options: ["Flap", "Naddotfun", "Cult", "Crystal Exchange"],
    answer: "Crystal Exchange",
  },
  {
    question: "What is the color of Monad?",
    options: ["Green", "Blue", "Purple", "White"],
    answer: "Purple",
  },
  {
    question: "Who is the founder of Monadverse?",
    options: ["Emil", "Berzan", "Keone", "Clawnad"],
    answer: "Clawnad",
  },
  {
    question:
      "Which of the following is the social media betting app on Monad?",
    options: ["Monorail", "Kuru exchange", "Kizzy", "Narrative"],
    answer: "Kizzy",
  },
  {
    question: "Which of the following is not a monanimal?",
    options: ["Moyaki", "Salmonad", "Momo", "Chog"],
    answer: "Momo",
  },
  {
    question: "Who is the founder of Chog?",
    options: ["Crexsol", "Aarij", "Benja", "Medusa"],
    answer: "Benja",
  },
  {
    question: "When did Monad testnet start?",
    options: ["February 19", "February 14", "February 15", "February 10"],
    answer: "February 19",
  },
  {
    question: "Where is the Monad HQ located?",
    options: ["Malaysia", "USA", "Vietnam", "Singapore"],
    answer: "USA",
  },
  {
    question: "Who is the CM for Narrative on Monad?",
    options: ["G-Van", "Smol", "Kingloui", "OrpheuzKaze"],
    answer: "Kingloui",
  },
  {
    question: "When did CMC say Monad is going to launch?",
    options: ["Sept 17", "Sept 29", "Sept 20", "Sept 25"],
    answer: "Sept 29",
  },
  {
    question: "Who is the popular Chogstarr artist?",
    options: ["Tonyy", "Gleader", "Dreiki", "Puresoul"],
    answer: "Tonyy",
  },
  {
    question: "What's the popular greetin word in the monad community?",
    options: ["Gmonad", "GSLMND", "Gchog", "Gmongang"],
    answer: "Gmonad",
  },
  {
    question: "How many is the Rayvo OGs?",
    options: ["400", "310", "321", "117"],
    answer: "321",
  },
  {
    question: "Who is known as the king of shitposting on Monad?",
    options: ["Benja", "Dreiki", "Smol", "Leys Bobr"],
    answer: "Benja",
  },
  {
    question:
      "Which of the following community airdropped Monad early believers?",
    options: ["Succinct", "Union", "Wormhole", "Caldera"],
    answer: "Wormhole",
  },
  {
    question: "What's the name of Keone's dog?",
    options: ["Benja", "Anago", "Jack", "Rex"],
    answer: "Anago",
  },
  {
    question:
      "Which NFT project launched the first Open edition NFT on testnet?",
    options: ["Chogstarr", "Spiky", "Overnads", "Chog"],
    answer: "Chogstarr",
  },
  {
    question: "Which of this is not an LST on Monad?",
    options: ["Apriori", "Fastlane", "Magma", "Monorail"],
    answer: "Monorail",
  },
  {
    question: "What is the liquid token when you stake on Kintsu?",
    options: ["gmon", "smon", "kmon", "aprmon"],
    answer: "smon",
  },
  {
    question: "What is the liquid token when you stake on Magma?",
    options: ["gmon", "smon", "aprmon", "shmon"],
    answer: "gmon",
  },
  {
    question: "What is the liquid token when you stake on Fastlane?",
    options: ["gmon", "smon", "aprmon", "shmon"],
    answer: "shmon",
  },
  {
    question: "What is the liquid token when you stake on apriori?",
    options: ["gmon", "smon", "aprmon", "shmon"],
    answer: "aprmon",
  },
  {
    question: "Which of the following is a sport betting dApp on Monad",
    options: ["Levr", "Kizzy", "Opinion Labs", "Narrative"],
    answer: "Levr",
  },
  {
    question: "Which of the following NFTs is a pixel art",
    options: ["Spiky", "Chogstarr", "Mondana Baddies", "Chog"],
    answer: "Spiky",
  },
  {
    question: "Which NFT art represents all the Monanimals",
    options: ["Monadian", "Monad momas", "Monadverse", "Monbois"],
    answer: "Monadverse",
  },
  {
    question: "What is Rayvo building?",
    options: ["Software", "AI glasses", "Adult content site", "NFT"],
    answer: "AI glasses",
  },
  {
    question: "Which of the following is a game building on monad",
    options: ["Lumiterra", "FC26", "GTA VI", "Sparkball"],
    answer: "Lumiterra",
  },
  {
    question: "Who is the founder of 10k NFT",
    options: ["Clawnad", "Puresoul", "Tequila", "Keone"],
    answer: "Puresoul",
  },
  {
    question: "What is g-van building",
    options: ["Perpl", "Kizzy", "Narrative", "Composite Labs"],
    answer: "Perpl",
  },
  {
    question: "Who among the 1k nads did Keone refer to as a chef?",
    options: ["Cheese", "Cozy", "Mav", "Berzan"],
    answer: "Cheese",
  },
  {
    question: "How many nads receive the Monad 1 million nads SBT",
    options: ["100k+", "600k+", "1 million+", "50"],
    answer: "600k+",
  },
  {
    question: "Which NFT marketplace is solely building on Monad",
    options: ["Kingdomly", "Opensea", "Poply", "Magic Eden"],
    answer: "Poply",
  },
  {
    question: "Who is the founder of Chogstarr",
    options: ["Benja", "Tequila", "Medusa", "KB"],
    answer: "Tequila",
  },
  {
    question: "Who is the founder of Kuru",
    options: ["Smol", "Dreiki", "Fravashi", "KB"],
    answer: "Fravashi",
  },
  {
    question: "Who is the NFT lead on the Monad team",
    options: ["Benja", "Clawnad", "Karma", "Kingloui"],
    answer: "Karma",
  },
  {
    question: "On what day of the week is Monad Shark Tank held?",
    options: ["Monday", "Tuesday", "Wednesday", "Friday"],
    answer: "Tuesday",
  },
  {
    question: "Who is the founder of La Mouch NFT",
    options: ["Physe", "Clawnad", "Gleader", "Kingloui"],
    answer: "Gleader",
  },
  {
    question: "Who is the founder of Overnads?",
    options: ["Physe", "Tequila", "Karma", "Keone"],
    answer: "Physe",
  },
  {
    question: "Who is the founder of Chewy?",
    options: ["Leonardo", "Physe", "Smol", "Kaiz"],
    answer: "Kaiz",
  },
  {
    question: "Who is the founder of Retards?",
    options: ["Physe", "Dreiki", "Leys Bobr", "Keone"],
    answer: "Dreiki",
  },
  {
    question: "Who created the Shark Tank?",
    options: ["Mike", "Eunice", "John", "Cryptunez"],
    answer: "Mike",
  },
  {
    question:
      "Who's doing countdown of not cutting his hair till Kizzy is on mainnet?",
    options: ["Crex", "Leonardo", "Benja", "Smol"],
    answer: "Crex",
  },
  {
    question: "Who's doing countdown of no sex till mainnet?",
    options: ["Crex", "Leonardo", "Benja", "Puresoul"],
    answer: "Puresoul",
  },
  {
    question: "Which of the following is not a defi dApp on Monad?",
    options: ["Monorail", "Kuru", "Poply", "Crystal Exchnage"],
    answer: "Poply",
  },
  {
    question: "What is the name of the Lumiterra campaign on Monad?",
    options: ["Lumi fire", "Lumonad", "Lumimon", "Luminad"],
    answer: "Lumonad",
  },
  {
    question:
      "Which of the dApp has it own official fantasy premier league competition?",
    options: ["Composite", "Perpl", "Kizzy", "Enjoyoors"],
    answer: "Perpl",
  },
  {
    question: "Which of the following dApp rewards pokemon for staking assets?",
    options: ["Magma", "Apriori", "Enjoyoor", "Kuru"],
    answer: "Enjoyoor",
  },
  {
    question: "Which of the following dApp gives a monster trait?",
    options: ["Kuru", "Kizzy", "Hashflow", "Naddotfun"],
    answer: "Kuru",
  },
  {
    question:
      "Which of the following memecoin platform rewards Top 1k diamond hands?",
    options: ["Flap", "Cult", "XL", "Naddotfun"],
    answer: "Cult",
  },
  {
    question:
      "Which of the following is not a perp trading platform building on Monad?",
    options: ["Pingu", "Perpl", "Drake", "Kuru"],
    answer: "Kuru",
  },
  {
    question:
      "Which of the following chain has direct compatibility with monad?",
    options: ["Bitcoin", "Sui", "Babylon", "Ethereum"],
    answer: "Ethereum",
  },
  {
    question: "How many TPS did Monad upgrade to on the testnet-2?",
    options: ["11k", "12k", "13k", "17k"],
    answer: "17k",
  },
  {
    question: "Who's the payment lead on Monad?",
    options: ["Pareen", "Bekind", "Cryptunez", "Mike"],
    answer: "Pareen",
  },
  {
    question: "Founder of Monadian?",
    options: ["Leys BObr", "Eden", "Leonardo", "Sapphire"],
    answer: "Eden",
  },
  {
    question: "How many validators in testnet-2?",
    options: ["100", "99", "161", "150"],
    answer: "161",
  },
  {
    question: "How many cities are the validators of testnet-2 in?",
    options: ["50", "64", "20", "70"],
    answer: "64",
  },
  {
    question: "How many countries are the validators of testnet-2 in?",
    options: ["33", "34", "17", "20"],
    answer: "33",
  },
  {
    question: "What's testnet-2 official website?",
    options: ["monad.xyz", "gmonad.xyz", "gmonads.com", "monads.com"],
    answer: "gmonads.com",
  },
  {
    question: "What's the reward currency on Kizzy?",
    options: ["Naira", "Purple K", "USDT", "$MON"],
    answer: "Purple K",
  },
  // {
  //   question: "Who composed the Chogstarr Song?",
  //   options: ["Drake", "Preballin", "BadboyFoxy", "Dreiki"],
  //   answer: "BadboyFoxy",
  // },
  {
    question: "How many people received the Monad card at first?",
    options: ["2500", "5000", "1000", "3000"],
    answer: "5000",
  },
  {
    question: "Who uses Rubik cube to imitate NFTs on Monad?",
    options: ["Da Gabriel", "Adeleke", "Ipadee", "Cheese"],
    answer: "Da Gabriel",
  },
  {
    question: "Who is the leader of Kizzy cult?",
    options: ["Da Gabriel", "Adeleke", "Ipadee", "Cheese"],
    answer: "Ipadee",
  },
  // {
  //   question: "Which wallet supports Monad from day one?",
  //   options: ["OKX wallet", "Rabby", "Phantom", "Metamask"],
  //   answer: "Phantom",
  // },
  //  {
  //   question: "Who Temu'd the Retard NFTs?",
  //   options: ["Gleader", "Bigchog", "Berzan", "Crypto Mike"],
  //   answer: "Gleader",
  // },
  // {
  //   question: "Who built NFT Temple?",
  //   options: ["Bigchog", "Gleader", "Berzan", "Open Danny"],
  //   answer: "Bigchog",
  // },
  // {
  //   question: "Who drops Community NFTs to nads the most?",
  //   options: ["Berzan", "Gleader", "Bigchog", "KB"],
  //   answer: "Berzan",
  // },
  // {
  //   question: "What is the chain ID of the Monad testnet?",
  //   options: ["10143", "10142", "10144", "10141"],
  //   answer: "10143",
  // },
  // {
  //   question: "What is the chain ID of the Monad mainnet?",
  //   options: ["143", "142", "144", "141"],
  //   answer: "143",
  // }
  // {
  //   question: "Which of these Monad NFT projects is picked for monad residency?",
  //   options: ["Chogstarr", "Chog", "Spiky", "La mouch"],
  //   answer: "Chog",
  // },
  // {
  //   question: "When was Monad's first YouTube video released?",
  //   options: ["July 15", "July 12", "June 15", "August 1"],
  //   answer: "July 15",
  // },
  // {
  //   question: "When did Monad change its X handle from monad_xyz to Monad?",
  //   options: ["July 15", "July 10", "June 20", "August 1"],
  //   answer: "July 15",
  // },
  // {
  //   question: "What is the max smart contract size on Monad?",
  //   options: ["128kb", "64kb", "256kb", "512kb"],
  //   answer: "128kb",
  // },
  // {
  //   question: "How many dApps out of 246 dApps are native to Monad only while the rest are multi-chain?",
  //   options: ["54 dApps", "42 dApps", "68 dApps", "39 dApps"],
  //   answer: "54 dApps",
  // },
  // {
  //   question: "What TPS did Monad peak at on Day 1 of testnet?",
  //   options: ["5000", "3500", "7500", "4200"],
  //   answer: "5000",
  // },
  // {
  //   question: "When was Nigeria Kizzy Community launched?",
  //   options: ["June 9", "June 15", "May 25", "July 1"],
  //   answer: "June 9",
  // },
  // {
  //   question: "When did Kizzy introduce the new game mode SPREADS?",
  //   options: ["May 26", "May 20", "June 1", "May 15"],
  //   answer: "May 26",
  // },
  // {
  //   question: "Who won the Monad Games where 5 degens competed for $5k worth of testnet Mon?",
  //   options: ["Open Danny", "KB", "Intern", "Crypto Mike"],
  //   answer: "Open Danny",
  // },
  // {
  //   question: "When did Monad announce 'break the testnet'?",
  //   options: ["March 9", "March 15", "February 28", "March 20"],
  //   answer: "March 9",
  // },
  // {
  //   question: "When did Monad Games premiere?",
  //   options: ["April 10", "April 15", "March 25", "April 5"],
  //   answer: "April 10",
  // },
  // {
  //   question: "When was 34,000+ non-transferable, valueless soulbound NFT sent out to commemorate participation in the Monad Games Testnet Cipher Challenge?",
  //   options: ["April 14", "April 20", "April 8", "April 25"],
  //   answer: "April 14",
  // },
  // {
  //   question: "When was the first episode of 'Monad In The Morning' series by The Pipeline released?",
  //   options: ["February 20", "February 15", "March 1", "February 25"],
  //   answer: "February 20",
  // },
  // {
  //   question: "When did Monad distribute 600k+ soulbound NFTs to commemorate Monad hitting 1M followers on X?",
  //   options: ["March 30", "April 1", "March 25", "April 5"],
  //   answer: "March 30",
  // },
  // {
  //   question: "What is the block time on Monad?",
  //   options: ["0.5 seconds", "1 second", "2 seconds", "0.25 seconds"],
  //   answer: "0.5 seconds",
  // },
  // {
  //   question: "When did Monad Telegram OG group kick off?",
  //   options: ["April 2023", "March 2023", "May 2023", "June 2023"],
  //   answer: "April 2023",
  // },
  // {
  //   question: "When was Monad official YouTube channel created?",
  //   options: ["July 12", "July 15", "July 10", "July 20"],
  //   answer: "July 12",
  // },
  // {
  //   question: "When did MonadBFT (fast fault tolerant consensus) go live on Monad testnet-2?",
  //   options: ["July 29", "July 25", "August 1", "July 20"],
  //   answer: "July 29",
  // },
  // {
  //   question: "When did OKX launch Monad Ecosystem Hub featuring dApps building on Monad testnet?",
  //   options: ["May 22", "May 20", "May 25", "May 30"],
  //   answer: "May 22",
  // },
  // {
  //   question: "When did Monad launch their Discord server?",
  //   options: ["October 2022", "September 2022", "November 2022", "December 2022"],
  //   answer: "October 2022",
  // },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let points = 0;
let timer;
let timeLeft = 10;
let shuffledQuestions = [];
let isQuizActive = false;
let userAnswers = []; // Track all user answers for scorecard

// New variables for pause/resume functionality
let isTimerPaused = false;
let timerInterval = null;

// Utility Functions
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function shuffleQuestionOptions(question) {
  return {
    ...question,
    options: shuffleArray(question.options),
  };
}

// Visibility change event listener for pause/resume functionality
document.addEventListener("visibilitychange", function () {
  if (isQuizActive && timerInterval) {
    if (document.hidden) {
      // Tab is hidden/minimized - pause timer
      pauseTimer();
    } else {
      // Tab is visible again - resume timer
      resumeTimer();
    }
  }
});

// Window focus/blur events as additional safety (some browsers might not fire visibilitychange)
window.addEventListener("blur", function () {
  if (isQuizActive && timerInterval && !isTimerPaused) {
    pauseTimer();
  }
});

window.addEventListener("focus", function () {
  if (isQuizActive && timerInterval && isTimerPaused) {
    resumeTimer();
  }
});

function pauseTimer() {
  if (timerInterval && !isTimerPaused) {
    clearInterval(timerInterval);
    isTimerPaused = true;
    // Visual indicator that timer is paused
    const timerElement = document.getElementById("timer");
    if (timerElement) {
      timerElement.style.opacity = "0.5";
      timerElement.textContent = `${timeLeft} (Paused)`;
    }
  }
}

function resumeTimer() {
  if (isTimerPaused && isQuizActive) {
    isTimerPaused = false;
    // Resume visual state
    const timerElement = document.getElementById("timer");
    if (timerElement) {
      timerElement.style.opacity = "1";
      timerElement.textContent = timeLeft;
    }
    // Restart the timer interval
    startTimerInterval();
  }
}

function startTimerInterval() {
  timerInterval = setInterval(() => {
    if (!isTimerPaused) {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        if (isQuizActive) {
          // Time up - treat as wrong answer
          selectAnswer(null); // null indicates time ran out
        }
      }
    }
  }, 1000);
}

// Quiz Functions
function startQuiz() {
  // Reset everything for new game (no more persistent high scores)
  shuffledQuestions = shuffleArray(questions).map((question) =>
    shuffleQuestionOptions(question)
  );
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  points = 0;
  userAnswers = [];
  isQuizActive = true;

  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showFinalResults();
    return;
  }

  const question = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;

  // Update progress bar
  updateProgressBar();

  document.getElementById("questionCounter").textContent = `Question ${
    currentQuestionIndex + 1
  } of ${totalQuestions}`;
  document.getElementById("questionText").textContent = question.question;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
  });

  startTimer();
}

function updateProgressBar() {
  let progressBar = document.getElementById("progressBar");

  // Create progress bar if it doesn't exist
  if (!progressBar) {
    const quizHeader = document.querySelector(".quiz-header");
    const progressContainer = document.createElement("div");
    progressContainer.innerHTML = `
      <div style="width: 100%; background: rgba(255, 255, 255, 0.2); border-radius: 10px; height: 8px; margin: 1rem 0; overflow: hidden;">
        <div id="progressBar" style="height: 100%; background: linear-gradient(45deg, #00ff00, #8a2be2); border-radius: 10px; width: 0%; transition: width 0.5s ease; box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);"></div>
      </div>
    `;
    quizHeader.insertAdjacentHTML("afterend", progressContainer.innerHTML);
    progressBar = document.getElementById("progressBar");
  }

  // Calculate and animate progress
  const totalQuestions = shuffledQuestions.length;
  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  progressBar.style.width = `${progressPercentage}%`;

  // Add pulsing effect when progress updates
  progressBar.style.animation = "none";
  setTimeout(() => {
    progressBar.style.animation = "pulse 0.5s ease-in-out";
  }, 10);
}

function startTimer() {
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timeLeft = 10;
  isTimerPaused = false;
  document.getElementById("timer").textContent = timeLeft;
  document.getElementById("timer").style.opacity = "1";

  // Use the new timer interval function
  startTimerInterval();

  // Keep the old timer variable for compatibility
  timer = timerInterval;
}

function selectAnswer(selectedOption) {
  if (!isQuizActive) return;

  // Clear timer properly
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  clearInterval(timer);
  isTimerPaused = false;

  const question = shuffledQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option-btn");

  // Record the answer
  const answerRecord = {
    question: question.question,
    userAnswer: selectedOption || "Time Up",
    correctAnswer: question.answer,
    isCorrect: selectedOption === question.answer,
  };
  userAnswers.push(answerRecord);

  // Visual feedback
  if (selectedOption !== null) {
    // Only show visual feedback if user actually selected an option (not timeout)
    buttons.forEach((button) => {
      if (
        button.textContent === selectedOption &&
        selectedOption === question.answer
      ) {
        // Show green if user picked the correct answer
        button.classList.add("correct");
      } else if (
        button.textContent === selectedOption &&
        selectedOption !== question.answer
      ) {
        // Show red only on the wrong answer they selected
        button.classList.add("incorrect");
      }
      button.disabled = true;
    });
  } else {
    // Time ran out - just disable all buttons without any visual feedback
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  // Update scores
  if (selectedOption === question.answer) {
    correctAnswers++;
    points += 10;
  } else {
    wrongAnswers++;
  }

  // Continue to next question after delay
  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 1500);
}

function showFinalResults() {
  isQuizActive = false;
  // Clear any remaining timers
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  clearInterval(timer);
  isTimerPaused = false;

  document.getElementById("quizScreen").style.display = "none";

  const totalQuestions = shuffledQuestions.length;

  if (correctAnswers === totalQuestions) {
    // Perfect score - show success screen with special message
    document.getElementById("successScreen").style.display = "block";

    let scoreHTML = `<div>Perfect Score: ${correctAnswers}/${totalQuestions}!</div>`;
    scoreHTML += `<div style="margin-top: 0.3rem;">Total Points: ${points} pts</div>`;
    scoreHTML += `<div style="color: #00ff00; font-weight: bold; margin-top: 0.8rem; font-size: 1.3rem;">🎉 CONGRATULATIONS! 🎉</div>`;
    scoreHTML += `<div style="color: #ba55d3; font-weight: bold; margin-top: 0.5rem; font-size: 1.1rem;">You're a Monad Core Community Member!</div>`;

    document.getElementById("successScore").innerHTML = scoreHTML;

    const tweetBtn = document.getElementById("successTweet");
    const tweetText = `🎉 MONAD CORE COMMUNITY MEMBER! I achieved a perfect score of ${points} points (${correctAnswers}/${totalQuestions}) on the Monad Ecosystem Knowledge Quiz by @bolarindesamso1 🚀 Take yours now on monad-eco-quiz.netlify.app`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;

    // Update instructions for scorecard download
    updateScoreCardInstructions("successScreen");
  } else {
    // Regular result - show game over screen as results screen
    document.getElementById("gameOverScreen").style.display = "block";

    // Change the heading to "QUIZ RESULTS" instead of "GAME OVER"
    const heading = document.querySelector("#gameOverScreen h2");
    if (heading) heading.textContent = "QUIZ RESULTS";

    let scoreHTML = `<div>Final Score: ${correctAnswers}/${totalQuestions}</div>`;
    scoreHTML += `<div style="margin-top: 0.3rem;">Correct: ${correctAnswers} | Missed: ${wrongAnswers}</div>`;
    scoreHTML += `<div style="margin-top: 0.3rem;">Total Points: ${points} pts</div>`;

    document.getElementById("gameOverScore").innerHTML = scoreHTML;

    const tweetBtn = document.getElementById("gameOverTweet");
    const tweetText = `I scored ${points} points (${correctAnswers}/${totalQuestions}) on the Monad Ecosystem Knowledge Quiz by @bolarindesamso1 Think you can beat my score? Take yours now on monad-eco-quiz.netlify.app`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;

    // Update instructions for scorecard download
    updateScoreCardInstructions("gameOverScreen");
  }
}

function updateScoreCardInstructions(screenId) {
  const screenElement = document.getElementById(screenId);
  const screenshotText = screenElement.querySelector(".screenshot-text");

  if (screenshotText) {
    screenshotText.innerHTML = `
      <div style="margin-bottom: 1rem; color: #ba55d3; font-size: 1rem;">Created by samson.nad</div>
      <div style="margin-bottom: 1rem;">
        <button onclick="downloadScoreCard()" style="padding: 0.8rem 1.5rem; background: linear-gradient(45deg, #ff6b6b, #8a2be2); border: none; border-radius: 10px; color: white; cursor: pointer; font-size: 1rem; transition: all 0.3s ease; margin-right: 1rem;">
          📥 Download Score Card
        </button>
        <a href="https://x.com/bolarindesamso1" target="_blank" style="padding: 0.8rem 1.5rem; background: linear-gradient(45deg, #1da1f2, #0d8bd9); border: none; border-radius: 10px; color: white; cursor: pointer; font-size: 1rem; transition: all 0.3s ease; text-decoration: none; display: inline-block;">
          Follow samson.nad
        </a>
      </div>
      <div>PRO TIP!!! Download your score card and attach it to your tweet for authentication</div>
    `;
  }
}

function downloadScoreCard() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = 600;
  canvas.height = 400;

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#1a0033");
  gradient.addColorStop(0.5, "#2d0066");
  gradient.addColorStop(1, "#4a00cc");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add border
  ctx.strokeStyle = "#8a2be2";
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  // Title
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 28px Arial";
  ctx.textAlign = "center";
  ctx.fillText("MONAD ECOSYSTEM QUIZ", canvas.width / 2, 60);

  // Subtitle
  ctx.font = "18px Arial";
  ctx.fillStyle = "#ba55d3";
  ctx.fillText("Official Score Card", canvas.width / 2, 90);

  // Score details
  const totalQuestions = shuffledQuestions.length;
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px Arial";
  ctx.fillText(
    `Score: ${correctAnswers}/${totalQuestions}`,
    canvas.width / 2,
    140
  );

  ctx.font = "20px Arial";
  ctx.fillText(
    `Correct: ${correctAnswers} | Missed: ${wrongAnswers}`,
    canvas.width / 2,
    170
  );
  ctx.fillText(`Total Points: ${points} pts`, canvas.width / 2, 200);

  // Performance badge
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  ctx.font = "bold 22px Arial";
  if (percentage === 100) {
    ctx.fillStyle = "#00ff00";
    ctx.fillText("🏆 MONAD MASTER 🏆", canvas.width / 2, 240);
  } else if (percentage >= 80) {
    ctx.fillStyle = "#ffff00";
    ctx.fillText("⭐ EXPERT LEVEL ⭐", canvas.width / 2, 240);
  } else if (percentage >= 60) {
    ctx.fillStyle = "#ffa500";
    ctx.fillText("📚 GOOD KNOWLEDGE 📚", canvas.width / 2, 240);
  } else {
    ctx.fillStyle = "#ff6b6b";
    ctx.fillText("🔄 KEEP LEARNING 🔄", canvas.width / 2, 240);
  }

  // Date and authenticity
  ctx.fillStyle = "#ba55d3";
  ctx.font = "14px Arial";
  const currentDate = new Date().toLocaleDateString();
  ctx.fillText(`Quiz completed: ${currentDate}`, canvas.width / 2, 280);
  ctx.fillText("Created by samson.nad", canvas.width / 2, 300);

  // Verification code (simple hash based on score and date)
  const verificationCode = btoa(
    `${correctAnswers}-${totalQuestions}-${currentDate}`
  ).substring(0, 8);
  ctx.fillText(`Verification: ${verificationCode}`, canvas.width / 2, 320);

  // Download the image
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Monad-Quiz-Score-${correctAnswers}-${totalQuestions}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function restartQuiz() {
  // Hide all screens
  document.getElementById("gameOverScreen").style.display = "none";
  document.getElementById("successScreen").style.display = "none";
  document.getElementById("welcomeScreen").style.display = "block";

  // Reset game over heading back to default in case it was changed
  const heading = document.querySelector("#gameOverScreen h2");
  if (heading) heading.textContent = "QUIZ RESULTS";

  // Reset all states (no persistent high scores)
  clearInterval(timer);
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  points = 0;
  userAnswers = [];
  isQuizActive = false;
  isTimerPaused = false;
}

function startTimer() {
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  clearInterval(timer);

  timeLeft = 10;
  isTimerPaused = false;
  const timerElement = document.getElementById("timer");
  timerElement.textContent = timeLeft;
  timerElement.style.opacity = "1";

  // Use the new timer interval function
  startTimerInterval();

  // Keep the old timer variable for compatibility
  timer = timerInterval;
}
