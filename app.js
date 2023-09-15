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

