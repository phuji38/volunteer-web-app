
function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

function updateSelection() {
    const checkboxes = document.querySelectorAll(".dropdown-content input[type='checkbox']");
    let selectedValues = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });

    const displayText = selectedValues.length > 0 ? selectedValues.join(", ") : "Select skills";
    document.getElementById("selected-values").textContent = displayText;
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".custom-dropdown");
    if (!dropdown.contains(event.target)) {
        document.getElementById("dropdown-content").classList.remove("show");
    }
});
