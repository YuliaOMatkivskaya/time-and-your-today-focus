const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');


function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet(){
    let today = new Date();
    let hour = today.getHours();

    if(hour<12){
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Morning';
    }else if (hour<18){
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Afternoon';
    }else{
        document.body.style.backgroundImage = "url('img/night.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

function setName(e){
    if(e.type ==='keypress'){
        if(e.which ==13 || e.keyCode==13){
            //press enter
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function setFocus(e){
    if(e.type ==='keypress'){
        if(e.which ==13 || e.keyCode==13){
            //press enter
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();