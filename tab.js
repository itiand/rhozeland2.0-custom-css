document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]");
  console.log("tabs", tabs);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedTabView = document.querySelector(tab.dataset.tabTarget);
      selectedTabView.classList.add("red-border");
      console.log("RED BORDER ADDED ON", selectedTabView);
    });
  });
});
