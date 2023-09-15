const hamburger = document.querySelector('.bars');
const navigation = document.querySelector('nav');
const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');



hamburger.addEventListener('click', function(){
    if (navigation.style.display === "none" || navigation.style.display === "") {
        navigation.style.display = 'block';
        bar1.style.transform = 'rotate(45deg)';
        bar1.style.marginTop = '22px'
        bar2.style.display = 'none';
        bar3.style.transform = 'rotate(-45deg)';
        bar3.style.marginTop = '-2px'
    }else{
        navigation.style.display = 'none'
        bar1.style.transform = 'rotate(0deg)';
        bar1.style.marginTop = '10px'
        bar2.style.display = 'block';
        bar3.style.transform = 'rotate(0deg)';
        bar3.style.marginTop = '10px'
    }
})

// document.addEventListener('click', function(clickOutSide){
//     const contain = clickOutSide.target;
//     if(!hamburger.contains(contain)){
//         navigation.style.display = 'none'
//         bar1.style.transform = 'rotate(0deg)';
//         bar1.style.marginTop = '10px'
//         bar2.style.display = 'block';
//         bar3.style.transform = 'rotate(0deg)';
//         bar3.style.marginTop = '10px'
//     }
// })


// ICONS STYLE CHANGING 
const firstIcon = document.querySelector('.icons i:nth-child(1)');
const secondIcon = document.querySelector('.icons i:nth-child(2)');

firstIcon.addEventListener('click', function(){
    if (firstIcon.classList.contains('fa-heart')) {
        firstIcon.classList.remove('fa-heart');
        firstIcon.classList.add('fa-heartbeat');
        secondIcon.style.color = '';
    }
})

secondIcon.addEventListener('click', function(){
    if(secondIcon.style.color === ""){
        secondIcon.style.color = 'blue';
    }
})


// FORM VALIDATION 

function validateForm() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var message = document.forms["contact"]["Message"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}