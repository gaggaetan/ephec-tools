
const clickOnElement = (element) => {
    const mouseClickEvents = ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'];
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}
clickOnElement(document.getElementById("openTeamsClientInBrowser"))