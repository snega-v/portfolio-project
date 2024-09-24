var   tablinks=document.getElementsByClassName("tab-links");
var   tabcontents=document.getElementsByClassName("tab-contents");
/*it is about a dynamic clicking*/
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function openmenu() {
    const sidemenu = document.getElementById("sidemenu");
    // Toggle the display property between block and none
    if (sidemenu.style.display === "block") {
        sidemenu.style.display = "none";
    } else {
        sidemenu.style.display = "block";
    }
}
