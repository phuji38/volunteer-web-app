document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signInButton").addEventListener("click", async function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.querySelector('input[name="role"]:checked').id; // Get selected role (volunteer/admin)

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const response = await fetch("/api/signin", { // Calls your Express backend
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");
                window.location.href = "/dashboard.html"; // Redirect after successful login
            } else {
                alert(data.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    });
});