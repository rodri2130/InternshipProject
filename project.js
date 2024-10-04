function goBackToMainMenu() {
    // Hide the 'new-user-guide' div
    document.getElementById('new-user-guide').style.display = 'none';

    // Scroll to the top of the page or navigate back to the main menu section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showNewUserGuide() {
    // Show the 'new-user-guide' div
    document.getElementById('new-user-guide').style.display = 'block';

    // Scroll to the 'new-user-guide' div smoothly
    document.getElementById('new-user-guide').scrollIntoView({ behavior: 'smooth' });
}
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
