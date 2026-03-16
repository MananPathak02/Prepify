const resourcesView = document.getElementById("resourcesView");

/**
 * Single source of truth
 */
const RESOURCE_CONTENT = {
  os: {
    title: "Operating System Notes",
    description:
      "Processes, Threads, Deadlocks, CPU Scheduling, Paging, Virtual Memory.",
  },
  dbms: {
    title: "DBMS Notes",
    description:
      "Normalization, Indexing, Transactions, ACID properties, SQL queries.",
  },
  cn: {
    title: "Computer Networks Notes",
    description:
      "OSI & TCP/IP models, HTTP/HTTPS, DNS, Routing, Congestion control.",
  },
  striver: {
    title: "Striver SDE Sheet",
    description:
      "Most trusted DSA roadmap for cracking product-based companies.",
  },
  lovebabbar: {
    title: "Love Babbar DSA Sheet",
    description:
      "Beginner-friendly curated DSA problems with structured flow.",
  },
  blind75: {
    title: "Blind 75",
    description:
      "Top 75 interview questions frequently asked by FAANG companies.",
  },
  faang: {
    title: "FAANG HR Emails",
    description:
      "Verified HR and recruiter email IDs for FAANG companies.",
  },
  startups: {
    title: "Startup HR Contacts",
    description:
      "Hiring contacts from early-stage and fast-growing startups.",
  },
  resume: {
    title: "Resume Templates",
    description:
      "ATS-friendly resume templates designed for software roles.",
  },
  referral: {
    title: "Referral Links",
    description:
      "Employee referral links and portals for top companies.",
  },
};

/**
 * Render helper
 */
function renderResource(type) {
  const data = RESOURCE_CONTENT[type];

  if (!data) {
    resourcesView.innerHTML = `
      <h2>Resources</h2>
      <p>No data available.</p>
    `;
    return;
  }

  resourcesView.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
  `;
}

/**
 * ✅ EVENT DELEGATION (this is the key fix)
 */
document.addEventListener("click", e => {
  const item = e.target.closest(
    "#sidebar-resources .sidebar-item"
  );
  if (!item) return;

  document
    .querySelectorAll("#sidebar-resources .sidebar-item")
    .forEach(i => i.classList.remove("active"));

  item.classList.add("active");

  const type = item.dataset.res;
  renderResource(type);
});
