document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("thankyou.html")) {
        const urlParams = new URLSearchParams(window.location.search);

        // Fill in the confirmation details
        document.getElementById("first-name-display").textContent = urlParams.get("first-name");
        document.getElementById("last-name-display").textContent = urlParams.get("last-name");
        document.getElementById("email-display").textContent = urlParams.get("email");
        document.getElementById("phone-display").textContent = urlParams.get("phone");
        document.getElementById("business-name-display").textContent = urlParams.get("business-name");
        
        // Parse and display the timestamp
        const timestamp = urlParams.get("timestamp");
        if (timestamp) {
            const formattedTime = new Date(timestamp).toLocaleString();
            document.getElementById("timestamp-display").textContent = formattedTime;
        }
    }
});
