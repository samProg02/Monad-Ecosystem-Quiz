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
    options: ["1s", "2s", "200ms", "500ms"],
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
    options: ["Smol", "Dreiki", "Medusa", "KB"],
    answer: "KB",
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
];

// Game Variables
let currentQuestionIndex = 0;
let score = 0;
let points = 0;
let timer;
let timeLeft = 5;
let shuffledQuestions = [];
let isQuizActive = false;
let highScore = 0;
let highPoints = 0;
let isNewHighScore = false;

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

// Load highscore from localStorage
function loadHighScore() {
  try {
    highScore = parseInt(localStorage.getItem("monadQuizHighScore")) || 0;
    highPoints = parseInt(localStorage.getItem("monadQuizHighPoints")) || 0;
  } catch (error) {
    console.warn("localStorage not available, using default values");
    highScore = 0;
    highPoints = 0;
  }
}

// Save highscore to localStorage
function saveHighScore(score, points) {
  if (score > highScore) {
    highScore = score;
    highPoints = points;

    try {
      localStorage.setItem("monadQuizHighScore", score.toString());
      localStorage.setItem("monadQuizHighPoints", points.toString());
    } catch (error) {
      console.warn("Could not save to localStorage:", error.message);
    }

    isNewHighScore = true;
    return true;
  }
  isNewHighScore = false;
  return false;
}

// Quiz Functions
function startQuiz() {
  loadHighScore(); // Load highscore when starting quiz
  // Shuffle questions and randomize options for each question
  shuffledQuestions = shuffleArray(questions).map((question) =>
    shuffleQuestionOptions(question)
  );
  currentQuestionIndex = 0;
  score = 0;
  points = 0;
  isQuizActive = true;
  isNewHighScore = false;

  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showSuccessScreen();
    return;
  }

  const question = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;
  const maxPoints = totalQuestions * 10;

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

function startTimer() {
  timeLeft = 5;
  document.getElementById("timer").textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      if (isQuizActive) {
        gameOver();
      }
    }
  }, 1000);
}

function selectAnswer(selectedOption) {
  if (!isQuizActive) return;

  clearInterval(timer);
  const question = shuffledQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((button) => {
    if (button.textContent === question.answer) {
      button.classList.add("correct");
    } else if (
      button.textContent === selectedOption &&
      selectedOption !== question.answer
    ) {
      button.classList.add("incorrect");
    }
    button.disabled = true;
  });

  if (selectedOption === question.answer) {
    score++;
    points += 10; // Add 10 points for each correct answer
    // Continue to next question after correct answer
    setTimeout(() => {
      currentQuestionIndex++;
      loadQuestion();
    }, 1500);
  } else {
    // Wrong answer - go to game over screen
    setTimeout(() => {
      gameOver();
    }, 1500);
  }
}

function gameOver() {
  isQuizActive = false;
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("gameOverScreen").style.display = "block";

  const isNewHigh = saveHighScore(score, points);
  const totalQuestions = shuffledQuestions.length;
  const maxPoints = totalQuestions * 10;

  let scoreHTML = `<div>Current Score: ${score}/${totalQuestions}</div>`;
  scoreHTML += `<div style="margin-top: 0.3rem;">Total Points: ${points} pts</div>`;
  scoreHTML += `<div style="margin-top: 0.5rem; opacity: 0.8;">Your High Score: ${highScore}/${totalQuestions} (${highPoints} pts)</div>`;

  if (isNewHigh) {
    scoreHTML += `<div style="color: #00ff00; font-weight: bold; margin-top: 0.5rem;">🎉 NEW HIGH SCORE! 🎉</div>`;
  }

  document.getElementById("gameOverScore").innerHTML = scoreHTML;

  // Always show tweet button, and always tweet the high score
  const tweetBtn = document.getElementById("gameOverTweet");
  let tweetText;

  if (isNewHighScore) {
    tweetText = `🎉 NEW HIGH SCORE! I achieved ${highPoints} points (${highScore}/${totalQuestions}) on the Monad Ecosystem Knowledge Quiz by @bolarindesamso1 Think you can beat my record? #MonadQuiz #NewRecord #Blockchain`;
  } else {
    tweetText = `I achieved ${highPoints} points (${highScore}/${totalQuestions}) on the Monad Ecosystem Knowledge Quiz by @bolarindesamso1 Think you can beat my high score? #MonadQuiz #Blockchain`;
  }

  tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  tweetBtn.style.display = "inline-block";
}

function showSuccessScreen() {
  isQuizActive = false;
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("successScreen").style.display = "block";

  const isNewHigh = saveHighScore(score, points);
  const totalQuestions = shuffledQuestions.length;
  const maxPoints = totalQuestions * 10;

  let scoreHTML = `<div>Perfect Score: ${score}/${totalQuestions}!</div>`;
  scoreHTML += `<div style="margin-top: 0.3rem;">Total Points: ${points} pts</div>`;
  if (highScore < totalQuestions) {
    scoreHTML += `<div style="margin-top: 0.5rem; opacity: 0.8;">Previous High Score: ${highScore}/${totalQuestions} (${highPoints} pts)</div>`;
  }

  if (isNewHigh || score === totalQuestions) {
    scoreHTML += `<div style="color: #00ff00; font-weight: bold; margin-top: 0.5rem;">🏆 ULTIMATE MONAD MASTER! 🏆</div>`;
  }

  document.getElementById("successScore").innerHTML = scoreHTML;

  // Always show tweet button for perfect scores, and always tweet the high score
  const tweetBtn = document.getElementById("successTweet");
  const tweetText = `🏆 ULTIMATE ACHIEVEMENT! I achieved a PERFECT SCORE of ${highPoints} points (${highScore}/${totalQuestions}) on the Monad Knowledge Quiz! I'm a certified Monad Master! 🚀 #MonadMaster #PerfectScore #Blockchain`;
  tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  tweetBtn.style.display = "inline-block";
}

function restartQuiz() {
  document.getElementById("gameOverScreen").style.display = "none";
  document.getElementById("successScreen").style.display = "none";
  document.getElementById("welcomeScreen").style.display = "block";

  // Reset all states but keep highscore
  clearInterval(timer);
  currentQuestionIndex = 0;
  score = 0;
  points = 0;
  isQuizActive = false;
  isNewHighScore = false;
}
