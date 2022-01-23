const startButton = document.querySelector('.start_btn');
const shareButton = document.querySelector('.share_btn');
const closeButton = document.querySelector('.close_btn');

const modal = document.querySelector('.modal_wrap');
const loading = document.querySelector('.loading');

const userHour = document.querySelector('#time');
const userMinute = document.querySelector('#minute');

const currentTime = document.querySelector('.current_time');
const gohomeTime = document.querySelector('.gohome_time');

// 1초마다 현재 시각 갱신
const showClock = () => {
    getClock();
    setInterval(getClock, 1000);
}

// 1초마다 남은 시간 갱신
const startTimer = () => setInterval(calculator, 1000);


// 현재 시각을 출력하는 함수
const getClock = () => {
    let date1 = new Date();
    let hours = date1.getHours();
    let minutes = date1.getMinutes();
    let seconds = date1.getSeconds();

    currentTime.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes <10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 퇴근 시간 - 현재 시간으로 남은 시간을 계산하는 함수
const calculator = () => {
    let date2 = new Date;
    let date3 = new Date;
    let userTime = date3.setHours(Number(userHour.value), Number(userMinute.value), 0, 0);
    let currTime = date2.getTime();

    if (userTime < currTime) {
        if (modal.style.display === 'flex') {
            document.querySelector('#modal h2').innerHTML = `♥퇴근완료♥`;
        } else {
            alert('현재 이후 시간을 입력해주세요.');
        }
    } else {
        let diffMsec = userTime - currTime;
        let diffSec = parseInt(diffMsec / 1000)
        let diffMin = parseInt(diffSec / 60);
        let diffHour = parseInt(diffMin / 60);

        let gohomeSeconds = parseInt(diffSec % 60);
        let gohomeMinutes = parseInt(diffMin % 60);
        let gohomeHours = diffHour;

        gohomeTime.innerHTML = `
            ${gohomeHours < 10 ? `0${gohomeHours}` : gohomeHours}:${gohomeMinutes <10 ? `0${gohomeMinutes}` : gohomeMinutes}:${gohomeSeconds <10 ? `0${gohomeSeconds}` : gohomeSeconds}
        `;
        return true;
    }
}

const openModal = () => {
    if(calculator()) {
        loading.style.display = 'flex';
        document.querySelector('#modal h2').innerHTML = `퇴근까지`;
        setTimeout(() => {
            loading.style.display = 'none';
            modal.style.display = 'flex';
        }, 2000);
        startTimer();
    }
}

const closeModal = () => {
    modal.style.display = 'none';
    window.location.reload();
}

window.onclick = (event) => { 
    event.target === modal ? closeModal() : '';
}

showClock();

const copyTime = () => {
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = '나 퇴근까지 '+gohomeTime.innerText+' 남았어';

    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert('퇴근시간이 복사되었습니다.')
}
    


startButton.addEventListener('click', openModal);
shareButton.addEventListener('click', copyTime);
closeButton.addEventListener('click', closeModal);

