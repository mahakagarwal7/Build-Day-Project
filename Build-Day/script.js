


console.log("Env API Key:", window.MY_API_KEY);


const enableBtn = document.getElementById("enableBtn");
const notifyBtn = document.getElementById("notifyBtn");

enableBtn.addEventListener("click", () => {
    Notification.requestPermission().then(permission => {
        alert("Permission: " + permission);
    });
});


notifyBtn.addEventListener("click", () => {
    if (Notification.permission === "granted") {
        new Notification("👋 Hey there!");
    } else {
        alert("Please enable notifications first!");
    }
});
