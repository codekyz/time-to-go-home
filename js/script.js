const startButton = document.querySelector('.start_btn');
const shareButton = document.querySelector('.share_btn');
const closeButton = document.querySelector('.close_btn');

const modal = document.querySelector('.modal_wrap');
const loading = document.querySelector('.loading');

const userTime = document.querySelector('#time');
const userMinute = document.querySelector('#minute');

const currentTime = document.querySelector('.current_time');
const gohomeTime = document.querySelector('.gohome_time');


function showClock() {
    getClock();
    setInterval(getClock, 1000);
}

function getClock() {
    let date1 = new Date();
    let hours = date1.getHours();
    let minutes = date1.getMinutes();
    let seconds = date1.getSeconds();

    currentTime.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes <10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function calculator() {
    let date2 = new Date;
    let date3 = new Date;
    let diffMsec = date3.setHours(Number(userTime.value), Number(userMinute.value), 0, 0) - date2.getTime();
    let diffMin = parseInt(diffMsec / 1000 / 60);
    let diffHour = parseInt(diffMin / 1000 / 60 / 60);

    gohomeTime.innerHTML = `${diffHour < 10 ? `0${diffHour}` : diffHour}:${diffMin <10 ? `0${diffMin}` : diffMin}`;
}

function openModal() {
    calculator();
    loading.style.display = 'flex';
    setTimeout(function () {
        loading.style.display = 'none';
        modal.style.display = 'flex';
    }, 2000);
}

function closeModal() {
    modal.style.display = 'none';
}

showClock();

// function copyTime() {
    
// }


startButton.addEventListener('click', openModal);
// shareButton.addEventListener('click', copyTime);
closeButton.addEventListener('click', closeModal);

