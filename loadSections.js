document.addEventListener("DOMContentLoaded", async function() {
    const sections = [
        './src/Home/home.html',
        './src/About/about.html',
        './src/Experience/experience.html',
        './src/Skills/skills.html',
        './src/Projects/projects.html',
        './src/Research/research.html',
        './src/Achievements/achievements.html',
        './src/Contact/contact.html'
    ];

    const mainContent = document.getElementById('main-content');

    for (const section of sections) {
        try {
            const response = await fetch(section);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const html = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Process and move each <link> to <head>
            tempDiv.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
                const correctLink = document.createElement('link');
                correctLink.rel = 'stylesheet';
                correctLink.href = section.replace('.html', '.css'); // Adjusts the path based on the section
                document.head.appendChild(correctLink);
            });

            // Append HTML to main content
            mainContent.appendChild(tempDiv);

            // Initialize particlesJS after home.html is loaded
            if (section.includes('Home/home.html')) {
                particlesJS('particles-js', {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                });
            }

            console.log(`Loaded content from ${section}`);
        } catch (error) {
            console.error('Error loading section:', error);
        }
    }
});
