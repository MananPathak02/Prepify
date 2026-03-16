const openFilter = document.getElementById("openFilter");
const closeFilter = document.getElementById("closeFilter");
const filterPanel = document.getElementById("filterPanel");

openFilter.addEventListener("click", () => {
  filterPanel.style.display = "block";
});

closeFilter.addEventListener("click", () => {
  filterPanel.style.display = "none";
});

    const sidebarItems = document.querySelectorAll(
  "#sidebar-questions .sidebar-item"
);

const views = document.querySelectorAll(".right-view");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const view = item.dataset.view;

    // remove active from all sidebar items
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // hide all right-side views
    views.forEach(v => v.style.display = "none");

    // show correct view
    if (view === "dsa") {
      document.getElementById("dsaView").style.display = "block";
    }

    if (view === "coding") {
      document.getElementById("interviewView").style.display = "block";
    }

    if (view === "aptitude") {
      document.getElementById("apptitudeView").style.display = "block";
    }
  });
});

// default open Interview Questions
document.querySelector('[data-view="coding"]').click();

    lucide.createIcons();

function renderFilters() {
  document.querySelectorAll(".filter-group").forEach(group => {
    const type = group.querySelector(".filter-header").dataset.filter;
    const container = group.querySelector(".filter-options");
    container.innerHTML = "";

    filterData[type].forEach(value => {
      const div = document.createElement("div");
      div.className = "filter-option";
      div.textContent = value;

      div.onclick = () => toggleFilter(type, value, div);
      container.appendChild(div);
    });
  });
}

function toggleFilter(type, value, el) {
  activeFilters[type] ??= new Set();

  if (activeFilters[type].has(value)) {
    activeFilters[type].delete(value);
    el.classList.remove("active");
  } else {
    activeFilters[type].add(value);
    el.classList.add("active");
  }

  // later: applyFiltersToQuestions()
}

function renderActivePills() {
  const container = document.getElementById("activeFilters");
  container.innerHTML = "";

  Object.entries(activeFilters).forEach(([type, values]) => {
    values.forEach(v => {
      const pill = document.createElement("span");
      pill.className = "filter-pill";
      pill.textContent = `${v}`;
      container.appendChild(pill);
    });
  });
}



(function () {
  const sections = document.querySelectorAll(".sidebar-section");

  sections.forEach(section => {
    const label = section.querySelector(".sidebar-label");
    if (!label) return;

    // Capture label text BEFORE modifying DOM
    const rawLabel = label.textContent.trim().toLowerCase();

    // Collect sidebar items
    const items = Array.from(section.querySelectorAll(".sidebar-item"));

    // Wrap items
    const contentWrapper = document.createElement("div");
    contentWrapper.style.display = "none";
    contentWrapper.style.flexDirection = "column";
    contentWrapper.style.gap = "4px";

    items.forEach(item => contentWrapper.appendChild(item));
    section.appendChild(contentWrapper);

    // Chevron (simple, small)
    const chevron = document.createElement("span");
    chevron.innerHTML = "›";
    chevron.style.fontSize = "30px";
    chevron.style.marginLeft = "auto";
    chevron.style.transition = "transform 0.2s ease";

    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.cursor = "pointer";
    label.appendChild(chevron);

    let open = false;

    // Toggle on click
    label.addEventListener("click", () => {
      open = !open;
      contentWrapper.style.display = open ? "flex" : "none";
      chevron.style.transform = open ? "rotate(90deg)" : "rotate(0deg)";
    });

    // ✅ DEFAULT OPEN SECTIONS
    if (rawLabel === "library" || rawLabel === "fundamentals") {
      open = true;
      contentWrapper.style.display = "flex";
      chevron.style.transform = "rotate(90deg)";
    }
  });
})();
// TOP NAVBAR LOGIC
const tabQuestions = document.getElementById("tab-questions");
const tabResources = document.getElementById("tab-resources");

const sidebarQuestions = document.getElementById("sidebar-questions");
const sidebarResources = document.getElementById("sidebar-resources");

const dsaView = document.getElementById("dsaView");
const interviewView = document.getElementById("interviewView");
const apptitudeView = document.getElementById("apptitudeView");
const resourcesView = document.getElementById("resourcesView");

// QUESTIONS TAB
tabQuestions.addEventListener("click", () => {
  tabQuestions.classList.add("active");
  tabResources.classList.remove("active");

  sidebarQuestions.style.display = "block";
  sidebarResources.style.display = "none";

  dsaView.style.display = "block";
  interviewView.style.display = "none";
  apptitudeView.style.display = "none";
  resourcesView.style.display = "none";
});

// RESOURCES TAB
tabResources.addEventListener("click", () => {
  tabResources.classList.add("active");
  tabQuestions.classList.remove("active");

  sidebarQuestions.style.display = "none";
  sidebarResources.style.display = "block";

  dsaView.style.display = "none";
  interviewView.style.display = "none";
  apptitudeView.style.display = "none";
  resourcesView.style.display = "block";

  resourcesView.innerHTML = `
    <h2>Resources</h2>
    <p>Select a resource from the sidebar</p>
  `;
});
// RESOURCES SIDEBAR CLICKS
document.getElementById("res-notes").addEventListener("click", () => {
  resourcesView.innerHTML = `
    <h2>Notes</h2>
    <p>Here you can show PDF notes, handwritten notes, etc.</p>
  `;
});

document.getElementById("res-roadmaps").addEventListener("click", () => {
  resourcesView.innerHTML = `
    <h2>Roadmaps</h2>
    <p>Here you can show learning roadmaps.</p>
  `;
});

document.getElementById("res-books").addEventListener("click", () => {
  resourcesView.innerHTML = `
    <h2>Books</h2>
    <p>Here you can show recommended books.</p>
  `;
});