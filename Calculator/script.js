let result = document.getElementById("result");

function appendCharacter(character) {
  result.value += character;
}

function deleteCharacter() {
  result.value = result.value.slice(0, -1);
}

function clearResult() {
  result.value = "  ";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
