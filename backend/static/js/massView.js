const companies = window.companiesData || [];

function groupCompanies(type) {
  return companies.filter(c => c.category === type);
}

function createList(items) {
  return items.map(c => `
    <div class="company-item" onclick="openCompany('${c.link}')">
      <span class="company-name">${c.name}</span>
      <span class="company-arrow">→</span>
    </div>
  `).join("");
}

function renderCompanies() {
  const container = document.getElementById("massView");

  container.innerHTML = `
    <h2>Mass Recruitment</h2>

    <div class="company-section">

      <div class="company-column">
        <h3>Service Based</h3>
        ${createList(groupCompanies("service"))}
      </div>

      <div class="company-column">
        <h3>Product Based</h3>
        ${createList(groupCompanies("product"))}
      </div>

    </div>

    <div class="company-section">

      <div class="company-column">
        <h3>Startups</h3>
        ${createList(groupCompanies("startup"))}
      </div>

      <div class="company-column">
        <h3>Unicorns</h3>
        ${createList(groupCompanies("unicorn"))}
      </div>

    </div>
  `;
}

function openCompany(link) {
  if (link) window.open(link, "_blank");
}

document.addEventListener("DOMContentLoaded", renderCompanies);