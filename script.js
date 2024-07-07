// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reservation form validation
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;
    
    if (!name || !phone || !email || !date || !time || !guests) {
        alert('Please fill out all fields.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    alert('Thank you for your reservation!');
    this.reset();
});

// Email validation function
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Dynamic event loading (for demonstration purposes)
document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');
    const events = [
        { name: 'Event 1', date: 'June 15, 2024', time: '7:00 PM', description: 'Description of event 1.' },
        { name: 'Event 2', date: 'July 20, 2024', time: '8:00 PM', description: 'Description of event 2.' }
    ];
    
    events.forEach(event => {
        let eventElement = document.createElement('div');
        eventElement.classList.add('event', 'bg-light', 'p-4', 'mb-3');
        
        let eventHTML = `
            <h3>${event.name}</h3>
            <p>Date and Time: ${event.date}, ${event.time}</p>
            <p>${event.description}</p>
        `;
        
        eventElement.innerHTML = eventHTML;
        eventsContainer.appendChild(eventElement);
    });
});
