let message = document.getElementById("message");

let messageOnline = () => {
    message.textContent = "Internet Connection Available";
    message.style.cssText = "background-color: black; color: #ffffff";
};

let messageOffline = () => {
    message.textContent = "No Internet Connection";
    message.style.cssText = "background-color: yellow; color: #000000";
};

if (window.navigator.onLine) {
    messageOnline();
} else {
    messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
