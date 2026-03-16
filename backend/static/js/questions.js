const questions = window.questionsData;

const detailsPanel = document.querySelector(".question-details");
const problemCards = document.querySelectorAll(".problem");

function showQuestion(index) {
  problemCards.forEach(card => card.classList.remove("active"));
  problemCards[index].classList.add("active");

  const q = questions[index];

  detailsPanel.innerHTML = `
    <h2>${q.title}</h2>

    <p><strong>Problem:</strong></p>
    <p>${q.problem}</p>

    <p><strong>Input Format:</strong> ${q.input_format}</p>
    <p><strong>Output Format:</strong> ${q.output_format}</p>
    <p><strong>Constraints:</strong> ${q.constraints}</p>

    <p><strong>Example:</strong></p>
    <pre>
Input:
${q.example.input}

Output:
${q.example.output}
    </pre>

    <p><strong>Difficulty:</strong> ${q.difficulty}</p>
    <p><strong>Topic:</strong> ${q.topic}</p>
  `;
}
