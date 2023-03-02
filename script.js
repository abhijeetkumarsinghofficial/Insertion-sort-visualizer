const array = [];
const numBars = 10;

//dislay array when window loads
window.addEventListener("load", () => {
    const container = document.querySelector(".array");
    container.innerHTML = "";
    array.forEach((element) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${element * 3}px`;
        bar.textContent = element;
        container.appendChild(bar);
    });
});

function createArray() {
  let usedNumbers = [];
  for (let i = 0; i < numBars; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (usedNumbers.includes(randomNumber));
    usedNumbers.push(randomNumber);
    array.push(randomNumber);
  }
}

function displayArray() {
  const container = document.querySelector(".array");
  container.innerHTML = "";

  array.forEach((element) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${element * 3}px`;
    bar.textContent = element;
    container.appendChild(bar);
  });
}

function insert(index, value) {
  array.splice(index, 0, value);
  displayArray();
}

async function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let value = array[i];

    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
      displayArray();
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    array[j + 1] = value;
    displayArray();
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  array.sort((a, b) => a - b);
  displayArray();
}

function reset() {
  array.length = 0;
  createArray();
  displayArray();
}

createArray();
displayArray();
