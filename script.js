(function () {

  emailjs.init({
    publicKey: "FrnlY7YD3mOTkyH7o",
  });
})();
AOS.init();
const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const closeMatricBtn = document.querySelector(".closeMatricBtn");
const closeInterBtn = document.querySelector(".closeinterBtn");
const educationLeftBtn = document.querySelector(".educationleftBtn")
const educationRightBtn = document.querySelector(".educationRightBtn")
const skillLeftBtn = document.querySelector(".skillLeftBtn")
const skillRightBtn = document.querySelector(".skillRightBtn")
const matrixBox = document.querySelector(".matrixBox")
const interBox = document.querySelector(".interBox")
const uniBox = document.querySelector(".uniBox")
const graduationVerifyBtn = document.getElementById("graduationVerify"); // Graduation verify button
const closeGraduationBtn = document.querySelector(".closeuniBtn"); // Graduation close button
const educationalContainer = document.querySelector(".educationContainer")
const header = document.querySelector(".header")
const matrixVerifyBtn = document.querySelector("#matrixVerify")
const interVerifyBtn = document.querySelector(".interVerifyBtn")
const matricCard = document.querySelector(".matricCard")
const interCard = document.querySelector(".interCard")
const graduationCard = document.querySelector(".graduationCard"); // Graduation card
const readMore = document.querySelector("#readMore")
const hiddenText = document.querySelector(".hiddenText")
let eduRound1 = document.querySelector(".eduRound1")
let eduRound2 = document.querySelector(".eduRound2")
let eduRound3 = document.querySelector(".eduRound3")
let skillRound1 = document.querySelector(".skillRound1")
let skillRound2 = document.querySelector(".skillRound2")
let skillRound3 = document.querySelector(".skillRound3")
let hideText = false


const usingBox = document.querySelector(".usingBox")
const learningBox = document.querySelector(".learningBox")
const otherBox = document.querySelector(".otherBox")
function sendVisitorNotification() {
  emailjs.send("service_do8rxtn", "template_n5e1c09");
}

sendVisitorNotification()


let skillCards = [usingBox, learningBox, otherBox]
let educationalCards = [matrixBox, interBox, uniBox]
let resultSheets = [matricCard, interCard]
let eduRContainer = [eduRound1, eduRound2, eduRound3]
let skillRContainer = [skillRound1, skillRound2, skillRound3]
move = 0
move2 = 0
let position = 0;

educationLeftBtn.style.color = "#6C5B01"
educationRightBtn.style.color = "yellow"


skillLeftBtn.style.color = "#6C5B01"
skillRightBtn.style.color = "yellow"


function limitColorLeft(m, cardBtn, card) {
  if (m == 0) {
    cardBtn.style.color = "#6C5B01"
  }
  else {
    cardBtn.style.color = "yellow"
  }
}

graduationVerifyBtn.addEventListener("click", function () {
  graduationCard.style.display = "block"; // Show the graduation card
  closeGraduationBtn.style.display = "block"; // Show the close button for graduation
  interCard.style.display = "none"; // Hide intermediate card
  closeInterBtn.style.display = "none"; // Hide the close button for intermediate
});

closeGraduationBtn.addEventListener("click", function () {
  graduationCard.style.display = "none";
  closeGraduationBtn.style.display = "none";
});

function limitColorRight(m, cardBtn, card) {
  if (m == card.length - 1) {
    cardBtn.style.color = "#6C5B01"
  }
  else {
    cardBtn.style.color = "yellow"
  }
}

let isanimating = false;

function goRight() {
  if (isanimating) return; // Prevent multiple animations
  isanimating = true;

  let opacity = 1;
  if (move < educationalCards.length - 1) {
    const intervalId = setInterval(() => {
      if (opacity <= -10) {
        clearInterval(intervalId);
        educationalCards[move].style.display = "none"; // Hide the current card
        educationalCards[move].style.opacity = "1"; // Reset opacity for the next use
        eduRContainer[move].style.background = "none";
        move++;
        educationalCards[move].style.display = "flex"; // Show the next card
        eduRContainer[move].style.backgroundColor = "#FFD700";
        limitColorLeft(move, educationLeftBtn, educationalCards);
        limitColorRight(move, educationRightBtn, educationalCards);
        matricCard.style.display = "none";
        interCard.style.display = "none";
        closeMatricBtn.style.display = "none";
        closeInterBtn.style.display = "none";
        isanimating = false; // Reset the flag after animation completes
      } else {
        opacity -= 0.1
        educationalCards[move].style.opacity = opacity;

      }
    }, 2);
  } else {
    isanimating = false; // Reset the flag if no animation is needed
  }
}

let isanimatingleft = false;

function goLeft() {
  if (isanimatingleft) return; // Prevent multiple animations
  isanimatingleft = true;

  let opacity = 1;
  if (move > 0) {
    const intervalId = setInterval(() => {
      if (opacity <= -10) {
        clearInterval(intervalId);
        educationalCards[move].style.display = "none"; // Hide the current card
        educationalCards[move].style.opacity = "1"; // Reset opacity for the next use
        eduRContainer[move].style.background = "none";
        move--;
        educationalCards[move].style.display = "flex"; // Show the previous card
        eduRContainer[move].style.backgroundColor = "#FFD700";
        limitColorLeft(move, educationLeftBtn, educationalCards);
        limitColorRight(move, educationRightBtn, educationalCards);
        isanimatingleft = false; // Reset the flag after animation completes
      } else {
        educationalCards[move].style.opacity = opacity;
        opacity -= 0.1;
      }
    }, 2);
  } else {
    isanimatingleft = false; // Reset the flag if no animation is needed
  }
}

let isAnimatingLeft = false;

function goSkillLeft() {
  if (isAnimatingLeft) return; // Prevent multiple animations
  isAnimatingLeft = true;

  let opacity = 1;
  if (move2 > 0) {
    const intervalId = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(intervalId);
        skillCards[move2].style.display = "none";
        skillCards[move2].style.opacity = "1";
        skillRContainer[move2].style.background = "none";
        move2--;
        skillCards[move2].style.display = "flex";
        skillRContainer[move2].style.backgroundColor = "#FFD700";
        limitColorLeft(move2, skillLeftBtn, skillCards);
        limitColorRight(move2, skillRightBtn, skillCards);
        isAnimatingLeft = false; // Reset the flag after animation completes
      } else {
        opacity -= 0.1;
        skillCards[move2].style.opacity = opacity;

      }
    }, 20);
  } else {
    isAnimatingLeft = false;
  }
}

let isAnimating = false;

function goSkillRight() {
  if (isAnimating)
    return;
  isAnimating = true;

  let opacity = 1;
  if (move2 < skillCards.length - 1) {
    const intervalId = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(intervalId);
        skillCards[move2].style.display = "none";
        skillCards[move2].style.opacity = "1";
        skillRContainer[move2].style.background = "none";
        move2++;
        skillCards[move2].style.display = "flex";
        skillRContainer[move2].style.backgroundColor = "#FFD700";
        limitColorLeft(move2, skillLeftBtn, skillCards);
        limitColorRight(move2, skillRightBtn, skillCards);
        isAnimating = false; // Reset the flag after animation completes
      } else {
        opacity -= 0.1;
        skillCards[move2].style.opacity = opacity;

      }
    }, 20);
  } else {
    isAnimating = false; // Reset the flag if no animation is needed
  }
}
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

var typed = new Typed('#element', {
  strings: ["Web Developer.", "Math Teacher.", "Web Designer.", "Web Developer."],
  typeSpeed: 50,
});

let lastScrollTop = 0;
let final = 0;
window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll == 0) {
    header.style.display = "flex"


  }

  if (currentScroll > lastScrollTop) {
    mobileMenu.classList.add("translate-x-full");
    header.style.display = "none"

  } else if (final > 10) {

    header.style.display = "flex"
  }
  final = lastScrollTop - currentScroll;
  lastScrollTop = currentScroll;

});

educationLeftBtn.addEventListener("click", function () {
  goLeft()
})

educationRightBtn.addEventListener("click", function () {
  goRight()

})

skillLeftBtn.addEventListener("click", function () {
  goSkillLeft()
})

skillRightBtn.addEventListener("click", function () {
  goSkillRight()
})

matrixVerifyBtn.addEventListener("click", function () {
  matricCard.style.display = "block"
  closeMatricBtn.style.display = "block"
})

interVerifyBtn.addEventListener("click", function () {
  interCard.style.display = "block"
  closeInterBtn.style.display = "block"
})

closeMatricBtn.addEventListener("click", function () {
  matricCard.style.display = 'none'
  closeMatricBtn.style.display = 'none'
})

closeInterBtn.addEventListener("click", function () {
  interCard.style.display = 'none'
  closeInterBtn.style.display = 'none'
})

interVerifyBtn.addEventListener("click", function () {
  interCard.style.display = "block"
  closeInterBtn.style.display = "block"
})

readMore.addEventListener("click", function () {
  if (!hideText) {
    hiddenText.style.display = "inline"
    readMore.innerText = "Hide"
    hideText = true
  }
  else {
    hiddenText.style.display = "none"
    readMore.innerText = "Read More"
    hideText = false
  }

})
window.botpressWebChat.onEvent(
  function () {
    window.botpressWebChat.sendEvent({ type: "show" });
  },
  ["LIFECYCLE.LOADED"]
);
