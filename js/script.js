const startButton = document.querySelector('.start_btn');
const shareButton = document.querySelector('.share_btn');
const closeButton = document.querySelector('.close_btn');

const modal = document.querySelector('.modal_wrap');
const loading = document.querySelector('.loading');

const userHour = document.querySelector('#time');
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
    let userTime = date3.setHours(Number(userHour.value), Number(userMinute.value), 0, 0);
    let currTime = date2.getTime();

    if (userTime < currTime) {
        alert('더 큰 시간을 입력해주세요.')
        return false;
    } else {
        let diffMsec = userTime - currTime;
        let diffSec = parseInt(diffMsec / 1000)
        let diffMin = parseInt(diffSec / 60);
        let diffHour = parseInt(diffMin / 60);

        let gohomeSeconds = parseInt(diffSec % 60);
        let gohomeMinutes = parseInt(diffMin % 60);
        let gohomeHours = diffHour;

        gohomeTime.innerHTML = `
            ${gohomeHours < 10 ? `0${gohomeHours}` : gohomeHours}:
            ${gohomeMinutes <10 ? `0${gohomeMinutes}` : gohomeMinutes}:
            ${gohomeSeconds <10 ? `0${gohomeSeconds}` : gohomeSeconds}
        `;
        return true;
    }
}

function openModal() {
    if(calculator()) {
        loading.style.display = 'flex';
        setTimeout(function () {
            loading.style.display = 'none';
            modal.style.display = 'flex';
        }, 2000);
    }
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

