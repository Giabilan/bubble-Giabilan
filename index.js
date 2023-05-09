const counterDisplay = document.querySelector("h3");
let counter = 0;

// info - Une fonction ne se joue pas toute seule il faut l'appeler
const bubbleMaker = () => {
  // Création d'une balise <span>
  const bubble = document.createElement("span");
  // Ajout de la class bubble dans le span
  bubble.classList.add("bubble");
  // le body, tu as un enfant qui est bubble
  document.body.appendChild(bubble);

  // A chaque F5 il redonne des chiffres random, valeur min 100px à max 300px
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // c'est un "if""else"
  // Si Math.random() est > à 0.5 alors tu renvoie 1 sinon tu renvoie -1
  // définition : ">" = si supérieur | "?" = alors | ":" = sinon

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // j'ajoute un click a bubble
  bubble.addEventListener("click", () => {
    //   +1 à chaque click
    counter++;
    // .textContent pour écrire du texte à l'intérieur de h3
    counterDisplay.textContent = counter;
    // Quand je te clique dessus tu disparaît
    bubble.remove();
  });

  setTimeout(() => {
    //   Dans 8000 ms tu dégage !
    bubble.remove();
  }, 8000);
};

// bubbleMaker tu me la joue en setInterval tout les 700ms
setInterval(bubbleMaker, 700);
