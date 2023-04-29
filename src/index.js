import { loadHeader } from "./header"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadFooter } from "./footer"

const tabs = document.querySelectorAll(".tab");
tabs.forEach((clickedTab) => {
    clickedTab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
    });

    clickedTab.classList.add("active");
});

console.log("This works");