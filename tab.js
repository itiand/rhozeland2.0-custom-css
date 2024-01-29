document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]"); // each tabItem
  const tabViews = document.querySelectorAll(".tab-view");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedTabView = document.querySelector(tab.dataset.tabTarget);

      //remove active class to all tab-views
      tabViews.forEach((tabView) => {
        tabView.classList.remove("active-tab");
      });

      //remove active class to all tab-items
      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });

      //add active class to that one target
      ////tab-view
      selectedTabView.classList.add("active-tab");
      ////tab-items__i
      tab.classList.add("active-tab");
    });
  });
});
