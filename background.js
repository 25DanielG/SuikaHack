chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === "form_submitted") {
        chrome.storage.local.get(["option1", "option2"], async (result) => {
            let queryOptions = { active: true, lastFocusedWindow: true };
            let [tab] = await chrome.tabs.query(queryOptions);
            chrome.tabs.sendMessage(tab.id, {
                action: "execute_code",
                option1: result.option1,
                option2: result.option2
            });
        });
    }
});