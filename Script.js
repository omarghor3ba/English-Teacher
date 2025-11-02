function checkAnswer(num) {
  let radios = document.getElementsByName("question" + num);
  let result = document.getElementById("result" + num);

  // Correct answers for each question:
  const correctAnswers = {
    1: "B", // walks
    2: "B", // freezes
    3: "C", // go
    4: "B"  // Does
  };

  let selected = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selected = radios[i].value;
      break;
    }
  }

  if (selected === null) {
    result.innerText = "Please select an answer.";
    result.style.color = "#cc0000";
  } else if (selected === correctAnswers[num]) {
    result.innerText = "Good job!";
    result.style.color = "#00aa00";
  } else {
    result.innerText = "Try again.";
    result.style.color = "#cc0000";
  }
}
