import { loadHeader } from "./header"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadFooter } from "./footer"

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
    // Add onClick event listener on each tab
    tab.addEventListener("click", () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("red");
        });
        // Add the active class on the clicked tab
        tab.classList.add("red");
        target.classList.add("active");
    });
});

console.log("This works");