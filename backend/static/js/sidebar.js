// ================= QUESTIONS SIDEBAR LOGIC =================

// Right-side view switching
const sidebarItems = document.querySelectorAll(
  "#sidebar-questions .sidebar-item"
);
const views = document.querySelectorAll(".right-view");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const view = item.dataset.view;

    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    views.forEach(v => (v.style.display = "none"));

    if (view === "dsa")
      document.getElementById("dsaView").style.display = "block";

    if (view === "coding")
      document.getElementById("interviewView").style.display = "block";

    if (view === "aptitude")
      document.getElementById("apptitudeView").style.display = "block";

    if (view === "mass")
      document.getElementById("massView").style.display = "block";
  });
});

// ================= ACCORDION (QUESTIONS ONLY) =================
(function () {
  const sections = document.querySelectorAll(
    "#sidebar-questions .sidebar-section"
  );

  sections.forEach(section => {
    const label = section.querySelector(".sidebar-label");
    if (!label) return;

    const rawLabel = label.textContent.trim().toLowerCase();
    const items = Array.from(section.querySelectorAll(".sidebar-item"));

    const wrapper = document.createElement("div");
    wrapper.className = "sidebar-accordion";

    items.forEach(i => wrapper.appendChild(i));
    section.appendChild(wrapper);

    const chevron = document.createElement("span");
    chevron.className = "sidebar-chevron";
    chevron.textContent = "›";

    label.appendChild(chevron);
    label.classList.add("clickable");

    let open = false;

    label.addEventListener("click", () => {
      open = !open;
      wrapper.classList.toggle("open", open);
      chevron.classList.toggle("rotate", open);
    });

    // ✅ DEFAULT OPEN SECTIONS
    if (
      rawLabel === "library" ||
      rawLabel === "fundamentals" ||
      rawLabel === "system design"
    ) {
      open = true;
      wrapper.classList.add("open");
      chevron.classList.add("rotate");
    }
  });
})();

// Default open Interview Questions
document.querySelector('[data-view="coding"]')?.click();
