const assessmentView = document.getElementById("assessmentView");

/**
 * Central assessment content
 */
const ASSESSMENT_CONTENT = {
  dsa: {
    title: "DSA Assessment",
    description:
      "Timed coding assessment covering arrays, strings, recursion, and DSA fundamentals.",
  },
  sql: {
    title: "SQL Assessment",
    description:
      "Test your SQL skills with real-world query-based questions.",
  },
  os: {
    title: "Operating Systems Assessment",
    description:
      "MCQs and scenario-based questions on OS concepts.",
  },
  dbms: {
    title: "DBMS Assessment",
    description:
      "Assess your DBMS knowledge including normalization and transactions.",
  },
  cn: {
    title: "Computer Networks Assessment",
    description:
      "Questions on networking fundamentals and protocols.",
  },
  faang: {
    title: "FAANG Company Test",
    description:
      "Company-style assessment inspired by FAANG hiring tests.",
  },
  startup: {
    title: "Startup Hiring Test",
    description:
      "Fast-paced assessment focusing on practical problem-solving.",
  },
};

function renderAssessment(type) {
  const data = ASSESSMENT_CONTENT[type];
  if (!data) return;

  document.querySelectorAll(".right-view").forEach(v => {
    v.style.display = "none";
  });

  assessmentView.style.display = "block";
  assessmentView.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>

    <div style="margin-top:16px; color:#9ca3af; font-size:13px;">
      (Later: timers, rankings, certificates, analytics.)
    </div>
  `;
}

/**
 * Sidebar click handling
 */
document.addEventListener("click", e => {
  const item = e.target.closest("#sidebar-assessments .sidebar-item");
  if (!item) return;

  document
    .querySelectorAll("#sidebar-assessments .sidebar-item")
    .forEach(i => i.classList.remove("active"));

  item.classList.add("active");
  renderAssessment(item.dataset.assess);
});
