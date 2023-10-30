console.log("popup.js loaded");
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".input-group .options-submit").addEventListener("click", () => {
        const option1 = document.querySelector("#watermelon-combine").checked;
        const el = document.querySelector("#fruit-type");
        let value = el.value;
        const option2 = el.options[el.selectedIndex].value;
        document.querySelector(".input-group .options-submit").style.background = "green";
        setTimeout(() => {
            document.querySelector(".input-group .options-submit").style.background = "";
        }, 1500);
        console.log(option1, option2);
        chrome.storage.local.set({option1, option2}, () => {
            chrome.runtime.sendMessage({action: "form_submitted"});
        });
    });
});