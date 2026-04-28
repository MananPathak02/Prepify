const interviews = window.interviewsData || [];


function renderInterviews() {
  const container = document.getElementById("interviewList");
  container.innerHTML = "";

  if (interviews.length === 0) {
    container.innerHTML = `<p class="placeholder">No interviews available</p>`;
    return;
  }

  interviews.forEach((item) => {
    container.innerHTML += `
    <div class="interview-card">

        <div class="interview-company">${item.company}</div>

        <div class="interview-role">${item.role}</div>

        <div class="interview-author">
        By ${item.author || "Anonymous"}
        </div>

        <div class="interview-date">${item.date}</div>

        <div class="card-arrow">
        <i data-lucide="arrow-right"></i>
        </div>

    </div>
    `;
  });

  // 🔥 IMPORTANT (icons won’t render without this)
  lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", renderInterviews);    