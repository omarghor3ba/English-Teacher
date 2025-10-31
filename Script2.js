function checkAnswer1() {
  const answer = document.querySelector('input[name="question1"]:checked');
  const result = document.getElementById("result1");
  if (!answer) {
    result.innerText = "Please select an answer.";
  } else if (answer.value === "C") {
    result.innerText = "Good job!";
    result.style.color = "#32fa00ff";
  } else {
    result.innerText = "Try again.";
    result.style.color = "#cc0000";
}
}

function checkAnswer2() {
  const answer = document.querySelector('input[name="question2"]:checked');
  const result = document.getElementById("result2");
  if (!answer) {
    result.innerText = "Please select an answer.";
  } else if (answer.value === "D") {
    result.innerText = "Good job!";
    result.style.color = "#32fa00ff";

  } else {
    result.innerText = "Try again.";
    result.style.color = "#cc0000";
  }
}

function checkAnswer3() {
  const answer = document.querySelector('input[name="question3"]:checked');
  const result = document.getElementById("result3");
  if (!answer) {
    result.innerText = "Please select an answer.";
  } else if (answer.value === "C") {
    result.innerText = "Good job!";
    result.style.color = "#32fa00ff";
  } else {
    result.innerText = "Try again.";
    result.style.color = "#cc0000";
  }
}

function checkAnswer4() {
  const answer = document.querySelector('input[name="question4"]:checked');
  const result = document.getElementById("result4");
  if (!answer) {
    result.innerText = "Please select an answer.";
  } else if (answer.value === "D") {
    result.innerText = "Good job!";
    result.style.color = "#32fa00ff";
  } else {
    result.innerText = "Try again.";
    result.style.color=    result.style.color = "#cc0000";
  }
}
