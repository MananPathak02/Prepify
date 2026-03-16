const openFilter = document.getElementById("openFilter");
const closeFilter = document.getElementById("closeFilter");
const filterPanel = document.getElementById("filterPanel");

if (openFilter && closeFilter && filterPanel) {
  openFilter.onclick = () => (filterPanel.style.display = "block");
  closeFilter.onclick = () => (filterPanel.style.display = "none");
}
