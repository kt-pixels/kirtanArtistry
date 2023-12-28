const hamburger = document.querySelector('[data-ham-burger]');
const navigation = document.querySelector('[data-nav-bar]');
const body = document.querySelector('[data-body]')



hamburger.addEventListener('click', function(){
    if (navigation.style.transform === "translateX(-310px)" || navigation.style.transform === "") {
        navigation.style.transform = 'translateX(0px)';
        navigation.style.boxShadow ='5px 0px 20px #171717';
    }else{
        navigation.style.transform = 'translateX(-310px)';
        navigation.style.boxShadow ='none';
    }
})


// TOP BUTTON

const topButton = document.querySelector('[data-top-button]');

window.onscroll = ()=> {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        topButton.style.opacity = '1';
    }else{
        topButton.style.opacity = '0';
    }
}

topButton.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


const contactForm = document.querySelector('[data-contact-form]');
const contact = document.querySelector('[data-contact]');
const Icon = document.querySelector('[data-icon]');

contact.addEventListener('click', ()=>{
    if(contactForm.style.transform === 'scale(0)' || contactForm.style.transform === ''){
        contactForm.style.transform = 'scale(1)';
    }else {
        contactForm.style.transform = 'scale(0)';
    }
})

Icon.addEventListener('click', ()=>{
    contactForm.style.transform = 'scale(0)';
})

// FORM VALIDATION 

function validateForm() {
    var name = document.forms["contactForm"]["fisrtname"].value;
    var lastname = document.forms["contactForm"]["lastname"].value;
    var email = document.forms["contactForm"]["email"].value;
    var number = document.forms["contactForm"]["number"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (lastname === "") {
        alert("Last Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (number === "") {
        alert("Number must be filled out");
        return false;
    }

    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}