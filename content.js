chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "execute_code") {
        window.myExtensionOption1 = request.option1;
        window.myExtensionOption2 = request.option2;
        console.log(request.option1);
        console.log(request.option2);
        const event = new CustomEvent("optionTrigger", {
            detail: {
                myExtensionOption1: request.option1,
                myExtensionOption2: request.option2
            }
        });
        window.dispatchEvent(event);
    }
});