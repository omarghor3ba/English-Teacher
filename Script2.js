// Compact version — works for all questions
function checkAnswer(questionNum) {
  const answers = { 1: "C", 2: "D", 3: "C", 4: "D" }; // correct answers
  const explanations = {
    1: "Good Job.",
    2: "Good Job.",
    3: "Good Job.",
    4: "Good Job."
  };

  const selected = document.querySelector(`input[name="question${questionNum}"]:checked`);
  const result = document.getElementById(`result${questionNum}`);

  if (!selected) {
    result.textContent = "⚠️ Please select an answer.";
    result.style.color = "orange";
  } else if (selected.value === answers[questionNum]) {
    result.textContent = `✅ Correct! ${explanations[questionNum]}`;
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong.`;
    result.style.color = "red";
  }
}
