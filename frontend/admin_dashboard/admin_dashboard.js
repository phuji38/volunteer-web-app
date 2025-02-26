function redirectTo(page) {
    window.location.href = page;
}

// Display Current Time
function updateTime() {
    let now = new Date();
    let formattedTime = now.toLocaleString();
    document.getElementById("current-time").innerText = formattedTime;
}
setInterval(updateTime, 1000);
updateTime();

// Event Attendance Chart
const eventCtx = document.getElementById('eventChart').getContext('2d');
new Chart(eventCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: 'Event Attendance',
            data: [10, 25, 30, 45, 60, 55, 75, 90],
            backgroundColor: 'rgba(255, 107, 0, 0.2)',
            borderColor: 'rgba(255, 107, 0, 1)',
            borderWidth: 2
        }]
    }
});

// Volunteer Activity Chart
const volunteerCtx = document.getElementById('volunteerChart').getContext('2d');
new Chart(volunteerCtx, {
    type: 'doughnut',
    data: {
        labels: ['Checked In', 'No Show', 'Dismissed'],
        datasets: [{
            data: [75, 10, 15],
            backgroundColor: ['#2ecc71', '#e74c3c', '#f1c40f']
        }]
    }
});
