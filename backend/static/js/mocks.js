const mockView = document.getElementById("mockView");

/**
 * Central config for mock interviews
 */
const MOCK_CONTENT = {
  dsa: {
    title: "DSA Mock Interview",
    description:
      "Timed DSA interview with real interview-level questions and evaluation.",
  },
  system: {
    title: "System Design Mock Interview",
    description:
      "Design scalable systems with feedback on architecture and trade-offs.",
  },
  hr: {
    title: "HR Mock Interview",
    description:
      "Behavioral and situational questions with communication feedback.",
  },
  faang: {
    title: "FAANG Mock Interview",
    description:
      "FAANG-style interview experience with high-difficulty questions.",
  },
  startup: {
    title: "Startup Mock Interview",
    description:
      "Fast-paced interviews focused on practical problem-solving.",
  },
  peer: {
    title: "Peer to Peer Mock",
    description:
      "Practice interviews with peers and mutual feedback.",
  },
  expert: {
    title: "Expert Interview",
    description:
      "One-on-one interview with industry professionals.",
  },
};

function renderMock(type) {
  const data = MOCK_CONTENT[type];
  if (!data) return;

  document.querySelectorAll(".right-view").forEach(v => {
    v.style.display = "none";
  });

  mockView.style.display = "block";
  mockView.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>

    <div style="margin-top:16px; color:#9ca3af; font-size:13px;">
      (Later: scheduling, timers, recordings, feedback.)
    </div>
  `;
}

/**
 * Event delegation (robust)
 */
document.addEventListener("click", e => {
  const item = e.target.closest("#sidebar-mocks .sidebar-item");
  if (!item) return;

  document
    .querySelectorAll("#sidebar-mocks .sidebar-item")
    .forEach(i => i.classList.remove("active"));

  item.classList.add("active");
  renderMock(item.dataset.mock);
});
