// Function to handle section navigation
function display(sectionId) {
    // Hide all sections
    document.querySelectorAll('body > div[id^="section"]').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the requested section
    document.getElementById(sectionId).style.display = 'block';
    
    // Scroll to top when changing sections
    window.scrollTo(0, 0);
    
    // Initialize carousels when shown
    if (sectionId === 'sectionTajMahalDetailedView') {
        $('#carouselExampleIndicators1').carousel();
    }
}

// Initialize by showing only the home section
window.onload = function() {
    display('sectionHome');
};