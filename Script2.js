function checkAnswer(number) {
  const selected = document.querySelector(`input[name="question${number}"]:checked`);
  const result = document.getElementById(`result${number}`);

  if (!selected) {
    result.innerText = "Please select an answer.";
    return;
  }

  // correct answers for each question
  const correctAnswers = {
    1: "C", // bought
    2: "D", // went
    3: "C", // ate
    4: "D"  // finished
  };

  if (selected.value === correctAnswers[number]) {
    result.innerText = "Good job!";
    result.style.color = "green";
  } else {
    result.innerText = "Try again.";
    result.style.color = "red";
  }
}
