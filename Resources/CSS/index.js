// userInfo.js
document.addEventListener('DOMContentLoaded', () => {
    const browserPlaceholder = document.getElementById('browserPlaceholder');
    const timezonePlaceholder = document.getElementById('timezonePlaceholder');

    // Detect Browser
    const userAgent = navigator.userAgent;
    let browserName;
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else {
        browserName = "Unknown";
    }
    browserPlaceholder.textContent = browserName;

    // Detect Time Zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timezonePlaceholder.textContent = timeZone;
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    var dropdown = document.querySelector('.navbar .dropdown');
    dropdown.classList.toggle('active');
});
