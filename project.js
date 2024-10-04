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
