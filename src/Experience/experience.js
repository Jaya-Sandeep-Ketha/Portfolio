// function toggleTab(tabId) {
//     // Hide all tab contents
//     const tabContents = document.querySelectorAll('.tab-content');
//     tabContents.forEach(content => {
//         content.classList.remove('active');
//     });

//     // Show the selected tab content
//     const selectedTab = document.getElementById(tabId);
//     if (selectedTab) {
//         selectedTab.classList.add('active');
//         // Scroll to the selected tab content
//         selectedTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
// }

function toggleTab(tabId) {
    const allTabContents = document.querySelectorAll('.tab-content');
    const selectedTabContent = document.getElementById(tabId);
    const skillsContainer = document.getElementById('skills'); // Make sure this ID is assigned to the container of the tabs and content

    // Toggle the active state and manage container height dynamically
    if (selectedTabContent.classList.contains('active')) {
        selectedTabContent.classList.remove('active');
        selectedTabContent.style.display = 'none';
        skillsContainer.style.transform = 'translateY(0)'; // Reset position
    } else {
        allTabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none'; // Hide all content
        });
        selectedTabContent.classList.add('active');
        selectedTabContent.style.display = 'block'; // Show the selected tab
        skillsContainer.style.transform = 'translateY(10%)'; // Slide down
    }
}

function closeAllTabs() {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.style.display = 'none'; // Ensure the content is not just inactive but also not displayed.
        tab.classList.remove('active');
    });

    // Reset the position of the skills container if it's being translated
    const skillsContainer = document.getElementById('skills');
    if (skillsContainer) {
        skillsContainer.style.transform = 'translateY(0)';
    }
}

// // Attach closeAllTabs to all nav links
// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('nav ul li a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', closeAllTabs);
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeAllTabs(); // Close all tabs whenever a navigation link is clicked
        });
    });

    const nonNavLinkAreas = document.querySelectorAll('header, main, footer'); // Assuming your site structure includes these tags
    nonNavLinkAreas.forEach(area => {
        area.addEventListener('click', closeAllTabs, true); // Use capturing phase to handle clicks that are not stopped by other handlers
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const experienceSectionLink = document.querySelector('a[href="#experience"]');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (experienceSectionLink) {
        experienceSectionLink.addEventListener('click', () => {
            setTimeout(() => {
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.style.animation = 'fallDown 5s ease-in-out forwards'; // Add animation trigger
                    }, index * 200); // Stagger the animation by 200ms for each item
                });
            }, 300); // Delay to ensure the section is visible before animating
        });
    }
});