document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]"); // each tabItem
  const dynamicTabs = document.querySelectorAll(".dynamic-tab"); //everything with a tab-view class

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedTabView = document.querySelectorAll(tab.dataset.tabTarget);

      //remove active class to all tab-headings
      //resets
      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });

      //remove active class to all elements with tab-views, --> therefore //resets
      dynamicTabs.forEach((tabView) => {
        tabView.classList.remove("active-tab");
      });

      //add active class to that one target
      ////tab-view
      selectedTabView.forEach((view) => {
        view.classList.add("active-tab");
      });
      ////tab-items__i
      tab.classList.add("active-tab");
    });
  });
});
