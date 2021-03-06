// All used selectors
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const themeLine = document.querySelector(".theme-line");
const moon = document.querySelector(".moon-container");
const root = document.documentElement;

const mailButton = document.querySelector("#submit-button");

//all event listener
burger.addEventListener("click", burgerToggler);

moon.addEventListener("click", themeToggler);
themeLine.addEventListener("click", themeToggler);


mailButton.addEventListener('click', (e)=> {
    e.preventDefault();
    sendMail();
});

//all the function

//hamburger animaiton
function burgerToggler(){
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
}

//change the theme of the website
let mode = localStorage.getItem('mode');
if((mode === null) || (mode === 'day')){
    setTheme('day');
}else{
    themeToggler();
}

function themeToggler(){
    moon.classList.toggle("moon-container-active");

    if(moon.classList.contains("moon-container-active")){
        setTheme('night');
    }else {
        setTheme('day');
    }
}

function setTheme(mode){
    if(mode === 'night'){
        root.style.setProperty("--bgColor","#0F2027");
        root.style.setProperty("--textColor","white"); 
    }else {
        root.style.setProperty("--bgColor","#ece9e6");
        root.style.setProperty("--textColor","black");
    }
    localStorage.setItem("mode",mode);
}

function sendMail() {
    console.log("Email sending");
    Email.send({
        Host : "smtp.gmail.com",
        Username : "edwinjarvis004@gmail.com",
        Password : "L!o Mess!",
        To : "edwinjarvis004@gmail.com",
        From : "edwinjarvis004@gmail.com",
        Subjct : "Test",
        Body : "Sending from JS. <br><br>That was easy!!!"
    }).then((message)=>{
        alert("Mail send Successfully.")
    });

    console.log("Email sent.");  
}



