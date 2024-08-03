// document.addEventListener("DOMContentLoaded", function() {
//     const skillsLinks = document.querySelectorAll('#skills .skills-tab-links'); // Select all skills tab links
//     const allTabContents = document.querySelectorAll('.skills-tab-contents'); // Select all tab content containers

//     // Function to close all skill tabs
//     function closeAllTabs() {
//         allTabContents.forEach(tab => {
//             tab.style.display = 'none';
//             tab.classList.remove('active');
//         });
//     }

//     // Function to handle clicking outside of tabs to close them
//     function handleClickOutsideTabs(event) {
//         if (!event.target.closest('.skills-tab-links') && !event.target.closest('.skills-tab-contents')) {
//             closeAllTabs();
//         }
//     }

//     // Handle clicking on skill tab links
//     skillsLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor behavior
//             const tabId = this.getAttribute('href').substring(1); // Remove the '#' to get the ID
//             const selectedTabContent = document.getElementById(tabId);

//             // Toggle the selected tab
//             if (selectedTabContent.style.display === 'block') {
//                 selectedTabContent.style.display = 'none';
//                 selectedTabContent.classList.remove('active');
//             } else {
//                 closeAllTabs(); // Close all other tabs first
//                 selectedTabContent.style.display = 'block';
//                 selectedTabContent.classList.add('active');
//             }
//         });
//     });

//     // Add event listener to handle clicks outside of tabs
//     document.addEventListener('click', handleClickOutsideTabs);
// });

// function initializeSkillsTab() {
//     console.log('Skills tab script initialized');

//     const skillsLinks = document.querySelectorAll('#skills .skills-tab-links'); // Select all skills tab links
//     const allTabContents = document.querySelectorAll('.skills-tab-contents'); // Select all tab content containers
//     const awsIcon = document.querySelector('.aws-icon'); // Select AWS icon
//     const awsMoreIcons = document.getElementById('aws-more-icons'); // Select AWS more icons container

//     console.log('Skills tab initialized');
//     console.log('Skills links:', skillsLinks);
//     console.log('All tab contents:', allTabContents);
//     console.log('AWS icon:', awsIcon);
//     console.log('AWS more icons container:', awsMoreIcons);

//     // Function to close all skill tabs
//     function closeAllTabs() {
//         console.log('Closing all tabs');
//         allTabContents.forEach(tab => {
//             tab.style.display = 'none';
//             tab.classList.remove('active');
//         });
//         if (awsMoreIcons) {
//             awsMoreIcons.style.display = 'none'; // Hide AWS more icons container
//         }
//     }

//     // Function to handle clicking outside of tabs to close them
//     function handleClickOutsideTabs(event) {
//         if (!event.target.closest('.skills-tab-links') && !event.target.closest('.skills-tab-contents')) {
//             console.log('Clicked outside of tabs, closing all tabs');
//             closeAllTabs();
//         }
//     }

//     // Handle clicking on skill tab links
//     skillsLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor behavior
//             const tabId = this.getAttribute('href').substring(1); // Remove the '#' to get the ID
//             const selectedTabContent = document.getElementById(tabId);

//             console.log(`Clicked on skill tab link: ${tabId}`);
//             console.log('Selected tab content:', selectedTabContent);

//             // Toggle the selected tab
//             if (selectedTabContent.style.display === 'block') {
//                 console.log('Hiding selected tab');
//                 selectedTabContent.style.display = 'none';
//                 selectedTabContent.classList.remove('active');
//             } else {
//                 console.log('Showing selected tab');
//                 closeAllTabs(); // Close all other tabs first
//                 selectedTabContent.style.display = 'block';
//                 selectedTabContent.classList.add('active');
//             }
//         });
//     });

//     // Handle clicking on AWS icon
//     if (awsIcon && awsMoreIcons) {
//         awsIcon.addEventListener('click', function() {
//             console.log('Clicked on AWS icon');
//             if (awsMoreIcons.style.display === 'block') {
//                 console.log('Hiding AWS more icons container');
//                 awsMoreIcons.style.display = 'none';
//             } else {
//                 console.log('Showing AWS more icons container');
//                 awsMoreIcons.style.display = 'block';
//             }
//         });
//     }

//     // Add event listener to handle clicks outside of tabs
//     document.addEventListener('click', handleClickOutsideTabs);
// }

// // Function to load skills.html and initialize the script
// async function loadSkillsContent() {
//     const response = await fetch('src/Skills/skills.html');
//     const content = await response.text();
//     document.getElementById('main-content').innerHTML = content;
//     initializeSkillsTab(); // Initialize the skills tab functionality
// }
async function loadSkillsContent() {
    console.log('Loading skills content...');
    try {
        const response = await fetch('./src/Skills/skills.html'); // Ensure the correct path
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const content = await response.text();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = content;
            initializeSkillsTab(); // Initialize the skills tab functionality after loading content
        } else {
            console.error('Main content container not found');
        }
    } catch (error) {
        console.error('Failed to load skills content:', error);
    }
}

function initializeSkillsTab() {
    console.log('Skills tab script initialized');

    const skillsLinks = document.querySelectorAll('#skills .skills-tab-links'); // Select all skills tab links
    const allTabContents = document.querySelectorAll('.skills-tab-contents'); // Select all tab content containers
    const awsIcon = document.querySelector('.aws-icon'); // Select AWS icon
    const awsMoreIcons = document.getElementById('aws-more-icons'); // Select AWS more icons container
    const scrollingListContainer = document.getElementById('scrolling-list-container'); // Select scrolling list container

    console.log('Skills tab initialized');
    console.log('Skills links:', skillsLinks);
    console.log('All tab contents:', allTabContents);
    console.log('AWS icon:', awsIcon);
    console.log('AWS more icons container:', awsMoreIcons);
    console.log('Scrolling list container:', scrollingListContainer);

    // Function to close all skill tabs
    function closeAllTabs() {
        console.log('Closing all tabs');
        allTabContents.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active');
        });
        if (awsMoreIcons) {
            awsMoreIcons.style.display = 'none'; // Hide AWS more icons container
        }
        if (scrollingListContainer) {
            scrollingListContainer.style.display = 'none'; // Hide the scrolling list container
        }
    }

    // Function to handle clicking outside of tabs to close them
    function handleClickOutsideTabs(event) {
        if (!event.target.closest('.skills-tab-links') && !event.target.closest('.skills-tab-contents')) {
            console.log('Clicked outside of tabs, closing all tabs');
            closeAllTabs();
        }
    }

    // Handle clicking on skill tab links
    skillsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const tabId = this.getAttribute('href').substring(1); // Remove the '#' to get the ID
            const selectedTabContent = document.getElementById(tabId);

            console.log(`Clicked on skill tab link: ${tabId}`);
            console.log('Selected tab content:', selectedTabContent);

            // Toggle the selected tab
            if (selectedTabContent.style.display === 'block') {
                console.log('Hiding selected tab');
                selectedTabContent.style.display = 'none';
                selectedTabContent.classList.remove('active');
            } else {
                console.log('Showing selected tab');
                closeAllTabs(); // Close all other tabs first
                selectedTabContent.style.display = 'block';
                selectedTabContent.classList.add('active');
            }
        });
    });

    // Handle clicking on AWS icon
    if (awsIcon) {
        awsIcon.addEventListener('click', function() {
            console.log('Clicked on AWS icon');
            if (scrollingListContainer.style.display === 'block') {
                console.log('Hiding scrolling list container');
                scrollingListContainer.style.display = 'none'; // Hide the scrolling list container
            } else {
                console.log('Showing scrolling list container');
                scrollingListContainer.style.display = 'block'; // Show the scrolling list container
            }
        });
    }

    // Add event listener to handle clicks outside of tabs
    document.addEventListener('click', handleClickOutsideTabs);
}
