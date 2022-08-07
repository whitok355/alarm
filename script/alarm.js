"use strict";

let btnsAlarms = document.querySelectorAll('.b-btn-alarm');
let alarmBLock = document.querySelector('.b-alarm');
let audio = new Audio(`sound/05434.mp3`)
let timeCheck;
let alarmValue;

const startAlarm = () => {
    audio.play()
}

const confirmTime = () => {
    let hours = `${('0' + now.getHours()).slice(-2)}`;
    let minutes = `${('0' + new Date().getMinutes()).slice(-2)}`;
    if(hours == `${alarmValue.slice(0, 2)}` && minutes == `${alarmValue.slice(3,5)}`){
        startAlarm()
    }

}
const createLinesAlarm = () =>{
    if(searcher(`clock-main`)){
        let lines = createLines('alarm', 'time');
        lines.style.transform = `rotate(${(parseInt(alarmValue.slice(0, 2) * 30)) + (parseInt(alarmValue.slice(3, 5) * 0.5))}deg)`
        if(searcher(`clock-main-classic`)){
            document.querySelector(`.clock-container-classic`).insertAdjacentElement('beforeend', lines)
        }
        if(searcher(`clock-main-modern`)){
            document.querySelector(`.clock-container-modern`).insertAdjacentElement('beforeend', lines)
        }
        if(searcher(`clock-main-sport`)){
            document.querySelector(`.clock-container-sport`).insertAdjacentElement('beforeend', lines)
        }
        timeCheck = setInterval(confirmTime, '1000')
    }
}
const renderAlarm = () =>{
    if(searcher(`lines-alarm`)){
        document.querySelector(`.lines-alarm`).remove()
        createLinesAlarm()
    } else{
        createLinesAlarm()
    }
}

const confirmAlarm = () =>{
    document.querySelector(`.b-btn-alarm#confirm`).addEventListener('click', ()=>{
        alarmValue = document.querySelector(`.alarm-input`).value;
        renderAlarm()
    })
}

const addAlarm = () => {
    let container = document.createElement('div');
    container.classList.add('alarm-container');
    let fieldAlarm = document.createElement('input');
    let btn = document.createElement('div');
    fieldAlarm.classList.add('alarm-input');
    fieldAlarm.setAttribute('type', 'time')
    btn.classList.add('b-btn-alarm');
    btn.setAttribute('id', 'confirm')
    btn.innerHTML = `Установите время будильника`;
    container.appendChild(fieldAlarm)
    container.appendChild(btn);
    alarmBLock.insertAdjacentElement('beforeend', container)
    confirmAlarm()
}

const removeAlarm = () =>{
        if(alarmBLock.childNodes.length < 1){
            alarmBLock.insertAdjacentElement('beforeend', createErr(`Будильник не установлен`))
        } else{
            alarmBLock.childNodes.forEach(el => el.remove())
            if(searcher(`lines-alarm`)){
                document.querySelector(`.lines-alarm`).remove()
            }    
        }
}

const setAlarm = (e) =>{
    if(e.target.id == 'setAlarm'){
        if(alarmBLock.childNodes.length < 1){
            addAlarm();
        } 
        let err = document.querySelector(`.err`);
        if(err) {
            err.remove()
            addAlarm();
        }
    }
    if(e.target.id == 'removeAlarm'){
        removeAlarm()
    }
}

btnsAlarms.forEach(btn => btn.addEventListener('click', setAlarm))
