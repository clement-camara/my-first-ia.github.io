// function createMessage(answer) {
//   output = "La réponse de l'utilisateur est : <b>" + answer + "</b>";
//   return output
// }




const createMessage = (answer) => {
  let message = [
  "Je pense que la doudoune sera nécessaire",
  "On peut commencer à mettre des tongs",
  "Tous en slip"]

  if (answer < 10) {
  message = message[0]
  } else if (answer > 10) {
  message = message[1]
  } else if (answer < 20) {
  message = message[2]
  };
  return message
};

const form = document.getElementById("my-form");
console.log(form);

let message = document.querySelector("#ia-message");
let counter = document.querySelector("#counter");
let count = 0;

form.addEventListener("submit", (event) => {
  let input = form.querySelector("#user-answer");
  answer = input.value
  message.textContent = createMessage(answer);
  count = count += 1
  counter.textContent = count;
});






