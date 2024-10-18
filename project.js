// Function to go back to the main menu (hides the new user guide and scrolls to the top)
function goBackToMainMenu() {
    // Hide the 'new-user-guide' div
    document.getElementById('new-user-guide').style.display = 'none';

    // Scroll to the top of the page or navigate back to the main menu section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to show the new user guide (displays the guide and scrolls to it)
function showNewUserGuide() {
    // Show the 'new-user-guide' div
    document.getElementById('new-user-guide').style.display = 'block';

    // Scroll to the 'new-user-guide' div smoothly
    document.getElementById('new-user-guide').scrollIntoView({ behavior: 'smooth' });
}

// Function for the search bar to search buttons by name and scroll to them
function searchButton() {
    // Get the value entered in the search bar
    let input = document.getElementById('search-bar').value.toLowerCase();

    // Get all buttons on the page
    let buttons = document.querySelectorAll('.btn');

    // Loop through buttons to find a match
    buttons.forEach(button => {
        let buttonText = button.textContent.toLowerCase();

        // If a match is found, scroll to that button
        if (buttonText.includes(input)) {
            button.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Function to handle department selection in dropdown
function handleDepartmentSelection() {
    // Get the selected department
    const departmentSelect = document.getElementById('department-select');
    const selectedDepartment = departmentSelect.value;

    // Action based on the selected department
    switch (selectedDepartment) {
        case 'dispatchers':
            // Redirect to the Drive Manager Master page
            window.location.href = 'Dispatchers.html';
            break;
        case 'recruiters':
            // Redirect to the Recruiters page (replace with actual page when ready)
            window.location.href = 'Recruiters.html';
            break;
        case 'csr':
            // Redirect to the Customer Service Representative page (replace with actual page when ready)
            window.location.href = 'CSR.html';
            break;
        default:
            // Default case for invalid selection
            alert('Please select a valid department.');
    }
}

// Event listener to trigger when a department is selected
document.getElementById('department-select').addEventListener('change', handleDepartmentSelection);

// Function to toggle the visibility of the instructions for creating the innovative user profile
function toggleInnovativeUserProfile() {
    const instructionsDiv = document.getElementById('innovative-user-profile');
    if (instructionsDiv.style.display === 'none' || instructionsDiv.style.display === '') {
        instructionsDiv.style.display = 'block'; // Show the instructions
    } else {
        instructionsDiv.style.display = 'none'; // Hide the instructions
    }
}
// Function to toggle the visibility of the instructions for creating the innovative user profile
function togglesteps8and9and10() {
    const steps8to10Div = document.getElementById('steps-8-9-10');
    if (steps8to10Div.style.display === 'none' || steps8to10Div.style.display === '') {
        steps8to10Div.style.display = 'block'; // Show the instructions
    } else {
        steps8to10Div.style.display = 'none'; // Hide the instructions
    }
}
// Event listener for the button to show/hide the innovative user profile instructions
document.querySelector('.backbttn').addEventListener('click', toggleInnovativeUserProfile);
