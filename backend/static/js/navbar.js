const tabQuestions = document.getElementById("tab-questions");
const tabResources = document.getElementById("tab-resources");
const tabMocks = document.getElementById("tab-mocks");

const sidebarQuestions = document.getElementById("sidebar-questions");
const sidebarResources = document.getElementById("sidebar-resources");
const sidebarMocks = document.getElementById("sidebar-mocks");

const dsaView = document.getElementById("dsaView");
const interviewView = document.getElementById("interviewView");
const apptitudeView = document.getElementById("apptitudeView");
const resourcesViewEl = document.getElementById("resourcesView");
const mockViewEl = document.getElementById("mockView");

const tabAssessments = document.getElementById("tab-assessments");
const sidebarAssessments = document.getElementById("sidebar-assessments");
const assessmentViewEl = document.getElementById("assessmentView");

/* ---------------- ASSESSMENTS TAB ---------------- */
tabAssessments.onclick = () => {
  tabAssessments.classList.add("active");
  tabQuestions.classList.remove("active");
  tabResources.classList.remove("active");
  tabMocks.classList.remove("active");

  sidebarQuestions.style.display = "none";
  sidebarResources.style.display = "none";
  sidebarMocks.style.display = "none";
  sidebarAssessments.style.display = "block";

  document.querySelectorAll(".right-view").forEach(v => {
    v.style.display = "none";
  });

  assessmentViewEl.style.display = "block";
  assessmentViewEl.innerHTML = `
    <h2>Assessments</h2>
    <p>Select an assessment from the sidebar</p>
  `;
};


/* ---------------- QUESTIONS TAB ---------------- */
tabQuestions.onclick = () => {
  tabQuestions.classList.add("active");
  tabResources.classList.remove("active");
  tabMocks.classList.remove("active");
  tabAssessments.classList.remove("active");

  sidebarQuestions.style.display = "block";
  sidebarResources.style.display = "none";
  sidebarMocks.style.display = "none";
  sidebarAssessments.style.display = "none"; // ✅ FIX


  dsaView.style.display = "block";
  interviewView.style.display = "none";
  apptitudeView.style.display = "none";
  resourcesViewEl.style.display = "none";
  mockViewEl.style.display = "none";
  assessmentViewEl.style.display = "none"; // ✅ FIX

};

/* ---------------- RESOURCES TAB ---------------- */
tabResources.onclick = () => {
  tabResources.classList.add("active");
  tabQuestions.classList.remove("active");
  tabMocks.classList.remove("active");
  tabAssessments.classList.remove("active");

  sidebarQuestions.style.display = "none";
  sidebarResources.style.display = "block";
  sidebarMocks.style.display = "none";
  sidebarAssessments.style.display = "none"; // ✅ FIX


  document.querySelectorAll(".right-view").forEach(v => {
    v.style.display = "none";
  });

  assessmentViewEl.style.display = "none"; // ✅ FIX
  resourcesViewEl.style.display = "block";

  resourcesViewEl.innerHTML = `
    <h2>Resources</h2>
    <p>Select a resource from the sidebar</p>
  `;
};

/* ---------------- MOCK INTERVIEW TAB ---------------- */
tabMocks.onclick = () => {
  tabMocks.classList.add("active");
  tabQuestions.classList.remove("active");
  tabResources.classList.remove("active");
  tabAssessments.classList.remove("active");

  sidebarQuestions.style.display = "none";
  sidebarResources.style.display = "none";
  sidebarMocks.style.display = "block";
  sidebarAssessments.style.display = "none"; // ✅ FIX


  document.querySelectorAll(".right-view").forEach(v => {
    v.style.display = "none";
  });

  assessmentViewEl.style.display = "none"; // ✅ FIX
  mockViewEl.style.display = "block";
  
  mockViewEl.innerHTML = `
    <h2>Mock Interviews</h2>
    <p>Select a mock interview from the sidebar</p>
  `;
};
