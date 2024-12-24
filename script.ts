// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement | null;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement | null;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement | null;

// Ensure essential elements exist
if (!form || !resumeDisplayElement || !shareableLinkContainer || !shareableLinkElement || !downloadPdfButton) {
    console.error("Some DOM elements are missing. Please check your HTML structure.");
    throw new Error("Required DOM elements not found.");
}

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value.trim();
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    // Ensure username is provided
    if (!username) {
        alert("Please provide a username to generate a shareable link.");
        return;
    }

    // Save form data in localStorage with the username as the key
    const resumeData = { name, email, phone, education, experience, skills };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;

    // Generate a shareable URL with the username
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); // Opens print dialog
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name || '';
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email || '';
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone || '';
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education || '';
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience || '';
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills || '';
        }
    }
});
