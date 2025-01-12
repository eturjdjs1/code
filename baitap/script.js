document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("profile-form");
    const profileDisplay = document.getElementById("profile-display");

    // Load profile from localStorage
    const loadProfile = () => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        if (profile) {
            profileDisplay.innerHTML = `
                <p><strong>Name:</strong> ${profile.name}</p>
                <p><strong>Email:</strong> ${profile.email}</p>
                <p><strong>Phone Number:</strong> ${profile.phone}</p>
                <p><strong>Address:</strong> ${profile.address}</p>
                <img src="${profile.profilePic}" alt="Profile Picture">
            `;
        }
    };

    // Save profile to localStorage
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const profile = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            profilePic: form["profile-pic"].value,
        };
        localStorage.setItem("profile", JSON.stringify(profile));
        loadProfile();
        form.reset();
    });

    loadProfile();
});
