import { loadHeader } from "./header"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadFooter } from "./footer"

const tabs = document.querySelectorAll(".tab");
tabs.forEach((clickedTab) => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener("click", () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add("active");
    });
});

console.log("This works");