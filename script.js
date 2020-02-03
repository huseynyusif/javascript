let game = {
  questions: [
    { question: "Rusiyanin paytaxtdi Istanbuldur?", answer: "n" },
    { question: "1 deqiqede 120 saniye var?", answer: "n" },
    { question: "Su 100 derece temperaturda qaynayir", answer: "y" },
    { question: "Yer kuresi Guneshe en yaxin planetdir?", answer: "n" }
  ],

  currentStap: 0,
  score: 0,

  endGame: function() {
    let again = confirm("Oyun bitdi.Yeni oyuna baslamaq ucun tesdiqleyin");
    if (again) {
      this.currentStap = 0;
      this.score = 0;
      this.randomUp();
    } else {
      document.querySelector("#box h3").innerHTML = "Oyun Bitdi";
    }
  },

  randomUp: function() {
    if (document.querySelector("#box")) {
      document.querySelector("#box").remove();
    }
    let element = document.createElement("div");
    element.id = "box";
    let yazi = document.createElement("h3");
    yazi.innerText = this.questions[this.currentStap].question;

    let parg = document.createElement("p");
    parg.innerText =
      this.questions.length +
      " " +
      "Sual icinden" +
      " " +
      this.score +
      " " +
      "duzgun cavab verdininz";
    element.append(yazi);
    element.append(parg);
    document.querySelector("#app").append(element);
  }
};

window.onkeyup = e => {
  if (e.key === "y" || e.key === "n") {
    if (e.key === game.questions[game.currentStap].answer) {
      alert("Dogurudur");
      game.score++;
    } else {
      alert("Yanlisdir");
    }
    if (game.currentStap < game.questions.length - 1) {
      game.currentStap++;
      game.randomUp();
    } else {
      game.endGame();
    }
  }
};

game.randomUp();
