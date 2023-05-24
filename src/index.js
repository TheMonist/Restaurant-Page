import { loadHeader } from "./header"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadFooter } from "./footer"

const tabs = document.querySelectorAll("[data-tab-target]");
tabs.forEach((tab) => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener("click", () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        const target = document.querySelector(tab.dataset.tab.tabTarget);
        tabs.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });

        // Add the active class on the clicked tab
        target.classList.add("active");
    });
});

console.log("This works");