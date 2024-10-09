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
        case 'drive-manager':
            // Redirect to the Drive Manager Master page
            window.location.href = 'DriveManagerMaster.html';
            break;
        case 'dispatcher':
            // Redirect to the Dispatcher page (replace with actual page when ready)
            window.location.href = 'dispatcher.html';
            break;
        case 'recruiters':
            // Redirect to the Recruiters page (replace with actual page when ready)
            window.location.href = 'recruiters.html';
            break;
        case 'csr':
            // Redirect to the Customer Service Representative page (replace with actual page when ready)
            window.location.href = 'csr.html';
            break;
        default:
            // Default case for invalid selection
            alert('Please select a valid department.');
    }
}

// Event listener to trigger when a department is selected
document.getElementById('department-select').addEventListener('change', handleDepartmentSelection);
