var tablinks= document.getElementsByClassName("tab-links")
var tabcontents= document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var skillstablinks= document.getElementsByClassName("skills-tab-links")
var skillstabcontents= document.getElementsByClassName("skills-tab-contents")

function skillsopentab(tabname){
    for(tablink of skillstablinks){
        tablink.classList.remove("skills-active-link");
    }
    for(tabcontent of skillstabcontents){
        tabcontent.classList.remove("skills-active-tab");
    }
    event.currentTarget.classList.add("skills-active-link");
    document.getElementById(tabname).classList.add("skills-active-tab");
}

const texts = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "DevOps", "Data Scientist"];
let currentText = 0;
let letterIndex = 0;

function typeText() {
    if (letterIndex < texts[currentText].length) {
        document.getElementById('dynamic-text').innerHTML += texts[currentText].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, 75); // Adjust typing speed
    } else {
        setTimeout(deleteText, 1000); // Wait before starting to delete text
    }
}

function deleteText() {
    if (letterIndex > 0) {
        document.getElementById('dynamic-text').innerHTML = texts[currentText].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteText, 75); // Adjust deleting speed
    } else {
        currentText = (currentText + 1) % texts.length; // Move to the next text or loop back
        setTimeout(typeText, 250); // Wait before starting to type new text
    }
}

document.addEventListener("DOMContentLoaded", function() { // Start typing after the DOM is fully loaded
    setTimeout(typeText, 500); // Start typing 1 second after the page loads
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});