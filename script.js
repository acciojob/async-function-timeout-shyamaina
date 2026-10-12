//your JS code here. If required.

const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn.addEventListener("click", async (event) => {
  event.preventDefault();

  const text = textInput.value;
  const delay = Number(delayInput.value);

  await wait(delay);

  output.textContent = text;
});

