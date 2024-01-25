document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabViews = document.querySelectorAll(".tab-view");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedTabView = document.querySelector(tab.dataset.tabTarget);

      //remove active class to all
      tabViews.forEach((tabView) => {
        tabView.classList.remove("active-tab");
      });

      //add active class to that one target
      selectedTabView.classList.add("active-tab");
      console.log("RED BORDER ADDED ON", selectedTabView);
    });
  });
});
